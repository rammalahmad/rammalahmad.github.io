/*
 * Quotas de l’article 3 de l’arrêté du 10 octobre 2025, fourni par l’utilisateur.
 * Le rattachement des 258 énoncés par notion est pédagogique : la banque n’est
 * pas présentée comme une annotation ministérielle question par question.
 * Aucun énoncé, choix de réponse, ID ou résultat existant n’est modifié.
 */
(function () {
  "use strict";

  const data = window.CIVIQUE_DATA;
  const version = "2026.10.24-quotas-notions-fr";
  const sourceUrl = "https://www.legifrance.gouv.fr/eli/arrete/2025/10/10/INTV2527907A/jo/article_3";
  const classification = "Classement pédagogique par notion ; les quotas sont ceux de l’article 3.";
  const specifications = [
    {"id":"principles-symbols","theme":"principles","kind":"official","name":"Devise et symboles de la République","count":3,"questionIds":["O001","O002","O003","O004","O005","O006","O007","O008","O009","O010","O011","O012","O013","O014","O015","O016","O017","O018","O019","O020","O029","ON001","ON002"]},
    {"id":"principles-laicite","theme":"principles","kind":"official","name":"Laïcité","count":2,"questionIds":["O021","O022","O023","O024","O025","O026","O027","O028","O030","O031","O032","O033","O034","O035","ON003"]},
    {"id":"principles-situations","theme":"principles","kind":"scenario","name":"Mises en situation","count":6},
    {"id":"institutions-vote","theme":"institutions","kind":"official","name":"Démocratie et droit de vote","count":3,"questionIds":["O037","O038","O039","O040","O041","O042","O043","O046","O047","O048","O050","O054","O055","O056","O057","O058","O060","O064","O069"]},
    {"id":"institutions-organization","theme":"institutions","kind":"official","name":"Organisation de la République française","count":2,"questionIds":["O036","O044","O049","O051","O052","O053","O059","O061","O062","O063","O065","O066","O067","O068","O070","O071","O072","O073","O074","O075"]},
    {"id":"institutions-europe","theme":"institutions","kind":"official","name":"Institutions européennes","count":1,"questionIds":["O076","O077","O078","O079","O080","O081","O082","O083","O084","O085","O086","O087","O088","O089","ON004","ON005","ON006"]},
    {"id":"rights-fundamental","theme":"rights","kind":"official","name":"Droits fondamentaux","count":2,"questionIds":["O090","O091","O092","O093","O094","O095","O096","O097","O098","O099","O100","O101","O102","O103","O104","O105","O106","O117","O118","O120"]},
    {"id":"rights-obligations","theme":"rights","kind":"official","name":"Obligations et devoirs des personnes résidant en France","count":3,"questionIds":["O107","O108","O109","O110","O111","O112","O113","O114","O115","O116","O119","O121","O122","O123","O124","O125","ON007"]},
    {"id":"rights-situations","theme":"rights","kind":"scenario","name":"Mises en situation","count":6},
    {"id":"history-periods","theme":"history","kind":"official","name":"Principales périodes et personnages historiques","count":3,"questionIds":["O126","O127","O128","O129","O130","O131","O132","O133","O134","O135","O136","O137","O138","O139","O140","O141","O142","O143","O144","O145","O146","O147","O148","O149","O150","O151","O152","O153","O154","O155","O156","O166","ON008","ON009","ON010","ON011"]},
    {"id":"history-geography","theme":"history","kind":"official","name":"Territoires et géographie","count":3,"questionIds":["O169","O182","O183","O184","O185","O186","O187","O188","O189","O190","O191","O192","O193","O194","O195","O196","O197","O198","O199","O200","O201","ON013","ON014"]},
    {"id":"history-heritage","theme":"history","kind":"official","name":"Patrimoine français","count":2,"questionIds":["O157","O158","O159","O160","O161","O162","O163","O164","O165","O167","O168","O170","O171","O172","O173","O174","O175","O176","O177","O178","O179","O180","O181","ON012"]},
    {"id":"society-residence","theme":"society","kind":"official","name":"S’installer et résider en France","count":1,"questionIds":["O202","O203","O204","O205","O206","O207","O208","O209","O213","O214"]},
    {"id":"society-health","theme":"society","kind":"official","name":"L’accès aux soins","count":1,"questionIds":["O210","O215","O216","O217","O218","O219","O220","O221","ON015"]},
    {"id":"society-work","theme":"society","kind":"official","name":"Travailler en France","count":1,"questionIds":["O222","O223","O224","O225","O226","O227","O228","O229","O230","O231","O232","O243"]},
    {"id":"society-family","theme":"society","kind":"official","name":"Autorité parentale et système éducatif","count":1,"questionIds":["O211","O212","O233","O234","O235","O236","O237","O238","O239","O240","O241","O242","O244"]}
  ];
  const normalize = (text) => String(text || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr").replace(/[^a-z0-9]/g, "");
  const isAdvanced = (question) => question.level === "approfondissement" || question.depth === "approfondissement" || question.priority === "extension";
  const errors = [];
  const allQuestions = data && Array.isArray(data.questions) ? data.questions : [];
  const questionIndex = new Map(allQuestions.map((question) => [question.id, question]));
  if (questionIndex.size !== allQuestions.length) errors.push("Un identifiant de question est présent plusieurs fois.");
  const representatives = new Map();
  const aliases = new Map();
  allQuestions.filter((question) => question.official).forEach((question) => {
    const key = normalize(question.prompt);
    if (!representatives.has(key)) representatives.set(key, question);
    const canonical = representatives.get(key);
    // Les anciennes variantes d’un même énoncé peuvent formuler la réponse
    // différemment. L’alias porte sur l’énoncé, sans modifier leurs choix sauvegardés.
    aliases.set(question.id, canonical.id);
  });
  if (representatives.size !== 258) errors.push("La banque des 258 énoncés officiels distincts est incomplète.");
  const assigned = new Map();
  const topicByQuestionId = new Map();
  const allocation = Object.fromEntries(["principles", "institutions", "rights", "history", "society"].map((theme) => [theme, [0, 0]]));
  const topics = specifications.map((spec) => {
    const questions = [];
    if (!Number.isInteger(spec.count) || spec.count < 1) errors.push("Quota invalide : " + spec.id);
    if (spec.kind === "official") {
      (spec.questionIds || []).forEach((id) => {
        const question = questionIndex.get(id);
        if (!question || !question.official || question.type !== "official" || question.theme !== spec.theme || aliases.get(id) !== id || isAdvanced(question)) {
          errors.push("Énoncé officiel absent, non canonique ou mal classé : " + spec.id + " / " + id);
          return;
        }
        if (assigned.has(id)) {
          errors.push("Énoncé classé dans plusieurs notions : " + id);
          return;
        }
        assigned.set(id, spec.id);
        questions.push(question);
      });
    } else if (spec.kind === "scenario") {
      questions.push(...allQuestions.filter((question) => question.type === "scenario" && !question.official && question.theme === spec.theme && !isAdvanced(question)));
    } else errors.push("Type de notion invalide : " + spec.id);
    if (new Set(questions.map((question) => normalize(question.prompt))).size < spec.count) {
      errors.push("Réserve insuffisante pour le quota de la notion : " + spec.id);
    }
    const topic = Object.freeze({
      id: spec.id, theme: spec.theme, kind: spec.kind, name: spec.name, count: spec.count,
      questionIds: Object.freeze(questions.map((question) => question.id)),
      questions: Object.freeze(questions)
    });
    if (allocation[spec.theme]) allocation[spec.theme][spec.kind === "official" ? 0 : 1] += spec.count;
    else errors.push("Thème inconnu dans les quotas : " + spec.theme);
    questions.forEach((question) => { topicByQuestionId.set(question.id, topic); });
    return topic;
  });
  representatives.forEach((question) => {
    if (!assigned.has(question.id)) errors.push("Énoncé officiel sans notion : " + question.id);
  });
  aliases.forEach((canonical, id) => {
    const topic = topicByQuestionId.get(canonical);
    if (topic) topicByQuestionId.set(id, topic);
  });
  const knowledgeCount = topics.filter((topic) => topic.kind === "official").reduce((sum, topic) => sum + topic.count, 0);
  const scenarioCount = topics.filter((topic) => topic.kind === "scenario").reduce((sum, topic) => sum + topic.count, 0);
  if (knowledgeCount !== 28 || scenarioCount !== 12 || topics.length !== 16) errors.push("Les quotas ne totalisent pas 28 connaissances et 12 situations.");
  Object.values(allocation).forEach(Object.freeze);
  const topicForQuestion = (question) => topicByQuestionId.get(typeof question === "string" ? question : question && question.id);
  window.CIVIQUE_MOCK_BLUEPRINT = Object.freeze({
    version, sourceUrl, classification, topics: Object.freeze(topics), allocation: Object.freeze(allocation),
    errors: Object.freeze(errors), topicForQuestion, knowledgeCount, scenarioCount, totalCount: knowledgeCount + scenarioCount
  });
})();
