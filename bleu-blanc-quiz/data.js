/*
 * Civique data pack
 * Official stems: Ministry of the Interior, published 12 January 2026 under
 * the French Open Licence 2.0. Answer choices, explanations and scenario
 * simulations are original study material; official scenarios are unpublished.
 */
(function () {
  "use strict";

  const THEMES = {
    principles: { id: "principles", short: "Values", name: "Principes et valeurs de la République", icon: "◆", color: "#2457d6", soft: "#eaf0ff", examCount: 11 },
    rights: { id: "rights", short: "Rights", name: "Droits et devoirs", icon: "⚖", color: "#e44752", soft: "#fff0f1", examCount: 11 },
    history: { id: "history", short: "History", name: "Histoire, géographie et culture", icon: "⌂", color: "#d59a28", soft: "#fff7df", examCount: 8 },
    institutions: { id: "institutions", short: "Institutions", name: "Système institutionnel et politique", icon: "▦", color: "#7656cf", soft: "#f1edff", examCount: 6 },
    society: { id: "society", short: "Society", name: "Vivre dans la société française", icon: "+", color: "#168f86", soft: "#e6f7f4", examCount: 4 }
  };

  const LESSONS = [
    {
      id: "symbols", theme: "principles", title: "Symbols of the Republic", minutes: 8,
      lead: "Recognise the official symbols instantly and separate them from cultural clichés.",
      facts: [
        ["Devise", "Liberté, Égalité, Fraternité"], ["Hymne", "La Marseillaise"],
        ["Fête nationale", "14 juillet"], ["Figure", "Marianne, with a bonnet phrygien"],
        ["Drapeau", "Bleu, blanc, rouge"], ["Language", "French - Article 2 of the Constitution"]
      ],
      body: [
        "Marianne personifies the Republic. Her bust appears in town halls; her image appears on stamps and official material. The Gallic rooster is a widely used national emblem, especially in sport, but the core constitutional symbols are the tricolour flag, La Marseillaise and the motto.",
        "The 14 July national holiday evokes the storming of the Bastille in 1789 and the Fête de la Fédération of 1790. The military parade takes place on the Champs-Élysées."
      ],
      example: "If an option offers the Eiffel Tower, baguette or beret as an official republican symbol, reject it: those are cultural associations, not constitutional symbols.",
      trap: "The flag’s order is bleu-blanc-rouge from the flagpole. La Marseillaise was composed by Rouget de Lisle in 1792."
    },
    {
      id: "liberty-equality", theme: "principles", title: "Liberty, equality, fraternity", minutes: 9,
      lead: "The motto is not decorative: its values determine many scenario answers.",
      facts: [
        ["Liberté", "Act freely while respecting the law and others"], ["Égalité", "Same rights and equal treatment before the law"],
        ["Fraternité", "Solidarity and mutual assistance"], ["Discrimination", "Illegal on protected grounds"],
        ["Association", "Create or join freely, within the law"], ["Expression", "Free, but not defamation, threats or hate speech"]
      ],
      body: [
        "Freedom is never the right to harm another person. The Declaration of the Rights of Man and of the Citizen says liberty consists in doing anything that does not harm others.",
        "Equality does not mean everyone earns the same amount. It means the law applies equally and discrimination based on origin, sex, religion, disability and other protected grounds is prohibited."
      ],
      example: "An employer may ask about qualifications that relate directly to the job. Questions about religion, pregnancy plans or ethnic origin are not legitimate recruitment criteria.",
      trap: "On social media, the same laws on threats, public insult, defamation and incitement to hatred still apply."
    },
    {
      id: "laicite", theme: "principles", title: "Laïcité without confusion", minutes: 11,
      lead: "Laïcité protects freedom of conscience; it is not a ban on religion.",
      facts: [
        ["Key law", "9 December 1905"], ["Protected freedom", "Believe, not believe, or change religion"],
        ["State", "Neutral toward religions"], ["Public agents", "Must remain religiously neutral at work"],
        ["Public-service users", "May express beliefs within public-order rules"], ["Public school pupils", "No conspicuous religious signs"]
      ],
      body: [
        "The 1905 law separates Churches and the State. The Republic neither recognises nor subsidises a state religion, while guaranteeing free exercise subject to public order.",
        "Neutrality duties apply to public agents. Users of a town hall do not have the same general neutrality duty. In state schools, the 2004 law prohibits conspicuous religious signs for pupils; discreet signs are permitted."
      ],
      example: "A town-hall employee must serve every user impartially and cannot display religious preference while performing public duties.",
      trap: "9 December is the national Day of Laïcité. Antisemitism means hostility or prejudice against Jewish people."
    },
    {
      id: "constitution", theme: "institutions", title: "The Fifth Republic", minutes: 10,
      lead: "Know the constitutional map: who appoints, directs, votes and checks.",
      facts: [
        ["Current regime", "Fifth Republic, since 1958"], ["President", "Head of State; five-year mandate"],
        ["Prime Minister", "Appointed by the President; directs government action"], ["Parliament", "National Assembly + Senate"],
        ["Deputies", "Directly elected for five years"], ["Senators", "Indirectly elected for six years"]
      ],
      body: [
        "National sovereignty belongs to the people, who exercise it through representatives and referendums. Parliament passes statutes and scrutinises government. The executive implements policy; courts exercise judicial authority.",
        "The Constitutional Council checks whether legislation complies with the Constitution and supervises major national elections and referendums."
      ],
      example: "The President appoints the Prime Minister. The Prime Minister directs the Government. Parliament votes the law. A court, not the police, imposes a criminal penalty.",
      trap: "If the presidency becomes vacant, the President of the Senate acts as interim President."
    },
    {
      id: "elections", theme: "institutions", title: "Elections and citizenship", minutes: 9,
      lead: "Match each election with the people or body it chooses.",
      facts: [
        ["Presidential", "President; direct universal suffrage; five years"], ["Legislative", "Deputies; five years"],
        ["Municipal", "Municipal councillors; six years"], ["European", "Members of European Parliament; five years"],
        ["Voting age", "18"], ["Voting", "A right, not compulsory in France"]
      ],
      body: [
        "To vote in presidential elections, a person must be French, at least 18, enjoy civil and political rights and be registered on the electoral roll. Registration can be completed at the mairie without internet.",
        "Municipal voters elect councillors. The municipal council then elects the mayor. EU citizens resident in France may vote and stand in municipal and European elections under conditions, but cannot be mayor or deputy mayor."
      ],
      example: "The prefect is appointed to represent the State in a department. The mayor is elected by the municipal council.",
      trap: "A presidential candidate needs 500 elected-official endorsements; voters do not directly elect the Prime Minister."
    },
    {
      id: "territories", theme: "institutions", title: "Who manages what?", minutes: 7,
      lead: "A simple three-level map prevents many avoidable errors.",
      facts: [
        ["Commune", "Primary schools, civil status, local services"], ["Department", "Collèges and social action"],
        ["Region", "Lycées, regional trains and economic development"], ["Prefect", "Represents the State"],
        ["France", "101 departments"], ["Metropolitan France", "13 regions"]
      ],
      body: [
        "France is organised into communes, departments and regions. These territorial authorities have elected councils and defined responsibilities. The prefect is not a local elected official: the national government appoints the prefect.",
        "The mayor has both local-government functions and State functions, including civil-status registration and certain police responsibilities."
      ],
      example: "School enrolment for a public primary school begins with the commune/mairie. A question about a public collège points to the department.",
      trap: "Do not confuse a department’s elected council with the prefect, who represents the State."
    },
    {
      id: "europe", theme: "institutions", title: "France and the European Union", minutes: 10,
      lead: "Remember the dates, seats and symbols that recur throughout the bank.",
      facts: [
        ["Members", "27 states (1 January 2025)"], ["Maastricht", "Signed 1992; EU citizenship"],
        ["Europe Day", "9 May"], ["Flag", "12 gold stars on blue"],
        ["Anthem", "Ode to Joy, Beethoven"], ["Parliament seat", "Strasbourg"]
      ],
      body: [
        "The European Commission is based chiefly in Brussels; the European Central Bank is in Frankfurt; the official seat of the European Parliament is Strasbourg. EU citizens directly elect Members of the European Parliament.",
        "The 1951 European Coal and Steel Community was the first construction step. The 1957 Treaties of Rome deepened integration. The Maastricht Treaty founded the European Union and created EU citizenship."
      ],
      example: "The number 12 on the flag symbolises unity and completeness, not the number of EU member countries.",
      trap: "The United Kingdom left the EU in 2020. The EU has 27 members, not 28."
    },
    {
      id: "fundamental-rights", theme: "rights", title: "Fundamental rights", minutes: 10,
      lead: "Connect each liberty with both its protection and its lawful limits.",
      facts: [
        ["Founding text", "1789 Declaration of the Rights of Man and Citizen"], ["Dignity", "No torture, slavery or degrading treatment"],
        ["Expression", "Opinions within the law"], ["Press", "Plural, independent information"],
        ["Movement", "Travel and choose residence lawfully"], ["Arrest", "No arbitrary detention; procedural rights"]
      ],
      body: [
        "Fundamental rights protect every person. Restrictions must have a legal basis, pursue a legitimate aim such as public order, and be necessary and proportionate.",
        "A person held in police custody has rights including being told the suspected offence, assistance by a lawyer, medical examination and notifying a close person, subject to procedural rules."
      ],
      example: "A peaceful opinion is protected. A direct threat or call for violence is not protected simply because it was called an opinion.",
      trap: "Freedom of the press does not cancel laws against defamation, privacy violations or incitement to hatred."
    },
    {
      id: "civic-duties", theme: "rights", title: "Civic duties and offences", minutes: 10,
      lead: "The exam often tests everyday obligations rather than abstract law.",
      facts: [
        ["Taxes", "Declare income every year"], ["Emergency", "Assist a person in danger when safe to do so"],
        ["Jury", "Serving when summoned is a civic duty"], ["Law", "Applies to everyone"],
        ["Offence hierarchy", "Contravention < délit < crime"], ["Alcohol sales", "Prohibited to under-18s"]
      ],
      body: [
        "Solidarity includes contributing to public services and social protection and helping people in difficulty. Road rules, licence requirements and tax declarations are legal obligations, not optional civic advice.",
        "A judge may remove civil and political rights for a stated period following certain convictions. During that period the person cannot vote or stand for election."
      ],
      example: "If helping directly would put you in danger, call emergency services. The duty to assist does not require reckless action.",
      trap: "A crime is the most serious category of offence. Police investigate; courts determine guilt and impose penalties."
    },
    {
      id: "digital-civic", theme: "rights", title: "Citizenship online", minutes: 6,
      lead: "Digital space carries the same rights, duties and respect for others.",
      facts: [
        ["Majorité numérique", "15 years"], ["Online speech", "Subject to French law"],
        ["Personal data", "Protect and use responsibly"], ["Harassment", "Illegal online as offline"],
        ["Sources", "Check reliability before sharing"], ["Security", "Strong unique passwords and caution"]
      ],
      body: [
        "Digital citizenship means participating online responsibly: respecting others, protecting personal data, identifying misinformation and reporting illegal content. Anonymity does not make illegal speech lawful.",
        "France’s digital-majority age is 15 for a minor’s independent consent to certain social-network data processing, within the applicable legal framework."
      ],
      example: "Sharing a humiliating image without consent can violate privacy and support cyber-harassment. Do not forward it; preserve evidence and report it.",
      trap: "A platform’s rules do not replace French law. Public insults and threats can be prosecuted."
    },
    {
      id: "revolution-republic", theme: "history", title: "Revolution to Republic", minutes: 11,
      lead: "Anchor the foundational dates: 1789, 1848, 1881-82 and 1905.",
      facts: [
        ["1789", "French Revolution and Declaration of Rights"], ["1792", "First Republic; Marseillaise composed"],
        ["1804", "Napoleon I becomes Emperor; Civil Code"], ["1848", "Final abolition of slavery"],
        ["1881", "Free public primary education"], ["1905", "Separation of Churches and State"]
      ],
      body: [
        "Louis XVI was guillotined during the Revolution. Napoleon Bonaparte became Emperor in 1804, the year associated with the Civil Code. Reims was traditionally the coronation city of French kings.",
        "The Second Republic abolished slavery in 1848; Victor Schœlcher was a central figure. The Jules Ferry laws established free, secular and compulsory primary education."
      ],
      example: "If you see Napoleon I and a legal text, think Code civil. If you see final abolition of slavery, think 1848 and Victor Schœlcher.",
      trap: "The 1905 law concerns laïcité; the current Fifth Republic Constitution dates from 1958."
    },
    {
      id: "world-wars", theme: "history", title: "Wars, Resistance and memory", minutes: 11,
      lead: "Know the conflicts, commemorations and human consequences.",
      facts: [
        ["1914-1918", "First World War"], ["11 November", "1918 Armistice commemoration"],
        ["1939-1945", "Second World War"], ["18 June 1940", "de Gaulle’s appeal to resist"],
        ["25 August 1944", "Liberation of Paris"], ["8 May", "Victory in Europe, 1945"]
      ],
      body: [
        "Jean Moulin is a major figure of the French Resistance. The Normandy landings in June 1944 helped begin the liberation of France. The Shoah was the systematic genocide of Europe’s Jews by Nazi Germany and its collaborators.",
        "The duty of memory preserves knowledge of victims and past events so that their lessons are not erased or repeated."
      ],
      example: "Do not swap the two public holidays: 8 May concerns victory in 1945; 11 November concerns the 1918 Armistice.",
      trap: "The United Nations was founded in 1945 after the Second World War."
    },
    {
      id: "postwar-europe", theme: "history", title: "Post-war France and Europe", minutes: 9,
      lead: "Follow the sequence from Liberation to the euro.",
      facts: [
        ["1944", "Women gain voting and eligibility rights"], ["1945", "Social Security and the UN"],
        ["1951", "European Coal and Steel Community"], ["1958", "Fifth Republic"],
        ["1962", "Direct presidential suffrage adopted"], ["1981", "Death penalty abolished"]
      ],
      body: [
        "Women first voted in national elections in 1945 after the 1944 ordinance. Social Security was established in 1945. The Fifth Republic began in 1958 under Charles de Gaulle.",
        "The euro became the official scriptural currency in 1999; euro notes and coins entered circulation in 2002."
      ],
      example: "For abolition of the death penalty, connect President François Mitterrand, Justice Minister Robert Badinter and 1981.",
      trap: "Direct presidential election was approved in 1962; the first such election took place in 1965."
    },
    {
      id: "arts-culture", theme: "history", title: "Arts, literature and heritage", minutes: 12,
      lead: "Learn people by profession and works by creator or location.",
      facts: [
        ["Delacroix", "La Liberté guidant le peuple"], ["Monet", "Les Nymphéas"],
        ["Rodin", "Sculptor"], ["Molière", "Playwright"],
        ["Marie Curie", "Physicist and chemist; two Nobel Prizes"], ["Joconde", "Musée du Louvre"]
      ],
      body: [
        "Baudelaire was a poet; George Sand and Marguerite Yourcenar were writers; Simone de Beauvoir was a writer, philosopher and feminist; Albert Camus was a writer and philosopher. Cézanne and Renoir were painters; Debussy was a composer.",
        "Versailles symbolises Louis XIV’s royal power. Lascaux preserves prehistoric paintings. The Eiffel Tower was built for the 1889 Universal Exhibition. Heritage Days open many sites to the public."
      ],
      example: "Use pairs: Delacroix-Liberté; Monet-Nymphéas; Louvre-Joconde; Lascaux-prehistory; Versailles-Louis XIV.",
      trap: "Rouget de Lisle composed La Marseillaise; he did not paint or lead the Revolution."
    },
    {
      id: "geography", theme: "history", title: "France on the map", minutes: 12,
      lead: "Cover mainland geography, overseas France and regional capitals.",
      facts: [
        ["Highest summit", "Mont Blanc"], ["Paris river", "Seine"],
        ["France-Italy range", "Alps"], ["Main port by tonnage", "Marseille-Fos"],
        ["Population 2025", "About 68.6 million"], ["Overseas departments", "Guadeloupe, Martinique, Guyane, La Réunion, Mayotte"]
      ],
      body: [
        "Metropolitan France borders the Atlantic Ocean, English Channel, North Sea and Mediterranean. Corsica is a French Mediterranean island. Guadeloupe and Martinique are in the Antilles; Réunion and Mayotte are in the Indian Ocean.",
        "French Guiana borders Brazil and contains Kourou, the European spaceport. Mayotte became France’s 101st department in 2011. Regional capitals tested include Lyon, Rennes and Marseille."
      ],
      example: "Auvergne-Rhône-Alpes → Lyon and Alpine ski resorts; Bretagne → Rennes; Provence-Alpes-Côte d’Azur → Marseille.",
      trap: "Mont-Saint-Michel is on an island in Normandy. Kourou is in French Guiana, not metropolitan France."
    },
    {
      id: "family-civil", theme: "society", title: "Family and civil status", minutes: 9,
      lead: "Know which acts go through the mairie and how family rights work.",
      facts: [
        ["Birth", "Declare to the civil registrar within five days"], ["Marriage", "Only civil marriage creates legal marriage"],
        ["Divorce", "Either spouse or both may apply"], ["Parental authority", "Normally exercised by both parents after divorce"],
        ["Violence", "Physical punishment of children is prohibited"], ["Contraception", "A personal freedom, accessible under health rules"]
      ],
      body: [
        "A birth is declared at the mairie for the place of birth. A religious ceremony may follow, but only the prior civil ceremony creates a marriage recognised by French law. Polygamous marriage is not legal.",
        "Parental authority is a set of rights and duties exercised in the child’s interests: protection, health, safety, morality, education and development."
      ],
      example: "Divorce does not automatically remove one parent’s parental authority. Decisions continue to be guided by the child’s interests.",
      trap: "A birth declaration is generally due within five days, not one month."
    },
    {
      id: "health-emergency", theme: "society", title: "Health and emergencies", minutes: 8,
      lead: "Practical numbers and systems are high-value, low-effort points.",
      facts: [
        ["Police", "17"], ["SAMU", "15"], ["Fire brigade", "18"], ["European emergency", "112"],
        ["Carte Vitale", "Electronic health-insurance rights and reimbursement"], ["Mutuelle", "Complements Assurance Maladie reimbursements"]
      ],
      body: [
        "Assurance Maladie is the compulsory public health-insurance system for people who work or reside in France on a stable and regular basis. CPAM handles many local reimbursement and affiliation matters.",
        "Tiers payant means the patient does not advance all or part of the covered cost. IVG is legal within the statutory time limit; the freedom to have recourse to IVG is constitutionally protected."
      ],
      example: "Immediate medical emergency → 15 or 112. Police emergency → 17. Fire/rescue → 18.",
      trap: "A mutuelle does not replace Assurance Maladie; it complements the public reimbursement."
    },
    {
      id: "work", theme: "society", title: "Work and employment", minutes: 10,
      lead: "Employment questions focus on minimum protections and equal access.",
      facts: [
        ["Legal weekly time", "35 hours"], ["SMIC", "Statutory minimum wage"],
        ["Undeclared work", "Illegal"], ["Prud’hommes", "Individual employment disputes"],
        ["Union", "Workers may join"], ["Rules", "Labour Code, collective agreement, employment contract"]
      ],
      body: [
        "A woman may create a business under the same conditions as a man. A non-EU foreign national in regular status may create one if their residence status authorises the activity and other legal conditions are met.",
        "Dismissal because of pregnancy or maternity leave is prohibited. Both eligible parents can request parental education leave. France Travail supports jobseekers."
      ],
      example: "The conseil de prud’hommes handles an individual dispute over salary, dismissal or an employment contract between a private employee and employer.",
      trap: "The 35-hour week is the statutory reference duration, not an absolute ban on overtime."
    },
    {
      id: "school", theme: "society", title: "School and parental responsibility", minutes: 10,
      lead: "Public education combines an instruction duty with equal access and inclusion.",
      facts: [
        ["Instruction", "Compulsory from age 3 to 16"], ["After primary", "Collège"],
        ["New French learners", "Specific language support such as UPE2A"], ["Disability", "Right to inclusive schooling and adaptations"],
        ["Public primary enrolment", "Begin with the mairie/commune"], ["Parent role", "Vote for representatives and participate"]
      ],
      body: [
        "The obligation is an obligation of instruction, which can be fulfilled through school or, under strict authorisation rules, at home. Parents who persistently breach it after formal notice risk criminal sanctions.",
        "Illness and certain serious family circumstances are legitimate absences. Religious or personal preference does not generally allow a child to ignore compulsory instruction."
      ],
      example: "A child who does not yet speak French must still be enrolled and receives adapted language instruction; exclusion is not the lawful response.",
      trap: "Compulsory instruction starts at 3 and ends at 16. A training obligation continues from 16 to 18, but it is a different rule."
    },
    {
      id: "housing-environment", theme: "society", title: "Housing and everyday responsibility", minutes: 7,
      lead: "Apply lawful, considerate choices to ordinary situations.",
      facts: [
        ["Tenant", "May make minor decorative changes"], ["Major alteration", "Requires owner’s agreement"],
        ["Broken appliance", "Repair, retailer take-back or approved recycling"], ["Accessible parking", "Unauthorised use is prohibited and fined"],
        ["Waste", "Use correct collection channels"], ["Neighbourhood", "Respect noise and shared-space rules"]
      ],
      body: [
        "A tenant may repaint or make reversible decorative improvements but cannot carry out a structural transformation without the owner’s consent. Waste electrical equipment must not be abandoned in the street.",
        "Civic responsibility includes accessibility: a reserved disabled-parking space may only be used with the required permit."
      ],
      example: "For a broken washing machine, choose repair or an authorised collection route - not pavement dumping.",
      trap: "Owning or renting a home does not remove public-health, waste, noise or safety rules."
    }
  ];

  const official = []; // Ministry-published knowledge stems
  const scenarios = [];

  function addOfficial(theme, concept, rows) {
    rows.forEach(function (r) {
      official.push({
        id: "O" + String(official.length + 1).padStart(3, "0"),
        theme: theme, concept: concept, type: "official", official: true,
        prompt: r[0], correct: r[1], wrong: [r[2], r[3], r[4]],
        explanation: r[5], hook: r[6] || r[1]
      });
    });
  }

  function addScenarios(theme, concept, rows) {
    rows.forEach(function (r) {
      scenarios.push({
        id: "S" + String(scenarios.length + 1).padStart(3, "0"),
        theme: theme, concept: concept, type: "scenario", official: false,
        prompt: r[0], correct: r[1], wrong: [r[2], r[3], r[4]],
        explanation: r[5], hook: r[6] || r[1]
      });
    });
  }

  // 35/244 - Principes et valeurs de la République
  addOfficial("principles", "symbols", [
    ["Complétez les paroles de la Marseillaise « Allons enfants de la patrie... »", "Le jour de gloire est arrivé", "Aux armes, citoyens", "Marchons, marchons", "Qu'un sang impur abreuve nos sillons", "The opening continues: « Le jour de gloire est arrivé ». The other phrases occur later in the anthem.", "Allons enfants → le jour de gloire"],
    ["Dans le cadre d'un entretien d'embauche, que peut-on demander au candidat ?", "Des informations directement liées à ses compétences et au poste", "Sa religion", "Ses projets de grossesse", "Son origine ethnique", "Recruitment questions must have a direct and necessary link with the job or assessment of professional ability. Discriminatory personal questions are not legitimate.", "Job interview = job-related facts"],
    ["Déclarer ses revenus aux services fiscaux est :", "Une obligation légale annuelle", "Facultatif si l'on est salarié", "Réservé aux propriétaires", "Nécessaire seulement si l'on paie déjà des impôts", "People in the tax system must file the required annual income declaration, including when tax has been withheld at source.", "Withholding does not replace declaring"],
    ["En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?", "Ils financent notamment l'école, la santé, la justice et les infrastructures", "Ils financent uniquement l'administration fiscale", "Ils sont versés directement aux partis politiques", "Chacun choisit librement le service qu'il finance", "Taxes pool resources to fund public services and collective expenditure. Their allocation is decided through public budgets, not individual choice.", "Taxes → shared public services"],
    ["La liberté d'association est :", "Une liberté fondamentale reconnue à chacun dans le respect de la loi", "Un droit réservé aux citoyens français", "Une autorisation accordée uniquement par le maire", "Une liberté sans aucune limite légale", "The 1901 freedom of association allows people to create or join associations for lawful purposes; it is a fundamental freedom.", "1901 = association"],
    ["La liberté d'expression sur les réseaux sociaux en France est :", "Protégée, mais limitée notamment par les lois contre les menaces, la diffamation et la haine", "Totale grâce à l'anonymat", "Interdite pour les sujets politiques", "Réservée aux journalistes", "French law applies online. Freedom of expression does not protect threats, public insults, defamation or incitement to hatred.", "Online ≠ outside the law"],
    ["Lequel de ces prénoms évoque un symbole de la République ?", "Marianne", "Jeanne", "Catherine", "Éléonore", "Marianne is the allegorical female figure representing the French Republic.", "Marianne = Republic"],
    ["Lequel de ces symboles représente la République française ?", "Marianne", "La fleur de lys", "La couronne royale", "L'aigle impérial", "Marianne personifies the Republic; the fleur-de-lys and crown evoke monarchy, while the imperial eagle evokes Empire.", "Bust in every mairie"],
    ["Où peut-on voir la devise de la République ?", "Sur les bâtiments publics comme les mairies et les écoles", "Uniquement au palais de l'Élysée", "Seulement sur les billets de banque", "Uniquement dans les tribunaux", "« Liberté, Égalité, Fraternité » appears on many public buildings and official materials throughout France.", "Look at a mairie façade"],
    ["Lesquels sont des symboles officiels de la République française ?", "Le drapeau tricolore, La Marseillaise et la devise républicaine", "La tour Eiffel, la baguette et le béret", "Le coq, le vin et le fromage", "La fleur de lys, la couronne et le sceptre", "The Constitution identifies the French language, tricolour flag, La Marseillaise and republican motto; Marianne and 14 July are also central republican symbols.", "Flag + anthem + motto"],
    ["Peut-on brûler publiquement un drapeau français ?", "Non, l'outrage public au drapeau peut être sanctionné par la loi", "Oui, dans tous les cas au nom de la liberté d'expression", "Oui, si la personne est majeure", "Non, mais seulement le 14 juillet", "Public desecration of the tricolour flag in circumstances covered by law can be punished. Freedom of expression has legal limits.", "Public flag outrage can be an offence"],
    ["Quand la sécurité sociale a-t-elle été établie en France ?", "En 1945", "En 1789", "En 1905", "En 1958", "The ordinances establishing the French Social Security system date from 1945, after the Liberation.", "1945 = Sécurité sociale"],
    ["Que commémore la fête nationale ?", "Le 14 juillet 1789 et l'héritage révolutionnaire, avec la Fête de la Fédération de 1790", "La fin de la Première Guerre mondiale", "La création de la Ve République", "L'abolition de la peine de mort", "The national holiday on 14 July evokes the storming of the Bastille in 1789 and historically the Fête de la Fédération in 1790.", "14 July → Bastille"],
    ["Que porte Marianne sur la tête ?", "Un bonnet phrygien", "Une couronne", "Un casque militaire", "Un béret noir", "The Phrygian cap is a revolutionary symbol of freedom and appears on representations of Marianne.", "Marianne’s red liberty cap"],
    ["Quel symbole de la République peut-on voir sur les maillots de l'équipe de France de football ?", "Le coq", "La fleur de lys", "Marianne", "Le bonnet phrygien", "The Gallic rooster is a widely used French emblem and appears on national sports jerseys.", "Les Bleus wear the rooster"],
    ["Quelle est la devise de la République française ?", "Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Honneur, Justice, Nation", "Unité, Force, Courage", "The republican motto is « Liberté, Égalité, Fraternité » and appears on public buildings.", "L-E-F, in that order"],
    ["Qu'est-ce que la liberté d'association ?", "Le droit de créer une association ou d'y adhérer pour un objet licite", "Le droit de créer n'importe quel groupe, même criminel", "Une permission réservée aux entreprises", "L'obligation d'adhérer à une association locale", "People may form and join associations freely, provided their purpose and activity respect the law.", "Create or join - lawful purpose"],
    ["Qu'est-ce qu'une liberté ?", "La possibilité d'agir dans le respect de la loi et des droits d'autrui", "La possibilité de tout faire sans limite", "Un avantage réservé aux citoyens français", "Une permission accordée par un employeur", "Republican liberty ends where harm to others begins; it is protected and framed by law.", "Freedom + respect for others"],
    ["Sur quel document peut-on voir Marianne ?", "Sur certains timbres-poste français", "Sur tous les contrats de travail", "Sur les permis de conduire étrangers", "Sur les billets en livres sterling", "Marianne commonly appears on French postage stamps and official republican imagery.", "Marianne on stamps"],
    ["Une des valeurs de la devise républicaine est l'Égalité. Qu'est-ce que cela signifie ?", "Toutes les personnes sont égales devant la loi et disposent des mêmes droits sans discrimination", "Tout le monde doit recevoir exactement le même revenu", "Tout le monde doit avoir les mêmes opinions", "Tous les citoyens doivent exercer le même métier", "Equality is legal and civic equality, not identical wealth, beliefs or life choices.", "Equality before the law"],
    ["Une personne peut-elle changer librement de religion en France ?", "Oui, la liberté de conscience le garantit", "Non, sa religion est définitive", "Oui, seulement avec l'autorisation du maire", "Non, sauf après une décision de justice", "Freedom of conscience includes the right to believe, not believe and change religion.", "Conscience = choose or change"],
    ["Que peut faire un usager du service public dans une mairie ?", "Exprimer ses convictions, y compris religieuses, tant qu'il respecte l'ordre public et le fonctionnement du service", "Exiger qu'un agent partage sa religion", "Refuser toutes les règles du service pour motif religieux", "Imposer une cérémonie religieuse dans le guichet", "Unlike public agents, users do not have a general neutrality duty, but must respect public order and normal service operation.", "Agent neutral; user respectful"],
    ["En France, il est possible pour l'État de financer :", "L'entretien de certains édifices religieux publics, notamment antérieurs à 1905", "Le fonctionnement ordinaire d'une religion officielle", "Le salaire de tous les ministres du culte", "La conversion religieuse des citoyens", "The 1905 system contains defined exceptions, including upkeep of publicly owned religious buildings and certain chaplaincy needs; France has no state religion.", "Public heritage upkeep is possible"],
    ["En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ?", "1905", "1789", "1881", "1958", "The foundational separation law was enacted on 9 December 1905.", "1905 = laïcité"],
    ["Que dit la loi de 1905 ?", "La République garantit la liberté de conscience et ne reconnaît ni ne salarie aucun culte", "La République interdit toutes les religions", "Une religion devient officielle", "Les citoyens doivent déclarer leur religion", "The law separates religious organisations and the State while guaranteeing freedom of conscience and worship subject to public order.", "Freedom of conscience + no state religion"],
    ["Que garantit le principe de laïcité ?", "La liberté de conscience et l'égalité de tous quelle que soit leur conviction", "L'interdiction de croire", "La supériorité d'une religion", "L'obligation d'afficher sa religion", "Laïcité protects believers and non-believers and requires State neutrality.", "Believe, not believe, change"],
    ["Quel jour célèbre-t-on officiellement la laïcité en France ?", "Le 9 décembre", "Le 14 juillet", "Le 1er mai", "Le 11 novembre", "The Day of Laïcité is 9 December, the anniversary of the 1905 separation law.", "9 December 1905"],
    ["Quel symbole religieux peut être porté dans une école publique dans le respect de la laïcité ?", "Un signe religieux discret", "Tout signe religieux ostensiblement porté", "Aucun signe, même discret", "Uniquement le signe de la religion majoritaire", "Public-school pupils may wear discreet religious signs, but conspicuous signs are prohibited by the 2004 law.", "Discreet permitted; conspicuous prohibited"],
    ["Quel terme désigne précisément la haine ou les préjugés contre les Juifs ?", "L'antisémitisme", "La xénophilie", "Le pluralisme", "La laïcité", "Antisemitism means hostility, hatred or prejudice directed at Jewish people.", "Anti-Jewish hatred = antisemitism"],
    ["Quel texte est considéré comme le texte fondateur de la laïcité ?", "La loi du 9 décembre 1905", "Le Code civil de 1804", "Le traité de Maastricht", "La loi sur les associations de 1901", "The 1905 law on separation of Churches and State is the central legal reference for French laïcité.", "Foundational laïcité text: 1905"],
    ["Quelle institution française doit rester neutre en matière de religion ?", "L'État et les services publics", "Les familles dans leur domicile", "Toutes les associations privées", "Les lieux de culte", "The State and public services must be neutral; individuals retain freedom of conscience.", "Public institutions are neutral"],
    ["Qu'est-ce que la laïcité ?", "La neutralité de l'État et la liberté de conscience de chacun", "L'interdiction des religions", "Une religion officielle commune", "La pratique religieuse obligatoire", "Laïcité combines State neutrality, separation and equal freedom of conscience.", "Neutral State, free conscience"],
    ["À l'école, la charte de la laïcité permet de :", "Expliquer les règles et les valeurs de la laïcité à la communauté scolaire", "Choisir une religion pour chaque élève", "Interdire l'étude historique des religions", "Remplacer le règlement intérieur", "The charter explains how laïcité, neutrality, equality and freedom of conscience apply at school.", "The charter teaches the rules"],
    ["Qui doit respecter et veiller à la neutralité religieuse dans les services publics ?", "Tous les agents publics dans l'exercice de leurs fonctions", "Uniquement les usagers", "Seulement les élus nationaux", "Uniquement les enseignants", "Every public agent must perform duties neutrally and treat users equally.", "All public agents"],
    ["Une personne déclare ne croire en aucun dieu. On peut dire :", "Qu'elle est athée", "Qu'elle est fonctionnaire", "Qu'elle est pratiquante", "Qu'elle est obligatoirement agnostique", "An atheist does not believe in a god. An agnostic considers the existence of a god unknown or unknowable.", "Athée = does not believe"]
  ]);

  // 54/244 - Système institutionnel et politique
  addOfficial("institutions", "constitution", [
    ["Comment est désigné le Premier ministre ?", "Il est nommé par le Président de la République", "Il est élu directement par les citoyens", "Il est choisi par le Sénat seul", "Il est nommé par le Conseil constitutionnel", "Article 8 of the Constitution gives the President the power to appoint the Prime Minister.", "President appoints PM"],
    ["Qui peut se présenter aux élections présidentielles ?", "Une personne française remplissant les conditions légales et ayant obtenu 500 présentations d'élus", "Toute personne résidant en France", "Uniquement un député en exercice", "Uniquement le chef d'un parti politique", "A candidate must be French, meet eligibility rules and obtain 500 valid elected-official endorsements.", "French + eligible + 500 endorsements"],
    ["À qui appartient la souveraineté nationale ?", "Au peuple", "Au Président seul", "Au Gouvernement", "Aux juges", "Article 3 states that national sovereignty belongs to the people, exercised through representatives and referendums.", "Sovereignty belongs to the people"],
    ["Qui est élu lors des élections municipales ?", "Les conseillers municipaux", "Le préfet", "Les sénateurs", "Le procureur de la République", "Municipal voters elect the municipal council; that council subsequently elects the mayor.", "Voters elect councillors"],
    ["L'inscription sur les listes électorales est :", "Nécessaire pour voter, avec des inscriptions automatiques dans certains cas", "Inutile pour les élections nationales", "Réservée aux personnes de plus de 25 ans", "Payante dans chaque commune", "A voter must be registered on an electoral roll. Many young citizens are registered automatically at 18 after census formalities.", "No roll, no ballot"],
    ["Quelle condition est nécessaire pour voter aux élections présidentielles ?", "Être français, majeur, jouir de ses droits civils et politiques et être inscrit", "Résider en France depuis cinq ans", "Être propriétaire", "Avoir déjà payé un impôt", "Presidential voting is reserved to eligible French citizens aged 18 or over who are on the electoral roll.", "French + 18 + rights + roll"],
    ["Quelle condition faut-il remplir pour être candidat aux élections municipales ?", "Être éligible, majeur et français ou citoyen de l'Union européenne selon les règles applicables", "Être obligatoirement né dans la commune", "Être fonctionnaire", "Avoir au moins 30 ans", "French and qualifying EU citizens may stand for municipal council, subject to age, electoral and incompatibility rules; EU citizens cannot become mayor or deputy mayor.", "Municipal council can include eligible EU citizens"],
    ["Parmi ces autorités, laquelle est élue ?", "Le maire", "Le préfet", "Le procureur de la République", "Le recteur d'académie", "The municipal council elects the mayor. Prefects, prosecutors and rectors are appointed.", "Mayor elected; prefect appointed"],
    ["Quelles sont les fonctions du maire ?", "Diriger la commune et exercer notamment des fonctions d'état civil et de police municipale", "Diriger le Gouvernement", "Voter seul les lois nationales", "Nommer les juges", "The mayor executes municipal decisions and also performs certain State functions, including civil status and administrative-police duties.", "Commune + civil status + local police"],
    ["Qui peut se présenter aux élections présidentielles ?", "Toute femme ou tout homme français remplissant les conditions de candidature", "Seulement les anciens ministres", "Seulement les maires des grandes villes", "Tout citoyen de l'Union européenne", "The presidency is open equally to eligible French women and men who satisfy the legal candidacy requirements.", "No profession or gender restriction"],
    ["Une personne, n'ayant pas d'accès à internet, veut s'inscrire sur les listes électorales pour pouvoir voter aux prochaines élections politiques. Où peut-elle s'inscrire ?", "À la mairie de sa commune", "Au commissariat uniquement", "À la Banque de France", "Au tribunal de commerce", "Electoral registration can be completed in person at the mairie with the required documents.", "No internet → mairie"],
    ["À quel âge peut-on devenir électeur ?", "18 ans", "16 ans", "21 ans", "25 ans", "The voting age in France is 18.", "18 = majority and voting age"],
    ["En France, est-ce obligatoire de voter ?", "Non, voter est un droit et un devoir civique mais ce n'est pas juridiquement obligatoire", "Oui, sous peine d'amende", "Oui, uniquement aux présidentielles", "Non, sauf pour les fonctionnaires", "Unlike some countries, France does not impose compulsory voting in political elections.", "Voting is a right, not a legal obligation"],
    ["A-t-on le droit de ne pas respecter une loi ?", "Non, toute personne doit respecter les lois en vigueur", "Oui, si l'on n'a pas voté pour cette loi", "Oui, si elle semble injuste personnellement", "Oui, pour des motifs religieux", "Laws apply to everyone. A law may be challenged through legal and democratic procedures, not simply ignored.", "Disagree lawfully; do not ignore the law"],
    ["Comment sont désignés les députés ?", "Ils sont élus au suffrage universel direct", "Ils sont nommés par le Président", "Ils sont tirés au sort", "Ils sont élus par les sénateurs", "Citizens directly elect deputies in legislative constituencies.", "Deputies = direct election"],
    ["Qui vote les lois ?", "Le Parlement", "Le Conseil constitutionnel seul", "La police", "Les préfets", "Parliament - the National Assembly and Senate - debates and votes statutes.", "Parliament votes laws"],
    ["La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ?", "Les pouvoirs exécutif, législatif et judiciaire", "Les pouvoirs communal, départemental et régional", "Les pouvoirs civil, militaire et religieux", "Les pouvoirs présidentiel, municipal et européen", "Separating executive, legislative and judicial functions protects liberty and prevents concentrated power.", "ELJ: exécutif, législatif, judiciaire"],
    ["Qu'est-ce que l'État de droit ?", "Un État où les autorités comme les citoyens sont soumis au droit et où les libertés sont garanties", "Un État où le Gouvernement est au-dessus des tribunaux", "Un État sans Constitution", "Un État dirigé uniquement par les juges", "Rule of law means public power is legally constrained, courts are independent and rights can be protected.", "Nobody is above the law"],
    ["Quelles sont les durées du mandat du conseil municipal et du maire ?", "Six ans", "Trois ans", "Cinq ans", "Sept ans", "Municipal councillors and the mayor normally serve a six-year term.", "Municipal = 6"],
    ["Qui est élu lors des élections législatives ?", "Les députés", "Les sénateurs", "Les préfets", "Les maires", "Legislative elections choose the deputies who sit in the National Assembly.", "Législatives → députés"],
    ["Quelle est la durée du mandat du Président de la République française ?", "Cinq ans", "Quatre ans", "Six ans", "Sept ans sans limite", "The presidential term is a five-year quinquennat.", "President = 5"],
    ["Quelle est la durée du mandat des députés ?", "Cinq ans", "Trois ans", "Six ans", "Neuf ans", "The National Assembly is normally elected for five years, subject to possible dissolution.", "Deputies = 5"],
    ["Quelle est la durée du mandat des sénateurs ?", "Six ans", "Quatre ans", "Cinq ans", "Neuf ans pour tous les nouveaux mandats", "Senators serve six-year terms, with half of the Senate renewed every three years.", "Senators = 6"],
    ["Qui dirige l'action du gouvernement ?", "Le Premier ministre", "Le Président de l'Assemblée nationale", "Le maire de Paris", "Le Conseil constitutionnel", "Article 21 gives the Prime Minister responsibility for directing government action.", "PM directs Government"],
    ["En France, est-ce possible d'adhérer à un parti politique ?", "Oui, chacun peut adhérer librement à un parti légal", "Non, les partis sont réservés aux élus", "Oui, uniquement avec l'accord du préfet", "Non, la Constitution interdit les partis", "Political pluralism and freedom of association protect lawful political-party membership.", "Political pluralism is protected"],
    ["Qui sanctionne l'auteur d'un vol ?", "Un tribunal, après une procédure judiciaire", "La victime directement", "Le maire sans procès", "La police seule", "Police investigate and prosecutors pursue cases, but a court determines guilt and imposes a criminal penalty.", "Court imposes penalty"],
    ["Qui gère les collèges publics ?", "Les départements", "Les communes", "Les régions", "L'Union européenne", "Departments are responsible for public collèges, including buildings and certain operations.", "Collège → département"],
    ["Qui gère les écoles primaires et maternelles publiques ?", "Les communes", "Les départements", "Les régions", "Le Sénat", "Communes manage public nursery and primary-school premises and local organisation.", "École → commune"],
    ["Comment sont désignés les maires ?", "Ils sont élus par les conseillers municipaux", "Ils sont élus séparément au suffrage présidentiel", "Ils sont nommés par le préfet", "Ils sont tirés au sort", "After municipal elections, the municipal council elects the mayor from among its members.", "Council elects mayor"],
    ["Quelle collectivité territoriale est responsable des transports régionaux ?", "La région", "La commune", "Le département uniquement", "Le Parlement européen", "Regions organise regional transport, including TER rail services and many interurban networks.", "TER → région"],
    ["Quelle est l'une des voies possibles pour modifier la Constitution ?", "Un référendum, ou un vote du Parlement réuni en Congrès à la majorité des trois cinquièmes", "Une décision d'un maire", "Un simple décret du Premier ministre", "Un vote de la Commission européenne", "Article 89 allows constitutional revision after identical parliamentary approval, followed by referendum or, for a government bill, Congress approval by three fifths.", "Revision: referendum or Congress 3/5"],
    ["Qui assure l'intérim du président de la République en cas de décès ?", "Le président du Sénat", "Le Premier ministre", "Le président de l'Assemblée nationale", "Le ministre de l'Intérieur", "The President of the Senate temporarily performs presidential functions if the office becomes vacant.", "Interim → Senate President"],
    ["Quel est le rôle du Conseil constitutionnel ?", "Contrôler la conformité des lois à la Constitution et veiller à certaines élections", "Rédiger toutes les lois", "Diriger la police nationale", "Juger tous les divorces", "The Constitutional Council reviews constitutionality and supervises presidential elections, referendums and parliamentary-election disputes.", "Guardian of constitutional rules"],
    ["Quelle condition est obligatoire pour se présenter à l'élection présidentielle ?", "Obtenir 500 présentations d'élus provenant d'au moins 30 départements ou collectivités", "Avoir été ministre", "Être âgé d'au moins 40 ans", "Être membre du Parlement", "Presidential candidates need 500 valid endorsements, geographically distributed under electoral law.", "500 parrainages"],
    ["Combien y a-t-il de départements en France ?", "101", "96", "13", "120", "France has 101 departments: 96 in metropolitan France and five overseas.", "96 + 5 = 101"],
    ["Comment est organisé le découpage administratif de la France ?", "En communes, départements et régions", "En cantons et royaumes uniquement", "En provinces indépendantes", "En États fédérés", "The principal territorial-authority levels are communes, departments and regions.", "Commune → département → région"],
    ["Qui représente l'État dans un département ?", "Le préfet", "Le maire", "Le président du conseil départemental", "Le député", "The prefect is appointed to represent the national State and coordinate State services in the department.", "Prefect represents State"],
    ["Quel est le rôle du Président de la République ?", "Être le chef de l'État, veiller à la Constitution et assurer la continuité de l'État", "Diriger chaque mairie", "Présider tous les tribunaux", "Voter seul le budget", "The President is head of State, guarantor of national independence and constitutional continuity, and appoints the Prime Minister.", "President = head of State"],
    ["Quel est le rôle du Premier ministre ?", "Diriger l'action du Gouvernement et assurer l'exécution des lois", "Être le chef de l'État", "Présider le Sénat", "Contrôler seul la Constitution", "The Prime Minister leads government action, ensures statutes are implemented and exercises regulatory power subject to the Constitution.", "PM runs Government"],
    ["Quel est le rôle du Défenseur des droits ?", "Protéger les droits face aux services publics et lutter notamment contre les discriminations", "Défendre uniquement le Gouvernement", "Remplacer tous les avocats", "Voter les lois", "The Defender of Rights is an independent constitutional authority dealing with public-service rights, discrimination, ethics of security forces, children’s rights and whistleblowers.", "Independent rights protector"],
    ["En quelle année la citoyenneté européenne a-t-elle été créée ?", "En 1992, par le traité de Maastricht", "En 1945", "En 1951", "En 2002", "The Maastricht Treaty signed in 1992 introduced citizenship of the European Union.", "EU citizenship = Maastricht 1992"],
    ["Qui a composé l'hymne de l'Union européenne ?", "Ludwig van Beethoven", "Claude Debussy", "Wolfgang Amadeus Mozart", "Rouget de Lisle", "The EU anthem uses the melody of Beethoven’s Ode to Joy from the Ninth Symphony.", "EU anthem → Beethoven"],
    ["Quand est célébrée la journée de l'Europe ?", "Le 9 mai", "Le 8 mai", "Le 14 juillet", "Le 11 novembre", "Europe Day is celebrated on 9 May, recalling the 1950 Schuman Declaration.", "9 May = Europe"],
    ["Où est le siège de la Banque centrale européenne ?", "À Francfort", "À Paris", "À Strasbourg", "À Rome", "The European Central Bank is headquartered in Frankfurt, Germany.", "ECB → Frankfurt"],
    ["Où est le siège de la Commission européenne ?", "À Bruxelles", "À Madrid", "À Strasbourg", "À Luxembourg uniquement", "The European Commission’s principal seat is in Brussels.", "Commission → Brussels"],
    ["Qui siège au Parlement européen ?", "Les députés européens", "Les chefs d'État uniquement", "Les juges nationaux", "Les préfets", "Members of the European Parliament represent EU citizens.", "Parliament → MEPs"],
    ["Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?", "27", "12", "28", "32", "The EU has had 27 member states since the United Kingdom’s withdrawal.", "EU = 27"],
    ["En quelle année le traité de Maastricht, qui marque la fondation de l'Union européenne, a-t-il été signé ?", "1992", "1951", "1957", "2002", "The Maastricht Treaty was signed on 7 February 1992 and entered into force in 1993.", "Maastricht signed 1992"],
    ["Quel traité concerne la construction de l'Union européenne ?", "Le traité de Rome", "Le traité de Versailles", "Le traité de l'Élysée uniquement", "Le concordat de 1801", "The 1957 Treaties of Rome created the European Economic Community and are foundational European-integration treaties.", "Rome 1957 → European construction"],
    ["Quel État a quitté l'Union Européenne en 2020 ?", "Le Royaume-Uni", "La Norvège", "La Suisse", "L'Irlande", "The United Kingdom formally left the EU on 31 January 2020.", "Brexit → UK"],
    ["Quel est l'hymne de l'Union Européenne ?", "L'Ode à la joie", "La Marseillaise", "Le Chant des partisans", "God Save the King", "The EU anthem is the instrumental Ode to Joy theme from Beethoven’s Ninth Symphony.", "EU → Ode to Joy"],
    ["De quoi est composé le drapeau européen ?", "De douze étoiles dorées en cercle sur fond bleu", "De vingt-sept étoiles, une par État", "De bandes bleu, blanc et rouge", "D'une colombe blanche sur fond vert", "The 12 stars symbolise unity and completeness; their number does not change with EU membership.", "12 stars, always"],
    ["Qui élit les députés européens ?", "Les citoyens de l'Union européenne au suffrage universel direct", "La Commission européenne", "Les gouvernements nationaux seuls", "La Banque centrale européenne", "EU citizens directly elect Members of the European Parliament every five years.", "Citizens elect MEPs"],
    ["Où est le siège du Parlement européen ?", "À Strasbourg", "À Francfort", "À La Haye", "À Genève", "Strasbourg is the European Parliament’s official seat; it also works in Brussels and has services in Luxembourg.", "Parliament seat → Strasbourg"]
  ]);

  // 36/244 - Droits et devoirs
  addOfficial("rights", "fundamental-rights", [
    ["À quoi sert le droit de grève ?", "À défendre des revendications professionnelles et sociales par un arrêt collectif du travail", "À rompre automatiquement son contrat", "À empêcher définitivement les autres de travailler", "À éviter toute négociation", "The right to strike lets workers collectively stop work to support professional demands, within legal rules and possible service-continuity limits.", "Strike = collective professional action"],
    ["Au nom de quoi l'État justifie-t-il la restriction des droits ?", "De motifs légaux comme l'ordre public, à condition que la mesure soit nécessaire et proportionnée", "De la préférence personnelle d'un agent", "D'une religion officielle", "De l'intérêt d'une entreprise privée uniquement", "Rights can be restricted only on a legal basis for legitimate aims such as public order, and restrictions must be necessary and proportionate.", "Legal + necessary + proportionate"],
    ["Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'Homme et du Citoyen de 1789 ?", "Les hommes naissent et demeurent libres et égaux en droits", "L'État, c'est moi", "Travail, Famille, Patrie", "La religion de l'État est obligatoire", "Article 1 of the 1789 Declaration states that people are born and remain free and equal in rights.", "Born and remain free and equal"],
    ["L'article 4 de la Déclaration des droits de l'homme et du citoyen affirme que « la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui ». Qu'est-ce que cela signifie ?", "Chacun est libre tant qu'il respecte les droits et la sécurité des autres", "La liberté n'a aucune limite", "Seuls les citoyens français sont libres", "Toute critique est interdite", "Liberty is compatible with equal liberty for others; law defines the limits necessary to prevent harm.", "My freedom stops at harm to others"],
    ["Que dit l'article 1er de la Constitution française ?", "La France est une République indivisible, laïque, démocratique et sociale", "La France est une monarchie fédérale", "La France reconnaît une religion d'État", "La France est gouvernée sans Constitution", "Article 1 also guarantees equality before the law without distinction and respects all beliefs.", "I-L-D-S"],
    ["Que garantit la liberté de la presse ?", "Le droit d'informer et de publier librement dans le respect de la loi", "L'immunité pour toute fausse accusation", "Le contrôle obligatoire de chaque article par le Gouvernement", "Le secret de toutes les décisions publiques", "A free press supports plural information and democratic debate, while remaining subject to laws such as defamation and privacy protections.", "Free press, legal responsibility"],
    ["Que permet la liberté de circulation ?", "Se déplacer et choisir sa résidence dans le respect de la loi", "Entrer dans tout domicile privé", "Conduire sans permis", "Ignorer les contrôles aux frontières", "Freedom of movement protects lawful travel and residence; it does not cancel traffic, immigration or property rules.", "Move freely, lawfully"],
    ["Que signifie être citoyen d'un État ?", "Être membre de sa communauté politique avec des droits et des devoirs", "Y travailler temporairement", "Y posséder un logement", "Y passer des vacances", "Citizenship is a legal and political bond carrying civil and political rights and civic duties.", "Citizenship = political membership"],
    ["Que sont les droits fondamentaux ?", "Des droits essentiels protégés pour chaque personne", "Des privilèges accordés uniquement aux élus", "Des recommandations sans valeur juridique", "Des droits réservés aux propriétaires", "Fundamental rights protect dignity and freedom and are guaranteed by constitutional, European and international rules.", "Essential rights for every person"],
    ["Quel droit protège une personne contre une arrestation arbitraire ?", "Le droit à la liberté et à la sûreté, avec un contrôle de l'autorité judiciaire", "Le droit de grève", "Le droit de propriété uniquement", "Le droit de vote", "No one may be detained outside the cases and procedures established by law; judicial authority safeguards individual liberty.", "No detention without lawful procedure"],
    ["Quel est le texte fondateur établissant les droits et les devoirs de chaque citoyen ?", "La Déclaration des Droits de l'Homme et du Citoyen de 1789", "Le Code de la route", "Le traité de Maastricht", "La loi de finances annuelle", "The 1789 Declaration is a foundational constitutional text on liberty, equality, sovereignty, law and civic contribution.", "DDHC = 1789"],
    ["Quel texte affirme que tous les hommes naissent libres et égaux en droits ?", "La Déclaration des Droits de l'Homme et du Citoyen", "Le traité de Rome", "Le Code du travail", "La Charte olympique", "This is the opening of Article 1 of the 1789 Declaration.", "Article 1, DDHC"],
    ["Quelle situation est une atteinte à la dignité humaine ?", "Soumettre une personne à la traite, à la torture ou à un traitement dégradant", "Exprimer pacifiquement un désaccord", "Adhérer à une association", "Changer de domicile", "Human trafficking, slavery, torture and degrading treatment deny the intrinsic dignity of the person.", "No person may be treated as an object"],
    ["Qu'est-ce que la liberté d'expression ?", "Le droit d'exprimer ses opinions dans les limites fixées par la loi", "Le droit de menacer sans conséquence", "Le droit de diffamer anonymement", "L'obligation d'être d'accord avec le Gouvernement", "Freedom of expression protects ideas and criticism, not offences such as threats, defamation or incitement to hatred.", "Opinion yes; offence no"],
    ["Suite à une interpellation par la police, il est possible de :", "Demander un avocat et, en garde à vue, exercer les droits prévus par la procédure", "Être condamné immédiatement sans juge", "Refuser de connaître le motif de la mesure", "Être détenu sans aucune limite", "A person in custody must be informed of the measure and suspected offence and may have legal assistance, a doctor and notification rights under procedural rules.", "Custody comes with rights"],
    ["Tous les citoyens français ont-ils une religion ?", "Non, chacun est libre de croire ou de ne pas croire", "Oui, une religion est obligatoire", "Oui, la religion est inscrite sur la carte d'identité", "Non, mais seuls les fonctionnaires peuvent être athées", "Freedom of conscience protects religious belief, non-belief and changing belief.", "Citizenship has no religious test"],
    ["À quel âge est la majorité numérique en France ?", "15 ans", "13 ans", "16 ans", "18 ans", "French law sets the digital-majority threshold at 15 for a minor’s independent consent in the relevant social-network data framework.", "Digital majority = 15"],
    ["Dans lequel de ces endroits est-on autorisé à fumer ?", "Dans un domicile privé, sous réserve du respect d'autrui", "Dans une école", "Dans un restaurant fermé", "Dans un parc pour enfants où l'interdiction s'applique", "Smoking is banned in enclosed public/work places and, since 2025, in additional outdoor child-focused spaces. A private home is not covered by the general public-place ban.", "Private home, not public child spaces"],
    ["En France, la conduite sans permis d'une moto est :", "Interdite et sanctionnée", "Autorisée sur les routes secondaires", "Autorisée si la moto appartient à un proche", "Une simple recommandation", "Driving a motorcycle requiring a licence without the proper licence is a criminal offence.", "No licence = offence"],
    ["En quoi consiste le devoir de solidarité ?", "Contribuer à la collectivité et aider les personnes en difficulté", "S'occuper uniquement de sa famille", "Refuser les contributions publiques", "Remplacer tous les services sociaux", "Solidarity underlies taxes, social protection, mutual help and assistance to vulnerable people.", "Contribute and help"],
    ["Est-ce légal d'être marié à plusieurs personnes en même temps ?", "Non, la polygamie n'est pas reconnue par le droit français", "Oui, sans aucune condition", "Oui, avec l'accord du maire", "Oui, si les mariages sont religieux", "A person cannot contract a new marriage while an earlier marriage is still legally in force.", "One legal spouse at a time"],
    ["Est-ce obligatoire de déclarer ses impôts chaque année en France ?", "Oui, lorsqu'on relève de l'obligation déclarative", "Non, si le prélèvement à la source existe", "Seulement tous les cinq ans", "Seulement pour les entreprises", "Withholding at source does not generally replace the annual income-tax declaration.", "Declare annually"],
    ["Est-il obligatoire de porter secours à une personne en danger ?", "Oui, si l'on peut agir sans risque sérieux pour soi ou autrui, notamment en appelant les secours", "Non, jamais", "Oui, même en se mettant gravement en danger", "Seulement pour les médecins", "Failure to assist a person in peril can be an offence. Safe assistance can simply mean promptly calling emergency services.", "Help safely or call"],
    ["Être juré d'assises est :", "Un devoir civique lorsqu'on est tiré au sort et convoqué", "Un emploi choisi librement", "Réservé aux avocats", "Interdit aux citoyens ordinaires", "Eligible citizens selected for an assize jury must attend unless excused for a legitimate reason.", "Jury service = civic duty"],
    ["La vente d'alcool en France est interdite aux personnes de moins de :", "18 ans", "16 ans", "15 ans", "21 ans", "Selling or offering alcohol to a minor under 18 is prohibited.", "Alcohol sales: 18"],
    ["Le non-respect du code de la route est :", "Une infraction pouvant entraîner une sanction", "Une affaire purement privée", "Autorisé si la route est vide", "Sans conséquence pour les cyclistes et conducteurs", "Depending on the conduct, a road violation can be a contravention or a more serious offence.", "Road rules are law"],
    ["Lequel de ces crimes ou délits peut entrainer la privation des droits civils et politiques par un juge ?", "Une infraction grave lorsque la loi prévoit cette peine complémentaire", "Un retard à un rendez-vous", "Une mauvaise note scolaire", "Le fait de déménager", "For certain crimes and délits, a court may impose loss of civil, civic and family rights as an additional penalty.", "Only a court, where law allows"],
    ["Pour obtenir une carte d'identité, il faut :", "Avoir la nationalité française", "Résider cinq ans en France sans autre condition", "Être citoyen de n'importe quel pays de l'Union européenne", "Avoir un contrat de travail français", "The French national identity card is issued to French nationals; residence alone is not enough.", "French ID card → French nationality"],
    ["Pour quel motif peut-on limiter la liberté d'expression ?", "Pour prévenir notamment la diffamation, les menaces ou l'incitation à la haine et à la violence", "Pour empêcher toute critique politique", "Parce qu'une opinion déplaît à un voisin", "Pour interdire toutes les œuvres humoristiques", "Legal restrictions protect the rights of others and public order; they must themselves comply with rights law.", "No hate, threats or defamation"],
    ["Que doit faire un citoyen s'il est appelé à être juré dans un procès d'assises ?", "Se présenter, sauf dispense ou motif légitime accepté", "Ignorer la convocation", "Envoyer un proche à sa place", "Choisir lui-même un autre procès", "An assize-jury summons is binding. The court considers formal requests for exemption or legitimate inability.", "Summons → attend or obtain excuse"],
    ["Quel est l'âge de la majorité civile en France ?", "18 ans", "16 ans", "20 ans", "21 ans", "At 18 a person reaches civil majority and generally exercises civil rights independently.", "Civil majority = 18"],
    ["Quel est l'un des devoirs principaux d'un citoyen français ?", "Respecter les lois et contribuer aux charges publiques", "Adhérer à un parti politique", "Exercer obligatoirement une religion", "Devenir fonctionnaire", "Citizens have duties including obeying law, contributing through taxes and taking part in civic obligations when required.", "Rights come with duties"],
    ["Quelle est l'infraction la plus grave ?", "Le crime", "La contravention", "Le délit", "L'avertissement", "French criminal law classifies offences by seriousness: contraventions, délits, then crimes.", "Crime is most serious"],
    ["Qu'est-ce que la citoyenneté numérique ?", "L'usage responsable, critique et respectueux des outils et espaces numériques", "Le droit de tout publier anonymement", "Une nationalité obtenue en ligne", "L'interdiction d'utiliser internet", "Digital citizenship combines participation, media literacy, data protection, security and respect for law and others.", "Responsible online participation"],
    ["Qu'est-ce que le devoir de mémoire ?", "Se souvenir et transmettre l'histoire, notamment celle des victimes et des persécutions", "Oublier les conflits passés", "Apprendre uniquement les dates heureuses", "Remplacer le travail des historiens", "The duty of memory honours victims and preserves lessons from past crimes and conflicts.", "Remember, honour, transmit"],
    ["Une personne est privée de ses droits civils et politiques pendant 5 ans suite à une condamnation. Parmi ces propositions laquelle est correcte ? Pendant 5 ans,...", "Elle ne peut notamment ni voter ni être candidate à une élection", "Elle perd automatiquement sa nationalité", "Elle ne peut plus travailler", "Elle doit quitter tout logement", "A court-ordered deprivation of civic rights affects rights such as voting and eligibility for the stated period; it does not automatically remove nationality or ordinary civil life.", "No vote or candidacy during the ban"]
  ]);

  // 76/244 - Histoire, géographie et culture (history)
  addOfficial("history", "revolution-republic", [
    ["Parmi ces textes, lequel a été adopté sous Napoléon Ier ?", "Le Code civil", "La loi de séparation des Églises et de l'État", "Le traité de Maastricht", "La Constitution de la Ve République", "The Civil Code, also known historically as the Code Napoléon, was promulgated in 1804.", "Napoleon → Civil Code"],
    ["Qui a été président de la Ve République ?", "Charles de Gaulle", "Louis XIV", "Napoléon Ier", "Georges Clemenceau", "Charles de Gaulle became the first President of the Fifth Republic in 1959. Several later presidents also satisfy the general wording.", "de Gaulle founded the Fifth Republic"],
    ["Que signifie la date du 14 juillet pour les Français ?", "La fête nationale et la mémoire de la Révolution française", "La fin de la Première Guerre mondiale", "La création de l'Union européenne", "La journée du Travail", "14 July is the national holiday, associated especially with the storming of the Bastille in 1789.", "14 July = national holiday"],
    ["Lequel de ces pays est un pays fondateur de l'Union Européenne ?", "La France", "Le Royaume-Uni", "La Norvège", "La Suisse", "France was one of the six founding states of the early European Communities, with Germany, Italy, Belgium, the Netherlands and Luxembourg.", "France = one of the Six"],
    ["Dans quelle région est située une partie des plages du débarquement ayant permis d'engager la libération de la France ?", "En Normandie", "En Bretagne", "En Corse", "En Alsace", "The Allied landings of 6 June 1944 took place on Normandy beaches.", "D-Day → Normandy"],
    ["Dans quelle ville les rois de France étaient-ils couronnés ?", "Reims", "Lyon", "Marseille", "Bordeaux", "Most French kings were crowned in Reims cathedral, linked to the baptism of Clovis.", "Kings crowned at Reims"],
    ["Quel roi de France a été guillotiné pendant la Révolution française ?", "Louis XVI", "Louis XIV", "Henri IV", "François Ier", "Louis XVI was executed in Paris on 21 January 1793.", "Revolution → Louis XVI"],
    ["En quelle année a débuté la Révolution française ?", "1789", "1776", "1804", "1848", "The Estates-General, Tennis Court Oath and storming of the Bastille all mark 1789.", "Revolution = 1789"],
    ["En quelle année Napoléon Ier est-il devenu empereur ?", "1804", "1789", "1815", "1848", "Napoleon was proclaimed and crowned Emperor in 1804.", "Napoleon Emperor = 1804"],
    ["Lequel de ces personnages a un lien avec la République française ?", "Léon Gambetta", "Louis XIV", "Marie-Antoinette", "Charlemagne", "Léon Gambetta was a major republican political figure, particularly at the birth of the Third Republic.", "Gambetta = republican figure"],
    ["De quand date l'appel à la résistance du général de Gaulle ?", "Du 18 juin 1940", "Du 11 novembre 1918", "Du 8 mai 1945", "Du 14 juillet 1789", "De Gaulle broadcast his appeal from London on 18 June 1940 after France’s military collapse.", "18 June 1940"],
    ["Qu'est-ce que la Shoah ?", "Le génocide des Juifs d'Europe par l'Allemagne nazie et ses collaborateurs", "Une bataille de la Première Guerre mondiale", "La construction de l'Union européenne", "Une révolution industrielle", "The Shoah was the systematic persecution and murder of six million Jews during the Second World War.", "Shoah = genocide of Europe’s Jews"],
    ["Quel pays a été une colonie française ?", "Le Sénégal", "La Suède", "Le Japon", "La Pologne", "Senegal formed part of France’s colonial empire before independence in 1960.", "Senegal was a French colony"],
    ["Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?", "Depuis la réforme constitutionnelle de 1962", "Depuis 1789", "Depuis 1905", "Depuis 1992", "The reform was approved in 1962; the first direct presidential election under it took place in 1965.", "1962 reform; 1965 first vote"],
    ["En quelle année l'Union européenne a-t-elle été fondée ?", "En 1992 par le traité de Maastricht, entré en vigueur en 1993", "En 1789", "En 1945", "En 2002", "The Treaty on European Union was signed at Maastricht in 1992 and entered into force in 1993.", "EU → Maastricht 1992"],
    ["Quand a eu lieu la Seconde guerre mondiale ?", "De 1939 à 1945", "De 1914 à 1918", "De 1870 à 1871", "De 1954 à 1962", "The Second World War began in Europe in 1939 and ended in 1945.", "WWII 1939-1945"],
    ["Quand a eu lieu la Première guerre mondiale ?", "De 1914 à 1918", "De 1939 à 1945", "De 1789 à 1799", "De 1958 à 1962", "The Armistice ending combat on the Western Front was signed on 11 November 1918.", "WWI 1914-1918"],
    ["Sous quel président a été abolie la peine de mort en France ?", "François Mitterrand", "Charles de Gaulle", "Georges Pompidou", "Valéry Giscard d'Estaing", "The death penalty was abolished by the law of 9 October 1981 under President Mitterrand, with Robert Badinter as Justice Minister.", "Mitterrand + Badinter + 1981"],
    ["Que célèbre-t-on le 8 mai ?", "La victoire de 1945 sur l'Allemagne nazie", "L'armistice de 1918", "La prise de la Bastille", "La fête du Travail", "8 May commemorates the end of the Second World War in Europe in 1945.", "8 May = victory 1945"],
    ["Quelle est la première étape de la construction européenne en 1951 ?", "La Communauté européenne du charbon et de l'acier", "La création de l'euro", "Le traité de Maastricht", "L'élection directe du Parlement européen", "The six founding countries created the ECSC/CECA to pool coal and steel production.", "1951 = CECA"],
    ["Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?", "Jean Moulin", "Louis XVI", "Claude Monet", "Napoléon Ier", "Jean Moulin unified major Resistance movements on de Gaulle’s behalf and died after torture in 1943.", "Resistance → Jean Moulin"],
    ["Le 11 novembre est un jour férié. À quoi correspond cette date ?", "À l'armistice de 1918 et à la commémoration des morts pour la France", "À la victoire de 1945", "À la Révolution française", "À la création de la Sécurité sociale", "11 November commemorates the 1918 Armistice and now honours all those who died for France.", "11 November = 1918"],
    ["Depuis quand l'esclavage a-t-il été aboli en France ?", "Depuis 1848 pour l'abolition définitive", "Depuis 1789 sans interruption", "Depuis 1905", "Depuis 1958", "The Second Republic definitively abolished slavery in French colonies by decree in 1848.", "Final abolition = 1848"],
    ["Qui a aboli l'esclavage en France ?", "La Deuxième République, avec Victor Schœlcher comme figure majeure du décret de 1848", "Louis XIV seul", "Napoléon Ier en 1804", "La Ve République en 1958", "The provisional government of the Second Republic issued the 1848 decree; Victor Schœlcher played a central role.", "Schœlcher + 1848"],
    ["Depuis quelle année l'école publique est-elle gratuite ?", "Depuis 1881", "Depuis 1789", "Depuis 1905", "Depuis 1958", "The Jules Ferry law of 16 June 1881 made public primary education free; later laws made it compulsory and secular.", "Free public primary school = 1881"],
    ["En 1944, qu'est-ce qui a changé pour les femmes ?", "Elles ont obtenu le droit de vote et d'éligibilité", "Elles ont perdu le droit de travailler", "Elles ont obtenu l'euro", "Elles sont devenues automatiquement fonctionnaires", "The ordinance of 21 April 1944 granted French women voting and eligibility rights; they first voted in 1945.", "Women’s vote = 1944 ordinance"]
  ]);

  addOfficial("history", "arts-culture", [
    ["Quelle organisation a été créée en 1945 après la Seconde Guerre mondiale ?", "L'Organisation des Nations unies", "L'Union européenne", "La Communauté européenne du charbon et de l'acier", "La Banque centrale européenne", "The United Nations was founded in 1945 to maintain international peace and cooperation.", "1945 → UN"],
    ["En quelle année l'euro est-il devenu la monnaie officielle de la France ?", "En 2002 pour les billets et pièces, après son introduction monétaire en 1999", "En 1957", "En 1981", "En 2010", "The euro became the accounting currency in 1999; notes and coins replaced the franc in everyday circulation in 2002.", "Euro cash = 2002"],
    ["Lors de la seconde guerre mondiale, à quelle date la ville de Paris a-t-elle été libérée ?", "Le 25 août 1944", "Le 18 juin 1940", "Le 8 mai 1945", "Le 11 novembre 1918", "German forces in Paris surrendered on 25 August 1944.", "Paris liberated 25 August 1944"],
    ["Quel était le principal port français impliqué dans la traite négrière au XVIIIe siècle ?", "Nantes", "Calais", "Nice", "Toulon", "Nantes was France’s leading slave-trade port in the eighteenth century; other ports were also involved.", "Slave trade → Nantes"],
    ["Quel célèbre philosophe des Lumières a dénoncé l'esclavage ?", "Voltaire", "Auguste Rodin", "Claude Monet", "Molière", "Voltaire denounced slavery, notably through the episode of the enslaved man of Suriname in Candide; other Enlightenment thinkers also criticised it.", "Voltaire, Candide, Suriname"],
    ["Quel peintre est français ?", "Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí", "Claude Monet was a leading French Impressionist painter.", "Monet = French painter"],
    ["Quel plat est une spécialité de la cuisine française ?", "Le pot-au-feu", "Le sushi", "La paella", "Le couscous uniquement espagnol", "Pot-au-feu is a traditional French dish of meat and vegetables cooked in broth.", "Pot-au-feu = French classic"],
    ["Qui était Marie Curie ?", "Une physicienne et chimiste, double prix Nobel", "Une reine de France", "Une peintre impressionniste", "Une présidente de la République", "Marie Curie pioneered research on radioactivity and received Nobel Prizes in Physics and Chemistry.", "Curie = science + two Nobels"],
    ["Qui a peint « La liberté guidant le peuple » ?", "Eugène Delacroix", "Claude Monet", "Paul Cézanne", "Auguste Rodin", "Delacroix painted the work in 1830 in response to the July Revolution.", "Liberté → Delacroix"],
    ["Dans quel grand musée parisien est exposée la Joconde ?", "Au musée du Louvre", "Au musée d'Orsay", "Au Centre Pompidou", "Au château de Versailles", "Leonardo da Vinci’s Mona Lisa is displayed at the Louvre.", "Joconde → Louvre"],
    ["Quel château célèbre se trouve près de Paris et symbolise le pouvoir royal de Louis XIV ?", "Le château de Versailles", "Le château d'If", "Le château de Chambord", "Le château des ducs de Bretagne", "Louis XIV transformed Versailles into the principal royal court and a symbol of absolute monarchy.", "Louis XIV → Versailles"],
    ["Où peut-on voir des peintures préhistoriques en France ?", "Dans la grotte de Lascaux", "À l'Arc de Triomphe", "Dans la tour Eiffel", "Au palais de l'Élysée", "Lascaux in Dordogne is famous for Palaeolithic cave paintings.", "Prehistory → Lascaux"],
    ["Quel peintre célèbre a peint les Nymphéas ?", "Claude Monet", "Eugène Delacroix", "Paul Cézanne", "Auguste Renoir", "Monet painted the large Water Lilies series inspired by his garden at Giverny.", "Nymphéas → Monet"],
    ["Pendant quelles journées peut-on visiter gratuitement des lieux culturels en France ?", "Pendant les Journées européennes du patrimoine pour de nombreux sites participants", "Pendant toutes les élections", "Uniquement le 1er janvier", "Pendant les soldes", "Heritage Days open many public and private monuments, often free of charge, each September.", "September → Heritage Days"],
    ["Que symbolise le 1er mai ?", "La fête du Travail", "La fête nationale", "L'armistice de 1918", "La journée de l'Europe", "1 May is Labour Day and is associated in France with lily-of-the-valley.", "1 May = Labour"],
    ["Qui était Monsieur Rouget de Lisle ?", "L'officier qui a composé La Marseillaise", "Le peintre de la Joconde", "Le fondateur de la Ve République", "Le créateur de l'euro", "Claude Joseph Rouget de Lisle wrote the words and music of the future national anthem in 1792.", "Rouget de Lisle → Marseillaise"],
    ["À quelle occasion a été construite la Tour Eiffel ?", "Pour l'Exposition universelle de 1889", "Pour les Jeux olympiques de 1924", "Pour célébrer la fin de 1945", "Pour le traité de Rome", "The Eiffel Tower was the monumental entrance to the 1889 Universal Exhibition, the Revolution’s centenary year.", "Eiffel → 1889 Exhibition"],
    ["Quelle chaîne de montagnes est située entre la France et l'Italie ?", "Les Alpes", "Les Pyrénées", "Le Jura", "Les Vosges", "The Alps form much of the France-Italy mountain border; Mont Blanc lies in this range.", "Italy border → Alps"],
    ["Qui était Molière ?", "Un auteur et comédien de théâtre", "Un physicien", "Un président", "Un sculpteur", "Molière was the seventeenth-century playwright and actor behind Tartuffe, L'Avare and Le Malade imaginaire.", "Molière = theatre"],
    ["Qui était Charles Baudelaire ?", "Un poète", "Un empereur", "Un biologiste", "Un architecte", "Baudelaire was a nineteenth-century poet best known for Les Fleurs du mal.", "Baudelaire = poetry"],
    ["Qui était George Sand ?", "Une écrivaine", "Une reine", "Une astronaute", "Une compositrice allemande", "George Sand was the pen name of French novelist Amantine Aurore Dupin.", "George Sand = writer"],
    ["Qui était Simone de Beauvoir ?", "Une écrivaine, philosophe et figure du féminisme", "Une reine de l'Ancien Régime", "Une peintre impressionniste", "Une générale de la Résistance", "Simone de Beauvoir wrote Le Deuxième Sexe and was a major twentieth-century intellectual.", "Beauvoir = writer, philosopher, feminism"],
    ["Qui était Albert Camus ?", "Un écrivain et philosophe, prix Nobel de littérature", "Un roi de France", "Un peintre de la Renaissance", "Un compositeur", "Camus wrote L'Étranger and La Peste and received the 1957 Nobel Prize in Literature.", "Camus = writer, Nobel"],
    ["Qui était Marguerite Yourcenar ?", "Une écrivaine, première femme élue à l'Académie française", "Une ministre de Louis XIV", "Une scientifique du radium", "Une chanteuse d'opéra", "The author of Mémoires d'Hadrien became the first woman elected to the Académie française in 1980.", "Yourcenar = writer + Académie first"],
    ["Qui était Paul Cézanne ?", "Un peintre", "Un dramaturge", "Un homme d'État", "Un ingénieur de la Tour Eiffel", "Cézanne was a major French Post-Impressionist painter associated with Aix-en-Provence.", "Cézanne = painting"],
    ["Qui était Auguste Rodin ?", "Un sculpteur", "Un poète", "Un président", "Un explorateur", "Rodin created celebrated sculptures including Le Penseur and Le Baiser.", "Rodin = sculpture"],
    ["Qui était un célèbre compositeur français ?", "Claude Debussy", "Eugène Delacroix", "Victor Schœlcher", "Jean Moulin", "Debussy was an influential French composer whose works include La Mer.", "Debussy = composer"],
    ["Qui était Auguste Renoir ?", "Un peintre impressionniste", "Un juriste", "Un roi", "Un architecte gothique", "Pierre-Auguste Renoir was a leading French Impressionist painter.", "Renoir = Impressionist"],
    ["Quel musée est situé à Paris ?", "Le musée du Louvre", "Le musée Guggenheim de Bilbao", "Le Prado", "Le Rijksmuseum", "The Louvre is in central Paris and is one of the world’s largest museums.", "Paris → Louvre"]
  ]);

  addOfficial("history", "geography", [
    ["Quel monument historique se trouve sur une île en Normandie ?", "Le Mont-Saint-Michel", "Le château de Versailles", "La cité de Carcassonne", "Le palais des Papes", "Mont-Saint-Michel rises on a tidal island off the Normandy coast.", "Normandy island → Mont-Saint-Michel"],
    ["Quelle ville française fait partie des 10 plus grandes métropoles du pays ?", "Lyon", "Sarlat-la-Canéda", "Honfleur", "Foix", "Lyon is one of France’s largest metropolitan areas.", "Lyon = major metropolis"],
    ["Quelle île fait partie des Antilles françaises ?", "La Guadeloupe", "La Corse", "La Réunion", "Madagascar", "Guadeloupe and Martinique are the principal French Antillean islands.", "Antilles → Guadeloupe/Martinique"],
    ["Quelle île est française ?", "La Corse", "La Sicile", "La Crète", "Majorque", "Corsica is a French territorial collectivity in the Mediterranean.", "Corsica = French island"],
    ["Quelle est la plus haute montagne de France ?", "Le mont Blanc", "Le puy de Dôme", "Le mont Ventoux", "Le Canigou", "Mont Blanc in the Alps is France’s highest summit.", "Highest → Mont Blanc"],
    ["Quelle île française est située dans l'océan indien ?", "La Réunion", "La Corse", "La Guadeloupe", "Belle-Île-en-Mer", "Réunion is a French overseas department and region east of Madagascar in the Indian Ocean.", "Indian Ocean → Réunion"],
    ["Quel département français a une frontière avec le Brésil ?", "La Guyane", "La Guadeloupe", "La Martinique", "La Réunion", "French Guiana is a French overseas department in South America bordering Brazil and Suriname.", "Brazil border → Guyane"],
    ["De quelle ville française décolle la fusée Ariane ?", "Kourou", "Toulouse", "Bordeaux", "Nice", "Ariane launches from the Guiana Space Centre at Kourou in French Guiana.", "Ariane → Kourou"],
    ["Quelle mer ou océan borde la France métropolitaine ?", "L'océan Atlantique", "La mer Noire", "La mer Rouge", "L'océan Indien", "Metropolitan France is bordered by the Atlantic, English Channel, North Sea and Mediterranean.", "Atlantic borders metropolitan France"],
    ["Quelle île est un département d'outre-mer français ?", "La Réunion", "La Sardaigne", "La Crète", "Ibiza", "Réunion is both an overseas department and region of France.", "Réunion = DROM"],
    ["Qu'est-ce que la France d'outre-mer ?", "Les territoires français situés hors du continent européen", "Les pays voisins de la France", "Les anciennes provinces métropolitaines", "Les ambassades françaises à l'étranger", "Overseas France comprises territories under French sovereignty outside metropolitan Europe, with varied constitutional statuses.", "French territories beyond Europe"],
    ["Quelle est la population approximative de la France en 2025 ?", "Environ 68,6 millions d'habitants", "Environ 25 millions", "Environ 120 millions", "Environ 5 millions", "France’s total population was about 68.6 million at the beginning of 2025.", "2025 ≈ 68.6 million"],
    ["Quel est le principal port maritime de France ?", "Marseille-Fos", "Strasbourg", "Clermont-Ferrand", "Limoges", "Marseille-Fos is France’s leading port by total goods tonnage; Le Havre is especially important for containers.", "Main tonnage port → Marseille-Fos"],
    ["Combien y a-t-il de régions en France métropolitaine ?", "13", "18", "22", "101", "Since the 2016 territorial reform, metropolitan France has 13 regions; France has 18 including overseas regions.", "13 metropolitan regions"],
    ["Quelle île française se trouve au sud-est du continent africain ?", "La Réunion", "La Corse", "La Martinique", "Saint-Pierre-et-Miquelon", "Réunion lies in the Indian Ocean east of Madagascar, southeast of continental Africa.", "SE of Africa → Réunion"],
    ["Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?", "Lyon", "Grenoble", "Clermont-Ferrand", "Annecy", "Lyon is the regional capital of Auvergne-Rhône-Alpes.", "AURA → Lyon"],
    ["Quel est le chef-lieu de la région Bretagne ?", "Rennes", "Brest", "Nantes", "Quimper", "Rennes is the capital of the Brittany region.", "Bretagne → Rennes"],
    ["Quel est le chef-lieu de la région Provence-Alpes-Côte d'Azur ?", "Marseille", "Nice", "Toulon", "Avignon", "Marseille is the capital of the Provence-Alpes-Côte d'Azur region.", "PACA → Marseille"],
    ["Quel est le 101ème département français depuis 2011 ?", "Mayotte", "La Corse", "La Nouvelle-Calédonie", "Saint-Pierre-et-Miquelon", "Mayotte became France’s 101st department in 2011.", "101st → Mayotte"],
    ["Quelle région française est réputée pour ses stations de ski ?", "Auvergne-Rhône-Alpes", "Bretagne", "Normandie", "Guyane", "The Alpine departments of Auvergne-Rhône-Alpes contain many renowned ski resorts.", "Alps ski → AURA"],
    ["Quel fleuve traverse Paris ?", "La Seine", "La Loire", "Le Rhône", "La Garonne", "Paris developed along the Seine, which flows onward to the English Channel.", "Paris → Seine"]
  ]);

  // 43/244 - Vivre dans la société française
  addOfficial("society", "family-civil", [
    ["Où faut-il déclarer la naissance d'un enfant ?", "Au service d'état civil de la mairie du lieu de naissance", "À la banque des parents", "Au commissariat du domicile", "À l'employeur", "Births are registered with the civil registrar of the commune where the birth occurred, often through the maternity hospital.", "Birth → mairie of place of birth"],
    ["Quelle action peut réaliser le locataire d'un logement sans l'autorisation du propriétaire ?", "Faire des aménagements décoratifs mineurs, comme repeindre, sans transformer les lieux", "Abattre un mur porteur", "Transformer une chambre en commerce", "Modifier la structure de l'immeuble", "A tenant may make minor, reversible decorative changes but needs consent for transformations affecting the structure or use.", "Decorate yes; transform no"],
    ["Quel mariage est reconnu légalement ?", "Le mariage civil célébré par l'officier d'état civil", "Une cérémonie religieuse seule", "Une cérémonie familiale privée", "Une promesse orale sans formalité", "Only civil marriage creates legal marital status in France; a religious ceremony may take place only after the civil marriage.", "Legal marriage = civil marriage"],
    ["Le stationnement sur une place réservée aux personnes handicapées :", "Est interdit sans la carte ou le droit requis et peut être sanctionné", "Est libre pendant dix minutes", "Est autorisé la nuit", "Dépend uniquement de l'accord d'un voisin", "Unauthorised use of an accessible parking space is an offence and can lead to a fine and vehicle removal.", "Reserved means reserved"],
    ["Si une machine à laver est cassée, il est possible de :", "La faire réparer ou la remettre à un distributeur ou point de collecte agréé", "L'abandonner sur le trottoir", "La jeter dans une rivière", "La brûler dans un parc", "Waste electrical equipment should enter repair, retailer take-back or authorised recycling channels.", "Repair, return or recycle"],
    ["Dans quel cas faut-il déclarer son enfant au service d'état civil ?", "Après chaque naissance", "Seulement si les parents sont mariés", "Seulement si l'enfant est français", "Uniquement pour un premier enfant", "Every birth in France must be declared, regardless of the parents’ marital status or nationality.", "Every birth is declared"],
    ["Quand faut-il déclarer son enfant au service d'état civil ?", "Dans les cinq jours suivant la naissance, selon la règle générale", "Dans l'année", "À son entrée à l'école", "À sa majorité", "The general statutory period is five days from the day after birth, with specific extensions in certain communes.", "Birth declaration = five days"],
    ["Quel numéro d'urgence permet d'appeler la police ?", "Le 17", "Le 15", "Le 18", "Le 114 uniquement pour tous", "17 connects to Police secours or Gendarmerie for an immediate police emergency.", "Police = 17"],
    ["Quel numéro d'urgence permet d'appeler le SAMU ?", "Le 15", "Le 17", "Le 18", "Le 36 46", "15 connects to the SAMU medical emergency service; 112 is the European general emergency number.", "SAMU = 15"],
    ["Auprès de quelle institution les parents peuvent inscrire leurs enfants à l'école publique ?", "Auprès de la mairie pour une école maternelle ou élémentaire publique", "Auprès du Sénat", "Auprès de la Banque de France", "Auprès du tribunal", "The commune handles initial enrolment and provides the school-assignment certificate before final school admission.", "Public primary enrolment → mairie"],
    ["En cas de divorce, qui exerce l'autorité parentale ?", "En principe, les deux parents continuent à l'exercer", "Toujours la mère seule", "Toujours le père seul", "Le maire", "Divorce does not itself end joint parental authority; a judge can adapt arrangements in the child’s interests.", "Divorce ≠ end of shared parental authority"],
    ["Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?", "L'aide juridictionnelle", "L'allocation de rentrée scolaire", "La prime d'activité", "Le chèque énergie", "Legal aid can cover all or part of legal costs subject to means and other eligibility conditions.", "Lawyer help → aide juridictionnelle"],
    ["Qui peut demander le divorce de personnes mariées ?", "L'un des époux ou les deux ensemble", "Uniquement le maire", "Uniquement les parents des époux", "Uniquement le procureur", "Depending on the procedure, one spouse or both spouses can initiate divorce.", "One or both spouses"],
    ["Auprès de quel organisme faut-il demander le remboursement des frais de santé ?", "Auprès de l'Assurance Maladie, notamment la CPAM", "Auprès de France Travail", "Auprès de la mairie uniquement", "Auprès du tribunal de commerce", "CPAM administers health-insurance affiliation and reimbursements for most people under the general scheme.", "Health reimbursement → CPAM"],
    ["La contraception :", "Est un choix personnel et peut être obtenue dans le cadre du système de santé", "Est interdite aux personnes non mariées", "Nécessite l'autorisation du maire", "Est obligatoire pour tous", "Contraception is lawful and based on personal choice; access, confidentiality and reimbursement rules vary by method and age.", "Contraception = personal choice"],
    ["À quoi sert la carte Vitale ?", "À transmettre les informations nécessaires à la prise en charge et au remboursement des soins", "À voter", "À conduire", "À prouver la nationalité française", "The Carte Vitale records administrative health-insurance data; it is not an identity or nationality document.", "Vitale → healthcare reimbursement"],
    ["À quoi sert une mutuelle santé ?", "À compléter tout ou partie des remboursements de l'Assurance Maladie", "À remplacer l'état civil", "À verser les salaires", "À délivrer le permis de conduire", "Complementary health insurance may cover the portion not reimbursed by compulsory health insurance under the contract.", "Mutuelle complements, not replaces"],
    ["Qu'est-ce que le tiers payant ?", "Un dispositif évitant d'avancer tout ou partie des frais de santé couverts", "Un impôt sur les médicaments", "Un prêt bancaire", "Une consultation sans professionnel", "With third-party payment, the insurer pays the professional directly for the covered amount.", "Tiers payant = no advance for covered share"],
    ["L'inscription à l'Assurance maladie est :", "Obligatoire pour les personnes qui travaillent ou résident en France de façon stable et régulière selon les règles", "Toujours facultative", "Réservée aux citoyens français", "Automatiquement interdite aux étudiants", "French health protection is compulsory; affiliation depends on work or stable and regular residence and the applicable scheme.", "Health protection is compulsory"],
    ["L'avortement est-il possible en France ?", "Oui, l'IVG est légale dans le délai prévu par la loi", "Non, il est toujours interdit", "Oui, uniquement avec l'autorisation du maire", "Seulement pour les personnes mariées", "French law permits voluntary termination of pregnancy within the statutory period; the freedom to have recourse to IVG is constitutionally protected.", "IVG is legal"],
    ["Travailler sans être déclaré est :", "Illégal", "Autorisé pour une courte période", "Obligatoire pour un premier emploi", "Une décision privée sans règle", "Undeclared work evades employment and social-contribution obligations and exposes employer and worker to serious consequences.", "Undeclared work = illegal"],
    ["Qu'est-ce que le SMIC ?", "Le salaire minimum légal", "Le salaire moyen de tous les cadres", "Une allocation familiale", "Une cotisation de santé", "SMIC means salaire minimum interprofessionnel de croissance, the statutory minimum hourly wage.", "SMIC = minimum wage"],
    ["Quelle est la première démarche à réaliser pour chercher un emploi ?", "Préparer sa recherche et s'inscrire à France Travail pour bénéficier de ses services", "Attendre obligatoirement une proposition de la mairie", "Payer un employeur", "Créer un faux diplôme", "France Travail registration gives access to job-search support and benefits where eligible; preparing a CV and applications is also essential.", "Job search → France Travail + CV"],
    ["Quelle est la durée légale du temps de travail par semaine ?", "35 heures", "30 heures", "40 heures sans exception", "48 heures", "For a full-time employee, 35 hours is the statutory reference duration; overtime and particular arrangements are legally possible.", "Legal reference = 35 hours"],
    ["Qui peut demander un congé parental d'éducation ?", "Le père ou la mère remplissant les conditions", "Uniquement la mère", "Uniquement un fonctionnaire", "Uniquement le grand-parent", "Either eligible parent may request parental education leave after a birth or adoption.", "Either parent"],
    ["Une personne étrangère, en situation régulière, peut créer son entreprise :", "Oui, si son titre et son activité respectent les conditions légales", "Non, jamais", "Oui, sans aucune formalité ni titre adapté", "Seulement après naturalisation", "A foreign national can create or run a business when immigration status authorises the activity and professional/business rules are met.", "Regular status + authorised activity"],
    ["Une femme peut-elle créer son entreprise ?", "Oui, dans les mêmes conditions qu'un homme", "Non", "Oui, seulement avec l'accord de son conjoint", "Uniquement dans certains secteurs féminins", "Equality between women and men prohibits sex-based restrictions on entrepreneurship.", "Equal right to create a business"],
    ["Quels sont les textes qui définissent les règles au travail ?", "Le Code du travail, les conventions collectives et le contrat de travail", "Le Code de la route uniquement", "Le règlement de la mairie uniquement", "Les usages familiaux", "Employment relationships are governed by statutes and regulations, applicable collective agreements and the employment contract, with a hierarchy of norms.", "Code + convention + contract"],
    ["Quelles sont les affaires traitées par le conseil de prud'hommes ?", "Les litiges individuels entre salariés et employeurs liés au contrat de travail", "Les divorces", "Les crimes", "Les élections nationales", "The labour tribunal decides individual private-employment disputes such as unpaid salary or contested dismissal.", "Prud'hommes = employee-employer dispute"]
  ]);

  addOfficial("society", "school", [
    ["Qui a le droit de se syndiquer ?", "Tous les travailleurs peuvent adhérer au syndicat de leur choix", "Uniquement les dirigeants d'entreprise", "Uniquement les citoyens français", "Personne dans le secteur privé", "Trade-union freedom protects employees and other workers, regardless of nationality, subject to the applicable rules.", "Workers may unionise"],
    ["Est-il possible de licencier une femme enceinte ou en congé maternité, en raison de sa grossesse ?", "Non, un licenciement fondé sur la grossesse ou le congé maternité est discriminatoire et interdit", "Oui, sans justification", "Oui, si elle travaille à temps plein", "Oui, avec l'accord de ses collègues", "Pregnancy and maternity trigger strong dismissal protection. Limited exceptions must be unrelated to pregnancy and satisfy strict rules.", "Pregnancy is not a lawful dismissal reason"],
    ["L'instruction des enfants est obligatoire de :", "3 à 16 ans", "0 à 3 ans", "6 à 14 ans", "16 à 25 ans", "Compulsory instruction runs from the beginning of the school year in the calendar year the child turns three until age 16.", "Instruction: 3-16"],
    ["Des parents ne respectent pas l'obligation d'instruction pour leurs enfants. Quelle sanction maximale risquent-ils ?", "Six mois d'emprisonnement et 7 500 euros d'amende après les procédures prévues", "Aucune sanction", "Une simple taxe annuelle uniquement", "La perte automatique de la nationalité", "Persistent failure to enrol or provide instruction after formal notice can constitute the offence carrying this maximum penalty.", "Instruction breach: up to 6 months + €7,500"],
    ["Quelle est la définition de l'autorité parentale ?", "Un ensemble de droits et de devoirs ayant pour finalité l'intérêt de l'enfant", "Un droit de propriété sur l'enfant", "Le pouvoir de refuser toute scolarité", "Une responsabilité réservée à la mère", "Parental authority protects the child’s safety, health, morality, education and development, with respect for the child’s person.", "Parental authority serves the child"],
    ["Quel motif d'absence est accepté par l'école ?", "Une maladie de l'enfant signalée et justifiée selon les règles", "Le refus habituel de se lever", "Des vacances prises hors calendrier sans autorisation", "Une opposition générale aux matières enseignées", "Illness, solemn family events and certain serious transport or family circumstances can be legitimate reasons; parents must notify the school.", "Illness can justify absence"],
    ["Jusqu'à quel âge l'école est-elle obligatoire ?", "Jusqu'à 16 ans pour l'obligation d'instruction", "Jusqu'à 10 ans", "Jusqu'à 14 ans", "Jusqu'à 21 ans", "Compulsory instruction ends at 16; a separate training obligation applies from 16 to 18.", "Compulsory instruction ends at 16"],
    ["À quel âge commence l'instruction obligatoire des enfants ?", "À 3 ans", "À la naissance", "À 6 ans", "À 10 ans", "The starting age for compulsory instruction was lowered to three in 2019.", "Starts at 3"],
    ["Comment s'appellent les établissements scolaires que les élèves intègrent après l'école élémentaire ?", "Les collèges", "Les universités", "Les crèches", "Les écoles maternelles", "After école élémentaire, pupils normally enter collège, beginning with sixième.", "After primary → collège"],
    ["En tant que parent d'élève, il est possible de :", "Participer à la vie scolaire et élire les représentants des parents", "Choisir les notes de son enfant", "Refuser toutes les règles de l'établissement", "Remplacer seul le chef d'établissement", "Parents can communicate with staff, join representative bodies and vote for parent representatives.", "Parents participate and elect representatives"],
    ["Quelle instruction est prévue pour les enfants qui ne parlent pas français ?", "Une scolarisation ordinaire avec un accompagnement renforcé en français, notamment en UPE2A", "Aucune scolarisation avant de parler parfaitement", "Une exclusion automatique", "Uniquement des cours privés payants", "Newly arrived pupils are enrolled and assessed, then receive adapted French-language teaching while joining ordinary classes.", "Enrol first; support French learning"],
    ["S'agissant de l'accueil des enfants en situation de handicap à l'école, laquelle des propositions est vraie ?", "Ils ont droit à la scolarisation et aux adaptations nécessaires, autant que possible en milieu ordinaire", "Ils sont toujours exclus des écoles ordinaires", "Seuls les établissements privés peuvent les accueillir", "Les parents doivent assurer seuls tous les cours", "Inclusive education is a legal right, supported by individual plans, assistance and adapted settings according to need.", "Disability → right to inclusive schooling"],
    ["Depuis le 1er juillet 2021, quelle est la durée du congé paternité ?", "25 jours calendaires pour une naissance simple, en plus du congé de naissance", "3 jours au total", "10 jours", "60 jours dans tous les cas", "The paternity and childcare leave is 25 calendar days for a single birth and 32 for multiple births, plus the separate three-day birth leave.", "Paternity = 25 days (single birth)"],
    ["Est-ce possible de punir physiquement ses enfants ?", "Non, les violences éducatives ordinaires et les châtiments corporels sont interdits", "Oui, sans limite", "Oui, uniquement à l'école", "Oui, si un voisin l'autorise", "Parental authority must be exercised without physical or psychological violence.", "Education without violence"]
  ]);

  // Representative scenario practice. The Ministry does not publish real scenarios.
  addScenarios("principles", "laicite", [
    ["Vous travaillez au guichet d'une mairie. Un usager porte un signe religieux visible. Que devez-vous faire ?", "Le servir normalement et de manière impartiale tant qu'il respecte le fonctionnement du service", "Refuser de le servir", "L'obliger à cacher tout signe", "Lui demander sa religion avant le dossier", "Public-service users retain freedom to express beliefs. The public agent must be neutral and serve everyone equally.", "Agent neutral; user free within order"],
    ["Un agent public veut porter un grand signe religieux pendant qu'il accueille le public. Quelle règle s'applique ?", "Il doit respecter la neutralité religieuse dans l'exercice de ses fonctions", "Il peut imposer ses convictions aux usagers", "Il n'existe aucune règle", "Il doit demander aux usagers de porter le même signe", "Public agents have a neutrality obligation while performing their duties.", "Public agent = neutrality"],
    ["Une élève d'un collège public porte un signe religieux discret. Quelle réponse respecte la laïcité ?", "Le signe discret est admis s'il ne constitue pas une manifestation ostensible ou une perturbation", "Toute conviction est interdite", "L'école doit lui attribuer une religion", "Elle doit quitter définitivement l'école", "The public-school rule prohibits conspicuous signs, not all discreet signs or private beliefs.", "Discreet vs conspicuous"],
    ["Votre collègue vous dit qu'il ne croit en aucune religion. Comment réagir ?", "Respecter son choix, protégé par la liberté de conscience", "L'obliger à choisir une religion", "Le signaler à la police", "Refuser de travailler avec lui", "Laïcité protects belief and non-belief equally.", "Non-belief is protected"],
    ["Pendant un recrutement, un employeur demande à une candidate si elle prévoit d'avoir un enfant. Quelle est la bonne réaction ?", "Cette question n'est pas liée à ses compétences et peut être discriminatoire", "La question est obligatoire", "Elle doit répondre pour obtenir le poste", "Seuls les hommes peuvent refuser", "Recruitment information must be directly and necessarily related to the job; family plans are not a lawful selection criterion.", "Recruit for skills, not pregnancy plans"],
    ["Une personne publie un message appelant à attaquer un groupe religieux. Peut-elle invoquer la liberté d'expression ?", "Non, l'incitation à la haine ou à la violence peut être sanctionnée", "Oui, internet n'est soumis à aucune loi", "Oui, si le compte est anonyme", "Oui, si le message est partagé la nuit", "Freedom of expression does not protect criminal incitement to hatred or violence.", "Expression stops before hate and violence"],
    ["Des voisins créent une association pour organiser des activités culturelles légales. Ont-ils besoin de partager la même nationalité ?", "Non, la liberté d'association appartient à chacun dans le respect de la loi", "Oui, tous doivent être français", "Oui, tous doivent être élus", "Non, mais ils doivent appartenir à la même religion", "Lawful association is not reserved to French citizens or a particular belief.", "Association is broadly open"],
    ["Une salariée est écartée d'une promotion uniquement parce qu'elle est une femme. Quel principe est violé ?", "L'égalité et l'interdiction des discriminations", "La liberté de circulation", "La séparation des pouvoirs", "Le droit de propriété", "Employment decisions cannot lawfully be based on sex.", "Same competence, equal treatment"],
    ["Un ami change de religion et sa famille veut l'en empêcher par la force. Quel droit faut-il rappeler ?", "La liberté de conscience permet de croire, de ne pas croire et de changer de religion", "La religion est fixée à la naissance", "Le maire choisit la religion", "Seul l'employeur peut autoriser un changement", "Freedom of conscience protects an adult’s personal religious choice.", "Conscience belongs to the person"],
    ["Un usager exige qu'une mairie organise son service selon les règles de sa religion. Quelle réponse est juste ?", "La mairie reste neutre et applique les mêmes règles publiques à tous", "La mairie doit adopter la religion de l'usager", "Le service ferme", "Les autres usagers doivent se conformer", "A neutral public service does not organise itself around one religion and treats users equally.", "One neutral service for all"],
    ["Lors d'un débat, une personne critique vivement une décision politique sans menacer ni insulter. Est-ce permis ?", "Oui, la critique politique pacifique relève de la liberté d'expression", "Non, toute critique est interdite", "Oui, seulement avec l'autorisation du préfet", "Non, sauf pendant les élections", "Democratic debate protects strong peaceful criticism, within laws protecting others.", "Criticism is not a threat"],
    ["Un commerce refuse l'accès à une personne uniquement en raison de son handicap. Quelle réponse est correcte ?", "Ce refus peut constituer une discrimination interdite", "Le commerçant est toujours libre de discriminer", "La personne doit changer de handicap", "Cela dépend de sa religion", "Une service refusal based solely on disability can be unlawful discrimination; accessibility duties may also apply.", "Disability is a protected ground"]
  ]);

  addScenarios("institutions", "elections", [
    ["Vous n'avez pas internet et vous voulez vous inscrire pour voter. Où aller ?", "À la mairie avec les justificatifs demandés", "À la pharmacie", "Au commissariat uniquement", "À la Banque centrale européenne", "The mairie accepts in-person electoral-roll applications.", "No internet → mairie"],
    ["Après les élections municipales, qui choisit le maire ?", "Le conseil municipal élu", "Le préfet", "Le Président de la République", "Le procureur", "Voters choose municipal councillors; the council elects the mayor.", "Councillors choose mayor"],
    ["La toiture d'une école primaire publique doit être rénovée. Quelle collectivité est principalement compétente ?", "La commune", "La région", "L'Union européenne", "Le Sénat", "Communes manage public nursery and primary-school buildings.", "Primary school → commune"],
    ["Un collège public a besoin de travaux importants. Quelle collectivité les organise ?", "Le département", "La commune uniquement", "La Banque de France", "Le Parlement européen", "Departments are responsible for public collège buildings.", "Collège → department"],
    ["Une ligne de train TER doit être organisée. Quelle collectivité est compétente ?", "La région", "La commune", "Le tribunal", "Le Conseil constitutionnel", "Regions act as organising authorities for regional transport.", "TER → region"],
    ["Un préfet arrive dans un département. Comment a-t-il obtenu sa fonction ?", "Il a été nommé pour représenter l'État", "Il a été élu par tous les habitants", "Il a hérité de la fonction", "Il a été tiré au sort", "A prefect is an appointed State representative, not a territorial elected official.", "Prefect appointed"],
    ["La police arrête une personne soupçonnée de vol. Qui peut finalement la déclarer coupable et la sanctionner ?", "Un tribunal", "La police seule", "Le maire seul", "La victime seule", "Courts judge guilt and penalties after due process.", "Police investigates; court judges"],
    ["Le Parlement adopte une loi susceptible de violer la Constitution. Quelle institution peut en contrôler la conformité ?", "Le Conseil constitutionnel", "France Travail", "Le conseil de prud'hommes", "La mairie", "The Constitutional Council performs constitutional review under the applicable referral procedures.", "Constitutional check → Council"],
    ["Le poste de Président de la République devient vacant. Qui exerce provisoirement les fonctions ?", "Le président du Sénat", "Le maire de Paris", "Le ministre de la Justice", "Le président de la Commission européenne", "The Senate President assumes the interim under Article 7.", "Vacancy → Senate President"],
    ["Vous n'êtes pas d'accord avec une loi. Quelle action respecte l'État de droit ?", "Utiliser les recours, le débat démocratique ou demander sa modification tout en respectant la loi", "Ignorer la loi", "Menacer un juge", "Empêcher physiquement tout contrôle", "Rule of law allows legal challenge and democratic change, not unilateral disobedience.", "Challenge law by lawful means"],
    ["Une citoyenne française de 19 ans, inscrite sur la liste électorale et jouissant de ses droits, veut voter à la présidentielle. Le peut-elle ?", "Oui", "Non, il faut avoir 21 ans", "Non, seules les personnes propriétaires votent", "Non, les femmes ne votent pas", "The voting age is 18 and the other stated conditions are satisfied.", "18 + French + registered + rights"],
    ["Qui les citoyens de l'Union européenne choisissent-ils directement lors des élections européennes ?", "Les députés européens", "Les commissaires européens", "Les juges français", "Les préfets", "EU citizens directly elect Members of the European Parliament.", "European elections → MEPs"]
  ]);

  addScenarios("rights", "civic-duties", [
    ["Vous voyez une personne inconsciente dans la rue. Vous n'êtes pas médecin. Que devez-vous faire ?", "Appeler immédiatement les secours et suivre leurs instructions sans vous mettre en danger", "Partir sans rien faire", "La déplacer de force dans tous les cas", "Publier d'abord une vidéo", "The duty to assist can be fulfilled safely by alerting emergency services; call 15, 18 or 112 as appropriate.", "Safe help begins with a call"],
    ["Vous recevez une convocation pour être juré d'assises. Que faire ?", "Vous présenter ou demander officiellement une dispense pour un motif légitime", "Jeter la convocation", "Envoyer un ami à votre place", "Choisir de répondre après le procès", "Jury service is a binding civic duty unless the court grants an excuse.", "Jury summons is official"],
    ["Votre impôt est prélevé à la source. Devez-vous encore faire la déclaration annuelle demandée ?", "Oui", "Non, jamais", "Seulement si vous êtes propriétaire", "Seulement après 65 ans", "Withholding and annual declaration are separate parts of the income-tax system.", "Withholding ≠ declaration"],
    ["Un ami anonyme menace une personne sur un réseau social. Que lui dire ?", "L'anonymat ne supprime pas la responsabilité pénale et les menaces peuvent être sanctionnées", "Internet autorise toutes les menaces", "Il suffit d'effacer le message après", "La loi s'applique seulement aux journalistes", "Online threats are unlawful and investigators can seek identification through legal procedures.", "Anonymous is not immune"],
    ["Un restaurant refuse un client uniquement en raison de son origine. Que peut constituer ce refus ?", "Une discrimination interdite", "Une règle normale de commerce", "Un exercice du droit de vote", "Une mesure de laïcité", "Denying goods or services on a protected ground can be a criminal discrimination offence.", "Origin-based service refusal = discrimination"],
    ["Une personne fume dans une salle de restaurant fermée. Est-ce autorisé ?", "Non", "Oui, après 20 heures", "Oui, si elle ouvre une fenêtre", "Oui, si elle est majeure", "Smoking is prohibited in enclosed public places such as restaurants.", "Enclosed public place = no smoking"],
    ["Votre ami veut conduire une moto nécessitant un permis, mais il n'en a pas. Quel conseil est légal ?", "Ne pas conduire avant d'avoir le permis approprié", "Conduire seulement le dimanche", "Utiliser le permis d'un proche", "Éviter uniquement les autoroutes", "Driving without the required licence is an offence regardless of time or road.", "Correct licence first"],
    ["Une personne déjà mariée veut célébrer un second mariage civil sans divorcer. Est-ce possible ?", "Non", "Oui, si les deux conjoints acceptent", "Oui, hors de Paris", "Oui, avec une déclaration fiscale", "French law requires the prior marriage to be dissolved before another marriage.", "No simultaneous marriages"],
    ["Un magasin vend de l'alcool à un jeune de 16 ans. Est-ce légal ?", "Non, la vente d'alcool aux moins de 18 ans est interdite", "Oui, avec une carte de transport", "Oui, si le jeune travaille", "Oui, avant 18 heures", "The seller must verify majority when there is doubt.", "Alcohol: 18"],
    ["Une personne placée en garde à vue demande un avocat. Que doit-on respecter ?", "Son droit à l'assistance d'un avocat selon la procédure", "La demande doit toujours être refusée", "Elle doit être condamnée avant", "Seule sa famille peut demander", "Access to legal assistance is a core custody right, subject to narrowly regulated procedural exceptions.", "Custody → lawyer"],
    ["Un élève reçoit chaque jour des messages humiliants d'un groupe. Quelle réaction est appropriée ?", "Conserver les preuves, en parler à un adulte ou à l'établissement et signaler le cyberharcèlement", "Répondre par des menaces", "Partager les messages plus largement", "Ne jamais demander d'aide", "Cyber-harassment is not harmless; preserve evidence and seek support or report it.", "Save, tell, report"],
    ["Des salariés cessent collectivement le travail pour défendre leurs salaires en respectant les règles. Quel droit exercent-ils ?", "Le droit de grève", "Le droit de propriété", "Le droit de grâce", "Le droit de dissolution", "A collective stoppage supporting professional claims is the classic exercise of strike rights.", "Collective work stoppage = strike"]
  ]);

  addScenarios("history", "postwar-europe", [
    ["Vous assistez à une cérémonie le 8 mai. Quel événement est commémoré ?", "La victoire de 1945 sur l'Allemagne nazie", "L'armistice de 1918", "La prise de la Bastille", "Le traité de Maastricht", "8 May marks victory in Europe in 1945.", "8 May → 1945"],
    ["Une cérémonie a lieu le 11 novembre. À quelle mémoire est-elle principalement liée ?", "À l'armistice de 1918 et aux morts pour la France", "À la fin de la Seconde Guerre mondiale", "À l'abolition de l'esclavage", "À la création de l'euro", "11 November began as the First World War Armistice commemoration.", "11 November → 1918"],
    ["Dans un musée, vous voyez « La Liberté guidant le peuple ». Quel nom cherchez-vous sur l'étiquette ?", "Eugène Delacroix", "Claude Monet", "Auguste Rodin", "Marie Curie", "Delacroix painted the work after the July Revolution of 1830.", "Liberté → Delacroix"],
    ["Vous visitez Giverny et observez des bassins de nénuphars. Quel peintre y est associé ?", "Claude Monet", "Paul Cézanne", "Molière", "Albert Camus", "Monet’s garden at Giverny inspired the Water Lilies series.", "Giverny → Monet"],
    ["Vous êtes à Reims devant la cathédrale. Quelle tradition historique est liée à ce lieu ?", "Le couronnement de nombreux rois de France", "Le lancement d'Ariane", "La signature du traité de Rome", "La construction de la Tour Eiffel", "Reims was the traditional coronation city.", "Reims → coronations"],
    ["Vous préparez une visite sur les plages du 6 juin 1944. Dans quelle région allez-vous ?", "En Normandie", "En Corse", "En Bretagne sud", "En Guyane", "The D-Day beaches are in Normandy.", "D-Day → Normandy"],
    ["Une exposition parle du décret d'abolition définitive de l'esclavage. Quelle date retenir ?", "1848", "1789", "1905", "1981", "The Second Republic definitively abolished slavery in French colonies in 1848.", "Abolition → 1848"],
    ["Un panneau mentionne l'appel du 18 juin. Qui l'a lancé ?", "Le général de Gaulle", "Jean Jaurès", "Louis XVI", "Robert Schuman", "De Gaulle’s London broadcast called for continued resistance in 1940.", "18 June → de Gaulle"],
    ["Vous votez avec des billets et pièces en euros en France. Depuis quelle année circulent-ils ?", "2002", "1951", "1981", "1992", "Euro cash entered circulation on 1 January 2002.", "Cash euro → 2002"],
    ["Vous voyez douze étoiles sur un drapeau bleu. Leur nombre correspond-il au nombre actuel d'États membres ?", "Non, douze est un symbole fixe d'unité", "Oui, exactement", "Oui, mais seulement depuis 2020", "Non, il représente les départements français", "The circle always has 12 stars, independent of membership.", "12 stars stay 12"],
    ["Vous êtes à Kourou pour assister à un lancement. Dans quel territoire français êtes-vous ?", "En Guyane", "En Guadeloupe", "À La Réunion", "En Corse", "Kourou and the Guiana Space Centre are in French Guiana.", "Kourou → Guyane"],
    ["Vous traversez la frontière montagneuse entre la France et l'Italie. Dans quelle chaîne êtes-vous ?", "Les Alpes", "Les Pyrénées", "Les Vosges", "Le Massif armoricain", "The Alps form the principal France-Italy mountain border.", "Italy → Alps"]
  ]);

  addScenarios("society", "health-emergency", [
    ["Une personne présente soudainement des signes graves de malaise. Quel numéro appelez-vous pour une urgence médicale ?", "Le 15 ou le 112", "Le 17 uniquement", "Le 36 46 uniquement", "Le numéro de la mairie", "15 reaches SAMU; 112 is the European emergency number.", "Medical emergency → 15/112"],
    ["Votre enfant vient de naître. Quelle formalité est prioritaire dans les jours suivants ?", "Déclarer la naissance à l'état civil du lieu de naissance", "Attendre son entrée à l'école", "Demander un permis de conduire", "L'inscrire sur une liste électorale", "Every birth must be declared within the statutory period, generally five days.", "Birth → civil registration"],
    ["Vous louez un appartement et voulez simplement repeindre un mur. Faut-il normalement l'autorisation du propriétaire ?", "Non pour ce simple aménagement décoratif, si les lieux ne sont pas transformés", "Oui pour tout changement de couleur", "Non, même pour abattre un mur", "Oui, et celle du préfet", "Tenants may make minor decorative changes but not structural transformations without consent.", "Paint yes; structural change no"],
    ["Votre machine à laver ne fonctionne plus. Quelle solution est civique et légale ?", "La réparer ou l'apporter à une filière de reprise ou de recyclage", "La déposer sur le trottoir sans rendez-vous", "La jeter dans la nature", "La laisser dans les parties communes", "Electrical waste belongs in repair, retailer take-back or authorised collection channels.", "Repair or recycle"],
    ["Une salariée apprend qu'elle est enceinte. Son employeur veut la licencier uniquement pour cette raison. Est-ce légal ?", "Non", "Oui, automatiquement", "Oui, si elle n'est pas française", "Oui, sans procédure", "Pregnancy-based dismissal is discriminatory and strong statutory protection applies.", "Pregnancy is protected"],
    ["Un salarié conteste des salaires impayés par son employeur privé. Quelle juridiction traite ce litige individuel ?", "Le conseil de prud'hommes", "Le Conseil constitutionnel", "La cour d'assises", "Le Parlement européen", "Labour tribunals hear individual disputes arising from private employment contracts.", "Employment dispute → prud'hommes"],
    ["Un enfant de 4 ans arrive en France sans parler français. Quelle réponse respecte son droit à l'éducation ?", "L'inscrire et organiser un accompagnement adapté en français", "Attendre qu'il apprenne seul avant l'école", "Refuser définitivement sa scolarisation", "L'envoyer obligatoirement à l'étranger", "Language needs call for adapted support, not exclusion from compulsory instruction.", "Enrol and support"],
    ["Des parents divorcés doivent prendre une décision importante pour leur enfant. Qui exerce normalement l'autorité parentale ?", "Les deux parents, sauf décision judiciaire contraire", "Toujours le parent le plus âgé", "Le maire", "L'enseignant seul", "Joint parental authority generally continues after divorce.", "Both parents remain responsible"],
    ["À la pharmacie, on vous demande la carte Vitale. À quoi sert-elle ?", "À faciliter la transmission pour la prise en charge par l'Assurance Maladie", "À prouver que vous êtes français", "À retirer de l'argent", "À voter", "The Carte Vitale is a health-insurance administrative card, not proof of nationality.", "Vitale = health, not identity"],
    ["Chez le médecin, vous bénéficiez du tiers payant. Qu'est-ce que cela change ?", "Vous n'avancez pas tout ou partie de la somme couverte", "La consultation devient illégale", "Vous perdez votre assurance", "Vous payez obligatoirement deux fois", "The covered body pays the health professional directly for the relevant amount.", "Tiers payant = no covered advance"],
    ["Un conducteur sans carte se gare sur une place réservée aux personnes handicapées pour cinq minutes. Est-ce permis ?", "Non", "Oui, si le moteur reste allumé", "Oui, la nuit", "Oui, si le parking est presque vide", "The restriction applies regardless of the short duration or perceived availability.", "Five minutes is still prohibited"],
    ["Une mère souhaite créer une entreprise, mais on lui dit qu'elle a besoin de l'autorisation de son mari. Quelle réponse est juste ?", "Elle peut créer son entreprise dans les mêmes conditions qu'un homme", "L'autorisation du mari est toujours obligatoire", "Les femmes ne peuvent pas être entrepreneures", "Seules les femmes célibataires peuvent le faire", "Women and men have equal legal capacity to create businesses.", "Entrepreneurship is equal"]
  ]);

  if (official.length !== 244) {
    throw new Error("Coverage audit failed: expected 244 official stems, found " + official.length);
  }

  window.CIVIQUE_DATA = {
    version: "2026.10.06",
    verified: "2026-10-06",
    themes: THEMES,
    lessons: LESSONS,
    questions: official.concat(scenarios),
    officialCount: official.length,
    scenarioCount: scenarios.length,
    metadata: {
      examQuestions: 40,
      knowledgeQuestions: 28,
      scenarioQuestions: 12,
      passingScore: 32,
      durationMinutes: 45,
      sourceNotice: "All 244 Ministry-published knowledge stems are included. Answer options and scenarios are study material; real scenarios are unpublished."
    }
  };
})();
