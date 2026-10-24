/* Variantes exigeantes des intitulés officiels institutionnels.
   Les bonnes réponses canoniques et les intitulés d'origine restent inchangés.
   O037 représente l'intitulé commun avec O045 ; aucun second ID n'est ajouté ici. */
(function () {
  "use strict";
  window.CIVIQUE_OFFICIAL_CHALLENGE_PACKS = window.CIVIQUE_OFFICIAL_CHALLENGE_PACKS || [];
  window.CIVIQUE_OFFICIAL_CHALLENGE_PACKS.push({
  "id": "official-tricky-institutions",
  "version": "2026.10.24-officiel-exigeant-fr",
  "questions": [
    {
      "id": "O036",
      "correct": "Il est nommé par le Président de la République",
      "wrong": [
        "Il est élu par l’Assemblée nationale lors d’un vote d’investiture",
        "Il est nommé par le président du Sénat dans ses seules fonctions de président de cette chambre",
        "Il est désigné par le Conseil constitutionnel après les élections législatives"
      ],
      "wrongReasons": {
        "Il est élu par l’Assemblée nationale lors d’un vote d’investiture": "L’Assemblée peut mettre en cause la responsabilité du Gouvernement, mais elle ne procède pas à l’élection constitutionnelle du Premier ministre.",
        "Il est nommé par le président du Sénat dans ses seules fonctions de président de cette chambre": "Présider le Sénat ne confère pas ce pouvoir. Si son président assure l’intérim du chef de l’État, il agit alors dans une autre fonction constitutionnelle.",
        "Il est désigné par le Conseil constitutionnel après les élections législatives": "Le Conseil contrôle notamment les scrutins ; leur résultat ne lui transfère pas le pouvoir de nommer le chef du Gouvernement."
      },
      "explanation": "L’article 8 de la Constitution confie la nomination du Premier ministre au Président de la République. Nomination, élections législatives et responsabilité du Gouvernement devant l’Assemblée sont des mécanismes différents.",
      "hook": "Le Président nomme ; l’Assemblée peut contrôler et censurer."
    },
    {
      "id": "O037",
      "correct": "Une personne française remplissant les conditions légales et ayant obtenu 500 présentations d'élus",
      "wrong": [
        "Une personne française remplissant les autres conditions mais disposant seulement de 100 présentations d’élus",
        "Une personne française remplissant les autres conditions et ayant 500 signatures de citoyens non élus",
        "Une personne majeure non française de l’Union européenne ayant obtenu 500 présentations d’élus"
      ],
      "wrongReasons": {
        "Une personne française remplissant les autres conditions mais disposant seulement de 100 présentations d’élus": "Cent présentations ne suffisent pas : le seuil présidentiel est de 500 présentations valides, avec la répartition territoriale prévue.",
        "Une personne française remplissant les autres conditions et ayant 500 signatures de citoyens non élus": "Les présentations doivent provenir d’élus habilités ; 500 signatures de simples citoyens ne remplissent pas cette condition.",
        "Une personne majeure non française de l’Union européenne ayant obtenu 500 présentations d’élus": "La citoyenneté d’un autre État de l’Union ne remplace pas la nationalité française exigée pour cette candidature."
      },
      "explanation": "Une femme ou un homme français peut être candidat en remplissant les conditions légales, notamment l’éligibilité et 500 présentations valides d’élus habilités. Il n’est pas nécessaire d’avoir déjà été député, maire ou ministre.",
      "hook": "Français + conditions légales + 500 présentations d’élus."
    },
    {
      "id": "O038",
      "correct": "Au peuple",
      "wrong": [
        "Au Parlement",
        "Au Gouvernement",
        "Au Président de la République"
      ],
      "wrongReasons": {
        "Au Parlement": "Le Parlement représente les citoyens et exerce des compétences législatives ; exercer une fonction au nom du peuple ne signifie pas posséder sa souveraineté.",
        "Au Gouvernement": "Le Gouvernement conduit la politique de la Nation ; il ne devient pas le détenteur de la souveraineté nationale.",
        "Au Président de la République": "Le Président tient un mandat et des pouvoirs de la Constitution, pas une propriété personnelle de la souveraineté."
      },
      "explanation": "Selon l’article 3 de la Constitution, la souveraineté nationale appartient au peuple, qui l’exerce par ses représentants et par la voie du référendum.",
      "hook": "Le peuple détient ; ses représentants exercent."
    },
    {
      "id": "O039",
      "correct": "Les conseillers municipaux",
      "wrong": [
        "Les maires, par un vote direct séparé des électeurs",
        "Les conseillers départementaux",
        "Les conseillers régionaux"
      ],
      "wrongReasons": {
        "Les maires, par un vote direct séparé des électeurs": "Les électeurs choisissent les conseillers municipaux ; le maire est ensuite élu par le conseil, pas par un scrutin direct séparé.",
        "Les conseillers départementaux": "Ils sont élus lors des élections départementales et siègent au conseil départemental, pas au conseil municipal.",
        "Les conseillers régionaux": "Ils relèvent des élections régionales ; ce scrutin ne désigne pas le conseil d’une commune."
      },
      "explanation": "Les élections municipales désignent les conseillers municipaux. Le conseil municipal élit ensuite le maire parmi ses membres : deux étapes qu’il faut distinguer.",
      "hook": "Municipales : conseil d’abord, maire ensuite."
    },
    {
      "id": "O040",
      "correct": "Nécessaire pour voter, avec des inscriptions automatiques dans certains cas",
      "wrong": [
        "Facultative dès lors que l’on possède une carte d’identité française",
        "Toujours automatique pour tout adulte français, sans vérification nécessaire",
        "Nécessaire uniquement aux élections locales, pas aux présidentielles"
      ],
      "wrongReasons": {
        "Facultative dès lors que l’on possède une carte d’identité française": "La pièce d’identité sert à justifier l’identité ; elle ne remplace pas l’inscription sur la liste électorale.",
        "Toujours automatique pour tout adulte français, sans vérification nécessaire": "L’inscription d’office existe dans certains cas et sous conditions ; devenir adulte ou déménager ne dispense pas de vérifier sa situation.",
        "Nécessaire uniquement aux élections locales, pas aux présidentielles": "Les élections présidentielles exigent elles aussi une inscription électorale ; ce n’est pas une formalité limitée aux scrutins locaux."
      },
      "explanation": "L’électeur doit être inscrit sur la liste électorale pertinente. Certaines inscriptions sont automatiques, notamment sous les conditions prévues pour de jeunes Français ; une inscription automatique demeure une inscription à vérifier.",
      "hook": "Identité, droit de vote et inscription : trois vérifications."
    },
    {
      "id": "O041",
      "correct": "Être français, majeur, jouir de ses droits civils et politiques et être inscrit",
      "wrong": [
        "Être majeur, citoyen non français de l’Union européenne et inscrit sur une liste complémentaire",
        "Être français, avoir 16 ans et être inscrit sur une liste électorale",
        "Être français, majeur et posséder une pièce d’identité, même sans inscription électorale"
      ],
      "wrongReasons": {
        "Être majeur, citoyen non français de l’Union européenne et inscrit sur une liste complémentaire": "Cette situation peut ouvrir certains votes municipaux et européens ; elle n’ouvre pas le vote à la présidentielle française.",
        "Être français, avoir 16 ans et être inscrit sur une liste électorale": "L’âge général pour voter en France est de 18 ans ; l’inscription ne supprime pas la condition de majorité.",
        "Être français, majeur et posséder une pièce d’identité, même sans inscription électorale": "La nationalité, l’âge et la pièce d’identité ne dispensent pas de l’inscription sur une liste électorale."
      },
      "explanation": "Le vote présidentiel nécessite la nationalité française, la majorité, les droits électoraux et l’inscription. Les droits ouverts aux citoyens d’autres États de l’Union pour les municipales et européennes ne sont pas étendus à cette élection.",
      "hook": "Présidentielle : nationalité française et conditions électorales."
    },
    {
      "id": "O042",
      "correct": "Être éligible, majeur et français ou citoyen de l'Union européenne selon les règles applicables",
      "wrong": [
        "Être majeur et éligible, mais obligatoirement français à l’exclusion des autres citoyens de l’Union",
        "Être majeur non français d’un État hors de l’Union, par le seul fait de résider dans la commune",
        "Être français ou citoyen de l’Union et éligible, avec un âge minimal général de 24 ans"
      ],
      "wrongReasons": {
        "Être majeur et éligible, mais obligatoirement français à l’exclusion des autres citoyens de l’Union": "Les citoyens d’un autre État de l’Union peuvent être candidats au conseil municipal sous les conditions prévues ; maire et adjoint restent réservés aux Français.",
        "Être majeur non français d’un État hors de l’Union, par le seul fait de résider dans la commune": "La résidence seule n’ouvre pas cette candidature à toute nationalité ; le cadre vise les Français et les citoyens de l’Union éligibles.",
        "Être français ou citoyen de l’Union et éligible, avec un âge minimal général de 24 ans": "Le repère municipal est la majorité à 18 ans ; 24 ans est le seuil sénatorial, pas une condition générale pour les municipales."
      },
      "explanation": "Un candidat au conseil municipal doit remplir les conditions d’âge, d’éligibilité et de rattachement prévues. Les Français et les citoyens d’un autre État de l’Union sont concernés ; cela ne donne pas aux non-Français accès aux fonctions de maire ou d’adjoint.",
      "hook": "Conseiller municipal européen possible ; maire français."
    },
    {
      "id": "O043",
      "correct": "Le maire",
      "wrong": [
        "Le procureur de la République",
        "Le recteur d’académie",
        "Le Défenseur des droits"
      ],
      "wrongReasons": {
        "Le procureur de la République": "Le procureur est un magistrat nommé ; représenter le ministère public ne constitue pas un mandat issu d’une élection.",
        "Le recteur d’académie": "Le recteur est nommé pour exercer des fonctions de l’État dans l’éducation ; les électeurs ne choisissent pas le titulaire.",
        "Le Défenseur des droits": "Son indépendance ne signifie pas qu’il est élu : il est nommé par le Président de la République selon la procédure prévue."
      },
      "explanation": "Le maire est élu par les conseillers municipaux. Il faut distinguer un mandat électif, une nomination et l’indépendance d’une autorité : une autorité indépendante n’est pas nécessairement élue.",
      "hook": "Maire élu ; indépendance et élection ne sont pas synonymes."
    },
    {
      "id": "O044",
      "correct": "Diriger la commune et exercer notamment des fonctions d'état civil et de police municipale",
      "wrong": [
        "Administrer le département et diriger ses politiques sociales",
        "Représenter l’État dans tout le département et coordonner ses services",
        "Organiser les transports régionaux et administrer les lycées publics"
      ],
      "wrongReasons": {
        "Administrer le département et diriger ses politiques sociales": "Ces fonctions relèvent notamment de l’exécutif départemental ; le maire dirige une commune, pas toute la collectivité départementale.",
        "Représenter l’État dans tout le département et coordonner ses services": "C’est le rôle du préfet à cette échelle. Les fonctions d’État du maire, par exemple l’état civil, restent distinctes de cette représentation générale.",
        "Organiser les transports régionaux et administrer les lycées publics": "Ce sont des repères de compétences régionales ; ils ne deviennent pas des fonctions générales du maire."
      },
      "explanation": "Le maire dirige l’administration communale, exécute les décisions du conseil et exerce notamment des fonctions d’état civil et de police municipale. Certaines missions sont exercées au nom de l’État sans faire de lui le préfet.",
      "hook": "Commune, état civil et police locale ; pas tout le département."
    },
    {
      "id": "O046",
      "correct": "À la mairie de sa commune",
      "wrong": [
        "À la préfecture de son département",
        "Au commissariat pour établir directement son inscription",
        "Au consulat d’un autre État de l’Union européenne"
      ],
      "wrongReasons": {
        "À la préfecture de son département": "La préfecture représente l’État, mais l’interlocuteur ordinaire pour l’inscription électorale communale en personne est la mairie.",
        "Au commissariat pour établir directement son inscription": "Un commissariat peut intervenir dans une procuration de vote ; cette démarche ne remplace pas l’inscription sur les listes électorales.",
        "Au consulat d’un autre État de l’Union européenne": "Un consulat étranger n’établit pas l’inscription sur la liste électorale d’une commune française."
      },
      "explanation": "Sans internet, la demande d’inscription peut être faite auprès de la mairie de la commune, avec les justificatifs requis. L’inscription doit être distinguée de la procuration, qui sert à faire voter une autre personne pour un électeur déjà inscrit.",
      "hook": "Inscription locale : mairie ; procuration : autre démarche."
    },
    {
      "id": "O047",
      "correct": "18 ans",
      "wrong": [
        "16 ans",
        "21 ans",
        "24 ans"
      ],
      "wrongReasons": {
        "16 ans": "Seize ans peut être un âge civique dans certains dispositifs, mais ce n’est pas la majorité électorale française.",
        "21 ans": "C’est l’ancien âge français de majorité avant l’abaissement de 1974 ; le seuil actuel est 18 ans.",
        "24 ans": "Vingt-quatre ans concerne l’âge minimal de candidature au Sénat, pas l’âge pour devenir électeur."
      },
      "explanation": "La majorité électorale française est de 18 ans. L’âge minimal pour voter ne doit pas être confondu avec les conditions propres à certaines candidatures.",
      "hook": "Voter à 18 ans ; une candidature peut avoir un autre seuil."
    },
    {
      "id": "O048",
      "correct": "Non, voter est un droit et un devoir civique mais ce n'est pas juridiquement obligatoire",
      "wrong": [
        "Oui, tout électeur inscrit reçoit une amende en cas d’abstention",
        "Oui, aux présidentielles et aux législatives, mais pas aux municipales",
        "Non, sauf pour les citoyens qui sont fonctionnaires"
      ],
      "wrongReasons": {
        "Oui, tout électeur inscrit reçoit une amende en cas d’abstention": "L’électeur ordinaire n’encourt pas une amende générale pour abstention ; il ne faut pas lui appliquer le régime particulier de certains grands électeurs.",
        "Oui, aux présidentielles et aux législatives, mais pas aux municipales": "Ces élections nationales ne créent pas une obligation générale de voter : le type de scrutin ne transforme pas le droit en sanction automatique.",
        "Non, sauf pour les citoyens qui sont fonctionnaires": "Être fonctionnaire ne suffit pas à rendre le vote ordinaire juridiquement obligatoire."
      },
      "explanation": "Pour l’électeur ordinaire, voter est un droit et un engagement civique, sans obligation générale sanctionnée. Des règles particulières existent notamment pour les grands électeurs sénatoriaux ; elles ne concernent pas tous les citoyens.",
      "hook": "Devoir civique ne signifie pas amende générale."
    },
    {
      "id": "O049",
      "correct": "Non, toute personne doit respecter les lois en vigueur",
      "wrong": [
        "Oui, dès qu’un recours a été déposé contre la loi",
        "Oui, si le parti que l’on soutient a voté contre son adoption",
        "Oui, tant que la loi n’a pas été personnellement approuvée par référendum"
      ],
      "wrongReasons": {
        "Oui, dès qu’un recours a été déposé contre la loi": "Déposer une contestation ne suspend pas automatiquement l’application d’une règle en vigueur ; il faut distinguer recours et décision juridictionnelle.",
        "Oui, si le parti que l’on soutient a voté contre son adoption": "L’application de la loi ne dépend pas du vote ou des opinions politiques de chaque personne.",
        "Oui, tant que la loi n’a pas été personnellement approuvée par référendum": "Une loi adoptée selon les procédures légales n’exige pas l’approbation personnelle de chacun ni un référendum systématique."
      },
      "explanation": "Les lois en vigueur s’appliquent selon leurs conditions. Il existe des voies juridiques et démocratiques pour contester ou modifier une loi ; cela ne permet pas de s’accorder soi-même une dispense.",
      "hook": "Contester par les voies légales n’est pas se dispenser d’appliquer."
    },
    {
      "id": "O050",
      "correct": "Ils sont élus au suffrage universel direct",
      "wrong": [
        "Ils sont élus au suffrage universel indirect par des grands électeurs",
        "Ils sont désignés par le conseil municipal de leur circonscription",
        "Ils sont nommés par le Président sur proposition du Premier ministre"
      ],
      "wrongReasons": {
        "Ils sont élus au suffrage universel indirect par des grands électeurs": "Ce mode de scrutin est le repère des sénateurs ; les citoyens choisissent directement les députés.",
        "Ils sont désignés par le conseil municipal de leur circonscription": "Le conseil municipal élit le maire, pas le député de la circonscription législative.",
        "Ils sont nommés par le Président sur proposition du Premier ministre": "Cette nomination évoque la constitution du Gouvernement, pas l’élection des députés à l’Assemblée nationale."
      },
      "explanation": "Les députés de l’Assemblée nationale sont élus directement par les électeurs lors des élections législatives. Leur mode de désignation diffère de celui des sénateurs et des membres du Gouvernement.",
      "hook": "Députés : suffrage direct ; sénateurs : indirect."
    },
    {
      "id": "O051",
      "correct": "Le Parlement",
      "wrong": [
        "Le Conseil des ministres",
        "Le Conseil constitutionnel",
        "Le Conseil d’État"
      ],
      "wrongReasons": {
        "Le Conseil des ministres": "Il délibère notamment sur les projets de loi du Gouvernement ; cette préparation ne constitue pas le vote parlementaire d’adoption.",
        "Le Conseil constitutionnel": "Il contrôle la conformité des lois à la Constitution ; contrôler un texte n’est pas le voter.",
        "Le Conseil d’État": "Il conseille notamment le Gouvernement et exerce des fonctions de justice administrative, pas le vote législatif."
      },
      "explanation": "Le Parlement, composé de l’Assemblée nationale et du Sénat, vote les lois dans le cadre constitutionnel. Préparer, conseiller, contrôler et voter sont des fonctions différentes.",
      "hook": "Parlement : voter ; conseils : missions différentes."
    },
    {
      "id": "O052",
      "correct": "Les pouvoirs exécutif, législatif et judiciaire",
      "wrong": [
        "Les pouvoirs exécutif, législatif et réglementaire",
        "Les pouvoirs présidentiel, gouvernemental et judiciaire",
        "Les pouvoirs national, régional et communal"
      ],
      "wrongReasons": {
        "Les pouvoirs exécutif, législatif et réglementaire": "Le pouvoir réglementaire relève de la fonction exécutive ; cette liste laisse de côté la fonction judiciaire.",
        "Les pouvoirs présidentiel, gouvernemental et judiciaire": "Président et Gouvernement appartiennent à l’exécutif ; cette liste ne distingue pas le pouvoir législatif.",
        "Les pouvoirs national, régional et communal": "Ce sont des échelles territoriales, pas les trois fonctions que sépare le principe."
      },
      "explanation": "La séparation distingue l’élaboration des lois, leur exécution et la justice. Il ne faut pas la confondre avec la répartition des compétences entre collectivités ou entre les composantes de l’exécutif.",
      "hook": "Trois fonctions : légiférer, exécuter, juger."
    },
    {
      "id": "O053",
      "correct": "Un État où les autorités comme les citoyens sont soumis au droit et où les libertés sont garanties",
      "wrong": [
        "Un État où les citoyens seuls doivent respecter le droit, les dirigeants en étant dispensés",
        "Un État où l’exécutif peut écarter un jugement uniquement parce qu’il le désapprouve",
        "Un État où une majorité élue peut limiter les libertés sans aucun contrôle juridique"
      ],
      "wrongReasons": {
        "Un État où les citoyens seuls doivent respecter le droit, les dirigeants en étant dispensés": "L’État de droit soumet aussi les autorités publiques aux règles et aux contrôles ; le pouvoir n’est pas une dispense.",
        "Un État où l’exécutif peut écarter un jugement uniquement parce qu’il le désapprouve": "Les voies de recours existent, mais le simple désaccord du Gouvernement ne lui permet pas d’ignorer la justice indépendante.",
        "Un État où une majorité élue peut limiter les libertés sans aucun contrôle juridique": "La légitimité électorale ne supprime ni la protection des droits ni le contrôle des décisions publiques."
      },
      "explanation": "Dans l’État de droit, citoyens et autorités sont soumis au droit. La protection des libertés, les contrôles et l’indépendance de la justice limitent l’exercice du pouvoir, même lorsqu’il provient d’une majorité élue.",
      "hook": "Une majorité élue reste soumise au droit."
    },
    {
      "id": "O054",
      "correct": "Six ans",
      "wrong": [
        "Cinq ans",
        "Sept ans",
        "Neuf ans"
      ],
      "wrongReasons": {
        "Cinq ans": "Cinq ans est le repère des mandats présidentiel, législatif et européen ; le mandat municipal ordinaire est de six ans.",
        "Sept ans": "Le septennat est l’ancien mandat présidentiel, pas la durée du conseil municipal et du maire.",
        "Neuf ans": "Neuf ans est une ancienne durée sénatoriale ; ce n’est pas un mandat municipal."
      },
      "explanation": "Le conseil municipal et le maire ont normalement un mandat de six ans. Les durées d’autres mandats ne doivent pas être transférées aux municipales.",
      "hook": "Municipales : six ans ; ne pas copier le quinquennat."
    },
    {
      "id": "O055",
      "correct": "Les députés",
      "wrong": [
        "Les sénateurs",
        "Les conseillers départementaux",
        "Les députés européens"
      ],
      "wrongReasons": {
        "Les sénateurs": "Les sénateurs sont élus au suffrage indirect lors des élections sénatoriales ; les législatives désignent l’Assemblée nationale.",
        "Les conseillers départementaux": "Ils sont élus lors des élections départementales ; leur conseil n’est pas une chambre du Parlement.",
        "Les députés européens": "Ils sont élus lors des élections européennes, pour le Parlement européen, pas pour l’Assemblée nationale."
      },
      "explanation": "Les élections législatives désignent les députés de l’Assemblée nationale. Le Sénat, les conseils départementaux et le Parlement européen correspondent à d’autres scrutins.",
      "hook": "Législatives : députés de l’Assemblée nationale."
    },
    {
      "id": "O056",
      "correct": "Cinq ans",
      "wrong": [
        "Quatre ans",
        "Six ans",
        "Sept ans"
      ],
      "wrongReasons": {
        "Quatre ans": "Il ne faut pas transposer la durée présidentielle d’autres pays : le mandat français actuel est un quinquennat.",
        "Six ans": "Six ans est notamment le repère sénatorial et municipal, pas la durée présidentielle.",
        "Sept ans": "Sept ans était l’ancienne durée présidentielle ; elle ne décrit plus le mandat actuel."
      },
      "explanation": "La Constitution fixe la durée du mandat présidentiel à cinq ans. La réforme du quinquennat a remplacé le septennat ; la durée du mandat est distincte de la limite des mandats consécutifs.",
      "hook": "Président : cinq ans aujourd’hui, sept autrefois."
    },
    {
      "id": "O057",
      "correct": "Cinq ans",
      "wrong": [
        "Trois ans",
        "Six ans",
        "Sept ans"
      ],
      "wrongReasons": {
        "Trois ans": "Trois ans est le rythme de renouvellement par moitié du Sénat, pas une législature ordinaire de l’Assemblée nationale.",
        "Six ans": "Six ans est la durée du mandat des sénateurs et de plusieurs élus locaux ; les députés ont normalement cinq ans.",
        "Sept ans": "Sept ans est l’ancien repère présidentiel, pas la durée du mandat des députés."
      },
      "explanation": "Les députés sont normalement élus pour cinq ans. Une dissolution peut interrompre la législature ; elle ne transforme pas la durée ordinaire en mandat de trois ou six ans.",
      "hook": "Députés : cinq ans, sauf interruption par dissolution."
    },
    {
      "id": "O058",
      "correct": "Six ans",
      "wrong": [
        "Trois ans",
        "Cinq ans",
        "Neuf ans"
      ],
      "wrongReasons": {
        "Trois ans": "La moitié du Sénat est renouvelée tous les trois ans, mais chaque mandat sénatorial dure six ans.",
        "Cinq ans": "Le quinquennat concerne notamment le Président, les députés et les députés européens, pas les sénateurs.",
        "Neuf ans": "Neuf ans est l’ancienne durée sénatoriale ; le mandat actuel est de six ans."
      },
      "explanation": "Le mandat d’un sénateur dure six ans. Le renouvellement par moitié tous les trois ans concerne la composition de l’institution, pas la durée de chaque mandat.",
      "hook": "Sénat : six ans de mandat, moitié renouvelée à trois ans."
    },
    {
      "id": "O059",
      "correct": "Le Premier ministre",
      "wrong": [
        "Le Président de la République",
        "Le président du Sénat",
        "Le président de l’Assemblée nationale"
      ],
      "wrongReasons": {
        "Le Président de la République": "Il est chef de l’État et préside le Conseil des ministres ; la direction de l’action du Gouvernement relève constitutionnellement du Premier ministre.",
        "Le président du Sénat": "Il préside une chambre du Parlement et peut assurer l’intérim présidentiel ; il ne dirige pas le Gouvernement.",
        "Le président de l’Assemblée nationale": "Il organise les travaux de l’Assemblée, laquelle contrôle le Gouvernement ; contrôler et diriger sont des fonctions différentes."
      },
      "explanation": "L’article 21 de la Constitution attribue au Premier ministre la direction de l’action du Gouvernement. Il faut distinguer chef de l’État, chef du Gouvernement et présidents des chambres parlementaires.",
      "hook": "Chef du Gouvernement : Premier ministre."
    },
    {
      "id": "O060",
      "correct": "Oui, chacun peut adhérer librement à un parti légal",
      "wrong": [
        "Oui, mais seulement après une autorisation politique du préfet",
        "Oui, mais uniquement si l’on a déjà obtenu un mandat électif",
        "Oui, mais seulement pendant une campagne électorale"
      ],
      "wrongReasons": {
        "Oui, mais seulement après une autorisation politique du préfet": "L’adhésion licite à un parti n’est pas une permission politique individuelle délivrée par le représentant de l’État.",
        "Oui, mais uniquement si l’on a déjà obtenu un mandat électif": "Les partis peuvent réunir des adhérents sans mandat ; l’adhésion n’est pas réservée aux élus.",
        "Oui, mais seulement pendant une campagne électorale": "La vie d’un parti et l’adhésion ne sont pas limitées aux périodes de campagne ; les partis ont une activité durable."
      },
      "explanation": "Le pluralisme politique et la liberté d’association protègent l’adhésion à un parti légal, dans le cadre applicable. Adhérer ne suppose ni un mandat électif préalable ni une autorisation politique du préfet.",
      "hook": "Adhésion légale : liberté, pas permission politique."
    },
    {
      "id": "O061",
      "correct": "Un tribunal, après une procédure judiciaire",
      "wrong": [
        "Un procureur, qui prononce lui-même le jugement de culpabilité",
        "Un enquêteur, qui fixe lui-même la peine pénale",
        "Un avocat, qui prononce la peine à la place du juge"
      ],
      "wrongReasons": {
        "Un procureur, qui prononce lui-même le jugement de culpabilité": "Le procureur exerce les poursuites et peut requérir une peine ; ce n’est pas lui qui rend le jugement du tribunal.",
        "Un enquêteur, qui fixe lui-même la peine pénale": "L’enquêteur recherche et constate les faits dans ses compétences ; l’enquête ne lui attribue pas le jugement et la fixation de la peine.",
        "Un avocat, qui prononce la peine à la place du juge": "L’avocat conseille et défend ; il ne se substitue pas au tribunal pour prononcer une peine pénale."
      },
      "explanation": "Dans la procédure judiciaire, les fonctions d’enquête, de poursuite, de défense et de jugement sont distinctes. Le tribunal apprécie la culpabilité et prononce la peine dans le cadre légal.",
      "hook": "Enquêter, poursuivre, défendre, juger : quatre rôles."
    },
    {
      "id": "O062",
      "correct": "Les départements",
      "wrong": [
        "Les communes",
        "Les régions",
        "Le Conseil supérieur de l’éducation"
      ],
      "wrongReasons": {
        "Les communes": "Les communes sont le repère de gestion matérielle des écoles maternelles et primaires ; les collèges relèvent du département.",
        "Les régions": "Les régions ont notamment la charge matérielle des lycées publics ; collège et lycée ne relèvent pas du même niveau.",
        "Le Conseil supérieur de l’éducation": "Cette instance a un rôle consultatif dans l’éducation ; elle n’est pas la collectivité gestionnaire des bâtiments et équipements des collèges."
      },
      "explanation": "Les départements assurent notamment les bâtiments, l’entretien et l’équipement des collèges publics. L’État conserve les programmes et les personnels enseignants : la gestion matérielle ne doit pas être confondue avec la pédagogie.",
      "hook": "École : commune ; collège : département ; lycée : région."
    },
    {
      "id": "O063",
      "correct": "Les communes",
      "wrong": [
        "Les départements",
        "Les régions",
        "Le Conseil supérieur de l’éducation"
      ],
      "wrongReasons": {
        "Les départements": "Le département intervient notamment pour les collèges, pas comme collectivité gestionnaire générale des écoles primaires et maternelles.",
        "Les régions": "Les lycées sont le repère régional ; ce niveau ne remplace pas la commune pour les écoles primaires et maternelles.",
        "Le Conseil supérieur de l’éducation": "Il exerce une mission consultative ; il ne construit ni n’équipe individuellement les écoles comme une collectivité locale."
      },
      "explanation": "Les communes assurent notamment les locaux, l’entretien et les équipements des écoles maternelles et primaires publiques. L’État reste chargé des programmes et des enseignants ; ces compétences sont distinctes.",
      "hook": "Gestion matérielle des écoles : commune ; enseignement : État."
    },
    {
      "id": "O064",
      "correct": "Ils sont élus par les conseillers municipaux",
      "wrong": [
        "Ils sont élus directement par les électeurs dans un scrutin séparé",
        "Ils sont désignés par le président du conseil départemental",
        "Ils sont nommés par le préfet à l’issue du scrutin municipal"
      ],
      "wrongReasons": {
        "Ils sont élus directement par les électeurs dans un scrutin séparé": "Les électeurs élisent le conseil municipal ; le maire est ensuite élu par ce conseil, et non par un vote direct séparé.",
        "Ils sont désignés par le président du conseil départemental": "L’exécutif départemental ne désigne pas les maires : la commune dispose de son conseil et de son élection.",
        "Ils sont nommés par le préfet à l’issue du scrutin municipal": "Le préfet exerce des fonctions de l’État et de contrôle ; il ne remplace pas l’élection ordinaire du maire par le conseil."
      },
      "explanation": "Le conseil municipal issu des municipales élit le maire parmi ses membres. Être élu indirectement par le conseil n’est ni une nomination préfectorale ni un vote direct séparé des électeurs.",
      "hook": "Les électeurs choisissent le conseil ; le conseil choisit le maire."
    },
    {
      "id": "O065",
      "correct": "La région",
      "wrong": [
        "Le département",
        "La commune",
        "Le préfet de région"
      ],
      "wrongReasons": {
        "Le département": "Les départements ont notamment des compétences sociales et routières ; les transports régionaux, dont les TER, sont le repère de la région.",
        "La commune": "Les transports locaux peuvent relever des communes ou intercommunalités ; l’échelle régionale n’est pas la même.",
        "Le préfet de région": "Il représente l’État et coordonne ses services ; il ne se confond pas avec la collectivité organisatrice des transports régionaux."
      },
      "explanation": "La région organise les transports régionaux dans ses compétences, notamment les services ferroviaires TER. Il faut distinguer transports locaux, voirie et organisation de services régionaux.",
      "hook": "TER et échelle régionale : région, pas préfet."
    },
    {
      "id": "O066",
      "correct": "Un référendum, ou un vote du Parlement réuni en Congrès à la majorité des trois cinquièmes",
      "wrong": [
        "Un vote des deux chambres à la majorité simple, sans approbation ultérieure par référendum ou en Congrès",
        "Un vote du Parlement réuni en Congrès à la seule majorité absolue des suffrages exprimés",
        "Un décret présidentiel remplaçant le vote parlementaire et le référendum"
      ],
      "wrongReasons": {
        "Un vote des deux chambres à la majorité simple, sans approbation ultérieure par référendum ou en Congrès": "Dans l’article 89, l’adoption identique par les deux chambres est une étape préalable ; elle ne suffit pas à achever la révision.",
        "Un vote du Parlement réuni en Congrès à la seule majorité absolue des suffrages exprimés": "Pour un projet soumis au Congrès, la majorité requise est de trois cinquièmes des suffrages exprimés, pas seulement plus de la moitié.",
        "Un décret présidentiel remplaçant le vote parlementaire et le référendum": "Un acte de l’exécutif ne remplace pas à lui seul les procédures constitutionnelles de révision."
      },
      "explanation": "Dans l’article 89, les deux chambres adoptent le même texte. La révision est ensuite approuvée par référendum ou, pour un projet soumis au Congrès par le Président, par trois cinquièmes des suffrages exprimés.",
      "hook": "Même texte dans les chambres ; puis référendum ou Congrès à 3/5."
    },
    {
      "id": "O067",
      "correct": "Le président du Sénat",
      "wrong": [
        "Le Premier ministre",
        "Le président de l’Assemblée nationale",
        "Le président du Conseil constitutionnel"
      ],
      "wrongReasons": {
        "Le Premier ministre": "Il dirige le Gouvernement, mais n’est pas l’autorité ordinaire d’intérim désignée en premier par l’article 7.",
        "Le président de l’Assemblée nationale": "La Constitution attribue cet intérim au président du Sénat, pas au président de l’autre chambre.",
        "Le président du Conseil constitutionnel": "Le Conseil intervient notamment dans la constatation d’un empêchement ; constater une situation n’est pas exercer l’intérim."
      },
      "explanation": "En cas de vacance par décès, l’intérim revient au président du Sénat. Si celui-ci est lui-même empêché, la Constitution prévoit l’intervention du Gouvernement ; ce n’est pas la règle ordinaire d’un Premier ministre remplaçant seul le Président.",
      "hook": "Vacance présidentielle : président du Sénat en premier."
    },
    {
      "id": "O068",
      "correct": "Contrôler la conformité des lois à la Constitution et veiller à certaines élections",
      "wrong": [
        "Juger les litiges administratifs et conseiller le Gouvernement sur ses projets de texte",
        "Voter les lois et contrôler l’action du Gouvernement",
        "Diriger l’action du Gouvernement et assurer l’exécution des lois"
      ],
      "wrongReasons": {
        "Juger les litiges administratifs et conseiller le Gouvernement sur ses projets de texte": "Ces fonctions évoquent le Conseil d’État ; le Conseil constitutionnel a une mission distincte de contrôle constitutionnel.",
        "Voter les lois et contrôler l’action du Gouvernement": "Ce sont des fonctions parlementaires ; le Conseil constitutionnel ne remplace pas les assemblées pour voter.",
        "Diriger l’action du Gouvernement et assurer l’exécution des lois": "C’est le rôle du Premier ministre ; le Conseil constitutionnel n’est pas l’exécutif gouvernemental."
      },
      "explanation": "Le Conseil constitutionnel contrôle la conformité des lois à la Constitution et veille aux scrutins dans ses compétences. Il ne faut le confondre ni avec le Conseil d’État, ni avec le Parlement, ni avec le Gouvernement.",
      "hook": "Conseil constitutionnel : constitutionnalité et scrutins."
    },
    {
      "id": "O069",
      "correct": "Obtenir 500 présentations d'élus provenant d'au moins 30 départements ou collectivités",
      "wrong": [
        "Obtenir seulement 300 présentations d’élus, avec 30 territoires représentés",
        "Obtenir 500 présentations d’élus, avec seulement 20 territoires représentés",
        "Obtenir 500 signatures de citoyens non élus dans au moins 30 territoires"
      ],
      "wrongReasons": {
        "Obtenir seulement 300 présentations d’élus, avec 30 territoires représentés": "La diversité territoriale ne compense pas un total insuffisant : 500 présentations valides sont nécessaires.",
        "Obtenir 500 présentations d’élus, avec seulement 20 territoires représentés": "Le total seul ne suffit pas : il faut au moins trente départements ou collectivités, avec la répartition autorisée.",
        "Obtenir 500 signatures de citoyens non élus dans au moins 30 territoires": "Les présentations doivent être celles d’élus habilités ; des signatures de simples citoyens ne remplissent pas cette condition."
      },
      "explanation": "La candidature nécessite 500 présentations valides d’élus provenant d’au moins trente départements ou collectivités, selon les règles de répartition. Le nombre, la qualité des présentateurs et leur origine territoriale sont trois conditions à distinguer.",
      "hook": "500 ; élus habilités ; au moins 30 territoires."
    },
    {
      "id": "O070",
      "correct": "101",
      "wrong": [
        "96",
        "100",
        "102"
      ],
      "wrongReasons": {
        "96": "Ce total correspond à la métropole seule ; il omet les cinq départements d’outre-mer.",
        "100": "Ce total oublie notamment Mayotte, devenue département en 2011 : le compte actuel est 96 plus cinq.",
        "102": "Il ne faut pas compter une collectivité à statut particulier, comme la métropole de Lyon, comme un département administratif supplémentaire."
      },
      "explanation": "Le découpage compte 101 départements : 96 en métropole et cinq outre-mer. Il faut distinguer départements administratifs et collectivités à statut particulier plutôt que les additionner sans vérifier.",
      "hook": "96 en métropole + 5 outre-mer = 101."
    },
    {
      "id": "O071",
      "correct": "En communes, départements et régions",
      "wrong": [
        "En communes, cantons et arrondissements uniquement",
        "En communes, départements et préfectures",
        "En communes, provinces autonomes et États fédérés"
      ],
      "wrongReasons": {
        "En communes, cantons et arrondissements uniquement": "Cantons et arrondissements sont des circonscriptions ; cette liste omet les niveaux départemental et régional du découpage recherché.",
        "En communes, départements et préfectures": "Une préfecture est une institution et un service de l’État, pas un niveau de collectivité équivalent à une région.",
        "En communes, provinces autonomes et États fédérés": "Ce schéma fédéral ne décrit pas la République française indivisible et décentralisée."
      },
      "explanation": "Les communes, départements et régions sont les principaux niveaux territoriaux recherchés. D’autres circonscriptions et structures existent, mais elles ne doivent pas être confondues avec ces collectivités.",
      "hook": "Niveaux territoriaux ≠ services de l’État ou circonscriptions."
    },
    {
      "id": "O072",
      "correct": "Le préfet",
      "wrong": [
        "Le président du conseil départemental",
        "Le député",
        "Le maire du chef-lieu"
      ],
      "wrongReasons": {
        "Le président du conseil départemental": "Il dirige la collectivité départementale ; le représentant territorial de l’État est une autre autorité.",
        "Le député": "Il exerce un mandat parlementaire de représentation, de législation et de contrôle ; il n’est pas le représentant général des services de l’État dans le département.",
        "Le maire du chef-lieu": "Le maire dirige sa commune et exerce certaines fonctions d’État ; être maire du chef-lieu ne le rend pas préfet de tout le département."
      },
      "explanation": "Le préfet représente l’État dans le département et coordonne ses services. Le conseil départemental est une collectivité territoriale avec son propre exécutif : ces deux autorités ne se confondent pas.",
      "hook": "Préfet : État ; président du conseil : collectivité."
    },
    {
      "id": "O073",
      "correct": "Être le chef de l'État, veiller à la Constitution et assurer la continuité de l'État",
      "wrong": [
        "Diriger l’action du Gouvernement et assurer l’exécution des lois",
        "Voter les lois nationales et contrôler l’action du Gouvernement",
        "Prononcer les décisions de constitutionnalité des lois et statuer sur les élections contestées"
      ],
      "wrongReasons": {
        "Diriger l’action du Gouvernement et assurer l’exécution des lois": "Cette fonction est constitutionnellement attribuée au Premier ministre ; chef de l’État et chef du Gouvernement sont distincts.",
        "Voter les lois nationales et contrôler l’action du Gouvernement": "Ce sont les fonctions du Parlement ; le Président ne se substitue pas aux chambres pour les exercer.",
        "Prononcer les décisions de constitutionnalité des lois et statuer sur les élections contestées": "Ces contrôles juridictionnels relèvent du Conseil constitutionnel dans ses compétences ; veiller à la Constitution comme chef de l’État n’est pas rendre ces décisions."
      },
      "explanation": "Le Président est chef de l’État. Il veille au respect de la Constitution et assure, par son arbitrage, le fonctionnement régulier des pouvoirs publics et la continuité de l’État ; cela ne le rend ni législateur unique ni juge constitutionnel.",
      "hook": "Chef de l’État : continuité et Constitution, pas tous les pouvoirs."
    },
    {
      "id": "O074",
      "correct": "Diriger l'action du Gouvernement et assurer l'exécution des lois",
      "wrong": [
        "Être le chef de l’État et assurer la continuité de l’État",
        "Présider le Sénat et assurer l’intérim présidentiel en cas de vacance",
        "Contrôler la conformité des lois à la Constitution et les scrutins"
      ],
      "wrongReasons": {
        "Être le chef de l’État et assurer la continuité de l’État": "La fonction de chef de l’État est celle du Président de la République, distincte de la direction du Gouvernement.",
        "Présider le Sénat et assurer l’intérim présidentiel en cas de vacance": "Ces fonctions sont associées au président du Sénat ; le Premier ministre ne cumule pas ces mandats par sa seule nomination.",
        "Contrôler la conformité des lois à la Constitution et les scrutins": "Ces missions évoquent le Conseil constitutionnel ; le Premier ministre conduit l’action gouvernementale."
      },
      "explanation": "Le Premier ministre dirige l’action du Gouvernement, assure l’exécution des lois et exerce les compétences réglementaires prévues. Son rôle se distingue de ceux du Président, du Parlement et du Conseil constitutionnel.",
      "hook": "Premier ministre : Gouvernement et exécution des lois."
    },
    {
      "id": "O075",
      "correct": "Protéger les droits face aux services publics et lutter notamment contre les discriminations",
      "wrong": [
        "Juger les conflits individuels entre employeurs et salariés comme un tribunal",
        "Contrôler la conformité des lois à la Constitution et les élections présidentielles",
        "Conduire les poursuites pénales au nom de la société et requérir les peines à l’audience"
      ],
      "wrongReasons": {
        "Juger les conflits individuels entre employeurs et salariés comme un tribunal": "Les prud’hommes jugent les litiges individuels du travail privé ; le Défenseur peut agir sur une discrimination mais ne rend pas ce jugement.",
        "Contrôler la conformité des lois à la Constitution et les élections présidentielles": "Ce sont des compétences du Conseil constitutionnel, pas la mission générale du Défenseur des droits.",
        "Conduire les poursuites pénales au nom de la société et requérir les peines à l’audience": "C’est le rôle du ministère public ; transmettre un dossier ou défendre des droits ne transforme pas le Défenseur en procureur."
      },
      "explanation": "Le Défenseur des droits est une autorité indépendante qui protège notamment les usagers des services publics, lutte contre les discriminations et veille aux droits des enfants. Il ne remplace ni un tribunal, ni le procureur, ni le Conseil constitutionnel.",
      "hook": "Défenseur : protéger et agir, pas se substituer aux juges."
    },
    {
      "id": "O076",
      "correct": "En 1992, par le traité de Maastricht",
      "wrong": [
        "En 1991, par le traité de Maastricht",
        "En 1997, par le traité d’Amsterdam",
        "En 2007, par le traité de Lisbonne"
      ],
      "wrongReasons": {
        "En 1991, par le traité de Maastricht": "Les négociations précèdent la signature, mais le traité fondateur de cette citoyenneté a été signé en 1992, pas en 1991.",
        "En 1997, par le traité d’Amsterdam": "Amsterdam modifie des traités européens ; il ne crée pas une citoyenneté déjà instituée par Maastricht.",
        "En 2007, par le traité de Lisbonne": "Lisbonne réforme le fonctionnement de l’Union ; la citoyenneté européenne existe déjà depuis Maastricht."
      },
      "explanation": "La citoyenneté européenne est instituée par le traité de Maastricht signé en 1992, entré en vigueur en 1993. Elle complète la nationalité d’un État membre sans la remplacer : création par le traité et entrée en vigueur sont à distinguer.",
      "hook": "Maastricht signé en 1992 ; entrée en vigueur en 1993."
    },
    {
      "id": "O077",
      "correct": "Ludwig van Beethoven",
      "wrong": [
        "Friedrich Schiller",
        "Wolfgang Amadeus Mozart",
        "Johann Strauss II"
      ],
      "wrongReasons": {
        "Friedrich Schiller": "Schiller est l’auteur du poème L’Ode à la joie ; l’auteur du texte n’est pas le compositeur de la mélodie retenue.",
        "Wolfgang Amadeus Mozart": "La mélodie provient de la Neuvième Symphonie de Beethoven, pas d’une symphonie de Mozart.",
        "Johann Strauss II": "Strauss est notamment associé au Beau Danube bleu ; l’hymne européen reprend un thème de Beethoven."
      },
      "explanation": "L’hymne européen reprend la mélodie de l’Ode à la joie dans la Neuvième Symphonie de Ludwig van Beethoven. Le poème est de Schiller, mais l’hymne officiel est instrumental : texte, musique et usage institutionnel sont distincts.",
      "hook": "Musique : Beethoven ; poème : Schiller."
    },
    {
      "id": "O078",
      "correct": "Le 9 mai",
      "wrong": [
        "Le 8 mai",
        "Le 10 mai",
        "Le 12 mai"
      ],
      "wrongReasons": {
        "Le 8 mai": "Le 8 mai commémore la victoire de 1945 en Europe ; la journée de l’Union rappelle la déclaration Schuman du 9 mai 1950.",
        "Le 10 mai": "En France, le 10 mai est notamment une journée de mémoire de la traite, de l’esclavage et de leurs abolitions, pas la Journée de l’Europe.",
        "Le 12 mai": "Le 12 mai est associé à la journée internationale des infirmières ; ce n’est pas la date de la déclaration Schuman."
      },
      "explanation": "Pour l’Union européenne, la Journée de l’Europe est le 9 mai, en souvenir de la déclaration Schuman de 1950. Une journée commémorative voisine peut avoir une autre origine et une autre année de référence.",
      "hook": "8 mai : victoire de 1945 ; 9 mai : Schuman en 1950."
    },
    {
      "id": "O079",
      "correct": "À Francfort",
      "wrong": [
        "À Bruxelles",
        "À Luxembourg",
        "À Strasbourg"
      ],
      "wrongReasons": {
        "À Bruxelles": "Bruxelles accueille notamment le siège de la Commission ; la mission monétaire de la BCE correspond à une autre institution et une autre ville.",
        "À Luxembourg": "Luxembourg accueille notamment la Cour de justice de l’Union ; ce n’est pas le siège de la Banque centrale européenne.",
        "À Strasbourg": "Strasbourg est le siège officiel du Parlement européen, pas celui de la BCE."
      },
      "explanation": "Le siège de la Banque centrale européenne se trouve à Francfort, en Allemagne. Bruxelles, Luxembourg et Strasbourg accueillent d’autres institutions européennes : « européen » ne signifie pas un siège unique.",
      "hook": "BCE : Francfort ; ne pas confondre les institutions."
    },
    {
      "id": "O080",
      "correct": "À Bruxelles",
      "wrong": [
        "À Strasbourg",
        "À Luxembourg",
        "À Francfort"
      ],
      "wrongReasons": {
        "À Strasbourg": "Strasbourg est le siège du Parlement européen ; Commission et Parlement ne sont pas la même institution.",
        "À Luxembourg": "La Commission possède des services au Luxembourg, mais son siège principal est Bruxelles. Présence de services et siège sont différents.",
        "À Francfort": "Francfort accueille la Banque centrale européenne, pas le siège principal de la Commission."
      },
      "explanation": "La Commission européenne a son siège principal à Bruxelles. Elle possède aussi des services dans d’autres lieux, notamment au Luxembourg ; cela ne déplace pas le siège demandé.",
      "hook": "Commission : Bruxelles ; services ailleurs possibles."
    },
    {
      "id": "O081",
      "correct": "Les députés européens",
      "wrong": [
        "Les chefs d’État ou de gouvernement",
        "Les ministres des États membres réunis par secteur",
        "Les commissaires européens"
      ],
      "wrongReasons": {
        "Les chefs d’État ou de gouvernement": "Ils composent le Conseil européen, qui fixe de grandes orientations ; ce n’est pas le Parlement élu.",
        "Les ministres des États membres réunis par secteur": "Ils se réunissent au Conseil de l’Union européenne selon les domaines ; le Parlement est composé de députés.",
        "Les commissaires européens": "Ils appartiennent à la Commission européenne, distincte de l’assemblée des représentants élus des citoyens."
      },
      "explanation": "Les députés européens siègent au Parlement européen et représentent les citoyens. Chefs d’État ou de gouvernement, ministres et commissaires relèvent de trois autres institutions à distinguer.",
      "hook": "Parlement : députés ; Conseils et Commission : autres membres."
    },
    {
      "id": "O082",
      "correct": "27",
      "wrong": [
        "26",
        "28",
        "29"
      ],
      "wrongReasons": {
        "26": "Le Royaume-Uni est un seul État membre sortant : partir de 28 et retrancher deux confondrait notamment Royaume-Uni et Irlande, qui reste membre.",
        "28": "Vingt-huit est le total antérieur au Brexit ; le retrait britannique ramène l’Union à vingt-sept membres.",
        "29": "Il ne faut pas ajouter des pays européens non membres, par exemple la Norvège et la Suisse, aux vingt-sept États de l’Union."
      },
      "explanation": "Au 1er janvier 2025, l’Union européenne compte vingt-sept États membres. Il faut distinguer le continent européen, les membres de l’Union et le total antérieur au retrait du Royaume-Uni.",
      "hook": "2025 : 27 ; avant le Brexit : 28."
    },
    {
      "id": "O083",
      "correct": "1992",
      "wrong": [
        "1991",
        "1993",
        "1995"
      ],
      "wrongReasons": {
        "1991": "La préparation et les négociations précèdent la signature ; Maastricht a été signé le 7 février 1992.",
        "1993": "C’est l’année de l’entrée en vigueur du traité, le 1er novembre, pas celle de sa signature.",
        "1995": "Cette année correspond notamment à l’adhésion de l’Autriche, de la Finlande et de la Suède, pas à la signature de Maastricht."
      },
      "explanation": "Le traité de Maastricht a été signé le 7 février 1992 et est entré en vigueur le 1er novembre 1993. Une signature, une entrée en vigueur et un élargissement sont trois événements différents.",
      "hook": "Signature : 1992 ; vigueur : 1993 ; élargissement : 1995."
    },
    {
      "id": "O084",
      "correct": "Le traité de Rome",
      "wrong": [
        "Le traité de Washington",
        "Le traité de Versailles",
        "Le traité de San Francisco de 1951"
      ],
      "wrongReasons": {
        "Le traité de Washington": "Le traité de Washington de 1949 crée l’OTAN, une alliance de défense, pas la Communauté économique européenne.",
        "Le traité de Versailles": "Le traité de Versailles de 1919 règle la paix après la Première Guerre mondiale ; ce n’est pas le traité fondateur de la CEE.",
        "Le traité de San Francisco de 1951": "Ce traité concerne la paix avec le Japon après la Seconde Guerre mondiale, pas la création des Communautés européennes."
      },
      "explanation": "Les traités de Rome de 1957 créent notamment la CEE et Euratom et constituent des étapes fondatrices de la construction européenne. D’autres traités fondateurs européens, comme Maastricht, ne seraient pas de faux choix pour cet intitulé général.",
      "hook": "Rome : CEE en 1957 ; distinguer paix, défense et intégration."
    },
    {
      "id": "O085",
      "correct": "Le Royaume-Uni",
      "wrong": [
        "L’Irlande",
        "Le Danemark",
        "La Norvège"
      ],
      "wrongReasons": {
        "L’Irlande": "L’Irlande reste membre de l’Union ; elle ne doit pas être confondue avec le Royaume-Uni dont le retrait est effectif en 2020.",
        "Le Danemark": "Le Danemark reste membre de l’Union. Ne pas adopter l’euro ne signifie pas avoir quitté l’Union européenne.",
        "La Norvège": "La Norvège n’était pas membre de l’Union ; elle ne peut pas être l’État membre qui l’a quittée en 2020."
      },
      "explanation": "Le Royaume-Uni a quitté l’Union européenne le 31 janvier 2020. Union européenne, zone euro et géographie du nord de l’Europe sont des catégories différentes.",
      "hook": "Brexit : Royaume-Uni ; Irlande toujours membre."
    },
    {
      "id": "O086",
      "correct": "L'Ode à la joie",
      "wrong": [
        "La Marseillaise",
        "Le Beau Danube bleu",
        "La Symphonie du Nouveau Monde"
      ],
      "wrongReasons": {
        "La Marseillaise": "C’est l’hymne national français composé par Rouget de Lisle, pas le thème instrumental européen.",
        "Le Beau Danube bleu": "Cette valse de Johann Strauss II est une œuvre européenne célèbre, mais elle n’est pas l’hymne de l’Union.",
        "La Symphonie du Nouveau Monde": "Cette symphonie est de Dvořák ; ce n’est pas la Neuvième Symphonie de Beethoven dont provient l’hymne européen."
      },
      "explanation": "L’hymne de l’Union européenne reprend le thème instrumental de l’Ode à la joie dans la Neuvième Symphonie de Beethoven. Une œuvre célèbre ou un hymne national n’acquiert pas automatiquement ce statut européen.",
      "hook": "Ode à la joie : thème européen de Beethoven."
    },
    {
      "id": "O087",
      "correct": "De douze étoiles dorées en cercle sur fond bleu",
      "wrong": [
        "De vingt-sept étoiles dorées en cercle sur fond bleu",
        "De douze étoiles dorées alignées sur fond bleu",
        "De douze étoiles bleues en cercle sur fond doré"
      ],
      "wrongReasons": {
        "De vingt-sept étoiles dorées en cercle sur fond bleu": "Le nombre d’étoiles ne compte pas les États membres : il reste fixé à douze, même après des adhésions ou un retrait.",
        "De douze étoiles dorées alignées sur fond bleu": "Le nombre et les couleurs sont justes, mais les étoiles sont disposées en cercle, pas en ligne.",
        "De douze étoiles bleues en cercle sur fond doré": "La forme et le nombre sont justes, mais les couleurs sont inversées : étoiles dorées, fond bleu."
      },
      "explanation": "Le drapeau européen comporte douze étoiles dorées disposées en cercle sur fond bleu. Le nombre est symbolique et fixe : il ne suit pas le nombre des États membres.",
      "hook": "12 ; dorées ; cercle ; fond bleu."
    },
    {
      "id": "O088",
      "correct": "Les citoyens de l'Union européenne au suffrage universel direct",
      "wrong": [
        "Les gouvernements des États membres, par nomination",
        "Les parlements nationaux, par une élection indirecte",
        "Les conseillers municipaux réunis en collège de grands électeurs"
      ],
      "wrongReasons": {
        "Les gouvernements des États membres, par nomination": "Les gouvernements ne nomment pas les députés européens : leur mandat vient du vote des citoyens.",
        "Les parlements nationaux, par une élection indirecte": "Les premières désignations étaient liées aux parlements nationaux, mais les élections européennes au suffrage direct existent depuis 1979.",
        "Les conseillers municipaux réunis en collège de grands électeurs": "Ce mécanisme évoque l’élection sénatoriale française ; il ne désigne pas le Parlement européen."
      },
      "explanation": "Les citoyens de l’Union élisent directement les députés européens tous les cinq ans. Il faut distinguer ce suffrage direct des nominations institutionnelles et des anciens modes de délégation parlementaire.",
      "hook": "Européennes : citoyens, suffrage direct, cinq ans."
    },
    {
      "id": "O089",
      "correct": "À Strasbourg",
      "wrong": [
        "À Bruxelles",
        "À Luxembourg",
        "À Francfort"
      ],
      "wrongReasons": {
        "À Bruxelles": "Des travaux et réunions du Parlement ont lieu à Bruxelles ; cela ne remplace pas son siège officiel de Strasbourg.",
        "À Luxembourg": "Le secrétariat général et certains services sont au Luxembourg, pas le siège officiel de l’institution.",
        "À Francfort": "Francfort est le siège de la Banque centrale européenne, pas du Parlement."
      },
      "explanation": "Le siège officiel du Parlement européen est Strasbourg. L’institution travaille aussi à Bruxelles et possède des services au Luxembourg : siège, lieux de réunion et services ne sont pas identiques.",
      "hook": "Siège : Strasbourg ; travaux aussi à Bruxelles."
    },
    {
      "id": "ON004",
      "correct": "La Croatie",
      "wrong": [
        "La Slovénie",
        "La Roumanie",
        "Le Monténégro"
      ],
      "wrongReasons": {
        "La Slovénie": "La Slovénie est entrée dans l’Union en 2004 ; elle ne doit pas être confondue avec sa voisine croate entrée en 2013.",
        "La Roumanie": "La Roumanie a rejoint l’Union en 2007, avec la Bulgarie, avant l’adhésion croate.",
        "Le Monténégro": "Le Monténégro est un pays candidat, pas l’État devenu membre de l’Union en 2013."
      },
      "explanation": "La Croatie a rejoint l’Union européenne le 1er juillet 2013. La proximité géographique ne signifie pas que la Slovénie, la Roumanie ou le Monténégro ont le même statut ou la même date d’adhésion.",
      "hook": "Croatie : 2013 ; Slovénie : 2004 ; Roumanie : 2007."
    },
    {
      "id": "ON005",
      "correct": "Oui, aux élections municipales de l’État membre où ils résident, sous les conditions prévues",
      "wrong": [
        "Non, la citoyenneté d’un autre État membre ne permet que le vote au Parlement européen",
        "Oui, automatiquement à toutes les élections locales et nationales du pays de résidence",
        "Oui, mais uniquement après avoir obtenu la nationalité du pays de résidence"
      ],
      "wrongReasons": {
        "Non, la citoyenneté d’un autre État membre ne permet que le vote au Parlement européen": "Le droit européen ouvre aussi le vote municipal dans l’État membre de résidence, sous les conditions applicables.",
        "Oui, automatiquement à toutes les élections locales et nationales du pays de résidence": "Le droit municipal ne s’étend pas à tous les scrutins ; en France, il ne donne pas le vote présidentiel, législatif, départemental ou régional.",
        "Oui, mais uniquement après avoir obtenu la nationalité du pays de résidence": "Pour le vote municipal concerné, un citoyen d’un autre État de l’Union n’a pas besoin d’être naturalisé ; il doit remplir les conditions et s’inscrire."
      },
      "explanation": "La citoyenneté européenne ouvre un droit de vote municipal dans un autre État membre où l’on réside. En France, une inscription sur la liste complémentaire est nécessaire ; ce droit ne s’étend pas à tous les scrutins locaux ou nationaux.",
      "hook": "Citoyen européen résident : municipales sous conditions."
    },
    {
      "id": "ON006",
      "correct": "Unie dans la diversité",
      "wrong": [
        "L’union fait la force",
        "Liberté, Égalité, Fraternité",
        "E pluribus unum"
      ],
      "wrongReasons": {
        "L’union fait la force": "Cette devise est notamment celle de la Belgique ; une idée d’union ne suffit pas à identifier la formule officielle de l’Union européenne.",
        "Liberté, Égalité, Fraternité": "C’est la devise de la République française ; la devise européenne met explicitement en avant la diversité.",
        "E pluribus unum": "Cette formule latine est associée aux États-Unis ; ce n’est pas la devise officielle de l’Union européenne."
      },
      "explanation": "La devise européenne est « Unie dans la diversité », adoptée en 2000. Elle exprime une union qui conserve la diversité des cultures, des traditions et des langues, sans être la devise de chaque État.",
      "hook": "Union européenne : unie, sans effacer la diversité."
    }
  ]
});
})();
