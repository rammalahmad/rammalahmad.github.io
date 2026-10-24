(function () {
  "use strict";

  const data = window.CIVIQUE_DATA;
  const version = "2026.10.24-officiel-exigeant-fr";
  const errors = [];
  const normalize = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr").replace(/[^a-z0-9]/g, "");
  const groups = new Map();
  const aliases = new Map();
  const original = new Map((data && data.questions || []).map((question) => [question.id, question]));
  (data && data.questions || []).filter((question) => question.official).forEach((question) => {
    const key = normalize(question.prompt);
    if (!groups.has(key)) groups.set(key, { question, ids: [] });
    const group = groups.get(key);
    group.ids.push(question.id);
    aliases.set(question.id, group.question.id);
  });
  const questions = Array.from(groups.values()).map((group) => group.question);
  const variants = new Map();
  const packs = window.CIVIQUE_OFFICIAL_CHALLENGE_PACKS || [];
  packs.forEach((pack) => {
    (pack.questions || []).forEach((entry) => {
      const question = original.get(entry.id);
      if (!question || !question.official || aliases.get(entry.id) !== entry.id || variants.has(entry.id)) {
        errors.push("Variante officielle invalide ou répétée : " + entry.id);
        return;
      }
      if (entry.correct !== question.correct) errors.push("Bonne réponse officielle modifiée : " + entry.id);
      const choices = [question.correct, ...(entry.wrong || [])];
      if (!Array.isArray(entry.wrong) || entry.wrong.length !== 3 || new Set(choices.map(normalize)).size !== 4) errors.push("Choix exigeants invalides : " + entry.id);
      if (!entry.wrongReasons || (entry.wrong || []).some((choice) => typeof entry.wrongReasons[choice] !== "string" || entry.wrongReasons[choice].length < 18)
        || new Set(Object.values(entry.wrongReasons || {})).size !== 3 || Object.keys(entry.wrongReasons || {}).length !== 3) errors.push("Corrections exigeantes incomplètes : " + entry.id);
      if (!entry.explanation || !entry.hook) errors.push("Explication exigeante absente : " + entry.id);
      variants.set(entry.id, {
        wrong: Array.from(entry.wrong || []),
        wrongReasons: { ...entry.wrongReasons },
        explanation: entry.explanation,
        hook: entry.hook
      });
    });
  });
  if (questions.length !== 258 || variants.size !== questions.length || packs.length !== 3) errors.push("Les 258 variantes officielles n’ont pas toutes été chargées.");
  questions.forEach((question) => {
    if (!variants.has(question.id)) errors.push("Choix exigeants absents : " + question.id);
  });
  aliases.forEach((id, alias) => {
    const variant = variants.get(id);
    const question = original.get(alias);
    if (variant && new Set([question.correct, ...variant.wrong].map(normalize)).size !== 4) errors.push("Choix du doublon officiel invalides : " + alias);
  });

  const shuffle = (values) => {
    const result = values.slice();
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  const hasSeen = (stat) => Boolean(stat && Number(stat.seen) > 0);
  const balanced = (pool, count) => {
    const weights = { principles: 8, rights: 8, history: 6, institutions: 4, society: 2 };
    const queues = Object.keys(weights).map((theme) => ({ theme, picked: 0, questions: shuffle(pool.filter((question) => question.theme === theme)) }));
    const result = [];
    while (result.length < Math.min(count, pool.length)) {
      const available = shuffle(queues.filter((queue) => queue.questions.length));
      available.sort((a, b) => a.picked / weights[a.theme] - b.picked / weights[b.theme]);
      const queue = available[0];
      result.push(queue.questions.shift());
      queue.picked += 1;
    }
    return result;
  };

  function summary(stats) {
    stats = stats || {};
    const seen = questions.filter((question) => hasSeen(stats[question.id]));
    const correct = seen.filter((question) => stats[question.id].lastCorrect === true);
    return {
      total: questions.length,
      seen: seen.length,
      remaining: questions.length - seen.length,
      correct: correct.length,
      mistakes: seen.length - correct.length,
      attempts: seen.reduce((sum, question) => sum + Number(stats[question.id].seen), 0)
    };
  }

  function select(stats, count, reviewOnly) {
    stats = stats || {};
    const limit = Math.min(questions.length, Math.max(1, Math.floor(Number(count) || 20)));
    const unseen = questions.filter((question) => !hasSeen(stats[question.id]));
    if (!reviewOnly && unseen.length) return balanced(unseen, limit);
    let pool = questions.filter((question) => hasSeen(stats[question.id]) && stats[question.id].lastCorrect !== true);
    if (!reviewOnly) pool = pool.concat(questions.filter((question) => hasSeen(stats[question.id]) && stats[question.id].lastCorrect === true));
    return shuffle(pool).sort((a, b) => {
      const left = stats[a.id];
      const right = stats[b.id];
      return Number(left.lastCorrect === true) - Number(right.lastCorrect === true)
        || left.correct / left.seen - right.correct / right.seen
        || Number(left.lastSeen || 0) - Number(right.lastSeen || 0);
    }).slice(0, limit);
  }

  function record(stats, id, correct) {
    const canonical = aliases.get(id);
    if (!canonical) return;
    const previous = stats[canonical] || {};
    stats[canonical] = {
      seen: Number(previous.seen || 0) + 1,
      correct: Number(previous.correct || 0) + Number(correct),
      wrong: Number(previous.wrong || 0) + Number(!correct),
      lastCorrect: Boolean(correct),
      lastSeen: Date.now()
    };
  }

  function snapshots(selected) {
    const saved = {};
    selected.forEach((question) => {
      const variant = variants.get(aliases.get(question.id));
      if (variant) saved[question.id] = {
        wrong: variant.wrong.slice(),
        wrongReasons: { ...variant.wrongReasons },
        explanation: variant.explanation,
        hook: variant.hook
      };
    });
    return saved;
  }

  function questionForSession(id, session) {
    const question = original.get(id);
    const saved = session && session.questionVariants && session.questionVariants[id];
    return question && saved ? { ...question, ...saved, id: question.id, prompt: question.prompt, correct: question.correct, challenge: true } : question;
  }

  function displayQuestion(id) {
    const question = original.get(id);
    const variant = variants.get(aliases.get(id));
    return question && variant ? { ...question, ...variant, challenge: true } : question;
  }

  window.CIVIQUE_OFFICIAL_TRAINING = { version, errors, questions, aliases, variants, summary, select, record, snapshots, questionForSession, displayQuestion };
})();
