/* Corrections des anciens QCM : les énoncés et les quatre choix restent inchangés. */
(() => {
  "use strict";
  const questions = [];
  function patch(id, alternatives, fields = {}) {
    questions.push({ id, ...fields, wrongReasons: Object.fromEntries(alternatives) });
  }

  patch("O001", [
    ["Aux armes, citoyens", "Cette formule ouvre le refrain, alors que la question demande la suite du début du premier couplet."],
    ["Marchons, marchons", "Cette formule apparaît plus loin dans le refrain, après l’appel à former les bataillons."],
    ["Qu'un sang impur abreuve nos sillons", "Cette formule termine le refrain ; elle ne suit pas immédiatement « Allons enfants de la Patrie ». "]
  ]);
  patch("O002", [
    ["Sa religion", "La religion n’évalue pas les compétences nécessaires au poste et peut devenir un critère discriminatoire de recrutement."],
    ["Ses projets de grossesse", "Un projet de grossesse relève de la vie personnelle et ne peut servir de critère de sélection professionnelle."],
    ["Son origine ethnique", "L’origine ethnique est un critère protégé ; elle ne remplace pas l’évaluation des capacités professionnelles. "]
  ]);
  patch("O003", [
    ["Facultatif si l'on est salarié", "Le statut de salarié et le prélèvement à la source ne suppriment pas l’obligation annuelle de déclaration pour les personnes qui y sont tenues."],
    ["Réservé aux propriétaires", "La déclaration concerne les revenus et la situation fiscale, pas seulement la possession d’un logement ou d’un bien."],
    ["Nécessaire seulement si l'on paie déjà des impôts", "Une personne tenue de déclarer doit le faire même si le calcul final conduit à ne pas payer d’impôt. "]
  ]);
  patch("O004", [
    ["Ils financent uniquement l'administration fiscale", "Les recettes fiscales financent de nombreuses dépenses collectives, bien au-delà du service qui collecte l’impôt."],
    ["Ils sont versés directement aux partis politiques", "Les recettes entrent dans les budgets publics ; le financement public encadré des partis n’est pas leur destination directe et générale."],
    ["Chacun choisit librement le service qu'il finance", "Les dépenses sont décidées par les budgets publics ; un contribuable ne choisit pas individuellement l’affectation de son impôt. "]
  ]);
  patch("O005", [
    ["Un droit réservé aux citoyens français", "Des personnes étrangères peuvent aussi créer ou rejoindre une association licite ; cette liberté n’est pas réservée aux Français."],
    ["Une autorisation accordée uniquement par le maire", "La liberté associative n’est pas une permission discrétionnaire du maire ; les formalités légales sont distinctes d’une telle autorisation."],
    ["Une liberté sans aucune limite légale", "L’objet et l’activité de l’association doivent respecter la loi : une activité criminelle ne devient pas licite en étant associative. "]
  ]);
  patch("O006", [
    ["Totale grâce à l'anonymat", "L’anonymat ne supprime pas les infractions commises en ligne et ne garantit pas l’impossibilité d’identifier leur auteur."],
    ["Interdite pour les sujets politiques", "Le débat politique est protégé, sous réserve des limites légales comme les menaces ou la diffamation."],
    ["Réservée aux journalistes", "La liberté d’expression appartient aussi aux personnes qui ne sont pas journalistes. "]
  ]);
  patch("O007", [
    ["Jeanne", "Jeanne d’Arc est une figure historique, mais ce prénom ne désigne pas l’allégorie républicaine demandée ici."],
    ["Catherine", "Catherine Deneuve a servi de modèle à une représentation, mais cela ne change pas le nom de l’allégorie de la République."],
    ["Éléonore", "Ce prénom n’est pas le nom conventionnel de la figure féminine utilisée dans les mairies pour personnifier la République. "]
  ]);
  patch("O008", [
    ["La fleur de lys", "La fleur de lys évoque la monarchie française, et non l’allégorie républicaine recherchée."],
    ["La couronne royale", "La couronne représente une royauté, tandis que la question vise la République."],
    ["L'aigle impérial", "L’aigle impérial est associé à l’Empire, notamment napoléonien, pas à la personnification républicaine. "]
  ]);
  patch("O009", [
    ["Uniquement au palais de l'Élysée", "La devise est affichée dans de nombreuses communes et institutions, pas seulement au siège de la présidence."],
    ["Seulement sur les billets de banque", "La devise apparaît sur des façades et documents publics ; elle n’est pas réservée à des billets."],
    ["Uniquement dans les tribunaux", "Des mairies et écoles l’affichent aussi ; les tribunaux ne sont pas son seul lieu de présence. "]
  ]);
  patch("O010", [
    ["La tour Eiffel, la baguette et le béret", "Ce sont des monuments ou objets culturels connus, pas l’ensemble des symboles constitutionnels demandés."],
    ["Le coq, le vin et le fromage", "Le coq est un emblème coutumier ; le vin et le fromage sont des références gastronomiques, pas ce trio officiel."],
    ["La fleur de lys, la couronne et le sceptre", "Ces objets évoquent la royauté, distincte de la République. "]
  ]);
  patch("O011", [
    ["Oui, dans tous les cas au nom de la liberté d'expression", "L’expression n’exclut pas les infractions d’outrage prévues par la loi ; « dans tous les cas » efface à tort ces limites."],
    ["Oui, si la personne est majeure", "La majorité ne rend pas licite un outrage répondant aux conditions légales."],
    ["Non, mais seulement le 14 juillet", "Les dispositions réprimant l’outrage ne sont pas limitées au jour de la fête nationale. "]
  ], { clarification: "On vise ici un outrage public au drapeau dans les circonstances réprimées par la loi, et non toute œuvre artistique ou critique politique.", explanation: "Un outrage public au drapeau peut être sanctionné dans les circonstances prévues par la loi. Il faut tenir compte du contexte et des garanties de la liberté d’expression : tout usage artistique ou toute critique politique n’est pas automatiquement cette infraction." });
  patch("O012", [
    ["En 1789", "1789 est le repère de la Révolution et de la DDHC, pas des ordonnances instituant la Sécurité sociale."],
    ["En 1905", "1905 est l’année de la séparation des Églises et de l’État."],
    ["En 1958", "1958 est l’année de la Constitution de la Cinquième République, après la création de la Sécurité sociale. "]
  ]);
  patch("O013", [
    ["La fin de la Première Guerre mondiale", "L’armistice de 1918 est commémoré le 11 novembre, pas le 14 juillet."],
    ["La création de la Ve République", "La Cinquième République débute en 1958 ; ce n’est pas l’événement révolutionnaire du 14 juillet."],
    ["L'abolition de la peine de mort", "Cette abolition date de 1981, sans être l’origine de la fête du 14 juillet. "]
  ]);
  patch("O014", [
    ["Une couronne", "Une couronne évoque la royauté ; le couvre-chef de Marianne symbolise la liberté et l’affranchissement."],
    ["Un casque militaire", "Un casque est un équipement de protection, pas le couvre-chef républicain associé à la liberté."],
    ["Un béret noir", "Le béret est une référence vestimentaire culturelle, pas le bonnet phrygien de l’allégorie. "]
  ], { hook: "Bonnet phrygien : liberté et affranchissement." });
  patch("O015", [
    ["La fleur de lys", "Ce symbole est associé à la monarchie ; ce n’est pas l’emblème porté sur le maillot national demandé."],
    ["Marianne", "Marianne apparaît notamment dans les mairies et sur les timbres ; l’emblème sportif habituel visé ici est un animal."],
    ["Le bonnet phrygien", "Il est un attribut de Marianne et de la liberté, pas l’emblème animal du maillot de football. "]
  ]);
  patch("O016", [
    ["Travail, Famille, Patrie", "Cette devise a été utilisée par le régime de Vichy ; elle n’est pas la devise de la République actuelle."],
    ["Honneur, Justice, Nation", "Ces mots ne constituent pas la formule inscrite à l’article 2 de la Constitution."],
    ["Unité, Force, Courage", "Ces notions ne sont pas le triptyque constitutionnel de liberté, d’égalité et de fraternité. "]
  ]);
  patch("O017", [
    ["Le droit de créer n'importe quel groupe, même criminel", "La liberté d’association protège un objet licite ; elle n’autorise pas une activité criminelle."],
    ["Une permission réservée aux entreprises", "Des personnes peuvent librement s’associer ; ce n’est pas un privilège réservé aux sociétés commerciales."],
    ["L'obligation d'adhérer à une association locale", "La liberté d’association comprend le choix d’adhérer ou de ne pas adhérer ; elle n’impose pas une affiliation locale. "]
  ]);
  patch("O018", [
    ["La possibilité de tout faire sans limite", "L’exercice d’une liberté doit respecter les droits d’autrui et les limites prévues par la loi."],
    ["Un avantage réservé aux citoyens français", "Les libertés fondamentales ne sont pas toutes réservées aux Français ; il faut les distinguer de certains droits politiques nationaux."],
    ["Une permission accordée par un employeur", "Une liberté fondamentale est garantie par le droit, pas distribuée par un employeur selon sa préférence. "]
  ]);
  patch("O019", [
    ["Sur tous les contrats de travail", "Il n’existe pas d’obligation générale d’apposer Marianne sur chaque contrat privé de travail."],
    ["Sur les permis de conduire étrangers", "Des documents délivrés par des États étrangers ne sont pas le support français de l’allégorie visé ici."],
    ["Sur les billets en livres sterling", "La livre sterling est une monnaie britannique ; cette réponse ne désigne pas le support postal français de Marianne. "]
  ]);
  patch("O020", [
    ["Tout le monde doit recevoir exactement le même revenu", "L’égalité en droits ne signifie pas identité de toutes les rémunérations ou situations économiques."],
    ["Tout le monde doit avoir les mêmes opinions", "L’égalité coexiste avec la liberté de conscience et le pluralisme, donc avec des opinions différentes."],
    ["Tous les citoyens doivent exercer le même métier", "Le choix et l’accès aux métiers ne sont pas remplacés par une profession unique obligatoire. "]
  ]);
  patch("O021", [
    ["Non, sa religion est définitive", "La liberté de conscience comprend justement la possibilité de changer ou de cesser de croire."],
    ["Oui, seulement avec l'autorisation du maire", "La conscience personnelle n’est pas soumise à une autorisation municipale."],
    ["Non, sauf après une décision de justice", "Changer de religion ne nécessite pas une décision judiciaire. "]
  ]);
  patch("O022", [
    ["Exiger qu'un agent partage sa religion", "Un usager ne peut imposer une conviction à l’agent, qui conserve sa conscience et doit rester neutre dans ses fonctions."],
    ["Refuser toutes les règles du service pour motif religieux", "La liberté de l’usager ne dispense pas des règles de fonctionnement, de sécurité ou de vérification d’identité."],
    ["Imposer une cérémonie religieuse dans le guichet", "Le guichet public ne peut être réorganisé par un usager pour imposer une cérémonie au service. "]
  ], { hook: "Agent neutre ; usager libre dans le respect du service." });
  patch("O023", [
    ["Le fonctionnement ordinaire d'une religion officielle", "La France n’a pas de religion d’État ; l’entretien légal d’un patrimoine ne crée pas un culte officiel."],
    ["Le salaire de tous les ministres du culte", "Le principe général est de ne pas salarier les cultes ; les exceptions historiques ou d’aumônerie ne sont pas un financement de tous les ministres du culte."],
    ["La conversion religieuse des citoyens", "La neutralité de l’État et la liberté de conscience excluent une politique publique imposant ou finançant ainsi la conversion des citoyens. "]
  ], { explanation: "La séparation comporte des exceptions légales, notamment l’entretien d’édifices religieux publics, certains besoins d’aumônerie et des régimes historiques comme l’Alsace-Moselle. Financer légalement un monument ne signifie pas adopter sa religion." });
  patch("O024", [
    ["1789", "1789 est le repère de la DDHC, qui protège notamment les opinions religieuses, mais pas la date de la loi de séparation."],
    ["1881", "1881 est un repère de la gratuité de l’enseignement primaire public."],
    ["1958", "1958 est le repère de la Constitution de la Cinquième République. "]
  ]);
  patch("O025", [
    ["La République interdit toutes les religions", "La loi garantit au contraire la liberté de conscience et le libre exercice des cultes dans les limites de l’ordre public."],
    ["Une religion devient officielle", "La séparation ne choisit pas une religion d’État ; elle distingue l’État des organisations religieuses."],
    ["Les citoyens doivent déclarer leur religion", "La loi ne crée pas cette déclaration obligatoire : chacun conserve sa liberté de conscience. "]
  ], { explanation: "La loi du 9 décembre 1905 garantit la liberté de conscience et pose le principe général selon lequel la République ne reconnaît, ne salarie ni ne subventionne aucun culte. Des exceptions légales et régimes historiques existent ; le libre exercice respecte l’ordre public." });
  patch("O026", [
    ["L'interdiction de croire", "La laïcité protège aussi les croyants ; elle n’impose pas l’athéisme."],
    ["La supériorité d'une religion", "L’État neutre n’établit pas une hiérarchie de droits selon les convictions."],
    ["L'obligation d'afficher sa religion", "La liberté de conscience n’oblige ni à avoir une religion ni à l’afficher. "]
  ]);
  patch("O027", [
    ["Le 14 juillet", "C’est la fête nationale, associée à la Bastille et à la Fête de la Fédération."],
    ["Le 1er mai", "Cette date est associée à la fête du Travail."],
    ["Le 11 novembre", "Cette date commémore l’armistice de 1918. "]
  ]);
  patch("O028", [
    ["Tout signe religieux ostensiblement porté", "La loi de 2004 interdit aux élèves des écoles, collèges et lycées publics les signes ou tenues manifestant ostensiblement une religion."],
    ["Aucun signe, même discret", "Le texte distingue les signes discrets des manifestations ostensibles ; il ne bannit pas tout signe des élèves."],
    ["Uniquement le signe de la religion majoritaire", "La règle ne privilégie aucune religion majoritaire ; elle se fonde sur le caractère ostensible et le rôle de la personne. "]
  ], { clarification: "La question concerne un élève d’une école, d’un collège ou d’un lycée public, et non un agent de l’établissement.", hook: "Élève : signe discret admis, manifestation ostensible interdite.", explanation: "Pour les élèves des écoles, collèges et lycées publics, la loi du 15 mars 2004 interdit les signes ou tenues manifestant ostensiblement une religion, pas les signes discrets. Les personnels ont une obligation de neutralité distincte : « visible » et « ostensible » ne sont pas des synonymes juridiques." });
  patch("O029", [
    ["La xénophilie", "La xénophilie désigne une attirance ou une sympathie pour ce qui est étranger ; ce n’est pas la haine des Juifs."],
    ["Le pluralisme", "Le pluralisme reconnaît la diversité des opinions ; il ne désigne pas une hostilité contre un groupe."],
    ["La laïcité", "La laïcité protège l’égalité et la liberté de conscience ; elle n’est pas une haine dirigée contre les Juifs. "]
  ]);
  patch("O030", [
    ["Le Code civil de 1804", "Le Code civil organise des règles civiles ; ce n’est pas la loi centrale de séparation des Églises et de l’État."],
    ["Le traité de Maastricht", "Ce traité concerne l’Union européenne et la citoyenneté européenne, pas la séparation française de 1905."],
    ["La loi sur les associations de 1901", "Elle est le repère de la liberté associative, distinct de la loi de séparation. "]
  ]);
  patch("O031", [
    ["Les familles dans leur domicile", "Les personnes conservent leur liberté de conscience privée ; une famille n’est pas un service public soumis à la neutralité des agents."],
    ["Toutes les associations privées", "Une association privée n’est pas toujours soumise à la neutralité ; une mission de service public peut toutefois entraîner des obligations particulières."],
    ["Les lieux de culte", "Un lieu de culte sert à l’exercice d’une religion, dans le respect de la loi ; il n’a pas à être religieusement neutre comme l’État. "]
  ]);
  patch("O032", [
    ["L'interdiction des religions", "La laïcité garantit leur libre exercice dans le cadre légal, ainsi que le droit de ne pas croire."],
    ["Une religion officielle commune", "L’État ne choisit pas de religion officielle à imposer à tous."],
    ["La pratique religieuse obligatoire", "La liberté de conscience comprend l’absence de pratique et de croyance. "]
  ]);
  patch("O033", [
    ["Choisir une religion pour chaque élève", "La charte protège le libre arbitre et la conscience des élèves, au lieu de leur attribuer une religion."],
    ["Interdire l'étude historique des religions", "Les religions peuvent être étudiées scientifiquement et historiquement sans imposer leur pratique."],
    ["Remplacer le règlement intérieur", "La charte explique les principes et s’articule avec les règles de l’établissement ; elle ne remplace pas tout le règlement. "]
  ]);
  patch("O034", [
    ["Uniquement les usagers", "Les usagers n’ont pas la même obligation générale de neutralité que les agents dans leurs fonctions."],
    ["Seulement les élus nationaux", "La règle professionnelle concerne les agents des services publics à tous les niveaux, pas seulement des fonctions nationales élues."],
    ["Uniquement les enseignants", "Les enseignants sont concernés, mais la neutralité vaut aussi pour les autres agents publics. "]
  ]);
  patch("O035", [
    ["Qu'elle est fonctionnaire", "Un statut professionnel ne permet pas de déduire une croyance ou une absence de croyance."],
    ["Qu'elle est pratiquante", "Le terme pratiquant renvoie à une pratique religieuse ; l’énoncé dit que la personne ne croit en aucun dieu."],
    ["Qu'elle est obligatoirement agnostique", "L’agnosticisme porte sur l’incertitude ou la possibilité de connaître l’existence du divin ; ne pas croire ne rend pas obligatoirement agnostique. "]
  ]);

  patch("S001", [
    ["Refuser de le servir", "Un signe religieux porté par un usager ne suffit pas à justifier un refus d’accueil ; l’agent doit rester impartial."],
    ["L'obliger à cacher tout signe", "L’usager n’est pas soumis à la neutralité générale des agents ; une restriction doit avoir un fondement précis."],
    ["Lui demander sa religion avant le dossier", "La religion n’est pas un préalable général à une démarche en mairie ; la demande risquerait de traiter différemment les usagers. "]
  ], { hook: "Agent neutre ; usager accueilli sans discrimination." });
  patch("S002", [
    ["Il peut imposer ses convictions aux usagers", "Une mission publique ne donne pas autorité sur la conscience des usagers ; l’agent doit rester neutre."],
    ["Il n'existe aucune règle", "La neutralité des agents publics dans leurs fonctions est une obligation juridique."],
    ["Il doit demander aux usagers de porter le même signe", "Le service ne peut imposer une pratique ou un signe religieux aux usagers. "]
  ]);
  patch("S003", [
    ["Toute conviction est interdite", "Les élèves conservent leur liberté de conscience ; la loi vise les manifestations ostensibles, pas toute conviction."],
    ["L'école doit lui attribuer une religion", "L’école publique ne choisit pas une religion pour ses élèves et ne doit pas imposer une croyance."],
    ["Elle doit quitter définitivement l'école", "Un signe discret ne justifie pas à lui seul une exclusion, encore moins cette exclusion définitive automatique. "]
  ], { hook: "Signe discret et manifestation ostensible : une distinction essentielle.", explanation: "La loi du 15 mars 2004 distingue les signes discrets des signes ou tenues manifestant ostensiblement une religion. Elle n’interdit ni toute visibilité ni les convictions privées. Les règles de fonctionnement et l’absence de prosélytisme restent applicables." });
  patch("S004", [
    ["L'obliger à choisir une religion", "La liberté de conscience comprend le droit de ne pas croire ; un collègue ne peut imposer une conversion."],
    ["Le signaler à la police", "L’absence de croyance n’est pas une infraction à signaler."],
    ["Refuser de travailler avec lui", "Une absence de croyance ne justifie pas un traitement discriminatoire dans les relations professionnelles. "]
  ]);
  patch("S005", [
    ["La question est obligatoire", "Un projet de grossesse n’est pas une information professionnelle obligatoirement demandée au recrutement."],
    ["Elle doit répondre pour obtenir le poste", "L’accès à l’emploi ne peut être conditionné légitimement à cette information personnelle sans lien nécessaire avec les compétences."],
    ["Seuls les hommes peuvent refuser", "Les droits à l’égalité et au respect de la vie privée ne sont pas réservés aux hommes. "]
  ]);
  patch("S006", [
    ["Oui, internet n'est soumis à aucune loi", "Les infractions de menace ou d’incitation à la haine peuvent aussi être commises et poursuivies en ligne."],
    ["Oui, si le compte est anonyme", "L’anonymat ne rend pas le contenu licite et ne supprime pas nécessairement la possibilité d’identifier l’auteur."],
    ["Oui, si le message est partagé la nuit", "L’heure de publication ne transforme pas un appel à la violence en expression licite. "]
  ]);
  patch("S007", [
    ["Oui, tous doivent être français", "Des personnes étrangères peuvent participer à une association licite ; une nationalité commune française n’est pas requise."],
    ["Oui, tous doivent être élus", "La liberté associative n’est pas réservée aux titulaires d’un mandat politique."],
    ["Non, mais ils doivent appartenir à la même religion", "L’association culturelle licite peut réunir des convictions différentes ; une foi commune n’est pas une condition générale. "]
  ]);
  patch("S008", [
    ["La liberté de circulation", "La situation concerne une décision professionnelle fondée sur le sexe, pas une restriction des déplacements."],
    ["La séparation des pouvoirs", "Ce principe organise les institutions de l’État ; il ne nomme pas la discrimination de promotion décrite."],
    ["Le droit de propriété", "Le refus fondé sur le sexe touche l’égalité de traitement au travail, pas la possession d’un bien. "]
  ]);
  patch("S009", [
    ["La religion est fixée à la naissance", "La conscience reste individuelle et permet de changer de religion ; elle n’est pas figée par la naissance."],
    ["Le maire choisit la religion", "Une autorité municipale n’a pas compétence pour choisir la conviction d’une personne."],
    ["Seul l'employeur peut autoriser un changement", "L’employeur n’a aucun pouvoir général d’autoriser ou d’interdire le changement de religion. "]
  ]);
  patch("S010", [
    ["La mairie doit adopter la religion de l'usager", "Un service public reste neutre et ne prend pas la religion d’un usager comme règle officielle."],
    ["Le service ferme", "Une exigence illégitime d’un usager ne justifie pas une fermeture automatique pour tous."],
    ["Les autres usagers doivent se conformer", "La conviction d’une personne ne peut être imposée aux autres et ne remplace pas les règles communes. "]
  ]);
  patch("S011", [
    ["Non, toute critique est interdite", "La critique politique est une composante du débat démocratique ; elle n’est pas interdite en bloc."],
    ["Oui, seulement avec l'autorisation du préfet", "Une opinion critique licite ne nécessite pas une autorisation préfectorale préalable."],
    ["Non, sauf pendant les élections", "La liberté du débat ne se limite pas aux campagnes électorales. "]
  ]);
  patch("S012", [
    ["Le commerçant est toujours libre de discriminer", "La liberté d’entreprendre ne permet pas de refuser un service en utilisant un critère de discrimination interdit."],
    ["La personne doit changer de handicap", "Le handicap est une caractéristique protégée, pas une faute que la personne devrait effacer pour accéder au commerce."],
    ["Cela dépend de sa religion", "La religion ne justifie pas un refus d’accès fondé sur le handicap. "]
  ]);

  patch("O036", [
    ["Il est élu directement par les citoyens", "Il n’existe pas d’élection nationale directe du Premier ministre ; il faut distinguer cette nomination de l’élection présidentielle."],
    ["Il est choisi par le Sénat seul", "Le Sénat ne détient pas le pouvoir constitutionnel de nommer seul le Premier ministre."],
    ["Il est nommé par le Conseil constitutionnel", "Le Conseil contrôle notamment la constitutionnalité et certains scrutins ; il ne nomme pas le Premier ministre. "]
  ]);
  patch("O037", [
    ["Toute personne résidant en France", "La résidence seule ne suffit pas : la candidature présidentielle requiert notamment la nationalité française et les conditions légales."],
    ["Uniquement un député en exercice", "Aucun mandat de député en exercice n’est imposé à tous les candidats."],
    ["Uniquement le chef d'un parti politique", "Diriger un parti n’est pas une condition générale de candidature ; les règles d’éligibilité et de présentation restent décisives. "]
  ], { hook: "Français, éligible et 500 présentations d’élus.", explanation: "La candidature suppose notamment la nationalité française, les conditions d’éligibilité et 500 présentations valides d’élus, avec les règles de répartition territoriale. Il ne s’agit pas de simples signatures de tout résident." });
  patch("O038", [
    ["Au Président seul", "Le Président exerce des compétences confiées par la Constitution ; il ne possède pas personnellement la souveraineté."],
    ["Au Gouvernement", "Le Gouvernement conduit la politique de la Nation mais n’est pas le propriétaire de la souveraineté nationale."],
    ["Aux juges", "Les juges rendent la justice dans leurs compétences ; leur indépendance ne leur attribue pas la souveraineté du peuple. "]
  ]);
  patch("O039", [
    ["Le préfet", "Le préfet est nommé pour représenter l’État, pas élu lors du scrutin municipal."],
    ["Les sénateurs", "Les sénateurs sont désignés au suffrage indirect par des grands électeurs lors des élections sénatoriales."],
    ["Le procureur de la République", "Le procureur est un magistrat nommé ; son poste n’est pas l’objet d’une élection municipale. "]
  ]);
  patch("O040", [
    ["Inutile pour les élections nationales", "Le droit de voter s’exerce avec l’inscription sur la liste électorale pertinente ; une inscription d’office reste une inscription."],
    ["Réservée aux personnes de plus de 25 ans", "La majorité électorale est de 18 ans ; ce seuil de 25 ans exclurait à tort des électeurs majeurs."],
    ["Payante dans chaque commune", "L’inscription sur les listes électorales est gratuite ; la commune ne peut en faire une formalité payante générale. "]
  ], { hook: "Vérifier son inscription avant l’élection." });
  patch("O041", [
    ["Résider en France depuis cinq ans", "La durée de résidence ne remplace pas la nationalité et les autres conditions du vote présidentiel ; des Français résidant à l’étranger peuvent aussi voter selon leur inscription."],
    ["Être propriétaire", "Le vote ne dépend pas de la possession d’un bien ; ce serait une condition de fortune contraire au suffrage universel."],
    ["Avoir déjà payé un impôt", "Le suffrage ne se limite pas aux contribuables ayant déjà payé ; payer n’est pas une condition générale de ce vote. "]
  ], { hook: "Français, 18 ans, droits électoraux, inscription." });
  patch("O042", [
    ["Être obligatoirement né dans la commune", "La candidature dépend des conditions légales de rattachement et d’éligibilité, pas d’une naissance obligatoire dans la commune."],
    ["Être fonctionnaire", "Un emploi public n’est pas une condition générale de candidature ; certaines fonctions peuvent même entraîner des incompatibilités."],
    ["Avoir au moins 30 ans", "La majorité électorale est le repère de l’âge minimal municipal ; trente ans n’est pas la condition générale. "]
  ], { explanation: "Les Français et les citoyens d’un autre État de l’Union remplissant les conditions légales peuvent être candidats au conseil municipal. Les citoyens européens non français ne peuvent pas devenir maire ou adjoint au maire." });
  patch("O043", [
    ["Le préfet", "Le préfet est nommé comme représentant de l’État, contrairement au maire élu par le conseil municipal."],
    ["Le procureur de la République", "Il s’agit d’un magistrat nommé, pas d’un titulaire choisi par un scrutin local."],
    ["Le recteur d'académie", "Le recteur est nommé pour une mission de l’État dans l’éducation ; il n’est pas élu par la population. "]
  ]);
  patch("O044", [
    ["Diriger le Gouvernement", "L’action du Gouvernement est dirigée par le Premier ministre ; le maire exerce une fonction communale."],
    ["Voter seul les lois nationales", "La loi nationale est examinée et votée dans le cadre parlementaire ; un maire n’a pas ce pouvoir individuel."],
    ["Nommer les juges", "La fonction de maire ne lui donne pas le pouvoir de nommer les juges de la justice nationale. "]
  ]);
  patch("O045", [
    ["Seulement les anciens ministres", "Une expérience ministérielle n’est pas imposée comme condition légale à tous les candidats."],
    ["Seulement les maires des grandes villes", "Il n’est pas nécessaire d’être maire ni de diriger une grande ville pour remplir les conditions de candidature."],
    ["Tout citoyen de l'Union européenne", "La citoyenneté européenne seule ne suffit pas : la présidentielle française exige la nationalité française. "]
  ], { explanation: "Une femme ou un homme de nationalité française peut être candidat s’il remplit les conditions légales, notamment d’éligibilité et de présentations d’élus. Aucun sexe ou métier particulier n’est une condition générale." });
  patch("O046", [
    ["Au commissariat uniquement", "Le commissariat peut intervenir dans certaines démarches de procuration, mais l’inscription électorale sans internet se demande notamment à la mairie."],
    ["À la Banque de France", "La Banque de France a des missions financières ; elle n’inscrit pas les habitants sur les listes électorales communales."],
    ["Au tribunal de commerce", "Cette juridiction traite des litiges et procédures commerciaux, pas la demande ordinaire d’inscription électorale. "]
  ]);
  patch("O047", [
    ["16 ans", "Le vote en France n’est pas généralement ouvert à seize ans, même si d’autres pays peuvent choisir ce seuil."],
    ["21 ans", "Vingt et un ans est un ancien repère français de majorité ; l’âge actuel de vote est abaissé à dix-huit ans."],
    ["25 ans", "Ce seuil ajouterait une restriction d’âge qui n’existe pas pour devenir électeur ordinaire. "]
  ]);
  patch("O048", [
    ["Oui, sous peine d'amende", "Pour l’électeur ordinaire, l’abstention n’entraîne pas une amende générale ; il ne faut pas confondre avec les obligations de certains grands électeurs."],
    ["Oui, uniquement aux présidentielles", "L’élection présidentielle n’instaure pas une obligation générale de voter."],
    ["Non, sauf pour les fonctionnaires", "Le seul statut de fonctionnaire ne rend pas le vote ordinaire obligatoire. "]
  ], { clarification: "On parle de l’électeur ordinaire, et non des obligations particulières des grands électeurs sénatoriaux.", explanation: "Pour l’électeur ordinaire en France, voter est un droit et un engagement civique, pas une obligation générale sanctionnée. Des règles particulières concernent notamment les grands électeurs sénatoriaux ; elles ne créent pas une obligation pour tous les citoyens." });
  patch("O049", [
    ["Oui, si l'on n'a pas voté pour cette loi", "L’application d’une loi ne dépend pas du vote ou du soutien personnel de chaque habitant."],
    ["Oui, si elle semble injuste personnellement", "Un sentiment individuel d’injustice permet de la contester légalement, pas de s’accorder une dispense générale."],
    ["Oui, pour des motifs religieux", "Une conviction religieuse ne dispense pas des règles communes légalement applicables. "]
  ], { hook: "Contester légalement une loi, sans s’attribuer une dispense." });
  patch("O050", [
    ["Ils sont nommés par le Président", "Le Président ne nomme pas les députés ; ils tiennent leur mandat du suffrage."],
    ["Ils sont tirés au sort", "Le tirage au sort peut servir à d’autres dispositifs, mais ce n’est pas le mode des élections législatives."],
    ["Ils sont élus par les sénateurs", "Les électeurs choisissent directement les députés ; une élection par les sénateurs serait indirecte. "]
  ]);
  patch("O051", [
    ["Le Conseil constitutionnel seul", "Le Conseil contrôle la conformité à la Constitution ; il ne remplace pas le Parlement pour débattre et voter la loi."],
    ["La police", "La police applique notamment les règles et enquête dans ses compétences ; elle ne vote pas les lois."],
    ["Les préfets", "Les préfets représentent l’État et veillent à l’application du droit ; ils n’exercent pas le vote parlementaire. "]
  ]);
  patch("O052", [
    ["Les pouvoirs communal, départemental et régional", "Ces mots désignent des niveaux territoriaux, pas les trois fonctions de la séparation des pouvoirs."],
    ["Les pouvoirs civil, militaire et religieux", "Cette classification ne correspond pas à la séparation entre législation, exécution et justice."],
    ["Les pouvoirs présidentiel, municipal et européen", "Cette liste mélange des fonctions et niveaux d’institutions sans identifier les trois pouvoirs concernés. "]
  ]);
  patch("O053", [
    ["Un État où le Gouvernement est au-dessus des tribunaux", "Le Gouvernement doit aussi être soumis au droit et aux contrôles ; se placer au-dessus contredit l’État de droit."],
    ["Un État sans Constitution", "L’État de droit suppose un cadre garantissant les droits et organisant les pouvoirs. Il faut distinguer l’absence de ce cadre et une Constitution qui n’est pas codifiée dans un texte unique."],
    ["Un État dirigé uniquement par les juges", "Des juges indépendants contrôlent le droit, mais n’exercent pas seuls toutes les fonctions législatives et exécutives. "]
  ]);
  patch("O054", [
    ["Trois ans", "Trois ans est le rythme de renouvellement par moitié du Sénat, pas la durée ordinaire du mandat municipal."],
    ["Cinq ans", "Cinq ans est notamment le repère présidentiel, législatif et européen, pas municipal."],
    ["Sept ans", "Le septennat est un ancien repère présidentiel ; il ne décrit pas le mandat municipal. "]
  ]);
  patch("O055", [
    ["Les sénateurs", "Le Sénat est désigné au suffrage indirect lors des élections sénatoriales, pas des législatives."],
    ["Les préfets", "Les préfets sont nommés comme représentants de l’État et ne sont pas l’objet de cette élection."],
    ["Les maires", "Les maires sont élus par les conseils municipaux après les municipales, pas lors du scrutin législatif. "]
  ]);
  patch("O056", [
    ["Quatre ans", "Quatre ans est un mandat possible dans d’autres systèmes ; la Constitution française prévoit un quinquennat."],
    ["Six ans", "Six ans est notamment la durée des mandats sénatoriaux et de plusieurs mandats locaux."],
    ["Sept ans sans limite", "Le septennat est l’ancien mandat présidentiel ; la durée actuelle est cinq ans avec au maximum deux mandats consécutifs. "]
  ]);
  patch("O057", [
    ["Trois ans", "Trois ans est le rythme de renouvellement par moitié du Sénat, pas le mandat d’un député."],
    ["Six ans", "Six ans est la durée du mandat d’un sénateur, pas d’un député de l’Assemblée nationale."],
    ["Neuf ans", "Neuf ans est un ancien repère sénatorial, pas la durée ordinaire d’une législature de l’Assemblée. "]
  ]);
  patch("O058", [
    ["Quatre ans", "Ce nombre n’est ni la durée sénatoriale actuelle ni son rythme de renouvellement par moitié."],
    ["Cinq ans", "Cinq ans concerne notamment les députés et le Président, pas les sénateurs."],
    ["Neuf ans pour tous les nouveaux mandats", "Neuf ans est l’ancienne durée sénatoriale ; les nouveaux mandats actuels durent six ans. "]
  ]);
  patch("O059", [
    ["Le Président de l'Assemblée nationale", "Il dirige les travaux de sa chambre parlementaire, pas l’action du Gouvernement."],
    ["Le maire de Paris", "Sa fonction est communale ; elle ne lui attribue pas la direction du Gouvernement national."],
    ["Le Conseil constitutionnel", "Il exerce des contrôles constitutionnels, pas la conduite quotidienne de la politique gouvernementale. "]
  ], { hook: "Premier ministre : direction de l’action du Gouvernement." });
  patch("O060", [
    ["Non, les partis sont réservés aux élus", "Un parti peut réunir des adhérents sans mandat électif ; l’adhésion n’est pas réservée aux élus."],
    ["Oui, uniquement avec l'accord du préfet", "L’adhésion licite à un parti n’est pas une permission politique individuelle donnée par le préfet."],
    ["Non, la Constitution interdit les partis", "La Constitution reconnaît au contraire leur rôle dans l’expression du suffrage, dans le respect des principes démocratiques. "]
  ]);
  patch("O061", [
    ["La victime directement", "Une victime peut demander réparation et porter plainte, pas s’attribuer le pouvoir de prononcer une peine pénale."],
    ["Le maire sans procès", "Le maire n’est pas le tribunal pénal compétent pour décider librement la culpabilité et la peine d’un vol."],
    ["La police seule", "La police enquête et peut effectuer des actes prévus par la loi ; elle ne prononce pas seule le jugement de culpabilité et la peine. "]
  ]);
  patch("O062", [
    ["Les communes", "Les communes interviennent notamment pour les écoles maternelles et primaires, pas comme collectivité gestionnaire générale des collèges."],
    ["Les régions", "Les régions sont le repère des lycées publics, tandis que les collèges relèvent des départements pour leurs bâtiments et équipements."],
    ["L'Union européenne", "L’Union peut soutenir des projets, mais elle n’est pas la collectivité française responsable de chaque collège. "]
  ], { explanation: "Les départements assurent notamment les bâtiments, l’entretien et l’équipement des collèges publics. L’État reste responsable de l’enseignement, des programmes et des personnels enseignants : « gérer » ne signifie pas que toutes les fonctions sont départementales." });
  patch("O063", [
    ["Les départements", "Les départements sont le repère de gestion matérielle des collèges, pas des écoles maternelles et primaires."],
    ["Les régions", "Les régions prennent en charge notamment les lycées publics, pas ce niveau scolaire communal."],
    ["Le Sénat", "Le Sénat vote les lois ; il ne gère pas individuellement les locaux de chaque école. "]
  ], { explanation: "Les communes assurent notamment les bâtiments, l’entretien et l’équipement des écoles maternelles et primaires publiques. Les programmes et les personnels enseignants relèvent de l’État ; les compétences matérielles et pédagogiques sont distinctes." });
  patch("O064", [
    ["Ils sont élus séparément au suffrage présidentiel", "Il n’existe pas de scrutin présidentiel distinct pour chaque maire ; les électeurs choisissent le conseil municipal."],
    ["Ils sont nommés par le préfet", "Le maire est élu par le conseil municipal ; le préfet représente l’État sans se substituer à cette élection ordinaire."],
    ["Ils sont tirés au sort", "La fonction municipale est issue de l’élection du conseil puis du maire, pas d’un tirage au sort. "]
  ]);
  patch("O065", [
    ["La commune", "Les communes ou intercommunalités peuvent avoir des transports locaux ; l’échelle des transports régionaux, notamment TER, est différente."],
    ["Le département uniquement", "Les départements ont notamment des compétences sociales et routières, mais cette exclusivité sur les transports régionaux est inexacte."],
    ["Le Parlement européen", "Une assemblée législative européenne n’est pas l’autorité organisatrice quotidienne des TER français. "]
  ]);
  patch("O066", [
    ["Une décision d'un maire", "Un maire ne dispose pas du pouvoir de réviser seul la Constitution nationale."],
    ["Un simple décret du Premier ministre", "Un décret réglementaire ne peut remplacer la procédure de révision constitutionnelle."],
    ["Un vote de la Commission européenne", "La Constitution française se révise par ses procédures nationales, pas par un vote de la Commission. "]
  ], { explanation: "Dans la procédure de l’article 89, les deux chambres doivent adopter le texte dans les mêmes termes. La révision est ensuite approuvée par référendum ou, pour un projet soumis au Congrès par le Président, par les trois cinquièmes des suffrages exprimés." });
  patch("O067", [
    ["Le Premier ministre", "Il dirige le Gouvernement mais n’est pas l’autorité ordinaire d’intérim prévue en premier par l’article 7."],
    ["Le président de l'Assemblée nationale", "Il préside une chambre parlementaire, mais la priorité constitutionnelle de l’intérim revient au président de l’autre chambre."],
    ["Le ministre de l'Intérieur", "Ses fonctions ministérielles ne lui attribuent pas automatiquement cet intérim présidentiel. "]
  ], { explanation: "L’article 7 confie l’intérim au président du Sénat en cas de vacance. S’il est lui-même empêché, le Gouvernement intervient dans les conditions prévues ; ce n’est pas le Premier ministre seul qui remplace normalement le Président." });
  patch("O068", [
    ["Rédiger toutes les lois", "Les textes sont initiés et examinés par le Gouvernement et le Parlement selon la procédure ; le Conseil contrôle leur constitutionnalité."],
    ["Diriger la police nationale", "Le Conseil n’est pas l’autorité de commandement de la police ; sa mission est constitutionnelle."],
    ["Juger tous les divorces", "Les divorces relèvent de la justice civile et des procédures applicables, pas de cette institution constitutionnelle. "]
  ]);
  patch("O069", [
    ["Avoir été ministre", "La loi n’impose pas une expérience ministérielle préalable à tous les candidats."],
    ["Être âgé d'au moins 40 ans", "La candidature ne comporte pas ce seuil général de quarante ans ; il faut remplir les conditions d’éligibilité réellement prévues."],
    ["Être membre du Parlement", "Un candidat n’a pas obligatoirement à détenir un mandat de député ou de sénateur. "]
  ], { hook: "500 présentations d’élus, au moins 30 départements ou collectivités.", explanation: "Les candidats doivent obtenir 500 présentations valides d’élus provenant d’au moins trente départements ou collectivités, sans dépasser la proportion autorisée provenant d’un même territoire. Le terme « parrainage » désigne ici une présentation encadrée, pas une signature libre de tout habitant." });
  patch("O070", [
    ["96", "Ce nombre compte les départements métropolitains seulement ; il omet les cinq d’outre-mer."],
    ["13", "Treize est le nombre de régions métropolitaines, pas le nombre de départements de toute la France."],
    ["120", "Le total départemental résulte de 96 en métropole plus cinq d’outre-mer ; 120 ajoute des unités qui ne font pas partie de ce décompte. "]
  ]);
  patch("O071", [
    ["En cantons et royaumes uniquement", "Les cantons sont notamment des circonscriptions électorales ; les royaumes ne sont pas des niveaux de collectivités de la République."],
    ["En provinces indépendantes", "Les collectivités territoriales ne sont pas des États indépendants ; la République reste indivisible."],
    ["En États fédérés", "La France est une République indivisible et décentralisée, pas un État fédéral composé d’États fédérés. "]
  ]);
  patch("O072", [
    ["Le maire", "Le maire dirige une commune et exerce certaines fonctions pour l’État, mais il n’est pas le représentant général de l’État dans tout le département."],
    ["Le président du conseil départemental", "Il dirige l’exécutif de la collectivité départementale, distinct du représentant de l’État."],
    ["Le député", "Le député participe aux fonctions législatives et de contrôle ; il n’est pas le chef territorial des services de l’État. "]
  ]);
  patch("O073", [
    ["Diriger chaque mairie", "Les mairies sont dirigées par leurs maires et conseils municipaux dans leurs compétences."],
    ["Présider tous les tribunaux", "L’indépendance de la justice exclut que le Président préside personnellement tous les procès."],
    ["Voter seul le budget", "Le budget de l’État est adopté par la procédure parlementaire ; le Président ne le vote pas seul. "]
  ]);
  patch("O074", [
    ["Être le chef de l'État", "Le chef de l’État est le Président ; le Premier ministre dirige l’action du Gouvernement."],
    ["Présider le Sénat", "Le Sénat a son propre président ; cette fonction ne se confond pas avec celle de Premier ministre."],
    ["Contrôler seul la Constitution", "Le contrôle constitutionnel relève notamment du Conseil constitutionnel ; le Premier ministre ne détient pas ce contrôle exclusif. "]
  ]);
  patch("O075", [
    ["Défendre uniquement le Gouvernement", "Le Défenseur est indépendant et protège des droits, y compris lorsque le problème concerne un service public."],
    ["Remplacer tous les avocats", "Il ne devient pas le conseil juridique de chaque personne dans toutes les procédures ; les avocats conservent leur rôle."],
    ["Voter les lois", "Le vote de la loi relève du Parlement ; le Défenseur peut agir ou recommander dans ses compétences sans être législateur. "]
  ]);
  patch("O076", [
    ["En 1945", "1945 est un repère de fin de guerre et de protection sociale, pas de la citoyenneté européenne instituée par Maastricht."],
    ["En 1951", "1951 est le repère de la CECA ; la citoyenneté de l’Union n’est pas encore instituée."],
    ["En 2002", "2002 correspond à la circulation des pièces et billets en euros, après Maastricht. "]
  ], { explanation: "Le traité de Maastricht est signé en 1992 et institue la citoyenneté européenne ; il entre en vigueur en 1993. Cette citoyenneté complète celle d’un État membre sans la remplacer." });
  patch("O077", [
    ["Claude Debussy", "Debussy appartient à une génération postérieure à la Neuvième Symphonie, dont vient la mélodie retenue comme hymne européen."],
    ["Wolfgang Amadeus Mozart", "Mozart n’est pas l’auteur de cette Neuvième Symphonie ; il appartient à une autre œuvre et un autre catalogue de symphonies."],
    ["Rouget de Lisle", "Rouget de Lisle compose La Marseillaise, l’hymne national français, pas l’Ode à la joie. "]
  ]);
  patch("O078", [
    ["Le 8 mai", "Le 8 mai commémore la victoire de 1945 en Europe ; la Journée de l’Europe rappelle une déclaration du lendemain dans une autre année, 1950."],
    ["Le 14 juillet", "Le 14 juillet est la fête nationale française, pas la Journée de l’Europe."],
    ["Le 11 novembre", "Le 11 novembre commémore l’armistice de 1918. "]
  ]);
  patch("O079", [
    ["À Paris", "Paris accueille notamment la Banque de France, mais pas le siège de la BCE."],
    ["À Strasbourg", "Strasbourg est notamment le siège du Parlement européen, pas de la Banque centrale."],
    ["À Rome", "Rome est la capitale italienne et un repère des traités de 1957 ; ce n’est pas le siège de la BCE. "]
  ]);
  patch("O080", [
    ["À Madrid", "Madrid est la capitale espagnole, pas le siège principal de la Commission."],
    ["À Strasbourg", "Strasbourg est le siège officiel du Parlement européen ; il faut distinguer Parlement et Commission."],
    ["À Luxembourg uniquement", "La Commission possède des services au Luxembourg, mais « uniquement » efface à tort son siège principal de Bruxelles. "]
  ]);
  patch("O081", [
    ["Les chefs d'État uniquement", "Les chefs d’État ou de gouvernement se réunissent au Conseil européen, distinct du Parlement."],
    ["Les juges nationaux", "Les fonctions juridictionnelles ne constituent pas le mandat de député européen."],
    ["Les préfets", "Les préfets représentent l’État français sur un territoire ; ils ne siègent pas au Parlement du seul fait de cette fonction. "]
  ]);
  patch("O082", [
    ["12", "Douze est notamment le nombre fixe d’étoiles du drapeau et le nombre de pays au lancement fiduciaire de l’euro, pas les membres de l’Union en 2025."],
    ["28", "L’Union comptait 28 membres avant le retrait du Royaume-Uni ; elle n’en compte plus autant à la date demandée."],
    ["32", "Ce nombre dépasse les 27 adhésions encore en vigueur après le retrait ; il ajoute des pays non membres à ce décompte. "]
  ]);
  patch("O083", [
    ["1951", "1951 correspond au traité de Paris instituant la CECA."],
    ["1957", "1957 correspond aux traités de Rome instituant notamment la CEE."],
    ["2002", "2002 est le repère des pièces et billets en euros, pas de la signature de Maastricht. "]
  ]);
  patch("O084", [
    ["Le traité de Versailles", "Le traité de Versailles de 1919 appartient au règlement de la Première Guerre mondiale, pas aux traités fondateurs des Communautés européennes."],
    ["Le traité de l'Élysée uniquement", "Le traité de l’Élysée de 1963 organise la coopération bilatérale franco-allemande. Il contribue au rapprochement européen, mais ne crée pas la CEE comme les traités de Rome recherchés dans ce QCM."],
    ["Le concordat de 1801", "Le Concordat organise les relations entre l’État et l’Église catholique ; ce n’est pas un traité fondateur du marché commun européen. "]
  ], { clarification: "Dans cet entraînement, on cherche un traité fondateur des Communautés européennes, et non un accord bilatéral entre deux pays.", explanation: "Les traités de Rome de 1957 créent notamment la CEE et Euratom et constituent des traités fondateurs communautaires. Le traité de l’Élysée est un accord bilatéral franco-allemand, également important pour le rapprochement, mais distinct de cette fondation institutionnelle." });
  patch("O085", [
    ["La Norvège", "La Norvège n’est pas membre de l’Union européenne ; elle ne l’a donc pas quittée en 2020."],
    ["La Suisse", "La Suisse n’est pas membre de l’Union européenne et n’est pas l’État du retrait britannique."],
    ["L'Irlande", "L’Irlande reste membre de l’Union ; elle est distincte du Royaume-Uni. "]
  ]);
  patch("O086", [
    ["La Marseillaise", "C’est l’hymne national français composé par Rouget de Lisle, pas le thème instrumental européen."],
    ["Le Chant des partisans", "Ce chant est associé à la Résistance française ; ce n’est pas l’hymne de l’Union."],
    ["God Save the King", "C’est l’hymne britannique, pas l’hymne européen tiré de la Neuvième Symphonie. "]
  ]);
  patch("O087", [
    ["De vingt-sept étoiles, une par État", "Les étoiles sont douze et symboliques ; elles ne changent pas avec le nombre de membres de l’Union."],
    ["De bandes bleu, blanc et rouge", "Cette description correspond au drapeau français, pas au drapeau européen."],
    ["D'une colombe blanche sur fond vert", "La colombe est un symbole de paix, mais ce motif n’est pas celui du drapeau européen. "]
  ]);
  patch("O088", [
    ["La Commission européenne", "La Commission n’élit pas les députés ; elle est notamment soumise au contrôle du Parlement élu."],
    ["Les gouvernements nationaux seuls", "Une désignation par les seuls gouvernements ne serait pas le suffrage universel direct des citoyens."],
    ["La Banque centrale européenne", "La BCE exerce une mission monétaire, pas la désignation électorale des parlementaires. "]
  ]);
  patch("O089", [
    ["À Francfort", "Francfort est le siège de la BCE, distincte du Parlement européen."],
    ["À La Haye", "La Haye accueille notamment des juridictions internationales ; ce n’est pas le siège du Parlement européen."],
    ["À Genève", "Genève accueille de nombreuses organisations internationales, mais pas le siège officiel du Parlement européen. "]
  ], { explanation: "Le siège officiel du Parlement européen est Strasbourg. Des travaux se tiennent aussi à Bruxelles et certains services se trouvent au Luxembourg ; le Parlement n’exerce donc pas toutes ses activités dans un seul lieu." });

  patch("S013", [
    ["À la pharmacie", "Une pharmacie fournit des services de santé et ne reçoit pas les inscriptions électorales communales."],
    ["Au commissariat uniquement", "Il ne faut pas confondre certaines formalités de procuration et la demande d’inscription sur les listes reçue notamment par la mairie."],
    ["À la Banque centrale européenne", "Une institution monétaire européenne n’inscrit pas les citoyens sur les listes d’une commune française. "]
  ]);
  patch("S014", [
    ["Le préfet", "Le préfet représente l’État ; il ne remplace pas le vote du conseil municipal pour choisir ordinairement le maire."],
    ["Le Président de la République", "La nomination présidentielle concerne notamment le Premier ministre, pas l’élection de chaque maire."],
    ["Le procureur", "Un procureur exerce une fonction judiciaire et n’élit pas le maire à la place des conseillers. "]
  ]);
  patch("S015", [
    ["La région", "La région est le repère des bâtiments des lycées publics, pas de cette école primaire."],
    ["L'Union européenne", "Un financement européen éventuel ne fait pas de l’Union la collectivité principalement chargée de rénover cette toiture."],
    ["Le Sénat", "Le Sénat vote les lois, mais n’est pas le gestionnaire matériel de chaque école primaire communale. "]
  ]);
  patch("S016", [
    ["La commune uniquement", "La commune est le repère des écoles primaires ; les bâtiments des collèges sont une compétence départementale."],
    ["La Banque de France", "La Banque de France a des missions financières, pas la maîtrise générale des travaux des collèges."],
    ["Le Parlement européen", "Cette assemblée législative ne gère pas les chantiers de chaque collège français. "]
  ]);
  patch("S017", [
    ["La commune", "Un transport communal ou intercommunal n’est pas la même échelle que l’organisation régionale d’une ligne TER."],
    ["Le tribunal", "Une juridiction tranche des litiges ; elle n’est pas l’autorité organisatrice courante du transport régional."],
    ["Le Conseil constitutionnel", "Son rôle de contrôle ne comprend pas l’organisation opérationnelle des lignes TER. "]
  ]);
  patch("S018", [
    ["Il a été élu par tous les habitants", "Le préfet n’est pas un élu territorial ; les habitants élisent notamment leurs conseillers locaux."],
    ["Il a hérité de la fonction", "La fonction préfectorale n’est pas héréditaire."],
    ["Il a été tiré au sort", "La désignation du préfet se fait par nomination, pas par un tirage au sort. "]
  ]);
  patch("S019", [
    ["La police seule", "L’arrestation ou l’enquête ne constitue pas le jugement final ; la police ne prononce pas seule cette culpabilité et cette peine."],
    ["Le maire seul", "Une fonction municipale ne donne pas le pouvoir de juger seul une infraction de vol."],
    ["La victime seule", "La victime peut agir en justice, mais ne se substitue pas au tribunal pour prononcer une peine. "]
  ], { hook: "La police enquête ; le tribunal juge." });
  patch("S020", [
    ["France Travail", "France Travail intervient dans l’emploi et l’accompagnement des demandeurs ; il ne contrôle pas la constitutionnalité d’une loi."],
    ["Le conseil de prud'hommes", "Cette juridiction traite des litiges individuels du travail ; elle n’est pas le Conseil chargé de ce contrôle constitutionnel."],
    ["La mairie", "La mairie gère des compétences locales et ne remplace pas l’institution de contrôle de constitutionnalité. "]
  ]);
  patch("S021", [
    ["Le maire de Paris", "La fonction municipale ne donne pas l’intérim constitutionnel de la présidence."],
    ["Le ministre de la Justice", "Ce ministère ne lui attribue pas automatiquement les fonctions de chef de l’État en cas de vacance."],
    ["Le président de la Commission européenne", "Une fonction européenne ne confère pas l’intérim du Président français. "]
  ], { explanation: "En cas de vacance, l’article 7 prévoit en premier l’intérim par le président du Sénat. En cas d’empêchement de celui-ci, le Gouvernement exerce les fonctions dans le cadre prévu ; ce mécanisme ne repose pas sur une fonction européenne ou municipale." });
  patch("S022", [
    ["Ignorer la loi", "Un désaccord ne confère pas une dispense personnelle d’appliquer une loi en vigueur ; les recours et débats permettent de la contester."],
    ["Menacer un juge", "Une menace porte atteinte à la personne et à l’indépendance de la justice ; ce n’est pas un recours légal."],
    ["Empêcher physiquement tout contrôle", "Une obstruction physique n’est pas une voie de contestation prévue et peut elle-même constituer une infraction. "]
  ]);
  patch("S023", [
    ["Non, il faut avoir 21 ans", "La majorité électorale est de dix-huit ans ; une personne de dix-neuf ans remplit le critère d’âge."],
    ["Non, seules les personnes propriétaires votent", "La propriété n’est pas une condition du suffrage universel présidentiel."],
    ["Non, les femmes ne votent pas", "Les femmes ont obtenu le droit de vote en 1944 et l’exercent depuis 1945 ; le sexe ne l’exclut pas. "]
  ]);
  patch("S024", [
    ["Les commissaires européens", "Les élections désignent les députés ; la nomination de la Commission suit une autre procédure avec les institutions compétentes."],
    ["Les juges français", "Un mandat au Parlement européen n’est pas la désignation de magistrats de la justice française."],
    ["Les préfets", "Les préfets sont nommés pour représenter l’État territorialement, pas élus par ce scrutin européen. "]
  ]);
  window.CIVIQUE_LEGACY_PATCHES = window.CIVIQUE_LEGACY_PATCHES || [];
  window.CIVIQUE_LEGACY_PATCHES.push({ id: "legacy-valeurs-institutions", questions, lessons: [] });
})();
