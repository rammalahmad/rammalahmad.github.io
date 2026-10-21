/*
 * Complément de la banque officielle de naturalisation.
 * Les 15 intitulés ci-dessous sont présents visuellement dans le PDF officiel
 * mais avaient été perdus lors de son extraction textuelle (glyphes vectorisés).
 * Choix de réponse, explications et distracteurs : matériel pédagogique original.
 * Les identifiants existants O001–O244 sont conservés.
 */
(function () {
  "use strict";
  window.CIVIQUE_SUPPLEMENTS = window.CIVIQUE_SUPPLEMENTS || [];
  window.CIVIQUE_SUPPLEMENTS.push({
  "id": "official-complement",
  "sources": [
    {
      "id": "official-bank-2026-principles",
      "title": "Liste officielle des questions de connaissance — naturalisation : Principes et valeurs de la République",
      "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2025/12/examen-civique-naturalisation-questions-de-connaissance.pdf",
      "theme": "principles",
      "section": "Pages 1–2 ; intitulés vérifiés dans les tableaux du document"
    },
    {
      "id": "official-bank-2026-institutions",
      "title": "Liste officielle des questions de connaissance — naturalisation : Système institutionnel et politique",
      "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2025/12/examen-civique-naturalisation-questions-de-connaissance.pdf",
      "theme": "institutions",
      "section": "Pages 3–4 ; intitulés vérifiés dans les tableaux du document"
    },
    {
      "id": "official-bank-2026-rights",
      "title": "Liste officielle des questions de connaissance — naturalisation : Droits et devoirs",
      "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2025/12/examen-civique-naturalisation-questions-de-connaissance.pdf",
      "theme": "rights",
      "section": "Pages 5–6 ; intitulés vérifiés dans les tableaux du document"
    },
    {
      "id": "official-bank-2026-history",
      "title": "Liste officielle des questions de connaissance — naturalisation : Histoire, géographie et culture",
      "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2025/12/examen-civique-naturalisation-questions-de-connaissance.pdf",
      "theme": "history",
      "section": "Pages 7–9 ; intitulés vérifiés dans les tableaux du document"
    },
    {
      "id": "official-bank-2026-society",
      "title": "Liste officielle des questions de connaissance — naturalisation : Vivre dans la société française",
      "url": "https://www.lefrancaisdesaffaires.fr/wp-content/uploads/2025/12/examen-civique-naturalisation-questions-de-connaissance.pdf",
      "theme": "society",
      "section": "Pages 10–11 ; intitulés vérifiés dans les tableaux du document"
    },
    {
      "id": "official-jury-assises-conditions",
      "title": "Juré d’assises : conditions de sélection",
      "url": "https://www.service-public.gouv.fr/particuliers/vosdroits/F1540",
      "theme": "rights",
      "section": "Qui peut être sélectionné comme juré d’assises ?"
    }
  ],
  "lessons": [],
  "questions": [
    {
      "id": "ON001",
      "theme": "principles",
      "concept": "liberty-equality",
      "prompt": "Que signifie le mot “fraternité” dans la devise française ?",
      "correct": "La solidarité et l’entraide entre les personnes",
      "wrong": [
        "L’obligation pour tous les citoyens d’appartenir à la même famille",
        "Le droit d’obtenir un salaire identique pour tous",
        "Le droit d’imposer ses croyances aux autres"
      ],
      "explanation": "La fraternité invite à reconnaître les autres comme des égaux et à agir avec solidarité : aider une personne en difficulté, respecter autrui et contribuer à la vie collective. Elle ne désigne ni une parenté biologique ni une uniformité des revenus.",
      "hook": "Fraternité = solidarité et entraide.",
      "wrongReasons": {
        "L’obligation pour tous les citoyens d’appartenir à la même famille": "La fraternité républicaine concerne le lien entre les personnes et ne suppose aucun lien familial.",
        "Le droit d’obtenir un salaire identique pour tous": "La devise ne garantit pas des revenus identiques ; l’égalité signifie notamment l’égalité des droits et devant la loi.",
        "Le droit d’imposer ses croyances aux autres": "La liberté de conscience protège le choix de chacun. Imposer ses croyances contredit la liberté et le respect d’autrui."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-principles"
      ],
      "sourcePage": 1,
      "sourceRow": 15
    },
    {
      "id": "ON002",
      "theme": "principles",
      "concept": "constitution",
      "prompt": "Selon la Constitution, la France est une République...",
      "correct": "Indivisible, laïque, démocratique et sociale",
      "wrong": [
        "Fédérale, religieuse, monarchique et héréditaire",
        "Indivisible, confessionnelle, autoritaire et censitaire",
        "Composée d’États souverains pouvant ignorer les lois nationales"
      ],
      "explanation": "L’article 1er de la Constitution qualifie la France de République indivisible, laïque, démocratique et sociale. Ces mots affirment l’unité de la République, la neutralité religieuse de l’État, la souveraineté du peuple et la solidarité.",
      "hook": "Article 1er : indivisible, laïque, démocratique, sociale.",
      "wrongReasons": {
        "Fédérale, religieuse, monarchique et héréditaire": "La France est une République, non une monarchie héréditaire. Sa Constitution affirme l’indivisibilité et la laïcité.",
        "Indivisible, confessionnelle, autoritaire et censitaire": "L’État n’a pas de religion officielle et le pouvoir repose sur la démocratie ; le suffrage n’est pas réservé aux citoyens les plus riches.",
        "Composée d’États souverains pouvant ignorer les lois nationales": "Les collectivités territoriales disposent de compétences propres, mais elles ne sont pas des États souverains et doivent respecter le droit national."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-principles"
      ],
      "sourcePage": 1,
      "sourceRow": 20
    },
    {
      "id": "ON003",
      "theme": "principles",
      "concept": "laicite",
      "prompt": "Selon le principe de laïcité, que signifie la neutralité de l’État ?",
      "correct": "L’État ne privilégie aucune religion et traite chacun sans discrimination religieuse",
      "wrong": [
        "L’État interdit à toute personne d’avoir une religion",
        "L’État impose la religion de la majorité de la population",
        "Les agents publics peuvent favoriser les usagers de leur religion"
      ],
      "explanation": "La neutralité concerne l’État et les agents publics dans l’exercice de leurs fonctions. Elle garantit un traitement impartial des personnes, croyantes ou non. La laïcité protège aussi la liberté de conscience et le libre exercice des cultes dans les limites prévues par la loi.",
      "hook": "État neutre, conscience libre, usagers égaux.",
      "wrongReasons": {
        "L’État interdit à toute personne d’avoir une religion": "La laïcité protège la liberté de croire, de ne pas croire et de changer de religion ; elle n’interdit pas la religion.",
        "L’État impose la religion de la majorité de la population": "Aucune religion ne doit être imposée par l’État. La neutralité protège aussi les convictions minoritaires et l’absence de religion.",
        "Les agents publics peuvent favoriser les usagers de leur religion": "Les agents publics doivent servir les usagers de manière impartiale. Un favoritisme religieux viole leur obligation de neutralité."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-principles"
      ],
      "sourcePage": 1,
      "sourceRow": 24
    },
    {
      "id": "ON004",
      "theme": "institutions",
      "concept": "europe",
      "prompt": "Quel est le dernier État à avoir intégré l’Union Européenne en 2013 ?",
      "correct": "La Croatie",
      "wrong": [
        "La Slovénie",
        "La Roumanie",
        "Le Monténégro"
      ],
      "explanation": "La Croatie a rejoint l’Union européenne le 1er juillet 2013. La Slovénie est membre depuis 2004 et la Roumanie depuis 2007. Le Monténégro est un pays candidat, pas un État membre de l’Union européenne à la date de référence de cette préparation.",
      "hook": "2013 : entrée de la Croatie.",
      "wrongReasons": {
        "La Slovénie": "La Slovénie a rejoint l’Union européenne en 2004, neuf ans avant la Croatie.",
        "La Roumanie": "La Roumanie a rejoint l’Union européenne en 2007, avec la Bulgarie.",
        "Le Monténégro": "Le Monténégro n’a pas adhéré à l’Union européenne en 2013 ; il est un pays candidat."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-institutions"
      ],
      "sourcePage": 4,
      "sourceRow": 13
    },
    {
      "id": "ON005",
      "theme": "institutions",
      "concept": "europe",
      "prompt": "Les citoyens de l’Union européenne peuvent-ils voter aux élections locales dans un autre État de l’Union ?",
      "correct": "Oui, aux élections municipales de l’État membre où ils résident, sous les conditions prévues",
      "wrong": [
        "Non, ils ne peuvent jamais voter hors de leur État d’origine",
        "Oui, automatiquement à toutes les élections nationales du pays de résidence",
        "Seulement après avoir obtenu la nationalité du pays de résidence"
      ],
      "explanation": "Un citoyen de l’Union européenne peut voter aux élections municipales dans un autre État membre où il réside, dans les conditions prévues pour ce scrutin. En France, cela suppose notamment l’inscription sur la liste électorale complémentaire. Ce droit ne donne pas accès aux élections présidentielles ou législatives françaises.",
      "hook": "Citoyen de l’UE résident : municipales et européennes, pas tous les scrutins.",
      "wrongReasons": {
        "Non, ils ne peuvent jamais voter hors de leur État d’origine": "La citoyenneté européenne ouvre précisément un droit de vote aux élections municipales et européennes dans l’État membre de résidence.",
        "Oui, automatiquement à toutes les élections nationales du pays de résidence": "Ce droit ne s’étend pas à tous les scrutins nationaux et l’inscription électorale reste nécessaire.",
        "Seulement après avoir obtenu la nationalité du pays de résidence": "Pour les élections municipales concernées, être citoyen d’un autre État membre de l’Union européenne suffit avec les autres conditions ; la naturalisation n’est pas exigée."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-institutions"
      ],
      "sourcePage": 4,
      "sourceRow": 19
    },
    {
      "id": "ON006",
      "theme": "institutions",
      "concept": "europe",
      "prompt": "Quelle est la devise de l’Union Européenne ?",
      "correct": "Unie dans la diversité",
      "wrong": [
        "Liberté, Égalité, Fraternité",
        "L’union fait la force",
        "E pluribus unum"
      ],
      "explanation": "« Unie dans la diversité » est la devise de l’Union européenne depuis 2000. Elle souligne que les Européens s’unissent tout en conservant la diversité de leurs cultures, traditions et langues.",
      "hook": "Union européenne : Unie dans la diversité.",
      "wrongReasons": {
        "Liberté, Égalité, Fraternité": "C’est la devise de la République française, pas celle de l’Union européenne.",
        "L’union fait la force": "Cette devise est utilisée par plusieurs États, notamment la Belgique ; ce n’est pas la devise de l’Union européenne.",
        "E pluribus unum": "Cette formule latine est associée aux États-Unis ; la devise de l’Union européenne est « Unie dans la diversité »."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-institutions"
      ],
      "sourcePage": 4,
      "sourceRow": 24
    },
    {
      "id": "ON007",
      "theme": "rights",
      "concept": "civic-duties",
      "prompt": "Qui peut être appelé à faire partie d’un jury d’assises en France ?",
      "correct": "Un citoyen français inscrit sur les listes électorales, âgé de plus de 23 ans et remplissant les conditions légales",
      "wrong": [
        "Toute personne résidant en France, quelle que soit sa nationalité",
        "Seulement les magistrats professionnels",
        "Tout citoyen français dès l’âge de 18 ans, sans autre condition"
      ],
      "explanation": "Les jurés sont des citoyens tirés au sort à partir des listes électorales. Les conditions comprennent la nationalité française, l’âge requis, la capacité à lire et écrire en français et la jouissance des droits politiques, civils et de famille. Certaines incapacités, fonctions ou exclusions empêchent de siéger. Les jurés participent au jugement aux côtés des magistrats professionnels.",
      "hook": "Juré : citoyen français, âge requis, droits conservés.",
      "wrongReasons": {
        "Toute personne résidant en France, quelle que soit sa nationalité": "La résidence en France ne suffit pas : la nationalité française est une condition pour être juré d’assises.",
        "Seulement les magistrats professionnels": "Le jury d’assises est composé de citoyens. Les magistrats professionnels siègent avec eux, mais ne remplacent pas ce jury citoyen.",
        "Tout citoyen français dès l’âge de 18 ans, sans autre condition": "La majorité électorale à 18 ans ne suffit pas. Le jury d’assises a un âge minimal spécifique et d’autres conditions légales."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-rights",
        "official-jury-assises-conditions"
      ],
      "sourcePage": 6,
      "sourceRow": 7
    },
    {
      "id": "ON008",
      "theme": "history",
      "concept": "revolution-republic",
      "prompt": "Quel est l’objectif des lois scolaires de la IIIe République ?",
      "correct": "Rendre l’école primaire publique gratuite, l’instruction obligatoire et l’enseignement public laïque",
      "wrong": [
        "Réserver l’école primaire aux enfants des familles riches",
        "Rendre l’enseignement religieux obligatoire dans toutes les écoles publiques",
        "Confier toutes les écoles publiques aux autorités religieuses"
      ],
      "explanation": "Les lois scolaires de Jules Ferry de 1881 et 1882 installent la gratuité de l’école primaire publique, l’instruction obligatoire et la laïcité de l’enseignement public. Elles contribuent à l’accès des enfants à une instruction commune. L’obligation concerne l’instruction, ce qui ne signifie pas que toute scolarité privée est interdite.",
      "hook": "Lois Ferry : gratuite, obligatoire, laïque.",
      "wrongReasons": {
        "Réserver l’école primaire aux enfants des familles riches": "La gratuité vise à élargir l’accès à l’école publique, indépendamment de la fortune familiale.",
        "Rendre l’enseignement religieux obligatoire dans toutes les écoles publiques": "Les lois scolaires établissent au contraire la laïcité de l’enseignement public.",
        "Confier toutes les écoles publiques aux autorités religieuses": "L’école publique relève de l’autorité publique ; la laïcisation réduit la place institutionnelle des autorités religieuses dans cet enseignement."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-history"
      ],
      "sourcePage": 7,
      "sourceRow": 3
    },
    {
      "id": "ON009",
      "theme": "history",
      "concept": "revolution-republic",
      "prompt": "Pourquoi l’année 1958 est importante pour la France ?",
      "correct": "Elle marque l’adoption de la Constitution et la naissance de la Ve République",
      "wrong": [
        "Les femmes obtiennent pour la première fois le droit de vote",
        "La peine de mort est abolie",
        "L’Union européenne est fondée par le traité de Maastricht"
      ],
      "explanation": "La Constitution de la Ve République est approuvée par référendum puis promulguée le 4 octobre 1958. Elle remplace les institutions de la IVe République et fonde le régime constitutionnel actuel.",
      "hook": "1958 : Constitution de la Ve République.",
      "wrongReasons": {
        "Les femmes obtiennent pour la première fois le droit de vote": "Les Françaises obtiennent le droit de vote et d’éligibilité en 1944, et votent pour la première fois en 1945.",
        "La peine de mort est abolie": "La peine de mort est abolie en France en 1981, sous la présidence de François Mitterrand.",
        "L’Union européenne est fondée par le traité de Maastricht": "Le traité de Maastricht est signé en 1992 et entre en vigueur en 1993 ; il ne date pas de 1958."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-history"
      ],
      "sourcePage": 7,
      "sourceRow": 5
    },
    {
      "id": "ON010",
      "theme": "history",
      "concept": "postwar-europe",
      "prompt": "Simone Veil est une figure importante de l’histoire française. Elle a notamment :",
      "correct": "Porté la loi de 1975 autorisant l’interruption volontaire de grossesse (IVG)",
      "wrong": [
        "Écrit Le Deuxième Sexe",
        "Composé La Marseillaise",
        "Fondé la Ve République en 1958"
      ],
      "explanation": "Ministre de la Santé, Simone Veil défend la loi de 1975 qui autorise l’IVG dans les conditions prévues par la loi. Elle devient aussi, en 1979, la première présidente du Parlement européen élu au suffrage universel direct. Il ne faut pas la confondre avec Simone de Beauvoir.",
      "hook": "Simone Veil : loi sur l’IVG, 1975.",
      "wrongReasons": {
        "Écrit Le Deuxième Sexe": "Le Deuxième Sexe est une œuvre de Simone de Beauvoir, publiée en 1949.",
        "Composé La Marseillaise": "La Marseillaise a été composée par Claude Joseph Rouget de Lisle en 1792.",
        "Fondé la Ve République en 1958": "La naissance de la Ve République est associée à Charles de Gaulle et à la Constitution de 1958, pas à Simone Veil."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-history"
      ],
      "sourcePage": 7,
      "sourceRow": 7
    },
    {
      "id": "ON011",
      "theme": "history",
      "concept": "revolution-republic",
      "prompt": "Qui a rendu l’école gratuite, laïque et obligatoire ?",
      "correct": "Jules Ferry, avec les lois scolaires de 1881 et 1882",
      "wrong": [
        "Napoléon Ier, avec le Code civil de 1804",
        "Jean Moulin, pendant la Résistance",
        "Victor Hugo, en publiant Les Misérables"
      ],
      "explanation": "Jules Ferry est la figure politique associée aux lois de 1881 et 1882 : la première établit la gratuité de l’école primaire publique ; la seconde rend l’instruction obligatoire et l’enseignement public laïque.",
      "hook": "Jules Ferry : les lois scolaires de 1881–1882.",
      "wrongReasons": {
        "Napoléon Ier, avec le Code civil de 1804": "Le Code civil organise le droit civil. La gratuité, l’obligation et la laïcité des lois scolaires évoquées sont celles de la IIIe République, en 1881 et 1882.",
        "Jean Moulin, pendant la Résistance": "Jean Moulin est une grande figure de la Résistance pendant la Seconde Guerre mondiale, plusieurs décennies après les lois Ferry.",
        "Victor Hugo, en publiant Les Misérables": "Victor Hugo est un écrivain engagé, mais les lois scolaires sont associées à l’action de Jules Ferry, pas à la publication d’un roman."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-history"
      ],
      "sourcePage": 7,
      "sourceRow": 17
    },
    {
      "id": "ON012",
      "theme": "history",
      "concept": "arts-culture",
      "prompt": "Quelle œuvre a été écrite par Victor Hugo ?",
      "correct": "Les Misérables",
      "wrong": [
        "L’Étranger",
        "Madame Bovary",
        "Le Petit Prince"
      ],
      "explanation": "Victor Hugo est l’auteur des Misérables, publié en 1862, et de Notre-Dame de Paris, publié en 1831. Il est l’un des grands écrivains du XIXe siècle.",
      "hook": "Victor Hugo : Les Misérables et Notre-Dame de Paris.",
      "wrongReasons": {
        "L’Étranger": "L’Étranger est un roman d’Albert Camus, publié en 1942.",
        "Madame Bovary": "Madame Bovary est un roman de Gustave Flaubert, publié en 1857.",
        "Le Petit Prince": "Le Petit Prince est une œuvre d’Antoine de Saint-Exupéry, publiée en 1943."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-history"
      ],
      "sourcePage": 8,
      "sourceRow": 6
    },
    {
      "id": "ON013",
      "theme": "history",
      "concept": "geography",
      "prompt": "Quelle mer se situe entre la France et l’Angleterre ?",
      "correct": "La Manche",
      "wrong": [
        "La mer Méditerranée",
        "La mer Baltique",
        "La mer Noire"
      ],
      "explanation": "La Manche sépare le nord-ouest de la France du sud de l’Angleterre. Le détroit du Pas-de-Calais est sa partie la plus étroite et la relie à la mer du Nord.",
      "hook": "Entre la France et l’Angleterre : la Manche.",
      "wrongReasons": {
        "La mer Méditerranée": "La Méditerranée borde le sud de la France ; elle ne sépare pas la France de l’Angleterre.",
        "La mer Baltique": "La Baltique se trouve au nord-est de l’Europe, près de pays comme la Suède et la Pologne.",
        "La mer Noire": "La mer Noire se situe au sud-est de l’Europe ; elle ne borde ni la France ni l’Angleterre."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-history"
      ],
      "sourcePage": 9,
      "sourceRow": 10
    },
    {
      "id": "ON014",
      "theme": "history",
      "concept": "geography",
      "prompt": "Quelle chaîne de montagnes est située entre la France et l’Espagne ?",
      "correct": "Les Pyrénées",
      "wrong": [
        "Les Alpes",
        "Le Jura",
        "Les Vosges"
      ],
      "explanation": "Les Pyrénées forment une chaîne de montagnes entre la France et l’Espagne, de l’Atlantique à la Méditerranée. La principauté d’Andorre se trouve dans cette chaîne.",
      "hook": "France–Espagne : Pyrénées ; France–Italie : Alpes.",
      "wrongReasons": {
        "Les Alpes": "Les Alpes se trouvent notamment entre la France et l’Italie et s’étendent aussi vers la Suisse et d’autres pays ; ce n’est pas la chaîne frontalière franco-espagnole.",
        "Le Jura": "Le Jura se situe principalement le long de la frontière entre la France et la Suisse.",
        "Les Vosges": "Les Vosges se trouvent dans le nord-est de la France et ne forment pas la frontière avec l’Espagne."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-history"
      ],
      "sourcePage": 9,
      "sourceRow": 16
    },
    {
      "id": "ON015",
      "theme": "society",
      "concept": "health-emergency",
      "prompt": "Qu’est-ce que le principe de confidentialité dans le domaine de la santé ?",
      "correct": "Les informations de santé d’un patient sont protégées et ne peuvent pas être librement divulguées",
      "wrong": [
        "Les soignants doivent publier les diagnostics de tous leurs patients",
        "L’employeur a automatiquement accès au dossier médical complet de chaque salarié",
        "Les proches doivent toujours être informés de tout, même contre la volonté du patient"
      ],
      "explanation": "La confidentialité protège la vie privée et les informations de santé du patient. Les professionnels sont tenus au secret professionnel. Le partage d’informations au sein d’une équipe de soins et les éventuelles dérogations sont encadrés par la loi ; les informations ne peuvent pas être diffusées librement à l’employeur ou au public.",
      "hook": "Santé : informations protégées, partage encadré.",
      "wrongReasons": {
        "Les soignants doivent publier les diagnostics de tous leurs patients": "Un diagnostic relève d’informations personnelles protégées par le secret professionnel ; il ne doit pas être rendu public.",
        "L’employeur a automatiquement accès au dossier médical complet de chaque salarié": "L’employeur n’a pas un droit d’accès automatique au dossier médical. La santé du salarié relève de sa vie privée et du secret médical.",
        "Les proches doivent toujours être informés de tout, même contre la volonté du patient": "Le respect du secret et des choix du patient s’impose aussi vis-à-vis des proches, sous réserve des exceptions légalement prévues."
      },
      "type": "official",
      "official": true,
      "sourceIds": [
        "official-bank-2026-society"
      ],
      "sourcePage": 10,
      "sourceRow": 16
    }
  ]
});
}());

