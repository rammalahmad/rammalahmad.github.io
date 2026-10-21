/* Corrections pédagogiques : aucun identifiant, énoncé ni choix de réponse n'est modifié. */
(() => {
  "use strict";
  const questions = [];
  function patch(id, alternatives, fields = {}) {
    questions.push({id, ...fields, wrongReasons: Object.fromEntries(alternatives)});
  }

  patch("O090",[
    ["À rompre automatiquement son contrat","Une grève légale suspend le travail mais ne rompt pas automatiquement le contrat ; il ne faut pas la confondre avec une démission."],
    ["À empêcher définitivement les autres de travailler","Le droit de grève permet de cesser son propre travail collectivement ; il ne donne pas le droit d'empêcher définitivement toute activité d'autrui."],
    ["À éviter toute négociation","La grève soutient des revendications professionnelles et peut contribuer à une négociation ; éviter toute négociation n'est pas sa finalité."]
  ]);
  patch("O091",[
    ["De la préférence personnelle d'un agent","Une préférence individuelle ne suffit pas : une restriction doit reposer sur le droit et être justifiée, nécessaire et proportionnée."],
    ["D'une religion officielle","La France n'a pas de religion d'État ; une préférence religieuse officielle ne constitue pas cette justification légale."],
    ["De l'intérêt d'une entreprise privée uniquement","Le seul avantage d'une entreprise n'autorise pas l'État à retirer un droit ; une restriction exige un objectif légalement légitime."]
  ]);
  patch("O092",[
    ["L'État, c'est moi","Cette formule est traditionnellement associée à la monarchie absolue et attribuée à Louis XIV ; elle ne figure pas dans la Déclaration de 1789."],
    ["Travail, Famille, Patrie","Cette devise est celle du régime de Vichy, bien postérieur à 1789 ; elle n'est pas la proclamation de liberté et d'égalité de la Déclaration."],
    ["La religion de l'État est obligatoire","La Déclaration protège les opinions, même religieuses ; elle n'impose pas cette religion obligatoire."]
  ]);
  patch("O093",[
    ["La liberté n'a aucune limite","L'article 4 cite précisément une limite : ne pas nuire à autrui et permettre aux autres d'exercer les mêmes droits."],
    ["Seuls les citoyens français sont libres","Les libertés fondamentales protègent la personne ; elles ne se réduisent pas aux droits électoraux de la citoyenneté française."],
    ["Toute critique est interdite","Une critique licite est protégée par la liberté d'expression ; le désaccord n'est pas en soi une atteinte aux droits d'autrui."]
  ],{hook:"Ma liberté respecte les droits d'autrui"});
  patch("O094",[
    ["La France est une monarchie fédérale","L'article 1 qualifie la France de République indivisible, pas de monarchie fédérale."],
    ["La France reconnaît une religion d'État","Le caractère laïque de la République exclut une religion d'État imposée et protège les croyances."],
    ["La France est gouvernée sans Constitution","La Constitution du 4 octobre 1958 organise précisément les institutions et leurs garanties."]
  ]);
  patch("O095",[
    ["L'immunité pour toute fausse accusation","La liberté de la presse ne supprime pas les règles sur la diffamation ni la responsabilité liée à une accusation illégale."],
    ["Le contrôle obligatoire de chaque article par le Gouvernement","Une autorisation gouvernementale systématique avant publication serait une censure, pas la liberté de la presse."],
    ["Le secret de toutes les décisions publiques","Informer le public est une mission de la presse ; la liberté de publier n'impose pas de cacher toutes les décisions publiques."]
  ]);
  patch("O096",[
    ["Entrer dans tout domicile privé","La liberté de déplacement ne donne pas accès au domicile d'autrui : propriété et vie privée restent protégées."],
    ["Conduire sans permis","Pouvoir circuler ne dispense pas du permis requis pour conduire un véhicule concerné."],
    ["Ignorer les contrôles aux frontières","Les contrôles et conditions légales de franchissement d'une frontière ne disparaissent pas avec cette liberté."]
  ],{explanation:"La liberté de circulation protège les déplacements et le choix légal de résidence ; elle n'annule pas les règles de sécurité routière, de frontière, de séjour ou de propriété."});
  patch("O097",[
    ["Y travailler temporairement","Un travail temporaire ne crée pas, à lui seul, le lien politique et juridique de citoyenneté."],
    ["Y posséder un logement","Être propriétaire est un droit patrimonial ; acheter un logement ne rend pas automatiquement citoyen de l'État."],
    ["Y passer des vacances","Un séjour touristique ne constitue pas une appartenance à la communauté politique de l'État."]
  ]);
  patch("O098",[
    ["Des privilèges accordés uniquement aux élus","Ces droits protègent chaque personne, y compris celles qui n'exercent aucun mandat public."],
    ["Des recommandations sans valeur juridique","Les droits fondamentaux ont des garanties juridiques, notamment constitutionnelles et internationales, et peuvent fonder des recours."],
    ["Des droits réservés aux propriétaires","La possession de biens n'est pas une condition de dignité, de liberté ou de protection fondamentale."]
  ]);
  patch("O099",[
    ["Le droit de grève","La grève concerne l'arrêt collectif du travail pour des revendications ; ce n'est pas la garantie directement visée contre une détention arbitraire."],
    ["Le droit de propriété uniquement","Le droit de propriété protège les biens ; la détention d'une personne relève de sa liberté et de sa sûreté."],
    ["Le droit de vote","Le vote organise la participation électorale ; la protection contre une arrestation arbitraire relève de garanties judiciaires distinctes."]
  ]);
  patch("O100",[
    ["Le Code de la route","Il encadre la circulation et la sécurité routière, pas l'ensemble des principes fondateurs des droits et devoirs civiques."],
    ["Le traité de Maastricht","Signé en 1992, il concerne notamment l'Union européenne ; ce n'est pas le texte fondateur français de 1789 recherché ici."],
    ["La loi de finances annuelle","Elle organise les ressources et dépenses publiques d'une année ; elle ne remplace pas la Déclaration fondamentale des droits."]
  ]);
  patch("O101",[
    ["Le traité de Rome","Le traité de 1957 fonde notamment la Communauté économique européenne ; cette citation est celle de l'article 1 de la Déclaration de 1789."],
    ["Le Code du travail","Il règle les relations professionnelles ; ce n'est pas le texte contenant cette proclamation fondatrice de 1789."],
    ["La Charte olympique","Elle organise les principes du mouvement olympique ; elle n'est pas la Déclaration française des droits de l'homme et du citoyen."]
  ]);
  patch("O102",[
    ["Exprimer pacifiquement un désaccord","Un désaccord exprimé légalement est une liberté ; il ne traite pas en lui-même la personne comme un objet ou de manière dégradante."],
    ["Adhérer à une association","L'adhésion libre à une association licite exerce la liberté associative, sans être en elle-même une atteinte à la dignité."],
    ["Changer de domicile","Choisir légalement un nouveau domicile relève de la liberté de circulation et de résidence, pas d'un traitement dégradant."]
  ]);
  patch("O103",[
    ["Le droit de menacer sans conséquence","Une menace peut être une infraction : exprimer une opinion n'accorde pas une immunité pénale."],
    ["Le droit de diffamer anonymement","L'anonymat ne rend pas la diffamation licite et n'efface pas la responsabilité de son auteur."],
    ["L'obligation d'être d'accord avec le Gouvernement","La liberté d'expression protège aussi la critique licite du gouvernement et le pluralisme des opinions."]
  ]);
  patch("O104",[
    ["Être condamné immédiatement sans juge","Une interpellation n'est pas un verdict ; une condamnation relève d'une juridiction et d'une procédure avec garanties."],
    ["Refuser de connaître le motif de la mesure","La garantie prévue est d'être informé du motif et de ses droits ; refuser d'en prendre connaissance n'est pas le droit procédural recherché ici."],
    ["Être détenu sans aucune limite","Les privations de liberté ont des conditions, des délais et des contrôles légaux ; elles ne sont pas illimitées par simple décision policière."]
  ],{explanation:"Une interpellation ne vaut pas condamnation. En garde à vue, la personne dispose notamment du droit à l'information, à l'assistance d'un avocat, à un examen médical et aux notifications prévues, dans le cadre de la procédure.",hook:"Interpellation et garde à vue : des garanties légales"});
  patch("O105",[
    ["Oui, une religion est obligatoire","La liberté de conscience protège le droit de ne pas croire : aucune religion n'est imposée aux citoyens."],
    ["Oui, la religion est inscrite sur la carte d'identité","La carte nationale d'identité française ne comporte pas de mention générale de la religion."],
    ["Non, mais seuls les fonctionnaires peuvent être athées","L'absence de croyance est libre pour toute personne, pas seulement les agents publics."]
  ]);
  patch("O106",[
    ["13 ans","Ce seuil figure dans les conditions de certaines plateformes ou d'autres cadres nationaux ; ce n'est pas le seuil français de consentement autonome visé ici."],
    ["16 ans","Le RGPD prévoit 16 ans par défaut et permet aux États d'abaisser ce seuil ; la France a retenu 15 ans dans le cadre concerné."],
    ["18 ans","18 ans correspond à la majorité civile française ; elle ne se confond pas avec le seuil de consentement numérique demandé."]
  ],{explanation:"La réponse attendue est 15 ans. L'article 45 de la loi Informatique et Libertés permet, dans le cadre concerné, le consentement autonome du mineur à certains traitements de données pour un service de la société de l'information. La loi du 7 juillet 2023 prévoit aussi un seuil de 15 ans pour l'inscription aux réseaux sociaux, avec des modalités de mise en œuvre à vérifier. Ce n'est ni la majorité civile ni une permission universelle d'accès à tous les services en ligne.",hook:"15 ans dans le cadre numérique concerné ; 18 ans pour la majorité civile"});
  patch("O107",[
    ["Dans une école","Les établissements scolaires font partie des lieux protégés par l'interdiction de fumer ; ce n'est pas le cas autorisé recherché."],
    ["Dans un restaurant fermé","Un restaurant fermé accueillant du public est soumis à l'interdiction ; son caractère commercial ne rend pas le tabac libre."],
    ["Dans un parc pour enfants où l'interdiction s'applique","L'option précise qu'une interdiction s'applique : l'espace extérieur ne suffit donc pas à autoriser le tabac."]
  ]);
  patch("O108",[
    ["Autorisée sur les routes secondaires","Le permis requis reste nécessaire sur les routes secondaires ; éviter les grands axes ne légalise pas la conduite."],
    ["Autorisée si la moto appartient à un proche","La propriété du véhicule et le droit personnel de le conduire sont distincts ; le prêt ne remplace pas le permis."],
    ["Une simple recommandation","Pour une moto nécessitant un permis, l'obligation est légale et son non-respect peut être sanctionné."]
  ]);
  patch("O109",[
    ["S'occuper uniquement de sa famille","L'entraide familiale compte, mais la solidarité concerne aussi la collectivité et les autres personnes en difficulté."],
    ["Refuser les contributions publiques","Impôts et cotisations financent des solidarités collectives ; le refus des contributions dues va à l'encontre de ce devoir."],
    ["Remplacer tous les services sociaux","L'entraide citoyenne complète l'action publique ; elle n'impose pas à chaque personne de remplacer entièrement les services sociaux."]
  ]);
  patch("O110",[
    ["Oui, sans aucune condition","Le droit français interdit de contracter un nouveau mariage tant que le précédent n'est pas dissous."],
    ["Oui, avec l'accord du maire","Le maire ne peut pas autoriser un mariage contraire à cette interdiction légale."],
    ["Oui, si les mariages sont religieux","Des cérémonies religieuses ne créent pas plusieurs mariages civils valables ni une exception à l'interdiction française."]
  ]);
  patch("O111",[
    ["Non, si le prélèvement à la source existe","Le prélèvement collecte l'impôt au fil de l'année ; il ne remplace pas la déclaration annuelle lorsqu'elle est requise."],
    ["Seulement tous les cinq ans","L'obligation concernée est annuelle, pas quinquennale."],
    ["Seulement pour les entreprises","Les particuliers et foyers fiscaux peuvent aussi être soumis à l'obligation de déclaration des revenus."]
  ]);
  patch("O112",[
    ["Non, jamais","La non-assistance à personne en péril peut être une infraction lorsqu'une aide sans risque peut être apportée."],
    ["Oui, même en se mettant gravement en danger","La loi n'exige pas une intervention qui expose gravement soi-même ou autrui ; alerter peut être l'assistance adaptée."],
    ["Seulement pour les médecins","Un non-médecin peut porter assistance, notamment en appelant les secours et en suivant leurs consignes."]
  ],{hook:"Aider sans danger ou appeler les secours"});
  patch("O113",[
    ["Un emploi choisi librement","Le juré est sélectionné et convoqué selon une procédure ; ce n'est pas une offre d'emploi à accepter ou refuser librement."],
    ["Réservé aux avocats","Le jury fait participer des citoyens remplissant les conditions légales, pas seulement des professionnels du droit."],
    ["Interdit aux citoyens ordinaires","La participation de citoyens éligibles constitue précisément le principe du jury d'assises."]
  ]);
  patch("O114",[
    ["16 ans","Un jeune de 16 ans est encore mineur ; cet âge n'autorise pas la vente d'alcool."],
    ["15 ans","15 ans est notamment associé à certains cadres numériques ; la majorité requise pour la vente d'alcool est distincte."],
    ["21 ans","21 ans est utilisé dans d'autres pays, notamment aux États-Unis ; ce n'est pas le seuil français."]
  ],{explanation:"En France, la vente d'alcool aux mineurs de moins de 18 ans est interdite. Les règles relatives à l'offre gratuite ont leur propre champ, notamment les lieux prévus par la loi ; il ne faut pas déduire de cette question une interdiction indistincte de toute offre privée.",hook:"Vente d'alcool : 18 ans"});
  patch("O115",[
    ["Une affaire purement privée","La sécurité routière protège aussi autrui et l'espace public ; les règles sont légalement sanctionnées."],
    ["Autorisé si la route est vide","L'absence apparente d'autres usagers ne supprime pas les obligations du Code de la route."],
    ["Sans conséquence pour les cyclistes et conducteurs","Les usagers concernés, dont cyclistes et conducteurs, doivent respecter les règles applicables et peuvent être sanctionnés."]
  ]);
  patch("O116",[
    ["Un retard à un rendez-vous","Un simple retard ordinaire ne correspond pas à un crime ou délit pour lequel cette peine complémentaire est prévue."],
    ["Une mauvaise note scolaire","Une note est une évaluation pédagogique, pas une condamnation pénale entraînant cette peine."],
    ["Le fait de déménager","Changer légalement de domicile relève de la liberté de résidence et ne provoque pas cette privation."]
  ],{explanation:"Pour certaines infractions, un juge peut prononcer l'interdiction de tout ou partie des droits civiques, civils et de famille lorsque la loi le prévoit. L'étendue et la durée dépendent de la peine : toutes les condamnations ne produisent pas cet effet."});
  patch("O117",[
    ["Résider cinq ans en France sans autre condition","La résidence ne confère pas automatiquement la nationalité française ni une carte nationale d'identité française."],
    ["Être citoyen de n'importe quel pays de l'Union européenne","Un citoyen européen peut avoir un document de son État ; cela ne suffit pas pour obtenir la carte nationale française."],
    ["Avoir un contrat de travail français","Le contrat concerne l'emploi et ne constitue pas une preuve de nationalité française."]
  ]);
  patch("O118",[
    ["Pour empêcher toute critique politique","La critique licite fait partie du pluralisme démocratique ; la suppression générale du désaccord n'est pas cette limitation légitime."],
    ["Parce qu'une opinion déplaît à un voisin","Une contrariété privée ne suffit pas à interdire légalement une opinion."],
    ["Pour interdire toutes les œuvres humoristiques","L'humour n'est pas interdit par principe ; certains abus peuvent être sanctionnés, mais pas toute œuvre indistinctement."]
  ]);
  patch("O119",[
    ["Ignorer la convocation","La convocation régulière impose de répondre ; une dispense doit être demandée et acceptée selon les règles."],
    ["Envoyer un proche à sa place","La sélection est personnelle : un juré ne choisit pas lui-même son remplaçant."],
    ["Choisir lui-même un autre procès","La convocation concerne la session et les obligations fixées ; le juré ne déplace pas librement son service sur un autre procès."]
  ],{hook:"Se présenter ou obtenir une dispense légale"});
  patch("O120",[
    ["16 ans","16 ans peut correspondre à des règles de recensement ou de travail des jeunes ; ce n'est pas l'âge de la majorité civile générale."],
    ["20 ans","Le droit français fixe la majorité civile avant 20 ans ; cet âge n'est pas le seuil légal actuel."],
    ["21 ans","21 ans était l'ancien seuil français, abaissé à 18 ans en 1974 ; il n'est plus applicable comme règle générale."]
  ]);
  patch("O121",[
    ["Adhérer à un parti politique","L'adhésion politique est libre ; elle n'est pas imposée comme devoir de tout citoyen."],
    ["Exercer obligatoirement une religion","La liberté de conscience permet de croire ou de ne pas croire ; la religion n'est pas un devoir civique imposé."],
    ["Devenir fonctionnaire","Travailler dans la fonction publique est un choix de parcours soumis à des conditions, pas une obligation de citoyenneté."]
  ]);
  patch("O122",[
    ["La contravention","La contravention est la catégorie la moins grave de cette classification pénale, en dessous des délits et crimes."],
    ["Le délit","Le délit est plus grave qu'une contravention, mais le crime occupe le niveau supérieur de la classification."],
    ["L'avertissement","L'avertissement n'est pas une des trois catégories pénales de gravité : contravention, délit et crime."]
  ]);
  patch("O123",[
    ["Le droit de tout publier anonymement","Anonymat et publication ne suppriment ni vie privée, ni droits d'auteur, ni règles sur les menaces et le harcèlement."],
    ["Une nationalité obtenue en ligne","La citoyenneté numérique décrit des usages et responsabilités ; elle n'est pas une nouvelle nationalité délivrée par internet."],
    ["L'interdiction d'utiliser internet","Le but est une participation responsable et critique, pas une interdiction générale des outils numériques."]
  ]);
  patch("O124",[
    ["Oublier les conflits passés","Le devoir de mémoire vise à conserver et transmettre le souvenir, notamment celui des victimes, plutôt qu'à l'effacer."],
    ["Apprendre uniquement les dates heureuses","Il concerne aussi les crimes, persécutions et conflits douloureux dont il faut comprendre les enseignements."],
    ["Remplacer le travail des historiens","Mémoire et recherche historique sont complémentaires ; commémorer ne dispense pas d'étudier et vérifier les faits."]
  ]);
  patch("O125",[
    ["Elle perd automatiquement sa nationalité","Une interdiction de droits civiques n'est pas une perte automatique de nationalité : ce sont des mécanismes distincts."],
    ["Elle ne peut plus travailler","La peine décrite n'est pas une interdiction générale de toute activité professionnelle ; certaines fonctions peuvent avoir leurs propres règles."],
    ["Elle doit quitter tout logement","La privation du vote et de l'éligibilité n'implique pas une expulsion automatique de tous les logements."]
  ]);

  // SOCIÉTÉ
  patch("O202",[
    ["À la banque des parents","La banque peut avoir besoin d'un justificatif familial, mais elle n'établit pas l'acte de naissance."],
    ["Au commissariat du domicile","La déclaration ordinaire relève de l'état civil de la commune de naissance, pas du commissariat du domicile."],
    ["À l'employeur","Informer un employeur pour un congé ne remplace pas la déclaration officielle à l'état civil."]
  ]);
  patch("O203",[
    ["Abattre un mur porteur","Cela transforme la structure et peut mettre l'immeuble en danger ; ce n'est pas un simple aménagement décoratif libre."],
    ["Transformer une chambre en commerce","Changer l'usage du lieu n'est pas une simple décoration ; bail, accords et règles applicables doivent être respectés."],
    ["Modifier la structure de l'immeuble","Une transformation structurelle nécessite les accords et formalités concernés ; le droit de décorer ne l'autorise pas librement."]
  ]);
  patch("O204",[
    ["Une cérémonie religieuse seule","Elle ne remplace pas le mariage civil pour produire les effets du mariage en France."],
    ["Une cérémonie familiale privée","Une fête familiale ne constitue pas une célébration par l'officier d'état civil."],
    ["Une promesse orale sans formalité","Promettre de se marier ne réalise pas les formalités ni la célébration civile nécessaires."]
  ]);
  patch("O205",[
    ["Est libre pendant dix minutes","Une courte durée ne crée pas de dispense : la place reste réservée aux personnes disposant du droit requis."],
    ["Est autorisé la nuit","L'horaire ne supprime pas la réservation ni l'obligation de disposer du droit requis."],
    ["Dépend uniquement de l'accord d'un voisin","Un voisin ne peut pas accorder une dérogation générale à une réservation réglementaire."]
  ],{explanation:"Un stationnement sans le droit requis sur une place réservée peut être sanctionné par une amende et une mise en fourrière. La carte mobilité inclusion avec mention stationnement, ou une carte admise, doit être utilisée selon les règles."});
  patch("O206",[
    ["L'abandonner sur le trottoir","Un dépôt sauvage n'est pas une collecte autorisée ; suivre les modalités de reprise ou d'enlèvement prévues localement."],
    ["La jeter dans une rivière","Cela abandonne un déchet et pollue l'environnement au lieu de rejoindre une filière adaptée."],
    ["La brûler dans un parc","Brûler un appareil dans un espace public crée des risques et ne constitue pas un traitement légal des déchets électriques."]
  ],{hook:"Réparer, faire reprendre ou recycler"});
  patch("O207",[
    ["Seulement si les parents sont mariés","La situation matrimoniale ne dispense pas de déclarer la naissance d'un enfant."],
    ["Seulement si l'enfant est français","Une naissance en France doit être déclarée indépendamment de la nationalité de l'enfant ou des parents."],
    ["Uniquement pour un premier enfant","Chaque naissance doit être déclarée ; les déclarations des aînés ne couvrent pas les enfants suivants."]
  ]);
  patch("O208",[
    ["Dans l'année","Ce délai est trop long : la déclaration ordinaire doit intervenir dans les jours suivant la naissance, pas à tout moment de l'année."],
    ["À son entrée à l'école","L'inscription scolaire arrive bien après la naissance et ne remplace pas l'état civil."],
    ["À sa majorité","Attendre 18 ans méconnaît le délai et prive l'enfant d'un acte essentiel pour de nombreux droits."]
  ]);
  patch("O209",[
    ["Le 15","Le 15 joint le SAMU pour une régulation médicale ; ce n'est pas le numéro direct général de Police secours."],
    ["Le 18","Le 18 joint les sapeurs-pompiers, notamment pour incendies et secours, pas directement Police secours."],
    ["Le 114 uniquement pour tous","Le 114 est un dispositif accessible d'urgence, notamment pour les personnes sourdes ou malentendantes ; ce n'est pas le seul numéro pour tous les appels policiers."]
  ]);
  patch("O210",[
    ["Le 17","Le 17 permet de joindre Police secours ou la gendarmerie ; le SAMU a un numéro direct distinct."],
    ["Le 18","Le 18 joint les sapeurs-pompiers ; ce n'est pas le numéro direct du SAMU demandé ici."],
    ["Le 36 46","Le 36 46 est un contact de l'assurance maladie pour des démarches ; ce n'est pas un numéro de secours médical immédiat."]
  ],{explanation:"Le 15 permet de joindre le SAMU pour une urgence ou une régulation médicale. Le 112 est également un numéro général d'urgence utilisable dans l'Union européenne."});
  patch("O211",[
    ["Auprès du Sénat","Le Sénat participe au travail parlementaire ; il ne gère pas l'inscription individuelle des enfants à l'école primaire."],
    ["Auprès de la Banque de France","Elle a des missions monétaires et financières, pas l'inscription scolaire."],
    ["Auprès du tribunal","L'inscription ordinaire à l'école publique ne constitue pas une procédure judiciaire."]
  ]);
  patch("O212",[
    ["Toujours la mère seule","Le divorce n'attribue pas automatiquement et exclusivement l'autorité parentale à la mère."],
    ["Toujours le père seul","Le divorce n'attribue pas automatiquement et exclusivement l'autorité parentale au père."],
    ["Le maire","Le maire n'exerce pas à la place des parents leur responsabilité de protection, d'éducation et d'entretien."]
  ]);
  patch("O213",[
    ["L'allocation de rentrée scolaire","Elle aide aux dépenses liées à la rentrée des enfants ; ce n'est pas le dispositif de financement d'un avocat."],
    ["La prime d'activité","Elle complète certains revenus professionnels ; elle ne remplace pas l'aide dédiée aux frais de justice."],
    ["Le chèque énergie","Il aide à certaines dépenses d'énergie, pas à la prise en charge des honoraires et frais de justice."]
  ],{explanation:"L'aide juridictionnelle peut prendre en charge tout ou partie des frais de justice et d'avocat, selon les ressources et les autres conditions légales. Elle ne garantit pas le résultat du procès.",hook:"Frais de justice : aide juridictionnelle"});
  patch("O214",[
    ["Uniquement le maire","Le maire célèbre le mariage civil mais ne dispose pas seul du droit de demander le divorce des époux."],
    ["Uniquement les parents des époux","Les parents ne choisissent pas à la place de leurs enfants mariés de demander la dissolution du couple."],
    ["Uniquement le procureur","Les époux peuvent demander le divorce selon les procédures prévues ; ce droit n'est pas réservé au procureur."]
  ]);
  patch("O215",[
    ["Auprès de France Travail","France Travail accompagne l'emploi et la formation ; il ne gère pas les remboursements ordinaires de l'assurance maladie."],
    ["Auprès de la mairie uniquement","La mairie peut orienter ou aider dans certaines démarches, mais elle n'est pas le régime chargé du remboursement des soins."],
    ["Auprès du tribunal de commerce","Ce tribunal traite principalement des litiges commerciaux, pas les demandes ordinaires de remboursement médical."]
  ]);
  patch("O216",[
    ["Est interdite aux personnes non mariées","Le mariage n'est pas une condition d'accès à la contraception."],
    ["Nécessite l'autorisation du maire","La contraception relève du choix personnel et des règles de santé, pas d'une autorisation municipale."],
    ["Est obligatoire pour tous","Elle est un choix : le droit d'y accéder n'impose pas à toute personne de l'utiliser."]
  ]);
  patch("O217",[
    ["À voter","La carte Vitale ne donne pas le droit de vote et n'est pas une carte électorale."],
    ["À conduire","Elle ne prouve pas la capacité légale à conduire ; un permis approprié est nécessaire pour les véhicules concernés."],
    ["À prouver la nationalité française","Des personnes étrangères assurées ont aussi une carte Vitale ; elle n'est pas une preuve de nationalité."]
  ]);
  patch("O218",[
    ["À remplacer l'état civil","Une complémentaire santé ne délivre ni ne remplace les actes de naissance, mariage ou décès."],
    ["À verser les salaires","Le paiement du salaire relève de la relation de travail, pas de la fonction de remboursement de la mutuelle."],
    ["À délivrer le permis de conduire","Le permis est une autorisation de conduite délivrée dans un autre cadre administratif."]
  ]);
  patch("O219",[
    ["Un impôt sur les médicaments","Le tiers payant concerne le paiement direct de frais couverts au professionnel, pas une taxe sur les produits."],
    ["Un prêt bancaire","Le patient ne reçoit pas un crédit à rembourser : l'organisme paie directement la part prise en charge."],
    ["Une consultation sans professionnel","La modalité de paiement ne supprime pas le professionnel ni l'acte de soin."]
  ],{explanation:"Avec le tiers payant, l'organisme d'assurance maladie ou complémentaire règle directement au professionnel tout ou partie des frais couverts. Le patient n'avance pas cette part ; un éventuel reste à charge est distinct."});
  patch("O220",[
    ["Toujours facultative","Pour les personnes relevant du régime obligatoire, l'affiliation n'est pas une simple option libre ; les conditions du régime doivent être respectées."],
    ["Réservée aux citoyens français","Les personnes étrangères peuvent aussi relever de l'assurance maladie selon leur activité, résidence et situation légale."],
    ["Automatiquement interdite aux étudiants","Être étudiant n'exclut pas l'assurance maladie ; les conditions et le régime applicables doivent être examinés."]
  ],{explanation:"L'affiliation à l'assurance maladie concerne les personnes relevant d'un régime obligatoire, notamment au titre du travail ou d'une résidence stable et régulière selon les règles. Régime, justificatifs et éventuelles situations particulières doivent être vérifiés."});
  patch("O221",[
    ["Non, il est toujours interdit","L'interruption volontaire de grossesse est autorisée dans les conditions et délais légaux ; sa liberté est constitutionnellement garantie."],
    ["Oui, uniquement avec l'autorisation du maire","L'IVG suit un parcours médical et légal ; le maire ne l'autorise pas."],
    ["Seulement pour les personnes mariées","Le statut matrimonial n'est pas une condition d'accès à l'IVG."]
  ]);
  patch("O222",[
    ["Autorisé pour une courte période","Une courte durée de travail salarié n'accorde pas une exemption générale aux obligations de déclaration."],
    ["Obligatoire pour un premier emploi","Un premier emploi doit aussi respecter les obligations légales ; le non-déclaré n'est pas une étape obligatoire."],
    ["Une décision privée sans règle","Employeur et salarié ne peuvent écarter librement les obligations d'emploi et de cotisations par un arrangement privé."]
  ],{explanation:"Le travail dissimulé, notamment l'absence de déclaration ou la minoration volontaire d'heures, est interdit. L'employeur peut être sanctionné et devoir régulariser. Le salarié ne perd pas tout recours : il peut demander à faire reconnaître le travail et les droits applicables. D'éventuelles autres responsabilités dépendent des faits, et ne sont pas automatiques pour toute victime."});
  patch("O223",[
    ["Le salaire moyen de tous les cadres","Un minimum légal n'est pas une moyenne statistique des salaires d'une catégorie professionnelle."],
    ["Une allocation familiale","Les prestations familiales concernent la situation familiale ; le SMIC est un minimum de rémunération du travail."],
    ["Une cotisation de santé","Une cotisation finance une protection ; le SMIC est le salaire horaire minimal légal de référence."]
  ]);
  patch("O224",[
    ["Attendre obligatoirement une proposition de la mairie","Il n'existe pas cette obligation d'attente ; la recherche peut être préparée et menée par plusieurs canaux."],
    ["Payer un employeur","Payer pour obtenir un recrutement n'est pas une démarche générale normale de recherche d'emploi et peut signaler une fraude."],
    ["Créer un faux diplôme","Falsifier une qualification ne prépare pas une candidature légale et peut avoir des conséquences juridiques et professionnelles."]
  ],{explanation:"Il est utile de préparer un CV, les candidatures et les canaux de recherche. France Travail peut accompagner : on peut demander ou vérifier son inscription selon sa situation, certaines inscriptions étant automatiques. Chercher un emploi ne signifie pas qu'une inscription volontaire soit toujours la première étape obligatoire pour toute personne."});
  patch("O225",[
    ["30 heures","30 heures peut être une durée contractuelle à temps partiel ; ce n'est pas la durée légale générale de référence du temps complet."],
    ["40 heures sans exception","Un contrat ou des heures supplémentaires peuvent conduire à 40 heures, mais ce n'est pas la référence légale générale ni une règle sans exception."],
    ["48 heures","48 heures est notamment un plafond hebdomadaire général hors dérogations ; il ne faut pas le confondre avec la durée légale de référence."]
  ]);
  patch("O226",[
    ["Uniquement la mère","Le père peut également demander ce congé s'il remplit les conditions ; il n'est pas réservé à la mère."],
    ["Uniquement un fonctionnaire","Des salariés du secteur privé peuvent aussi être concernés ; le congé n'est pas réservé à la fonction publique."],
    ["Uniquement le grand-parent","Ce droit de congé parental vise les parents éligibles, pas exclusivement les grands-parents."]
  ]);
  patch("O227",[
    ["Non, jamais","La nationalité étrangère n'interdit pas universellement la création d'entreprise : le statut et l'activité peuvent l'autoriser."],
    ["Oui, sans aucune formalité ni titre adapté","La régularité seule ne dispense pas de vérifier le droit d'exercer, le titre lorsqu'il est requis et les formalités de l'activité."],
    ["Seulement après naturalisation","Devenir Français n'est pas une condition universelle préalable à une activité entrepreneuriale."]
  ]);
  patch("O228",[
    ["Non","Les femmes ont la capacité de créer une entreprise ; le sexe ne constitue pas cette interdiction générale."],
    ["Oui, seulement avec l'accord de son conjoint","Une femme majeure n'a pas besoin d'une autorisation générale de son conjoint pour exercer sa capacité professionnelle."],
    ["Uniquement dans certains secteurs féminins","Le droit ne réserve pas les femmes à des secteurs qualifiés de féminins ; les règles professionnelles s'appliquent sans cette exclusion."]
  ]);
  patch("O229",[
    ["Le Code de la route uniquement","Il concerne la circulation routière et ne remplace pas les règles générales de la relation de travail."],
    ["Le règlement de la mairie uniquement","Un règlement municipal n'est pas, à lui seul, le cadre général des contrats de travail."],
    ["Les usages familiaux","Une coutume familiale ne peut se substituer aux lois, accords collectifs et obligations contractuelles du travail."]
  ]);
  patch("O230",[
    ["Les divorces","Le divorce relève des procédures familiales compétentes, pas de la juridiction des litiges du travail privé."],
    ["Les crimes","Les crimes relèvent des juridictions pénales compétentes ; les prud'hommes ne sont pas une cour criminelle."],
    ["Les élections nationales","Le contentieux électoral a ses autorités et juridictions ; ce n'est pas un litige individuel de contrat de travail."]
  ]);
  patch("O231",[
    ["Uniquement les dirigeants d'entreprise","La liberté syndicale protège les travailleurs ; elle n'est pas réservée aux dirigeants."],
    ["Uniquement les citoyens français","La nationalité étrangère ne supprime pas le droit des travailleurs à une adhésion syndicale légale."],
    ["Personne dans le secteur privé","Les salariés du privé disposent aussi de la liberté syndicale ; elle n'est pas exclusive au secteur public."]
  ]);
  patch("O232",[
    ["Oui, sans justification","La grossesse ne peut justifier le licenciement ; une absence de justification ne le rend pas licite."],
    ["Oui, si elle travaille à temps plein","Le temps plein n'annule pas la protection contre la discrimination liée à la grossesse."],
    ["Oui, avec l'accord de ses collègues","Les collègues ne peuvent autoriser un licenciement discriminatoire contraire à la loi."]
  ]);
  patch("O233",[
    ["0 à 3 ans","Cette période précède le début général de l'instruction obligatoire ; elle ne décrit pas son étendue."],
    ["6 à 14 ans","Le début général est désormais 3 ans et la fin est 16 ans : cette proposition se trompe sur les deux limites."],
    ["16 à 25 ans","16 à 18 ans correspond à une obligation de formation distincte ; 25 ans n'est pas la fin générale de l'instruction obligatoire."]
  ],{explanation:"L'instruction est obligatoire à partir de la rentrée scolaire de l'année civile des trois ans et jusqu'à 16 ans, pour les enfants vivant en France. Elle peut être organisée à l'école ou, dans le cadre autorisé, en famille. Une obligation de formation distincte existe ensuite de 16 à 18 ans.",hook:"Instruction obligatoire : 3–16 ans"});
  patch("O234",[
    ["Aucune sanction","Un manquement persistant après les démarches et mises en demeure prévues peut constituer une infraction pénale."],
    ["Une simple taxe annuelle uniquement","La sanction prévue n'est pas une taxe permettant d'acheter le droit de ne pas instruire son enfant."],
    ["La perte automatique de la nationalité","Le manquement ne déclenche pas cette perte automatique ; la peine évoquée est pénale et suit une procédure."]
  ]);
  patch("O235",[
    ["Un droit de propriété sur l'enfant","L'enfant est une personne qui a des droits ; l'autorité parentale n'en fait pas un bien appartenant aux parents."],
    ["Le pouvoir de refuser toute scolarité","Les parents ont une obligation d'instruction ; l'autorité parentale ne permet pas de l'écarter librement."],
    ["Une responsabilité réservée à la mère","Les deux parents peuvent exercer cette responsabilité selon les règles ; elle n'est pas réservée au sexe féminin."]
  ]);
  patch("O236",[
    ["Le refus habituel de se lever","Une préférence ou un refus habituel n'est pas un motif légitime dispensant d'assiduité."],
    ["Des vacances prises hors calendrier sans autorisation","Des vacances personnelles ne deviennent pas automatiquement une absence scolaire autorisée."],
    ["Une opposition générale aux matières enseignées","Le désaccord avec les matières ne dispense pas librement de l'instruction et de l'assiduité applicables."]
  ]);
  patch("O237",[
    ["Jusqu'à 10 ans","L'obligation ne s'arrête pas à l'école élémentaire ; elle continue normalement jusqu'à 16 ans."],
    ["Jusqu'à 14 ans","14 ans est avant la fin générale de l'instruction obligatoire ; ce n'est pas le seuil actuel."],
    ["Jusqu'à 21 ans","Les études peuvent se poursuivre au-delà de 16 ans, mais cela ne rend pas l'instruction généralement obligatoire jusqu'à 21 ans."]
  ],{explanation:"L'obligation d'instruction se termine à 16 ans. Une obligation de formation distincte s'applique entre 16 et 18 ans, avec différents parcours possibles.",hook:"Instruction jusqu'à 16 ans ; formation ensuite jusqu'à 18 ans"});
  patch("O238",[
    ["À la naissance","Les besoins éducatifs existent dès la petite enfance, mais l'obligation légale d'instruction ne commence pas à la naissance."],
    ["À 6 ans","6 ans était l'ancien âge de début ; la règle générale a été abaissée à 3 ans en 2019."],
    ["À 10 ans","Attendre 10 ans méconnaîtrait plusieurs années d'instruction obligatoire dès la maternelle."]
  ]);
  patch("O239",[
    ["Les universités","L'université relève de l'enseignement supérieur ; elle ne suit pas directement l'école élémentaire dans le parcours ordinaire."],
    ["Les crèches","Les crèches accueillent les jeunes enfants avant ou en complément des premiers temps scolaires ; elles ne succèdent pas à l'élémentaire."],
    ["Les écoles maternelles","La maternelle précède l'école élémentaire, et non l'inverse."]
  ]);
  patch("O240",[
    ["Choisir les notes de son enfant","Les parents suivent et peuvent échanger sur l'évaluation, mais n'attribuent pas eux-mêmes les notes."],
    ["Refuser toutes les règles de l'établissement","La participation ne dispense pas de l'assiduité et des règles légales du fonctionnement scolaire."],
    ["Remplacer seul le chef d'établissement","La représentation parentale ne confère pas un pouvoir individuel de nommer ou remplacer le chef."]
  ]);
  patch("O241",[
    ["Aucune scolarisation avant de parler parfaitement","La maîtrise préalable du français n'est pas une condition générale d'accès à l'instruction ; l'école aide à l'apprendre."],
    ["Une exclusion automatique","L'arrivée avec une autre langue ne supprime pas le droit à la scolarisation."],
    ["Uniquement des cours privés payants","Un accompagnement linguistique adapté peut être organisé dans le système scolaire public ; il n'est pas réservé au privé payant."]
  ],{hook:"Inscrire et accompagner l'apprentissage du français"});
  patch("O242",[
    ["Ils sont toujours exclus des écoles ordinaires","L'inclusion scolaire et les adaptations visent au contraire une scolarisation en milieu ordinaire lorsque c'est possible."],
    ["Seuls les établissements privés peuvent les accueillir","L'école publique a aussi une mission d'accueil et d'inclusion des élèves handicapés."],
    ["Les parents doivent assurer seuls tous les cours","Les familles ne remplacent pas seules le système éducatif : adaptations, accompagnements et dispositifs peuvent être mobilisés."]
  ]);
  patch("O243",[
    ["3 jours au total","Les trois jours correspondent au congé de naissance distinct ; ils ne constituent pas la totalité du congé de paternité et d'accueil."],
    ["10 jours","Le congé de paternité prévu depuis juillet 2021 est plus long pour une naissance simple ; dix jours n'est pas sa durée générale."],
    ["60 jours dans tous les cas","Le congé de paternité n'a pas une durée uniforme de soixante jours ; d'autres congés éventuels sont des dispositifs distincts."]
  ],{explanation:"Le congé de paternité et d'accueil de l'enfant est de 25 jours calendaires pour une naissance simple et de 32 jours calendaires pour des naissances multiples. Il s'ajoute au congé de naissance, normalement de trois jours ouvrables. Il faut le distinguer des autres congés parentaux.",hook:"Paternité : 25 jours calendaires pour une naissance simple"});
  patch("O244",[
    ["Oui, sans limite","L'autorité parentale doit s'exercer sans violences physiques ou psychologiques ; elle ne donne pas un droit illimité de punir physiquement."],
    ["Oui, uniquement à l'école","Le lieu scolaire ne crée pas une exception autorisant les châtiments corporels."],
    ["Oui, si un voisin l'autorise","Un voisin ne peut autoriser une violence contraire aux droits de l'enfant et à la loi."]
  ]);

  // MISES EN SITUATION
  patch("S025",[
    ["Partir sans rien faire","Si vous pouvez alerter sans risque, abandonner la personne sans assistance peut constituer une non-assistance à personne en péril."],
    ["La déplacer de force dans tous les cas","Déplacer systématiquement une personne inconsciente peut aggraver une blessure ; agir selon le danger et les consignes des secours."],
    ["Publier d'abord une vidéo","Publier retarde l'aide et expose la vie privée ; l'alerte et la protection sont prioritaires."]
  ]);
  patch("S026",[
    ["Jeter la convocation","La convocation régulière impose de répondre ; la jeter ne constitue pas une dispense acceptée."],
    ["Envoyer un ami à votre place","La sélection du juré est personnelle et ne permet pas de choisir un remplaçant privé."],
    ["Choisir de répondre après le procès","Vous ne pouvez pas décaler librement votre obligation au-delà de la session prévue ; demander une dispense suit une procédure."]
  ]);
  patch("S027",[
    ["Non, jamais","Le prélèvement à la source ne remplace pas la déclaration annuelle demandée ; celle-ci permet notamment de régulariser la situation."],
    ["Seulement si vous êtes propriétaire","La déclaration des revenus ne dépend pas uniquement de la propriété d'un logement."],
    ["Seulement après 65 ans","Il n'existe pas ce seuil d'âge général pour l'obligation de déclaration des revenus."]
  ]);
  patch("S028",[
    ["Internet autorise toutes les menaces","Le droit pénal s'applique aussi en ligne ; un réseau social ne constitue pas une zone d'immunité."],
    ["Il suffit d'effacer le message après","L'effacement ne rend pas rétroactivement le message licite et des preuves peuvent déjà avoir été conservées."],
    ["La loi s'applique seulement aux journalistes","Les règles sur les menaces concernent leurs auteurs, pas uniquement les professionnels de l'information."]
  ]);
  patch("S029",[
    ["Une règle normale de commerce","La liberté commerciale n'autorise pas un refus de service fondé uniquement sur l'origine, qui est un critère protégé."],
    ["Un exercice du droit de vote","Refuser un service dans un restaurant n'est pas une participation à un scrutin."],
    ["Une mesure de laïcité","La laïcité ne permet pas d'écarter une personne en raison de son origine ; elle protège liberté de conscience et égalité."]
  ]);
  patch("S030",[
    ["Oui, après 20 heures","L'interdiction dans la salle fermée ne disparaît pas à 20 heures."],
    ["Oui, si elle ouvre une fenêtre","Ouvrir une fenêtre ne transforme pas la salle en lieu où fumer est autorisé."],
    ["Oui, si elle est majeure","Être majeur ne dispense pas de respecter l'interdiction de fumer dans les lieux concernés."]
  ]);
  patch("S031",[
    ["Conduire seulement le dimanche","Le jour de la semaine ne supprime pas l'obligation de détenir le permis approprié."],
    ["Utiliser le permis d'un proche","Le permis est personnel ; la qualification d'un proche ne vous donne pas le droit de conduire à sa place."],
    ["Éviter uniquement les autoroutes","L'obligation s'applique aussi sur les autres voies ; éviter un type de route ne remplace pas le permis."]
  ],{hook:"Obtenir d'abord le permis requis"});
  patch("S032",[
    ["Oui, si les deux conjoints acceptent","L'accord privé des personnes ne supprime pas l'interdiction de contracter un second mariage civil avant dissolution du premier."],
    ["Oui, hors de Paris","La règle ne se limite pas à Paris ; elle appartient au droit français du mariage."],
    ["Oui, avec une déclaration fiscale","Une déclaration d'impôt ne dissout pas le mariage et ne remplace pas les conditions du mariage civil."]
  ]);
  patch("S033",[
    ["Oui, avec une carte de transport","Une carte de transport n'est pas une autorisation d'achat d'alcool pour un mineur."],
    ["Oui, si le jeune travaille","Travailler à 16 ans ne rend pas majeur pour la vente d'alcool."],
    ["Oui, avant 18 heures","Le seuil porte sur l'âge, pas l'heure : la vente aux mineurs reste interdite avant 18 heures."]
  ]);
  patch("S034",[
    ["La demande doit toujours être refusée","L'assistance d'un avocat est un droit en garde à vue ; les restrictions éventuelles sont encadrées, pas systématiques."],
    ["Elle doit être condamnée avant","Les droits de la défense existent pendant la procédure avant le jugement, pas seulement après une condamnation."],
    ["Seule sa famille peut demander","La personne gardée à vue peut elle-même demander un avocat selon la procédure."]
  ],{explanation:"L'assistance d'un avocat est un droit fondamental en garde à vue. L'information, l'accès à l'avocat et les éventuelles exceptions ou modalités sont encadrés par les règles de procédure.",hook:"En garde à vue : droit à l'avocat"});
  patch("S035",[
    ["Répondre par des menaces","Menacer à son tour peut créer de nouvelles violences ou infractions et ne remplace pas une démarche de protection."],
    ["Partager les messages plus largement","La diffusion peut prolonger l'humiliation ; conserver une preuve pour le signalement n'est pas propager les contenus."],
    ["Ne jamais demander d'aide","Le soutien d'un adulte, de l'établissement ou du 3018 peut contribuer à mettre fin aux violences et à protéger l'élève."]
  ],{explanation:"Des messages humiliants répétés peuvent constituer un cyberharcèlement. Conserver les preuves, en parler à un adulte de confiance et signaler les faits est utile ; le 3018 peut accompagner.",hook:"Conserver les preuves, demander de l'aide, signaler"});
  patch("S036",[
    ["Le droit de propriété","La propriété concerne les biens ; elle ne désigne pas un arrêt collectif de travail pour défendre des salaires."],
    ["Le droit de grâce","La grâce concerne une mesure relative à une peine ; elle n'est pas une action revendicative de salariés."],
    ["Le droit de dissolution","La dissolution concerne notamment l'Assemblée nationale ; elle ne désigne pas l'arrêt collectif du travail."]
  ]);
  patch("S049",[
    ["Le 17 uniquement","Le 17 concerne Police secours ; il ne doit pas être l'unique contact choisi pour un malaise médical grave."],
    ["Le 36 46 uniquement","Le 36 46 sert aux démarches de l'assurance maladie et ne remplace pas les secours médicaux immédiats."],
    ["Le numéro de la mairie","Une mairie n'est pas le service de régulation d'une urgence médicale ; cet appel peut retarder les secours."]
  ],{explanation:"Le 15 permet de joindre le SAMU ; le 112 est un numéro général d'urgence européen. Décrire l'état de la personne, le lieu et suivre les instructions aide à organiser les secours."});
  patch("S050",[
    ["Attendre son entrée à l'école","L'état civil doit être établi dans les jours suivant la naissance ; attendre l'école dépasse le délai."],
    ["Demander un permis de conduire","Le permis n'est pas une démarche d'état civil à la naissance."],
    ["L'inscrire sur une liste électorale","Un nouveau-né n'a pas le droit de vote ; cette inscription ne remplace pas l'acte de naissance."]
  ]);
  patch("S051",[
    ["Oui pour tout changement de couleur","Un simple aménagement décoratif ne demande pas normalement cette autorisation générale, tant qu'il ne transforme pas les lieux."],
    ["Non, même pour abattre un mur","Abattre un mur est une transformation, pas une décoration ordinaire ; les accords et règles de sécurité doivent être respectés."],
    ["Oui, et celle du préfet","Repeindre simplement un mur n'exige pas normalement cette double autorisation du propriétaire et du préfet."]
  ]);
  patch("S052",[
    ["La déposer sur le trottoir sans rendez-vous","Un dépôt non conforme aux consignes locales peut être un dépôt sauvage ; une collecte organisée n'est pas un abandon libre."],
    ["La jeter dans la nature","Cela pollue et contourne la filière prévue pour les déchets électriques."],
    ["La laisser dans les parties communes","Encombrer les espaces partagés ne constitue pas une remise à une filière de collecte et peut gêner ou créer un risque."]
  ]);
  patch("S053",[
    ["Oui, automatiquement","La grossesse ne déclenche pas un droit automatique de licencier ; elle fait au contraire l'objet de protections."],
    ["Oui, si elle n'est pas française","La protection contre la discrimination liée à la grossesse ne dépend pas de la nationalité française."],
    ["Oui, sans procédure","L'absence de procédure ne rend pas licite le motif discriminatoire ; la grossesse ne peut justifier ce licenciement."]
  ]);
  patch("S054",[
    ["Le Conseil constitutionnel","Il contrôle notamment la constitutionnalité des lois ; il ne juge pas ordinairement un salaire impayé lié à un contrat privé."],
    ["La cour d'assises","Elle traite les affaires criminelles relevant de sa compétence, pas le litige salarial individuel décrit."],
    ["Le Parlement européen","C'est une institution législative européenne, pas la juridiction individuelle du contrat de travail français."]
  ]);
  patch("S055",[
    ["Attendre qu'il apprenne seul avant l'école","La maîtrise préalable du français n'est pas une condition générale ; à 4 ans, l'enfant est déjà concerné par l'instruction obligatoire."],
    ["Refuser définitivement sa scolarisation","La langue de l'enfant ne lui retire pas le droit à l'instruction."],
    ["L'envoyer obligatoirement à l'étranger","L'enfant peut être accueilli et accompagné en France ; sa langue n'impose pas ce départ."]
  ]);
  patch("S056",[
    ["Toujours le parent le plus âgé","L'âge comparé des parents n'attribue pas automatiquement toute l'autorité à l'un d'eux."],
    ["Le maire","Les missions municipales d'état civil ne font pas du maire le titulaire de l'autorité parentale."],
    ["L'enseignant seul","L'enseignant a un rôle éducatif professionnel, mais ne remplace pas les parents pour toutes leurs décisions parentales."]
  ]);
  patch("S057",[
    ["À prouver que vous êtes français","Une carte Vitale peut appartenir à une personne étrangère assurée ; elle ne prouve pas la nationalité."],
    ["À retirer de l'argent","Ce n'est pas une carte bancaire ni un moyen de retrait."],
    ["À voter","Elle n'est pas un titre électoral et ne confère pas le droit de vote."]
  ]);
  patch("S058",[
    ["La consultation devient illégale","Le tiers payant est une modalité légale de paiement ; il ne rend pas le soin illicite."],
    ["Vous perdez votre assurance","Le paiement direct utilise la prise en charge disponible et ne supprime pas l'affiliation."],
    ["Vous payez obligatoirement deux fois","La part couverte est versée directement au professionnel ; il ne s'agit pas d'une obligation de la payer deux fois."]
  ],{explanation:"L'organisme d'assurance maladie ou complémentaire paie directement au professionnel la part couverte. Le patient n'avance pas cette part ; cela ne garantit pas l'absence de tout reste à charge.",hook:"Tiers payant : pas d'avance de la part couverte"});
  patch("S059",[
    ["Oui, si le moteur reste allumé","Un moteur allumé ne donne pas le droit requis pour occuper une place réservée."],
    ["Oui, la nuit","La réservation ne disparaît pas parce qu'il fait nuit."],
    ["Oui, si le parking est presque vide","La disponibilité d'autres places ne supprime pas les besoins et le droit réservé à cette place."]
  ]);
  patch("S060",[
    ["L'autorisation du mari est toujours obligatoire","Une femme majeure dispose de sa capacité juridique ; elle n'a pas besoin de cette autorisation conjugale générale."],
    ["Les femmes ne peuvent pas être entrepreneures","Les femmes ont le droit de créer et diriger une entreprise ; une interdiction générale fondée sur le sexe serait contraire à l'égalité."],
    ["Seules les femmes célibataires peuvent le faire","Le mariage n'enlève pas la capacité professionnelle d'une femme ; le droit n'est pas réservé aux célibataires."]
  ]);

  const lessons = [
    {
      id:"civic-duties",
      title:"Devoirs civiques et respect des lois",
      body:[
        "La solidarité inclut la contribution aux services publics et à la protection sociale et l'aide aux personnes en difficulté. Le Code de la route, les exigences de permis et les déclarations fiscales requises sont des obligations légales, pas seulement des conseils facultatifs.",
        "Pour certaines infractions, un juge peut interdire tout ou partie des droits civiques, civils et de famille dans les conditions légales. L'étendue et la durée dépendent de la peine. Une interdiction du vote et de l'éligibilité ne supprime pas automatiquement la nationalité ni toute activité professionnelle."
      ]
    },
    {
      id:"digital-civic",
      facts:[
        ["Seuil numérique","15 ans dans les cadres légaux concernés ; ce n'est pas la majorité civile"],
        ["Expression en ligne","Soumise au droit français"],
        ["Données personnelles","À protéger et utiliser de façon responsable"],
        ["Harcèlement","Illégal en ligne comme hors ligne"],
        ["Sources","Vérifier leur fiabilité avant de partager"],
        ["Sécurité","Mots de passe forts et uniques ; vigilance"]
      ],
      body:[
        "La citoyenneté numérique signifie participer en ligne de manière responsable : respecter les autres, protéger les données personnelles, vérifier les informations et signaler les contenus illégaux. L'anonymat ne rend pas licites les menaces, la diffamation ou le harcèlement.",
        "En matière de données, le droit français retient 15 ans pour le consentement autonome du mineur dans le cadre prévu par la loi Informatique et Libertés. La loi du 7 juillet 2023 prévoit aussi un seuil de 15 ans pour l'inscription aux réseaux sociaux, avec des modalités de mise en œuvre à vérifier. Ces cadres ne créent pas une permission universelle d'accès à tous les sites et ne changent pas la majorité civile à 18 ans."
      ]
    },
    {
      id:"school",
      facts:[
        ["Instruction","Obligatoire de 3 à 16 ans"],
        ["Après l'école primaire","Collège"],
        ["Élèves allophones nouvellement arrivés","Accompagnement linguistique adapté, notamment en UPE2A"],
        ["Handicap","Droit à une scolarité inclusive et à des aménagements"],
        ["Inscription à l'école primaire publique","Commence auprès de la mairie"],
        ["Rôle des parents","Suivre la scolarité, élire leurs représentants et participer"]
      ]
    },
    {
      id:"housing-environment",
      body:[
        "Un locataire peut repeindre ou apporter des aménagements décoratifs sans transformer les lieux, mais une transformation nécessite les accords et règles applicables. Les appareils électriques usagés rejoignent une filière de réparation, de reprise ou de collecte, pas un dépôt sauvage.",
        "Une place réservée aux personnes handicapées ne peut être utilisée qu'avec le droit requis, notamment une carte mobilité inclusion avec mention stationnement ou une carte admise, utilisée selon les règles. Une courte durée, la nuit ou un parking vide ne dispense pas de ce droit."
      ]
    },
    {
      id:"family-civil",
      body:[
        "Une naissance est déclarée à la mairie du lieu de naissance. Pour un mariage célébré en France, une éventuelle cérémonie religieuse intervient après le mariage civil : elle ne le remplace pas. On ne peut contracter un nouveau mariage civil tant que le précédent n'est pas dissous.",
        "L'autorité parentale est un ensemble de droits et de devoirs exercés dans l'intérêt de l'enfant : protection, santé, sécurité, éducation et développement dans le respect de sa personne. Une séparation ne supprime pas automatiquement l'autorité parentale d'un des parents."
      ]
    }
  ];

  window.CIVIQUE_LEGACY_PATCHES = window.CIVIQUE_LEGACY_PATCHES || [];
  window.CIVIQUE_LEGACY_PATCHES.push({id:"legacy-droits-societe", questions, lessons});
})();
