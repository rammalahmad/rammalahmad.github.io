/* French display layer for the complete exam data pack. */
(function () {
  "use strict";

  const DATA = window.CIVIQUE_DATA;
  const QUESTIONS_FR = {
  "O001": {
    "explanation": "L'ouverture continue : « Le jour de gloire est arrivé ». Les autres phrases apparaissent plus tard dans l'hymne.",
    "hook": "Allons enfants → le jour de gloire"
  },
  "O002": {
    "explanation": "Les questions de recrutement doivent avoir un lien direct et nécessaire avec l'emploi ou l'évaluation des capacités professionnelles. Les questions personnelles discriminatoires ne sont pas légitimes.",
    "hook": "Entretien d'embauche = faits liés au travail"
  },
  "O003": {
    "explanation": "Les personnes fiscales doivent déposer la déclaration annuelle de revenus requise, y compris lorsque l'impôt a été retenu à la source.",
    "hook": "La retenue ne remplace pas la déclaration"
  },
  "O004": {
    "explanation": "Les impôts mettent en commun les ressources pour financer les services publics et les dépenses collectives. Leur allocation est décidée par les budgets publics et non par un choix individuel.",
    "hook": "Impôts → services publics partagés"
  },
  "O005": {
    "explanation": "La liberté d'association de 1901 permet aux individus de créer ou d'adhérer à des associations à des fins licites ; c'est une liberté fondamentale.",
    "hook": "1901 = association"
  },
  "O006": {
    "explanation": "La loi française s'applique en ligne. La liberté d'expression ne protège pas les menaces, les insultes publiques, la diffamation ou l'incitation à la haine.",
    "hook": "En ligne ≠ hors la loi"
  },
  "O007": {
    "explanation": "Marianne est la figure féminine allégorique représentant la République française.",
    "hook": "Marianne = République"
  },
  "O008": {
    "explanation": "Marianne personnifie la République ; la fleur de lys et la couronne évoquent la monarchie, tandis que l'aigle impérial évoque l'Empire.",
    "hook": "Buste dans chaque mairie"
  },
  "O009": {
    "explanation": "« Liberté, Égalité, Fraternité » apparaît sur de nombreux édifices publics et documents officiels partout en France.",
    "hook": "Regardez une façade de mairie"
  },
  "O010": {
    "explanation": "La Constitution identifie la langue française, le drapeau tricolore, La Marseillaise et la devise républicaine ; Marianne et le 14 juillet sont aussi des symboles républicains centraux.",
    "hook": "Drapeau + hymne + devise"
  },
  "O011": {
    "explanation": "La profanation publique du drapeau tricolore dans les circonstances prévues par la loi peut être punie. La liberté d'expression a des limites légales.",
    "hook": "L’outrage public au drapeau peut constituer une infraction"
  },
  "O012": {
    "explanation": "Les ordonnances instituant le système français de Sécurité sociale datent de 1945, après la Libération.",
    "hook": "1945 = Sécurité sociale"
  },
  "O013": {
    "explanation": "La fête nationale du 14 juillet évoque la prise de la Bastille en 1789 et historiquement la Fête de la Fédération en 1790.",
    "hook": "14 juillet → Bastille"
  },
  "O014": {
    "explanation": "Le bonnet phrygien est un symbole révolutionnaire de liberté et apparaît sur les représentations de Marianne.",
    "hook": "La casquette liberty rouge de Marianne"
  },
  "O015": {
    "explanation": "Le coq gaulois est un emblème français très utilisé et apparaît sur les maillots sportifs nationaux.",
    "hook": "Les Bleus portent le coq"
  },
  "O016": {
    "explanation": "La devise républicaine est « Liberté, Égalité, Fraternité » et figure sur les édifices publics.",
    "hook": "L-E-F, dans cet ordre"
  },
  "O017": {
    "explanation": "Les personnes peuvent constituer et adhérer librement à des associations, à condition que leur objet et leur activité respectent la loi.",
    "hook": "Créer ou adhérer – finalité licite"
  },
  "O018": {
    "explanation": "La liberté républicaine s’arrête là où commence le mal causé à autrui ; elle est protégée et encadrée par la loi.",
    "hook": "Liberté + respect d'autrui"
  },
  "O019": {
    "explanation": "Marianne apparaît couramment sur les timbres-poste français et sur l'imagerie républicaine officielle.",
    "hook": "Marianne sur les timbres"
  },
  "O020": {
    "explanation": "L’égalité est une égalité juridique et civique, et non une richesse, des croyances ou des choix de vie identiques.",
    "hook": "L'égalité devant la loi"
  },
  "O021": {
    "explanation": "La liberté de conscience inclut le droit de croire, de ne pas croire et de changer de religion.",
    "hook": "Conscience = choisir ou changer"
  },
  "O022": {
    "explanation": "Contrairement aux agents publics, les usagers n'ont pas d'obligation générale de neutralité, mais doivent respecter l'ordre public et le fonctionnement normal du service.",
    "hook": "Agent neutre ; utilisateur respectueux"
  },
  "O023": {
    "explanation": "Le système de 1905 contient des exceptions définies, notamment l'entretien des édifices religieux publics et certains besoins d'aumônerie ; La France n'a pas de religion d'État.",
    "hook": "L’entretien du patrimoine public est possible"
  },
  "O024": {
    "explanation": "La loi fondamentale de séparation a été promulguée le 9 décembre 1905.",
    "hook": "1905 = laïcité"
  },
  "O025": {
    "explanation": "La loi sépare les organisations religieuses et l'État tout en garantissant la liberté de conscience et de culte sous réserve de l'ordre public.",
    "hook": "Liberté de conscience + pas de religion d'État"
  },
  "O026": {
    "explanation": "La laïcité protège les croyants et les non-croyants et exige la neutralité de l'État.",
    "hook": "Croyez, ne croyez pas, changez"
  },
  "O027": {
    "explanation": "La Journée de la Laïcité est le 9 décembre, jour anniversaire de la loi de séparation de 1905.",
    "hook": "9 décembre 1905"
  },
  "O028": {
    "explanation": "Les élèves des écoles publiques peuvent porter des signes religieux discrets, mais les signes visibles sont interdits par la loi de 2004.",
    "hook": "Discret autorisé ; visible interdit"
  },
  "O029": {
    "explanation": "L'antisémitisme désigne l'hostilité, la haine ou les préjugés dirigés contre le peuple juif.",
    "hook": "Haine anti-juive = antisémitisme"
  },
  "O030": {
    "explanation": "La loi de 1905 sur la séparation des Églises et de l'État est la référence juridique centrale de la laïcité française.",
    "hook": "Texte fondateur de la laïcité : 1905"
  },
  "O031": {
    "explanation": "L'État et les services publics doivent être neutres ; les individus conservent leur liberté de conscience.",
    "hook": "Les institutions publiques sont neutres"
  },
  "O032": {
    "explanation": "La laïcité allie neutralité de l'État, séparation et liberté de conscience égale.",
    "hook": "État neutre, conscience libre"
  },
  "O033": {
    "explanation": "La charte explique comment la laïcité, la neutralité, l'égalité et la liberté de conscience s'appliquent à l'école.",
    "hook": "La charte enseigne les règles"
  },
  "O034": {
    "explanation": "Tout agent public doit exercer ses fonctions de manière neutre et traiter les utilisateurs de manière égale.",
    "hook": "Tous les agents publics"
  },
  "O035": {
    "explanation": "Un athée ne croit pas en Dieu. Un agnostique considère l'existence d'un dieu comme inconnue ou inconnaissable.",
    "hook": "Athée = ne croit pas"
  },
  "O036": {
    "explanation": "L'article 8 de la Constitution donne au Président le pouvoir de nommer le Premier ministre.",
    "hook": "Le président nomme le Premier ministre"
  },
  "O037": {
    "explanation": "Un candidat doit être français, répondre aux règles d'éligibilité et obtenir 500 mentions d'élus valides.",
    "hook": "Français + éligible + 500 mentions"
  },
  "O038": {
    "explanation": "L'article 3 stipule que la souveraineté nationale appartient au peuple, exercée par le biais de représentants et de référendums.",
    "hook": "La souveraineté appartient au peuple"
  },
  "O039": {
    "explanation": "Les électeurs municipaux élisent le conseil municipal ; ce conseil élit ensuite le maire.",
    "hook": "Les électeurs élisent leurs conseillers"
  },
  "O040": {
    "explanation": "Un électeur doit être inscrit sur une liste électorale. De nombreux jeunes citoyens sont inscrits automatiquement à 18 ans après les formalités du recensement.",
    "hook": "Pas de rôle, pas de scrutin"
  },
  "O041": {
    "explanation": "Le vote présidentiel est réservé aux citoyens français éligibles âgés de 18 ans ou plus et inscrits sur les listes électorales.",
    "hook": "Français + 18 + droits + rôle"
  },
  "O042": {
    "explanation": "Les citoyens français et européens éligibles peuvent se présenter au conseil municipal, sous réserve des règles d'âge, d'élection et d'incompatibilité ; Les citoyens de l’UE ne peuvent pas devenir maire ou maire adjoint.",
    "hook": "Le conseil municipal peut inclure des citoyens européens éligibles"
  },
  "O043": {
    "explanation": "Le conseil municipal élit le maire. Des préfets, procureurs et recteurs sont nommés.",
    "hook": "Maire élu ; préfet nommé"
  },
  "O044": {
    "explanation": "Le maire exécute les décisions communales et exerce également certaines fonctions de l'État, notamment celles d'état civil et de police administrative.",
    "hook": "Commune + état civil + police locale"
  },
  "O045": {
    "explanation": "La présidence est ouverte indifféremment aux Français éligibles et aux hommes remplissant les conditions légales de candidature.",
    "hook": "Aucune restriction de profession ou de sexe"
  },
  "O046": {
    "explanation": "L'inscription électorale peut être complétée en personne à la mairie avec les documents requis.",
    "hook": "Pas d'internet → mairie"
  },
  "O047": {
    "explanation": "L'âge légal pour voter en France est de 18 ans.",
    "hook": "18 ans = majorité et âge de voter"
  },
  "O048": {
    "explanation": "Contrairement à certains pays, la France n'impose pas le vote obligatoire aux élections politiques.",
    "hook": "Voter est un droit et non une obligation légale"
  },
  "O049": {
    "explanation": "Les lois s'appliquent à tout le monde. Une loi peut être contestée par le biais de procédures juridiques et démocratiques, et non simplement ignorée.",
    "hook": "En désaccord légalement ; n'ignore pas la loi"
  },
  "O050": {
    "explanation": "Les citoyens élisent directement les députés dans les circonscriptions législatives.",
    "hook": "Députés = élection directe"
  },
  "O051": {
    "explanation": "Le Parlement - l'Assemblée nationale et le Sénat - débat et vote les lois.",
    "hook": "Le Parlement vote des lois"
  },
  "O052": {
    "explanation": "La séparation des fonctions exécutives, législatives et judiciaires protège la liberté et empêche la concentration du pouvoir.",
    "hook": "ELJ : exécutif, législatif, judiciaire"
  },
  "O053": {
    "explanation": "L’État de droit signifie que le pouvoir public est légalement limité, que les tribunaux sont indépendants et que les droits peuvent être protégés.",
    "hook": "Personne n'est au dessus des lois"
  },
  "O054": {
    "explanation": "Les conseillers municipaux et le maire ont normalement un mandat de six ans.",
    "hook": "Municipales = 6"
  },
  "O055": {
    "explanation": "Les élections législatives choisissent les députés qui siègent à l'Assemblée nationale.",
    "hook": "Législatives → députés"
  },
  "O056": {
    "explanation": "Le mandat présidentiel est un quinquennat de cinq ans.",
    "hook": "Président = 5"
  },
  "O057": {
    "explanation": "L'Assemblée nationale est normalement élue pour cinq ans, sous réserve d'une éventuelle dissolution.",
    "hook": "Députés = 5"
  },
  "O058": {
    "explanation": "Les sénateurs ont un mandat de six ans, la moitié du Sénat étant renouvelée tous les trois ans.",
    "hook": "Sénateurs = 6"
  },
  "O059": {
    "explanation": "L'article 21 donne au Premier ministre la responsabilité de diriger l'action du gouvernement.",
    "hook": "Le Premier ministre ordonne au gouvernement"
  },
  "O060": {
    "explanation": "Le pluralisme politique et la liberté d’association protègent l’adhésion légale à un parti politique.",
    "hook": "Le pluralisme politique est protégé"
  },
  "O061": {
    "explanation": "La police enquête et les procureurs poursuivent les dossiers, mais un tribunal détermine la culpabilité et impose une sanction pénale.",
    "hook": "Le tribunal impose une sanction"
  },
  "O062": {
    "explanation": "Les départements sont responsables des collèges publics, y compris des bâtiments et de certaines opérations.",
    "hook": "Collège → département"
  },
  "O063": {
    "explanation": "Les communes gèrent les locaux publics des écoles maternelles et primaires ainsi que l'organisation locale.",
    "hook": "École → commune"
  },
  "O064": {
    "explanation": "Après les élections municipales, le conseil municipal élit le maire parmi ses membres.",
    "hook": "Le conseil élit le maire"
  },
  "O065": {
    "explanation": "Les régions organisent les transports régionaux, notamment les services ferroviaires TER et de nombreux réseaux interurbains.",
    "hook": "TER → région"
  },
  "O066": {
    "explanation": "L'article 89 autorise une révision constitutionnelle après une approbation parlementaire identique, suivie d'un référendum ou, pour un projet de loi du gouvernement, d'une approbation des trois cinquièmes du Congrès.",
    "hook": "Révision : référendum ou Congrès 3/5"
  },
  "O067": {
    "explanation": "Le Président du Sénat exerce temporairement les fonctions présidentielles si le poste devient vacant.",
    "hook": "Par intérim → Président du Sénat"
  },
  "O068": {
    "explanation": "Le Conseil constitutionnel contrôle la constitutionnalité et supervise les élections présidentielles, les référendums et le contentieux des élections législatives.",
    "hook": "Gardien des règles constitutionnelles"
  },
  "O069": {
    "explanation": "Les candidats à la présidentielle ont besoin de 500 mentions valides, réparties géographiquement conformément à la loi électorale.",
    "hook": "500 parrainages"
  },
  "O070": {
    "explanation": "La France compte 101 départements : 96 en métropole et cinq en outre-mer.",
    "hook": "96 + 5 = 101"
  },
  "O071": {
    "explanation": "Les principaux niveaux de collectivités territoriales sont les communes, les départements et les régions.",
    "hook": "Commune → département → région"
  },
  "O072": {
    "explanation": "Le préfet est désigné pour représenter l'État national et coordonner les services de l'État dans le département.",
    "hook": "Le préfet représente l'État"
  },
  "O073": {
    "explanation": "Le Président est chef de l'Etat, garant de l'indépendance nationale et de la continuité constitutionnelle, et nomme le Premier ministre.",
    "hook": "Président = chef de l'État"
  },
  "O074": {
    "explanation": "Le Premier ministre dirige l'action gouvernementale, veille à la mise en œuvre des lois et exerce un pouvoir réglementaire soumis à la Constitution.",
    "hook": "Le Premier ministre dirige le gouvernement"
  },
  "O075": {
    "explanation": "Le Défenseur des droits est une autorité constitutionnelle indépendante qui protège notamment les droits des usagers des services publics, lutte contre les discriminations et veille aux droits des enfants ainsi qu’à la déontologie des forces de sécurité.",
    "hook": "Protecteur indépendant des droits"
  },
  "O076": {
    "explanation": "Le Traité de Maastricht signé en 1992 a introduit la citoyenneté de l'Union européenne.",
    "hook": "Citoyenneté européenne = Maastricht 1992"
  },
  "O077": {
    "explanation": "L’hymne européen reprend la mélodie de l’Ode à la joie de Beethoven tirée de la Neuvième Symphonie.",
    "hook": "Hymne européen → Beethoven"
  },
  "O078": {
    "explanation": "La Journée de l'Europe est célébrée le 9 mai, en souvenir de la Déclaration Schuman de 1950.",
    "hook": "9 mai = Europe"
  },
  "O079": {
    "explanation": "La Banque centrale européenne a son siège à Francfort, en Allemagne.",
    "hook": "BCE → Francfort"
  },
  "O080": {
    "explanation": "Le siège principal de la Commission européenne est à Bruxelles.",
    "hook": "Commission → Bruxelles"
  },
  "O081": {
    "explanation": "Les membres du Parlement européen représentent les citoyens de l'UE.",
    "hook": "Parlement → Députés"
  },
  "O082": {
    "explanation": "L’UE compte 27 États membres depuis le retrait du Royaume-Uni.",
    "hook": "UE = 27"
  },
  "O083": {
    "explanation": "Le Traité de Maastricht a été signé le 7 février 1992 et est entré en vigueur en 1993.",
    "hook": "Maastricht signé 1992"
  },
  "O084": {
    "explanation": "Les traités de Rome de 1957 ont créé la Communauté économique européenne et constituent des traités fondamentaux pour l’intégration européenne.",
    "hook": "Rome 1957 → Construction européenne"
  },
  "O085": {
    "explanation": "Le Royaume-Uni a officiellement quitté l'UE le 31 janvier 2020.",
    "hook": "Brexit → Royaume-Uni"
  },
  "O086": {
    "explanation": "L’hymne européen est le thème instrumental de l’Ode à la joie de la Neuvième Symphonie de Beethoven.",
    "hook": "UE → Ode à la joie"
  },
  "O087": {
    "explanation": "Les 12 étoiles symbolisent l'unité et la complétude ; leur nombre ne change pas avec l'adhésion à l'UE.",
    "hook": "12 étoiles, toujours"
  },
  "O088": {
    "explanation": "Les citoyens de l'UE élisent directement les membres du Parlement européen tous les cinq ans.",
    "hook": "Les citoyens élisent leurs députés européens"
  },
  "O089": {
    "explanation": "Strasbourg est le siège officiel du Parlement européen ; elle travaille également à Bruxelles et dispose de services au Luxembourg.",
    "hook": "Siège du Parlement → Strasbourg"
  },
  "O090": {
    "explanation": "Le droit de grève permet aux travailleurs d'arrêter collectivement le travail pour soutenir des revendications professionnelles, dans le cadre des règles légales et des éventuelles limites de continuité de service.",
    "hook": "Grève = action professionnelle collective"
  },
  "O091": {
    "explanation": "Les droits ne peuvent être restreints que sur une base légale pour des objectifs légitimes tels que l’ordre public, et les restrictions doivent être nécessaires et proportionnées.",
    "hook": "Légal + nécessaire + proportionné"
  },
  "O092": {
    "explanation": "L'article 1 de la Déclaration de 1789 stipule que les hommes naissent et restent libres et égaux en droits.",
    "hook": "Naître et rester libre et égal"
  },
  "O093": {
    "explanation": "La liberté est compatible avec une liberté égale pour les autres ; la loi définit les limites nécessaires pour prévenir les dommages.",
    "hook": "Ma liberté s'arrête au détriment des autres"
  },
  "O094": {
    "explanation": "L'article 1 garantit également l'égalité devant la loi sans distinction et respecte toutes les croyances.",
    "hook": "I-L-D-S"
  },
  "O095": {
    "explanation": "Une presse libre soutient une information plurielle et un débat démocratique, tout en restant soumise à des lois telles que la diffamation et la protection de la vie privée.",
    "hook": "Presse libre, responsabilité juridique"
  },
  "O096": {
    "explanation": "La liberté de circulation protège les déplacements et la résidence légaux ; il n'annule pas les règles de circulation, d'immigration ou de propriété.",
    "hook": "Déplacez-vous librement et légalement"
  },
  "O097": {
    "explanation": "La citoyenneté est un lien juridique et politique porteur de droits civils et politiques et de devoirs civiques.",
    "hook": "Citoyenneté = appartenance politique"
  },
  "O098": {
    "explanation": "Les droits fondamentaux protègent la dignité et la liberté et sont garantis par des règles constitutionnelles, européennes et internationales.",
    "hook": "Des droits essentiels pour chaque personne"
  },
  "O099": {
    "explanation": "Nul ne peut être détenu en dehors des cas et procédures prévus par la loi ; l'autorité judiciaire garantit la liberté individuelle.",
    "hook": "Pas de détention sans procédure légale"
  },
  "O100": {
    "explanation": "La Déclaration de 1789 est un texte constitutionnel fondamental sur la liberté, l’égalité, la souveraineté, le droit et la contribution civique.",
    "hook": "DDHC = 1789"
  },
  "O101": {
    "explanation": "C’est l’ouverture de l’article 1 de la Déclaration de 1789.",
    "hook": "Article 1, DDHC"
  },
  "O102": {
    "explanation": "La traite des êtres humains, l'esclavage, la torture et les traitements dégradants nient la dignité intrinsèque de la personne.",
    "hook": "Nul ne peut être traité comme un objet"
  },
  "O103": {
    "explanation": "La liberté d'expression protège les idées et les critiques, et non les infractions telles que les menaces, la diffamation ou l'incitation à la haine.",
    "hook": "Avis oui ; infraction non"
  },
  "O104": {
    "explanation": "Une personne détenue doit être informée de la mesure et de l'infraction présumée et peut bénéficier de l'assistance d'un avocat, d'un médecin et du droit de notification en vertu des règles de procédure.",
    "hook": "La garde s'accompagne de droits"
  },
  "O105": {
    "explanation": "La liberté de conscience protège la croyance religieuse, la non-croyance et le changement de croyance.",
    "hook": "La citoyenneté n'a pas de critère religieux"
  },
  "O106": {
    "explanation": "La loi française fixe à 15 ans le seuil de majorité numérique pour le consentement indépendant d’un mineur dans le cadre pertinent des données des réseaux sociaux.",
    "hook": "Majorité numérique = 15"
  },
  "O107": {
    "explanation": "Il est interdit de fumer dans les lieux publics/de travail fermés et, depuis 2025, dans d'autres espaces extérieurs destinés aux enfants. Une habitation privée n'est pas couverte par l'interdiction générale des lieux publics.",
    "hook": "Maison privée, pas d'espaces publics pour enfants"
  },
  "O108": {
    "explanation": "Conduire une moto nécessitant un permis sans le permis approprié est une infraction pénale.",
    "hook": "Pas de permis = infraction"
  },
  "O109": {
    "explanation": "La solidarité est à la base des impôts, de la protection sociale, de l'entraide et de l'assistance aux personnes vulnérables.",
    "hook": "Contribuer et aider"
  },
  "O110": {
    "explanation": "Nul ne peut contracter un nouveau mariage tant qu’un mariage antérieur est encore légalement en vigueur.",
    "hook": "Un conjoint légal à la fois"
  },
  "O111": {
    "explanation": "Le prélèvement à la source ne remplace généralement pas la déclaration annuelle d'impôt sur le revenu.",
    "hook": "Déclarer annuellement"
  },
  "O112": {
    "explanation": "Ne pas porter assistance à une personne en péril peut constituer une infraction. Une assistance en toute sécurité peut simplement signifier appeler rapidement les services d’urgence.",
    "hook": "Aidez-nous en toute sécurité ou appelez"
  },
  "O113": {
    "explanation": "Les citoyens éligibles sélectionnés pour un jury d'assises doivent y assister sauf excuse légitime.",
    "hook": "Service de juré = devoir civique"
  },
  "O114": {
    "explanation": "Il est interdit de vendre ou d'offrir de l'alcool à un mineur de moins de 18 ans.",
    "hook": "Ventes d'alcool : 18"
  },
  "O115": {
    "explanation": "Selon le comportement, une infraction au code de la route peut constituer une contravention ou une infraction plus grave.",
    "hook": "Le code de la route fait loi"
  },
  "O116": {
    "explanation": "Pour certains crimes et délits, un tribunal peut imposer à titre de peine supplémentaire la perte des droits civils, civiques et familiaux.",
    "hook": "Seulement un tribunal, là où la loi le permet"
  },
  "O117": {
    "explanation": "La carte nationale d'identité française est délivrée aux ressortissants français ; la résidence seule ne suffit pas.",
    "hook": "Carte d'identité française → Nationalité française"
  },
  "O118": {
    "explanation": "Les restrictions légales protègent les droits d'autrui et l'ordre public ; ils doivent eux-mêmes se conformer à la loi sur les droits.",
    "hook": "Pas de haine, de menaces ou de diffamation"
  },
  "O119": {
    "explanation": "La convocation devant jury d’assises est contraignante. Le tribunal examine les demandes formelles d’exemption ou d’incapacité légitime.",
    "hook": "Convocation → comparaître ou obtenir une excuse"
  },
  "O120": {
    "explanation": "À 18 ans, une personne atteint la majorité civile et exerce généralement ses droits civils de manière indépendante.",
    "hook": "Majorité civile = 18"
  },
  "O121": {
    "explanation": "Les citoyens ont des devoirs, notamment obéir à la loi, contribuer par le biais des impôts et participer aux obligations civiques lorsque cela est nécessaire.",
    "hook": "Les droits s'accompagnent de devoirs"
  },
  "O122": {
    "explanation": "Le droit pénal français classe les infractions par gravité : contraventions, délits, puis crimes.",
    "hook": "Le crime est le plus grave"
  },
  "O123": {
    "explanation": "La citoyenneté numérique allie participation, éducation aux médias, protection des données, sécurité et respect de la loi et des autres.",
    "hook": "Participation responsable en ligne"
  },
  "O124": {
    "explanation": "Le devoir de mémoire honore les victimes et préserve les enseignements des crimes et conflits passés.",
    "hook": "Se souvenir, honorer, transmettre"
  },
  "O125": {
    "explanation": "Une privation des droits civiques ordonnée par un tribunal affecte des droits tels que le vote et l'éligibilité pour la période indiquée ; elle ne supprime pas automatiquement la nationalité ou la vie civile ordinaire.",
    "hook": "Pas de vote ni de candidature pendant le bannissement"
  },
  "O126": {
    "explanation": "Le Code civil, également connu historiquement sous le nom de Code Napoléon, a été promulgué en 1804.",
    "hook": "Napoléon → Code civil"
  },
  "O127": {
    "explanation": "Charles de Gaulle est devenu le premier président de la Ve République en 1959. Plusieurs présidents ultérieurs satisfont également à la formulation générale.",
    "hook": "de Gaulle a fondé la Ve République"
  },
  "O128": {
    "explanation": "Le 14 juillet est la fête nationale, associée notamment à la prise de la Bastille en 1789.",
    "hook": "14 juillet = fête nationale"
  },
  "O129": {
    "explanation": "La France était l'un des six États fondateurs des premières Communautés européennes, avec l'Allemagne, l'Italie, la Belgique, les Pays-Bas et le Luxembourg.",
    "hook": "France = un des Six"
  },
  "O130": {
    "explanation": "Le débarquement allié du 6 juin 1944 a lieu sur les plages normandes.",
    "hook": "Jour J → Normandie"
  },
  "O131": {
    "explanation": "La plupart des rois de France ont été couronnés dans la cathédrale de Reims, lié au baptême de Clovis.",
    "hook": "Rois couronnés à Reims"
  },
  "O132": {
    "explanation": "Louis XVI est exécuté à Paris le 21 janvier 1793.",
    "hook": "Révolution → Louis XVI"
  },
  "O133": {
    "explanation": "Les États généraux, le serment du tennis et la prise de la Bastille marquent 1789.",
    "hook": "Révolution = 1789"
  },
  "O134": {
    "explanation": "Napoléon est proclamé et couronné empereur en 1804.",
    "hook": "Napoléon Empereur = 1804"
  },
  "O135": {
    "explanation": "Léon Gambetta fut une figure politique républicaine majeure, notamment à la naissance de la Troisième République.",
    "hook": "Gambetta = figure républicaine"
  },
  "O136": {
    "explanation": "De Gaulle diffusa son appel depuis Londres le 18 juin 1940 après l’effondrement militaire de la France.",
    "hook": "18 juin 1940"
  },
  "O137": {
    "explanation": "La Shoah est la persécution et le meurtre systématiques de six millions de Juifs pendant la Seconde Guerre mondiale.",
    "hook": "Shoah = génocide des Juifs d’Europe"
  },
  "O138": {
    "explanation": "Le Sénégal faisait partie de l’empire colonial français avant son indépendance en 1960.",
    "hook": "Le Sénégal était une colonie française"
  },
  "O139": {
    "explanation": "La réforme a été approuvée en 1962 ; la première élection présidentielle directe a eu lieu en 1965.",
    "hook": "Réforme de 1962 ; 1965, premier vote"
  },
  "O140": {
    "explanation": "Le Traité sur l'Union européenne a été signé à Maastricht en 1992 et est entré en vigueur en 1993.",
    "hook": "UE → Maastricht 1992"
  },
  "O141": {
    "explanation": "La Seconde Guerre mondiale éclate en Europe en 1939 et se termine en 1945.",
    "hook": "Seconde Guerre mondiale 1939-1945"
  },
  "O142": {
    "explanation": "L'armistice mettant fin aux combats sur le front occidental est signé le 11 novembre 1918.",
    "hook": "Première Guerre mondiale 1914-1918"
  },
  "O143": {
    "explanation": "La peine de mort a été abolie par la loi du 9 octobre 1981 sous le président Mitterrand, avec Robert Badinter comme ministre de la Justice.",
    "hook": "Mitterrand + Badinter + 1981"
  },
  "O144": {
    "explanation": "Le 8 mai commémore la fin de la Seconde Guerre mondiale en Europe en 1945.",
    "hook": "8 mai = victoire 1945"
  },
  "O145": {
    "explanation": "Les six pays fondateurs ont créé la CECA/CECA pour mutualiser la production de charbon et d'acier.",
    "hook": "1951 = CECA"
  },
  "O146": {
    "explanation": "Jean Moulin a unifié les principaux mouvements de Résistance au nom de de Gaulle et est mort après la torture en 1943.",
    "hook": "Résistance → Jean Moulin"
  },
  "O147": {
    "explanation": "Le 11 novembre commémore l'Armistice de 1918 et rend désormais hommage à tous ceux qui sont morts pour la France.",
    "hook": "11 novembre = 1918"
  },
  "O148": {
    "explanation": "La Seconde République abolit définitivement l'esclavage dans les colonies françaises par décret en 1848.",
    "hook": "Abolition définitive = 1848"
  },
  "O149": {
    "explanation": "Le gouvernement provisoire de la Deuxième République promulgue le décret de 1848 ; Victor Schœlcher a joué un rôle central.",
    "hook": "Schœlcher + 1848"
  },
  "O150": {
    "explanation": "La loi Jules Ferry du 16 juin 1881 rend l'enseignement primaire public gratuit ; des lois ultérieures l'ont rendu obligatoire et laïc.",
    "hook": "École primaire publique gratuite = 1881"
  },
  "O151": {
    "explanation": "L'ordonnance du 21 avril 1944 accorde aux Françaises le droit de vote et d'éligibilité ; ils ont voté pour la première fois en 1945.",
    "hook": "Vote des femmes = ordonnance de 1944"
  },
  "O152": {
    "explanation": "Les Nations Unies ont été fondées en 1945 pour maintenir la paix et la coopération internationales.",
    "hook": "1945 → ONU"
  },
  "O153": {
    "explanation": "L'euro est devenu la monnaie comptable en 1999 ; les billets et les pièces ont remplacé le franc dans la circulation quotidienne en 2002.",
    "hook": "Euros espèces = 2002"
  },
  "O154": {
    "explanation": "Les forces allemandes à Paris capitulent le 25 août 1944.",
    "hook": "Paris libéré le 25 août 1944"
  },
  "O155": {
    "explanation": "Nantes était le premier port de traite négrière de France au XVIIIe siècle ; d'autres ports étaient également impliqués.",
    "hook": "Traite négrière → Nantes"
  },
  "O156": {
    "explanation": "Voltaire a dénoncé l'esclavage, notamment à travers l'épisode de l'esclave du Suriname dans Candide ; d’autres penseurs des Lumières l’ont également critiqué.",
    "hook": "Voltaire, Candide, Suriname"
  },
  "O157": {
    "explanation": "Claude Monet était un des principaux peintres impressionnistes français.",
    "hook": "Monet = peintre français"
  },
  "O158": {
    "explanation": "Le pot-au-feu est un plat traditionnel français composé de viande et de légumes cuits dans un bouillon.",
    "hook": "Pot-au-feu = classique français"
  },
  "O159": {
    "explanation": "Marie Curie a été pionnière dans la recherche sur la radioactivité et a reçu le prix Nobel de physique et de chimie.",
    "hook": "Curie = science + deux Nobels"
  },
  "O160": {
    "explanation": "Delacroix a peint cette œuvre en 1830 en réponse à la Révolution de Juillet.",
    "hook": "Liberté → Delacroix"
  },
  "O161": {
    "explanation": "La Joconde de Léonard de Vinci est exposée au Louvre.",
    "hook": "Jocondé → Louvre"
  },
  "O162": {
    "explanation": "Louis XIV fit de Versailles la principale cour royale et le symbole de la monarchie absolue.",
    "hook": "Louis XIV → Versailles"
  },
  "O163": {
    "explanation": "Lascaux en Dordogne est célèbre pour ses peintures rupestres paléolithiques.",
    "hook": "Préhistoire → Lascaux"
  },
  "O164": {
    "explanation": "Monet a peint la grande série des Nymphéas inspirée de son jardin de Giverny.",
    "hook": "Nymphéas → Monet"
  },
  "O165": {
    "explanation": "Les Journées du Patrimoine ouvrent chaque mois de septembre de nombreux monuments publics et privés, souvent gratuitement.",
    "hook": "Septembre → Journées du Patrimoine"
  },
  "O166": {
    "explanation": "Le 1er mai est la fête du Travail et est associé en France au muguet.",
    "hook": "1er mai = Travail"
  },
  "O167": {
    "explanation": "Claude Joseph Rouget de Lisle écrit les paroles et la musique du futur hymne national en 1792.",
    "hook": "Rouget de Lisle → Marseillaise"
  },
  "O168": {
    "explanation": "La Tour Eiffel était l’entrée monumentale de l’Exposition universelle de 1889, année du centenaire de la Révolution.",
    "hook": "Eiffel → Exposition 1889"
  },
  "O169": {
    "explanation": "Les Alpes forment une grande partie de la frontière montagneuse entre la France et l'Italie ; Le Mont Blanc se situe dans cette chaîne.",
    "hook": "Frontière Italie → Alpes"
  },
  "O170": {
    "explanation": "Molière était le dramaturge et acteur du XVIIe siècle derrière Tartuffe, L'Avare et Le Malade imaginaire.",
    "hook": "Molière = théâtre"
  },
  "O171": {
    "explanation": "Baudelaire était un poète du XIXe siècle surtout connu pour Les Fleurs du mal.",
    "hook": "Baudelaire = poésie"
  },
  "O172": {
    "explanation": "George Sand était le pseudonyme de la romancière française Amantine Aurore Dupin.",
    "hook": "George Sand = écrivain"
  },
  "O173": {
    "explanation": "Simone de Beauvoir a écrit Le Deuxième Sexe et fut une intellectuelle majeure du XXe siècle.",
    "hook": "Beauvoir = écrivain, philosophe, féminisme"
  },
  "O174": {
    "explanation": "Camus a écrit L'Étranger et La Peste et a reçu le prix Nobel de littérature en 1957.",
    "hook": "Camus = écrivain, Nobel"
  },
  "O175": {
    "explanation": "L'auteur des Mémoires d'Hadrien est devenue la première femme élue à l'Académie française en 1980.",
    "hook": "Yourcenar = écrivain + Académie premier"
  },
  "O176": {
    "explanation": "Cézanne était un peintre postimpressionniste français majeur associé à Aix-en-Provence.",
    "hook": "Cézanne = peinture"
  },
  "O177": {
    "explanation": "Rodin a créé des sculptures célèbres dont Le Penseur et Le Baiser.",
    "hook": "Rodin = sculpture"
  },
  "O178": {
    "explanation": "Debussy était un compositeur français influent dont les œuvres incluent La Mer.",
    "hook": "Debussy = compositeur"
  },
  "O179": {
    "explanation": "Pierre-Auguste Renoir était l'un des principaux peintres impressionnistes français.",
    "hook": "Renoir = impressionniste"
  },
  "O180": {
    "explanation": "Le Louvre se trouve au centre de Paris et est l’un des plus grands musées du monde.",
    "hook": "Paris → Musée du Louvre"
  },
  "O181": {
    "explanation": "Le Mont-Saint-Michel s'élève sur une île à marée au large des côtes normandes.",
    "hook": "Île de Normandie → Mont-Saint-Michel"
  },
  "O182": {
    "explanation": "Lyon est l’une des plus grandes régions métropolitaines de France.",
    "hook": "Lyon = grande métropole"
  },
  "O183": {
    "explanation": "La Guadeloupe et la Martinique sont les principales îles des Antilles françaises.",
    "hook": "Antilles → Guadeloupe/Martinique"
  },
  "O184": {
    "explanation": "La Corse est une collectivité territoriale française du bassin méditerranéen.",
    "hook": "Corse = île française"
  },
  "O185": {
    "explanation": "Le Mont Blanc dans les Alpes est le plus haut sommet de France.",
    "hook": "Plus haut → Mont Blanc"
  },
  "O186": {
    "explanation": "La Réunion est un département français d'outre-mer et une région à l'est de Madagascar dans l'océan Indien.",
    "hook": "Océan Indien → Réunion"
  },
  "O187": {
    "explanation": "La Guyane française est un département français d'outre-mer d'Amérique du Sud limitrophe du Brésil et du Suriname.",
    "hook": "Frontière Brésil → Guyane"
  },
  "O188": {
    "explanation": "Ariane décolle depuis le Centre Spatial Guyanais de Kourou en Guyane française.",
    "hook": "Ariane → Kourou"
  },
  "O189": {
    "explanation": "La France métropolitaine est bordée par l'Atlantique, la Manche, la Mer du Nord et la Méditerranée.",
    "hook": "L'Atlantique borde la France métropolitaine"
  },
  "O190": {
    "explanation": "La Réunion est à la fois un département et une région d'outre-mer de la France.",
    "hook": "Réunion = DROM"
  },
  "O191": {
    "explanation": "La France d'outre-mer comprend les territoires sous souveraineté française hors d'Europe métropolitaine, aux statuts constitutionnels variés.",
    "hook": "Territoires français hors Europe"
  },
  "O192": {
    "explanation": "La population totale de la France était d’environ 68,6 millions d’habitants début 2025.",
    "hook": "2025 ≈ 68,6 millions"
  },
  "O193": {
    "explanation": "Marseille-Fos est le premier port français en tonnage total de marchandises ; Le Havre est particulièrement important pour les conteneurs.",
    "hook": "Port de tonnage principal → Marseille-Fos"
  },
  "O194": {
    "explanation": "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions ; La France en compte 18, y compris les régions d'outre-mer.",
    "hook": "13 régions métropolitaines"
  },
  "O195": {
    "explanation": "La Réunion se situe dans l'océan Indien, à l'est de Madagascar, au sud-est de l'Afrique continentale.",
    "hook": "SE de l'Afrique → Réunion"
  },
  "O196": {
    "explanation": "Lyon est la capitale régionale de l'Auvergne-Rhône-Alpes.",
    "hook": "AURA → Lyon"
  },
  "O197": {
    "explanation": "Rennes est la capitale de la région Bretagne.",
    "hook": "Bretagne → Rennes"
  },
  "O198": {
    "explanation": "Marseille est la capitale de la région Provence-Alpes-Côte d'Azur.",
    "hook": "PACA → Marseille"
  },
  "O199": {
    "explanation": "Mayotte est devenue le 101e département de France en 2011.",
    "hook": "101e → Mayotte"
  },
  "O200": {
    "explanation": "Les départements alpins d'Auvergne-Rhône-Alpes contiennent de nombreuses stations de ski renommées.",
    "hook": "Ski alpin → AURA"
  },
  "O201": {
    "explanation": "Paris s'est développée le long de la Seine, qui se jette dans la Manche.",
    "hook": "Paris → Seine"
  },
  "O202": {
    "explanation": "Les naissances sont enregistrées à l'état civil de la commune où a eu lieu l'accouchement, souvent par l'intermédiaire de la maternité.",
    "hook": "Naissance → mairie du lieu de naissance"
  },
  "O203": {
    "explanation": "Un locataire peut apporter des modifications décoratives mineures et réversibles, mais a besoin du consentement pour les transformations affectant la structure ou l'utilisation.",
    "hook": "Décorer oui ; transformer non"
  },
  "O204": {
    "explanation": "Seul le mariage civil crée un statut matrimonial légal en France ; une cérémonie religieuse ne peut avoir lieu qu'après le mariage civil.",
    "hook": "Mariage légal = mariage civil"
  },
  "O205": {
    "explanation": "L'utilisation non autorisée d'une place de stationnement accessible constitue une infraction et peut entraîner une amende et l'expulsion du véhicule.",
    "hook": "Réservé signifie réservé"
  },
  "O206": {
    "explanation": "Les déchets d’équipements électriques doivent être acheminés vers les filières de réparation, de reprise chez les détaillants ou de recyclage agréées.",
    "hook": "Réparer, retourner ou recycler"
  },
  "O207": {
    "explanation": "Toute naissance en France doit être déclarée, quelle que soit la situation matrimoniale ou la nationalité des parents.",
    "hook": "Chaque naissance est déclarée"
  },
  "O208": {
    "explanation": "Le délai légal général est de cinq jours à compter du lendemain de la naissance, avec des prolongations spécifiques dans certaines communes.",
    "hook": "Déclaration de naissance = cinq jours"
  },
  "O209": {
    "explanation": "Le 17 se connecte à Police secours ou Gendarmerie pour une urgence policière immédiate.",
    "hook": "Policiers = 17"
  },
  "O210": {
    "explanation": "15 se connecte au service d'urgence médicale du SAMU ; Le 112 est le numéro d’urgence général européen.",
    "hook": "SAMU = 15"
  },
  "O211": {
    "explanation": "La commune gère l'inscription initiale et délivre le certificat d'affectation scolaire avant l'admission définitive à l'école.",
    "hook": "Inscription primaire publique → mairie"
  },
  "O212": {
    "explanation": "Le divorce ne met pas fin en soi à l’autorité parentale conjointe ; un juge peut adapter les dispositions dans l’intérêt de l’enfant.",
    "hook": "Divorce ≠ fin de l'autorité parentale partagée"
  },
  "O213": {
    "explanation": "L’aide judiciaire peut couvrir tout ou partie des frais de justice sous réserve de ressources et d’autres conditions d’éligibilité.",
    "hook": "Aide avocat → juridiction aidenelle"
  },
  "O214": {
    "explanation": "Selon la procédure, l'un des époux ou les deux époux peuvent demander le divorce.",
    "hook": "Un ou les deux conjoints"
  },
  "O215": {
    "explanation": "La CPAM gère l'affiliation à l'assurance maladie et les remboursements de la plupart des personnes relevant du régime général.",
    "hook": "Remboursement santé → CPAM"
  },
  "O216": {
    "explanation": "La contraception est légale et basée sur le choix personnel ; les règles d’accès, de confidentialité et de remboursement varient selon la méthode et l’âge.",
    "hook": "Contraception = choix personnel"
  },
  "O217": {
    "explanation": "La Carte Vitale enregistre les données administratives de l'assurance maladie ; ce n'est pas un document d'identité ou de nationalité.",
    "hook": "Vitale → remboursement des soins de santé"
  },
  "O218": {
    "explanation": "Une complémentaire santé peut prendre en charge la part non remboursée par l'assurance maladie obligatoire au titre du contrat.",
    "hook": "Mutuelle complète, ne remplace pas"
  },
  "O219": {
    "explanation": "Avec le tiers payant, l’assureur rémunère directement le professionnel du montant couvert.",
    "hook": "Tiers payant = pas d'avance pour la part couverte"
  },
  "O220": {
    "explanation": "La protection sanitaire française est obligatoire ; l'affiliation dépend du travail ou de la résidence stable et régulière et du régime applicable.",
    "hook": "La protection de la santé est obligatoire"
  },
  "O221": {
    "explanation": "La loi française autorise l'interruption volontaire de grossesse dans le délai légal ; la liberté de recourir à l'IVG est protégée par la Constitution.",
    "hook": "L'IVG est légale"
  },
  "O222": {
    "explanation": "Le travail non déclaré échappe aux obligations en matière d’emploi et de cotisations sociales et expose l’employeur et le travailleur à de graves conséquences.",
    "hook": "Travail non déclaré = illégal"
  },
  "O223": {
    "explanation": "SMIC signifie salaire minimum interprofessionnel de croissance, le salaire horaire minimum légal.",
    "hook": "SMIC = salaire minimum"
  },
  "O224": {
    "explanation": "L’inscription à France Travail donne accès à une aide à la recherche d’emploi et à des allocations si éligibles ; préparer un CV et des candidatures est également essentiel.",
    "hook": "Recherche d'emploi → France Travail + CV"
  },
  "O225": {
    "explanation": "Pour un salarié à temps plein, 35 heures est la durée légale de référence ; les heures supplémentaires et des aménagements particuliers sont légalement possibles.",
    "hook": "Référence légale = 35 heures"
  },
  "O226": {
    "explanation": "Chaque parent admissible peut demander un congé parental d'éducation après une naissance ou une adoption.",
    "hook": "L'un ou l'autre des parents"
  },
  "O227": {
    "explanation": "Un ressortissant étranger peut créer ou diriger une entreprise lorsque son statut d’immigration l’autorise et que les règles professionnelles/commerciales sont respectées.",
    "hook": "Statut régulier + activité autorisée"
  },
  "O228": {
    "explanation": "L’égalité entre les femmes et les hommes interdit les restrictions à l’entrepreneuriat fondées sur le sexe.",
    "hook": "Égalité du droit de créer une entreprise"
  },
  "O229": {
    "explanation": "Les relations de travail sont régies par les lois et règlements, les conventions collectives applicables et le contrat de travail, avec une hiérarchie de normes.",
    "hook": "Code + convention + contrat"
  },
  "O230": {
    "explanation": "Le tribunal du travail tranche les litiges individuels liés au travail privé, tels que les salaires impayés ou les licenciements contestés.",
    "hook": "Prud'hommes = conflit salarié-employeur"
  },
  "O231": {
    "explanation": "La liberté syndicale protège les salariés et autres travailleurs, quelle que soit leur nationalité, sous réserve des règles applicables.",
    "hook": "Les travailleurs peuvent se syndiquer"
  },
  "O232": {
    "explanation": "La grossesse et la maternité déclenchent une forte protection contre le licenciement. Les exceptions limitées doivent être sans rapport avec la grossesse et satisfaire à des règles strictes.",
    "hook": "La grossesse n'est pas un motif légal de licenciement"
  },
  "O233": {
    "explanation": "L'enseignement obligatoire s'étend du début de l'année scolaire de l'année civile au cours de laquelle l'enfant atteint ses trois ans jusqu'à l'âge de 16 ans.",
    "hook": "Consignes : 3-16"
  },
  "O234": {
    "explanation": "Le défaut persistant de s'inscrire ou de dispenser un enseignement après mise en demeure peut constituer l'infraction passible de cette peine maximale.",
    "hook": "Manquement d'instruction : jusqu'à 6 mois + 7 500 €"
  },
  "O235": {
    "explanation": "L’autorité parentale protège la sécurité, la santé, la moralité, l’éducation et le développement de l’enfant, dans le respect de sa personne.",
    "hook": "L'autorité parentale est au service de l'enfant"
  },
  "O236": {
    "explanation": "La maladie, les événements familiaux solennels et certaines circonstances graves de transport ou familiales peuvent constituer des motifs légitimes ; les parents doivent en informer l'école.",
    "hook": "La maladie peut justifier une absence"
  },
  "O237": {
    "explanation": "L'enseignement obligatoire se termine à 16 ans ; une obligation de formation distincte s’applique du 16 au 18.",
    "hook": "L'enseignement obligatoire se termine à 16 heures"
  },
  "O238": {
    "explanation": "L’âge d’entrée en scolarité obligatoire a été abaissé à trois ans en 2019.",
    "hook": "Commence à 3 heures"
  },
  "O239": {
    "explanation": "Après l'école élémentaire, les élèves entrent normalement au collège, en commençant par la sixième.",
    "hook": "Après primaire → collège"
  },
  "O240": {
    "explanation": "Les parents peuvent communiquer avec le personnel, rejoindre les organes représentatifs et voter pour les représentants des parents.",
    "hook": "Les parents participent et élisent des représentants"
  },
  "O241": {
    "explanation": "Les élèves nouvellement arrivés sont inscrits et évalués, puis reçoivent un enseignement de la langue française adapté tout en rejoignant les classes ordinaires.",
    "hook": "Inscrivez-vous d'abord ; soutenir l'apprentissage du français"
  },
  "O242": {
    "explanation": "L’éducation inclusive est un droit légal, soutenu par des plans individuels, des aides et des aménagements adaptés en fonction des besoins.",
    "hook": "Handicap → droit à une scolarité inclusive"
  },
  "O243": {
    "explanation": "Le congé de paternité et d'éducation des enfants est de 25 jours calendaires pour une naissance unique et de 32 jours calendaires pour les naissances multiples, plus le congé de naissance séparé de trois jours.",
    "hook": "Paternité = 25 jours (naissance unique)"
  },
  "O244": {
    "explanation": "L'autorité parentale doit s'exercer sans violence physique ou psychologique.",
    "hook": "Une éducation sans violence"
  },
  "S001": {
    "explanation": "Les usagers du service public conservent la liberté d'exprimer leurs convictions. L'agent public doit être neutre et servir tout le monde de manière égale.",
    "hook": "Agent neutre ; utilisateur gratuit dans la commande"
  },
  "S002": {
    "explanation": "Les agents publics ont une obligation de neutralité dans l'exercice de leurs fonctions.",
    "hook": "Agent public = neutralité"
  },
  "S003": {
    "explanation": "La règle de l’école publique interdit les signes visibles, mais pas tous les signes discrets ou croyances privées.",
    "hook": "Discret ou visible"
  },
  "S004": {
    "explanation": "La laïcité protège de la même manière la croyance et la non-croyance.",
    "hook": "La non-croyance est protégée"
  },
  "S005": {
    "explanation": "Les informations de recrutement doivent être directement et nécessairement liées à l'emploi ; les projets familiaux ne constituent pas un critère de sélection légal.",
    "hook": "Recrutez pour vos compétences, pas pour vos projets de grossesse"
  },
  "S006": {
    "explanation": "La liberté d’expression ne protège pas l’incitation criminelle à la haine ou à la violence.",
    "hook": "L'expression s'arrête devant la haine et la violence"
  },
  "S007": {
    "explanation": "L'association licite n'est pas réservée aux citoyens français ou à une croyance particulière.",
    "hook": "L'association est largement ouverte"
  },
  "S008": {
    "explanation": "Les décisions en matière d'emploi ne peuvent légalement être fondées sur le sexe.",
    "hook": "Même compétence, égalité de traitement"
  },
  "S009": {
    "explanation": "La liberté de conscience protège le choix religieux personnel d’un adulte.",
    "hook": "La conscience appartient à la personne"
  },
  "S010": {
    "explanation": "Un service public neutre ne s’organise pas autour d’une seule religion et traite les usagers sur un pied d’égalité.",
    "hook": "Un service neutre pour tous"
  },
  "S011": {
    "explanation": "Le débat démocratique protège une critique pacifique forte, dans le cadre de lois protégeant les autres.",
    "hook": "La critique n'est pas une menace"
  },
  "S012": {
    "explanation": "Un refus de service fondé uniquement sur un handicap peut constituer une discrimination illégale ; des obligations d’accessibilité peuvent également s’appliquer.",
    "hook": "Le handicap est un motif protégé"
  },
  "S013": {
    "explanation": "La mairie accepte les demandes d'inscription sur les listes électorales en personne.",
    "hook": "Pas d'internet → mairie"
  },
  "S014": {
    "explanation": "Les électeurs choisissent les conseillers municipaux ; le conseil élit le maire.",
    "hook": "Les conseillers choisissent le maire"
  },
  "S015": {
    "explanation": "Les communes gèrent les bâtiments publics des écoles maternelles et primaires.",
    "hook": "École primaire → commune"
  },
  "S016": {
    "explanation": "Les départements sont responsables des bâtiments publics du collège.",
    "hook": "Collège → département"
  },
  "S017": {
    "explanation": "Les régions agissent en tant qu'autorités organisatrices des transports régionaux.",
    "hook": "TER → région"
  },
  "S018": {
    "explanation": "Un préfet est un représentant désigné de l'État et non un élu territorial.",
    "hook": "Préfet nommé"
  },
  "S019": {
    "explanation": "Les tribunaux jugent la culpabilité et les sanctions après une procédure régulière.",
    "hook": "La police enquête ; juges de tribunal"
  },
  "S020": {
    "explanation": "Le Conseil constitutionnel exerce le contrôle constitutionnel selon les procédures de saisine applicables.",
    "hook": "Contrôle constitutionnel → Conseil"
  },
  "S021": {
    "explanation": "Le président du Sénat assure l'intérim en vertu de l'article 7.",
    "hook": "Poste vacant → Président du Sénat"
  },
  "S022": {
    "explanation": "L’État de droit permet la contestation judiciaire et le changement démocratique, et non la désobéissance unilatérale.",
    "hook": "Contester la loi par des moyens légaux"
  },
  "S023": {
    "explanation": "L'âge de voter est de 18 ans et les autres conditions énoncées sont remplies.",
    "hook": "18 + français + inscrit + droits"
  },
  "S024": {
    "explanation": "Les citoyens de l'UE élisent directement les membres du Parlement européen.",
    "hook": "Élections européennes → Députés"
  },
  "S025": {
    "explanation": "Le devoir d’assistance peut être rempli en toute sécurité en alertant les services d’urgence ; appelez le 15, le 18 ou le 112 selon le cas.",
    "hook": "Une aide sûre commence par un appel"
  },
  "S026": {
    "explanation": "Le service de juré est un devoir civique contraignant, à moins que le tribunal n'accorde une excuse.",
    "hook": "La convocation du jury est officielle"
  },
  "S027": {
    "explanation": "La retenue à la source et la déclaration annuelle sont des éléments distincts du système d'impôt sur le revenu.",
    "hook": "Retenue ≠ déclaration"
  },
  "S028": {
    "explanation": "Les menaces en ligne sont illégales et les enquêteurs peuvent demander leur identification par le biais de procédures légales.",
    "hook": "Les anonymes ne sont pas à l’abri"
  },
  "S029": {
    "explanation": "Le refus de biens ou de services pour un motif protégé peut constituer une infraction pénale de discrimination.",
    "hook": "Refus de service basé sur l'origine = discrimination"
  },
  "S030": {
    "explanation": "Il est interdit de fumer dans les lieux publics fermés tels que les restaurants.",
    "hook": "Lieu public clos = non fumeur"
  },
  "S031": {
    "explanation": "Conduire sans le permis requis est une infraction quelle que soit l'heure ou la route.",
    "hook": "Corriger d'abord la licence"
  },
  "S032": {
    "explanation": "La loi française exige que le mariage antérieur soit dissous avant un autre mariage.",
    "hook": "Pas de mariages simultanés"
  },
  "S033": {
    "explanation": "Le vendeur doit vérifier la majorité en cas de doute.",
    "hook": "Alcool : 18"
  },
  "S034": {
    "explanation": "L’accès à l’assistance juridique est un droit de garde fondamental, soumis à des exceptions procédurales étroitement réglementées.",
    "hook": "Garde → avocat"
  },
  "S035": {
    "explanation": "Le cyber-harcèlement n’est pas anodin ; préserver les preuves et rechercher du soutien ou les signaler.",
    "hook": "Enregistrer, raconter, signaler"
  },
  "S036": {
    "explanation": "Un arrêt collectif soutenant des revendications professionnelles est l’exercice classique du droit de grève.",
    "hook": "Arrêt de travail collectif = grève"
  },
  "S037": {
    "explanation": "Le 8 mai marque la victoire en Europe en 1945.",
    "hook": "8 mai → 1945"
  },
  "S038": {
    "explanation": "Le 11 novembre a débuté la commémoration de l'armistice de la Première Guerre mondiale.",
    "hook": "11 novembre → 1918"
  },
  "S039": {
    "explanation": "Delacroix a peint cette œuvre après la Révolution de Juillet 1830.",
    "hook": "Liberté → Delacroix"
  },
  "S040": {
    "explanation": "Le jardin de Monet à Giverny a inspiré la série des Nymphéas.",
    "hook": "Giverny → Monet"
  },
  "S041": {
    "explanation": "Reims était la ville traditionnelle du sacre.",
    "hook": "Reims → sacres"
  },
  "S042": {
    "explanation": "Les plages du Débarquement se trouvent en Normandie.",
    "hook": "Jour J → Normandie"
  },
  "S043": {
    "explanation": "La Seconde République abolit définitivement l'esclavage dans les colonies françaises en 1848.",
    "hook": "Abolition → 1848"
  },
  "S044": {
    "explanation": "L’émission londonienne de De Gaulle appelait à la poursuite de la résistance en 1940.",
    "hook": "18 juin → de Gaulle"
  },
  "S045": {
    "explanation": "Les espèces en euros sont entrées en circulation le 1er janvier 2002.",
    "hook": "Euros espèces → 2002"
  },
  "S046": {
    "explanation": "Le cercle compte toujours 12 étoiles, indépendamment de l'adhésion.",
    "hook": "12 étoiles restent 12"
  },
  "S047": {
    "explanation": "Kourou et le Centre Spatial Guyanais se trouvent en Guyane française.",
    "hook": "Kourou → Guyane"
  },
  "S048": {
    "explanation": "Les Alpes constituent la principale frontière montagneuse entre la France et l'Italie.",
    "hook": "Italie → Alpes"
  },
  "S049": {
    "explanation": "le 15 atteint le SAMU ; Le 112 est le numéro d'urgence européen.",
    "hook": "Urgence médicale → 15/112"
  },
  "S050": {
    "explanation": "Toute naissance doit être déclarée dans le délai légal, généralement cinq jours.",
    "hook": "Naissance → état civil"
  },
  "S051": {
    "explanation": "Les locataires peuvent apporter des modifications décoratives mineures, mais pas des transformations structurelles sans consentement.",
    "hook": "Peindre oui ; changement structurel non"
  },
  "S052": {
    "explanation": "Les déchets électriques appartiennent aux filières de réparation, de reprise chez les revendeurs ou de collecte agréées.",
    "hook": "Réparer ou recycler"
  },
  "S053": {
    "explanation": "Le licenciement pour cause de grossesse est discriminatoire et une forte protection légale s'applique.",
    "hook": "La grossesse est protégée"
  },
  "S054": {
    "explanation": "Les tribunaux du travail connaissent des litiges individuels découlant de contrats de travail privés.",
    "hook": "Conflit du travail → prud'hommes"
  },
  "S055": {
    "explanation": "Les besoins linguistiques nécessitent un accompagnement adapté et non une exclusion de l'enseignement obligatoire.",
    "hook": "Inscription et assistance"
  },
  "S056": {
    "explanation": "L'autorité parentale conjointe perdure généralement après le divorce.",
    "hook": "Les deux parents restent responsables"
  },
  "S057": {
    "explanation": "La Carte Vitale est une carte administrative d'assurance maladie et non un justificatif de nationalité.",
    "hook": "Vitale = santé, pas identité"
  },
  "S058": {
    "explanation": "L’organisme assuré paie directement au professionnel de santé le montant correspondant.",
    "hook": "Tiers payant = pas d'avance couverte"
  },
  "S059": {
    "explanation": "La restriction s'applique quelle que soit la courte durée ou la disponibilité perçue.",
    "hook": "Cinq minutes sont toujours interdites"
  },
  "S060": {
    "explanation": "Les femmes et les hommes ont la même capacité juridique pour créer une entreprise.",
    "hook": "L'entrepreneuriat est égal"
  }
};
  const LESSONS_FR = {
  "symbols": {
    "title": "Symboles de la République",
    "lead": "Reconnaissez instantanément les symboles officiels et séparez-les des clichés culturels.",
    "facts": [
      [
        "Concevoir",
        "Liberté, Égalité, Fraternité"
      ],
      [
        "Hymne",
        "La Marseillaise"
      ],
      [
        "Fête nationale",
        "14 juillet"
      ],
      [
        "Chiffre",
        "Marianne, avec un bonnet phrygien"
      ],
      [
        "Drapeau",
        "Bleu, blanc, rouge"
      ],
      [
        "Langue",
        "Français - Article 2 de la Constitution"
      ]
    ],
    "body": [
      "Marianne incarne la République. Son buste apparaît dans les mairies ; son image apparaît sur les timbres et les documents officiels. Le coq gaulois est un emblème national largement utilisé, notamment dans le sport, mais les principaux symboles constitutionnels sont le drapeau tricolore, La Marseillaise et la devise.",
      "La fête nationale du 14 juillet évoque la prise de la Bastille en 1789 et la Fête de la Fédération de 1790. Le défilé militaire a lieu sur les Champs-Élysées."
    ],
    "example": "Si une option propose la Tour Eiffel, la baguette ou le béret comme symbole officiel républicain, rejetez-la : ce sont des associations culturelles, pas des symboles constitutionnels.",
    "trap": "L’ordre du drapeau est bleu-blanc-rouge depuis le mât. La Marseillaise a été composée par Rouget de Lisle en 1792."
  },
  "liberty-equality": {
    "title": "Liberté, égalité, fraternité",
    "lead": "La devise n’est pas décorative : ses valeurs déterminent de nombreuses réponses à des scénarios.",
    "facts": [
      [
        "Liberté",
        "Agir librement en respectant la loi et les autres"
      ],
      [
        "Égalité",
        "Mêmes droits et égalité de traitement devant la loi"
      ],
      [
        "Fraternité",
        "Solidarité et entraide"
      ],
      [
        "Discrimination",
        "Illégal sur des terrains protégés"
      ],
      [
        "Association",
        "Créer ou adhérer librement, dans le respect de la loi"
      ],
      [
        "Expression",
        "Gratuit, mais pas de diffamation, de menaces ou de discours de haine"
      ]
    ],
    "body": [
      "La liberté n'est jamais le droit de nuire à autrui. La Déclaration des Droits de l'Homme et du Citoyen affirme que la liberté consiste à faire tout ce qui ne nuit pas à autrui.",
      "L’égalité ne signifie pas que tout le monde gagne le même montant. Cela signifie que la loi s'applique de manière égale et que la discrimination fondée sur l'origine, le sexe, la religion, le handicap et d'autres motifs protégés est interdite."
    ],
    "example": "Un employeur peut poser des questions sur les qualifications directement liées à l'emploi. Les questions sur la religion, les projets de grossesse ou l'origine ethnique ne sont pas des critères de recrutement légitimes.",
    "trap": "Sur les réseaux sociaux, les mêmes lois sur les menaces, les insultes publiques, la diffamation et l’incitation à la haine s’appliquent toujours."
  },
  "laicite": {
    "title": "La laïcité sans confusion",
    "lead": "La laïcité protège la liberté de conscience ; ce n'est pas une interdiction de la religion.",
    "facts": [
      [
        "Loi clé",
        "9 décembre 1905"
      ],
      [
        "Liberté protégée",
        "Croire, ne pas croire ou changer de religion"
      ],
      [
        "État",
        "Neutre envers les religions"
      ],
      [
        "Agents publics",
        "Doit rester religieusement neutre au travail"
      ],
      [
        "Utilisateurs du service public",
        "Peut exprimer ses convictions dans le cadre des règles d'ordre public"
      ],
      [
        "Élèves des écoles publiques",
        "Aucun signe religieux visible"
      ]
    ],
    "body": [
      "La loi de 1905 sépare les Églises et l'État. La République ne reconnaît ni ne subventionne une religion d'État, tout en garantissant le libre exercice sous réserve de l'ordre public.",
      "Les devoirs de neutralité s'appliquent aux agents publics. Les usagers d'une mairie n'ont pas le même devoir général de neutralité. Dans les écoles publiques, la loi de 2004 interdit les signes religieux ostentatoires pour les élèves ; des signes discrets sont autorisés."
    ],
    "example": "Un employé de la mairie doit servir chaque usager de manière impartiale et ne peut pas afficher de préférence religieuse dans l'exercice de ses fonctions publiques.",
    "trap": "Le 9 décembre est la Journée nationale de la Laïcité. L'antisémitisme signifie l'hostilité ou les préjugés contre le peuple juif."
  },
  "constitution": {
    "title": "La Ve République",
    "lead": "Connaître la carte constitutionnelle : qui nomme, dirige, vote et contrôle.",
    "facts": [
      [
        "Régime actuel",
        "Ve République, depuis 1958"
      ],
      [
        "Président",
        "Chef de l'État ; mandat de cinq ans"
      ],
      [
        "Premier ministre",
        "Nommé par le Président ; dirige l'action du gouvernement"
      ],
      [
        "Parlement",
        "Assemblée Nationale + Sénat"
      ],
      [
        "Députés",
        "Élu au suffrage direct pour cinq ans"
      ],
      [
        "Sénateurs",
        "Élu au suffrage indirect pour six ans"
      ]
    ],
    "body": [
      "La souveraineté nationale appartient au peuple, qui l'exerce par le biais de représentants et de référendums. Le Parlement adopte des lois et contrôle le gouvernement. L'exécutif met en œuvre la politique ; les tribunaux exercent le pouvoir judiciaire.",
      "Le Conseil constitutionnel vérifie la conformité de la législation avec la Constitution et supervise les principales élections et référendums nationaux."
    ],
    "example": "Le Président nomme le Premier Ministre. Le Premier Ministre dirige le Gouvernement. Le Parlement vote la loi. C'est le tribunal, et non la police, qui impose une sanction pénale.",
    "trap": "Si la présidence devient vacante, le Président du Sénat assure l'intérim."
  },
  "elections": {
    "title": "Élections et citoyenneté",
    "lead": "Faites correspondre chaque élection avec la personne ou l’organisme qu’elle choisit.",
    "facts": [
      [
        "Présidentielle",
        "Président ; suffrage universel direct ; cinq ans"
      ],
      [
        "Législatif",
        "députés; cinq ans"
      ],
      [
        "Municipale",
        "Conseillers municipaux; six ans"
      ],
      [
        "Européen",
        "Membres du Parlement européen ; cinq ans"
      ],
      [
        "Âge de vote",
        "18"
      ],
      [
        "Vote",
        "Un droit, pas obligatoire en France"
      ]
    ],
    "body": [
      "Pour voter aux élections présidentielles, il faut être français, âgé d'au moins 18 ans, jouir des droits civils et politiques et être inscrit sur les listes électorales. L'inscription peut se faire à la mairie sans internet.",
      "Les électeurs municipaux élisent les conseillers. Le conseil municipal élit ensuite le maire. Les citoyens de l'Union européenne résidant en France peuvent voter et se présenter aux élections municipales et européennes sous certaines conditions, mais ne peuvent pas être maire ou adjoint au maire."
    ],
    "example": "Le préfet est désigné pour représenter l'État dans un département. Le maire est élu par le conseil municipal.",
    "trap": "Un candidat à la présidentielle a besoin de 500 soutiens élus ; les électeurs n’élisent pas directement le Premier ministre."
  },
  "territories": {
    "title": "Qui gère quoi ?",
    "lead": "Une simple carte à trois niveaux évite de nombreuses erreurs évitables.",
    "facts": [
      [
        "Commune",
        "Ecoles primaires, état civil, services locaux"
      ],
      [
        "Département",
        "Collèges et action sociale"
      ],
      [
        "Région",
        "Lycées, trains régionaux et développement économique"
      ],
      [
        "Préfet",
        "Représente l'État"
      ],
      [
        "France",
        "101 départements"
      ],
      [
        "France métropolitaine",
        "13 régions"
      ]
    ],
    "body": [
      "La France est organisée en communes, départements et régions. Ces autorités territoriales ont des conseils élus et des responsabilités définies. Le préfet n'est pas un élu local : le gouvernement national le nomme.",
      "Le maire exerce à la fois des fonctions de gouvernement local et des fonctions d'État, notamment l'état civil et certaines responsabilités de police."
    ],
    "example": "L'inscription scolaire dans une école primaire publique commence auprès de la commune/mairie. Une question sur un collège public pointe vers le département.",
    "trap": "Il ne faut pas confondre le conseil élu d’un département avec le préfet, qui représente l’État."
  },
  "europe": {
    "title": "La France et l'Union européenne",
    "lead": "Rappelez-vous les dates, les sièges et les symboles qui reviennent dans toute la banque.",
    "facts": [
      [
        "Membres",
        "27 États (1er janvier 2025)"
      ],
      [
        "Maastricht",
        "Signé en 1992 ; Citoyenneté européenne"
      ],
      [
        "Journée de l'Europe",
        "9 mai"
      ],
      [
        "Drapeau",
        "12 étoiles dorées sur bleu"
      ],
      [
        "Hymne",
        "Ode à la joie, Beethoven"
      ],
      [
        "Siège du Parlement",
        "Strasbourg"
      ]
    ],
    "body": [
      "La Commission européenne est basée principalement à Bruxelles ; la Banque centrale européenne est à Francfort ; le siège officiel du Parlement européen est Strasbourg. Les citoyens de l'UE élisent directement les membres du Parlement européen.",
      "La Communauté européenne du charbon et de l’acier de 1951 fut la première étape de la construction. Les traités de Rome de 1957 ont approfondi l’intégration. Le Traité de Maastricht a fondé l'Union européenne et créé la citoyenneté européenne."
    ],
    "example": "Le chiffre 12 sur le drapeau symbolise l'unité et la complétude, et non le nombre de pays membres de l'UE.",
    "trap": "Le Royaume-Uni a quitté l’UE en 2020. L’UE compte 27 membres, et non 28."
  },
  "fundamental-rights": {
    "title": "Droits fondamentaux",
    "lead": "Reliez chaque liberté à sa protection et à ses limites légales.",
    "facts": [
      [
        "Texte fondateur",
        "1789 Déclaration des Droits de l'Homme et du Citoyen"
      ],
      [
        "Dignité",
        "Pas de torture, d'esclavage ou de traitement dégradant"
      ],
      [
        "Expression",
        "Opinions au sein de la loi"
      ],
      [
        "Presse",
        "Une information plurielle et indépendante"
      ],
      [
        "Mouvement",
        "Voyager et choisir sa résidence légalement"
      ],
      [
        "Arrestation",
        "Pas de détention arbitraire ; droits procéduraux"
      ]
    ],
    "body": [
      "Les droits fondamentaux protègent chaque personne. Les restrictions doivent avoir une base légale, poursuivre un objectif légitime tel que l’ordre public et être nécessaires et proportionnées.",
      "La personne placée en garde à vue a des droits, notamment celui d'être informée de l'infraction présumée, de l'assistance d'un avocat, d'un examen médical et d'avertir un proche, sous réserve des règles de procédure."
    ],
    "example": "Une opinion pacifique est protégée. Une menace directe ou un appel à la violence n’est pas protégé simplement parce qu’il s’agit d’une opinion.",
    "trap": "La liberté de la presse n’annule pas les lois contre la diffamation, les atteintes à la vie privée ou l’incitation à la haine."
  },
  "civic-duties": {
    "title": "Devoirs et délits civiques",
    "lead": "L'examen teste souvent les obligations quotidiennes plutôt que le droit abstrait.",
    "facts": [
      [
        "Impôts",
        "Déclarer ses revenus chaque année"
      ],
      [
        "Urgence",
        "Aider une personne en danger lorsque cela est possible en toute sécurité"
      ],
      [
        "Jury",
        "Servir sur convocation est un devoir civique"
      ],
      [
        "Loi",
        "S'applique à tout le monde"
      ],
      [
        "Hiérarchie des infractions",
        "Contravention < délit < crime"
      ],
      [
        "Ventes d'alcool",
        "Interdit aux moins de 18 ans"
      ]
    ],
    "body": [
      "La solidarité inclut la contribution aux services publics et à la protection sociale et l'aide aux personnes en difficulté. Le code de la route, les exigences en matière de permis et les déclarations fiscales sont des obligations légales et non des conseils civiques facultatifs.",
      "Un juge peut supprimer les droits civils et politiques pendant une période déterminée à la suite de certaines condamnations. Pendant cette période, la personne ne peut ni voter ni se présenter aux élections."
    ],
    "example": "Si une aide directe vous met en danger, appelez les services d’urgence. Le devoir d’assistance n’exige pas d’action imprudente.",
    "trap": "Un crime est la catégorie d'infraction la plus grave. La police enquête ; les tribunaux déterminent la culpabilité et imposent des sanctions."
  },
  "digital-civic": {
    "title": "Citoyenneté en ligne",
    "lead": "L’espace numérique est porteur des mêmes droits, devoirs et respect d’autrui.",
    "facts": [
      [
        "Majorité numérique",
        "15 ans"
      ],
      [
        "Discours en ligne",
        "Soumis au droit français"
      ],
      [
        "Données personnelles",
        "Protéger et utiliser de manière responsable"
      ],
      [
        "Harcèlement",
        "Illégal en ligne comme hors ligne"
      ],
      [
        "Sources",
        "Vérifiez la fiabilité avant de partager"
      ],
      [
        "Sécurité",
        "Mots de passe uniques forts et prudence"
      ]
    ],
    "body": [
      "La citoyenneté numérique signifie participer en ligne de manière responsable : respecter les autres, protéger les données personnelles, identifier les informations erronées et signaler les contenus illégaux. L’anonymat ne rend pas licite le discours illégal.",
      "En France, l’âge de la majorité numérique est fixé à 15 ans pour le consentement indépendant d’un mineur à certains traitements de données sur les réseaux sociaux, dans le cadre légal applicable."
    ],
    "example": "Partager une image humiliante sans consentement peut porter atteinte à la vie privée et favoriser le cyber-harcèlement. Ne le transmettez pas; conserver les preuves et les signaler.",
    "trap": "Les règles d’une plateforme ne remplacent pas le droit français. Les insultes et menaces publiques peuvent être poursuivies."
  },
  "revolution-republic": {
    "title": "De la révolution à la République",
    "lead": "Ancrez les dates de fondation : 1789, 1848, 1881-82 et 1905.",
    "facts": [
      [
        "1789",
        "Révolution française et Déclaration des droits"
      ],
      [
        "1792",
        "Première République ; Marseillaise composée"
      ],
      [
        "1804",
        "Napoléon Ier devient empereur ; Code civil"
      ],
      [
        "1848",
        "Abolition définitive de l'esclavage"
      ],
      [
        "1881",
        "Enseignement primaire public gratuit"
      ],
      [
        "1905",
        "Séparation des Églises et de l'État"
      ]
    ],
    "body": [
      "Louis XVI fut guillotiné pendant la Révolution. Napoléon Bonaparte devient empereur en 1804, année associée au Code civil. Reims était traditionnellement la ville du sacre des rois de France.",
      "La Deuxième République abolit l'esclavage en 1848 ; Victor Schœlcher en est une figure centrale. Les lois Jules Ferry instaurent un enseignement primaire gratuit, laïc et obligatoire."
    ],
    "example": "Si vous voyez Napoléon Ier et un texte juridique, pensez Code civil. Si vous voyez l’abolition définitive de l’esclavage, pensez à 1848 et à Victor Schœlcher.",
    "trap": "La loi de 1905 concerne la laïcité ; la Constitution actuelle de la Ve République date de 1958."
  },
  "world-wars": {
    "title": "Guerres, Résistance et mémoire",
    "lead": "Connaître les conflits, les commémorations et les conséquences humaines.",
    "facts": [
      [
        "1914-1918",
        "Première Guerre mondiale"
      ],
      [
        "11 novembre",
        "Commémoration de l'Armistice de 1918"
      ],
      [
        "1939-1945",
        "Seconde Guerre mondiale"
      ],
      [
        "18 juin 1940",
        "L’appel à la résistance de De Gaulle"
      ],
      [
        "25 août 1944",
        "Libération de Paris"
      ],
      [
        "8 mai",
        "Victoire en Europe, 1945"
      ]
    ],
    "body": [
      "Jean Moulin est une figure majeure de la Résistance française. Le débarquement de Normandie en juin 1944 marque le début de la libération de la France. La Shoah était le génocide systématique des Juifs d’Europe par l’Allemagne nazie et ses collaborateurs.",
      "Le devoir de mémoire préserve la connaissance des victimes et des événements passés afin que leurs enseignements ne soient pas effacés ou répétés."
    ],
    "example": "N'échangez pas les deux jours fériés : le 8 mai concerne la victoire en 1945 ; Le 11 novembre concerne l'armistice de 1918.",
    "trap": "Les Nations Unies ont été fondées en 1945 après la Seconde Guerre mondiale."
  },
  "postwar-europe": {
    "title": "La France et l'Europe d'après-guerre",
    "lead": "Suivez la séquence de la Libération à l'euro.",
    "facts": [
      [
        "1944",
        "Les femmes obtiennent des droits de vote et d’éligibilité"
      ],
      [
        "1945",
        "La sécurité sociale et l'ONU"
      ],
      [
        "1951",
        "Communauté européenne du charbon et de l'acier"
      ],
      [
        "1958",
        "Cinquième République"
      ],
      [
        "1962",
        "Adoption du suffrage présidentiel direct"
      ],
      [
        "1981",
        "Peine de mort abolie"
      ]
    ],
    "body": [
      "Les femmes ont voté pour la première fois aux élections nationales en 1945, après l'ordonnance de 1944. La Sécurité sociale a été créée en 1945. La Ve République a débuté en 1958 sous Charles de Gaulle.",
      "L'euro est devenu la monnaie scripturale officielle en 1999 ; Les billets et pièces en euros sont entrés en circulation en 2002."
    ],
    "example": "Pour l'abolition de la peine de mort, reliez le président François Mitterrand, le ministre de la Justice Robert Badinter et 1981.",
    "trap": "L'élection présidentielle directe a été approuvée en 1962 ; la première élection de ce type a eu lieu en 1965."
  },
  "arts-culture": {
    "title": "Arts, littérature et patrimoine",
    "lead": "Apprenez les gens par profession et les œuvres par créateur ou lieu.",
    "facts": [
      [
        "Delacroix",
        "La Liberté guidant le peuple"
      ],
      [
        "Monet",
        "Les Nymphéas"
      ],
      [
        "Rodin",
        "Sculpteur"
      ],
      [
        "Molière",
        "Dramaturge"
      ],
      [
        "Marie-Curie",
        "Physicien et chimiste; deux prix Nobel"
      ],
      [
        "Joconde",
        "Musée du Louvre"
      ]
    ],
    "body": [
      "Baudelaire était poète ; George Sand et Marguerite Yourcenar étaient des écrivains ; Simone de Beauvoir était écrivain, philosophe et féministe ; Albert Camus était écrivain et philosophe. Cézanne et Renoir étaient peintres ; Debussy était compositeur.",
      "Versailles symbolise le pouvoir royal de Louis XIV. Lascaux conserve des peintures préhistoriques. La Tour Eiffel a été construite pour l'Exposition universelle de 1889. Les Journées du Patrimoine ouvrent de nombreux sites au public."
    ],
    "example": "Utiliser des paires : Delacroix-Liberté ; Monet-Nymphéas ; Louvre-Jocondé ; Lascaux-préhistoire ; Versailles-Louis XIV.",
    "trap": "Rouget de Lisle composa La Marseillaise ; il n'a pas peint ni dirigé la Révolution."
  },
  "geography": {
    "title": "France sur la carte",
    "lead": "Couvre la géographie métropolitaine, l'outre-mer et les capitales régionales.",
    "facts": [
      [
        "Le plus haut sommet",
        "Mont-Blanc"
      ],
      [
        "Fleuve Paris",
        "Seine"
      ],
      [
        "Gamme France-Italie",
        "Alpes"
      ],
      [
        "Port principal en tonnage",
        "Marseille-Fos"
      ],
      [
        "Population 2025",
        "Environ 68,6 millions"
      ],
      [
        "Départements d'outre-mer",
        "Guadeloupe, Martinique, Guyane, La Réunion, Mayotte"
      ]
    ],
    "body": [
      "La France métropolitaine est bordée par l'océan Atlantique, la Manche, la mer du Nord et la Méditerranée. La Corse est une île méditerranéenne française. La Guadeloupe et la Martinique sont aux Antilles ; La Réunion et Mayotte se trouvent dans l'océan Indien.",
      "La Guyane française borde le Brésil et contient Kourou, le port spatial européen. Mayotte est devenue le 101e département de France en 2011. Les capitales régionales testées sont Lyon, Rennes et Marseille."
    ],
    "example": "Auvergne-Rhône-Alpes → Stations de ski Lyon et Alpin ; Bretagne → Rennes ; Provence-Alpes-Côte d'Azur → Marseille.",
    "trap": "Le Mont-Saint-Michel est sur une île de Normandie. Kourou est en Guyane française, pas en France métropolitaine."
  },
  "family-civil": {
    "title": "Famille et état civil",
    "lead": "Sachez quels actes passent par la mairie et comment fonctionnent les droits familiaux.",
    "facts": [
      [
        "Naissance",
        "Déclarer à l'officier de l'état civil dans les cinq jours"
      ],
      [
        "Mariage",
        "Seul le mariage civil crée le mariage légal"
      ],
      [
        "Divorce",
        "L'un ou l'autre des conjoints ou les deux peuvent postuler"
      ],
      [
        "Autorité parentale",
        "Normalement exercé par les deux parents après le divorce"
      ],
      [
        "Violences",
        "Les châtiments corporels des enfants sont interdits"
      ],
      [
        "Contraception",
        "Une liberté personnelle, accessible dans le respect des règles sanitaires"
      ]
    ],
    "body": [
      "Une naissance est déclarée à la mairie du lieu de naissance. Une cérémonie religieuse peut suivre, mais seule la cérémonie civile préalable crée un mariage reconnu par le droit français. Le mariage polygame n'est pas légal.",
      "L’autorité parentale est un ensemble de droits et de devoirs exercés dans l’intérêt de l’enfant : protection, santé, sécurité, moralité, éducation et développement."
    ],
    "example": "Le divorce ne supprime pas automatiquement l’autorité parentale d’un parent. Les décisions continuent d’être guidées par l’intérêt de l’enfant.",
    "trap": "Une déclaration de naissance est généralement due dans les cinq jours et non dans un mois."
  },
  "health-emergency": {
    "title": "Santé et urgences",
    "lead": "Les nombres et les systèmes pratiques sont des points de grande valeur et nécessitant peu d'effort.",
    "facts": [
      [
        "Police",
        "17"
      ],
      [
        "SAMU",
        "15"
      ],
      [
        "Pompiers",
        "18"
      ],
      [
        "Urgence européenne",
        "112"
      ],
      [
        "Carte Vitale",
        "Droits et remboursement électroniques de l'assurance maladie"
      ],
      [
        "Mutuelle",
        "Complète les remboursements de l'Assurance Maladie"
      ]
    ],
    "body": [
      "L'Assurance Maladie est le régime public d'assurance maladie obligatoire destiné aux personnes qui travaillent ou résident en France de manière stable et régulière. La CPAM traite de nombreux dossiers locaux de remboursement et d'affiliation.",
      "Le tiers payant signifie que le patient n'avance pas tout ou partie des frais couverts. L'IVG est légale dans les délais légaux ; la liberté de recourir à l'IVG est protégée par la Constitution."
    ],
    "example": "Urgence médicale immédiate → 15 ou 112. Urgence policière → 17. Incendie/secours → 18.",
    "trap": "Une mutuelle ne remplace pas l'Assurance Maladie ; il complète le remboursement public."
  },
  "work": {
    "title": "Travail et emploi",
    "lead": "Les questions d’emploi se concentrent sur les protections minimales et l’égalité d’accès.",
    "facts": [
      [
        "Heure hebdomadaire légale",
        "35 heures"
      ],
      [
        "SMIC",
        "Salaire minimum légal"
      ],
      [
        "Travail non déclaré",
        "Illégal"
      ],
      [
        "Prud'hommes",
        "Conflits individuels du travail"
      ],
      [
        "Syndicat",
        "Les travailleurs peuvent adhérer"
      ],
      [
        "Règles",
        "Code du travail, convention collective, contrat de travail"
      ]
    ],
    "body": [
      "Une femme peut créer une entreprise dans les mêmes conditions qu’un homme. Un ressortissant étranger non communautaire en statut régulier peut en créer un si son statut de séjour l'autorise à exercer et que d'autres conditions légales sont remplies.",
      "Le licenciement pour cause de grossesse ou de congé de maternité est interdit. Les deux parents éligibles peuvent demander un congé parental d'éducation. France Travail accompagne les demandeurs d'emploi."
    ],
    "example": "Le conseil de prud’hommes connaît d’un litige individuel relatif au salaire, au licenciement ou au contrat de travail entre un salarié du secteur privé et son employeur.",
    "trap": "La semaine de 35 heures constitue la durée légale de référence et non une interdiction absolue des heures supplémentaires."
  },
  "school": {
    "title": "Responsabilité scolaire et parentale",
    "lead": "L’éducation publique combine un devoir d’instruction avec l’égalité d’accès et d’inclusion.",
    "facts": [
      [
        "Instructions",
        "Obligatoire de 3 à 16 ans"
      ],
      [
        "Après la primaire",
        "Collège"
      ],
      [
        "Nouveaux apprenants de français",
        "Prise en charge de langues spécifiques telles que UPE2A"
      ],
      [
        "Handicap",
        "Droit à une scolarité inclusive et adaptations"
      ],
      [
        "Inscription primaire publique",
        "Commencez par la mairie/commune"
      ],
      [
        "Rôle des parents",
        "Votez pour les représentants et participez"
      ]
    ],
    "body": [
      "L'obligation est une obligation d'instruction, qui peut être remplie par le biais de l'école ou, sous réserve de règles d'autorisation strictes, à la maison. Les parents qui enfreignent de manière persistante après mise en demeure s’exposent à des sanctions pénales.",
      "La maladie et certaines circonstances familiales graves sont des absences légitimes. Les préférences religieuses ou personnelles ne permettent généralement pas à un enfant d'ignorer l'instruction obligatoire."
    ],
    "example": "Un enfant qui ne parle pas encore le français doit quand même être inscrit et recevoir un enseignement linguistique adapté ; l’exclusion n’est pas la réponse légale.",
    "trap": "L'instruction obligatoire commence à 3 heures et se termine à 16 heures. Une obligation de formation se poursuit de 16 à 18 heures, mais c'est une règle différente."
  },
  "housing-environment": {
    "title": "Logement et responsabilité quotidienne",
    "lead": "Appliquez des choix licites et réfléchis à des situations ordinaires.",
    "facts": [
      [
        "Locataire",
        "Peut apporter des modifications décoratives mineures"
      ],
      [
        "Modification majeure",
        "Nécessite l’accord du propriétaire"
      ],
      [
        "Appareil cassé",
        "Réparation, reprise par le détaillant ou recyclage agréé"
      ],
      [
        "Stationnement accessible",
        "L'utilisation non autorisée est interdite et passible d'une amende"
      ],
      [
        "Déchets",
        "Utiliser les bons canaux de collecte"
      ],
      [
        "Quartier",
        "Respecter les règles relatives au bruit et aux espaces partagés"
      ]
    ],
    "body": [
      "Un locataire peut repeindre ou apporter des améliorations décoratives réversibles mais ne peut procéder à une transformation structurelle sans l’accord du propriétaire. Les appareils électriques usagés ne doivent pas être abandonnés dans la rue.",
      "La responsabilité civique inclut l'accessibilité : une place de stationnement réservée aux personnes handicapées ne peut être utilisée qu'avec le permis requis."
    ],
    "example": "Pour une machine à laver en panne, choisissez la réparation ou un itinéraire de collecte autorisé – et non le déversement sur la chaussée.",
    "trap": "Posséder ou louer un logement ne supprime pas les règles de santé publique, de déchets, de bruit ou de sécurité."
  }
};

  const themeLabels = {
    principles: "Valeurs",
    rights: "Droits",
    history: "Histoire",
    institutions: "Institutions",
    society: "Société"
  };

  const LESSON_FIXES = {
    symbols: {
      facts: [["Devise", "Liberté, Égalité, Fraternité"], ["Hymne", "La Marseillaise"], ["Fête nationale", "14 juillet"], ["Figure", "Marianne, avec un bonnet phrygien"], ["Drapeau", "Bleu, blanc, rouge"], ["Langue", "Le français — article 2 de la Constitution"]]
    },
    "liberty-equality": {
      facts: [["Liberté", "Agir librement en respectant la loi et autrui"], ["Égalité", "Mêmes droits et même traitement devant la loi"], ["Fraternité", "Solidarité et entraide"], ["Discrimination", "Interdite lorsqu’elle repose sur un critère protégé"], ["Association", "Créer ou rejoindre librement une association licite"], ["Expression", "Libre, sauf notamment diffamation, menace ou appel à la haine"]]
    },
    laicite: {
      facts: [["Loi essentielle", "9 décembre 1905"], ["Liberté protégée", "Croire, ne pas croire ou changer de religion"], ["État", "Neutre à l’égard des religions"], ["Agents publics", "Doivent rester neutres dans l’exercice de leurs fonctions"], ["Usagers du service public", "Peuvent exprimer leurs convictions dans le respect du service et de l’ordre public"], ["Élèves de l’école publique", "Pas de signes religieux ostensibles"]]
    },
    constitution: {
      facts: [["Régime actuel", "Ve République, depuis 1958"], ["Président", "Chef de l’État ; mandat de cinq ans"], ["Premier ministre", "Nommé par le Président ; dirige l’action du Gouvernement"], ["Parlement", "Assemblée nationale et Sénat"], ["Députés", "Élus au suffrage direct pour cinq ans"], ["Sénateurs", "Élus au suffrage indirect pour six ans"]]
    },
    elections: {
      facts: [["Présidentielle", "Président de la République ; suffrage universel direct ; cinq ans"], ["Législatives", "Députés ; cinq ans"], ["Municipales", "Conseillers municipaux ; six ans"], ["Européennes", "Députés européens ; cinq ans"], ["Âge du droit de vote", "18 ans"], ["Vote", "Un droit et un devoir civique, non obligatoire en France"]]
    },
    territories: {
      lead: "Une carte simple des trois niveaux évite de nombreuses confusions.",
      facts: [["Commune", "Écoles primaires, état civil et services locaux"], ["Département", "Collèges et action sociale"], ["Région", "Lycées, transports régionaux et développement économique"], ["Préfet", "Représente l’État"], ["France", "101 départements"], ["France métropolitaine", "13 régions"]]
    },
    europe: {
      facts: [["Membres", "27 États"], ["Maastricht", "Traité signé en 1992 ; citoyenneté européenne"], ["Journée de l’Europe", "9 mai"], ["Drapeau", "Douze étoiles d’or sur fond bleu"], ["Hymne", "Ode à la joie de Beethoven"], ["Siège du Parlement", "Strasbourg"]]
    },
    "fundamental-rights": {
      facts: [["Texte fondateur", "Déclaration des droits de l’homme et du citoyen de 1789"], ["Dignité", "Interdiction de la torture, de l’esclavage et des traitements dégradants"], ["Expression", "Opinions libres dans les limites de la loi"], ["Presse", "Information pluraliste et indépendante"], ["Circulation", "Se déplacer et choisir légalement sa résidence"], ["Arrestation", "Pas de détention arbitraire ; garanties procédurales"]]
    },
    "civic-duties": {
      facts: [["Impôts", "Déclarer ses revenus chaque année"], ["Urgence", "Aider une personne en danger sans se mettre soi-même en danger"], ["Jury", "Siéger lorsqu’on est convoqué est un devoir civique"], ["Loi", "S’applique à tous"], ["Hiérarchie des infractions", "Contravention < délit < crime"], ["Vente d’alcool", "Interdite aux moins de 18 ans"]]
    },
    "digital-civic": {
      facts: [["Majorité numérique", "15 ans"], ["Expression en ligne", "Soumise au droit français"], ["Données personnelles", "À protéger et utiliser de façon responsable"], ["Harcèlement", "Illégal en ligne comme hors ligne"], ["Sources", "Vérifier leur fiabilité avant de partager"], ["Sécurité", "Mots de passe forts et uniques ; vigilance"]],
      example: "Partager une image humiliante sans consentement peut porter atteinte à la vie privée et alimenter le cyberharcèlement. Ne la transmettez pas ; conservez les preuves et signalez les faits."
    },
    "revolution-republic": {
      title: "De la Révolution à la République"
    },
    "world-wars": {
      example: "Ne confondez pas les deux jours fériés : le 8 mai commémore la victoire de 1945 ; le 11 novembre, l’armistice de 1918."
    },
    "postwar-europe": {
      facts: [["1944", "Les femmes obtiennent le droit de vote et d’éligibilité"], ["1945", "Création de la Sécurité sociale et de l’ONU"], ["1951", "Communauté européenne du charbon et de l’acier"], ["1958", "Naissance de la Ve République"], ["1962", "Adoption de l’élection présidentielle au suffrage direct"], ["1981", "Abolition de la peine de mort"]]
    },
    "arts-culture": {
      lead: "Associez chaque personnalité à son domaine, chaque œuvre à son créateur et chaque monument à son lieu.",
      facts: [["Delacroix", "La Liberté guidant le peuple"], ["Monet", "Les Nymphéas"], ["Rodin", "Sculpteur"], ["Molière", "Dramaturge"], ["Marie Curie", "Physicienne et chimiste ; deux prix Nobel"], ["La Joconde", "Musée du Louvre"]],
      example: "Utilisez des associations : Delacroix–Liberté ; Monet–Nymphéas ; Louvre–Joconde ; Lascaux–Préhistoire ; Versailles–Louis XIV.",
      trap: "Rouget de Lisle a composé La Marseillaise ; il n’était ni peintre ni dirigeant de la Révolution."
    },
    geography: {
      facts: [["Plus haut sommet", "Mont-Blanc"], ["Fleuve de Paris", "Seine"], ["Chaîne entre la France et l’Italie", "Alpes"], ["Grand port commercial", "Marseille-Fos"], ["Population en 2025", "Environ 68,6 millions"], ["Départements et régions d’outre-mer", "Guadeloupe, Martinique, Guyane, La Réunion et Mayotte"]],
      example: "Auvergne-Rhône-Alpes → Lyon et les Alpes ; Bretagne → Rennes ; Provence-Alpes-Côte d’Azur → Marseille."
    },
    "family-civil": {
      facts: [["Naissance", "À déclarer à l’état civil dans les cinq jours"], ["Mariage", "Seul le mariage civil produit les effets juridiques du mariage"], ["Divorce", "Peut être demandé par l’un des époux ou les deux"], ["Autorité parentale", "Généralement exercée par les deux parents après le divorce"], ["Violences", "Les châtiments corporels envers les enfants sont interdits"], ["Contraception", "Liberté personnelle accessible selon les règles de santé"]]
    },
    "health-emergency": {
      lead: "Les numéros d’urgence et le fonctionnement de la santé sont des points essentiels à connaître.",
      facts: [["Police secours", "17"], ["SAMU", "15"], ["Sapeurs-pompiers", "18"], ["Urgence européenne", "112"], ["Carte Vitale", "Facilite la prise en charge et le remboursement par l’Assurance Maladie"], ["Mutuelle", "Complète les remboursements de l’Assurance Maladie"]],
      trap: "Une mutuelle ne remplace pas l’Assurance Maladie ; elle complète sa prise en charge."
    },
    work: {
      facts: [["Durée légale hebdomadaire", "35 heures"], ["SMIC", "Salaire minimum légal"], ["Travail dissimulé", "Illégal"], ["Prud’hommes", "Litiges individuels du travail"], ["Syndicat", "Les travailleurs peuvent y adhérer librement"], ["Règles", "Code du travail, convention collective et contrat de travail"]]
    },
    school: {
      facts: [["Instruction", "Obligatoire de 3 à 16 ans"], ["Après l’école primaire", "Collège"], ["Élèves nouvellement francophones", "Accompagnement linguistique adapté, notamment en UPE2A"], ["Handicap", "Droit à une scolarité inclusive et à des aménagements"], ["Inscription à l’école primaire publique", "Commence auprès de la mairie"], ["Rôle des parents", "Suivre la scolarité, élire leurs représentants et participer"]],
      trap: "L’instruction obligatoire commence à 3 ans et se termine à 16 ans. Une obligation de formation se poursuit de 16 à 18 ans, mais il s’agit d’une règle différente."
    },
    "housing-environment": {
      facts: [["Locataire", "Peut réaliser de petits aménagements décoratifs"], ["Transformation importante", "Nécessite l’accord du propriétaire"], ["Appareil en panne", "Réparation, reprise par un vendeur ou recyclage agréé"], ["Place réservée", "Usage sans autorisation interdit et sanctionné"], ["Déchets", "Utiliser les filières de collecte appropriées"], ["Voisinage", "Respecter les règles de bruit et les espaces communs"]],
      example: "Pour une machine à laver en panne, choisissez la réparation ou une filière de collecte autorisée, jamais l’abandon sur la voie publique."
    }
  };

  const QUESTION_FIXES = {
    O003: { explanation: "Toute personne tenue de déclarer ses revenus doit déposer sa déclaration annuelle, y compris lorsque l’impôt est prélevé à la source." },
    O034: { explanation: "Tout agent public doit exercer ses fonctions de manière neutre et traiter les usagers de façon égale." },
    O075: { explanation: "Le Défenseur des droits est une autorité constitutionnelle indépendante. Il protège notamment les droits des usagers des services publics, lutte contre les discriminations et veille aux droits des enfants ainsi qu’à la déontologie des forces de sécurité." },
    O118: { explanation: "La loi peut limiter l’expression pour protéger les droits d’autrui et l’ordre public, notamment contre la diffamation, les menaces et l’incitation à la haine ou à la violence. Toute restriction doit elle-même être légale, nécessaire et proportionnée." },
    O125: { hook: "Pas de vote ni de candidature pendant la durée de la privation" },
    O151: { explanation: "L’ordonnance du 21 avril 1944 accorde aux Françaises le droit de vote et d’éligibilité ; elles votent pour la première fois en 1945." },
    O209: { explanation: "Le 17 permet de joindre Police secours ou la gendarmerie en cas d’urgence nécessitant l’intervention des forces de l’ordre." },
    O237: { hook: "L’instruction obligatoire se termine à 16 ans" },
    O238: { hook: "L’instruction obligatoire commence à 3 ans" }
  };

  Object.keys(themeLabels).forEach((id) => {
    DATA.themes[id].short = themeLabels[id];
  });

  function wrongReason(question, choice) {
    const prompt = question.prompt.toLocaleLowerCase("fr");
    let reason;
    if (!question.official) {
      reason = "Cette réaction ne respecte pas la règle, le droit ou le principe applicable à cette situation.";
    } else if (/(quand|date|année|siècle|depuis quelle)/.test(prompt)) {
      reason = "Cette date ou cette période ne correspond pas à l’événement demandé.";
    } else if (/^(qui|quel personnage|quelle personnalité)|auteur|composé|écrit|peint|fondé/.test(prompt)) {
      reason = "Cette personne n’est pas celle qui est associée au rôle ou à l’œuvre demandé.";
    } else if (/(où|dans quel pays|quelle ville|quelle région|quel territoire|siège)/.test(prompt)) {
      reason = "Ce lieu ne correspond pas à l’institution, au territoire ou à l’événement demandé.";
    } else if (/(combien|quelle durée|quel âge|nombre|majorité)/.test(prompt)) {
      reason = "Ce nombre ou cette durée ne correspond pas à la règle ou au fait demandé.";
    } else if (/(institution|organisme|collectivité|juridiction|compétent|pouvoir|qui vote|qui nomme|qui décide)/.test(prompt)) {
      reason = "Cette institution ou autorité n’exerce pas la compétence demandée dans cette question.";
    } else if (/(qu’est-ce|que signifie|comment appelle|définition)/.test(prompt)) {
      reason = "Cette proposition ne donne pas la définition correcte de la notion demandée.";
    } else {
      reason = "Cette proposition est contraire au fait, à la règle ou au principe visé par la question.";
    }
    return "« " + choice + " » est une mauvaise réponse. " + reason + " " + question.explanation;
  }

  DATA.questions.forEach((question) => {
    const override = QUESTIONS_FR[question.id];
    if (!override) throw new Error("Traduction manquante pour " + question.id);
    Object.assign(question, override, QUESTION_FIXES[question.id] || {});
    question.wrongReasons = {};
    question.wrong.forEach((choice) => {
      question.wrongReasons[choice] = wrongReason(question, choice);
    });
  });

  DATA.lessons.forEach((lesson) => {
    const override = LESSONS_FR[lesson.id];
    if (!override) throw new Error("Traduction de leçon manquante pour " + lesson.id);
    Object.assign(lesson, override, LESSON_FIXES[lesson.id] || {});
  });

  DATA.version = "2026.10.07-fr";
  DATA.metadata.sourceNotice = "Les 244 questions de connaissance publiées par le ministère sont incluses. Les choix, explications et mises en situation sont du matériel d’entraînement ; les situations réelles ne sont pas publiées.";
})();
