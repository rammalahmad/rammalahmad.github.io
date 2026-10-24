/*
 * Rotation locale des examens blancs : les questions proposées sont mémorisées
 * indépendamment des réponses et scores. Aucun état utilisateur n’est envoyé.
 */
(function () {
  "use strict";

  const blueprint = window.CIVIQUE_MOCK_BLUEPRINT;
  const training = window.CIVIQUE_OFFICIAL_TRAINING;
  const version = "2026.10.24-rotation-fr";
  const topics = blueprint && Array.isArray(blueprint.topics) ? blueprint.topics : [];
  const eligibleIds = new Set(topics.flatMap((topic) => topic.questionIds));
  const storedAliases = new Map(Array.from(eligibleIds, (id) => [id, [id]]));
  if (training && training.aliases) training.aliases.forEach((canonical, id) => {
    if (id !== canonical && storedAliases.has(canonical)) storedAliases.get(canonical).push(id);
  });
  const errors = [];
  if (!blueprint) errors.push("Le plan de quotas est absent.");
  if (!training || !training.aliases) errors.push("Les identifiants officiels n’ont pas pu être chargés.");

  function empty() {
    return { version, attempts: 0, questions: {}, lastQuestionIds: [], lastSessionId: "" };
  }

  function canonicalId(value) {
    const id = typeof value === "string" ? value : value && value.id;
    if (typeof id !== "string") return null;
    const canonical = training && training.aliases && training.aliases.get(id) || id;
    return eligibleIds.has(canonical) ? canonical : null;
  }

  function canonicalIds(values) {
    const result = [];
    const seen = new Set();
    if (!Array.isArray(values)) return result;
    for (const value of values) {
      const id = canonicalId(value);
      if (!id || seen.has(id)) continue;
      seen.add(id);
      result.push(id);
      if (result.length === 40) break;
    }
    return result;
  }

  function hasMemory(value) {
    return Boolean(value && typeof value === "object" && !Array.isArray(value)
      && value.version === version && Number.isSafeInteger(value.attempts) && value.attempts >= 0
      && value.questions && typeof value.questions === "object" && !Array.isArray(value.questions));
  }

  function normalize(value) {
    const result = empty();
    if (!hasMemory(value)) return result;
    result.attempts = value.attempts;
    for (const id of eligibleIds) {
      for (const storedId of storedAliases.get(id)) {
        const stat = value.questions[storedId];
        if (!stat || !Number.isSafeInteger(stat.count) || stat.count < 1) continue;
        const lastAttempt = Number.isSafeInteger(stat.lastAttempt) && stat.lastAttempt >= 0
          ? Math.min(stat.lastAttempt, result.attempts) : 0;
        const previous = result.questions[id];
        // Les clés d’un ancien alias ne doivent pas créditer deux fois le même
        // énoncé. Garder le maximum protège aussi les imports partiels.
        result.questions[id] = {
          count: Math.max(previous ? previous.count : 0, stat.count),
          lastAttempt: Math.max(previous ? previous.lastAttempt : 0, lastAttempt)
        };
      }
    }
    result.lastQuestionIds = canonicalIds(value.lastQuestionIds);
    result.lastSessionId = typeof value.lastSessionId === "string" ? value.lastSessionId.slice(0, 200) : "";
    if (result.lastQuestionIds.length) {
      result.attempts = Math.max(1, result.attempts);
      for (const id of result.lastQuestionIds) {
        const stat = result.questions[id];
        result.questions[id] = { count: stat ? stat.count : 1, lastAttempt: result.attempts };
      }
    }
    return result;
  }

  function sameDraw(first, second) {
    if (first.length !== second.length) return false;
    const ids = new Set(second);
    return first.every((id) => ids.has(id));
  }

  function record(value, session) {
    const result = normalize(value);
    if (!session || session.mode && session.mode !== "mock") return result;
    const ids = canonicalIds(Array.isArray(session.questionIds) ? session.questionIds
      : Array.isArray(session.answers) ? session.answers : []);
    if (!ids.length) return result;
    const sessionId = typeof session.id === "string" ? session.id.slice(0, 200) : "";
    if (sessionId && sessionId === result.lastSessionId && sameDraw(ids, result.lastQuestionIds)) return result;
    result.attempts = Math.min(Number.MAX_SAFE_INTEGER, result.attempts + 1);
    for (const id of ids) {
      const stat = result.questions[id];
      result.questions[id] = {
        count: Math.min(Number.MAX_SAFE_INTEGER, (stat ? stat.count : 0) + 1),
        lastAttempt: result.attempts
      };
    }
    result.lastQuestionIds = ids;
    result.lastSessionId = sessionId;
    return result;
  }

  function read(saved, active) {
    const state = saved && typeof saved === "object" ? saved : {};
    let result = hasMemory(state.mockRotation) ? normalize(state.mockRotation) : empty();
    if (!hasMemory(state.mockRotation)) {
      const history = Array.isArray(state.mocks) ? state.mocks : [];
      history.forEach((mock, index) => {
        if (!mock || typeof mock !== "object") return;
        result = record(result, {
          id: "historique-" + index + "-" + String(mock.startedAt || mock.finishedAt || 0),
          mode: "mock",
          answers: mock.answers
        });
      });
    }
    const session = arguments.length > 1 ? active : state.activeSession;
    if (session && session.mode === "mock") result = record(result, session);
    return result;
  }

  function shuffle(values, random) {
    const result = Array.from(values);
    for (let index = result.length - 1; index > 0; index--) {
      const other = Math.floor(random() * (index + 1));
      [result[index], result[other]] = [result[other], result[index]];
    }
    return result;
  }

  function draw(value, random = Math.random) {
    if (errors.length || !blueprint || blueprint.errors.length) return [];
    const memory = normalize(value);
    const previous = new Set(memory.lastQuestionIds);
    const prompts = new Set();
    const result = [];
    for (const topic of topics) {
      const pool = shuffle(topic.questions, random).sort((first, second) => {
        const firstStat = memory.questions[first.id] || { count: 0, lastAttempt: 0 };
        const secondStat = memory.questions[second.id] || { count: 0, lastAttempt: 0 };
        return Number(previous.has(first.id)) - Number(previous.has(second.id))
          || firstStat.count - secondStat.count || firstStat.lastAttempt - secondStat.lastAttempt;
      });
      const selected = [];
      for (const question of pool) {
        const key = String(question.prompt || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
          .toLocaleLowerCase("fr").replace(/[^a-z0-9]/g, "");
        if (prompts.has(key)) continue;
        prompts.add(key);
        selected.push(question);
        if (selected.length === topic.count) break;
      }
      if (selected.length !== topic.count) return [];
      result.push(...selected);
    }
    return result.length === 40 ? shuffle(result, random) : [];
  }

  function summary(value) {
    const memory = normalize(value);
    const result = { attempts: memory.attempts, officialSeen: 0, officialTotal: 0, scenarioSeen: 0, scenarioTotal: 0 };
    for (const topic of topics) {
      const prefix = topic.kind === "official" ? "official" : "scenario";
      result[prefix + "Total"] += topic.questionIds.length;
      result[prefix + "Seen"] += topic.questionIds.filter((id) => memory.questions[id] && memory.questions[id].count > 0).length;
    }
    return result;
  }

  window.CIVIQUE_MOCK_ROTATION = Object.freeze({
    version, errors: Object.freeze(errors), empty, normalize, read, record, draw, summary
  });
})();
