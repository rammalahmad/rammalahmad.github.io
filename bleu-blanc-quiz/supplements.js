(function () {
  "use strict";

  const data = window.CIVIQUE_DATA;
  if (!data) return;
  const errors = [];
  const sources = new Map();
  const packs = window.CIVIQUE_SUPPLEMENTS || [];
  const legacyPacks = window.CIVIQUE_LEGACY_PATCHES || [];
  const legacyQuestions = new Map(data.questions.map((question) => [question.id, question]));
  const legacyLessons = new Map(data.lessons.map((lesson) => [lesson.id, lesson]));
  const correctedIds = new Set();
  legacyPacks.forEach((pack) => {
    (pack.questions || []).forEach((patch) => {
      const question = legacyQuestions.get(patch.id);
      if (!question || correctedIds.has(patch.id)) {
        errors.push("Correction ancienne invalide : " + patch.id);
        return;
      }
      if (["correct", "wrong", "theme", "concept"].some((key) => key in patch) || (question.official && "prompt" in patch)) {
        errors.push("Une correction ne doit pas modifier les choix existants : " + patch.id);
        return;
      }
      ["wrongReasons", "explanation", "hook", "clarification", "prompt"].forEach((key) => {
        if (key in patch) question[key] = patch[key];
      });
      correctedIds.add(patch.id);
    });
    (pack.lessons || []).forEach((patch) => {
      const lesson = legacyLessons.get(patch.id);
      if (!lesson) errors.push("Correction de leçon introuvable : " + patch.id);
      else ["title", "lead", "facts", "body", "example", "trap"].forEach((key) => {
        if (key in patch) lesson[key] = patch[key];
      });
    });
  });
  if (correctedIds.size !== legacyQuestions.size) errors.push("Certaines anciennes corrections détaillées n’ont pas été chargées.");
  const themePages = { principles: 6, institutions: 16, rights: 25, history: 38, society: 62 };
  const addSource = (source) => {
    if (!source || !source.id || !source.title || !source.url) {
      errors.push("Une référence est incomplète.");
      return;
    }
    const previous = sources.get(source.id);
    sources.set(source.id, {
      ...previous, ...source,
      kind: source.kind || (source.id.startsWith("official-bank") ? "official" : source.url.includes("fiches-par-thematiques") ? "fiche" : source.url.includes("livret") ? "livret" : "reference"),
      facts: [...(previous && previous.facts || []), ...(source.facts || [])],
      questionIds: []
    });
  };

  addSource({ id: "officiel-connaissances", title: "Énoncés officiels — examen civique naturalisation", url: "assets/questions-naturalisation-officielles.pdf", kind: "official", theme: "all", section: "Banque officielle" });
  addSource({ id: "livret-citoyen-2026", title: "Livret du citoyen — édition mai 2026", url: "assets/livret-du-citoyen-mai-2026.pdf", kind: "livret", theme: "all", section: "Livret du citoyen" });
  Object.values(data.themes).forEach((theme) => {
    addSource({ id: "livret-" + theme.id, title: "Livret du citoyen — " + theme.name, url: "assets/livret-du-citoyen-mai-2026.pdf#page=" + themePages[theme.id], kind: "livret", theme: theme.id, section: "Livret du citoyen", pages: themePages[theme.id] });
  });
  packs.forEach((pack) => (pack.sources || []).forEach(addSource));
  const lessonIds = new Set(data.lessons.map((lesson) => lesson.id));
  packs.forEach((pack) => (pack.lessons || []).forEach((lesson) => {
    if (lessonIds.has(lesson.id)) {
      errors.push("Identifiant de leçon répété : " + lesson.id);
      return;
    }
    lessonIds.add(lesson.id);
    data.lessons.push(lesson);
  }));
  data.lessons.forEach((lesson) => {
    lesson.sourceIds = lesson.sourceIds || ["livret-" + lesson.theme];
    // These labels were mistranslated in the original short lessons.
    lesson.facts = (lesson.facts || []).map(([label, fact]) => [label === "Concevoir" ? "Devise" : label === "Chiffre" ? "Figure" : label, fact]);
  });

  data.questions.forEach((question) => {
    question.type = question.official ? "official" : "scenario";
    question.sourceIds = question.sourceIds || (question.official ? ["officiel-connaissances"] : ["livret-" + question.theme]);
  });
  packs.forEach((pack) => data.questions.push(...(pack.questions || [])));
  const questionIds = new Set();
  data.questions.forEach((question) => {
    if (questionIds.has(question.id)) errors.push("Identifiant de question répété : " + question.id);
    questionIds.add(question.id);
    question.type = question.official ? "official" : question.type || "study";
    if (!["official", "study", "scenario"].includes(question.type)) errors.push("Type inconnu : " + question.id);
    if (!data.themes[question.theme]) errors.push("Thème inconnu : " + question.id);
    if (!lessonIds.has(question.concept)) errors.push("Leçon introuvable : " + question.id);
    if (!question.prompt || !question.correct || !question.explanation || !question.hook) errors.push("Question incomplète : " + question.id);
    if (!Array.isArray(question.wrong) || question.wrong.length !== 3 || new Set([question.correct, ...(question.wrong || [])]).size !== 4) errors.push("Choix invalides : " + question.id);
    if (!question.wrongReasons || (question.wrong || []).some((choice) => !question.wrongReasons[choice])) errors.push("Correction incomplète : " + question.id);
    question.sourceIds = [...new Set(question.sourceIds || [])];
    if (question.sourceIds.some((id) => sources.get(id) && sources.get(id).kind === "livret") && !question.sourceIds.includes("livret-citoyen-2026")) question.sourceIds.push("livret-citoyen-2026");
    if (question.official && !question.sourceIds.includes("officiel-connaissances")) question.sourceIds.unshift("officiel-connaissances");
    if (!question.sourceIds.length) errors.push("Source manquante : " + question.id);
    question.sourceIds.forEach((id) => {
      const source = sources.get(id);
      if (!source) errors.push("Source introuvable : " + question.id + " / " + id);
      else source.questionIds.push(question.id);
    });
  });
  data.lessons.forEach((lesson) => {
    lesson.sourceIds.forEach((id) => {
      if (!sources.has(id)) errors.push("Source de leçon introuvable : " + lesson.id + " / " + id);
    });
  });

  data.sources = Array.from(sources.values());
  data.officialCount = data.questions.filter((question) => question.official).length;
  data.studyCount = data.questions.filter((question) => question.type === "study").length;
  data.scenarioCount = data.questions.filter((question) => question.type === "scenario").length;
  data.knowledgeCount = data.officialCount + data.studyCount;
  data.version = "2026.10.21-exhaustif-fr";
  data.verified = "2026-10-21";
  data.contentErrors = errors;
  data.metadata = {
    ...data.metadata,
    supplementCount: packs.length,
    legacyCorrections: correctedIds.size,
    ficheCount: new Set(data.sources.filter((source) => source.kind === "fiche").map((source) => source.url.split("#")[0])).size,
    sourceNotice: "Les énoncés du PDF officiel sont repris intégralement. Les choix, corrections, QCM des fiches et du Livret et mises en situation sont conçus pour l’entraînement. Les mises en situation du véritable examen ne sont pas publiées. Le Livret consulté porte la mention « édition mai 2026 » ; la version en vigueur est à vérifier sur le site du ministère."
  };
})();
