(function () {
  "use strict";

  const DATA = window.CIVIQUE_DATA;
  const ORAL = window.CIVIQUE_ENTRETIEN || null;
  const QUESTION_INDEX = new Map((DATA && DATA.questions || []).map((question) => [question.id, question]));
  const SOURCE_INDEX = new Map((DATA && DATA.sources || []).map((source) => [source.id, source]));
  const STORAGE_KEY = "civique-coach-state-v1";
  const ROUTES = {
    dashboard: ["Votre programme", "Aujourd’hui"],
    learn: ["Histoire, valeurs et vie quotidienne", "Découvrir"],
    practice: ["Séances adaptatives", "S’entraîner"],
    mock: ["Conditions réelles", "Examen blanc"],
    review: ["Mémoriser durablement", "Réviser"],
    library: ["Tous les repères", "Explorer"],
    settings: ["Privé et hors ligne", "Réglages et sources"],
    quiz: ["Séance en cours", "Entraînement"],
    results: ["Votre performance", "Résultats"],
    lesson: ["Leçon thématique", "Apprendre"]
  };

  const $ = (selector, root) => (root || document).querySelector(selector);
  const $$ = (selector, root) => Array.from((root || document).querySelectorAll(selector));
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const dayMs = 86400000;
  let currentRoute = "dashboard";
  let lessonFilter = "all";
  let libraryLimit = 40;
  let quizTimer = null;
  let activeSession = null;
  let lastResults = null;
  let pendingConfirm = null;
  let oralLibraryLimit = 40;
  let activeOralSession = null;
  let oralPrepInterval = null;
  let oralPrepRemaining = 90;

  function normalizeDisplayName(value) {
    return String(value || "").trim().replace(/\s+/g, " ").slice(0, 40);
  }

  function defaultState() {
    return {
      schema: 4,
      createdAt: Date.now(),
      metadata: {
        displayName: "",
        profileCreatedAt: 0,
        profileUpdatedAt: 0
      },
      prefs: {
        dailyGoal: 20,
        englishHints: true,
        reduceMotion: false,
        theme: "light"
      },
      questionStats: {},
      activity: {},
      mocks: [],
      completedLessons: [],
      bookmarks: [],
      activeSession: null,
      oralStats: {},
      oralNotes: {},
      oralBookmarks: [],
      activeOralSession: null
    };
  }

  function loadState() {
    const base = defaultState();
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved || typeof saved !== "object") return base;
      return {
        ...base,
        ...saved,
        schema: base.schema,
        metadata: {
          ...base.metadata,
          ...(saved.metadata || {}),
          displayName: normalizeDisplayName(saved.metadata && saved.metadata.displayName)
        },
        prefs: { ...base.prefs, ...(saved.prefs || {}) },
        questionStats: saved.questionStats || {},
        activity: saved.activity || {},
        mocks: Array.isArray(saved.mocks) ? saved.mocks : [],
        completedLessons: Array.isArray(saved.completedLessons) ? saved.completedLessons : [],
        bookmarks: Array.isArray(saved.bookmarks) ? saved.bookmarks : [],
        activeSession: saved.activeSession || null,
        oralStats: saved.oralStats || {},
        oralNotes: saved.oralNotes || {},
        oralBookmarks: Array.isArray(saved.oralBookmarks) ? saved.oralBookmarks : [],
        activeOralSession: saved.activeOralSession || null
      };
    } catch (error) {
      console.warn("Impossible de lire la progression enregistrée", error);
      return base;
    }
  }

  let state = loadState();

  function saveState() {
    try {
      state.activeSession = activeSession;
      state.activeOralSession = activeOralSession;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      toast("La progression n’a pas pu être enregistrée dans ce navigateur.");
    }
  }

  function renderGreeting() {
    const name = normalizeDisplayName(state.metadata.displayName);
    $("#dashboard-heading").textContent = name ? "Bonjour, " + name + "." : "Bonjour !";
  }

  function saveDisplayName(value) {
    const name = normalizeDisplayName(value);
    if (!name) return false;
    const now = Date.now();
    state.metadata.displayName = name;
    state.metadata.profileCreatedAt = state.metadata.profileCreatedAt || now;
    state.metadata.profileUpdatedAt = now;
    saveState();
    renderGreeting();
    return true;
  }

  function showProfileDialog() {
    const dialog = $("#profile-dialog");
    if (dialog.open) return;
    $("#profile-name").value = normalizeDisplayName(state.metadata.displayName);
    $("#profile-error").textContent = "";
    dialog.showModal();
    setTimeout(() => $("#profile-name").focus(), 0);
  }

  function localDateKey(timestamp) {
    const d = timestamp ? new Date(timestamp) : new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function questionById(id) {
    return QUESTION_INDEX.get(id);
  }

  function questionKindLabel(question) {
    const label = question.official ? "Énoncé officiel" : question.type === "scenario" ? "Mise en situation d’entraînement" : "QCM des fiches et du Livret";
    return label + (isAdvanced(question) ? " · Approfondissement" : "");
  }

  function isAdvanced(question) {
    return question.level === "approfondissement" || question.depth === "approfondissement" || question.priority === "extension";
  }

  function hasSeen(question) {
    const stat = state.questionStats[question.id];
    return Boolean(stat && stat.seen > 0);
  }

  function matchesQuestionStatus(question, status) {
    const stat = state.questionStats[question.id];
    if (status === "unseen") return !hasSeen(question);
    if (status === "due") return hasSeen(question) && stat.due <= Date.now();
    if (status === "learning") return hasSeen(question) && masteryFor(question) < 80;
    if (status === "mastered") return masteryFor(question) >= 80;
    return true;
  }

  function questionStatusLabel(question) {
    if (!hasSeen(question)) return "Jamais vu";
    const stat = state.questionStats[question.id];
    if (stat.due <= Date.now()) return "À revoir · maîtrise " + masteryFor(question) + " %";
    return (masteryFor(question) >= 80 ? "Maîtrisé" : "À consolider") + " · " + stat.correct + "/" + stat.seen + " réponses justes";
  }

  function matchesQuestionSource(question, selection) {
    return selection === "all"
      || (selection === "official" && question.official)
      || (selection === "scenario" && question.type === "scenario")
      || (selection === "study" && question.type === "study")
      || (selection === "bookmarked" && state.bookmarks.includes(question.id))
      || (["livret", "fiche"].includes(selection) && question.sourceIds.some((id) => SOURCE_INDEX.get(id).kind === selection));
  }

  function sourceHref(source) {
    if (source.kind !== "livret" || !source.localPath) return source.url;
    const page = Number(Array.isArray(source.pages) ? source.pages[0] : source.pages);
    return source.localPath + (Number.isInteger(page) && page > 0 ? "#page=" + page : "");
  }

  function sourceLinks(sourceIds) {
    const sources = (sourceIds || []).map((id) => SOURCE_INDEX.get(id)).filter(Boolean);
    if (!sources.length) return "";
    return '<div class="question-sources"><span>Références</span>' + sources.map((source) => '<a href="' + escapeHtml(sourceHref(source)) + '" target="_blank" rel="noopener">' + escapeHtml(source.title) + '</a>').join("") + '</div>';
  }

  function questionClarification(question) {
    return question.clarification ? '<p class="question-clarification"><b>Précision pour cet entraînement :</b> ' + escapeHtml(question.clarification) + '</p>' : "";
  }

  function optionCorrections(question, options) {
    return '<ul class="option-corrections">' + (options || [question.correct, ...question.wrong]).map((choice) => {
      const correct = choice === question.correct;
      return '<li class="' + (correct ? "option-right" : "option-wrong") + '"><strong><span aria-hidden="true">' + (correct ? "✓" : "×") + '</span> ' + escapeHtml(choice) + '</strong><p>' + escapeHtml(correct ? question.explanation : question.wrongReasons[choice]) + '</p></li>';
    }).join("") + '</ul>';
  }

  function questionsForLesson(lesson) {
    const related = {
      symbols: ["fiche-symboles", "fiche-langue-francaise", "fiche-paroles-marseillaise"],
      "liberty-equality": ["fiche-devise", "fiche-liberte", "fiche-egalite", "fiche-solidarite-association"],
      laicite: ["fiche-laicite-fondements", "fiche-laicite-espaces", "fiche-laicite-expression", "fiche-laicite-ecole"],
      constitution: ["fiche-constitution-etat-droit", "fiche-institutions-nationales", "fiche-fabrique-loi"],
      elections: ["fiche-vote-democratie"],
      territories: ["fiche-territoire-service-public", "fiche-carte-departements"],
      europe: ["fiche-europe-construction", "fiche-europe-symboles", "fiche-europe-institutions"],
      "fundamental-rights": ["fiche-ds-fondamentaux", "fiche-ds-libertes", "fiche-ds-dignite", "fiche-ds-corps", "fiche-ds-textes", "fiche-ds-justice"],
      "civic-duties": ["fiche-ds-infractions", "fiche-ds-devoirs", "fiche-ds-violences", "fiche-ds-aider", "fiche-ds-environnement"],
      "revolution-republic": ["h-origines", "h-chronologie", "h-revolution", "h-napoleon", "h-xixe", "h-iiie"],
      "world-wars": ["h-guerre1914", "h-guerre1939", "h-shoah", "h-resistance"],
      "postwar-europe": ["h-ve", "h-europe", "h-decolonisation", "h-immigration"],
      "arts-culture": ["gc-patrimoine", "gc-gastronomie", "gc-litterature", "gc-peinture", "gc-sculpture", "gc-musique", "gc-francophonie", "gc-culture-access", "gc-sport", "gc-rayonnement"],
      geography: ["gc-atlas", "gc-economie", "gc-regions", "gc-france-monde", "gc-ecologie"],
      "family-civil": ["fiche-ds-couple", "fiche-ds-enfant", "fiche-ds-garde", "fiche-ds-maternite-sante"],
      "health-emergency": ["fiche-ds-soins", "fiche-ds-assurance-maladie", "fiche-ds-patient", "fiche-ds-prevention"],
      work: ["fiche-ds-emploi-orientation", "fiche-ds-formation", "fiche-ds-contrats", "fiche-ds-candidature", "fiche-ds-travail"],
      school: ["fiche-ds-ecole", "fiche-ds-enfant", "fiche-ds-garde"],
      "housing-environment": ["fiche-ds-logement", "fiche-ds-mobilite", "fiche-ds-civisme", "fiche-ds-environnement"]
    };
    const concepts = new Set([lesson.id, ...(related[lesson.id] || [])]);
    const exact = DATA.questions.filter((question) => question.theme === lesson.theme && (concepts.has(question.concept) || (lesson.id === "digital-civic" && /en ligne|réseaux|internet|numérique|données personnelles|cyber|mot de passe|identifiants/i.test(question.prompt))));
    if (exact.length) return exact;
    const linked = DATA.questions.filter((question) => !question.official && question.sourceIds.some((id) => (lesson.sourceIds || []).includes(id)));
    return linked.length ? linked : DATA.questions.filter((question) => question.theme === lesson.theme);
  }

  function practiceResource(id) {
    const source = SOURCE_INDEX.get(id);
    if (!source) return;
    const pool = source.questionIds.map(questionById).filter(Boolean);
    startSession(adaptiveQuestions(pool, 20), { name: source.title, feedback: true });
  }

  function factsForSource(source) {
    return Array.from(new Map((source.facts || []).map((fact) => [fact.id, fact])).values());
  }

  function questionsForFact(fact) {
    return uniqueQuestions((fact.questionIds || []).map(questionById).filter(Boolean));
  }

  function practiceFact(sourceId, index) {
    const source = SOURCE_INDEX.get(sourceId);
    const fact = source && factsForSource(source)[index];
    if (!fact) return;
    const pool = questionsForFact(fact);
    startSession(adaptiveQuestions(pool, Math.min(10, pool.length)), { name: "Repère : " + fact.label, feedback: true });
  }

  function oralQuestionById(id) {
    return ORAL.questions.find((q) => q.id === id);
  }

  function getStat(id) {
    if (!state.questionStats[id]) {
      state.questionStats[id] = {
        seen: 0,
        correct: 0,
        wrong: 0,
        streak: 0,
        interval: 0,
        due: 0,
        lastSeen: 0
      };
    }
    return state.questionStats[id];
  }

  function masteryFor(question) {
    const stat = state.questionStats[question.id];
    if (!stat || !stat.seen) return 0;
    const accuracy = stat.correct / stat.seen;
    const exposure = Math.min(1, stat.seen / 4);
    const recall = Math.min(1, stat.streak / 4);
    return Math.round((accuracy * 0.56 + exposure * 0.24 + recall * 0.2) * 100);
  }

  function weaknessFor(question) {
    const stat = state.questionStats[question.id];
    if (!stat || !stat.seen) return 60;
    const dueBoost = stat.due && stat.due <= Date.now() ? 18 : 0;
    return 100 - masteryFor(question) + stat.wrong * 2 + dueBoost;
  }

  function updateQuestionStat(question, wasCorrect) {
    const stat = getStat(question.id);
    stat.seen += 1;
    stat.lastSeen = Date.now();
    if (wasCorrect) {
      stat.correct += 1;
      stat.streak += 1;
      const intervals = [1, 3, 7, 14, 30, 60, 120];
      stat.interval = intervals[Math.min(stat.streak - 1, intervals.length - 1)];
      stat.due = Date.now() + stat.interval * dayMs;
    } else {
      stat.wrong += 1;
      stat.streak = 0;
      stat.interval = 0;
      stat.due = Date.now() + 5 * 60000;
    }
    const key = localDateKey();
    state.activity[key] = (state.activity[key] || 0) + 1;
  }

  function getOralStat(id) {
    if (!state.oralStats[id]) {
      state.oralStats[id] = {
        seen: 0,
        again: 0,
        almost: 0,
        mastered: 0,
        streak: 0,
        due: 0,
        lastSeen: 0,
        lastRating: null
      };
    }
    return state.oralStats[id];
  }

  function oralMastery(question) {
    const stat = state.oralStats[question.id];
    if (!stat || !stat.seen) return 0;
    const quality = (stat.mastered * 1 + stat.almost * 0.48) / stat.seen;
    const exposure = Math.min(1, stat.seen / 4);
    const recall = Math.min(1, stat.streak / 4);
    return Math.round((quality * 0.62 + exposure * 0.18 + recall * 0.2) * 100);
  }

  function oralWeakness(question) {
    const stat = state.oralStats[question.id];
    if (!stat || !stat.seen) return 55;
    const dueBoost = stat.due && stat.due <= Date.now() ? 18 : 0;
    return 100 - oralMastery(question) + stat.again * 4 + dueBoost;
  }

  function dueOralQuestions() {
    const now = Date.now();
    return ORAL.questions
      .filter((question) => {
        const stat = state.oralStats[question.id];
        return stat && stat.seen && stat.due <= now;
      })
      .sort((a, b) => state.oralStats[a.id].due - state.oralStats[b.id].due);
  }

  function updateOralStat(question, rating) {
    const stat = getOralStat(question.id);
    stat.seen += 1;
    stat.lastSeen = Date.now();
    stat.lastRating = rating;
    if (rating === 2) {
      stat.mastered += 1;
      stat.streak += 1;
      const intervals = [2, 7, 14, 30, 60, 120];
      stat.due = Date.now() + intervals[Math.min(stat.streak - 1, intervals.length - 1)] * dayMs;
    } else if (rating === 1) {
      stat.almost += 1;
      stat.streak = 0;
      stat.due = Date.now() + dayMs;
    } else {
      stat.again += 1;
      stat.streak = 0;
      stat.due = Date.now() + 10 * 60000;
    }
    const key = localDateKey();
    state.activity[key] = (state.activity[key] || 0) + 1;
  }

  function smartOralQuestions(count) {
    const due = dueOralQuestions();
    const weak = ORAL.questions
      .filter((question) => state.oralStats[question.id])
      .sort((a, b) => oralWeakness(b) - oralWeakness(a));
    const unseenLivret = shuffle(ORAL.questions.filter((question) => question.source === "livret" && !state.oralStats[question.id]));
    const unseenPersonal = shuffle(ORAL.questions.filter((question) => question.source === "personal" && !state.oralStats[question.id]));
    return uniqueQuestions([...due, ...weak, ...unseenLivret.slice(0, Math.max(1, count - 2)), ...unseenPersonal]).slice(0, count);
  }

  function dueQuestions() {
    const now = Date.now();
    return DATA.questions
      .filter((q) => {
        const s = state.questionStats[q.id];
        return s && s.seen && s.due <= now;
      })
      .sort((a, b) => (state.questionStats[a.id].due || 0) - (state.questionStats[b.id].due || 0));
  }

  function shuffle(values) {
    const array = values.slice();
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function uniqueQuestions(values) {
    const seen = new Set();
    return values.filter((q) => {
      if (!q || seen.has(q.id)) return false;
      seen.add(q.id);
      return true;
    });
  }

  function smartDailyQuestions(count) {
    return adaptiveQuestions(DATA.questions, count, true);
  }

  function exhaustiveQuestions(count, pool) {
    pool = pool || DATA.questions;
    const limit = Math.min(Math.max(0, count), pool.length);
    const unseen = pool.filter((question) => !hasSeen(question));
    if (!unseen.length) return adaptiveQuestions(pool, limit, true);
    const groups = new Map();
    pool.forEach((question) => {
      if (!groups.has(question.concept)) groups.set(question.concept, { total: 0, seen: 0, picked: 0, questions: [] });
      const group = groups.get(question.concept);
      group.total += 1;
      group.seen += Number(hasSeen(question));
      if (!hasSeen(question)) group.questions.push(question);
    });
    const queues = shuffle(Array.from(groups.values()).filter((group) => group.questions.length));
    queues.forEach((group) => {
      group.questions = shuffle(group.questions).sort((a, b) => Number(isAdvanced(a)) - Number(isAdvanced(b)) || Number(b.official) - Number(a.official));
    });
    const selected = [];
    while (selected.length < Math.min(limit, unseen.length)) {
      const eligible = queues.filter((group) => group.questions.length);
      eligible.sort((a, b) => Number(isAdvanced(a.questions[0])) - Number(isAdvanced(b.questions[0]))
        || a.picked - b.picked
        || (a.seen + a.picked) / a.total - (b.seen + b.picked) / b.total);
      const group = eligible[0];
      selected.push(group.questions.shift());
      group.picked += 1;
    }
    // This discovery mode does not repeat a question while unseen material remains.
    return selected;
  }

  function weakConcepts() {
    const groups = new Map();
    DATA.questions.filter(hasSeen).forEach((question) => {
      if (!groups.has(question.concept)) groups.set(question.concept, { id: question.concept, questions: [], wrong: 0, seen: 0 });
      const group = groups.get(question.concept);
      const stat = state.questionStats[question.id];
      group.questions.push(question);
      group.wrong += stat.wrong;
      group.seen += stat.seen;
    });
    return Array.from(groups.values()).map((group) => {
      group.questions.sort((a, b) => weaknessFor(b) - weaknessFor(a));
      group.mastery = Math.round(group.questions.reduce((sum, question) => sum + masteryFor(question), 0) / group.questions.length);
      group.priority = (100 - group.mastery) + 25 * group.wrong / group.seen;
      return group;
    }).filter((group) => group.mastery < 80).sort((a, b) => b.priority - a.priority);
  }

  function conceptReviewQuestions(count, conceptIds) {
    const concepts = conceptIds || weakConcepts().slice(0, 4).map((group) => group.id);
    const pool = DATA.questions.filter((question) => concepts.includes(question.concept));
    if (!pool.length) return smartDailyQuestions(count);
    const limit = Math.min(count, pool.length);
    const struggling = pool.filter((question) => hasSeen(question) && masteryFor(question) < 80).sort((a, b) => weaknessFor(b) - weaknessFor(a));
    const anchorCount = Math.min(struggling.length, Math.max(1, Math.ceil(limit * .4)));
    const anchors = struggling.slice(0, anchorCount);
    const alternatives = pool.filter((question) => !anchors.some((anchor) => anchor.id === question.id));
    return uniqueQuestions([...anchors, ...exhaustiveQuestions(limit - anchors.length, alternatives), ...adaptiveQuestions(alternatives, limit)]).slice(0, limit);
  }

  function adaptiveQuestions(pool, count, balanceThemes) {
    const limit = Math.min(count, pool.length);
    const ids = new Set(pool.map((question) => question.id));
    const due = dueQuestions().filter((question) => ids.has(question.id));
    const weak = pool.filter(hasSeen).sort((a, b) => weaknessFor(b) - weaknessFor(a));
    let unseen = shuffle(pool.filter((question) => !hasSeen(question))).sort((a, b) => Number(isAdvanced(a)) - Number(isAdvanced(b)));
    if (balanceThemes) {
      const queues = Object.values(DATA.themes).map((theme) => ({ theme, picked: 0, official: unseen.filter((question) => question.theme === theme.id && question.official), extra: unseen.filter((question) => question.theme === theme.id && !question.official) }));
      const balanced = [];
      while (balanced.length < unseen.length) {
        const eligible = shuffle(queues.filter((queue) => queue.official.length || queue.extra.length));
        eligible.sort((a, b) => a.picked / a.theme.examCount - b.picked / b.theme.examCount);
        const queue = eligible[0];
        const useOfficial = queue.official.length && (queue.picked % 3 !== 2 || !queue.extra.length);
        balanced.push((useOfficial ? queue.official : queue.extra).shift());
        queue.picked += 1;
      }
      unseen = balanced;
    }
    // Keep room for new material even when a large review queue exists.
    const newQuota = unseen.length ? Math.max(1, Math.ceil(limit * .4)) : 0;
    const dueQuota = Math.min(due.length, limit - Math.min(newQuota, unseen.length));
    return uniqueQuestions([...due.slice(0, dueQuota), ...unseen.slice(0, newQuota), ...weak.filter((question) => masteryFor(question) < 80).slice(0, Math.ceil(limit * .2)), ...unseen, ...due, ...weak]).slice(0, limit);
  }

  function studyStreak() {
    let streak = 0;
    const cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    if (!state.activity[localDateKey(cursor.getTime())]) cursor.setDate(cursor.getDate() - 1);
    while (state.activity[localDateKey(cursor.getTime())]) {
      streak += 1;
      cursor.setDate(cursor.getDate() - 1);
    }
    return streak;
  }

  function totalAnswered() {
    return Object.values(state.questionStats).reduce((sum, stat) => sum + (stat.seen || 0), 0);
  }

  function readiness() {
    const allocation = { principles: [8, 3], rights: [8, 3], history: [6, 2], institutions: [4, 2], society: [2, 2] };
    const knowledge = Object.entries(allocation).reduce((sum, [theme, counts]) => {
      const official = new Map();
      const situations = new Map();
      DATA.questions.filter((question) => question.theme === theme).forEach((question) => {
        if (question.official) {
          const key = searchKey(question.prompt).replace(/[^a-z0-9]/g, "");
          official.set(key, Math.max(official.get(key) || 0, masteryFor(question)));
        } else if (question.type === "scenario" && !isAdvanced(question)) {
          if (!situations.has(question.concept)) situations.set(question.concept, []);
          if (hasSeen(question)) situations.get(question.concept).push(masteryFor(question));
        }
      });
      const officialAverage = Array.from(official.values()).reduce((total, value) => total + value, 0) / Math.max(1, official.size);
      const scenarioAverage = Array.from(situations.values()).reduce((total, values) => total + values.reduce((subtotal, value) => subtotal + value, 0) / Math.max(1, values.length), 0) / Math.max(1, situations.size);
      return sum + (officialAverage * counts[0] + scenarioAverage * counts[1]) / DATA.metadata.examQuestions;
    }, 0);
    const mockScores = state.mocks.map((mock) => mock.score / 40 * 100);
    const mock = mockScores.length ? mockScores.slice(-3).reduce((a, b) => a + b, 0) / Math.min(3, mockScores.length) : knowledge;
    return Math.round(knowledge * 0.72 + mock * 0.28);
  }

  function toast(message) {
    const item = document.createElement("div");
    item.className = "toast";
    item.textContent = message;
    $("#toast-region").appendChild(item);
    setTimeout(() => item.remove(), 3300);
  }

  function celebrate() {
    if (state.prefs.reduceMotion) return;
    const layer = $("#confetti");
    const colors = ["#2457d6", "#e44752", "#d59a28", "#168f86", "#7656cf"];
    for (let i = 0; i < 55; i += 1) {
      const bit = document.createElement("i");
      bit.style.left = Math.random() * 100 + "%";
      bit.style.background = colors[i % colors.length];
      bit.style.animationDelay = Math.random() * 0.5 + "s";
      bit.style.animationDuration = 1.2 + Math.random() * 1.3 + "s";
      layer.appendChild(bit);
      setTimeout(() => bit.remove(), 3000);
    }
  }

  function setSidebarOpen(open) {
    $("#sidebar").classList.toggle("is-open", open);
    $("#sidebar-backdrop").classList.toggle("is-visible", open);
    document.body.classList.toggle("menu-open", open);
    $("#menu-button").setAttribute("aria-expanded", String(open));
  }

  function setRoute(route, options) {
    options = options || {};
    if (!ROUTES[route]) route = "dashboard";
    if (route !== "quiz") stopTimer();
    if (route !== "oral") stopOralPrepTimer(true);
    currentRoute = route;
    $$(".view").forEach((view) => view.classList.toggle("is-active", view.dataset.view === route));
    $$(".nav-item[data-route]").forEach((item) => item.classList.toggle("is-active", item.dataset.route === route));
    $("#route-eyebrow").textContent = ROUTES[route][0];
    $("#route-title").textContent = ROUTES[route][1];
    setSidebarOpen(false);
    if (!options.noRender) renderRoute(route);
    window.scrollTo({ top: 0, behavior: state.prefs.reduceMotion ? "auto" : "smooth" });
    $("#main").focus({ preventScroll: true });
  }

  function renderRoute(route) {
    if (route === "dashboard") renderDashboard();
    if (route === "learn") renderLessons();
    if (route === "entretien") renderEntretien();
    if (route === "practice") renderPractice();
    if (route === "mock") renderMockPage();
    if (route === "review") renderReview();
    if (route === "library") renderLibrary();
    if (route === "settings") renderSettings();
  }

  function renderDashboard() {
    renderGreeting();
    const due = dueQuestions();
    const questions = DATA.questions;
    const mastered = questions.filter((q) => masteryFor(q) >= 80).length;
    const score = readiness();
    $("#readiness-score").textContent = score + "%";
    $("#readiness-ring").style.setProperty("--score", score);
    $("#readiness-label").textContent = score >= 85 ? "Bon indice — poursuivez les examens blancs" : score >= 65 ? "La confiance se construit" : score >= 35 ? "Bonne progression" : "Établissons votre niveau de départ";
    $("#mastered-count").textContent = mastered;
    $("#due-count").textContent = due.length;
    $("#answered-count").textContent = totalAnswered();
    $("#best-mock").textContent = state.mocks.length ? Math.max(...state.mocks.map((m) => m.score)) + "/40" : "—";
    $("#streak-value").textContent = studyStreak();
    $("#review-count").textContent = due.length;
    updateContentTotals();

    const daily = smartDailyQuestions(Number(state.prefs.dailyGoal));
    const continueButton = $("#continue-button");
    if (activeSession) {
      continueButton.textContent = "Reprendre : " + activeSession.name;
      continueButton.onclick = () => resumeSession();
    } else {
      continueButton.textContent = due.length ? "Réviser " + Math.min(due.length, state.prefs.dailyGoal) + " questions dues" : "Commencer les " + daily.length + " questions du jour";
      continueButton.onclick = () => startSession(daily, { name: "Révision adaptative du jour", feedback: true });
    }

    $("#theme-progress-list").innerHTML = Object.values(DATA.themes).map((theme) => {
      const themed = questions.filter((q) => q.theme === theme.id);
      const avg = Math.round(themed.reduce((sum, q) => sum + masteryFor(q), 0) / Math.max(1, themed.length));
      const seen = themed.filter(hasSeen).length;
      return '<div class="theme-row">' +
        '<span class="theme-symbol" style="background:' + theme.soft + ';color:' + theme.color + '">' + theme.icon + '</span>' +
        '<div class="theme-name"><strong>' + theme.short + '</strong><small>' + seen + '/' + themed.length + ' vues</small></div>' +
        '<div class="bar" style="--bar-color:' + theme.color + '"><span style="width:' + avg + '%"></span></div>' +
        '<span class="theme-pct">' + avg + '%</span></div>';
    }).join("");

    const weakest = weakConcepts().slice(0, 4);
    $("#weak-list").innerHTML = weakest.length ? weakest.map((group) => {
      const lesson = DATA.lessons.find((item) => item.id === group.id);
      return '<div class="weak-item"><span>!</span><div><strong>' + escapeHtml(lesson ? lesson.title : group.questions[0].prompt) + '</strong><small>' + group.wrong + ' erreur(s) sur ' + group.seen + ' réponses · maîtrise ' + group.mastery + ' %</small><button class="text-button" type="button" data-weak-concept="' + escapeHtml(group.id) + '">Revoir avec d’autres exemples →</button></div></div>';
    }).join("") : '<div class="empty-state"><strong>Aucun point faible pour l’instant</strong><span>Répondez à quelques questions pour entraîner le coach adaptatif.</span></div>';
    $("#practice-weak-button").disabled = !weakest.length;
    $("#practice-weak-button").onclick = () => {
      startSession(conceptReviewQuestions(20), { name: "Points faibles — comprendre et appliquer", feedback: true });
    };
    renderPlan();
  }

  function renderPlan() {
    const phases = [
      ["Fondations", "Symboles et laïcité"],
      ["Droits", "Libertés et devoirs"],
      ["Institutions", "Élections et Europe"],
      ["Histoire", "Dates, culture et carte"],
      ["Société", "Travail, santé et école"],
      ["Défi final", "Grands quiz et points faibles"]
    ];
    const score = readiness();
    const current = clamp(Math.floor(score / (100 / phases.length)), 0, phases.length - 1);
    $("#plan-eyebrow").textContent = "Parcours conseillé";
    $("#plan-status").textContent = DATA.questions.filter(hasSeen).length + " / " + DATA.questions.length + " QCM explorés";
    $("#plan-track").innerHTML = phases.map((phase, index) => {
      const cls = index < current ? " is-done" : index === current ? " is-current" : "";
      return '<div class="plan-step' + cls + '"><small>Étape ' + (index + 1) + '</small><strong>' + phase[0] + '</strong><span>' + phase[1] + '</span></div>';
    }).join("");
  }

  function renderLessons() {
    const themes = Object.values(DATA.themes);
    $("#lesson-filters").innerHTML = ['<button class="filter-chip ' + (lessonFilter === "all" ? "is-active" : "") + '" data-lesson-filter="all">Toutes les leçons</button>']
      .concat(themes.map((t) => '<button class="filter-chip ' + (lessonFilter === t.id ? "is-active" : "") + '" data-lesson-filter="' + t.id + '">' + t.short + '</button>')).join("");
    const query = searchKey($("#lesson-search").value);
    const visible = DATA.lessons.filter((lesson) => (lessonFilter === "all" || lesson.theme === lessonFilter) && (!query || searchKey([lesson.title, lesson.lead, ...lesson.facts.flat()].join(" ")).includes(query)));
    $("#lessons-complete").textContent = DATA.lessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length + "/" + DATA.lessons.length;
    $("#lesson-grid").innerHTML = visible.map((lesson, index) => {
      const theme = DATA.themes[lesson.theme];
      const complete = state.completedLessons.includes(lesson.id);
      const pool = questionsForLesson(lesson);
      const seen = pool.filter(hasSeen).length;
      return '<article class="lesson-card" data-lesson-id="' + lesson.id + '" tabindex="0" style="--card-color:' + theme.soft + ';--card-accent:' + theme.color + '">' +
        '<span class="lesson-number">' + String(index + 1).padStart(2, "0") + '</span>' +
        '<h3>' + escapeHtml(lesson.title) + '</h3><p>' + escapeHtml(lesson.lead) + '</p><small class="lesson-coverage">' + seen + '/' + pool.length + ' QCM explorés</small>' +
        '<div class="lesson-footer"><span>' + lesson.minutes + ' min · ' + theme.short + '</span><span class="' + (complete ? "lesson-complete" : "") + '">' + (complete ? "✓ Terminée" : "Ouvrir →") + '</span></div></article>';
    }).join("") || '<div class="empty-state"><strong>Aucune leçon correspondante</strong><span>Essayez un autre mot ou un autre thème.</span></div>';
  }

  function openLesson(id) {
    const lesson = DATA.lessons.find((l) => l.id === id);
    if (!lesson) return;
    const theme = DATA.themes[lesson.theme];
    $("#lesson-article").innerHTML =
      '<span class="theme-chip" style="background:' + theme.soft + ';color:' + theme.color + '">' + theme.name + '</span>' +
      '<h1 id="lesson-title">' + lesson.title + '</h1><p class="lesson-lead">' + lesson.lead + '</p>' +
      '<div class="fact-grid">' + lesson.facts.map((fact) => '<div class="fact-card"><strong>' + fact[0] + '</strong><span>' + fact[1] + '</span></div>').join("") + '</div>' +
      lesson.body.map((p) => '<p>' + p + '</p>').join("") +
      '<div class="example-box"><strong>Mise en situation</strong><p>' + lesson.example + '</p></div>' +
      '<div class="trap-box"><strong>Piège fréquent</strong><p>' + lesson.trap + '</p></div>' +
      sourceLinks(lesson.sourceIds) +
      '<div class="lesson-actions"><button class="button button-primary" id="lesson-practice">S’entraîner sur cette notion</button><button class="button button-secondary" id="complete-lesson">' + (state.completedLessons.includes(id) ? "✓ Terminée" : "Marquer comme terminée") + '</button></div>';
    $("#lesson-practice").onclick = () => {
      const pool = questionsForLesson(lesson);
      startSession(adaptiveQuestions(pool, 12), { name: lesson.title, feedback: true });
    };
    $("#complete-lesson").onclick = () => {
      if (!state.completedLessons.includes(id)) {
        state.completedLessons.push(id);
        saveState();
        toast("Leçon terminée.");
      }
      openLesson(id);
    };
    setRoute("lesson", { noRender: true });
  }

  function renderEntretien() {
    const livretQuestions = ORAL.questions.filter((question) => question.source === "livret");
    const due = dueOralQuestions();
    const mastered = livretQuestions.filter((question) => oralMastery(question) >= 80).length;
    const seen = ORAL.questions.filter((question) => state.oralStats[question.id] && state.oralStats[question.id].seen).length;
    const attempts = Object.values(state.oralStats).reduce((sum, stat) => sum + (stat.seen || 0), 0);
    const readinessScore = Math.round(livretQuestions.reduce((sum, question) => sum + oralMastery(question), 0) / livretQuestions.length);

    $$(".oral-total").forEach((element) => { element.textContent = ORAL.livretCount; });
    $$(".oral-personal-total").forEach((element) => { element.textContent = ORAL.personalCount; });
    $$(".oral-all-total").forEach((element) => { element.textContent = ORAL.questions.length; });
    $("#oral-readiness").textContent = readinessScore + "%";
    $("#oral-score-ring").style.setProperty("--score", readinessScore);
    $("#oral-readiness-label").textContent = readinessScore >= 80 ? "Prêt à expliquer naturellement" : readinessScore >= 55 ? "Bonne progression à l’oral" : readinessScore >= 20 ? "Vos réponses prennent forme" : "Établissez votre niveau de départ";
    $("#oral-mastered-count").textContent = mastered;
    $("#oral-due-now").textContent = due.length;
    $("#oral-seen-count").textContent = seen;
    $("#oral-attempt-count").textContent = attempts;
    $("#oral-due-count").textContent = due.length;

    $("#oral-smart-start").onclick = () => startOralSession(smartOralQuestions(10), "Entraînement oral adaptatif");
    $("#oral-mock-start").onclick = () => {
      const selected = [];
      ["principles", "institutions", "rights", "history", "society"].forEach((part) => {
        selected.push(...shuffle(ORAL.questions.filter((question) => question.part === part)).slice(0, 2));
      });
      selected.push(...shuffle(ORAL.questions.filter((question) => question.part === "personal")).slice(0, 5));
      startOralSession(shuffle(selected), "Grand oral de 15 questions");
    };
    const canResume = Boolean(activeOralSession || state.activeOralSession);
    $("#oral-resume").classList.toggle("hidden", !canResume);
    $("#oral-resume").onclick = resumeOralSession;

    $("#oral-part-list").innerHTML = Object.values(ORAL.parts).map((part) => {
      const questions = ORAL.questions.filter((question) => question.part === part.id);
      const partSeen = questions.filter((question) => state.oralStats[question.id]).length;
      const average = Math.round(questions.reduce((sum, question) => sum + oralMastery(question), 0) / questions.length);
      const sourceLabel = part.id === "personal" ? "questions personnalisées" : "Livret p. " + part.pages;
      return '<button class="oral-part-row" type="button" data-oral-part-start="' + part.id + '" style="--part-color:' + part.color + ';--part-soft:' + part.soft + '">' +
        '<span class="oral-part-icon">' + part.icon + '</span><span class="oral-part-copy"><strong>' + part.name + '</strong><small>' + questions.length + ' questions · ' + sourceLabel + '</small></span>' +
        '<span class="oral-part-progress"><b>' + average + '%</b><i><em style="width:' + average + '%"></em></i><small>' + partSeen + '/' + questions.length + ' vues</small></span></button>';
    }).join("");
    $$('[data-oral-part-start]').forEach((button) => {
      button.onclick = () => {
        const pool = ORAL.questions.filter((question) => question.part === button.dataset.oralPartStart);
        const prioritised = pool.slice().sort((a, b) => oralWeakness(b) - oralWeakness(a));
        startOralSession(prioritised.slice(0, 12), ORAL.parts[button.dataset.oralPartStart].name);
      };
    });

    const weak = ORAL.questions
      .filter((question) => state.oralStats[question.id] && oralMastery(question) < 80)
      .sort((a, b) => oralWeakness(b) - oralWeakness(a))
      .slice(0, 4);
    $("#oral-weak-list").innerHTML = weak.length ? weak.map((question) => {
      const stat = state.oralStats[question.id];
      return '<div class="weak-item"><span>!</span><div><strong>' + escapeHtml(question.prompt) + '</strong><small>' + ORAL.parts[question.part].short + ' · maîtrise ' + oralMastery(question) + ' % · ' + stat.again + ' à revoir</small></div></div>';
    }).join("") : '<div class="empty-state"><strong>Aucune réponse orale faible pour l’instant</strong><span>Répondez à voix haute et autoévaluez-vous pour entraîner le coach.</span></div>';
    $("#oral-weak-start").disabled = !weak.length;
    $("#oral-weak-start").onclick = () => startOralSession(weak.length ? weak : smartOralQuestions(10), "Révision des réponses faibles");

    renderOralLibrary();
  }

  function populateOralPartFilter() {
    const select = $("#oral-part-filter");
    const current = select.value || "all";
    select.innerHTML = '<option value="all">Toutes les sections</option>' + Object.values(ORAL.parts).map((part) => '<option value="' + part.id + '">' + part.name + '</option>').join("");
    select.value = Array.from(select.options).some((option) => option.value === current) ? current : "all";
  }

  function renderOralLibrary() {
    populateOralPartFilter();
    const query = ($("#oral-search").value || "").trim().toLocaleLowerCase("fr");
    const part = $("#oral-part-filter").value;
    const status = $("#oral-status-filter").value;
    const now = Date.now();
    const results = ORAL.questions.filter((question) => {
      const stat = state.oralStats[question.id];
      const mastery = oralMastery(question);
      const matchesPart = part === "all" || question.part === part;
      const matchesStatus = status === "all" ||
        (status === "due" && stat && stat.seen && stat.due <= now) ||
        (status === "weak" && stat && mastery < 60) ||
        (status === "unseen" && !stat) ||
        (status === "mastered" && mastery >= 80) ||
        (status === "bookmarked" && state.oralBookmarks.includes(question.id));
      const haystack = [question.prompt, question.answer, question.section, ...question.keyPoints, ...question.followUps].join(" ").toLocaleLowerCase("fr");
      return matchesPart && matchesStatus && (!query || haystack.includes(query));
    });
    $("#oral-result-count").textContent = results.length + " questions";
    $("#oral-question-list").innerHTML = results.slice(0, oralLibraryLimit).map((question) => {
      const partData = ORAL.parts[question.part];
      const bookmarked = state.oralBookmarks.includes(question.id);
      const source = question.source === "livret" ? "Livret · section p. " + question.page + "+" : "Question de réflexion personnelle";
      const followups = question.followUps.length ? '<p><b>Relances possibles :</b> ' + question.followUps.map(escapeHtml).join(" · ") + '</p>' : "";
      return '<details class="bank-question oral-bank-question"><summary><span class="bank-id">' + question.id.replace("oral-", "") + '</span><h3>' + escapeHtml(question.prompt) + '</h3><button class="bookmark-button ' + (bookmarked ? "is-bookmarked" : "") + '" data-oral-bookmark="' + question.id + '" type="button" aria-label="Favori">' + (bookmarked ? "★" : "☆") + '</button></summary>' +
        '<div class="bank-answer"><span class="source-chip ' + (question.source === "personal" ? "personal" : "") + '">' + source + '</span> <span class="theme-chip" style="background:' + partData.soft + ';color:' + partData.color + '">' + partData.short + '</span>' +
        '<p><strong>Réponse suggérée :</strong> ' + escapeHtml(question.answer) + '</p><p><b>Points essentiels :</b> ' + question.keyPoints.map(escapeHtml).join(" · ") + '</p>' + followups +
        '<button class="button button-soft oral-one-button" type="button" data-oral-start-one="' + question.id + '">Travailler cette question à l’oral</button></div></details>';
    }).join("");
    $("#oral-load-more").classList.toggle("hidden", results.length <= oralLibraryLimit);
    $("#oral-load-more").onclick = () => {
      oralLibraryLimit += 40;
      renderOralLibrary();
    };
  }

  function toggleOralBookmark(id) {
    const index = state.oralBookmarks.indexOf(id);
    if (index >= 0) {
      state.oralBookmarks.splice(index, 1);
      toast("Favori oral supprimé.");
    } else {
      state.oralBookmarks.push(id);
      toast("Question orale ajoutée aux favoris.");
    }
    saveState();
    if (currentRoute === "entretien") renderOralLibrary();
    if (currentRoute === "oral") renderOralQuestion();
  }

  function startOralSession(questions, name) {
    const selected = uniqueQuestions(questions);
    if (!selected.length) {
      toast("Aucune question orale ne correspond à cette séance.");
      return;
    }
    activeOralSession = {
      id: "oral-session-" + Date.now(),
      name: name || "Entraînement oral",
      questionIds: selected.map((question) => question.id),
      index: 0,
      ratings: [],
      revealed: {},
      startedAt: Date.now(),
      lastSavedAt: Date.now()
    };
    saveState();
    setRoute("oral", { noRender: true });
    renderOralQuestion();
  }

  function resumeOralSession() {
    if (!activeOralSession && state.activeOralSession) activeOralSession = state.activeOralSession;
    if (!activeOralSession) {
      toast("Aucune séance orale n’est enregistrée.");
      return;
    }
    setRoute("oral", { noRender: true });
    renderOralQuestion();
  }

  function currentOralQuestion() {
    return activeOralSession ? oralQuestionById(activeOralSession.questionIds[activeOralSession.index]) : null;
  }

  function renderOralQuestion() {
    if (!activeOralSession) return;
    if (activeOralSession.index >= activeOralSession.questionIds.length) {
      finishOralSession();
      return;
    }
    stopOralPrepTimer(true);
    const question = currentOralQuestion();
    const part = ORAL.parts[question.part];
    const revealed = Boolean(activeOralSession.revealed[question.id]);
    $("#oral-session-name").textContent = activeOralSession.name;
    $("#oral-part-chip").textContent = part.name;
    $("#oral-part-chip").style.background = part.soft;
    $("#oral-part-chip").style.color = part.color;
    $("#oral-source-chip").textContent = question.source === "livret" ? "Livret · section p. " + question.page + "+" : "Réflexion personnelle";
    $("#oral-source-chip").classList.toggle("personal", question.source === "personal");
    $("#oral-bookmark").textContent = state.oralBookmarks.includes(question.id) ? "★" : "☆";
    $("#oral-bookmark").classList.toggle("is-bookmarked", state.oralBookmarks.includes(question.id));
    $("#oral-bookmark").onclick = () => toggleOralBookmark(question.id);
    $("#oral-question-title").textContent = question.prompt;
    $("#oral-progress-text").textContent = (activeOralSession.index + 1) + " sur " + activeOralSession.questionIds.length;
    $("#oral-progress-bar").style.width = (activeOralSession.index / activeOralSession.questionIds.length * 100) + "%";
    $("#oral-before-answer").classList.toggle("hidden", revealed);
    $("#oral-answer-panel").classList.toggle("hidden", !revealed);
    $("#oral-reveal").onclick = () => {
      activeOralSession.revealed[question.id] = true;
      saveState();
      renderOralQuestion();
    };
    if (revealed) {
      $("#oral-model-answer").textContent = question.answer;
      $("#oral-keypoints").innerHTML = question.keyPoints.map((point) => '<li>' + escapeHtml(point) + '</li>').join("");
      $("#oral-followups").innerHTML = question.followUps.length ? question.followUps.map((followup) => '<li>' + escapeHtml(followup) + '</li>').join("") : '<li>Reformulez la réponse avec vos propres mots.</li>';
      $("#oral-notes").value = state.oralNotes[question.id] || "";
      $("#oral-notes").oninput = (event) => {
        state.oralNotes[question.id] = event.target.value.slice(0, 2000);
        saveState();
      };
    }
    updateOralSessionPanel();
  }

  function rateOralQuestion(rating) {
    if (!activeOralSession) return;
    const question = currentOralQuestion();
    if (!question || !activeOralSession.revealed[question.id]) return;
    updateOralStat(question, rating);
    activeOralSession.ratings[activeOralSession.index] = { id: question.id, rating: rating, answeredAt: Date.now() };
    activeOralSession.index += 1;
    activeOralSession.lastSavedAt = Date.now();
    saveState();
    if (activeOralSession.index >= activeOralSession.questionIds.length) finishOralSession();
    else renderOralQuestion();
  }

  function updateOralSessionPanel() {
    const ratings = activeOralSession.ratings.filter(Boolean);
    $("#oral-session-mastered").textContent = ratings.filter((item) => item.rating === 2).length;
    $("#oral-session-answered").textContent = ratings.length;
    $("#oral-session-repeat").textContent = ratings.filter((item) => item.rating < 2).length;
    $("#oral-session-dots").innerHTML = activeOralSession.questionIds.map((id, index) => {
      const rating = activeOralSession.ratings[index];
      const cls = rating ? (rating.rating === 2 ? "correct" : rating.rating === 1 ? "almost" : "wrong") : index === activeOralSession.index ? "current" : "";
      return '<i class="' + cls + '"></i>';
    }).join("");
  }

  function startOralPrepTimer() {
    stopOralPrepTimer(false);
    oralPrepRemaining = 90;
    updateOralPrepTimer();
    $("#oral-prep-timer").classList.add("is-running");
    oralPrepInterval = setInterval(() => {
      oralPrepRemaining -= 1;
      updateOralPrepTimer();
      if (oralPrepRemaining <= 0) {
        stopOralPrepTimer(false);
        $("#oral-prep-timer").textContent = "Temps écoulé — afficher";
      }
    }, 1000);
  }

  function updateOralPrepTimer() {
    const minutes = Math.floor(oralPrepRemaining / 60);
    const seconds = oralPrepRemaining % 60;
    $("#oral-prep-timer").textContent = minutes + ":" + String(seconds).padStart(2, "0");
  }

  function stopOralPrepTimer(reset) {
    if (oralPrepInterval) clearInterval(oralPrepInterval);
    oralPrepInterval = null;
    const button = $("#oral-prep-timer");
    if (!button) return;
    button.classList.remove("is-running");
    if (reset) {
      oralPrepRemaining = 90;
      button.textContent = "Démarrer 1:30";
    }
  }

  function finishOralSession() {
    if (!activeOralSession) return;
    const ratings = activeOralSession.ratings.filter(Boolean);
    const clear = ratings.filter((item) => item.rating === 2).length;
    const total = activeOralSession.questionIds.length;
    activeOralSession = null;
    state.activeOralSession = null;
    saveState();
    setRoute("entretien");
    toast("Séance orale terminée : " + clear + "/" + total + " réponses claires. Les autres seront reproposées.");
    if (clear / total >= 0.75) celebrate();
  }

  function renderPractice() {
    const due = dueQuestions();
    const unseenOfficial = DATA.questions.filter((q) => q.official && !hasSeen(q));
    const weak = weakConcepts();
    const unseen = DATA.questions.filter((question) => !hasSeen(question));
    const summary = $("#exhaustive-summary");
    if (summary) summary.textContent = (DATA.questions.length - unseen.length) + '/' + DATA.questions.length + ' QCM explorés · ' + unseen.filter((question) => !isAdvanced(question)).length + ' QCM de base et ' + unseen.filter(isAdvanced).length + ' approfondissements encore à découvrir. Chaque séance et chaque réponse restent enregistrées.';
    const modes = [
      { id: "integral", icon: "∞", color: "#168f86", soft: "#e6f7f4", title: "Le parcours intégral", desc: "Découvrez toute la banque par petites séances. Priorité aux questions jamais vues, en variant les notions ; les bases précèdent les approfondissements.", count: unseen.length ? unseen.length + " QCM encore à explorer" : "Toute la banque explorée : consolidez vos acquis" },
      { id: "daily", icon: "↗", color: "#2457d6", soft: "#eaf0ff", title: "Mélange quotidien adaptatif", desc: "Révisions dues, notions faibles et nouvelles questions dans une séance équilibrée.", count: state.prefs.dailyGoal + " questions" },
      { id: "due", icon: "↻", color: "#e44752", soft: "#fff0f1", title: "Révisions dues", desc: "La répétition espacée réactive les faits juste avant leur oubli.", count: due.length + " à revoir" },
      { id: "weak", icon: "!", color: "#d59a28", soft: "#fff7df", title: "Travail des points faibles", desc: "Reprenez vos erreurs, puis appliquez la même notion à d’autres questions et situations.", count: weak.length ? weak.length + " notions à consolider" : "Établissez d’abord votre niveau" },
      { id: "study", icon: "▤", color: "#7656cf", soft: "#f1edff", title: "Parcours des fiches et du Livret", desc: "Explorez les notions des ressources officielles sous forme de QCM, avec une correction pour chaque proposition.", count: DATA.studyCount + " QCM complémentaires" },
      { id: "official", icon: "✓", color: "#2457d6", soft: "#eaf0ff", title: "Les énoncés officiels", desc: "Retrouvez toutes les formulations du PDF de connaissances pour la naturalisation. Les choix sont conçus pour l’entraînement.", count: DATA.officialCount + " énoncés" },
      { id: "scenario", icon: "◇", color: "#168f86", soft: "#e6f7f4", title: "Atelier de mises en situation", desc: "Appliquez les principes républicains à des situations réalistes. Les situations officielles ne sont pas publiées.", count: DATA.scenarioCount + " exemples" }
    ];
    $("#practice-modes").innerHTML = modes.map((m) => '<article class="mode-card" style="--mode-color:' + m.color + ';--mode-soft:' + m.soft + '"><span class="mode-icon">' + m.icon + '</span><h3>' + m.title + '</h3><p>' + m.desc + '</p><small>' + m.count + '</small><button class="button button-soft" data-practice-mode="' + m.id + '">Commencer</button></article>').join("");
    populateThemeSelects();

    $$("[data-practice-mode]").forEach((button) => {
      button.onclick = () => {
        const mode = button.dataset.practiceMode;
        if (mode === "integral") {
          if (activeSession && activeSession.mode === "integral") resumeSession();
          else startSession(exhaustiveQuestions(Number(state.prefs.dailyGoal)), { mode: "integral", name: "Parcours intégral — tout le programme", feedback: true });
        }
        if (mode === "daily") startSession(smartDailyQuestions(Number(state.prefs.dailyGoal)), { name: "Mélange quotidien adaptatif", feedback: true });
        if (mode === "due") startSession((due.length ? due : unseenOfficial).slice(0, Math.max(10, Number(state.prefs.dailyGoal))), { name: "Révision des questions dues", feedback: true });
        if (mode === "weak") startSession(conceptReviewQuestions(20), { name: "Points faibles — comprendre et appliquer", feedback: true });
        if (mode === "study") {
          const pool = DATA.questions.filter((question) => question.type === "study");
          const unseen = shuffle(pool.filter((question) => !hasSeen(question))).sort((a, b) => Number(isAdvanced(a)) - Number(isAdvanced(b)));
          const seen = pool.filter(hasSeen).sort((a, b) => weaknessFor(b) - weaknessFor(a));
          startSession([...unseen, ...seen].slice(0, 20), { name: "Fiches et Livret — QCM", feedback: true });
        }
        if (mode === "official") startSession(shuffle(DATA.questions.filter((question) => question.official)).slice(0, 20), { name: "Énoncés officiels", feedback: true });
        if (mode === "scenario") startSession(shuffle(DATA.questions.filter((q) => q.type === "scenario")).slice(0, 20), { name: "Atelier de mises en situation", feedback: true });
      };
    });
  }

  function populateThemeSelects() {
    ["#custom-theme", "#library-theme"].forEach((selector) => {
      const select = $(selector);
      const current = select.value || "all";
      select.innerHTML = '<option value="all">Tous les thèmes</option>' + Object.values(DATA.themes).map((t) => '<option value="' + t.id + '">' + t.name + '</option>').join("");
      select.value = current;
    });
    populateResourceSelects();
  }

  function populateResourceSelects() {
    ["custom", "library"].forEach((prefix) => {
      const select = $("#" + prefix + "-resource");
      const current = select.value || "all";
      const theme = $("#" + prefix + "-theme").value;
      const kind = $("#" + prefix + "-source").value;
      const available = DATA.sources.filter((source) => source.questionIds.some((id) => {
        const question = questionById(id);
        return question && (theme === "all" || question.theme === theme) && matchesQuestionSource(question, kind);
      }));
      select.innerHTML = '<option value="all">Toutes les fiches et ressources</option>' + available.map((source) => '<option value="' + escapeHtml(source.id) + '">' + escapeHtml(source.title) + '</option>').join("");
      select.value = available.some((source) => source.id === current) ? current : "all";
    });
  }

  function buildMockQuestions() {
    const allocation = {
      principles: [8, 3],
      rights: [8, 3],
      history: [6, 2],
      institutions: [4, 2],
      society: [2, 2]
    };
    const picked = [];
    const prompts = new Set();
    const takeDistinct = (pool, count) => {
      const selected = [];
      for (const question of pool) {
        const key = searchKey(question.prompt).replace(/[^a-z0-9]/g, "");
        if (prompts.has(key)) continue;
        prompts.add(key);
        selected.push(question);
        if (selected.length === count) break;
      }
      return selected;
    };
    Object.keys(allocation).forEach((theme) => {
      const officialPool = shuffle(DATA.questions.filter((q) => q.theme === theme && q.official));
      const scenarioPool = shuffle(DATA.questions.filter((q) => q.theme === theme && q.type === "scenario" && !isAdvanced(q)));
      picked.push(...takeDistinct(officialPool, allocation[theme][0]), ...takeDistinct(scenarioPool, allocation[theme][1]));
    });
    return shuffle(picked);
  }

  function renderMockPage() {
    const canResume = activeSession && activeSession.mode === "mock";
    $("#resume-mock").classList.toggle("hidden", !canResume);
    $("#resume-mock").onclick = () => resumeSession();
    $("#mock-history-list").innerHTML = state.mocks.length ? state.mocks.slice().reverse().slice(0, 8).map((m) => {
      const date = new Date(m.finishedAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
      const passed = m.score >= 32;
      return '<div class="history-row"><div><strong>' + (passed ? "Réussi" : "Continuez à vous entraîner") + '</strong><small>' + date + '</small></div><span>' + Math.round(m.score / 40 * 100) + ' %</span><span class="history-score ' + (passed ? "pass" : "fail") + '">' + m.score + '/40</span></div>';
    }).join("") : '<div class="empty-state"><strong>Aucun examen blanc</strong><span>Vos tentatives chronométrées apparaîtront ici.</span></div>';
  }

  function renderReview() {
    const due = dueQuestions();
    const tomorrow = DATA.questions.filter((q) => {
      const s = state.questionStats[q.id];
      return s && s.due > Date.now() && s.due <= Date.now() + dayMs;
    });
    const later = DATA.questions.filter((q) => {
      const s = state.questionStats[q.id];
      return s && s.due > Date.now() + dayMs;
    });
    $("#review-stats").innerHTML =
      '<div class="review-stat"><strong>' + due.length + '</strong><span>à revoir maintenant</span></div>' +
      '<div class="review-stat"><strong>' + tomorrow.length + '</strong><span>à revoir sous 24 heures</span></div>' +
      '<div class="review-stat"><strong>' + later.length + '</strong><span>programmées plus tard</span></div>';
    $("#start-review").disabled = !due.length;
    $("#start-review").onclick = () => startSession(due.slice(0, Number(state.prefs.dailyGoal)), { name: "Révision espacée", feedback: true });
    const preview = due.concat(tomorrow, later).slice(0, 12);
    $("#review-preview").innerHTML = preview.length ? preview.map((q, i) => {
      const s = state.questionStats[q.id];
      const when = s.due <= Date.now() ? "Maintenant" : new Date(s.due).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
      return '<div class="preview-row"><span class="num">' + String(i + 1).padStart(2, "0") + '</span><div><strong>' + escapeHtml(q.prompt) + '</strong><small>' + DATA.themes[q.theme].short + ' · maîtrise ' + masteryFor(q) + ' %</small></div><time>' + when + '</time></div>';
    }).join("") : '<div class="empty-state"><strong>Votre file est vide</strong><span>Entraînez-vous sur de nouvelles questions : elles seront programmées automatiquement.</span></div>';
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[character]));
  }

  function searchKey(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr").trim();
  }

  function renderLibrary() {
    populateThemeSelects();
    const query = searchKey($("#question-search").value);
    const theme = $("#library-theme").value;
    const source = $("#library-source").value;
    const resource = $("#library-resource").value;
    const status = $("#library-status") ? $("#library-status").value : "all";
    const level = $("#library-level") ? $("#library-level").value : "all";
    let results = DATA.questions.filter((q) => {
      const matchesTheme = theme === "all" || q.theme === theme;
      const matchesSource = matchesQuestionSource(q, source);
      const matchesResource = resource === "all" || q.sourceIds.includes(resource);
      const sourceTitles = q.sourceIds.map((id) => SOURCE_INDEX.get(id).title);
      const haystack = searchKey([q.prompt, q.correct, ...q.wrong, q.explanation, q.hook, ...sourceTitles].join(" "));
      const matchesLevel = level === "all" || (level === "base" && !isAdvanced(q)) || (level === "advanced" && isAdvanced(q));
      return matchesTheme && matchesSource && matchesResource && matchesLevel && matchesQuestionStatus(q, status) && (!query || haystack.includes(query));
    });
    $("#library-result-count").textContent = results.length + " QCM · " + results.filter(hasSeen).length + " explorés";
    const visible = results.slice(0, libraryLimit);
    $("#question-list").innerHTML = visible.map((q) => {
      const themeData = DATA.themes[q.theme];
      const bookmarked = state.bookmarks.includes(q.id);
      return '<details class="bank-question"><summary><span class="bank-id">' + q.id + '</span><h3>' + escapeHtml(q.prompt) + '</h3><button class="bookmark-button ' + (bookmarked ? "is-bookmarked" : "") + '" data-bookmark="' + q.id + '" type="button" aria-label="Favori">' + (bookmarked ? "★" : "☆") + '</button></summary>' +
        '<div class="bank-answer"><span class="source-chip ' + q.type + '">' + questionKindLabel(q) + '</span> <span class="theme-chip" style="background:' + themeData.soft + ';color:' + themeData.color + '">' + themeData.short + '</span><p class="question-study-status">' + questionStatusLabel(q) + '</p>' +
        questionClarification(q) + '<p><strong>Réponse :</strong> ' + escapeHtml(q.correct) + '</p>' + optionCorrections(q) + '<p><b>À retenir :</b> ' + escapeHtml(q.hook) + '</p>' + sourceLinks(q.sourceIds) + '<button class="button button-soft" data-practice-one="' + q.id + '" type="button">Réviser ce QCM</button></div></details>';
    }).join("") || '<div class="empty-state"><strong>Aucun QCM correspondant</strong><span>Essayez un autre mot, thème ou filtre.</span></div>';
    $("#load-more").classList.toggle("hidden", results.length <= libraryLimit);
    $("#load-more").onclick = () => {
      libraryLimit += 40;
      renderLibrary();
    };
  }

  function toggleBookmark(id) {
    const index = state.bookmarks.indexOf(id);
    if (index >= 0) {
      state.bookmarks.splice(index, 1);
      toast("Favori supprimé.");
    } else {
      state.bookmarks.push(id);
      toast("Question ajoutée aux favoris.");
    }
    saveState();
    if (currentRoute === "library") renderLibrary();
    if (currentRoute === "quiz") renderQuestion();
  }

  function renderSettings() {
    $("#display-name").value = normalizeDisplayName(state.metadata.displayName);
    $("#daily-goal").value = String(state.prefs.dailyGoal);
    $("#english-hints").checked = state.prefs.englishHints;
    $("#reduce-motion").checked = state.prefs.reduceMotion;
    renderSourceCoverage();
  }

  function updateContentTotals() {
    const counts = { "official-total": DATA.officialCount, "study-total": DATA.studyCount, "scenario-total": DATA.scenarioCount, "question-total": DATA.questions.length, "fiche-total": DATA.metadata.ficheCount };
    Object.entries(counts).forEach(([className, count]) => {
      $$("." + className).forEach((element) => { element.textContent = count.toLocaleString("fr-FR"); });
    });
  }

  function renderSourceCoverage() {
    updateContentTotals();
    $("#coverage-list").innerHTML = Object.values(DATA.themes).map((theme) => {
      const sources = DATA.sources.filter((source) => source.theme === theme.id && ["fiche", "livret", "reference"].includes(source.kind) && source.questionIds.length);
      const rows = sources.map((source) => {
        const questions = source.questionIds.map(questionById);
        const seen = questions.filter(hasSeen).length;
        const mastered = questions.filter((question) => masteryFor(question) >= 80).length;
        const percent = Math.round(seen / questions.length * 100);
        const facts = factsForSource(source);
        const factsSeen = facts.filter((fact) => questionsForFact(fact).some(hasSeen)).length;
        const checklist = facts.length ? '<details class="coverage-facts"><summary>' + factsSeen + '/' + facts.length + ' repères abordés · Voir le détail</summary><p class="muted">Un repère est abordé après au moins une réponse à un QCM lié. Cela ne signifie pas qu’il est déjà maîtrisé.</p><ul>' + facts.map((fact, index) => {
          const pool = questionsForFact(fact);
          const covered = pool.some(hasSeen);
          return '<li><span class="fact-state ' + (covered ? 'is-seen' : '') + '" aria-label="' + (covered ? 'Abordé' : 'À découvrir') + '">' + (covered ? '✓' : '○') + '</span><span>' + escapeHtml(fact.label) + '<small>' + pool.filter(hasSeen).length + '/' + pool.length + ' QCM explorés</small></span><button class="text-button" type="button" data-resource-fact="' + escapeHtml(source.id) + '" data-fact-index="' + index + '">Travailler</button></li>';
        }).join('') + '</ul></details>' : '';
        return '<div class="coverage-row"><div><a href="' + escapeHtml(sourceHref(source)) + '" target="_blank" rel="noopener">' + escapeHtml(source.title) + '</a><small>' + (source.kind === "livret" ? "Livret du citoyen" : source.kind === "fiche" ? "Fiche officielle" : "Référence complémentaire") + ' · ' + seen + '/' + questions.length + ' QCM explorés · ' + mastered + ' maîtrisés</small><div class="bar" style="--bar-color:' + theme.color + '"><span style="width:' + percent + '%"></span></div>' + checklist + '</div><button class="button button-soft" type="button" data-resource-practice="' + escapeHtml(source.id) + '">Réviser</button></div>';
      }).join("");
      return '<details class="coverage-theme"><summary><strong>' + escapeHtml(theme.name) + '</strong><span>' + sources.filter((source) => source.kind === "fiche").length + ' fiches</span></summary>' + rows + '</details>';
    }).join("");
  }

  function exportProgress() {
    const backup = {
      product: "Bleu Blanc Quiz",
      exportedAt: new Date().toISOString(),
      dataVersion: DATA.version,
      state: state
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bleu-blanc-quiz-" + localDateKey() + ".json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    toast("Sauvegarde de la progression exportée.");
  }

  function importProgress(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const imported = parsed.state || parsed;
        if (!imported || typeof imported !== "object" || !imported.questionStats) throw new Error("Sauvegarde invalide");
        const base = defaultState();
        state = {
          ...base,
          ...imported,
          schema: base.schema,
          metadata: {
            ...base.metadata,
            ...(imported.metadata || {}),
            displayName: normalizeDisplayName(imported.metadata && imported.metadata.displayName)
          },
          prefs: { ...base.prefs, ...(imported.prefs || {}) }
        };
        activeSession = state.activeSession || null;
        activeOralSession = state.activeOralSession || null;
        saveState();
        applyPreferences();
        renderDashboard();
        toast("Progression importée avec succès.");
        setRoute("dashboard");
        if (!state.metadata.displayName) showProfileDialog();
      } catch (error) {
        toast("Ce fichier n’est pas une sauvegarde valide de Bleu Blanc Quiz.");
      }
      $("#import-progress").value = "";
    };
    reader.readAsText(file);
  }

  function confirmAction(title, message, callback) {
    const dialog = $("#confirm-dialog");
    $("#dialog-title").textContent = title;
    $("#dialog-message").textContent = message;
    pendingConfirm = callback;
    dialog.showModal();
  }

  function createSession(questions, options) {
    const chosen = uniqueQuestions(questions);
    const startedAt = Date.now();
    const remaining = options.remaining === undefined ? (options.timed ? DATA.metadata.durationMinutes * 60 : 0) : Math.max(0, Number(options.remaining) || 0);
    return {
      id: "session-" + Date.now(),
      mode: options.mode || "practice",
      name: options.name || "Entraînement",
      feedback: options.feedback !== false,
      timed: Boolean(options.timed),
      remaining,
      endsAt: options.timed ? startedAt + remaining * 1000 : null,
      questionIds: chosen.map((q) => q.id),
      optionOrders: {},
      index: 0,
      answers: [],
      startedAt: Date.now(),
      lastSavedAt: Date.now(),
      statsApplied: false
    };
  }

  function startSession(questions, options) {
    options = options || {};
    if (!questions || !questions.length) {
      toast("Aucune question ne correspond à cette séance.");
      return;
    }
    activeSession = createSession(questions, options);
    saveState();
    setRoute("quiz", { noRender: true });
    renderQuestion();
    startTimer();
  }

  function resumeSession() {
    if (!activeSession && state.activeSession) activeSession = state.activeSession;
    if (!activeSession) {
      toast("Aucune séance n’est enregistrée.");
      return;
    }
    syncTimedSession();
    setRoute("quiz", { noRender: true });
    renderQuestion();
    startTimer();
  }

  function persistSession() {
    syncTimedSession();
    if (activeSession) activeSession.lastSavedAt = Date.now();
    saveState();
  }

  function syncTimedSession() {
    if (!activeSession || !activeSession.timed) return;
    const now = Date.now();
    if (!Number.isFinite(activeSession.endsAt)) {
      const elapsed = activeSession.lastSavedAt ? Math.max(0, Math.floor((now - activeSession.lastSavedAt) / 1000)) : 0;
      activeSession.endsAt = now + Math.max(0, activeSession.remaining - elapsed) * 1000;
    }
    activeSession.remaining = Math.max(0, Math.ceil((activeSession.endsAt - now) / 1000));
    activeSession.lastSavedAt = now;
  }

  function currentQuestion() {
    return activeSession ? questionById(activeSession.questionIds[activeSession.index]) : null;
  }

  function optionsFor(question) {
    if (!activeSession.optionOrders[question.id]) {
      activeSession.optionOrders[question.id] = shuffle([question.correct, ...question.wrong]);
      persistSession();
    }
    return activeSession.optionOrders[question.id];
  }

  function renderQuestion() {
    if (!activeSession) return;
    if (activeSession.index >= activeSession.questionIds.length) {
      finishSession();
      return;
    }
    const question = currentQuestion();
    const theme = DATA.themes[question.theme];
    const answer = activeSession.answers[activeSession.index];
    const choices = optionsFor(question);
    const isMock = activeSession.mode === "mock";
    $("#session-name").textContent = activeSession.name;
    $("#quiz-theme").textContent = theme.name;
    $("#quiz-theme").style.background = theme.soft;
    $("#quiz-theme").style.color = theme.color;
    $("#quiz-source").textContent = questionKindLabel(question);
    $("#quiz-source").className = "source-chip " + question.type;
    $("#quiz-bookmark").textContent = state.bookmarks.includes(question.id) ? "★" : "☆";
    $("#quiz-bookmark").classList.toggle("is-bookmarked", state.bookmarks.includes(question.id));
    $("#quiz-bookmark").onclick = () => toggleBookmark(question.id);
    $("#quiz-title").textContent = question.prompt;
    $("#quiz-clarification").innerHTML = questionClarification(question);
    $("#quiz-progress-text").textContent = (activeSession.index + 1) + " sur " + activeSession.questionIds.length;
    $("#quiz-progress-bar").style.width = ((activeSession.index + (answer ? 1 : 0)) / activeSession.questionIds.length * 100) + "%";
    $("#answer-list").innerHTML = choices.map((choice, index) => {
      let cls = "";
      if (answer && !isMock) {
        if (choice === question.correct) cls = " is-correct";
        else if (choice === answer.choice) cls = " is-wrong";
      } else if (answer && isMock && choice === answer.choice) {
        cls = " is-selected";
      }
      return '<button class="answer-option' + cls + '" type="button" data-choice-index="' + index + '"' + (answer ? " disabled" : "") + '><span class="answer-letter">' + ["A", "B", "C", "D"][index] + '</span><span>' + escapeHtml(choice) + '</span></button>';
    }).join("");

    $$(".answer-option").forEach((button) => {
      button.onclick = () => answerQuestion(choices[Number(button.dataset.choiceIndex)]);
    });
    $("#feedback-box").classList.add("hidden");
    $("#next-question").classList.toggle("hidden", !answer);
    $("#next-question").textContent = activeSession.index === activeSession.questionIds.length - 1 ? "Terminer la séance →" : "Question suivante →";
    $("#next-question").onclick = nextQuestion;
    if (answer && !isMock) renderFeedback(question, answer);
    updateSessionPanel();
    updateTimerDisplay();
  }

  function answerQuestion(choice) {
    if (!activeSession || activeSession.answers[activeSession.index]) return;
    syncTimedSession();
    if (activeSession.timed && activeSession.remaining <= 0) {
      finishSession(true);
      return;
    }
    const question = currentQuestion();
    const correct = choice === question.correct;
    const record = { id: question.id, choice: choice, correct: correct, answeredAt: Date.now() };
    activeSession.answers[activeSession.index] = record;
    if (activeSession.mode !== "mock") updateQuestionStat(question, correct);
    persistSession();
    renderQuestion();
  }

  function renderFeedback(question, answer) {
    const box = $("#feedback-box");
    box.classList.remove("hidden");
    box.classList.toggle("is-wrong", !answer.correct);
    $("#feedback-icon").textContent = answer.correct ? "✓" : "×";
    $("#feedback-title").textContent = answer.correct ? "Bonne réponse" : "Réponse incorrecte";
    $("#feedback-wrong-detail").classList.toggle("hidden", answer.correct);
    $("#feedback-correct-detail").classList.toggle("hidden", answer.correct);
    if (!answer.correct) {
      const reason = question.wrongReasons && question.wrongReasons[answer.choice]
        ? question.wrongReasons[answer.choice]
        : "Cette proposition ne correspond pas à la règle ou au fait demandé. " + question.explanation;
      $("#feedback-wrong-reason").textContent = reason;
      $("#feedback-correct-answer").textContent = question.correct;
    }
    $("#feedback-explanation").textContent = !answer.correct || state.prefs.englishHints ? question.explanation : "Réponse correcte : " + question.correct;
    $("#memory-hook p").textContent = question.hook;
    $("#feedback-options").innerHTML = optionCorrections(question, optionsFor(question));
    $("#feedback-sources").innerHTML = sourceLinks(question.sourceIds);
    $("#feedback-option-details").open = !answer.correct;
  }

  function nextQuestion() {
    if (!activeSession || !activeSession.answers[activeSession.index]) return;
    activeSession.index += 1;
    persistSession();
    if (activeSession.index >= activeSession.questionIds.length) finishSession();
    else renderQuestion();
  }

  function updateSessionPanel() {
    const answered = activeSession.answers.filter(Boolean);
    const correct = answered.filter((a) => a.correct).length;
    $("#session-correct").textContent = activeSession.mode === "mock" ? "—" : correct;
    $("#session-accuracy").textContent = activeSession.mode === "mock" ? "Masquée" : answered.length ? Math.round(correct / answered.length * 100) + " %" : "—";
    let streak = 0;
    if (activeSession.mode !== "mock") {
      for (let i = answered.length - 1; i >= 0 && answered[i].correct; i -= 1) streak += 1;
    }
    $("#session-streak").textContent = activeSession.mode === "mock" ? "Masquée" : streak;
    $("#session-dots").innerHTML = activeSession.questionIds.map((id, index) => {
      const answer = activeSession.answers[index];
      const cls = answer ? (activeSession.mode === "mock" ? "correct" : answer.correct ? "correct" : "wrong") : index === activeSession.index ? "current" : "";
      return '<i class="' + cls + '"></i>';
    }).join("");
  }

  function startTimer() {
    stopTimer();
    syncTimedSession();
    if (!activeSession || !activeSession.timed) {
      $("#quiz-timer").classList.add("hidden");
      return;
    }
    $("#quiz-timer").classList.remove("hidden");
    if (activeSession.remaining <= 0) {
      finishSession(true);
      return;
    }
    quizTimer = setInterval(() => {
      if (!activeSession) return;
      syncTimedSession();
      updateTimerDisplay();
      if (activeSession.remaining % 5 === 0) persistSession();
      if (activeSession.remaining <= 0) finishSession(true);
    }, 1000);
  }

  function stopTimer() {
    if (quizTimer) clearInterval(quizTimer);
    quizTimer = null;
  }

  function updateTimerDisplay() {
    if (!activeSession || !activeSession.timed) {
      $("#quiz-timer").classList.add("hidden");
      return;
    }
    const minutes = Math.floor(activeSession.remaining / 60);
    const seconds = activeSession.remaining % 60;
    $("#quiz-timer").textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
    $("#quiz-timer").classList.toggle("warning", activeSession.remaining <= 300);
  }

  function finishSession(timedOut) {
    if (!activeSession) return;
    stopTimer();
    const session = activeSession;
    if (session.mode === "mock" && !session.statsApplied) {
      session.questionIds.forEach((id, index) => {
        const question = questionById(id);
        const answer = session.answers[index];
        if (question && answer && answer.choice) updateQuestionStat(question, Boolean(answer.correct));
      });
      session.statsApplied = true;
    }
    const answers = session.questionIds.map((id, index) => {
      const question = questionById(id);
      const answer = session.answers[index] || { id: id, choice: null, correct: false };
      return { ...answer, question: question };
    });
    const score = answers.filter((a) => a.correct).length;
    if (session.mode === "mock") {
      state.mocks.push({
        score: score,
        total: 40,
        startedAt: session.startedAt,
        finishedAt: Date.now(),
        timedOut: Boolean(timedOut),
        answers: answers.map((a) => ({ id: a.id, correct: a.correct, answered: Boolean(a.choice) }))
      });
      state.mocks = state.mocks.slice(-20);
    }
    lastResults = { session: session, answers: answers, score: score, timedOut: Boolean(timedOut) };
    activeSession = null;
    state.activeSession = null;
    saveState();
    renderResults();
    setRoute("results", { noRender: true });
  }

  function renderResults() {
    const result = lastResults;
    if (!result) return setRoute("dashboard");
    const total = result.answers.length;
    const pct = Math.round(result.score / total * 100);
    const isMock = result.session.mode === "mock";
    const passed = isMock ? result.score >= 32 : pct >= 80;
    $("#result-burst").textContent = passed ? "✓" : "↻";
    $("#result-burst").style.background = passed ? "var(--teal-soft)" : "var(--gold-soft)";
    $("#result-burst").style.color = passed ? "var(--teal)" : "var(--gold)";
    $("#result-kicker").textContent = result.timedOut ? "Temps écoulé" : isMock ? "Examen blanc terminé" : "Entraînement terminé";
    $("#results-heading").textContent = passed ? (isMock ? "Vous avez réussi cet examen blanc." : "Très bonne séance.") : "Séance utile : revoyez les points faibles.";
    $("#result-score").textContent = result.score + "/" + total;
    $("#result-percent").textContent = pct + "%";
    $("#result-message").textContent = isMock
      ? (passed ? "Vous avez atteint le seuil officiel de 32/40. Continuez à réviser pour rendre ce résultat régulier." : "Le seuil officiel est de 32/40. Les réponses erronées sont programmées pour révision ; les questions sans réponse restent à explorer.")
      : "Chaque réponse a actualisé votre calendrier de révision adaptatif.";
    $("#result-breakdown").innerHTML = Object.values(DATA.themes).map((theme) => {
      const rows = result.answers.filter((a) => a.question.theme === theme.id);
      if (!rows.length) return "";
      const correct = rows.filter((a) => a.correct).length;
      const p = Math.round(correct / rows.length * 100);
      return '<div class="breakdown-row"><span>' + theme.short + '</span><div class="bar" style="--bar-color:' + theme.color + '"><span style="width:' + p + '%"></span></div><strong>' + correct + '/' + rows.length + '</strong></div>';
    }).join("");
    const mistakeAnswers = result.answers.filter((answer) => !answer.correct);
    $("#result-corrections").innerHTML = mistakeAnswers.length
      ? '<div class="corrections-heading"><span class="eyebrow">Correction détaillée</span><h3>Pourquoi chaque réponse était fausse</h3></div>' + mistakeAnswers.map((answer, index) => {
        const question = answer.question;
        const chosen = answer.choice || "Aucune réponse";
        const reason = answer.choice && question.wrongReasons && question.wrongReasons[answer.choice]
          ? question.wrongReasons[answer.choice]
          : "Aucune réponse n’a été donnée. " + question.explanation;
        return '<details class="correction-card"' + (index === 0 ? " open" : "") + '><summary><span>' + String(index + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(question.prompt) + '</strong></summary>' +
          '<div><p class="chosen-answer"><b>Votre réponse :</b> ' + escapeHtml(chosen) + '</p><p class="why-wrong"><b>Pourquoi elle est fausse :</b> ' + escapeHtml(reason) + '</p><p class="right-answer"><b>Bonne réponse :</b> ' + escapeHtml(question.correct) + '</p>' + optionCorrections(question, result.session.optionOrders[question.id]) + '<p class="correction-hook"><b>À retenir :</b> ' + escapeHtml(question.hook) + '</p>' + sourceLinks(question.sourceIds) + '</div></details>';
      }).join("")
      : '<div class="all-correct-note">✓ Aucune erreur dans cette séance.</div>';
    const mistakes = mistakeAnswers.map((answer) => answer.question);
    $("#review-mistakes").classList.toggle("hidden", !mistakes.length);
    $("#review-mistakes").onclick = () => startSession(mistakes, { name: "Révision des erreurs", feedback: true });
    if (passed) celebrate();
  }

  function applyPreferences() {
    document.documentElement.dataset.theme = state.prefs.theme;
    document.body.classList.toggle("reduce-motion", state.prefs.reduceMotion);
    $("#theme-toggle").textContent = state.prefs.theme === "dark" ? "☀" : "◐";
    document.querySelector('meta[name="theme-color"]').setAttribute("content", state.prefs.theme === "dark" ? "#0b1728" : "#10233f");
  }

  function startCustomSession() {
    const theme = $("#custom-theme").value;
    const source = $("#custom-source").value;
    const requested = $("#custom-count").value;
    const resource = $("#custom-resource").value;
    let pool = DATA.questions.filter((q) => {
      const themeOk = theme === "all" || q.theme === theme;
      const sourceOk = matchesQuestionSource(q, source);
      return themeOk && sourceOk && (resource === "all" || q.sourceIds.includes(resource));
    });
    pool = shuffle(pool);
    const count = requested === "all" ? pool.length : Number(requested);
    startSession(pool.slice(0, count), { name: "Entraînement personnalisé", feedback: true });
  }

  function bindEvents() {
    $$(".nav-item[data-route]").forEach((button) => {
      button.addEventListener("click", () => setRoute(button.dataset.route));
    });
    $$("[data-go]").forEach((button) => {
      button.addEventListener("click", () => setRoute(button.dataset.go));
    });
    $("#menu-button").addEventListener("click", () => {
      setSidebarOpen(!$("#sidebar").classList.contains("is-open"));
    });
    $("#sidebar-backdrop").addEventListener("click", () => setSidebarOpen(false));
    $("#theme-toggle").addEventListener("click", () => {
      state.prefs.theme = state.prefs.theme === "dark" ? "light" : "dark";
      applyPreferences();
      saveState();
    });
    $("#profile-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const input = $("#profile-name");
      if (!saveDisplayName(input.value)) {
        $("#profile-error").textContent = "Saisissez un prénom ou un pseudonyme pour continuer.";
        input.focus();
        return;
      }
      $("#profile-error").textContent = "";
      $("#display-name").value = state.metadata.displayName;
      $("#profile-dialog").close();
      toast("Bienvenue, " + state.metadata.displayName + " !");
    });
    $("#profile-dialog").addEventListener("cancel", (event) => event.preventDefault());

    $("#lesson-filters").addEventListener("click", (event) => {
      const button = event.target.closest("[data-lesson-filter]");
      if (!button) return;
      lessonFilter = button.dataset.lessonFilter;
      renderLessons();
    });
    $("#lesson-grid").addEventListener("click", (event) => {
      const card = event.target.closest("[data-lesson-id]");
      if (card) openLesson(card.dataset.lessonId);
    });
    $("#lesson-grid").addEventListener("keydown", (event) => {
      const card = event.target.closest("[data-lesson-id]");
      if (card && (event.key === "Enter" || event.key === " ")) {
        event.preventDefault();
        openLesson(card.dataset.lessonId);
      }
    });
    $("#back-to-lessons").addEventListener("click", () => setRoute("learn"));
    $("#lesson-search").addEventListener("input", renderLessons);
    $("#weak-list").addEventListener("click", (event) => {
      const button = event.target.closest("[data-weak-concept]");
      if (button) startSession(conceptReviewQuestions(20, [button.dataset.weakConcept]), { name: "Notion à renforcer — autres exemples", feedback: true });
    });

    $("#custom-start").addEventListener("click", startCustomSession);
    $("#custom-theme").addEventListener("change", populateResourceSelects);
    $("#custom-source").addEventListener("change", populateResourceSelects);
    $("#start-mock").addEventListener("click", () => {
      startSession(buildMockQuestions(), { mode: "mock", name: "Examen blanc chronométré", feedback: false, timed: true });
    });
    $("#quit-quiz").addEventListener("click", () => {
      persistSession();
      setRoute("dashboard");
      toast("Séance enregistrée. Vous pourrez la reprendre à tout moment.");
    });

    $("#question-search").addEventListener("input", () => {
      libraryLimit = 40;
      renderLibrary();
    });
    $("#library-theme").addEventListener("change", () => {
      libraryLimit = 40;
      renderLibrary();
    });
    $("#library-source").addEventListener("change", () => {
      libraryLimit = 40;
      renderLibrary();
    });
    $("#library-resource").addEventListener("change", () => {
      libraryLimit = 40;
      renderLibrary();
    });
    ["#library-status", "#library-level"].forEach((selector) => {
      const select = $(selector);
      if (select) select.addEventListener("change", () => { libraryLimit = 40; renderLibrary(); });
    });
    $("#coverage-list").addEventListener("click", (event) => {
      const fact = event.target.closest("[data-resource-fact]");
      if (fact) {
        practiceFact(fact.dataset.resourceFact, Number(fact.dataset.factIndex));
        return;
      }
      const button = event.target.closest("[data-resource-practice]");
      if (button) practiceResource(button.dataset.resourcePractice);
    });
    $("#question-list").addEventListener("click", (event) => {
      const start = event.target.closest("[data-practice-one]");
      if (start) {
        startSession([questionById(start.dataset.practiceOne)], { name: "QCM ciblé", feedback: true });
        return;
      }
      const button = event.target.closest("[data-bookmark]");
      if (!button) return;
      event.preventDefault();
      toggleBookmark(button.dataset.bookmark);
    });

    $("#display-name").addEventListener("change", (event) => {
      if (!saveDisplayName(event.target.value)) {
        event.target.value = state.metadata.displayName;
        toast("Le prénom ou pseudonyme ne peut pas être vide.");
        return;
      }
      event.target.value = state.metadata.displayName;
      toast("Nom d’affichage enregistré.");
    });
    $("#daily-goal").addEventListener("change", (event) => {
      state.prefs.dailyGoal = Number(event.target.value);
      saveState();
    });
    $("#english-hints").addEventListener("change", (event) => {
      state.prefs.englishHints = event.target.checked;
      saveState();
    });
    $("#reduce-motion").addEventListener("change", (event) => {
      state.prefs.reduceMotion = event.target.checked;
      applyPreferences();
      saveState();
    });
    $("#export-progress").addEventListener("click", exportProgress);
    $("#import-progress").addEventListener("change", (event) => importProgress(event.target.files[0]));
    $("#reset-progress").addEventListener("click", () => {
      confirmAction("Effacer toute la progression ?", "Cette action supprimera de ce navigateur l’historique, les séances orales, les notes, les grands quiz, les favoris et les leçons terminées.", () => {
        state = defaultState();
        activeSession = null;
        activeOralSession = null;
        localStorage.removeItem(STORAGE_KEY);
        applyPreferences();
        setRoute("dashboard");
        toast("Progression effacée.");
        setTimeout(showProfileDialog, 0);
      });
    });
    $("#confirm-dialog").addEventListener("close", () => {
      if ($("#confirm-dialog").returnValue === "confirm" && pendingConfirm) pendingConfirm();
      pendingConfirm = null;
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && $("#sidebar").classList.contains("is-open")) {
        setSidebarOpen(false);
        $("#menu-button").focus();
        return;
      }
      if (currentRoute === "oral" && activeOralSession && !["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName)) {
        const question = currentOralQuestion();
        const revealed = question && activeOralSession.revealed[question.id];
        if (!revealed && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          activeOralSession.revealed[question.id] = true;
          saveState();
          renderOralQuestion();
        } else if (revealed && ["1", "2", "3"].includes(event.key)) {
          event.preventDefault();
          rateOralQuestion(Number(event.key) - 1);
        } else if (event.key === "Escape") {
          saveState();
          setRoute("entretien");
        }
        return;
      }
      if (currentRoute !== "quiz" || !activeSession) return;
      const question = currentQuestion();
      const answered = activeSession.answers[activeSession.index];
      if (!answered && ["1", "2", "3", "4"].includes(event.key)) {
        const options = optionsFor(question);
        answerQuestion(options[Number(event.key) - 1]);
      } else if (answered && (event.key === "Enter" || event.key === "ArrowRight")) {
        nextQuestion();
      } else if (event.key === "Escape") {
        persistSession();
        setRoute("dashboard");
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (currentRoute === "oral" && document.hidden) stopOralPrepTimer(true);
      if (!activeSession || !activeSession.timed || currentRoute !== "quiz") return;
      if (document.hidden) {
        persistSession();
        stopTimer();
      } else {
        syncTimedSession();
        updateTimerDisplay();
        startTimer();
      }
    });
    window.addEventListener("beforeunload", persistSession);
  }

  function init() {
    if (!DATA || DATA.officialCount !== 259 || !DATA.studyCount || !DATA.version.endsWith("-fr") || DATA.contentErrors.length || DATA.metadata.supplementCount < 8) {
      document.body.innerHTML = '<main style="padding:40px;font-family:sans-serif"><h1>Échec du chargement</h1><p>Les contenus complets n’ont pas pu être chargés.</p></main>';
      return;
    }
    activeSession = state.activeSession || null;
    activeOralSession = state.activeOralSession || null;
    applyPreferences();
    bindEvents();
    populateThemeSelects();
    updateContentTotals();
    renderDashboard();
    if (!state.metadata.displayName) showProfileDialog();
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  init();
})();
