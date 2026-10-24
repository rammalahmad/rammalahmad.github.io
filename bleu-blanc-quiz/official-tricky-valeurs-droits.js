(function () {
  "use strict";

  const questions = [];
  function q(id, correct, distractors, explanation, hook) {
    questions.push({
      id,
      correct,
      wrong: distractors.map((item) => item[0]),
      wrongReasons: Object.fromEntries(distractors),
      explanation,
      hook
    });
  }

  // Variantes pédagogiques : les intitulés officiels et les bonnes réponses
  // canoniques ne sont pas modifiés. Ces choix ne viennent pas du ministère.

  q("O001", "Le jour de gloire est arrivé", [
    ["Contre nous de la tyrannie", "Ces paroles appartiennent bien au premier couplet, mais viennent après « Le jour de gloire est arrivé », pas immédiatement après l'ouverture."],
    ["L'étendard sanglant est levé", "Cette phrase suit « Contre nous de la tyrannie » : elle n'est pas la continuation immédiate demandée."],
    ["Entendez-vous dans les campagnes", "Cette question apparaît plus loin dans le couplet, après les vers évoquant la tyrannie et l'étendard."]
  ], "Il faut retrouver la suite exacte : « Allons enfants de la patrie, le jour de gloire est arrivé ». Reconnaître une phrase de l'hymne ne suffit pas à la placer au bon endroit.", "L'ouverture : patrie → jour de gloire.");

  q("O002", "Des informations directement liées à ses compétences et au poste", [
    ["Ses projets d'avoir des enfants, pour anticiper sa disponibilité", "Un projet de grossesse ou de famille relève de la vie privée ; cette justification ne lui donne pas un lien direct et nécessaire avec les aptitudes au poste."],
    ["Ses convictions religieuses, pour vérifier son intégration dans l'équipe", "L'intégration dans l'équipe ne justifie pas un tri selon la religion. Les compétences et les exigences professionnelles pertinentes doivent être évaluées."],
    ["Ses opinions politiques, pour vérifier son accord avec la direction", "Dans le recrutement ordinaire visé ici, l'adhésion aux opinions de la direction n'est pas une aptitude professionnelle et peut devenir un critère discriminatoire."]
  ], "Les informations demandées doivent avoir un lien direct et nécessaire avec l'emploi proposé ou l'évaluation des capacités professionnelles. Présenter une question privée comme utile à l'organisation ne la rend pas légitime.", "Recruter sur les aptitudes, pas sur la vie privée.");

  q("O003", "Une obligation légale annuelle", [
    ["Une démarche remplacée par le prélèvement à la source", "Le prélèvement est un mode de paiement de l'impôt ; il ne remplace pas, à lui seul, l'obligation annuelle de déclaration."],
    ["Une obligation uniquement s'il reste un impôt à payer", "La déclaration sert notamment à établir la situation fiscale : l'absence d'impôt restant à payer n'en dispense pas automatiquement."],
    ["Une obligation réservée aux revenus des travailleurs indépendants", "Les revenus salariés et d'autres catégories de revenus entrent aussi dans les règles déclaratives ; l'obligation n'est pas réservée aux indépendants."]
  ], "Les personnes soumises à l'obligation déclarative doivent vérifier ou déclarer leurs revenus chaque année selon la procédure applicable. Un prélèvement ou des données préremplies ne signifient pas que toute déclaration est inutile.", "Déclarer les revenus et payer l'impôt sont deux opérations.");

  q("O004", "Ils financent notamment l'école, la santé, la justice et les infrastructures", [
    ["Ils financent les dépenses de l'État, mais jamais celles des collectivités territoriales", "Les communes, départements et régions disposent aussi de ressources fiscales pour leurs compétences : le financement public ne concerne pas seulement l'État."],
    ["Ils financent un service public seulement si le contribuable l'utilise personnellement", "L'impôt met des ressources en commun ; il ne fonctionne pas comme un paiement individuel donnant accès uniquement au service utilisé."],
    ["Ils constituent une cotisation exclusivement destinée à la protection sociale", "Impôts et cotisations sociales ne sont pas interchangeables. Les impôts financent des dépenses publiques variées, au-delà de la seule protection sociale."]
  ], "Les recettes fiscales participent au financement des services publics et des équipements collectifs. Leur répartition relève des budgets publics, pas de l'utilisation personnelle de chaque service par un contribuable.", "L'impôt finance la collectivité, pas seulement son propre usage.");

  q("O005", "Une liberté fondamentale reconnue à chacun dans le respect de la loi", [
    ["Une liberté soumise à l'approbation préalable du Gouvernement avant toute création", "Le principe est la liberté de constituer une association, pas une autorisation générale du Gouvernement. Les formalités applicables ne sont pas cette permission préalable."],
    ["Un droit garanti uniquement aux associations reconnues d'utilité publique", "La reconnaissance d'utilité publique est un statut particulier ; elle n'est pas la condition de la liberté d'association."],
    ["Un droit réservé aux personnes possédant la nationalité française", "La liberté d'association n'est pas un droit politique réservé aux seuls Français ; elle bénéficie aussi aux personnes étrangères dans le cadre légal."]
  ], "La liberté d'association permet de se regrouper pour un objet licite. Il faut distinguer cette liberté, les formalités donnant une capacité juridique à l'association et les statuts particuliers comme l'utilité publique.", "Liberté d'association ≠ autorisation générale ni statut d'utilité publique.");

  q("O006", "Protégée, mais limitée notamment par les lois contre les menaces, la diffamation et la haine", [
    ["Soumise aux lois pénales pour les comptes professionnels, mais sans limites pour les comptes personnels", "Un compte personnel reste soumis à la loi. Le caractère public ou privé peut modifier la qualification de certains propos, sans créer une immunité."],
    ["Protégée même en cas de diffamation, à condition de publier sous un pseudonyme", "Un pseudonyme ne supprime ni la qualification des propos ni une éventuelle responsabilité ; il ne rend pas la diffamation licite."],
    ["Autorisée pour les sujets privés, mais interdite pour toute critique du Gouvernement ou des élus", "La critique politique fait partie de la liberté d'expression. Ce sont les abus définis par la loi, pas la seule opposition aux autorités, qui peuvent être sanctionnés."]
  ], "Les réseaux sociaux ne créent pas un espace hors du droit. Les opinions et les critiques sont protégées ; les menaces, la diffamation et l'incitation à la haine peuvent engager une responsabilité dans les conditions légales.", "En ligne aussi : liberté protégée, abus encadrés.");

  q("O007", "Marianne", [
    ["Marie-Antoinette", "Marie-Antoinette est une reine de la monarchie française ; ce n'est pas le prénom de l'allégorie républicaine recherchée."],
    ["Joséphine", "Joséphine évoque notamment l'impératrice du Premier Empire, un autre régime que la République représentée par Marianne."],
    ["Eugénie", "Eugénie évoque l'impératrice du Second Empire ; elle ne désigne pas la figure féminine symbolisant la République."]
  ], "Marianne est l'allégorie féminine de la République française. Il ne faut pas la confondre avec les reines et impératrices de l'histoire de France.", "Marianne : la République, pas une reine ou une impératrice.");

  q("O008", "Marianne", [
    ["La fleur de lys", "La fleur de lys est associée à la monarchie française, et non à la personnification républicaine recherchée."],
    ["L'aigle impérial", "L'aigle impérial renvoie aux régimes impériaux, notamment napoléoniens ; il ne remplace pas Marianne comme allégorie de la République."],
    ["La couronne royale", "La couronne royale représente le pouvoir monarchique, alors que Marianne personnifie le régime républicain."]
  ], "Marianne représente la République. Les autres propositions appartiennent à l'histoire des symboles du pouvoir en France, mais renvoient à la monarchie ou à l'Empire.", "Marianne → République ; lys et couronne → monarchie ; aigle → Empire.");

  q("O009", "Sur les bâtiments publics comme les mairies et les écoles", [
    ["Uniquement sur les bâtiments de l'État, jamais sur ceux des communes", "Les mairies sont des bâtiments communaux sur lesquels la devise peut être inscrite ; elle n'est pas réservée aux édifices de l'État."],
    ["Sur les seules façades des tribunaux, à l'exclusion des écoles", "Les écoles font aussi partie des édifices publics où l'on peut voir la devise. Le mot « seules » rend cette limitation fausse."],
    ["Uniquement dans la Constitution, sans inscription sur les édifices publics", "La devise figure dans la Constitution, mais elle apparaît également sur des édifices publics : texte juridique et affichage ne s'excluent pas."]
  ], "« Liberté, Égalité, Fraternité » est inscrite dans la Constitution et apparaît sur de nombreux bâtiments publics, notamment des mairies et des écoles. Aucun des lieux particuliers cités ne constitue un lieu exclusif.", "La devise se lit dans les textes et sur les édifices publics.");

  q("O010", "Le drapeau tricolore, La Marseillaise et la devise républicaine", [
    ["Le drapeau tricolore, Le Chant des partisans et la devise républicaine", "Le Chant des partisans est un chant de la Résistance, mais l'hymne national identifié par la Constitution est La Marseillaise."],
    ["La fleur de lys, La Marseillaise et la devise républicaine", "La fleur de lys relève de la symbolique monarchique ; l'emblème national constitutionnel est le drapeau bleu, blanc, rouge."],
    ["Le drapeau tricolore, La Marseillaise et « Travail, Famille, Patrie »", "« Travail, Famille, Patrie » est la devise du régime de Vichy, pas la devise républicaine « Liberté, Égalité, Fraternité »."]
  ], "L'article 2 de la Constitution identifie notamment le drapeau tricolore, La Marseillaise et « Liberté, Égalité, Fraternité ». Une liste contenant deux éléments exacts reste fausse si le troisième renvoie à un autre chant ou régime.", "Vérifier les trois éléments, pas seulement le premier.");

  q("O011", "Non, l'outrage public au drapeau peut être sanctionné par la loi", [
    ["Oui, car le droit de propriété sur le drapeau exclut toute sanction pour un outrage public", "Être propriétaire du support matériel ne crée pas une immunité pour un outrage public commis dans les circonstances réprimées par la loi."],
    ["Oui, car tout geste présenté comme une opinion échappe nécessairement à la loi pénale", "La liberté d'expression doit être prise en compte, mais une simple revendication d'opinion n'écarte pas automatiquement les dispositions légales applicables."],
    ["Non, mais uniquement si le drapeau appartient à l'État ou à une mairie", "La question ne se réduit pas au propriétaire du drapeau : le caractère public et les circonstances légalement visées doivent aussi être examinés."]
  ], "Dans le contexte d'outrage public précisé pour cet entraînement, une sanction est possible dans les cas prévus par la loi. Le contexte et les garanties de la liberté d'expression comptent : toute œuvre artistique ou critique politique n'est pas automatiquement une infraction.", "Outrage public : vérifier les circonstances, pas seulement la propriété.");

  q("O012", "En 1945", [
    ["En 1936", "1936 évoque notamment les réformes sociales du Front populaire et les congés payés ; les ordonnances instituant la Sécurité sociale datent de l'après-guerre."],
    ["En 1944", "Le programme du Conseil national de la Résistance prépare des réformes sociales en 1944 ; il faut le distinguer des ordonnances de mise en place de 1945."],
    ["En 1946", "Le Préambule de 1946 affirme des droits sociaux, mais il ne faut pas confondre cette affirmation constitutionnelle avec l'institution de la Sécurité sociale en 1945."]
  ], "Les ordonnances instituant la Sécurité sociale datent de 1945. Le programme de la Résistance, les réformes du Front populaire et les garanties constitutionnelles de 1946 sont des repères voisins, mais distincts.", "Sécurité sociale : 1945, entre programme de 1944 et Préambule de 1946.");

  q("O013", "Le 14 juillet 1789 et l'héritage révolutionnaire, avec la Fête de la Fédération de 1790", [
    ["La proclamation de la Première République en 1792 et la fin de la monarchie", "La proclamation de la République est liée à septembre 1792 ; ce n'est pas l'événement du 14 juillet commémoré par la fête nationale."],
    ["L'armistice de 1918 et la fin des combats de la Première Guerre mondiale", "L'armistice de la Première Guerre mondiale est commémoré le 11 novembre, pas lors de la fête nationale du 14 juillet."],
    ["La victoire de 1945 en Europe et la capitulation de l'Allemagne nazie", "La victoire de 1945 est commémorée le 8 mai ; elle ne correspond pas à la fête nationale du 14 juillet."]
  ], "Le 14 juillet associe l'héritage de la prise de la Bastille en 1789 et celui de la Fête de la Fédération de 1790. Les commémorations du 8 mai et du 11 novembre ont d'autres objets.", "14 juillet : 1789 et 1790 ; 11 novembre : 1918 ; 8 mai : 1945.");

  q("O014", "Un bonnet phrygien", [
    ["Une couronne royale", "La couronne royale évoque la monarchie ; l'attribut républicain recherché est le bonnet phrygien."],
    ["Un bicorne napoléonien", "Le bicorne est notamment associé à Napoléon ; ce n'est pas l'attribut habituel demandé pour Marianne."],
    ["Un béret", "Le béret peut évoquer une image culturelle de la France, mais il ne désigne pas le bonnet révolutionnaire de Marianne."]
  ], "Dans sa représentation républicaine habituelle, Marianne porte un bonnet phrygien, symbole de liberté. Il faut distinguer un symbole républicain d'une coiffe simplement associée à l'histoire ou à la culture françaises.", "Marianne porte le bonnet de la liberté : le bonnet phrygien.");

  q("O015", "Le coq", [
    ["La fleur de lys", "La fleur de lys renvoie à la monarchie française ; ce n'est pas l'emblème de la fédération française de football recherché sur le maillot."],
    ["L'aigle impérial", "L'aigle impérial évoque l'Empire ; le maillot de l'équipe de France de football porte l'emblème du coq."],
    ["Le bonnet phrygien", "Le bonnet phrygien est associé à Marianne et à la liberté, mais ce n'est pas l'emblème de football demandé."]
  ], "Le coq est un emblème français très présent dans le sport et sur les maillots de l'équipe de France de football. Tous les symboles liés à la France ne figurent pas sur ce maillot.", "Football français : le coq, pas la coiffe de Marianne.");

  q("O016", "Liberté, Égalité, Fraternité", [
    ["Liberté, Égalité, Justice", "La justice est une notion républicaine importante, mais le troisième mot de la devise est « Fraternité »."],
    ["Liberté, Unité, Fraternité", "L'unité de la République est un principe, mais le deuxième mot exact de la devise est « Égalité »."],
    ["Travail, Famille, Patrie", "Cette formule est celle du régime de Vichy ; elle a remplacé la devise républicaine dans ce régime, sans être la devise actuelle de la République."]
  ], "La devise exacte est « Liberté, Égalité, Fraternité ». Un principe également important, comme la justice ou l'unité, ne peut pas être substitué à l'un de ses trois mots.", "Les trois mots exacts : Liberté, Égalité, Fraternité.");

  q("O017", "Le droit de créer une association ou d'y adhérer pour un objet licite", [
    ["Le droit de créer une association uniquement pour une activité caritative", "L'objet licite peut être sportif, culturel, social ou autre ; il n'a pas à être exclusivement caritatif."],
    ["Le droit de créer une association seulement après approbation générale de son projet par le Gouvernement", "La liberté de constitution ne dépend pas d'une approbation générale du projet par le Gouvernement. Les formalités légales ont une autre fonction."],
    ["Le droit des adhérents d'imposer le maintien dans l'association à un membre qui veut la quitter", "La liberté d'association comprend aussi la liberté de ne pas adhérer et de quitter l'association dans le cadre légal ; le groupe ne peut pas supprimer cette liberté."]
  ], "La liberté d'association comprend la création et l'adhésion pour un objet licite, ainsi que la liberté de ne pas adhérer. Elle n'est ni réservée à la bienfaisance ni transformée en obligation de rester membre.", "Créer, adhérer et pouvoir ne pas adhérer : une même liberté.");

  q("O018", "La possibilité d'agir dans le respect de la loi et des droits d'autrui", [
    ["La possibilité d'agir sans aucune limite dès lors qu'on évite les seules violences physiques", "Les droits d'autrui comprennent aussi la vie privée, l'honneur, les biens ou d'autres protections ; l'absence de violence physique ne suffit pas."],
    ["La possibilité d'agir selon sa volonté dès qu'une majorité de voisins l'approuve", "L'approbation d'un groupe ne remplace pas la loi et ne permet pas d'écarter les droits des personnes minoritaires."],
    ["La possibilité d'agir à condition de renoncer d'avance à toute critique des autorités", "La critique des autorités est elle-même protégée par la liberté d'expression dans les limites légales ; y renoncer n'est pas une condition générale de la liberté."]
  ], "Une liberté est une possibilité d'agir protégée par le droit, compatible avec les droits des autres. Elle ne se définit ni par une absence de toute règle ni par l'approbation de la majorité ou d'une autorité.", "Ma liberté doit rester compatible avec celle d'autrui.");

  q("O019", "Sur certains timbres-poste français", [
    ["Sur les timbres français montrant uniquement le portrait de Louis Pasteur", "Un portrait de Louis Pasteur représente le scientifique ; il ne doit pas être confondu avec Marianne, figure féminine allégorique de la République."],
    ["Sur les timbres britanniques à l'effigie de Charles III", "Ces timbres représentent le souverain britannique ; il ne faut pas confondre portrait monarchique britannique et allégorie républicaine française."],
    ["Sur les timbres espagnols à l'effigie de Felipe VI", "Le portrait du roi d'Espagne n'est pas Marianne. La présence d'une figure officielle sur un timbre ne suffit pas à en faire le symbole français."]
  ], "Marianne figure sur certains timbres-poste français. Les timbres représentent aussi des personnalités historiques ; une effigie officielle n'est pas nécessairement l'allégorie républicaine Marianne.", "Un portrait officiel sur un timbre n'est pas forcément Marianne.");

  q("O020", "Toutes les personnes sont égales devant la loi et disposent des mêmes droits sans discrimination", [
    ["Toutes les personnes doivent payer exactement le même montant d'impôt, quels que soient leurs revenus", "L'égalité devant la loi n'impose pas un impôt identique : la contribution aux charges publiques peut tenir compte des facultés contributives."],
    ["Toutes les personnes doivent avoir une situation matérielle identique, quels que soient leurs besoins", "L'égalité juridique ne signifie pas que les situations, les ressources ou les besoins de chacun deviennent identiques."],
    ["Toutes les personnes doivent être traitées sans aucun aménagement, même en cas de handicap", "Des adaptations peuvent permettre l'exercice effectif des mêmes droits ; l'égalité n'interdit pas de tenir compte d'une différence pertinente de situation."]
  ], "L'égalité interdit les discriminations et protège l'égalité devant la loi. Elle n'est pas une uniformité matérielle : des différences de traitement peuvent être légales si elles reposent sur une justification admissible, comme une condition d'âge ou des besoins d'accessibilité.", "Égalité des droits ≠ situations ou montants identiques.");

  q("O021", "Oui, la liberté de conscience le garantit", [
    ["Oui, à condition de déclarer ce changement à la mairie", "Il n'existe pas d'autorisation ou de déclaration générale à la mairie pour changer de religion ; la conviction relève de la liberté de conscience."],
    ["Oui, mais seulement à partir de la majorité civile", "La liberté de conscience ne naît pas seulement à 18 ans. Pour les mineurs, son exercice s'articule avec l'âge, la maturité et les responsabilités parentales."],
    ["Oui, si son ancienne autorité religieuse donne son autorisation", "Une règle interne à une religion ne remplace pas le droit civil à la liberté de conscience ; l'État n'exige pas cette autorisation pour changer de croyance."]
  ], "La liberté de conscience comprend croire, ne pas croire et changer de religion. Elle ne dépend pas d'une permission du maire ou d'une autorité religieuse, et bénéficie aussi aux mineurs selon le cadre applicable.", "Changer de croyance : un droit, pas une autorisation administrative.");

  q("O022", "Exprimer ses convictions, y compris religieuses, tant qu'il respecte l'ordre public et le fonctionnement du service", [
    ["Exprimer ses convictions religieuses seulement après une autorisation du maire délivrée avant sa démarche", "L'usager n'est pas soumis à une autorisation générale du maire pour exprimer ses convictions ; les limites portent notamment sur l'ordre public et le bon fonctionnement."],
    ["Être soumis à la même obligation de neutralité religieuse qu'un agent public pendant toute sa présence au guichet", "L'obligation de neutralité de l'agent dans ses fonctions ne devient pas une obligation générale pour l'usager du seul fait qu'il entre dans une mairie."],
    ["Exiger qu'une règle de fonctionnement légalement applicable soit écartée pour la seule raison qu'elle contrarie sa croyance", "La liberté de conscience ne donne pas à l'usager le droit d'imposer une dérogation à une règle commune légalement applicable au service."]
  ], "Il faut distinguer les rôles : l'agent est neutre dans ses fonctions ; l'usager conserve sa liberté d'expression religieuse. Cette liberté respecte toutefois l'ordre public et les règles légales de fonctionnement du service.", "Même mairie : l'agent est neutre, l'usager respecte les règles sans devenir agent.");

  q("O023", "L'entretien de certains édifices religieux publics, notamment antérieurs à 1905", [
    ["Le budget courant de tout culte, du seul fait qu'il est pratiqué en France", "Le simple fait qu'un culte existe en France n'ouvre pas un droit général à la prise en charge de son fonctionnement par l'État."],
    ["La construction de tout lieu de culte privé, sans finalité publique ni exception légale", "Le principe de séparation n'autorise pas une prise en charge générale ainsi formulée. Des dispositifs particuliers ne rendent pas toute construction privée finançable sans conditions."],
    ["Une association cultuelle uniquement parce que sa croyance est majoritaire dans la commune", "La popularité d'une religion ne constitue pas, à elle seule, une justification légale de financement ; la neutralité interdit de la privilégier pour ce seul motif."]
  ], "La séparation ne signifie pas qu'aucune dépense ne peut jamais concerner un édifice religieux. L'entretien d'édifices religieux appartenant à des personnes publiques peut être légal, notamment pour les bâtiments historiques ; d'autres exceptions et régimes particuliers sont encadrés.", "Financer légalement un bâtiment public ne signifie pas financer une religion officielle.");

  q("O024", "1905", [
    ["1901", "La loi de 1901 concerne les associations ; elle ne doit pas être confondue avec la loi de séparation des Églises et de l'État."],
    ["1904", "La loi de 1904 vise notamment l'enseignement des congrégations ; la loi de séparation est une étape distincte, adoptée en 1905."],
    ["2004", "La loi de 2004 concerne notamment les signes et tenues religieux ostensibles des élèves des écoles, collèges et lycées publics, pas la séparation générale de 1905."]
  ], "La loi de séparation des Églises et de l'État est celle du 9 décembre 1905. Les lois de 1901, 1904 et 2004 concernent des sujets proches, mais ne sont pas cette loi de séparation.", "Associations : 1901 ; séparation : 1905 ; signes des élèves : 2004.");

  q("O025", "La République garantit la liberté de conscience et ne reconnaît ni ne salarie aucun culte", [
    ["La République garantit la liberté de conscience tout en reconnaissant une religion majoritaire comme officielle", "La garantie de conscience ne s'accompagne pas de la reconnaissance générale d'une religion officielle : ce serait contraire au principe de séparation."],
    ["La République garantit les croyances et finance systématiquement tous les cultes à parts égales", "L'égalité des convictions ne crée pas un financement obligatoire et systématique des cultes ; les exceptions de financement sont encadrées."],
    ["La République respecte les croyances et impose la neutralité religieuse à tous les citoyens dans leur vie privée", "La neutralité de l'État et de ses agents ne se transforme pas en obligation de neutralité des citoyens chez eux ; leur liberté de conscience reste protégée."]
  ], "La loi de 1905 garantit la liberté de conscience et pose le principe général de non-reconnaissance, de non-salariat et de non-subvention des cultes. Les exceptions légales et régimes historiques ne créent ni religion officielle ni financement égal obligatoire de tout culte.", "1905 : conscience protégée, séparation de principe, exceptions encadrées.");

  q("O026", "La liberté de conscience et l'égalité de tous quelle que soit leur conviction", [
    ["La neutralité religieuse obligatoire de tous les usagers des services publics", "La neutralité incombe aux agents dans leurs fonctions ; elle n'est pas imposée en général aux usagers, qui conservent leur liberté de conviction."],
    ["L'interdiction générale de montrer un signe religieux dans tout espace public", "Il n'existe pas d'interdiction générale de tout signe religieux dans l'espace public. Les règles particulières, par exemple pour certains élèves, ont un champ précis."],
    ["La suppression de toute prise en compte d'un besoin religieux, y compris des aumôneries légalement prévues", "La laïcité peut justement permettre le libre exercice des cultes dans certaines institutions au moyen d'aumôneries encadrées ; elle n'efface pas ces dispositifs."]
  ], "La laïcité garantit la conscience et l'égalité des croyants comme des non-croyants, avec la neutralité de l'État. Elle ne confond pas agents et usagers et ne consiste pas à faire disparaître toute expression ou tout besoin religieux.", "Laïcité : protéger les convictions sans privilégier une religion.");

  q("O027", "Le 9 décembre", [
    ["Le 15 mars", "Le 15 mars renvoie à la date de la loi de 2004 sur les signes religieux des élèves ; ce n'est pas la journée de la laïcité liée à la loi de 1905."],
    ["Le 1er juillet", "Le 1er juillet évoque la loi de 1901 sur les associations, un autre repère de liberté publique."],
    ["Le 14 juillet", "Le 14 juillet est la fête nationale ; la journée de la laïcité se rattache à l'anniversaire de la loi de séparation, en décembre."]
  ], "La Journée de la Laïcité est le 9 décembre, anniversaire de la loi de séparation de 1905. Une date d'une autre loi de liberté publique n'est pas interchangeable avec cet anniversaire.", "9 décembre : anniversaire de la séparation de 1905.");

  q("O028", "Un signe religieux discret", [
    ["Un signe manifestant ostensiblement une religion, si l'élève ne fait aucun prosélytisme", "Pour les élèves visés, l'absence de prosélytisme ne rend pas autorisé un signe ou une tenue manifestant ostensiblement une appartenance religieuse."],
    ["Aucun signe religieux, même discret, parce que l'élève a la même neutralité qu'un enseignant", "La règle des élèves vise l'expression ostensible ; la neutralité religieuse des personnels dans leurs fonctions est une obligation distincte."],
    ["Un signe ostensible, si les parents ont donné une autorisation écrite", "L'accord des parents ne crée pas une dérogation à la loi applicable aux élèves des écoles, collèges et lycées publics."]
  ], "Dans le cadre précisé pour l'élève d'une école, d'un collège ou d'un lycée public, les signes discrets ne sont pas interdits par la règle visant les signes et tenues ostensibles. Il ne faut pas assimiler visibilité et caractère ostensible, ni l'élève et l'agent public.", "Élève : discret possible ; ostensible interdit dans le cadre visé.");

  q("O029", "L'antisémitisme", [
    ["La xénophobie", "La xénophobie désigne l'hostilité envers les étrangers ou ce qui est perçu comme étranger ; elle ne nomme pas précisément la haine visant les Juifs."],
    ["L'islamophobie", "Ce terme vise l'hostilité ou les préjugés envers les musulmans, pas le groupe spécifiquement désigné dans la question."],
    ["Le négationnisme", "Le négationnisme désigne la négation de crimes ou de faits historiques, notamment de la Shoah. Il peut participer à l'antisémitisme, sans désigner à lui seul toute haine ou tout préjugé contre les Juifs."]
  ], "Le terme précisément demandé est l'antisémitisme. Il faut distinguer une hostilité visant un groupe déterminé, une hostilité générale envers les étrangers et une négation de crimes historiques.", "Haine visant les Juifs : antisémitisme.");

  q("O030", "La loi du 9 décembre 1905", [
    ["La loi du 1er juillet 1901", "La loi de 1901 porte sur les associations. Elle protège une liberté publique, mais n'est pas la loi de séparation des Églises et de l'État."],
    ["La loi du 15 mars 2004", "La loi de 2004 précise une application scolaire concernant les signes et tenues ostensibles des élèves ; elle n'est pas le texte fondateur général de la séparation."],
    ["La loi du 29 juillet 1881", "La loi de 1881 est le grand texte relatif à la liberté de la presse, pas à la séparation des Églises et de l'État."]
  ], "La référence centrale est la loi du 9 décembre 1905. Les autres lois protègent ou encadrent d'autres libertés et institutions ; une application scolaire ultérieure ne remplace pas le texte de séparation.", "1905 fonde la séparation ; 2004 en précise une application scolaire.");

  q("O031", "L'État et les services publics", [
    ["Les associations cultuelles privées", "Une association cultuelle a précisément une finalité religieuse ; elle n'est pas soumise, du seul fait d'exister, à la neutralité religieuse de l'État."],
    ["Les établissements d'enseignement privés hors contrat", "Ils peuvent avoir un caractère confessionnel dans le cadre légal ; ils ne sont pas, en tant que tels, les institutions publiques auxquelles s'applique l'obligation générale visée."],
    ["Les entreprises privées sans mission de service public", "Une entreprise privée peut encadrer certaines expressions dans les conditions légales, mais elle n'a pas la même obligation générale de neutralité religieuse que l'État."]
  ], "La neutralité religieuse concerne l'État, les services publics et leurs agents dans leurs fonctions. Les personnes et organismes privés conservent des libertés, avec des règles propres selon leur activité et leur éventuelle mission de service public.", "Institution publique neutre ≠ toute organisation privée neutre.");

  q("O032", "La neutralité de l'État et la liberté de conscience de chacun", [
    ["La neutralité religieuse de toute personne dès qu'elle entre dans un service public", "Entrer comme usager ne transforme pas la personne en agent ; elle conserve ses convictions et doit respecter les règles du service."],
    ["Le financement équivalent et obligatoire de toutes les pratiques religieuses par l'État", "L'égalité des convictions ne se définit pas par une obligation de financer chaque culte ; la séparation pose un autre principe, avec des exceptions encadrées."],
    ["La séparation réservée aux écoles, les mairies pouvant promouvoir officiellement un culte", "La neutralité n'est pas limitée à l'école : une mairie, comme institution publique, ne peut pas se donner une religion officielle."]
  ], "La laïcité associe la liberté de conscience, l'égalité des convictions et la neutralité de l'État. Elle n'est ni une neutralité obligatoire de tous les usagers ni une séparation limitée à certains bâtiments.", "État neutre, conscience libre.");

  q("O033", "Expliquer les règles et les valeurs de la laïcité à la communauté scolaire", [
    ["Autoriser chaque élève à refuser un enseignement pour le seul motif de sa conviction religieuse", "La charte rappelle que les convictions ne permettent pas de contester le droit d'un enseignant de traiter un sujet au programme ni de refuser les règles de l'école."],
    ["Interdire l'étude objective des religions dans les cours d'histoire", "L'étude des faits religieux comme objet de connaissance n'est pas un enseignement confessionnel ; la laïcité ne l'interdit pas."],
    ["Remplacer les lois nationales par des règles négociées librement avec chaque classe", "La charte explique les principes applicables ; elle ne donne pas à une classe le pouvoir de remplacer la loi ou le règlement légalement établi."]
  ], "La charte rend compréhensibles les principes de laïcité dans la communauté scolaire. Elle protège la conscience et l'apprentissage, sans transformer les convictions en droit de refuser le programme ni interdire l'étude objective des religions.", "La charte explique le cadre ; elle ne remplace pas les lois.");

  q("O034", "Tous les agents publics dans l'exercice de leurs fonctions", [
    ["Les seuls agents en contact direct avec le public, pas ceux travaillant dans les bureaux", "La neutralité s'applique dans l'exercice des fonctions, y compris sans contact direct avec un usager ; elle n'est pas limitée au guichet."],
    ["Uniquement les enseignants des établissements publics, pas les agents administratifs", "Les enseignants sont concernés, mais les autres agents publics le sont aussi : ce n'est pas une obligation réservée à l'enseignement."],
    ["Les usagers seulement, les agents pouvant afficher leurs convictions religieuses dans leurs fonctions", "Cette proposition inverse les rôles : les agents ont une obligation de neutralité professionnelle ; les usagers n'ont pas cette obligation générale."]
  ], "La neutralité s'impose à tous les agents publics lorsqu'ils exercent leurs fonctions. Le métier, l'absence de public devant soi ou la présence d'une croyance personnelle ne retirent pas cette obligation professionnelle.", "Neutralité de fonction : tous les agents, pas seulement le guichet.");

  q("O035", "Qu'elle est athée", [
    ["Qu'elle est nécessairement agnostique", "L'agnosticisme porte sur la possibilité de connaître l'existence d'un dieu. Ne croire en aucun dieu ne permet pas, à lui seul, de déduire cette position sur la connaissance."],
    ["Qu'elle est déiste", "Le déisme suppose une croyance en une divinité, même sans adhésion à une religion révélée ; cela ne correspond pas à l'absence de croyance indiquée."],
    ["Qu'elle est polythéiste", "Le polythéisme est une croyance en plusieurs dieux ; la personne affirme ici ne croire en aucun."]
  ], "L'absence de croyance en un dieu correspond à l'athéisme. L'agnosticisme désigne une position sur la connaissance ; les deux notions peuvent se combiner, mais l'une ne se déduit pas automatiquement de l'autre.", "Athée : ne croit pas ; agnostique : ne prétend pas savoir.");

  q("ON001", "La solidarité et l’entraide entre les personnes", [
    ["L'égalité de toutes les personnes devant la loi", "C'est la valeur d'égalité, autre mot de la devise ; la fraternité met plus directement l'accent sur la solidarité et l'entraide."],
    ["La possibilité d'agir dans le respect des droits d'autrui", "Cette définition correspond principalement à la liberté ; elle ne définit pas le sens de la fraternité demandé ici."],
    ["La solidarité réservée aux personnes possédant la même nationalité", "La fraternité ne se réduit pas à une entraide entre seuls nationaux ; elle invite à reconnaître les autres comme des personnes et à agir avec solidarité."]
  ], "Les trois valeurs se complètent, mais ne sont pas synonymes. La fraternité désigne la solidarité et l'entraide, sans les réserver aux seuls membres d'une même famille ou d'une même nationalité.", "Liberté : agir ; égalité : mêmes droits ; fraternité : entraide.");

  q("ON002", "Indivisible, laïque, démocratique et sociale", [
    ["Fédérale, laïque, démocratique et sociale", "Le premier qualificatif constitutionnel est « indivisible ». La France n'est pas une fédération d'États souverains."],
    ["Indivisible, confessionnelle, démocratique et sociale", "Le caractère « laïque » exclut une religion officielle ; « confessionnelle » ne peut pas le remplacer."],
    ["Indivisible, laïque, censitaire et sociale", "« Démocratique » ne signifie pas réserver le vote à ceux qui paient un certain montant d'impôt : le suffrage censitaire n'est pas le principe constitutionnel actuel."]
  ], "L'article 1er donne les quatre qualificatifs : indivisible, laïque, démocratique et sociale. Une liste presque identique reste fausse si elle remplace l'un de ces principes par un autre régime.", "Article 1er : indivisible, laïque, démocratique, sociale.");

  q("ON003", "L’État ne privilégie aucune religion et traite chacun sans discrimination religieuse", [
    ["L'État traite de façon égale les croyants, mais peut écarter les personnes qui ne croient en aucun dieu", "L'égalité et la liberté de conscience protègent aussi les non-croyants ; la neutralité ne se limite pas aux personnes religieuses."],
    ["L'État impose la neutralité religieuse à tous les usagers comme à ses agents dans leurs fonctions", "La neutralité professionnelle de l'agent ne devient pas une obligation générale pour l'usager ; celui-ci conserve sa liberté de conviction."],
    ["L'État doit financer automatiquement tous les cultes à parts égales pour prouver sa neutralité", "Ne pas privilégier une religion n'oblige pas à financer tous les cultes. Les dépenses autorisées relèvent de cadres légaux particuliers, pas d'une distribution automatique."]
  ], "La neutralité exige un traitement impartial des croyants et des non-croyants, sans religion privilégiée. Elle concerne l'État et les agents dans leurs fonctions, avec protection de la conscience des personnes.", "Neutralité : aucun privilège religieux, aucune discrimination de conviction.");

  q("O090", "À défendre des revendications professionnelles et sociales par un arrêt collectif du travail", [
    ["À diminuer collectivement le rythme du travail tout en restant au poste, sans arrêt total", "Un simple ralentissement du travail ne correspond pas à l'arrêt collectif du travail qui caractérise la grève dans le cadre visé."],
    ["À cesser collectivement le travail pour un motif exclusivement politique, sans revendication professionnelle", "La grève protégée suppose des revendications professionnelles ; un mouvement exclusivement politique sans lien professionnel ne répond pas à cette définition."],
    ["À transformer un arrêt collectif du travail en rupture automatique des contrats de travail", "Une grève suspend l'exécution du travail dans son cadre légal ; elle ne transforme pas automatiquement les salariés en démissionnaires."]
  ], "La grève est un arrêt collectif du travail destiné à soutenir des revendications professionnelles, notamment salariales ou sociales. Il faut la distinguer d'un simple ralentissement, d'une démission et d'un mouvement sans revendication professionnelle.", "Grève : arrêt du travail, revendications professionnelles, pas rupture du contrat.");

  q("O091", "De motifs légaux comme l'ordre public, à condition que la mesure soit nécessaire et proportionnée", [
    ["Du seul soutien de la majorité, même sans base légale ni contrôle de la restriction", "L'approbation majoritaire ne suffit pas à supprimer les garanties des droits ; une restriction doit avoir un fondement légal et pouvoir être contrôlée."],
    ["De tout objectif d'ordre public, même si la restriction dépasse ce qui est nécessaire", "L'ordre public peut être un objectif légitime, mais il ne dispense pas de vérifier la nécessité et la proportionnalité de la mesure."],
    ["De la seule qualité d'autorité publique de l'auteur de la décision administrative", "L'identité de l'autorité ne rend pas automatiquement sa décision légale ; son pouvoir reste soumis aux règles et aux garanties des droits."]
  ], "Une restriction exige une base légale, un objectif admissible et une mesure nécessaire et proportionnée. Ni l'ordre public invoqué seul, ni une majorité, ni la qualité d'autorité publique ne suffisent à écarter ces conditions.", "Restriction : base légale + objectif légitime + nécessité + proportionnalité.");

  q("O092", "Les hommes naissent et demeurent libres et égaux en droits", [
    ["Tous les êtres humains naissent libres et égaux en dignité et en droits", "C'est la formulation de l'article 1er de la Déclaration universelle de 1948, pas la citation exacte de l'article 1er de la Déclaration de 1789 demandée ici."],
    ["Les hommes naissent libres et deviennent égaux en droits à leur majorité", "Le texte affirme qu'ils naissent et demeurent égaux en droits ; il ne fait pas commencer cette égalité à la majorité."],
    ["Les hommes naissent et demeurent libres et égaux devant l'impôt", "L'égalité contributive est un autre principe de la Déclaration ; la citation de l'article 1er parle d'égalité « en droits », pas seulement devant l'impôt."]
  ], "La citation exacte de 1789 est « Les hommes naissent et demeurent libres et égaux en droits ». La Déclaration universelle de 1948 utilise une formulation très proche avec « tous les êtres humains » et « en dignité et en droits ».", "1789 : hommes, demeurent, en droits ; 1948 : êtres humains, dignité.");

  q("O093", "Chacun est libre tant qu'il respecte les droits et la sécurité des autres", [
    ["Chacun est libre tant qu'il ne blesse personne physiquement, même s'il porte atteinte aux autres droits", "Le dommage à autrui ne se limite pas à une blessure : la vie privée, les biens ou l'honneur sont aussi protégés."],
    ["Une conviction personnelle forte permet de faire passer sa liberté avant tous les droits des autres", "La force d'une conviction ne crée pas une priorité absolue ; l'exercice des libertés doit rester compatible avec les droits d'autrui."],
    ["Chacun doit renoncer à toute action dès qu'une autre personne la désapprouve", "La seule désapprobation n'est pas une atteinte aux droits. Les limites doivent être définies dans le cadre légal, pas par les préférences de chacun."]
  ], "L'article 4 organise des libertés compatibles entre elles. La loi détermine les limites protégeant l'exercice des mêmes droits par autrui ; une désapprobation privée ne suffit pas, mais l'absence de blessure physique ne suffit pas non plus.", "Ne pas nuire ≠ ne déplaire à personne.");

  q("O094", "La France est une République indivisible, laïque, démocratique et sociale", [
    ["La France est une République fédérale, laïque, démocratique et sociale", "L'article 1er dit « indivisible ». La décentralisation ne transforme pas la France en une fédération d'États souverains."],
    ["La France est une République indivisible, confessionnelle, démocratique et sociale", "La Constitution affirme son caractère laïque et le respect des croyances ; une République confessionnelle ne correspond pas à ce principe."],
    ["La France est une République indivisible, laïque, démocratique et censitaire", "Le quatrième qualificatif est « sociale ». Le suffrage censitaire, lié à un niveau d'impôt, n'est pas le principe du suffrage actuel."]
  ], "L'article 1er qualifie la France d'indivisible, laïque, démocratique et sociale, et garantit notamment l'égalité devant la loi et le respect des croyances. Il faut retrouver les quatre mots exacts.", "Article 1er : indivisible, laïque, démocratique, sociale.");

  q("O095", "Le droit d'informer et de publier librement dans le respect de la loi", [
    ["Le droit de critiquer le Gouvernement après autorisation préalable du ministère de l'Intérieur", "La liberté de la presse n'est pas subordonnée à une autorisation générale du ministère pour publier une critique politique."],
    ["Le droit d'écarter automatiquement les règles sur la diffamation dès qu'un article se dit d'intérêt général", "L'intérêt général compte dans l'appréciation de l'expression, mais il ne crée pas une dispense automatique de toutes les règles et responsabilités."],
    ["Le droit de publier seulement si chaque personne citée a donné son accord préalable", "Une personne citée ne dispose pas d'un droit général de veto sur une publication. Les droits d'autrui doivent être respectés, sans transformer toute information en autorisation préalable."]
  ], "La presse peut informer, enquêter et critiquer librement dans le cadre légal. Il faut distinguer l'absence de censure générale d'une immunité pour tout propos : la vie privée, la diffamation et d'autres protections restent pertinentes.", "Presse libre : pas de permission générale, pas d'immunité générale.");

  q("O096", "Se déplacer et choisir sa résidence dans le respect de la loi", [
    ["Choisir un logement vacant et s'y installer sans l'accord du propriétaire", "La liberté de choisir sa résidence ne supprime pas le droit de propriété ni les règles d'accès et d'occupation d'un logement."],
    ["Résider sur un territoire sans respecter aucune condition légale d'entrée ou de séjour", "La liberté de circulation s'exerce dans un cadre légal ; elle ne fait pas disparaître les conditions applicables à l'entrée et au séjour."],
    ["Franchir toute frontière sans document requis dès lors que le déplacement est professionnel", "Le motif professionnel ne dispense pas automatiquement des documents et contrôles prévus pour franchir une frontière."]
  ], "Cette liberté protège les déplacements et le choix de résidence dans le cadre légal. Elle n'est pas un droit d'entrer chez autrui, de supprimer les frontières ou d'écarter les règles de séjour.", "Circuler librement ne signifie pas entrer partout sans condition.");

  q("O097", "Être membre de sa communauté politique avec des droits et des devoirs", [
    ["Posséder un titre de séjour autorisant une résidence permanente dans cet État", "Un droit de séjour durable concerne la résidence ; il ne transforme pas, à lui seul, son titulaire en membre de la communauté politique nationale."],
    ["Être recensé comme habitant par la commune où l'on réside", "Le recensement compte les habitants ; il ne crée pas le lien juridique et politique de citoyenneté."],
    ["Payer des impôts dans l'État où l'on a sa résidence habituelle", "Les personnes étrangères peuvent aussi être contribuables. L'obligation fiscale ne suffit donc pas à établir la citoyenneté."]
  ], "La citoyenneté est un lien politique et juridique comportant des droits et des devoirs. Elle doit être distinguée du domicile, de la qualité de contribuable et de la possession d'un titre de séjour.", "Résident, contribuable et citoyen : trois notions distinctes.");

  q("O098", "Des droits essentiels protégés pour chaque personne", [
    ["Des libertés que le Parlement peut supprimer sans respecter les garanties constitutionnelles", "Le législateur est lui-même soumis aux normes et aux contrôles qui protègent les droits fondamentaux ; une majorité parlementaire ne suffit pas à les rendre sans garantie."],
    ["Des droits politiques réservés uniquement aux électeurs nationaux", "Les droits fondamentaux comprennent notamment la dignité et des libertés de toute personne, même lorsqu'elle n'a pas le droit de vote national."],
    ["Des orientations morales dépourvues de garanties constitutionnelles ou juridiques", "Ces droits sont protégés par des normes et des juridictions ; ils ne se réduisent pas à des conseils moraux facultatifs."]
  ], "Les droits fondamentaux sont des protections essentielles de la personne, garanties notamment par des règles constitutionnelles, européennes et internationales. Certains droits politiques ont des conditions d'exercice, sans faire disparaître les droits humains de tous.", "Les droits de la personne dépassent les seuls droits de l'électeur.");

  q("O099", "Le droit à la liberté et à la sûreté, avec un contrôle de l'autorité judiciaire", [
    ["Le droit de propriété, avec la protection des biens et les garanties prévues en cas d'expropriation", "La propriété protège les biens ; le droit spécifiquement recherché contre une arrestation ou détention arbitraire porte sur la liberté et la sûreté de la personne."],
    ["Le droit de grève, avec la protection d'un arrêt collectif du travail pour des revendications professionnelles", "La grève protège un moyen d'action professionnel. Elle n'est pas le droit encadrant directement l'arrestation et la détention."],
    ["Le droit de vote, avec la participation au choix des représentants dans les élections prévues", "Le vote est un droit politique ; la protection immédiate contre une arrestation arbitraire relève de la liberté et de la sûreté avec les garanties judiciaires."]
  ], "Le droit à la liberté et à la sûreté interdit les privations de liberté hors des cas et procédures légaux. L'autorité judiciaire garantit la liberté individuelle ; d'autres droits importants ont des objets différents.", "Contre la détention arbitraire : liberté, sûreté, contrôle judiciaire.");

  q("O100", "La Déclaration des Droits de l'Homme et du Citoyen de 1789", [
    ["La loi du 9 décembre 1905 sur la séparation des Églises et de l'État", "Ce texte fonde la séparation et garantit la conscience, mais n'est pas la déclaration générale de 1789 sur les droits, la souveraineté et les charges publiques."],
    ["La loi du 29 juillet 1881 sur la liberté de la presse", "Cette loi encadre la liberté de la presse ; elle n'est pas le texte constitutionnel fondateur général demandé pour les droits et devoirs civiques."],
    ["La loi du 1er juillet 1901 relative au contrat d'association", "La loi de 1901 concerne les associations. Elle protège une liberté particulière, sans remplacer la Déclaration de 1789 comme référence générale."]
  ], "La Déclaration de 1789 est la référence constitutionnelle fondatrice : liberté, égalité, souveraineté, garanties de la justice et contribution commune. Les grandes lois sur une liberté particulière sont des textes distincts.", "Socle général : 1789 ; lois de libertés particulières : 1881, 1901, 1905.");

  q("O101", "La Déclaration des Droits de l'Homme et du Citoyen", [
    ["Le Code du travail", "Le Code du travail protège notamment les salariés et interdit des discriminations, mais la formulation générale de naissance libre et égale vient de la Déclaration de 1789."],
    ["La loi de séparation des Églises et de l'État", "La loi de 1905 garantit la conscience et organise la séparation ; ce n'est pas le texte dont l'article 1er s'ouvre par la formule demandée."],
    ["La loi sur la liberté de la presse", "La liberté de la presse fait partie des libertés protégées, mais sa grande loi de 1881 n'est pas la Déclaration qui affirme cette égalité dès la naissance."]
  ], "L'article 1er de la Déclaration de 1789 affirme que les hommes naissent et demeurent libres et égaux en droits. Cette ouverture générale ne doit pas être attribuée à un code professionnel ou à une loi portant sur une seule liberté.", "Libres et égaux dès la naissance : article 1er de la Déclaration de 1789.");

  q("O102", "Soumettre une personne à la traite, à la torture ou à un traitement dégradant", [
    ["Prononcer une peine légale après un procès équitable, en respectant la dignité de la personne", "Une peine prononcée légalement ne constitue pas, du seul fait d'être une sanction, une atteinte à la dignité si les garanties et la dignité sont respectées."],
    ["Critiquer des idées politiques sans insulte ni menace dans un débat public", "Un désaccord ou une critique d'idées dans ce cadre relève de la liberté d'expression ; il ne réduit pas la personne à un objet ni à un traitement dégradant."],
    ["Effectuer un contrôle légal, justifié et proportionné, respectant les droits de la personne", "Un contrôle ainsi encadré n'est pas en lui-même une atteinte à la dignité. Une humiliation ou une violence dans son exécution serait une autre situation."]
  ], "La dignité appartient à toute personne. Traite, torture et traitements dégradants la nient ; une critique ou une mesure légale ne devient pas automatiquement dégradante du seul fait qu'elle est désagréable.", "Sanction légale ou désaccord ≠ traitement dégradant.");

  q("O103", "Le droit d'exprimer ses opinions dans les limites fixées par la loi", [
    ["Le droit d'exprimer sans limite pénale une opinion dès lors qu'elle est majoritaire", "L'adhésion d'une majorité ne rend pas licites les menaces, la diffamation ou l'incitation à la haine ; les droits des minorités restent protégés."],
    ["Le droit de diffuser des propos pénalement interdits si le compte ne mentionne aucun nom", "L'anonymat ou le pseudonyme ne supprime pas les règles applicables aux propos ; il ne donne pas une immunité."],
    ["Le droit d'exprimer une opinion seulement après validation préalable par une autorité publique", "La liberté d'expression n'est pas une permission générale à obtenir avant chaque opinion. Les limites légales ne signifient pas cette validation préalable."]
  ], "L'expression des idées et la critique sont protégées dans les limites légales. Ces limites ne disparaissent ni pour une majorité ni grâce à l'anonymat, et elles ne transforment pas toute prise de parole en demande d'autorisation.", "Exprimer librement, sans autorisation générale ni immunité pour les abus.");

  q("O104", "Demander un avocat et, en garde à vue, exercer les droits prévus par la procédure", [
    ["Obtenir automatiquement la fin de l'enquête dès lors qu'on invoque la présomption d'innocence", "La présomption d'innocence protège contre une culpabilité tenue pour acquise avant jugement ; elle n'empêche pas toute enquête légale."],
    ["Exiger une libération immédiate dans tous les cas si l'avocat demandé n'est pas disponible", "Le droit à l'avocat est encadré par la procédure et ses garanties. Une indisponibilité ne crée pas une règle universelle de libération automatique."],
    ["Demander l'assistance d'un avocat seulement après la première comparution devant un tribunal", "En garde à vue, l'assistance d'un avocat peut être demandée avant une comparution au tribunal, selon les règles applicables."]
  ], "L'interpellation n'est pas une condamnation. En garde à vue, des droits existent notamment à l'information, à l'avocat, à un examen médical et aux notifications prévues ; ils s'exercent dans un cadre procédural précis.", "Présomption d'innocence et droit à l'avocat : garanties, pas fin automatique de l'enquête.");

  q("O105", "Non, chacun est libre de croire ou de ne pas croire", [
    ["Non, mais un agent public doit renoncer à toute croyance religieuse pour être recruté", "La neutralité professionnelle concerne l'exercice des fonctions, pas l'interdiction d'avoir une croyance personnelle."],
    ["Non, mais une personne convertie ne peut plus renoncer à la religion choisie", "La liberté de conscience inclut aussi le droit de changer à nouveau de religion ou de ne plus croire ; une conversion ne la supprime pas."],
    ["Non, mais les citoyens sans religion ne disposent pas des mêmes droits civiques", "L'absence de religion ne justifie pas une différence de droits civiques ; l'État garantit l'égalité sans discrimination de conviction."]
  ], "Avoir une religion n'est pas une condition de la citoyenneté française. Croire, ne pas croire et changer de conviction sont protégés, y compris pour un agent qui doit rester neutre dans son travail.", "Aucune religion n'est requise pour être citoyen.");

  q("O106", "15 ans", [
    ["14 ans", "14 ans ne correspond pas au seuil français de consentement autonome à certains traitements de données pour les services concernés ; être adolescent ne suffit pas à définir ce seuil."],
    ["16 ans", "16 ans est le seuil de référence du RGPD que les États peuvent abaisser dans le cadre prévu ; la France a retenu 15 ans pour le consentement numérique concerné."],
    ["18 ans", "18 ans est la majorité civile ; elle ne doit pas être confondue avec le seuil spécifique de 15 ans appelé majorité numérique."]
  ], "La réponse attendue est 15 ans pour le consentement autonome du mineur à certains traitements de données dans le cadre légal concerné. Ce seuil n'est ni une majorité civile ni une permission générale d'utiliser sans condition tous les services en ligne ; les modalités des dispositifs sur les réseaux sociaux doivent être distinguées.", "Numérique : 15 ans ; civile : 18 ans.");

  q("O107", "Dans un domicile privé, sous réserve du respect d'autrui", [
    ["Dans la salle de restauration fermée d'un restaurant ouvert à la clientèle", "Le restaurant peut être une propriété privée, mais sa salle de restauration fermée accueillant le public est soumise à l'interdiction de fumer."],
    ["Sur une aire collective de jeux pour enfants, même à ciel ouvert", "Le caractère extérieur ne suffit pas à autoriser le tabac : les aires collectives de jeux pour enfants sont des espaces où l'interdiction s'applique."],
    ["Dans un couloir fermé de bureaux utilisé par les personnels, même momentanément vide", "L'interdiction des lieux de travail fermés à usage collectif ne disparaît pas parce que le couloir est momentanément vide."]
  ], "La nature du lieu compte : une habitation privée ordinaire ne relève pas de l'interdiction générale des lieux publics, contrairement à une salle de restaurant ou à un espace de travail collectif fermé. Certains espaces extérieurs sont aussi interdits.", "Propriété privée ≠ lieu privé : un restaurant accueille le public.");

  q("O108", "Interdite et sanctionnée", [
    ["Autorisée dès 18 ans, sans autre démarche", "La majorité civile ne remplace pas l'obtention du permis correspondant à la moto conduite."],
    ["Autorisée avec le seul permis B, pour n'importe quelle moto", "Le permis B ne permet pas de conduire toute moto ; ses éventuelles possibilités limitées dépendent de la catégorie et de conditions spécifiques."],
    ["Autorisée avec une assurance, même si le permis requis n'a pas été obtenu", "Assurer le véhicule ne donne pas le droit de le conduire sans le permis exigé ; assurance et droit de conduire sont deux conditions distinctes."]
  ], "Pour une moto nécessitant un permis, conduire sans le titre approprié sur les voies concernées est une infraction. L'âge, la propriété du véhicule ou une assurance ne remplacent pas ce permis ; certaines équivalences limitées doivent respecter leurs conditions.", "Âge, assurance et permis : ne pas les confondre.");

  q("O109", "Contribuer à la collectivité et aider les personnes en difficulté", [
    ["Financer seulement les services dont on bénéficie soi-même directement", "La solidarité met des ressources en commun au-delà de son usage personnel ; elle soutient aussi les besoins des autres."],
    ["Réserver toute aide aux personnes possédant la même nationalité", "La solidarité et l'assistance ne se réduisent pas à un lien de nationalité ; les personnes en difficulté restent des personnes à protéger."],
    ["Aider uniquement ses proches sans participer aux charges publiques", "L'entraide familiale peut être une forme d'aide, mais elle ne remplace pas la contribution collective et ne résume pas le devoir de solidarité."]
  ], "La solidarité réunit contribution collective et entraide. Impôts, protection sociale, soutien associatif et assistance à une personne en difficulté sont complémentaires ; elle ne signifie pas financer exclusivement son propre intérêt.", "Solidarité : contribuer ensemble et aider au-delà de soi.");

  q("O110", "Non, la polygamie n'est pas reconnue par le droit français", [
    ["Oui, si tous les époux majeurs donnent leur accord", "Le consentement est nécessaire au mariage, mais il ne permet pas d'écarter l'interdiction de contracter un nouveau mariage alors qu'un précédent demeure en vigueur."],
    ["Oui, si le premier couple vit séparément, même sans divorce prononcé", "Une séparation de fait ne dissout pas le mariage ; le lien matrimonial antérieur doit avoir légalement pris fin avant un nouveau mariage."],
    ["Oui, pour toute personne dès que le second mariage est célébré à l'étranger", "Passer à l'étranger ne lève pas automatiquement l'empêchement d'un mariage antérieur. Les questions particulières de droit international ne créent pas cette autorisation générale."]
  ], "En droit français, on ne peut pas contracter un nouveau mariage tant qu'un mariage antérieur est légalement en vigueur. Une séparation de fait ou un accord privé ne remplacent pas sa dissolution légale.", "Se séparer n'est pas divorcer ; le consentement n'autorise pas la polygamie.");

  q("O111", "Oui, lorsqu'on relève de l'obligation déclarative", [
    ["Non, dès lors que les revenus sont déjà soumis au prélèvement à la source", "Le prélèvement concerne le paiement ; la déclaration annuelle reste nécessaire dans les situations soumises à l'obligation déclarative."],
    ["Non, pour tout salarié puisque l'employeur déclare lui-même tous les revenus du foyer", "L'employeur transmet des informations sur les salaires, pas nécessairement l'ensemble de la situation et des revenus du foyer fiscal."],
    ["Oui, mais seulement l'année de la première installation, puis plus jamais", "L'obligation est annuelle dans son champ d'application ; elle ne devient pas une formalité unique accomplie à la première installation."]
  ], "Il faut vérifier chaque année sa situation fiscale selon la procédure applicable. Les revenus préremplis, le prélèvement à la source et les mécanismes de déclaration automatique ont leurs conditions ; ils ne créent pas une dispense générale pour tous les contribuables.", "Prérempli ou prélevé ne signifie pas dispensé dans tous les cas.");

  q("O112", "Oui, si l'on peut agir sans risque sérieux pour soi ou autrui, notamment en appelant les secours", [
    ["Oui, mais appeler les secours ne compte pas si l'on n'intervient pas aussi physiquement", "Alerter rapidement les secours peut être l'assistance adaptée, notamment lorsque l'intervention physique ne peut pas être réalisée en sécurité."],
    ["Non, si l'on n'est pas responsable de l'origine du danger", "Le devoir d'assistance n'est pas réservé à la personne qui a causé le danger ; un témoin peut devoir agir ou alerter dans les conditions légales."],
    ["Oui, même si l'intervention crée un grave danger pour soi ou pour une autre personne", "L'assistance requise ne suppose pas de se mettre ou de mettre autrui en danger sérieux ; il faut rechercher une aide sûre, notamment l'alerte."]
  ], "La non-assistance à une personne en péril peut être une infraction lorsqu'une aide est possible sans risque sérieux pour soi ou autrui. Ne pas être médecin ou ne pas avoir causé le danger n'empêche pas d'appeler les secours.", "Aider sans créer un autre danger ; appeler peut être agir.");

  q("O113", "Un devoir civique lorsqu'on est tiré au sort et convoqué", [
    ["Une fonction professionnelle réservée aux magistrats de carrière", "Les jurés sont des citoyens sélectionnés ; ils siègent aux côtés de magistrats professionnels, sans être eux-mêmes des magistrats de carrière."],
    ["Un engagement volontaire qu'on peut refuser sans motif après le tirage au sort", "La convocation impose de se présenter sauf dispense ou motif légitime accepté ; ce n'est pas une participation librement annulable après sélection."],
    ["Une obligation permanente de siéger pour tout citoyen dès l'âge de 18 ans", "Le devoir dépend de la sélection, de la convocation et des conditions légales d'éligibilité, dont un âge spécifique ; il ne concerne pas chaque citoyen en permanence."]
  ], "Le jury d'assises fait participer des citoyens à la justice. Pour la personne éligible tirée au sort et convoquée, c'est un devoir civique, avec les dispenses et exclusions prévues, pas un simple bénévolat.", "Juré : citoyen sélectionné, convocation à respecter.");

  q("O114", "18 ans", [
    ["16 ans", "Un mineur de 16 ans ne peut pas acheter légalement de l'alcool ; une distinction fondée sur un alcool supposé moins fort ne lève pas l'interdiction de vente aux mineurs."],
    ["17 ans", "À 17 ans, la personne reste mineure pour cette règle. Un autre droit accessible à cet âge ne permet pas d'abaisser le seuil de vente d'alcool."],
    ["21 ans", "21 ans est un repère utilisé dans certains autres pays, mais ce n'est pas l'âge légal français pour la vente d'alcool."]
  ], "La vente d'alcool est interdite aux mineurs de moins de 18 ans en France. Ce seuil ne dépend pas du degré d'alcool ; il ne faut pas le confondre avec les règles d'autres pays ou celles d'une autre activité.", "Vente d'alcool en France : pas avant 18 ans.");

  q("O115", "Une infraction pouvant entraîner une sanction", [
    ["Toujours une simple contravention, quelle que soit la gravité du comportement", "Certaines infractions routières sont des délits ; la qualification et la sanction dépendent du comportement, pas d'une catégorie unique pour tout le code."],
    ["Une faute exclusivement civile réglée entre les assurances", "Les assurances peuvent intervenir pour un dommage, mais cela ne supprime pas les infractions et sanctions prévues par le droit routier."],
    ["Une infraction seulement lorsqu'un accident a déjà eu lieu", "Une règle de sécurité peut être sanctionnée avant tout accident ; l'absence de dommage réalisé ne rend pas le comportement licite."]
  ], "Une violation du code de la route peut être sanctionnée, même sans accident. Il faut distinguer la responsabilité liée aux dommages, l'assurance et la qualification pénale, qui peut notamment être une contravention ou un délit.", "Pas d'accident ne signifie pas pas d'infraction.");

  q("O116", "Une infraction grave lorsque la loi prévoit cette peine complémentaire", [
    ["Toute condamnation, qui entraîne automatiquement la même privation sans décision sur cette peine", "Toutes les condamnations n'ont pas cet effet : le retrait de droits dépend d'un fondement légal et de la peine applicable, pas d'une règle unique pour toute condamnation."],
    ["Une simple interpellation, qui suffit avant le procès à retirer les droits civiques", "Une interpellation n'est pas une condamnation ni une décision de peine ; elle ne suffit pas à prononcer cette privation de droits."],
    ["Le refus de voter à un scrutin ordinaire, puni en lui-même par le retrait des droits civiques", "Le vote n'est pas une obligation pénale générale pour les citoyens aux scrutins ordinaires ; l'abstention n'est pas ce crime ou délit justifiant une telle peine."]
  ], "La privation de droits civiques, civils et de famille est encadrée par la loi et la décision judiciaire dans les cas concernés. Sa nature, son étendue et sa durée doivent être distinguées d'une simple mise en cause ou d'une conséquence supposée de toute condamnation.", "Privation de droits : loi et peine applicables, pas effet automatique de tout dossier.");

  q("O117", "Avoir la nationalité française", [
    ["Avoir une carte de résident française valable dix ans", "La carte de résident est un titre de séjour pour une personne étrangère ; sa durée ne lui confère pas la nationalité exigée pour une CNI française."],
    ["Être ressortissant d'un autre pays de l'Union européenne, sans nationalité française", "La citoyenneté européenne ne donne pas la nationalité française. Chaque État délivre sa carte nationale à ses propres ressortissants."],
    ["Posséder un numéro français de sécurité sociale", "Un numéro de sécurité sociale peut être attribué à une personne étrangère ; il identifie une situation de protection sociale, pas la nationalité française."]
  ], "La carte nationale d'identité française est un document de ressortissant français. Un titre de séjour, la citoyenneté d'un autre État européen ou un numéro de sécurité sociale ne remplacent pas cette nationalité.", "CNI française : nationalité française, pas simple résidence.");

  q("O118", "Pour prévenir notamment la diffamation, les menaces ou l'incitation à la haine et à la violence", [
    ["Pour empêcher toute opposition pacifique aux décisions du Gouvernement, sans autre motif légal", "L'opposition et la critique politiques sont protégées ; contredire le Gouvernement ne constitue pas, à lui seul, un motif légal de restriction."],
    ["Pour interdire une opinion religieuse du seul fait qu'elle est minoritaire dans la population", "L'impopularité d'une conviction n'est pas un abus légal. La conscience et l'égalité protègent aussi les opinions minoritaires."],
    ["Pour soustraire toute croyance à une discussion critique, même sans abus pénal", "La liberté de religion ne garantit pas qu'une croyance ne puisse jamais être discutée ou critiquée ; il faut distinguer critique et abus définis par la loi."]
  ], "L'expression peut être limitée pour protéger les droits d'autrui ou l'ordre public contre des abus légaux, notamment diffamation, menaces et incitation à la haine. Une restriction doit rester légale, nécessaire et proportionnée : gêner ou critiquer ne suffit pas.", "Limiter les abus légaux, pas la simple critique ou une opinion minoritaire.");

  q("O119", "Se présenter, sauf dispense ou motif légitime accepté", [
    ["Ne pas venir après l'envoi d'un simple message, même si la dispense n'a pas été acceptée", "Demander une dispense ne signifie pas l'obtenir ; l'absence doit reposer sur une décision ou un motif légitime admis dans le cadre prévu."],
    ["Se faire remplacer, à son propre choix, par un autre citoyen inscrit sur les listes électorales", "La convocation et la sélection sont personnelles ; le juré ne peut pas transférer librement sa place à quelqu'un qui remplit d'autres conditions."],
    ["Choisir ses jours de présence selon son emploi du temps, sans accord du tribunal", "Le déroulement du procès et la convocation ne se règlent pas selon un choix unilatéral du juré ; les difficultés doivent être signalées selon la procédure."]
  ], "Il faut respecter la convocation. Une difficulté peut donner lieu à une demande de dispense ou à l'examen d'un motif légitime ; il ne faut pas confondre demande, remplacement personnel et décision acceptée.", "Demander une dispense ne vaut pas dispense accordée.");

  q("O120", "18 ans", [
    ["16 ans", "Une émancipation peut exister à partir de 16 ans dans les conditions légales, mais elle ne change pas l'âge général de la majorité civile."],
    ["17 ans", "L'accès à certains droits, comme le permis B dans le cadre prévu, peut intervenir avant 18 ans ; cela ne rend pas la personne civilement majeure."],
    ["21 ans", "21 ans correspond à l'ancien âge de la majorité, abaissé à 18 ans par la loi de 1974 ; ce n'est plus le seuil actuel."]
  ], "La majorité civile est fixée à 18 ans. Il faut distinguer ce seuil général de l'émancipation d'un mineur, de la majorité numérique ou des conditions d'accès à une activité particulière.", "Civil : 18 ans ; émancipation et permis sont d'autres notions.");

  q("O121", "Respecter les lois et contribuer aux charges publiques", [
    ["Voter à chaque scrutin ordinaire sous peine de sanction pour tout citoyen", "Le vote est un droit et un devoir civique, mais pas une obligation pénale générale pour tout citoyen à chaque scrutin ordinaire."],
    ["Adhérer à un parti politique pour pouvoir participer à la vie publique", "La participation à la vie publique n'exige pas d'adhésion à un parti ; les libertés politiques comprennent aussi le choix de ne pas adhérer."],
    ["Renoncer à tout recours contre une décision publique, même lorsqu'elle est illégale", "Respecter la loi ne supprime pas le droit de contester légalement une décision publique ; les recours font partie des garanties de l'État de droit."]
  ], "Parmi les devoirs principaux figurent le respect de la loi et la contribution aux charges publiques dans les conditions applicables. Cela ne crée pas une obligation générale d'adhérer à un parti ni de renoncer aux recours légaux.", "Respecter la loi reste compatible avec un recours contre l'administration.");

  q("O122", "Le crime", [
    ["Le délit", "Le délit est une catégorie pénale plus grave qu'une contravention, mais il se situe en dessous du crime dans cette classification."],
    ["La contravention de cinquième classe", "La cinquième classe est le niveau le plus élevé des contraventions ; elle reste une contravention, et non la catégorie des crimes."],
    ["La faute disciplinaire", "Une faute disciplinaire relève d'un cadre professionnel ou institutionnel propre ; elle n'est pas l'une des trois catégories pénales classées par gravité."]
  ], "La classification pénale distingue contraventions, délits et crimes, ces derniers étant les plus graves. Un niveau élevé au sein d'une catégorie ne doit pas être confondu avec le passage à une autre catégorie.", "Gravité pénale : contravention → délit → crime.");

  q("O123", "L'usage responsable, critique et respectueux des outils et espaces numériques", [
    ["La simple maîtrise technique des outils, sans devoir de réflexion critique ou de respect des autres", "Savoir utiliser un outil ne suffit pas : la citoyenneté numérique comprend aussi l'esprit critique, les droits, la sécurité et la responsabilité."],
    ["L'accès aux services administratifs en ligne réservé aux personnes de nationalité française", "La notion ne désigne pas une nationalité ou une réserve générale des services en ligne aux Français ; elle concerne des comportements et des compétences numériques."],
    ["Le droit de republier toute information trouvée en ligne dès lors que sa source est citée", "Citer une source ne supprime pas automatiquement les règles de vie privée, de propriété intellectuelle ou les limites légales de publication."]
  ], "La citoyenneté numérique combine compétences, participation, esprit critique et respect de la loi et des personnes. Le caractère accessible d'un contenu ou la maîtrise d'un outil ne dispensent pas de responsabilité.", "Savoir cliquer, vérifier et respecter : trois dimensions du numérique.");

  q("O124", "Se souvenir et transmettre l'histoire, notamment celle des victimes et des persécutions", [
    ["Fixer un récit officiel qui remplace l'enquête critique des historiens", "Le devoir de mémoire ne remplace pas les méthodes et recherches historiques ; mémoire, témoignages et connaissance critique peuvent se compléter."],
    ["Apprendre seulement les dates de victoire, en écartant les victimes et les persécutions", "Le souvenir des victimes, des crimes et des persécutions fait précisément partie de la mémoire à transmettre ; elle ne se réduit pas aux victoires."],
    ["Rendre les générations suivantes juridiquement coupables des crimes commis par leurs ancêtres", "Transmettre et tirer des enseignements n'est pas transmettre une culpabilité pénale héréditaire ; mémoire et responsabilité juridique ne sont pas la même notion."]
  ], "Le devoir de mémoire consiste à conserver et transmettre le souvenir du passé, notamment des victimes et des persécutions, afin d'en tirer des enseignements. Il ne remplace pas l'histoire critique ni ne crée une culpabilité pénale héritée.", "Transmettre l'histoire et ses enseignements, pas une culpabilité héréditaire.");

  q("O125", "Elle ne peut notamment ni voter ni être candidate à une élection", [
    ["Elle peut voter mais ne peut pas être candidate pendant les cinq ans indiqués", "Dans la privation de droits décrite, le droit de vote est aussi atteint ; il ne faut pas réduire la situation à la seule inéligibilité."],
    ["Elle perd automatiquement la nationalité française pendant les cinq ans indiqués", "Une interdiction de droits civiques n'est pas une déchéance de nationalité ; la perte de nationalité relève d'autres conditions et mécanismes."],
    ["Elle est automatiquement incapable de signer tout contrat civil pendant ces cinq ans", "La peine portant sur les droits civiques, civils et de famille ne supprime pas automatiquement toute capacité contractuelle ordinaire ; il faut examiner les droits précisément interdits."]
  ], "Dans la situation décrite, la privation affecte notamment le vote et l'éligibilité pour cinq ans. Une interdiction de droits déterminés ne doit pas être confondue avec une perte automatique de nationalité ou de toute capacité dans la vie civile.", "Droits électoraux interdits ≠ nationalité retirée ni vie civile supprimée.");

  q("ON007", "Un citoyen français inscrit sur les listes électorales, âgé de plus de 23 ans et remplissant les conditions légales", [
    ["Un citoyen d'un autre pays de l'Union européenne, sans nationalité française, inscrit sur une liste électorale municipale et âgé de plus de 23 ans", "L'inscription électorale municipale d'un ressortissant européen ne donne pas la nationalité française, requise pour être juré d'assises."],
    ["Un citoyen français inscrit sur les listes électorales, dès l'âge de 18 ans et remplissant les autres conditions légales", "L'âge ouvrant le droit de vote ne suffit pas : le jury d'assises a une condition d'âge spécifique, distincte de la majorité civile."],
    ["Un citoyen français de plus de 23 ans inscrit sur les listes, même s'il ne jouit plus des droits civiques et politiques requis", "La nationalité et l'âge ne suffisent pas à eux seuls ; la jouissance des droits requis et les autres conditions légales comptent aussi."]
  ], "Les jurés sont tirés au sort parmi les citoyens français remplissant les conditions légales, notamment l'inscription électorale, l'âge requis, la capacité à lire et écrire en français et la jouissance des droits exigés. Être simplement électeur municipal ou majeur ne suffit pas.", "Juré : nationalité française + âge spécifique + droits et conditions légales.");

  window.CIVIQUE_OFFICIAL_CHALLENGE_PACKS = window.CIVIQUE_OFFICIAL_CHALLENGE_PACKS || [];
  window.CIVIQUE_OFFICIAL_CHALLENGE_PACKS.push({
    id: "official-tricky-valeurs-droits",
    version: "2026.10.24-officiel-exigeant-fr",
    questions
  });
})();
