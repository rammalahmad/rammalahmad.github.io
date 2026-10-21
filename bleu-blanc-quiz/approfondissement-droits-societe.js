/* Approfondissements pédagogiques : sources publiques relues le 21 octobre 2026.
   Aucune question n'est présentée comme une question officielle ou une banque secrète.
   Les identifiants des banques précédentes ne sont jamais modifiés. */
(() => {
  "use strict";
  const sources = [
  {
    "id": "fiche-ds-r01",
    "code": "R01",
    "title": "Introduction aux droits fondamentaux",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/introduction-aux-droits-fondamentaux/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r02",
    "code": "R02",
    "title": "Les droits liés à la personne humaine",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-droits-inherents-a-la-personne-humaine/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r03",
    "code": "R03",
    "title": "Les droits économiques et sociaux et les droits dits de troisième génération",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/droits-economiques-sociaux-troisieme-generation/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r04",
    "code": "R04",
    "title": "La dignité humaine",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/la-diginite-humaine/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r05",
    "code": "R05",
    "title": "Un droit fondamental : le droit de disposer de son corps",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/un-droit-fondamental-le-droit-de-disposer-de-son-corps/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r06",
    "code": "R06",
    "title": "Les libertés au sein du couple",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-libertes-au-sein-du-couple/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r07",
    "code": "R07",
    "title": "La citoyenneté",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/un-droit-fondamental-la-citoyennete/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r08",
    "code": "R08",
    "title": "Présentation des principaux textes (1/3) : La Déclaration des droits de l'homme et du citoyen",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-principaux-textes-la-declaraion-des-droits-de-lhomme-et-du-citoyen/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r09",
    "code": "R09",
    "title": "Présentation des principaux textes (2/3) : La Constitution de la Vème République",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-principaux-textes-la-constitution-de-la-5-republique/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r10",
    "code": "R10",
    "title": "Présentation des principaux textes (3/3) : La Charte de l'environnement",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-principaux-textes-la-charte-de-lenvironnement/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-r11",
    "code": "R11",
    "title": "Les acteurs institutionnels",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-acteurs-institutionnels/",
    "theme": "rights",
    "section": "Droits fondamentaux",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o01",
    "code": "O01",
    "title": "La limite des libertés individuelles",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/la-limite-des-libertes-individuelles/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o02",
    "code": "O02",
    "title": "Se conformer aux lois : les infractions (1/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/se-conformer-aux-lois-les-infractions/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o03",
    "code": "O03",
    "title": "Se conformer aux lois - les acteurs (2/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/se-conformer-aux-lois-les-acteurs/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o04",
    "code": "O04",
    "title": "Les obligations en tant que résident français",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/les-obligations-en-tant-que-resident-francais/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o05",
    "code": "O05",
    "title": "Les obligations en tant que citoyen français",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/les-obligations-en-tant-que-citoyen-francais/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o06",
    "code": "O06",
    "title": "L'interdiction de toutes les formes de violences",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/linterdiction-de-toutes-les-formes-de-violences/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o07",
    "code": "O07",
    "title": "L'interdiction des violences faites aux enfants",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/l-interdiction-des-violences-faites-aux-enfants/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o08",
    "code": "O08",
    "title": "L'interdiction des mutilations sexuelles féminines",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/linterdiction-des-mutilations-sexuelles-f%C3%A9minines/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o09",
    "code": "O09",
    "title": "L'interdition des violences sexuelles",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/linterdiction-des-violences-sexuelles/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o10",
    "code": "O10",
    "title": "La traite des êtres humains et la prostitution",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/la-traite-des-etres-humains-et-la-prostitution/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o11",
    "code": "O11",
    "title": "La protection des victimes de violences",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/la-protection-des-victimes-de-violences/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o12",
    "code": "O12",
    "title": "Le rôle des témoins en cas de violences",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/le-role-des-temoins-en-cas-de-violences/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-o13",
    "code": "O13",
    "title": "Adopter une attitude respectueuse vis-à-vis de l’environnement",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/obligations-et-devoirs-des-personnes-residant-en-france/obligations-et-devoirs-des-personnes-residants-en-france-adopter-une-attitude-respectueuse-vis-a-vis-de-environnement/",
    "theme": "rights",
    "section": "Obligations et devoirs",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a01",
    "code": "A01",
    "title": "Les démarches du quotidien comme la domiciliation",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-du-quotidien-comme-la-domiciliation/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a02",
    "code": "A02",
    "title": "Les démarches du quotidien comme l’ouverture d’un compte bancaire",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-du-quotidien-comme-louverture-dun-compte-bancaire/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a03",
    "code": "A03",
    "title": "Les démarches du quotidien comme le permis de conduire (1/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-du-quotidien-comme-le-permis-de-conduire-1/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a04",
    "code": "A04",
    "title": "Les démarches du quotidien comme le permis de conduire (2/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-du-quotidien-comme-le-permis-de-conduire-2/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a05",
    "code": "A05",
    "title": "Les démarches du quotidien comme l’assurance responsabilité civile",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-du-quotidien-comme-lassurance-responsabilite-civile/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a06",
    "code": "A06",
    "title": "L'impôt en France et la déclaration de revenus",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/l-impot-en-france-et-la-declaration-de-revenus/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a07",
    "code": "A07",
    "title": "Les démarches relatives au séjour en France",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-relatives-au-sejour-en-france/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a08",
    "code": "A08",
    "title": "Les démarches d’accès à la nationalité française",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-dacces-a-la-nationalite-francaise/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a09",
    "code": "A09",
    "title": "La déclaration de naissance",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/la-declaration-de-naissance/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a10",
    "code": "A10",
    "title": "La déclaration de mariage",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/la-declaration-de-mariage/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a11",
    "code": "A11",
    "title": "La déclaration de décès",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/la-declaration-de-deces/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a12",
    "code": "A12",
    "title": "Les démarches relatives au logement (1/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-relatives-au-logement-1/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a13",
    "code": "A13",
    "title": "Les démarches relatives au logement (2/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/les-demarches-relatives-au-logement-2/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-a14",
    "code": "A14",
    "title": "Annexe : les numéros d’urgence",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/demarches-administratives/annexe-les-numeros-durgence/",
    "theme": "society",
    "section": "Démarches administratives",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h01",
    "code": "H01",
    "title": "Accès aux soins : le parcours de santé",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/acces-aux-soins-le-parcours-de-sante/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h02",
    "code": "H02",
    "title": "Accès aux soins : le médecin généraliste",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/acces-aux-soins-le-medecin-generaliste/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h03",
    "code": "H03",
    "title": "Accès aux soins : le médecin spécialiste",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/acces-aux-soins-le-medecin-specialiste/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h04",
    "code": "H04",
    "title": "Accès aux soins : les structures d’accueil gratuites",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/acces-aux-soins-les-structures-d-accueil-gratuites/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h05",
    "code": "H05",
    "title": "Accès aux soins : services et numéros d’urgence",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/acces-aux-soins-services-et-numeros-d-urgence/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h06",
    "code": "H06",
    "title": "La prise en charge : les différentes couvertures maladie",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/la-prise-en-charge-les-differentes-couvertures-maladie/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h07",
    "code": "H07",
    "title": "Accès aux soins : les médecins et pharmacies de garde",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/acces-aux-soins-les-medecins-et-pharmacies-de-garde/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h08",
    "code": "H08",
    "title": "Santé : la prise en charge en cas de renouvellement du titre de séjour",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/sante-la-prise-en-charge-en-cas-de-enouvellement-du-titre-de-sejour/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h09",
    "code": "H09",
    "title": "Santé : la prise en charge et le remboursement",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/sante-la-prise-en-charge-les-demarches-pour-etre-rembourse/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h10",
    "code": "H10",
    "title": "La prise en charge : les démarches pour accéder à la protection universelle maladie (PUMa)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/la-prise-en-charge-les-demarches-pour-acceder-a-la-protection-universelle-maladie/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h11",
    "code": "H11",
    "title": "Santé : la prise en charge durant la maternité",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/sante-la-prise-en-charge-durant-la-maternite/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h12",
    "code": "H12",
    "title": "Santé : les droits et les devoirs du patient",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/sante-les-droits-du-patient/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h13",
    "code": "H13",
    "title": "Prévention et promotion de la santé (1/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/prevention-et-promotion-de-la-sante-1/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h14",
    "code": "H14",
    "title": "Prévention et promotion de la santé (2/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/prevention-et-promotion-de-la-sante-2/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-h15",
    "code": "H15",
    "title": "Prévention et promotion de la santé : la santé mentale",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/sante/prevention-et-promotion-de-la-sante-la-sante-mentale/",
    "theme": "society",
    "section": "Santé",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e01",
    "code": "E01",
    "title": "Orientation (1/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/orientation-1/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e02",
    "code": "E02",
    "title": "Orientation (2/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/orientation-2/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e03",
    "code": "E03",
    "title": "Orientation (3/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/orientation-3/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e04",
    "code": "E04",
    "title": "Orientation (4/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/orientation-4/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e05",
    "code": "E05",
    "title": "Orientation (5/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/orientation-5/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e06",
    "code": "E06",
    "title": "Formation (1/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/formation-1/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e07",
    "code": "E07",
    "title": "Formation (2/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/formation-2/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e08",
    "code": "E08",
    "title": "Formation (3/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/formation-3/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e09",
    "code": "E09",
    "title": "Types d'emploi (1/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/types-emploi-1/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e10",
    "code": "E10",
    "title": "Types d'emploi (2/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/types-emploi-2/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e11",
    "code": "E11",
    "title": "Types d'emploi (3/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/types-emploi-3/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e12",
    "code": "E12",
    "title": "Recrutement (1/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/recrutement-1/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e13",
    "code": "E13",
    "title": "Recrutement (2/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/recrutement-2/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e14",
    "code": "E14",
    "title": "Recrutement (3/3)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/recrutement-3/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e15",
    "code": "E15",
    "title": "Le droit du travail (1/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/le-droit-au-travail-1/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e16",
    "code": "E16",
    "title": "Le droit du travail (2/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/le-droit-au-travail-2/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e17",
    "code": "E17",
    "title": "Le droit du travail (3/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/le-droit-au-travail-3/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e18",
    "code": "E18",
    "title": "Le droit du travail (4/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/le-droit-au-travail-4/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-e19",
    "code": "E19",
    "title": "Le droit du travail (5/5)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/emploi/le-droit-au-travail-5/",
    "theme": "society",
    "section": "Emploi",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p01",
    "code": "P01",
    "title": "Les droits de l'enfant",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/les-droits-de-l-enfant/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p02",
    "code": "P02",
    "title": "Exercice de l’autorité parentale (1/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/exercice-de-l-autorite-parentale-1/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p03",
    "code": "P03",
    "title": "Exercice de l’autorité parentale (2/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/exercice-de-l-autorite-parentale-2/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p04",
    "code": "P04",
    "title": "Retrait de l’autorité parentale",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/retrait-de-l-autorite-parentale/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p05",
    "code": "P05",
    "title": "Les modes de garde des enfants de moins de 3 ans",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/les-modes-de-garde-des-enfants-de-moins-de-3-ans/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p06",
    "code": "P06",
    "title": "Le système éducatif",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/le-systeme-educatif/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p07",
    "code": "P07",
    "title": "La liberté de choisir l’école de son enfant",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/la-liberte-de-choisir-l-ecole-de-son-enfant/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p08",
    "code": "P08",
    "title": "L'école pour les enfants allophones",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/l-ecole-pour-les-enfants-allophones/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p09",
    "code": "P09",
    "title": "Les devoirs et le rôle des parents à l’école",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/droits-et-devoirs-des-parents-a-l-ecole/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p10",
    "code": "P10",
    "title": "Le dispositif OEPRE",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/le-dispositif-oepre/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p11",
    "code": "P11",
    "title": "Le soutien à la parentalité (1/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/le-soutien-a-la-parentalite-1/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "fiche-ds-p12",
    "code": "P12",
    "title": "Le soutien à la parentalité (2/2)",
    "url": "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/vivre-dans-la-societe-fran%C3%A7aise/parentalite/le-soutien-a-la-parentalite-2/",
    "theme": "society",
    "section": "Parentalité et école",
    "kind": "fiche",
    "facts": []
  },
  {
    "id": "livret-ds-droits",
    "code": "L3",
    "title": "Livret du citoyen — Droits et devoirs",
    "url": "assets/livret-du-citoyen-mai-2026.pdf#page=24",
    "theme": "rights",
    "section": "Droits et devoirs",
    "kind": "livret",
    "facts": []
  },
  {
    "id": "livret-ds-societe",
    "code": "L5",
    "title": "Livret du citoyen — Vivre dans la société française",
    "url": "assets/livret-du-citoyen-mai-2026.pdf#page=61",
    "theme": "society",
    "section": "Vivre dans la société française",
    "kind": "livret",
    "facts": []
  },
  {
    "id": "livret-ds-ddhc",
    "code": "L78",
    "title": "Livret du citoyen — Déclaration des droits de l’homme et du citoyen",
    "url": "assets/livret-du-citoyen-mai-2026.pdf#page=78",
    "theme": "rights",
    "section": "Annexes",
    "kind": "livret",
    "facts": []
  },
  {
    "id": "livret-ds-charte-citoyen",
    "code": "L79",
    "title": "Livret du citoyen — Charte des droits et devoirs du citoyen français",
    "url": "assets/livret-du-citoyen-mai-2026.pdf#page=79",
    "theme": "rights",
    "section": "Annexes",
    "kind": "livret",
    "facts": []
  }
];
  const byCode = Object.fromEntries(sources.map(source => [source.code, source]));
  const questions = [];
  let factSequence = 0;
  function reference(code, id, title, url, theme, section = "Références de vérification") {
    const source = { id, code, title, url, theme, section, kind: "reference", facts: [] };
    sources.push(source);
    byCode[code] = source;
  }
  function q(concept, codes, label, prompt, correct, distractors, explanation, hook, type = "scenario", advanced = false) {
    const id = "ADS" + String(questions.length + 1).padStart(3, "0");
    const coverage = [];
    const sourceIds = codes.map(code => {
      const source = byCode[code];
      if (!source) throw new Error("Source d'approfondissement inconnue : " + code);
      const factId = "ADS-F" + String(++factSequence).padStart(4, "0");
      source.facts.push({ id: factId, label, questionIds: [id] });
      coverage.push(factId);
      return source.id;
    });
    const theme = ["fondamentaux", "libertes", "dignite", "corps", "couple", "textes", "justice", "infractions", "devoirs", "violences", "aider", "environnement"].includes(concept) ? "rights" : "society";
    const question = {
      id, theme, concept: "fiche-ds-" + concept, type, official: false,
      prompt, correct, wrong: distractors.map(pair => pair[0]),
      explanation, hook, wrongReasons: Object.fromEntries(distractors),
      sourceIds, coverage
    };
    if (advanced) question.level = "approfondissement";
    questions.push(question);
  }

  // DROITS
  reference("GAV", "ads-garde-a-vue", "Service Public — Garde à vue", "https://www.service-public.gouv.fr/particuliers/vosdroits/F14837", "rights");
  reference("IVG", "ads-ivg", "Service Public — Interruption volontaire de grossesse", "https://www.service-public.gouv.fr/particuliers/vosdroits/F1551", "rights");
  reference("CONTRACEPTION", "ads-contraception", "Service Public — Contraception", "https://www.service-public.gouv.fr/particuliers/vosdroits/F707", "rights");
  reference("MARIAGE", "ads-mariage", "Service Public — Mariage en France", "https://www.service-public.gouv.fr/particuliers/vosdroits/F930", "society");

  q("fondamentaux", ["R01", "R03"], "Les droits sociaux nécessitent aussi une action publique", "Une commune organise l'accès à l'école et l'État finance la protection sociale. Quel aspect des droits fondamentaux cela illustre-t-il ?", "Les pouvoirs publics doivent aussi agir pour permettre l'exercice effectif des droits sociaux", [
    ["Les droits fondamentaux demandent seulement à l'État de ne jamais intervenir", "Certaines libertés protègent contre l'arbitraire, mais l'éducation, la santé ou la protection sociale nécessitent également des institutions et des moyens."],
    ["Les droits sociaux sont uniquement des accords privés entre employeurs et salariés", "Ils concernent aussi les personnes sans emploi et sont garantis par des textes et des politiques publiques, pas seulement par un contrat de travail."],
    ["Un droit devient fondamental seulement lorsqu'il est payé directement par son titulaire", "Son caractère fondamental dépend de sa protection juridique et de son importance, pas du paiement individuel d'un service."]
  ], "Les droits économiques et sociaux supposent souvent une intervention publique pour être réellement accessibles. Ils complètent les libertés qui protègent la personne contre des ingérences injustifiées.", "Droits sociaux : une protection juridique et des moyens pour l'exercer.");
  q("fondamentaux", ["R03", "R10"], "Préserver les ressources pour les générations futures", "Une politique utilise toutes les ressources disponibles sans considérer les habitants de demain. Quelle dimension des droits est négligée ?", "La solidarité avec les générations futures et le développement durable", [
    ["La seule liberté de circuler des habitants actuels", "La question porte sur les ressources transmises aux générations futures, et non principalement sur les déplacements actuels."],
    ["Le droit de propriété, qui autorise toujours un usage sans limite environnementale", "La propriété n'écarte pas les obligations de protection de l'environnement et ne justifie pas automatiquement l'épuisement des ressources."],
    ["L'égalité, qui impose de consommer toutes les ressources immédiatement", "L'égalité n'impose pas une consommation immédiate ; elle est compatible avec la protection des besoins futurs."]
  ], "Les droits dits de troisième génération mettent notamment l'accent sur les enjeux collectifs : environnement, paix, développement et solidarité envers les générations futures.", "Développement durable : les besoins présents, sans sacrifier l'avenir.");
  q("libertes", ["R02", "GAV", "L3"], "Le droit au silence ne dispense pas de donner son identité", "Une personne majeure est en garde à vue. Après avoir décliné son identité, elle ne souhaite pas répondre aux questions sur les faits. Quel droit peut-elle exercer ?", "Le droit de garder le silence", [
    ["Le droit de garder le silence seulement après avoir reconnu les faits", "Reconnaître les faits n'est pas une condition : la personne peut se taire lors des auditions après avoir décliné son identité."],
    ["Le droit de refuser également de décliner son identité", "Le droit au silence sur les faits ne supprime pas l'obligation de décliner son identité."],
    ["Le droit de répondre uniquement si l'enquêteur partage ses convictions", "Le droit au silence ne dépend pas des convictions de l'enquêteur ; il est une garantie de la procédure pénale."]
  ], "Le gardé à vue peut faire des déclarations, répondre aux questions ou se taire. Il doit néanmoins décliner son identité. Ce droit fait partie des garanties notifiées pendant la mesure.", "Identité obligatoire ; déclarations sur les faits : droit au silence.");
  q("libertes", ["R02", "GAV"], "Faire prévenir une personne choisie en garde à vue", "Une personne placée en garde à vue souhaite que son frère soit informé. Quelle réponse décrit son droit ?", "Elle peut demander de faire prévenir une personne de son choix, avec les restrictions légales liées à l'enquête", [
    ["Elle peut demander seulement que son employeur soit informé", "Le droit ne se limite pas à l'employeur : un proche ou une autre personne choisie peut aussi être prévenu."],
    ["Elle doit attendre sa condamnation pour faire informer un proche", "Cette garantie s'exerce pendant la garde à vue, avant toute éventuelle condamnation."],
    ["Elle dispose toujours d'un appel sans aucune restriction, même pour détruire des preuves", "La communication ou l'information d'un tiers peut être différée ou limitée dans les cas prévus pour protéger l'enquête et les personnes."]
  ], "Le droit de faire prévenir un employeur, un proche ou une personne choisie est distinct d'une communication libre et illimitée. La procédure prévoit des restrictions justifiées dans certains cas.", "Prévenir un proche est un droit encadré, pas un privilège après jugement.");
  q("libertes", ["R02", "GAV"], "Un examen médical peut être demandé pendant la garde à vue", "En garde à vue, une personne dit que son état de santé nécessite un avis médical. Quelle demande peut-elle faire ?", "Demander à être examinée par un médecin pendant la garde à vue", [
    ["Demander un médecin seulement si elle accepte de répondre à toutes les questions", "L'examen médical n'est pas la contrepartie d'une coopération aux auditions : il constitue un droit."],
    ["Attendre la fin de la garde à vue parce que seuls les détenus condamnés ont ce droit", "La vérification de la compatibilité de l'état de santé avec la mesure intervient justement pendant la garde à vue."],
    ["Demander à son avocat de rédiger lui-même un certificat médical", "L'avocat défend les droits du client ; l'examen et le certificat relèvent d'un médecin."]
  ], "Le gardé à vue peut demander un examen médical. Le médecin évalue notamment si son état permet la poursuite de la mesure dans les conditions prévues.", "Enquête pénale et protection de la santé restent compatibles.");
  q("justice", ["R02", "GAV", "R11"], "L'avocat commis d'office n'est pas réservé aux personnes déjà condamnées", "Une personne en garde à vue ne connaît aucun avocat. Que peut-elle demander ?", "L'assistance d'un avocat commis d'office", [
    ["L'assistance d'un avocat uniquement après le procès", "Le droit à l'avocat peut s'exercer dès le début et pendant la garde à vue, pas uniquement après le jugement."],
    ["Que le policier chargé de l'enquête assure aussi sa défense comme avocat", "L'enquêteur recherche les faits ; la défense juridique du gardé à vue est une fonction distincte exercée par un avocat."],
    ["La garantie que l'avocat commis d'office acquittera automatiquement tous ses frais futurs", "La désignation d'office ne doit pas être confondue avec une garantie universelle de gratuité ; l'aide juridictionnelle obéit à ses conditions."]
  ], "Ne pas avoir d'avocat habituel n'empêche pas de demander une défense : un avocat commis d'office peut être désigné. La désignation et le financement sont deux questions différentes.", "Commis d'office = désigné ; gratuité = règles de prise en charge.");
  q("libertes", ["R02", "GAV"], "Comprendre la procédure dans une langue connue", "Une personne ne comprend pas assez le français pour suivre son audition en garde à vue. Quelle garantie est adaptée ?", "Être assistée par un interprète dans une langue qu'elle comprend", [
    ["Signer d'abord les déclarations puis demander une traduction après le jugement", "Comprendre ses droits et l'audition doit être possible pendant la procédure, avant de signer des déclarations."],
    ["Être privée d'avocat tant qu'elle n'a pas appris le français", "L'interprétation et l'assistance d'un avocat sont des garanties compatibles ; l'une ne supprime pas l'autre."],
    ["Faire obligatoirement traduire par la personne qui l'accuse", "L'interprétation doit permettre une compréhension fiable ; elle n'est pas une fonction imposée à l'accusateur, qui peut avoir un intérêt opposé."]
  ], "La procédure doit être compréhensible. Une personne ne maîtrisant pas le français peut bénéficier d'un interprète ; la notification des droits doit aussi être faite dans une langue comprise.", "Comprendre ses droits fait partie des droits.");
  q("libertes", ["R02", "R07", "L3"], "Un étranger conserve les libertés attachées à la personne", "Un résident étranger critique paisiblement une décision publique dans le respect de la loi. Peut-on lui refuser toute liberté d'expression parce qu'il n'est pas Français ?", "Non, la liberté d'expression protège aussi les personnes étrangères", [
    ["Oui, seuls les citoyens français peuvent exprimer une opinion", "Les droits attachés à la personne, dont l'expression, ne sont pas réservés à la nationalité française."],
    ["Oui, tant qu'il n'a pas un droit de vote aux élections présidentielles", "Le droit de vote national et la liberté d'expression sont des droits distincts ; l'absence du premier ne supprime pas la seconde."],
    ["Non, mais sa qualité d'étranger lui permet aussi de diffamer sans limite", "La protection de l'expression n'exonère personne des limites légales, notamment contre la diffamation et les appels à la haine."]
  ], "Il faut distinguer droits de la personne et droits politiques liés à la citoyenneté. Un étranger dispose de libertés fondamentales, tout en restant soumis à leurs limites légales.", "Pas de vote national ne signifie pas pas de liberté d'opinion.");
  q("dignite", ["R04", "O10", "L3"], "Retenir les papiers d'un travailleur pour l'exploiter porte atteinte à sa dignité", "Un recruteur confisque les papiers d'une personne, l'empêche de partir et lui impose du travail sous menace. Quelle analyse est appropriée ?", "Il s'agit d'une situation d'exploitation pouvant relever du travail forcé et de la traite", [
    ["Il s'agit seulement d'une clause habituelle pour fidéliser les salariés", "Une clause de fidélisation ne permet pas de confisquer les papiers et d'imposer du travail sous menace."],
    ["Le consentement initial à accepter l'emploi suffit à rendre toutes les contraintes légales", "Accepter un emploi n'autorise pas ensuite l'enfermement, les menaces ou l'exploitation de la personne."],
    ["La dignité est protégée seulement si la personne a déjà un diplôme reconnu", "La dignité appartient à toute personne, indépendamment du diplôme ou du niveau de qualification."]
  ], "La traite et le travail forcé utilisent la contrainte ou la vulnérabilité pour exploiter des personnes. La dignité et la liberté du travailleur ne peuvent pas être échangées contre un emploi.", "Un contrat ne transforme pas une personne en propriété.");
  q("dignite", ["R04", "H12"], "La dignité protège aussi l'intégrité psychique", "Un service humilie régulièrement une personne malade en disant que seules les blessures physiques comptent. Quel principe est méconnu ?", "La dignité et l'intégrité psychique sont également protégées", [
    ["La dignité ne concerne que l'apparence physique et l'hygiène", "La dignité englobe le respect dû à la personne, pas uniquement sa présentation extérieure."],
    ["La maladie rend la personne moins titulaire de droits que les autres", "La protection de la dignité vaut aussi pour les personnes malades ou dépendantes."],
    ["L'absence de lésion visible suffit à exclure toute atteinte à la personne", "Les atteintes psychologiques, l'humiliation ou les traitements dégradants peuvent exister sans lésion visible."]
  ], "Le respect de la personne comprend sa dignité, son intégrité physique et psychique. Les personnes soignées doivent être traitées avec égards et leur intimité préservée.", "Une atteinte n'a pas besoin d'être visible pour être grave.");
  q("corps", ["R05", "CONTRACEPTION"], "Un médecin ou une sage-femme peut prescrire une contraception", "Une jeune femme souhaite choisir une contraception adaptée. Quel interlocuteur peut l'informer et la prescrire dans son champ de compétence ?", "Un médecin ou une sage-femme, notamment dans un centre de santé sexuelle", [
    ["Uniquement un chirurgien à l'hôpital, même pour une pilule", "La prescription contraceptive ne nécessite pas toujours un chirurgien ni une hospitalisation ; médecins et sages-femmes sont des interlocuteurs prévus."],
    ["Uniquement son partenaire, qui choisit le moyen à sa place", "Le choix de contraception appartient à la personne, avec l'information du professionnel, et non à un partenaire qui imposerait sa décision."],
    ["Tout vendeur de produits de bien-être, sans compétence médicale", "La vente de produits de bien-être ne confère pas la compétence médicale pour prescrire une contraception."]
  ], "Médecins et sages-femmes peuvent informer et prescrire les contraceptifs autorisés. Le moyen choisi doit correspondre à la situation de la personne et à ses préférences éclairées.", "Contraception : choix personnel, information professionnelle.");
  q("corps", ["R05", "CONTRACEPTION"], "Moins de 26 ans : les contraceptifs remboursables, pas tous les produits", "Une assurée de 23 ans lit que sa contraception peut être prise en charge. Que doit-elle vérifier avant de conclure que tout produit est gratuit ?", "Le dispositif choisi et son caractère remboursable ; certains ne sont pas pris en charge", [
    ["Son âge suffit à rendre tous les patchs et anneaux gratuits", "Certains dispositifs, notamment le patch ou l'anneau vaginal, ne sont pas remboursés par l'Assurance maladie ; l'âge seul ne suffit pas."],
    ["Aucune contraception n'est remboursée avant 26 ans", "Les dispositifs remboursables prévus et certains actes associés bénéficient d'une prise en charge pour les moins de 26 ans."],
    ["La prise en charge lui interdit de choisir entre plusieurs dispositifs adaptés", "La prise en charge financière ne supprime pas le choix éclairé entre les moyens adaptés à sa situation."]
  ], "Pour les moins de 26 ans, des contraceptifs remboursables et certains frais associés sont pris en charge sans avance. Tous les produits contraceptifs ne sont toutefois pas remboursables.", "Moins de 26 ans ne veut pas dire tous les produits sans condition.");
  q("corps", ["R05", "CONTRACEPTION"], "Les préservatifs pris en charge sans ordonnance ne sont pas réservés aux garçons", "Une personne de 20 ans demande en pharmacie des préservatifs d'une marque prévue par l'Assurance maladie. Quelle règle est correcte ?", "La prise en charge sans prescription concerne les moins de 26 ans, femmes et hommes", [
    ["Une ordonnance est toujours obligatoire, même pour un jeune de 20 ans", "Pour les préservatifs et les conditions prévus, la délivrance aux moins de 26 ans peut être prise en charge sans prescription."],
    ["Seuls les garçons de moins de 18 ans peuvent en bénéficier", "Le dispositif ne se limite ni aux garçons ni aux seuls mineurs ; il concerne les moins de 26 ans dans les conditions prévues."],
    ["Toutes les marques vendues dans tous les magasins sont automatiquement remboursées", "La prise en charge porte sur les produits prévus et les circuits concernés, pas sur toute marque ou tout lieu de vente."]
  ], "Les préservatifs prévus par le dispositif sont pris en charge sans prescription pour les moins de 26 ans, sans réservation aux garçons. Les marques et modalités de délivrance sont encadrées.", "Une aide ciblée : âge, produits prévus et modalités, pas le sexe.");
  q("corps", ["R05", "IVG"], "Premier interlocuteur d'une demande d'IVG", "Une femme souhaite interrompre une grossesse et ne sait pas où commencer. Quelle démarche est adaptée ?", "Prendre rendez-vous avec un médecin ou une sage-femme, ou un centre de santé sexuelle", [
    ["Demander au maire une autorisation de recourir à l'IVG", "La mairie gère notamment l'état civil ; elle n'autorise pas les décisions médicales d'IVG."],
    ["Attendre l'accord du partenaire avant de consulter", "Le recours à l'IVG ne dépend pas du consentement du partenaire ; attendre peut aussi compromettre les délais légaux."],
    ["Se rendre uniquement chez un notaire pour recueillir un consentement médical", "Le notaire n'est pas le professionnel du parcours d'IVG ; l'information et les actes sont assurés par les professionnels de santé compétents."]
  ], "La demande commence auprès d'un médecin ou d'une sage-femme, notamment en établissement, en cabinet ou en centre de santé sexuelle. La personne reçoit une information sur les méthodes et les délais.", "Une demande d'IVG commence par un interlocuteur de santé.");
  q("corps", ["R05", "IVG"], "Une IVG inclut la prise en charge des actes associés", "Une assurée doit réaliser une échographie et une prise de sang dans son parcours d'IVG. Que prévoit la prise en charge ?", "L'IVG et les actes associés sont pris en charge à 100 %, sans avance de frais", [
    ["Seul l'acte final est couvert ; les examens associés restent toujours intégralement payants", "La prise en charge inclut aussi les actes associés prévus, comme les consultations, échographies et prises de sang."],
    ["La prise en charge dépend de l'accord financier du partenaire", "Le partenaire n'est pas l'autorité qui décide de la couverture de l'IVG par l'Assurance maladie."],
    ["L'IVG n'est couverte que si la femme est déjà mère", "Avoir déjà un enfant n'est pas une condition de prise en charge de l'IVG pour une assurée."]
  ], "Pour les assurées sociales, majeures ou mineures, l'IVG et tous les actes associés sont pris en charge à 100 %, sans avance de frais et sans dépassement d'honoraires possible dans ce dispositif.", "IVG : intervention et parcours associé sont pris en charge.");
  q("corps", ["R05", "IVG"], "Confidentialité d'une IVG demandée par une mineure", "Une mineure veut garder sa démarche d'IVG secrète vis-à-vis de ses parents. Quelle condition accompagne ce droit ?", "Elle doit être accompagnée par une personne majeure de son choix", [
    ["Elle doit obligatoirement obtenir la signature de ses deux parents", "La loi permet une IVG à sa seule demande lorsqu'elle souhaite garder le secret, avec l'accompagnement prévu."],
    ["Elle doit choisir obligatoirement le père de la grossesse comme accompagnant", "L'accompagnant majeur est choisi par la mineure ; il n'est pas imposé par sa relation avec l'auteur de la grossesse."],
    ["Elle peut se passer de toute information et de tout accompagnement parce que la démarche est secrète", "La confidentialité ne supprime ni l'information, ni l'entretien psycho-social obligatoire pour la mineure, ni l'accompagnement majeur prévu."]
  ], "Le consentement parental n'est pas imposé si la mineure souhaite garder le secret. Elle bénéficie d'un parcours adapté, avec une personne majeure choisie et un entretien psycho-social obligatoire.", "Secret parental ne signifie pas parcours sans accompagnement.");
  q("corps", ["R05", "IVG"], "Délais différents selon la méthode d'IVG", "Pourquoi est-il important de consulter rapidement lorsqu'on envisage une IVG ?", "Les délais légaux et les méthodes disponibles dépendent du terme de la grossesse", [
    ["Les méthodes médicamenteuse et instrumentale ont exactement le même délai", "L'IVG médicamenteuse et l'IVG instrumentale n'ont pas la même limite de terme."],
    ["Le délai légal commence au premier rendez-vous, quelle que soit la grossesse", "Le terme se calcule à partir de la grossesse ou des dernières règles, pas à partir de la date de prise de rendez-vous."],
    ["L'inscription dans la Constitution a supprimé toute limite légale de terme", "La Constitution garantit la liberté de recourir à l'IVG dans les conditions déterminées par la loi ; elle n'efface pas les délais médicaux et légaux."]
  ], "La méthode instrumentale est possible jusqu'à la fin de la 14e semaine de grossesse, soit 16 semaines d'aménorrhée ; la méthode médicamenteuse jusqu'à la fin de la 7e semaine de grossesse, soit 9 semaines d'aménorrhée. L'information médicale évite de confondre ces décomptes.", "Semaines de grossesse et semaines depuis les dernières règles : deux décomptes.", "scenario", true);
  q("corps", ["R05", "IVG"], "Information et consentement, sans délai de réflexion imposé", "Une majeure informée ne souhaite pas d'entretien psycho-social et consent à une IVG. Faut-il toujours lui imposer un délai de réflexion de plusieurs jours ?", "Non, aucun délai de réflexion minimal n'est imposé ; information et consentement restent nécessaires", [
    ["Oui, un délai de sept jours s'impose encore à toutes les femmes", "Ce délai systématique a été supprimé ; il ne faut pas appliquer une ancienne règle."],
    ["Non, donc un professionnel peut intervenir sans son consentement", "L'absence de délai de réflexion n'autorise pas un acte sans consentement libre et éclairé."],
    ["Oui, jusqu'à ce que le partenaire confirme son accord", "Le consentement du partenaire n'est pas une étape obligatoire du parcours d'IVG."]
  ], "Il n'existe plus de délai de réflexion imposé. Pour une majeure ne demandant pas d'entretien psycho-social, le temps d'information et le recueil du consentement peuvent être réalisés au cours de la même consultation.", "Pas de délai imposé ne signifie pas pas de consentement.", "scenario", true);
  q("corps", ["R05", "IVG"], "Un professionnel ne pratiquant pas l'IVG doit orienter sans attendre", "Une sage-femme consultée ne pratique pas les IVG. Que doit-elle faire ?", "En informer immédiatement la patiente et lui communiquer les coordonnées de professionnels qui les réalisent", [
    ["Laisser la patiente attendre sans lui donner d'autre interlocuteur", "Une absence d'orientation peut empêcher l'accès dans les délais ; l'information et l'orientation immédiates sont prévues."],
    ["Décider à sa place qu'elle doit poursuivre sa grossesse", "Le professionnel ne remplace pas la décision de la femme par la sienne."],
    ["Exiger qu'elle renonce à la confidentialité avant de lui donner un contact", "La transmission d'une orientation n'est pas subordonnée à une renonciation à la confidentialité."]
  ], "Lorsqu'un médecin ou une sage-femme ne pratique pas l'IVG, il doit le dire immédiatement et orienter vers les professionnels qui la réalisent.", "Ne pas pratiquer ne permet pas de bloquer l'accès.");
  q("corps", ["R05", "IVG"], "Le contrôle après une IVG vérifie le résultat et les complications", "Après une IVG, à quoi sert la visite de contrôle prévue entre le 14e et le 21e jour ?", "À vérifier l'interruption de la grossesse et l'absence de complication", [
    ["À demander rétroactivement l'autorisation du partenaire", "Le partenaire n'autorise pas rétrospectivement l'IVG ; la visite a une finalité médicale."],
    ["À remplacer le consentement qui aurait dû être recueilli avant l'acte", "Le consentement doit être recueilli avant ; le contrôle ne régularise pas un acte effectué sans consentement."],
    ["À imposer automatiquement une seule méthode contraceptive à toutes les patientes", "Une contraception adaptée peut être discutée, mais le professionnel n'impose pas un modèle unique indépendant de la situation et du choix."]
  ], "La visite de contrôle vérifie que la grossesse est interrompue et qu'il n'y a pas de complication. Elle permet aussi d'aborder une contraception adaptée si nécessaire.", "Le suivi après l'acte fait partie du parcours de santé.", "scenario", true);
  q("couple", ["R06", "R05", "L79"], "Un conjoint n'autorise pas les décisions corporelles de l'autre", "Une personne mariée souhaite consulter pour une contraception. Son conjoint prétend qu'il doit donner une autorisation. Que faut-il retenir ?", "Le mariage ne supprime pas sa liberté de décider pour son corps", [
    ["L'autorisation du conjoint remplace celle du professionnel de santé", "Le conjoint n'est ni l'autorité médicale ni un représentant qui décide pour une personne capable."],
    ["Les décisions corporelles sont libres uniquement en concubinage", "Les libertés de la personne demeurent aussi dans le mariage et dans le PACS."],
    ["La liberté corporelle cesse dès qu'un couple a un enfant", "La parentalité crée des obligations envers l'enfant, mais ne retire pas l'autonomie corporelle de chaque adulte."]
  ], "La vie en couple n'efface pas les droits individuels. Le dialogue peut exister, mais il ne donne pas à l'un le pouvoir d'imposer contraception, grossesse ou acte médical à l'autre.", "Être en couple n'est pas renoncer à son autonomie.");
  q("couple", ["R06"], "Ne pas vouloir d'enfant n'est pas interdit", "Deux partenaires ne sont pas d'accord sur le souhait d'avoir un enfant. Quelle affirmation respecte les libertés de chacun ?", "Chacun conserve la liberté de ne pas vouloir devenir parent", [
    ["Le mariage oblige légalement chaque époux à avoir un enfant", "Le mariage n'institue pas une obligation de procréer."],
    ["La décision appartient automatiquement au partenaire qui gagne le plus", "Les revenus ne donnent pas un pouvoir de décision sur le corps ou les choix de parentalité de l'autre."],
    ["Les parents des partenaires peuvent imposer la décision au couple", "La volonté familiale ne remplace pas la liberté et le consentement des personnes concernées."]
  ], "Les libertés au sein du couple incluent le choix d'avoir ou de ne pas avoir d'enfant. Un désaccord ne justifie ni contrainte ni violence.", "Projet parental : un choix, pas une dette envers le couple.");
  q("couple", ["R06"], "La séparation n'exige pas toujours une faute", "Une personne souhaite mettre fin à son mariage sans accuser son conjoint d'une faute. Est-ce nécessairement impossible ?", "Non, plusieurs formes de divorce existent, dont le consentement mutuel lorsque ses conditions sont réunies", [
    ["Oui, seul un crime commis par le conjoint permet de divorcer", "Le divorce ne se limite ni aux crimes ni à la faute ; la loi prévoit plusieurs voies."],
    ["Non, une simple rupture de concubinage dissout automatiquement tout mariage", "Le concubinage et le mariage sont deux statuts différents ; un mariage doit être dissous selon les règles du divorce."],
    ["Oui, sauf si la famille du conjoint signe une permission", "Le consentement de la famille n'est pas une condition générale du droit de divorcer."]
  ], "Il existe plusieurs types de divorce. Le consentement mutuel suit sa procédure, qui nécessite notamment des avocats ; l'absence de faute n'empêche pas toute séparation légale.", "Divorcer ne veut pas forcément dire prouver une faute.");
  q("couple", ["R06", "L79"], "Chaque époux peut exercer une profession", "Un époux affirme que l'autre doit cesser son activité parce que seul le chef de famille choisit les professions. Quelle règle s'applique ?", "Chaque époux peut librement exercer une profession", [
    ["La liberté professionnelle appartient uniquement à celui qui paie le loyer", "La contribution au logement ne crée pas une autorité supérieure sur la profession du conjoint."],
    ["Un seul époux peut travailler si le couple a des enfants", "La présence d'enfants ne supprime pas la liberté professionnelle de l'un des époux."],
    ["La profession de l'épouse doit obligatoirement être celle de son mari", "L'égalité dans le mariage n'impose pas une même profession ni une dépendance professionnelle."]
  ], "La Charte des droits et devoirs du citoyen rappelle que chaque époux peut librement exercer une profession, percevoir ses gains et salaires et en disposer après avoir contribué aux charges du mariage.", "Mariage : droits égaux et obligations partagées.");
  q("couple", ["R06", "L79"], "Salaires personnels et charges communes sont deux dimensions", "Une épouse perçoit un salaire. Quelle affirmation respecte à la fois sa liberté et les obligations du mariage ?", "Elle peut disposer de son salaire après avoir contribué aux charges du mariage", [
    ["Son salaire devient automatiquement la propriété personnelle de son conjoint", "Le mariage n'autorise pas un conjoint à s'approprier automatiquement les gains de l'autre."],
    ["La liberté de disposer de son salaire supprime toute contribution aux charges du mariage", "La liberté professionnelle et salariale s'accompagne de l'obligation de contribuer aux charges communes selon les règles applicables."],
    ["Le salaire ne peut être utilisé qu'avec une autorisation quotidienne du maire", "Le maire n'administre pas les dépenses courantes de chaque époux."]
  ], "Chaque époux peut percevoir et utiliser ses gains et salaires, tout en contribuant aux charges du mariage. Il ne faut confondre ni liberté personnelle et absence d'obligations, ni mariage et confiscation des revenus.", "Autonomie personnelle et contribution commune vont ensemble.");
  q("textes", ["R08", "L78"], "Article 1 : les distinctions sociales doivent servir l'utilité commune", "La DDHC accepte-t-elle un privilège juridique accordé uniquement parce qu'une personne appartient à une famille prestigieuse ?", "Non, les distinctions sociales ne peuvent être fondées que sur l'utilité commune", [
    ["Oui, la naissance est le fondement principal de l'égalité des droits", "L'article 1 affirme au contraire que les êtres humains naissent et demeurent libres et égaux en droits."],
    ["Oui, si la famille transmet ce privilège depuis plusieurs générations", "L'ancienneté d'un privilège de naissance ne le rend pas conforme à l'égalité en droits."],
    ["Non, parce que la DDHC interdit toute différence de fonction ou de responsabilité", "La DDHC n'interdit pas toute distinction sociale : elle exige qu'elle soit fondée sur l'utilité commune."]
  ], "L'article 1 combine égalité en droits et possibilité de distinctions justifiées par l'utilité commune. Il rejette les privilèges arbitraires fondés sur la naissance.", "Distinction utile à tous, pas privilège héréditaire.");
  q("textes", ["R08", "L78"], "Article 5 : ne pas contraindre arbitrairement sans base légale", "Une autorité prétend obliger une personne à accomplir une action que la loi n'ordonne pas, sans autre base légale. Quel principe de la DDHC est en cause ?", "Nul ne peut être contraint de faire ce que la loi n'ordonne pas", [
    ["Une demande d'une autorité crée toujours à elle seule une nouvelle loi", "Un ordre ne remplace pas la base légale nécessaire et ne permet pas toute contrainte arbitraire."],
    ["Toute obligation est interdite, même lorsqu'elle est prévue par la loi", "L'article 5 ne supprime pas les obligations légales ; il protège contre celles imposées sans fondement."],
    ["La règle protège seulement les propriétaires immobiliers", "Cette garantie ne dépend pas de la possession d'un logement ou d'un bien."]
  ], "L'article 5 limite l'interdiction aux actions nuisibles à la société et protège contre la contrainte sans base légale. Un État de droit ne repose pas sur des ordres arbitraires.", "Une obligation doit avoir un fondement juridique.");
  q("textes", ["R08", "L78"], "Article 7 : un ordre arbitraire n'immunise pas son exécutant", "Un agent exécute sciemment une arrestation arbitraire et invoque seulement l'ordre reçu. Que rappelle l'article 7 de la DDHC ?", "Ceux qui sollicitent, donnent ou exécutent des ordres arbitraires doivent pouvoir être punis", [
    ["L'exécutant est toujours protégé dès qu'un supérieur a donné l'ordre", "L'article 7 vise explicitement ceux qui exécutent les ordres arbitraires, pas seulement ceux qui les donnent."],
    ["Seule la personne arrêtée peut être punie pour avoir contesté l'ordre", "La protection contre l'arbitraire porte précisément sur les ordres sans cas et procédures légaux."],
    ["Toute arrestation est arbitraire, même lorsqu'elle suit la loi", "L'article 7 distingue les arrestations prévues par la loi des ordres arbitraires ; il n'interdit pas toute mesure légale."]
  ], "L'article 7 protège contre les arrestations ou détentions hors des cas et formes prévus par la loi. Il engage aussi la responsabilité des personnes qui donnent ou exécutent des ordres arbitraires.", "L'ordre reçu n'efface pas automatiquement l'arbitraire.", "scenario", true);
  q("textes", ["R08", "L78"], "Article 8 : une peine plus sévère nouvelle ne s'applique pas rétroactivement", "Une loi pénale augmente une peine après des faits déjà commis. Peut-on appliquer cette aggravation à ces faits antérieurs ?", "Non, une peine plus sévère ne doit pas être appliquée rétroactivement", [
    ["Oui, parce que le procès a lieu après la publication de la nouvelle loi", "La date du procès ne suffit pas à rendre rétroactive une aggravation de la peine pour des faits antérieurs."],
    ["Oui, dès que l'infraction choque beaucoup l'opinion", "L'émotion publique ne supprime pas le principe de légalité et de non-rétroactivité des peines plus sévères."],
    ["Non, donc aucune loi pénale plus favorable ne peut jamais concerner des faits antérieurs", "La règle n'interdit pas de manière absolue l'application d'une loi pénale plus douce ; il faut distinguer aggravation et atténuation."]
  ], "L'article 8 exige des peines nécessaires et une loi établie et promulguée avant l'infraction. En droit pénal, la non-rétroactivité protège notamment contre l'application d'une sanction plus sévère créée après les faits.", "Ne pas aggraver après coup la règle qui punissait les faits.");
  q("textes", ["R08", "L78", "GAV"], "Article 9 : une arrestation ne justifie pas des rigueurs inutiles", "Une arrestation est légalement nécessaire. Cela autorise-t-il à humilier la personne pour la punir avant son jugement ?", "Non, toute rigueur non nécessaire à sa garde doit être proscrite", [
    ["Oui, parce qu'une personne arrêtée est déjà juridiquement coupable", "L'arrestation n'établit pas la culpabilité ; la présomption d'innocence demeure."],
    ["Oui, si l'humiliation ne laisse aucune blessure visible", "La dignité et l'interdiction des rigueurs inutiles protègent aussi contre des atteintes sans blessure physique."],
    ["Non, donc aucun dispositif de sécurité ne peut jamais être utilisé", "Une mesure de sécurité légalement nécessaire peut être utilisée ; c'est la rigueur inutile ou punitive qui est exclue."]
  ], "La nécessité d'une arrestation ne donne pas carte blanche. L'article 9 prohibe les rigueurs non nécessaires à la garde, et la procédure doit respecter la dignité.", "Garder en sécurité n'est pas punir avant jugement.");
  q("textes", ["R08", "L78"], "Article 12 : la force publique ne sert pas un intérêt privé", "Un responsable veut utiliser les policiers pour protéger exclusivement ses affaires personnelles, sans motif légal d'intérêt public. Quel principe est en cause ?", "La force publique est instituée pour l'avantage de tous, non pour l'utilité particulière de ses détenteurs", [
    ["La force publique appartient personnellement aux responsables qui la dirigent", "L'article 12 distingue le service public d'une propriété privée de ceux à qui il est confié."],
    ["Le financement par l'impôt autorise chacun à utiliser la police pour ses intérêts sans contrôle", "Contribuer à l'impôt ne donne pas un droit de détourner un service public au profit d'intérêts privés."],
    ["La force publique doit uniquement surveiller les citoyens qui ont le droit de vote", "Sa mission de garantie des droits n'est pas limitée aux électeurs ; elle protège les personnes dans son champ légal."]
  ], "L'article 12 fonde la force publique sur la garantie des droits et l'avantage de tous. Son utilisation doit rester conforme aux missions et à l'intérêt public.", "Pouvoir public confié, pas pouvoir privé possédé.");
  q("textes", ["R08", "L78", "A06"], "Article 13 : égalité fiscale ne signifie pas somme identique pour tous", "Deux personnes ont des capacités financières très différentes. La DDHC impose-t-elle qu'elles paient exactement la même somme d'impôt ?", "Non, la contribution commune doit être répartie en raison de leurs facultés", [
    ["Oui, sinon le principe d'égalité est nécessairement violé", "L'égalité devant les charges publiques peut tenir compte des facultés contributives ; elle ne signifie pas un montant identique."],
    ["Non, mais l'article 13 impose que toutes les taxes aient exactement le même barème progressif", "Le principe de contribution selon les facultés ne rend pas tous les impôts techniquement identiques."],
    ["Oui, et le montant doit être fixé librement par chaque contribuable", "La contribution publique relève de règles collectives établies par la loi, pas d'une fixation individuelle à volonté."]
  ], "L'article 13 prévoit une contribution commune pour les dépenses publiques, répartie selon les facultés des citoyens. L'impôt sur le revenu applique notamment un barème progressif, mais tous les prélèvements ne suivent pas le même mécanisme.", "Égalité fiscale : tenir compte des capacités, pas copier une somme.");
  q("textes", ["R08", "L78", "A06"], "Article 14 : contrôler l'impôt ne permet pas de refuser seul de le payer", "Un contribuable conteste l'utilisation du budget public. L'article 14 l'autorise-t-il à ne payer aucun impôt légalement dû ?", "Non, le droit de consentir et de contrôler l'impôt ne supprime pas les obligations fiscales légales", [
    ["Oui, chaque citoyen peut annuler individuellement l'impôt qui lui déplaît", "Le consentement à l'impôt est organisé collectivement, notamment par les représentants ; il ne crée pas un veto fiscal individuel."],
    ["Non, et les citoyens n'ont aucun droit de connaître l'utilisation des recettes", "L'article 14 reconnaît justement le droit de constater la nécessité de la contribution et d'en suivre l'emploi."],
    ["Oui, mais uniquement s'il publie son désaccord sur internet", "Publier une opinion ne dispense pas de respecter l'obligation fiscale."]
  ], "Les citoyens peuvent, directement ou par leurs représentants, consentir à la contribution publique et en suivre l'emploi. Ils peuvent débattre ou contester par les voies prévues, sans supprimer unilatéralement l'impôt dû.", "Contrôle démocratique du budget, pas impôt à la carte.");
  q("textes", ["R08", "L78"], "Article 17 : expropriation et indemnité juste et préalable", "Un terrain doit être exproprié pour un équipement public. Quelle garantie la DDHC impose-t-elle à la privation de propriété ?", "Une nécessité publique légalement constatée et une juste et préalable indemnité", [
    ["La seule préférence personnelle du maire, sans indemnité", "Une préférence personnelle ne constitue pas la nécessité publique légalement constatée exigée et ne supprime pas l'indemnisation."],
    ["Une indemnité éventuelle seulement si le propriétaire accepte le projet", "L'indemnité juste et préalable est une garantie de la privation de propriété, pas une récompense pour l'approbation du projet."],
    ["Aucune privation n'est possible, même avec nécessité publique et indemnisation", "L'article 17 protège fortement la propriété mais prévoit précisément une exception encadrée."]
  ], "La propriété est qualifiée d'inviolable et sacrée. Sa privation ne peut intervenir que lorsque la nécessité publique, légalement constatée, l'exige évidemment, sous la condition d'une juste et préalable indemnité.", "Projet public ne veut pas dire confiscation sans garanties.");
  q("environnement", ["R10"], "Prévention : agir sur un risque connu", "Une entreprise sait qu'un rejet pollue une rivière et installe un dispositif pour éviter ce dommage. Quel principe est surtout appliqué ?", "La prévention des atteintes à l'environnement", [
    ["La précaution, parce que le dommage est déjà certain dans son mécanisme", "La précaution vise notamment les risques graves et irréversibles encore incertains ; ici le risque est connu et il faut le prévenir."],
    ["La réparation, parce que toute action avant dommage intervient après dommage", "La réparation répond aux dommages causés ; l'installation destinée à éviter le rejet intervient avant et relève de la prévention."],
    ["La participation du public, parce qu'un filtre remplace une consultation", "La participation concerne l'information et les décisions publiques environnementales, pas le seul dispositif technique de prévention."]
  ], "La prévention consiste à éviter ou limiter des atteintes identifiées à l'environnement. Elle se distingue de la précaution face à une incertitude scientifique et de la réparation après dommage.", "Risque connu : prévenir ; dommage causé : réparer.");
  q("environnement", ["R10"], "Précaution : évaluer et prendre des mesures proportionnées", "Les connaissances scientifiques ne permettent pas d'écarter un risque de dommage grave et irréversible à l'environnement. Que prévoit le principe de précaution ?", "Des procédures d'évaluation et des mesures provisoires proportionnées prises par les autorités", [
    ["Attendre obligatoirement que le dommage soit irréversible avant toute mesure", "Le principe permet précisément d'agir malgré l'incertitude pour éviter un dommage grave et irréversible."],
    ["Interdire définitivement toute activité présentant la moindre incertitude", "Les mesures doivent être proportionnées et provisoires ; la précaution n'est pas une interdiction absolue de toute incertitude."],
    ["Écarter toute évaluation puisque la précaution remplace la science", "La Charte prévoit des procédures d'évaluation du risque ; la précaution ne dispense pas de rechercher les connaissances."]
  ], "La Charte encadre la précaution : dommage potentiellement grave et irréversible, incertitude scientifique, évaluation et mesures provisoires proportionnées dans le champ de compétence des autorités.", "Précaution : ni immobilisme, ni interdiction automatique.");
  q("environnement", ["R10"], "Le pollueur contribue à réparer le dommage causé", "Une activité cause un dommage à l'environnement. Quel devoir prévoit la Charte dans les conditions définies par la loi ?", "Contribuer à la réparation des dommages causés à l'environnement", [
    ["Payer ses impôts suffit toujours à effacer le dommage environnemental", "L'impôt ordinaire ne remplace pas les obligations spécifiques liées au dommage causé."],
    ["La réparation revient automatiquement aux riverains qui subissent la pollution", "La Charte impose à celui qui a causé le dommage de contribuer à sa réparation selon la loi, pas de transférer systématiquement la charge aux victimes."],
    ["La réparation supprime tout devoir de prévenir de nouveaux dommages", "Prévenir et réparer sont des obligations complémentaires ; réparer un dommage ne donne pas le droit de recommencer."]
  ], "Le devoir de réparation complète ceux de prévention et de préservation. Il s'exerce dans les conditions définies par la loi et ne constitue pas une permission de polluer.", "Réparer n'achète pas le droit de dégrader.");
  q("environnement", ["R10"], "Information et participation aux décisions publiques environnementales", "Un habitant souhaite connaître les effets environnementaux d'un projet public et participer à la consultation prévue. Quel droit peut-il invoquer ?", "L'accès aux informations environnementales publiques et la participation dans les conditions légales", [
    ["Un droit de veto individuel automatique sur tous les projets", "Participer à une décision ou à une consultation ne signifie pas que chaque participant peut bloquer seul le projet."],
    ["Un droit réservé uniquement aux propriétaires du terrain du projet", "Le droit d'information et de participation n'est pas réduit au droit de propriété sur le terrain concerné."],
    ["L'obligation pour l'administration de divulguer toute donnée personnelle sans protection", "La transparence environnementale s'exerce dans un cadre légal et n'annule pas toute protection des données ou tout secret applicable."]
  ], "L'article 7 de la Charte prévoit, dans les conditions et limites définies par la loi, l'accès aux informations environnementales détenues par les autorités publiques et la participation à l'élaboration de décisions ayant une incidence sur l'environnement.", "Participer : être informé et contribuer, pas disposer d'un veto personnel.");
  q("justice", ["R11"], "Le conciliateur aide à un accord, sans rendre une peine", "Deux voisins souhaitent résoudre un conflit sans procès. Quel est le rôle d'un conciliateur ou d'un médiateur ?", "Aider les parties à rechercher une solution amiable", [
    ["Prononcer immédiatement une peine de prison comme un tribunal", "Le conciliateur ou médiateur ne remplace pas la juridiction pénale et ne prononce pas une peine de prison."],
    ["Défendre exclusivement celui qui le contacte en premier", "La recherche d'une solution amiable concerne les parties ; elle ne consiste pas à devenir automatiquement l'avocat du premier appelant."],
    ["Annuler la loi si les deux voisins préfèrent une autre règle", "Un accord amiable doit rester dans le cadre légal ; les parties ne peuvent pas abolir une règle de droit."]
  ], "Conciliation et médiation favorisent une résolution amiable des litiges. Elles se distinguent de la décision d'un juge et peuvent éviter un procès lorsque les conditions s'y prêtent.", "Médiation : chercher un accord, pas imposer une peine.");
  q("justice", ["R11"], "Accéder à une permanence juridique gratuite", "Une personne ne sait pas quels droits invoquer et n'a pas encore choisi d'avocat. Où peut-elle chercher une première information juridique gratuite ?", "Dans une maison de justice et du droit ou un point-justice proposant des permanences", [
    ["Uniquement auprès du service de facturation de son fournisseur d'énergie", "Ce service traite son contrat d'énergie ; il n'a pas la mission générale d'information juridique d'un point-justice."],
    ["Uniquement au moment du jugement, sans possibilité de conseil auparavant", "Les permanences juridiques servent précisément à orienter et informer avant ou en dehors d'un procès."],
    ["Dans un point-justice qui garantit automatiquement la gratuité de tous les procès futurs", "Une information gratuite ne se confond pas avec une prise en charge universelle des honoraires et frais de procédure."]
  ], "Les maisons de justice et du droit et les points-justice facilitent l'accès au droit avec des informations et permanences gratuites. Une éventuelle aide juridictionnelle se vérifie séparément.", "S'informer gratuitement ne garantit pas tout procès gratuitement.");
  q("justice", ["R11"], "Le Défenseur des droits peut aider face à un service public", "Une personne estime que ses droits sont mal respectés dans ses relations avec un service public. Quel interlocuteur indépendant peut-elle notamment saisir ?", "Le Défenseur des droits ou l'un de ses délégués", [
    ["Uniquement le maire comme juge de toutes les administrations", "Le maire n'est pas une juridiction ni une autorité générale de contrôle de toutes les administrations."],
    ["Le Défenseur des droits, qui remplace automatiquement tout tribunal et prononce toutes les peines", "Il intervient pour défendre les droits, mais n'exerce pas toutes les fonctions d'une juridiction et ne prononce pas toutes les peines."],
    ["Uniquement une entreprise qui vend un accès prioritaire aux droits fondamentaux", "Les missions du Défenseur des droits sont publiques et indépendantes ; les droits ne s'achètent pas auprès d'un vendeur privé."]
  ], "Le Défenseur des droits traite notamment les relations avec les services publics, les discriminations et les droits de l'enfant. Ses délégués proposent un accès local à cette autorité.", "Un recours indépendant pour les droits, sans le confondre avec un tribunal.");
  q("devoirs", ["O01", "R02", "L3"], "Une restriction de liberté demande un cadre légal et une justification", "En période d'épidémie, une autorité limite certains déplacements pour protéger la santé. Quelle exigence demeure ?", "La restriction doit respecter un cadre légal et être justifiée et proportionnée à l'objectif", [
    ["Le contexte d'épidémie supprime toutes les garanties des libertés", "Même une crise ne permet pas des restrictions arbitraires sans cadre ni contrôle juridique."],
    ["La liberté de circuler exclut toute mesure de protection sanitaire", "Une liberté peut être limitée pour protéger la santé ou l'ordre public, à condition de respecter les règles applicables."],
    ["L'autorité peut interdire uniquement les déplacements de ceux qui critiquent sa politique", "Une restriction sanitaire ne doit pas devenir une sanction discriminatoire contre une opinion politique."]
  ], "Les libertés individuelles peuvent être encadrées pour protéger les droits d'autrui, la santé ou l'ordre public. La restriction doit être légalement fondée, nécessaire et proportionnée.", "Une crise n'est ni l'absence de règles, ni l'interdiction de toute protection.");
  q("infractions", ["O02"], "Une contravention n'entraîne pas une peine d'emprisonnement comme peine contraventionnelle", "Une infraction est qualifiée de contravention. Quelle affirmation distingue cette catégorie d'un délit ?", "La contravention n'est pas punie d'une peine d'emprisonnement comme peine de cette catégorie", [
    ["Une contravention est toujours punie de plusieurs années de prison", "Les peines d'emprisonnement relèvent des délits ou des crimes, pas de la peine contraventionnelle."],
    ["Une contravention n'est pas une infraction et ne peut jamais être sanctionnée", "Elle est bien une infraction, généralement sanctionnée notamment par une amende."],
    ["Toutes les contraventions relèvent du conseil de prud'hommes", "Le conseil de prud'hommes traite les litiges individuels du travail de droit privé ; le tribunal de police est la juridiction contraventionnelle."]
  ], "Contravention, délit et crime sont des catégories juridiques distinctes. La contravention peut être sanctionnée, mais sa peine ne consiste pas en un emprisonnement contraventionnel.", "Pas de prison contraventionnelle ne signifie pas pas de sanction.", "study");
  q("infractions", ["O02"], "La préméditation distingue l'assassinat du meurtre", "Une personne tue volontairement une autre après avoir préparé son acte à l'avance. Quelle qualification correspond à cette préméditation ?", "Un assassinat", [
    ["Un homicide involontaire, parce que la préparation retire l'intention", "La préparation révèle au contraire la préméditation d'un acte volontaire, pas son caractère involontaire."],
    ["Une contravention de tapage, parce que seule l'exécution est punie", "Un homicide volontaire prémédité est un crime ; il ne relève pas d'une contravention."],
    ["Un simple conflit civil sans dimension pénale", "La suppression volontaire de la vie d'une personne relève du droit pénal et n'est pas seulement un litige civil."]
  ], "Le meurtre est un homicide volontaire. Lorsqu'il est commis avec préméditation ou guet-apens, il est qualifié d'assassinat.", "Homicide volontaire + préméditation : assassinat.");
  q("infractions", ["O02", "O03"], "Enquêter et juger sont des fonctions différentes", "Après une plainte, la police rassemble des preuves et rédige des procès-verbaux. A-t-elle, pour ce seul motif, prononcé une condamnation définitive ?", "Non, l'enquête et les procès-verbaux ne remplacent pas le jugement compétent", [
    ["Oui, tout procès-verbal équivaut à un jugement définitif", "Le procès-verbal décrit ou constate des éléments de procédure ; il n'est pas par lui-même un jugement de condamnation."],
    ["Oui, parce que le plaignant choisit personnellement la peine", "La victime peut demander justice, mais ne fixe pas elle-même la peine à la place des autorités compétentes."],
    ["Non, donc les procès-verbaux n'ont aucune utilité dans la procédure", "Ils ont une utilité pour documenter l'enquête et les faits ; les distinguer du jugement ne les rend pas inutiles."]
  ], "La police et la gendarmerie constatent et enquêtent dans leur compétence. Les suites sont décidées dans la procédure, et la juridiction compétente juge la responsabilité et la peine.", "Constater un fait n'est pas déjà condamner.");
  q("devoirs", ["O04", "A06"], "Les obligations légales concernent aussi les résidents étrangers", "Un résident étranger dit qu'il n'a pas à respecter les règles de circulation ou les obligations fiscales applicables puisqu'il ne vote pas en France. Que lui répondre ?", "Les droits de vote et les obligations légales sont distincts ; les règles applicables s'imposent aussi à lui", [
    ["L'absence de vote exonère automatiquement de tous les impôts", "L'assujettissement fiscal dépend de la situation et des règles fiscales, pas uniquement du droit de vote."],
    ["Le Code de la route ne concerne que les titulaires d'un passeport français", "Le Code de la route s'applique aux usagers concernés, quelle que soit leur nationalité."],
    ["Il doit respecter seulement les règles qu'il a personnellement approuvées", "L'application de la loi n'est pas subordonnée à l'accord individuel de chaque résident."]
  ], "La résidence et l'activité peuvent créer des obligations légales et fiscales. Les droits politiques ne constituent pas une permission de ne pas respecter la loi.", "Ne pas être électeur ne dispense pas d'être usager responsable.");
  q("violences", ["O06", "R06"], "La confiscation des revenus peut être une violence économique", "Un partenaire confisque la carte bancaire et le salaire de l'autre pour l'empêcher de partir. Quelle analyse convient ?", "Un contrôle pouvant constituer une violence économique, même sans coups", [
    ["Une organisation financière toujours légale parce que le couple est marié", "Le mariage ne rend pas légal un contrôle coercitif privant l'autre de ses ressources pour l'empêcher de partir."],
    ["Une violence uniquement si un certificat prouve une blessure physique", "La violence économique ou psychologique peut exister sans blessure physique."],
    ["Une simple dépense commune librement consentie dans tous les cas", "Le scénario décrit une confiscation destinée à contrôler, pas un budget commun accepté librement."]
  ], "La violence économique peut prendre la forme du contrôle ou de la privation des ressources pour dominer une personne. Elle se distingue d'une organisation budgétaire réellement consentie.", "Budget partagé consenti ou argent confisqué pour contrôler : ce n'est pas pareil.");
  q("violences", ["O06", "O09"], "La vie de couple ne crée pas un consentement sexuel permanent", "Deux personnes sont mariées. L'une refuse un rapport sexuel. Quel principe s'applique ?", "Le mariage ne remplace pas son consentement libre à ce rapport", [
    ["La cérémonie civile vaut consentement à tous les rapports futurs", "Le consentement doit concerner la situation présente ; le mariage n'est pas un accord permanent aux actes sexuels."],
    ["Un refus est valable uniquement s'il existe un témoin extérieur", "Le consentement ne dépend pas de la présence d'un témoin ; un refus doit être respecté."],
    ["Le conjoint qui refuse doit d'abord obtenir une autorisation du juge", "Aucune autorisation judiciaire n'est nécessaire pour refuser un acte sexuel."]
  ], "Les violences sexuelles sont interdites dans le couple aussi. Le consentement doit être libre et peut être refusé ou retiré ; un lien conjugal ne le présume pas pour tout acte.", "Le statut du couple ne remplace jamais le consentement.");
  q("violences", ["O07", "P02"], "Priver un enfant de soins n'est pas une méthode éducative", "Un adulte prive un enfant d'un traitement nécessaire pour le punir. Quelle règle est méconnue ?", "Le devoir de santé et de protection de l'enfant, sans maltraitance", [
    ["Le parent peut suspendre librement tout soin pour obtenir l'obéissance", "L'autorité parentale doit protéger la santé ; elle n'autorise pas la privation punitive de soins nécessaires."],
    ["Seuls les enseignants ont un devoir de protection de la santé des enfants", "Les parents ont aussi un devoir d'assurer la santé et la sécurité de leur enfant."],
    ["L'absence de coups exclut toute maltraitance", "La négligence ou la privation grave de soins peut constituer une maltraitance sans coups."]
  ], "L'autorité parentale est exercée dans l'intérêt de l'enfant. Les privations mettant sa santé en danger et les violences physiques ou psychologiques ne sont pas des modes d'éducation autorisés.", "Éduquer ne permet pas de retirer les besoins essentiels.");
  q("violences", ["O07", "P02"], "L'humiliation et l'exclusion répétées peuvent relever du harcèlement", "Un enfant est régulièrement humilié et exclu par un groupe dans le cadre de sa vie scolaire. Que faut-il faire ?", "Prendre la situation au sérieux et demander l'aide de l'établissement et des interlocuteurs adaptés", [
    ["Attendre une blessure physique avant d'en parler à quiconque", "Le harcèlement peut être psychologique et avoir des conséquences graves sans blessure visible."],
    ["Considérer que les faits n'existent pas s'ils ont lieu hors de la salle de classe", "Les violences liées à la vie scolaire peuvent se produire dans les couloirs, les transports ou en ligne aussi."],
    ["Publier immédiatement l'adresse et les données privées des autres enfants", "Exposer les données des enfants peut aggraver les risques et n'est pas une voie de protection appropriée."]
  ], "Les violences et le harcèlement doivent être repérés et signalés. Un adulte de confiance, l'établissement et le 3018 peuvent aider ; en danger immédiat, les secours compétents doivent être alertés.", "Prendre au sérieux, protéger, signaler ; ne pas exposer les enfants.");
  q("violences", ["O08", "R04", "P02"], "Une mutilation sexuelle ne devient pas licite par tradition", "Une famille justifie une mutilation sexuelle d'une enfant au nom d'une tradition. Quelle réponse respecte le droit ?", "La tradition ne justifie pas une atteinte interdite à son intégrité et à sa dignité", [
    ["La décision de tous les adultes de la famille suffit à l'autoriser", "Un accord familial ne rend pas licite une mutilation sexuelle interdite."],
    ["L'absence de plainte de l'enfant signifie que la pratique est légale", "La protection de l'enfant ne dépend pas de sa capacité à porter plainte ; une pratique interdite reste interdite."],
    ["Seuls les effets immédiats comptent, jamais les conséquences psychologiques", "Les mutilations peuvent entraîner des conséquences physiques et psychologiques durables, toutes pertinentes pour la protection."]
  ], "Les mutilations sexuelles sont interdites et constituent des violences graves. La dignité, l'intégrité et l'intérêt de l'enfant priment sur une justification culturelle ou familiale.", "La protection de l'enfant ne comporte pas d'exception de tradition.");
  q("violences", ["O09"], "Consentir à un geste n'autorise pas automatiquement un autre", "Une personne accepte un baiser mais refuse ensuite un autre acte sexuel. Que doit faire son partenaire ?", "Respecter ce refus : le consentement à un geste ne vaut pas pour tous les autres", [
    ["Considérer que le baiser autorise automatiquement tous les actes suivants", "Le consentement est spécifique ; un accord à un geste ne s'étend pas automatiquement aux autres."],
    ["Continuer tant qu'aucun document écrit ne retire l'accord", "Un refus ou un retrait de consentement ne nécessite pas un formulaire écrit pour être respecté."],
    ["Exiger que la personne termine ce qu'elle a commencé", "Le consentement peut être retiré ; une interaction commencée ne crée pas une obligation de la poursuivre."]
  ], "Le consentement doit être libre, spécifique et réversible. Accepter une interaction ne signifie pas accepter tous les actes, et il faut respecter un changement de volonté.", "Un oui précis n'est pas un oui illimité.");
  q("violences", ["O09"], "L'absence de résistance ne prouve pas le consentement", "Une personne se fige et ne répond pas lors d'une approche sexuelle. Peut-on déduire de sa seule absence de résistance qu'elle est d'accord ?", "Non, le consentement ne se déduit pas du seul silence ou de l'absence de réaction", [
    ["Oui, si elle ne crie pas suffisamment fort", "L'absence de cri n'établit pas un consentement ; une personne peut être figée, intimidée ou incapable de réagir."],
    ["Oui, parce que seule une résistance physique rend un refus valable", "Le consentement ne dépend pas de l'obligation de se défendre physiquement."],
    ["Non, mais un accord donné une autre fois suffit à remplacer celui du moment", "Un consentement antérieur ne vaut pas automatiquement pour la situation présente."]
  ], "Le consentement doit être libre et porter sur l'acte concerné. Silence, immobilité, peur ou absence de résistance ne permettent pas à eux seuls de conclure à un accord.", "Pas de résistance n'est pas la preuve d'un oui.");
  q("violences", ["O10"], "La traite concerne plusieurs formes d'exploitation", "Une personne recrute des mineurs par menace pour les forcer à mendier et récupérer leurs gains. La traite peut-elle concerner cette situation ?", "Oui, la traite ne se limite pas à l'exploitation sexuelle", [
    ["Non, la traite concerne exclusivement la prostitution", "La traite peut viser aussi le travail forcé, la mendicité forcée et d'autres formes d'exploitation."],
    ["Non, dès lors que les mineurs circulent dans la rue", "La possibilité de circuler en apparence n'exclut pas la menace, le contrôle et l'exploitation."],
    ["Oui, mais les personnes exploitées perdent alors automatiquement toute protection", "Les victimes conservent leurs droits et peuvent être accompagnées ; leur exploitation ne les prive pas de protection."]
  ], "La traite utilise notamment la contrainte ou la vulnérabilité pour exploiter des personnes. L'exploitation peut être sexuelle, liée au travail ou à la mendicité, entre autres.", "Traite : exploitation des personnes, pas un seul secteur.");
  q("violences", ["O10", "O11"], "Une personne souhaitant sortir de la prostitution peut être accompagnée", "Une personne souhaite quitter une situation de prostitution et cherche de l'aide. Quelle orientation peut être utile ?", "Une association ou un dispositif d'accompagnement de sortie de la prostitution", [
    ["Attendre une condamnation pénale personnelle avant de pouvoir recevoir de l'aide", "L'accompagnement vise la protection et la sortie ; il ne dépend pas d'une condamnation de la personne aidée."],
    ["Demander exclusivement l'autorisation de la personne qui la contrôle", "Un exploiteur n'est pas l'autorité légitime pour autoriser l'accès de sa victime à l'aide."],
    ["Considérer qu'aucun accompagnement n'existe en dehors de l'hébergement touristique", "Des associations et parcours spécifiques proposent un accompagnement social et des démarches adaptées."]
  ], "Des associations peuvent accompagner les personnes prostituées et victimes de traite, notamment vers un parcours de sortie. Demander de l'aide n'exige pas de se soumettre à celui qui exploite.", "Sortir de l'exploitation : être accompagné, pas demander permission à l'exploiteur.");
  q("aider", ["O11", "R11"], "Porter plainte sans connaître l'auteur et hors du lieu des faits", "Une victime ignore le nom de l'auteur et se trouve dans une autre ville que celle des faits. Que peut-elle faire ?", "Déposer plainte contre X dans un commissariat de police nationale ou une brigade de gendarmerie", [
    ["Attendre d'identifier seule l'auteur avant toute plainte", "Une plainte contre X permet justement de signaler des faits lorsqu'on ne connaît pas l'auteur."],
    ["Déposer plainte uniquement si elle revient dans la commune exacte des faits", "La plainte peut être reçue par un commissariat de police nationale ou une brigade, sans cette limitation au lieu des faits."],
    ["Remplacer obligatoirement la plainte par un commentaire public sur internet", "Une publication en ligne ne remplace pas une plainte enregistrée par les autorités compétentes."]
  ], "Une victime peut porter plainte contre X et n'a pas à résoudre elle-même l'enquête. Police nationale et gendarmerie peuvent recevoir la plainte, même hors du lieu des faits ; une plainte peut aussi être adressée au procureur.", "Auteur inconnu et autre ville ne ferment pas l'accès à la plainte.");
  q("aider", ["O11"], "Une aide associative peut précéder la plainte", "Une personne ayant subi des violences n'est pas encore prête à porter plainte. Peut-elle néanmoins chercher une aide associative ?", "Oui, une association peut l'écouter et l'accompagner sans lui imposer une plainte préalable", [
    ["Non, toute association doit exiger un jugement définitif avant de l'écouter", "L'accompagnement et l'écoute peuvent intervenir avant toute décision judiciaire."],
    ["Oui, mais l'association devient automatiquement son juge pénal", "Une association conseille et accompagne ; elle ne remplace pas le tribunal chargé de juger."],
    ["Non, tant qu'elle reste en contact avec la personne violente", "La protection et l'accompagnement ne sont pas réservés à ceux qui ont déjà réussi à rompre tout contact."]
  ], "L'aide aux victimes peut être gratuite et confidentielle. Elle comprend écoute, information et accompagnement, même lorsque la personne ne souhaite pas encore déposer plainte.", "Demander de l'aide est possible avant de décider de porter plainte.");
  q("aider", ["O11", "O12", "A14"], "En agression immédiate, alerter l'intervention plutôt qu'une ligne d'écoute", "Vous entendez une agression conjugale en cours avec un danger immédiat. Quel premier appel est adapté pour obtenir une intervention ?", "Le 17 ou le 112", [
    ["Le 3919 uniquement, car il envoie directement une patrouille", "Le 3919 est une ligne d'écoute et d'orientation ; il ne remplace pas la police-secours en situation immédiate."],
    ["Le 115 uniquement, car il assure l'intervention policière", "Le 115 traite l'hébergement d'urgence, pas l'intervention face à une agression en cours."],
    ["Le 3018 uniquement, même sans situation de harcèlement d'un jeune", "Le 3018 accompagne le harcèlement et les violences numériques des jeunes ; l'agression en cours exige les secours adaptés."]
  ], "En danger immédiat, il faut alerter les services d'intervention. Le 3919 reste utile pour l'écoute et l'orientation, mais ses missions ne sont pas celles du 17 ou du 112.", "Danger en cours : intervention ; accompagnement : écoute et orientation.");
  q("aider", ["O12"], "Témoigner de faits observés, sans inventer", "Un témoin de violences souhaite aider une enquête. Que doit-il privilégier dans son témoignage ?", "Décrire précisément les faits qu'il a réellement vus ou entendus", [
    ["Ajouter des éléments imaginés pour rendre son témoignage plus convaincant", "Inventer des faits déforme la réalité et peut nuire à la procédure ; un témoignage doit être sincère."],
    ["Présenter comme certaine toute rumeur lue sur un réseau social", "Une rumeur n'est pas une observation personnelle et ne doit pas être confondue avec un fait établi."],
    ["Déterminer lui-même la peine exacte à appliquer à l'auteur", "Le témoin renseigne les faits ; la qualification et la peine relèvent des autorités judiciaires compétentes."]
  ], "Le témoignage aide à établir les faits. Il faut distinguer ce qui a été personnellement observé de ce qui est supposé ou rapporté, et ne pas se substituer au juge.", "Un témoignage utile est précis et sincère, pas amplifié.");
  q("aider", ["O12", "O11"], "Soutenir sans culpabiliser ni forcer la victime", "Une amie confie qu'elle subit des violences mais hésite sur les démarches. Quelle attitude est adaptée ?", "L'écouter sans la culpabiliser, l'aider à se protéger et l'orienter vers des professionnels", [
    ["Lui dire qu'elle est responsable tant qu'elle n'a pas quitté immédiatement son domicile", "Les difficultés à quitter une situation violente ne rendent pas la victime responsable des violences."],
    ["Publier son histoire et son adresse sans son accord pour faire pression", "Cette exposition peut accroître les risques et porter atteinte à sa vie privée ; elle n'est pas une protection appropriée."],
    ["Lui promettre qu'une main courante déclenchera forcément les mêmes suites qu'une plainte", "Main courante et plainte n'ont pas le même objet ni les mêmes effets ; il faut informer sans promettre des suites automatiques."]
  ], "Le soutien passe par une écoute respectueuse, la sécurité et une information fiable sur les aides. On n'impose pas une démarche en culpabilisant la victime ; en danger immédiat, les secours doivent être alertés.", "Aider : écouter, protéger, informer, pas rendre la victime responsable.");
  q("environnement", ["O13", "L5"], "Les consignes de tri dépendent de la collecte locale", "Après un déménagement, une personne utilise uniquement la couleur des bacs pour décider où jeter ses déchets. Quelle précaution est utile ?", "Consulter les consignes de tri de sa commune ou intercommunalité", [
    ["Appliquer toujours les mêmes consignes à toute poubelle de même couleur", "Une couleur identique ne garantit pas des consignes identiques entre tous les territoires."],
    ["Jeter les déchets dans la nature si les consignes locales diffèrent", "Une différence de consignes n'autorise pas un dépôt sauvage ; il faut utiliser la filière appropriée."],
    ["Supposer que les collecteurs feront obligatoirement tout le tri à sa place", "Le tri demandé aux usagers participe au fonctionnement de la collecte ; il ne doit pas être écarté automatiquement."]
  ], "La collecte est organisée localement et les consignes applicables doivent être vérifiées. Les appliquer permet un traitement adapté des déchets et évite les dépôts sauvages.", "Nouveau territoire : vérifier les consignes, pas seulement la couleur.");
  q("environnement", ["O13", "R10"], "La protection environnementale implique aussi les habitants", "Une association propose un nettoyage de quartier et des actions de réduction des déchets. Est-ce compatible avec le rôle des pouvoirs publics ?", "Oui, l'action citoyenne complète celle de l'État et des collectivités", [
    ["Non, protéger l'environnement est réservé exclusivement au gouvernement", "La Charte et les fiches rappellent que chacun peut contribuer à préserver l'environnement."],
    ["Oui, donc les collectivités n'ont désormais plus aucune mission de collecte", "La participation citoyenne ne supprime pas les compétences et responsabilités des collectivités."],
    ["Non, parce que seuls les propriétaires immobiliers peuvent agir", "La contribution à la préservation de l'environnement n'est pas limitée aux propriétaires."]
  ], "La préservation de l'environnement engage chacun. Associations, habitants et pouvoirs publics peuvent agir de façon complémentaire, sans que la participation des uns supprime les obligations des autres.", "Bien commun : actions publiques et gestes citoyens se complètent.");

  // SOCIÉTÉ
  reference("PERMISUE", "ads-permis-europeen", "Service Public — Conduire avec un permis européen", "https://www.service-public.gouv.fr/particuliers/vosdroits/F1757", "society");
  reference("PERMISETUDES", "ads-permis-etudes", "Service Public — Permis étranger pendant les études ou un court séjour", "https://www.service-public.gouv.fr/particuliers/vosdroits/F1459", "society");
  reference("PERMISECHANGE", "ads-permis-echange", "Service Public — Échange d'un permis obtenu hors Europe", "https://www.service-public.gouv.fr/particuliers/vosdroits/F1460", "society");

  q("administration", ["A01", "H10"], "Une domiciliation donne une adresse, pas automatiquement un logement", "Une personne sans logement stable obtient une domiciliation administrative. Qu'est-ce que cela lui permet principalement ?", "Recevoir son courrier et effectuer des démarches d'accès aux droits", [
    ["Obtenir automatiquement un bail pour un logement social", "Une domiciliation est une adresse administrative ; l'attribution d'un logement relève d'une démarche et de conditions distinctes."],
    ["Être exemptée de communiquer avec sa caisse d'Assurance maladie", "La domiciliation facilite justement les échanges et les justificatifs auprès des organismes ; elle ne dispense pas des démarches."],
    ["Remplacer automatiquement tous les documents d'identité demandés", "L'adresse administrative ne remplace pas les autres justificatifs d'identité ou de situation prévus pour une démarche."]
  ], "La domiciliation aide les personnes sans adresse stable à recevoir confidentiellement leur courrier et à exercer leurs droits. Elle ne vaut ni titre de propriété ni bail ni ouverture automatique de toutes les prestations.", "Domiciliation = adresse pour les droits ; logement = autre démarche.");
  q("administration", ["A01"], "Un déménagement exige plusieurs mises à jour", "Une personne déménage et prévient seulement sa banque. Quelle autre démarche doit-elle penser à faire ?", "Mettre à jour son adresse auprès des autres organismes concernés, comme les impôts, la CAF ou l'Assurance maladie", [
    ["Supposer que la banque informe automatiquement toutes les administrations", "La mise à jour auprès d'une banque ne garantit pas la mise à jour de tous les organismes publics ou privés."],
    ["Attendre d'avoir manqué un courrier pour effectuer toute mise à jour", "Une mise à jour rapide évite la perte de courriers et permet des droits et obligations correspondant à la situation réelle."],
    ["Utiliser un délai unique de trois mois pour toutes les démarches sans le vérifier", "Les obligations et délais diffèrent selon les documents et les organismes ; un délai universel ne doit pas être supposé."]
  ], "Un déménagement implique les organismes qui utilisent l'adresse : administrations, caisse, banque, assureur, employeur, entre autres. Des services groupés existent, mais il faut vérifier ce qu'ils mettent réellement à jour et les délais propres à chaque démarche.", "Un changement d'adresse n'est pas une mise à jour universelle automatique.");
  q("administration", ["A02"], "Un mineur non émancipé n'ouvre pas seul un compte comme un adulte", "Un adolescent de 14 ans non émancipé veut ouvrir seul un compte bancaire comme un majeur. Quel cadre doit être pris en compte ?", "L'intervention de son représentant légal et les règles applicables aux mineurs", [
    ["Le simple fait de posséder un téléphone lui donne la capacité d'un majeur", "La possession d'un téléphone ne modifie pas la capacité juridique du mineur."],
    ["Un justificatif d'adresse remplace à lui seul l'autorisation du représentant légal", "Les justificatifs d'identité et d'adresse ne remplacent pas les règles de capacité et d'autorisation."],
    ["Il doit obligatoirement attendre 26 ans pour tout compte bancaire", "L'âge de 26 ans n'est pas le seuil de capacité bancaire ; des comptes pour mineurs existent dans le cadre légal."]
  ], "La banque vérifie l'identité, l'adresse et la capacité juridique. Pour un mineur non émancipé, l'ouverture et la gestion suivent des règles adaptées avec son représentant légal.", "Pièces justificatives et capacité juridique : deux vérifications distinctes.");
  q("administration", ["A02"], "Le droit au compte ne garantit pas un crédit", "La Banque de France désigne une banque dans le cadre du droit au compte. Cela oblige-t-il la banque à accorder tout prêt demandé ?", "Non, le droit au compte ne se confond pas avec un droit automatique au crédit", [
    ["Oui, toute ouverture de compte garantit un prêt immobilier", "Un compte bancaire et un financement immobilier relèvent de conditions différentes."],
    ["Oui, et le titulaire est dispensé de rembourser un découvert", "Le droit au compte ne supprime pas les obligations liées aux sommes empruntées ou aux dettes."],
    ["Non, donc la banque peut refuser tous les services bancaires de base prévus", "Le droit au compte donne accès aux services prévus ; l'absence de crédit automatique n'autorise pas à supprimer ces services."]
  ], "Le droit au compte facilite l'accès à des services bancaires de base après un refus. Il n'est pas une garantie d'obtention d'un prêt ou d'un découvert.", "Accès au compte ne veut pas dire accès automatique au crédit.");
  q("administration", ["A06", "L5"], "Foyer fiscal : un adulte rattaché ne déclare pas forcément séparément", "Un étudiant majeur est valablement rattaché au foyer fiscal de ses parents. Doit-il forcément déposer une déclaration personnelle séparée pour les mêmes revenus ?", "Non, les règles du rattachement au foyer fiscal doivent être prises en compte", [
    ["Oui, la majorité impose toujours deux déclarations des mêmes revenus", "La majorité n'exclut pas les possibilités légales de rattachement ; il faut éviter une double déclaration inadaptée."],
    ["Non, donc ses revenus deviennent toujours inexistants pour l'impôt", "Le rattachement ne signifie pas que les revenus n'ont jamais à être pris en compte dans le foyer selon leurs règles fiscales."],
    ["Oui, le rattachement fiscal ne concerne que le domicile postal", "Le foyer fiscal organise la déclaration et le calcul de l'impôt ; il ne se réduit pas à une adresse de courrier."]
  ], "La déclaration se raisonne au niveau du foyer fiscal et selon les règles d'attachement. Un adulte rattaché n'effectue pas nécessairement une déclaration séparée ; les revenus à déclarer et les exonérations éventuelles se vérifient.", "Majeur ne veut pas toujours dire foyer fiscal séparé.");
  q("administration", ["A06"], "Première déclaration : demander l'aide du service des impôts", "Une personne doit faire sa première déclaration de revenus et n'a pas encore les accès nécessaires. Quelle réaction est adaptée ?", "Contacter son service des impôts et vérifier les modalités de première déclaration", [
    ["Ne rien déclarer jusqu'à ce qu'un avis d'impôt arrive automatiquement", "Une première démarche peut être nécessaire ; attendre sans vérifier peut faire manquer une obligation."],
    ["Utiliser le numéro fiscal d'un ami pour créer un foyer commun", "Le numéro fiscal est personnel ; celui d'un ami ne constitue pas un accès légitime à ses propres démarches."],
    ["Considérer qu'un bulletin de salaire remplace toujours la déclaration annuelle", "Le bulletin de paie et la déclaration fiscale n'ont pas le même objet ; la présence de données préremplies ne dispense pas de la démarche applicable."]
  ], "Les démarches de première déclaration peuvent nécessiter un contact avec le service compétent. Il faut utiliser ses propres identifiants et vérifier les revenus et la situation de son foyer.", "Première déclaration : vérifier la démarche, ne pas attendre au hasard.");
  q("administration", ["A09"], "Le certificat d'accouchement ne remplace pas la déclaration d'état civil", "Les parents reçoivent un certificat établi après l'accouchement. Ce document remplace-t-il à lui seul la déclaration de naissance à l'état civil ?", "Non, la déclaration de naissance doit être effectuée selon les règles à la mairie du lieu de naissance", [
    ["Oui, car tout document médical crée automatiquement un acte d'état civil", "Le constat médical et l'enregistrement d'état civil sont deux actes distincts."],
    ["Oui, il suffit d'envoyer une copie à l'employeur d'un parent", "L'information de l'employeur ne remplace pas la déclaration au service d'état civil compétent."],
    ["Non, la déclaration doit être faite uniquement à la mairie du domicile des grands-parents", "La déclaration se fait à la mairie du lieu de naissance selon les règles, et non selon le domicile des grands-parents."]
  ], "Le certificat d'accouchement figure parmi les éléments utiles à la déclaration. L'acte de naissance est établi par l'état civil après la démarche applicable, en règle générale dans les cinq jours.", "Document médical et acte d'état civil ne sont pas interchangeables.");
  q("administration", ["A09"], "Déclaration de naissance et reconnaissance ne sont pas toujours la même démarche", "Un père non marié veut être juridiquement reconnu comme père de son enfant. Que doit-il distinguer ?", "La déclaration de naissance et, lorsque nécessaire, la reconnaissance qui établit la filiation", [
    ["La déclaration de naissance crée toujours sa filiation sans aucune autre condition", "Pour un père non marié, l'établissement de la filiation peut nécessiter une reconnaissance ; les démarches ne sont pas toujours confondues."],
    ["Une reconnaissance remplace la déclaration obligatoire de naissance dans tous les cas", "La reconnaissance et la déclaration répondent à des objets différents ; reconnaître l'enfant ne supprime pas la déclaration de sa naissance."],
    ["La filiation est établie uniquement lors de l'inscription à l'école", "L'inscription scolaire ne constitue pas la démarche d'état civil établissant la filiation."]
  ], "La déclaration enregistre la naissance ; la reconnaissance peut établir la filiation dans les situations prévues. Elle peut notamment être faite avant la naissance ou ensuite selon les règles.", "Naissance enregistrée et lien de filiation établi : deux objets à distinguer.");
  q("administration", ["A10", "MARIAGE", "L5"], "Un mariage peut être célébré dans la commune d'un parent", "Deux futurs époux souhaitent se marier dans la commune où le père de l'un est domicilié. Est-ce nécessairement interdit parce qu'ils vivent ailleurs ?", "Non, un lien légal avec le domicile ou la résidence d'un parent peut permettre le mariage dans cette commune", [
    ["Oui, seul le lieu de naissance de l'un des futurs époux est toujours compétent", "Le lieu de naissance n'est pas le seul lien prévu ; domicile ou résidence d'un époux ou d'un parent peuvent être pertinents."],
    ["Non, ils peuvent choisir toute mairie touristique sans aucun lien ni exception prévue", "La possibilité de se marier dans la commune d'un parent ne supprime pas les conditions de lien ou les exceptions légales."],
    ["Oui, la compétence dépend uniquement du lieu de la cérémonie religieuse", "Le mariage civil suit ses propres règles de compétence ; la cérémonie religieuse ne les détermine pas."]
  ], "En principe, la mairie doit présenter un lien durable prévu par la loi avec les futurs époux ou l'un de leurs parents. Les justificatifs de domicile ou résidence et les exceptions éventuelles se vérifient auprès de la mairie.", "Mairie du mariage : un lien prévu, pas forcément le domicile actuel du couple.");
  q("administration", ["A10", "MARIAGE"], "Mariage d'un mineur : l'accord parental seul ne suffit pas", "Les parents d'une personne mineure acceptent son mariage. Leur accord suffit-il à lui seul à déroger à l'âge légal ?", "Non, une dispense d'âge pour motifs graves accordée par le procureur est aussi nécessaire", [
    ["Oui, l'autorisation familiale remplace toute intervention prévue par la loi", "L'accord parental ne remplace pas la dispense d'âge du procureur dans la procédure exceptionnelle."],
    ["Oui, dès 16 ans toute personne a un droit automatique de se marier", "La loi ne crée pas un seuil universel de mariage automatique à 16 ans ; elle prévoit une dispense exceptionnelle pour motifs graves."],
    ["Non, le seul accord de son partenaire majeur suffit à la place de celui des autorités", "Le partenaire n'est pas l'autorité qui peut accorder la dispense légale."]
  ], "L'âge de principe est 18 ans. Pour un mineur, la procédure exceptionnelle exige une dispense d'âge du procureur pour motifs graves et les consentements prévus ; une permission familiale seule ne suffit pas.", "18 ans en principe ; en dessous : exception légale, pas automatique.", "scenario", true);
  q("administration", ["A11"], "Un décès doit être constaté médicalement puis déclaré", "Une personne décède à domicile. Quelle distinction faut-il garder entre les démarches ?", "La constatation médicale du décès et sa déclaration à la mairie du lieu du décès", [
    ["La famille peut remplacer le constat médical par une publication en ligne", "Une publication ne constitue pas un constat médical du décès ni une déclaration d'état civil."],
    ["La déclaration est toujours facultative si la famille connaît déjà le décès", "L'enregistrement d'état civil est une obligation et ne dépend pas seulement de l'information de la famille."],
    ["Le décès doit uniquement être déclaré à l'école du défunt", "L'école n'est pas le service d'état civil compétent pour déclarer le décès."]
  ], "Le décès doit être constaté par un professionnel habilité et déclaré au service d'état civil de la mairie du lieu du décès. Il faut contacter les interlocuteurs compétents selon le contexte, notamment en cas de mort suspecte.", "Constater médicalement et enregistrer civilement : deux démarches.");
  q("logement", ["A12", "L5"], "Une demande HLM ne garantit pas une attribution immédiate", "Un ménage remplit une demande de logement social et respecte les plafonds de ressources. Peut-il conclure qu'un appartement lui est immédiatement garanti ?", "Non, l'éligibilité et l'attribution effective d'un logement sont des étapes distinctes", [
    ["Oui, le dépôt du dossier vaut immédiatement bail signé", "Une demande n'est pas un contrat de location ni une décision d'attribution."],
    ["Oui, les plafonds de ressources sont le seul élément pris en compte en toute situation", "L'attribution dépend des conditions applicables, de la situation et des logements disponibles, pas du seul plafond de revenus."],
    ["Non, donc il est inutile de déposer une demande officielle", "L'absence de garantie immédiate ne supprime pas l'utilité ni la nécessité de la démarche officielle."]
  ], "Le logement social répond à des conditions d'accès et à une procédure d'attribution. Il faut déposer et suivre sa demande ; être éligible ne garantit pas un logement immédiat.", "Éligible ne veut pas dire déjà attributaire.");
  q("logement", ["A12"], "Préavis d'un logement meublé en résidence principale", "Un locataire veut quitter un logement meublé constituant sa résidence principale et soumis au bail d'habitation habituel. Quel est en principe son préavis ?", "Un mois", [
    ["Trois mois sans aucune exception parce que tous les logements ont le même préavis", "Le préavis du locataire diffère entre location vide et meublée ; en meublé il est en principe d'un mois."],
    ["Aucun préavis dès qu'il trouve un autre logement", "Trouver un autre logement ne supprime pas automatiquement l'obligation de notifier le congé et le préavis applicable."],
    ["Six mois, qui est toujours le préavis personnel du locataire", "Les délais de congé du bailleur et ceux du locataire ne doivent pas être confondus ; ce n'est pas le préavis du locataire en meublé."]
  ], "Pour une location meublée constituant la résidence principale dans ce cadre, le locataire peut partir en respectant un préavis d'un mois. Il doit notifier son congé selon les formes prévues.", "Meublé : un mois pour le locataire dans le cadre habituel.", "scenario", true);
  q("logement", ["A12"], "Un bailleur ne dispose pas du même congé libre que le locataire", "Un propriétaire affirme pouvoir interrompre à tout moment un bail d'habitation parce que le locataire peut donner congé. Que faut-il retenir ?", "Le congé du bailleur suit ses propres conditions, motifs et délais légaux", [
    ["Les droits de départ du bailleur et du locataire sont identiques en toute situation", "La loi distingue les règles de congé du locataire de celles du bailleur, notamment pour protéger la résidence du locataire."],
    ["Un changement de serrure remplace toujours un congé légal", "Changer la serrure pour évincer le locataire ne remplace ni le congé régulier ni la procédure d'expulsion."],
    ["Le bailleur ne peut jamais récupérer son logement, même dans les cas prévus", "Des motifs et procédures légaux permettent un congé ; le droit est encadré, pas supprimé."]
  ], "Le bailleur doit respecter les conditions de congé applicables au contrat, avec motifs et délais prévus. La possibilité du locataire de partir ne rend pas ces règles symétriques.", "Même bail, mais règles de départ différentes.");
  q("logement", ["A13"], "Entretien courant et grosses réparations ne reviennent pas toujours à la même personne", "Une canalisation vétuste exige une réparation importante qui n'est pas due à une faute du locataire. Qui doit en principe assurer les réparations relevant du bailleur ?", "Le propriétaire, selon les règles et les causes du dommage", [
    ["Toujours le locataire, parce qu'il utilise le logement", "L'usage du logement n'attribue pas toutes les réparations au locataire : la vétusté et les grosses réparations peuvent relever du bailleur."],
    ["La mairie, qui remplace automatiquement toutes les obligations du propriétaire", "La mairie ne prend pas automatiquement la place du bailleur pour les réparations contractuelles du logement."],
    ["Personne, parce qu'un bail permet de louer un logement dangereux sans obligation", "Le propriétaire doit fournir un logement décent et respecter ses obligations d'entretien et de réparation."]
  ], "Le bailleur assume notamment les réparations qui lui incombent et la décence du logement. Le locataire assure l'entretien courant et les petites réparations locatives, avec les exceptions et causes prévues.", "Vétusté et gros travaux : ne pas confondre avec le petit entretien.");
  q("logement", ["A13"], "Comparer les états des lieux à l'entrée et à la sortie", "Pourquoi établir soigneusement un état des lieux à l'entrée et à la sortie d'une location ?", "Pour documenter l'état du logement et comparer son évolution", [
    ["Pour remplacer automatiquement le bail et toutes ses clauses", "L'état des lieux décrit le logement ; le bail définit les conditions de la location. Les documents ont des fonctions distinctes."],
    ["Pour prouver que toute usure normale est toujours une dégradation fautive", "La comparaison ne transforme pas automatiquement la vétusté ou l'usure normale en faute du locataire."],
    ["Pour rendre inutile tout diagnostic obligatoire du logement", "Les diagnostics renseignent sur des risques et caractéristiques ; l'état des lieux ne les remplace pas."]
  ], "Les états des lieux décrivent la situation à deux moments. Ils aident à discuter d'éventuelles dégradations, sans confondre usure normale, diagnostic technique et contrat de location.", "État des lieux, bail et diagnostics : trois fonctions.");
  q("logement", ["L5"], "Acheter un logement implique un acte authentique", "Deux personnes s'accordent sur la vente d'un appartement. Quelle formalisation est nécessaire pour l'achat immobilier dans le cadre habituel ?", "Un acte authentique signé chez le notaire", [
    ["Un simple échange de messages suffit à remplacer l'acte de vente définitif", "Les échanges ou engagements préparatoires ne remplacent pas l'acte authentique nécessaire à la vente immobilière."],
    ["Une attestation d'assurance habitation vaut acte de propriété", "L'assurance couvre des risques ; elle ne constitue pas le titre d'acquisition du bien."],
    ["La signature d'un bail de location établit la vente de l'appartement", "Un bail organise la location et ne transfère pas à lui seul la propriété comme une vente."]
  ], "L'achat d'un bien immobilier est formalisé par un acte authentique devant le notaire. Il ne faut pas confondre vente définitive, avant-contrat, location et assurance.", "Acheter n'est ni louer ni seulement assurer le logement.");
  q("logement", ["L5"], "Être propriétaire ne dispense pas des autorisations d'urbanisme", "Un propriétaire souhaite construire une maison sur son terrain. Le fait de posséder le terrain suffit-il à l'autoriser ?", "Non, il doit vérifier et obtenir les autorisations d'urbanisme nécessaires auprès des services compétents", [
    ["Oui, le droit de propriété remplace tout permis de construire", "La propriété ne dispense pas des règles d'urbanisme et des autorisations de construction."],
    ["Oui, si aucun voisin ne proteste pendant la première journée", "L'absence de protestation des voisins ne remplace pas une autorisation légalement nécessaire."],
    ["Non, un propriétaire doit demander un bail à son propre locataire pour construire", "Un bail de location n'est pas l'autorisation d'urbanisme qui permet de construire sur un terrain."]
  ], "Construction, extension ou modification extérieure peuvent nécessiter un permis ou une déclaration préalable selon le projet. La mairie ou le service d'urbanisme informe sur les règles applicables avant les travaux.", "Être propriétaire n'efface pas l'urbanisme.");
  q("mobilite", ["A03"], "Un contrôle technique favorable ne remplace pas l'assurance", "Une voiture a un contrôle technique à jour. Son conducteur peut-il en déduire qu'elle est autorisée à circuler sans assurance ?", "Non, l'assurance obligatoire et les autres conditions de circulation restent nécessaires", [
    ["Oui, le contrôle technique indemnise lui-même toutes les victimes d'accident", "Le contrôle technique vérifie l'état du véhicule ; il n'est pas un contrat d'assurance indemnisant les victimes."],
    ["Oui, il donne aussi un permis de conduire à toute personne qui utilise la voiture", "Le permis est lié au conducteur ; il n'est pas délivré par le contrôle technique du véhicule."],
    ["Non, donc le contrôle technique n'a aucune fonction de sécurité", "Il a une fonction de vérification technique ; être distinct de l'assurance ne le rend pas inutile."]
  ], "Permis, immatriculation, assurance et contrôle technique lorsque requis répondent à des exigences différentes. Aucun de ces éléments ne remplace automatiquement les autres.", "Conducteur, véhicule, assurance et contrôle : vérifier chaque condition.");
  q("mobilite", ["A03"], "Permis B : auto-école ou candidat libre selon les règles", "Une personne envisage l'examen du permis B sans inscription classique en auto-école. Quelle possibilité doit-elle vérifier ?", "La candidature libre, en respectant ses conditions d'apprentissage et d'examen", [
    ["L'absence d'auto-école dispense automatiquement de l'épreuve pratique", "La candidature libre ne supprime pas les épreuves requises pour obtenir le permis."],
    ["Un accompagnateur remplace à lui seul l'obtention d'un permis", "L'apprentissage encadré ne donne pas automatiquement le droit de conduire seul sans permis."],
    ["Toute préparation doit obligatoirement comporter le même nombre d'heures, quel que soit le dispositif", "Les conditions varient selon la voie et le véhicule ; il ne faut pas généraliser un minimum unique à toutes les situations."]
  ], "La fiche distingue l'auto-école et la candidature libre. Les deux supposent de respecter les règles propres à la formation et aux épreuves, notamment la sécurité de l'apprentissage.", "Changer la voie de préparation ne supprime pas les exigences du permis.");
  q("mobilite", ["A04", "PERMISUE"], "Un permis européen valide n'expire pas automatiquement après un an de résidence", "Une personne s'installe en France avec un permis délivré dans l'Union européenne, valide et remplissant les conditions de reconnaissance. Doit-elle toujours l'échanger exactement un an après son installation ?", "Non, il reste reconnu sous conditions ; l'échange devient obligatoire dans certains cas prévus", [
    ["Oui, la règle d'un an s'applique uniformément à tout permis étranger", "La règle applicable à certains permis non européens ne se transpose pas à tous les permis UE/EEE."],
    ["Non, donc elle peut continuer même après expiration ou suspension de son permis", "La reconnaissance exige notamment la validité et le respect des droits à conduire ; elle ne neutralise pas une expiration ou une suspension."],
    ["Oui, même si elle n'effectue qu'un bref séjour touristique", "Les règles dépendent de la situation ; un échange uniforme après un an ne décrit pas les courts séjours ni les permis européens."]
  ], "Un permis UE/EEE remplissant les conditions peut être utilisé en France tant qu'il est valide. Un échange est notamment requis dans des cas comme certaines infractions, l'expiration, la perte ou une nouvelle catégorie.", "Permis européen et permis hors Europe : ne pas copier le même délai.", "scenario", true);
  q("mobilite", ["A04", "PERMISETUDES"], "L'étudiant étranger relève d'une règle particulière de reconnaissance", "Un étudiant étranger a un titre étudiant valide et un permis non européen remplissant les conditions de reconnaissance. Peut-on affirmer qu'il cesse toujours d'être reconnu au bout d'un an d'études ?", "Non, le régime étudiant peut permettre la reconnaissance pendant la durée des études", [
    ["Oui, tous les étudiants ont exactement le même délai qu'une installation ordinaire", "La réglementation prévoit un régime particulier pour l'étudiant étranger remplissant les conditions."],
    ["Non, donc son permis n'a pas besoin d'être valide", "La durée de reconnaissance ne supprime pas les conditions de validité, d'âge et de droit à conduire."],
    ["Non, donc il reste reconnu sans démarche pour toujours après tout changement de statut", "La fin des études et le changement de titre peuvent modifier les obligations ; un échange ou le permis français peut devenir nécessaire."]
  ], "Pour l'étudiant étranger remplissant les conditions, le permis non européen peut être reconnu pendant les études. Ce régime ne doit pas être généralisé aux étudiants français ni à tous les changements de situation.", "Statut étudiant : une règle spécifique, avec conditions.", "scenario", true);
  q("mobilite", ["A04", "PERMISETUDES", "PERMISECHANGE"], "Un permis non échangeable impose de vérifier la nécessité du permis français", "À la fin de ses études, une personne obtient un autre titre et découvre que son permis non européen n'est pas échangeable. Que doit-elle vérifier pour continuer à conduire légalement ?", "Les règles applicables et la nécessité de passer le permis français", [
    ["L'absence d'échange possible prolonge automatiquement et définitivement le régime étudiant", "Un changement de situation peut mettre fin au régime particulier ; l'impossibilité d'échange ne le prolonge pas à volonté."],
    ["Une traduction du permis le transforme automatiquement en permis français", "Une traduction facilite la lecture d'un document, mais ne vaut ni échange ni réussite au permis français."],
    ["L'assurance automobile remplace l'absence de droit à conduire", "Être assuré ne dispense pas le conducteur d'avoir un permis reconnu et un droit de conduire valable."]
  ], "Reconnaissance, traduction et échange sont différents. Lorsque le permis ne peut pas être échangé et que le régime de reconnaissance ne permet plus de conduire, il faut obtenir le permis français selon les règles.", "Traduire un permis n'est pas l'échanger.", "scenario", true);
  q("mobilite", ["A05", "L5"], "La responsabilité civile concerne les dommages causés à autrui", "Une personne casse accidentellement un objet appartenant à un voisin. Quelle notion concerne l'obligation de réparer ce dommage ?", "Sa responsabilité civile envers le voisin", [
    ["Son assurance maladie, qui couvre systématiquement les objets d'autrui", "L'assurance maladie rembourse des frais de santé ; elle ne remplace pas la responsabilité civile pour les dommages matériels."],
    ["Le contrôle technique, qui couvre toute vie privée sans véhicule", "Le contrôle technique concerne l'état de véhicules ; il ne couvre pas un dommage matériel dans la vie privée."],
    ["La responsabilité civile, qui n'existe que si une personne a été condamnée pénalement", "Une obligation civile de réparation ne suppose pas toujours une condamnation pénale préalable."]
  ], "La responsabilité civile vise la réparation des dommages causés à d'autres personnes. Une assurance peut en couvrir certains selon le contrat, mais responsabilité et couverture d'assurance ne sont pas identiques.", "Dommage à autrui : réparation civile, couverture à vérifier.");
  q("mobilite", ["A05", "L5"], "Les garanties d'assurance doivent être vérifiées pour chaque risque", "Une personne a une assurance habitation et utilise une voiture. Peut-elle supposer que cette assurance remplace toujours l'assurance automobile obligatoire ?", "Non, les risques et garanties de chaque contrat doivent être distingués", [
    ["Oui, toute assurance contenant les mots responsabilité civile couvre automatiquement tous les véhicules", "Les contrats et leurs exclusions définissent le champ de couverture ; la vie privée ne remplace pas l'assurance automobile obligatoire."],
    ["Oui, uniquement parce que la voiture est garée devant son logement", "Le lieu de stationnement ne transforme pas la garantie habitation en assurance automobile."],
    ["Non, donc aucun contrat ne peut jamais contenir de garantie responsabilité civile", "De nombreux contrats contiennent une telle garantie, mais elle s'exerce dans son champ propre."]
  ], "Il faut vérifier les garanties, les personnes couvertes, les risques et les exclusions. L'assurance habitation, automobile et scolaire n'ont pas automatiquement les mêmes fonctions.", "Même expression responsabilité civile, mais garanties différentes.");
  q("civisme", ["L5"], "Un lieu extérieur n'est pas toujours un lieu autorisé pour fumer", "Une personne fume dans un parc public concerné par les interdictions actuelles et affirme que toute zone à ciel ouvert est autorisée. Que faut-il retenir ?", "Des interdictions s'appliquent aussi à certains espaces extérieurs", [
    ["L'interdiction de fumer concerne exclusivement les bâtiments fermés", "Les règles ont été étendues notamment à certains parcs, plages et abords de lieux accueillant des mineurs."],
    ["Tout trottoir de France est interdit en permanence de la même manière", "L'extension à certains lieux extérieurs ne signifie pas une interdiction nationale uniforme de tous les trottoirs."],
    ["La présence d'une poubelle rend toujours le tabac autorisé dans un lieu interdit", "Jeter correctement son mégot ne supprime pas l'interdiction de fumer applicable au lieu."]
  ], "La protection contre le tabagisme concerne des lieux collectifs fermés et certains espaces extérieurs. Il faut respecter le champ, les abords et les périodes prévus par les règles en vigueur.", "À ciel ouvert ne veut pas dire tabac automatiquement autorisé.");
  q("civisme", ["L5"], "Une restriction municipale peut encadrer l'alcool dans l'espace public", "Une commune interdit la consommation d'alcool dans certaines zones et périodes par un arrêté légal. Quelle affirmation est juste ?", "L'usage de l'espace public peut être encadré pour protéger l'ordre public", [
    ["La vente légale d'alcool à un adulte autorise sa consommation en toute zone sans règle", "La vente et la consommation dans l'espace public peuvent relever de règles différentes et de restrictions locales."],
    ["Tout alcool est interdit nationalement dans toute rue et à toute heure", "L'existence de restrictions locales n'établit pas une interdiction uniforme dans toutes les rues."],
    ["Un arrêté municipal permet automatiquement de vendre de l'alcool aux mineurs", "Les restrictions locales de consommation ne suppriment pas l'interdiction nationale de vendre de l'alcool aux moins de 18 ans."]
  ], "Des circonstances locales peuvent justifier des restrictions légales de consommation ou de vente dans l'espace public. Il faut distinguer règles locales, ivresse publique et interdiction de vente aux mineurs.", "Vente, consommation et ivresse : des règles à distinguer.");
  q("environnement", ["L5", "O13"], "Sobriété : éteindre aussi les appareils en veille", "Un ménage veut réduire sa consommation électrique inutile. Quel geste va dans ce sens ?", "Éteindre ou débrancher de façon adaptée les appareils inutilisés qui restent en veille", [
    ["Laisser tous les appareils allumés pour éviter toute consommation de redémarrage", "Cette généralisation entretient des consommations inutiles ; l'arrêt adapté des appareils non utilisés peut économiser l'énergie."],
    ["Considérer que les appareils en veille ne consomment jamais d'électricité", "La veille peut continuer à consommer ; elle n'est pas équivalente à l'arrêt ou au débranchement."],
    ["Déplacer seulement la facture sans modifier aucune consommation", "Le paiement ou le classement de la facture ne réduit pas en lui-même l'énergie consommée."]
  ], "La sobriété vise les consommations inutiles : chauffage adapté, réduction du temps de douche et gestion des appareils. Les gestes doivent rester compatibles avec la sécurité et les besoins réels.", "Une petite veille permanente peut représenter une consommation évitable.");
  q("mobilite", ["L5", "O13"], "Conduite souple et entretien réduisent la consommation", "Une personne doit utiliser une voiture et souhaite diminuer sa consommation. Quel comportement est cohérent ?", "Adopter une conduite souple et entretenir correctement le véhicule", [
    ["Accélérer et freiner brutalement pour économiser automatiquement du carburant", "Les changements brusques de vitesse augmentent souvent la consommation et les risques ; ils ne constituent pas une conduite sobre."],
    ["Rouler avec des pneus volontairement sous-gonflés", "Un mauvais gonflage peut accroître la consommation et les risques ; l'entretien adapté est préférable."],
    ["Supprimer l'entretien parce qu'un véhicule acheté récemment ne peut pas polluer", "L'entretien demeure utile pour la sécurité et la consommation, même pour un véhicule récent."]
  ], "Marche, vélo, transports collectifs et covoiturage peuvent limiter les émissions. Lorsqu'une voiture est nécessaire, une conduite souple et un entretien approprié contribuent à réduire la consommation.", "Moins d'accélérations inutiles, véhicule mieux entretenu.");

  // SANTÉ : interlocuteurs, garanties, continuité et prévention.
  reference("C2S", "ads-c2s-maintien", "Complémentaire santé solidaire — Situation irrégulière et maintien des droits", "https://www.complementaire-sante-solidaire.gouv.fr/ma-situation/vous-etes-etranger-en-situation-irreguliere", "society");
  reference("MATERNITE", "ads-maternite", "Service Public — Prise en charge de la grossesse", "https://www.service-public.gouv.fr/particuliers/vosdroits/F164", "society");
  reference("PSY", "ads-psychologie", "Service Public — Psychologue, psychiatre et prise en charge", "https://www.service-public.gouv.fr/particuliers/vosdroits/F34917", "society");

  q("soins", ["H01", "H02"], "Le médecin traitant coordonne aussi les orientations et le suivi", "Après plusieurs examens réalisés par des spécialistes, un patient veut un suivi cohérent de ses traitements. Quel interlocuteur assure notamment cette coordination ?", "Son médecin traitant déclaré", [
    ["Le pharmacien seul, qui remplace automatiquement tous les spécialistes", "Le pharmacien conseille sur les médicaments, mais ne remplace pas l'ensemble du suivi médical et des orientations du médecin traitant."],
    ["L'agent de remboursement de la CPAM, qui choisit les traitements", "La caisse gère des droits et remboursements ; ses agents administratifs ne remplacent pas le professionnel chargé du suivi clinique."],
    ["Un spécialiste différent à chaque rendez-vous sans partage d'information", "Changer d'interlocuteur sans coordination ne répond pas au besoin de centraliser le dossier et le suivi."]
  ], "Le médecin traitant suit la personne régulièrement, centralise son dossier et oriente vers d'autres professionnels. Le parcours coordonné facilite un suivi adapté, notamment pour les maladies chroniques.", "Le médecin traitant est un repère de suivi, pas seulement un rendez-vous isolé.");
  q("soins", ["H02"], "La prévention personnalisée fait partie du rôle du médecin traitant", "Une personne se sent en bonne santé mais veut vérifier ses vaccinations et ses dépistages selon son âge et ses antécédents. Quelle démarche est pertinente ?", "En parler à son médecin traitant pour une prévention adaptée", [
    ["Attendre une maladie grave, car un médecin généraliste ne fait jamais de prévention", "La prévention, les vaccinations et les dépistages font partie des missions du médecin généraliste et traitant."],
    ["Réaliser sans conseil tous les tests trouvés en ligne à la même fréquence", "Les dépistages doivent être adaptés aux risques, à l'âge et aux recommandations ; une multiplication non ciblée n'est pas un programme de prévention pertinent."],
    ["Demander à la banque de fixer son calendrier médical", "La banque n'est pas l'interlocuteur compétent pour personnaliser un suivi de prévention."]
  ], "Le médecin traitant peut proposer une prévention personnalisée : vaccination, dépistage organisé, conseil sur le tabac, l'alimentation ou l'activité physique selon la situation.", "Se sentir bien n'empêche pas de préparer un suivi préventif.");
  q("soins", ["H01"], "Le pharmacien explique l'utilisation des médicaments", "Après une prescription, un patient hésite sur la façon de prendre ses médicaments. Quelle démarche est adaptée ?", "Demander au pharmacien des conseils d'utilisation et, si nécessaire, un échange avec le prescripteur", [
    ["Modifier seul toutes les doses en fonction d'un témoignage sur internet", "Un témoignage ne remplace pas les indications adaptées à la prescription ; modifier seul les doses peut être dangereux."],
    ["Considérer que délivrer un médicament interdit au pharmacien de donner tout conseil", "Le conseil sur l'utilisation des traitements fait précisément partie du rôle du pharmacien."],
    ["Supposer que tous les médicaments de même couleur ont la même dose et les mêmes effets", "L'apparence ne renseigne pas de manière fiable sur la substance, la dose ou les conditions d'utilisation."]
  ], "Le pharmacien délivre les médicaments et conseille sur leur bonne utilisation dans son champ de compétence. Une difficulté ou un doute peut aussi nécessiter de contacter le prescripteur.", "Un doute sur le traitement : demander un conseil professionnel.");
  q("soins", ["H03"], "Le pédiatre est spécialisé dans la santé des enfants", "Une famille cherche un médecin spécialiste de la santé des enfants. Quel professionnel correspond à cette spécialité ?", "Un pédiatre", [
    ["Un ophtalmologue, dont la spécialité couvre toutes les maladies infantiles", "L'ophtalmologue est spécialisé dans les yeux et la vision, pas dans l'ensemble de la santé des enfants."],
    ["Un dermatologue, qui traite exclusivement les grossesses", "Le dermatologue est spécialisé dans la peau ; la grossesse relève d'autres professionnels."],
    ["Un cardiologue, qui est le nom donné à tout médecin de moins de 18 ans", "Le cardiologue est spécialisé dans le cœur ; le nom de la spécialité ne dépend pas de l'âge du médecin."]
  ], "Le pédiatre est spécialisé dans la santé des enfants. Les professionnels interviennent selon le besoin : yeux pour l'ophtalmologue, peau pour le dermatologue, cœur pour le cardiologue.", "Pédiatrie : enfants ; spécialité et âge du patient sont à distinguer.", "study");
  q("soins", ["H03", "PSY"], "L'accès direct au psychiatre dépend notamment de l'âge et du parcours", "Un assuré de 22 ans souhaite consulter un psychiatre. Quelle affirmation décrit l'accès direct prévu pour son âge ?", "Il peut consulter directement dans les conditions prévues pour les 16 à 25 ans et être remboursé normalement", [
    ["L'accès direct normalement remboursé est prévu uniquement à partir de 26 ans", "La règle citée concerne les 16 à 25 ans ; au-delà, il faut vérifier le parcours et les exceptions, et non inverser le seuil."],
    ["Cette règle permet à tout patient de tout âge de contourner toujours le parcours sans effet sur le remboursement", "La règle d'accès direct dépend des conditions, notamment l'âge ; elle ne se généralise pas à toutes les situations."],
    ["Le remboursement normal exige que ce psychiatre soit obligatoirement son médecin traitant déclaré", "L'accès direct prévu pour cet âge ne nécessite pas que le psychiatre soit lui-même déclaré médecin traitant ; il ne faut pas confondre ces deux statuts."]
  ], "Les 16 à 25 ans peuvent consulter directement un psychiatre dans les conditions prévues. Au-delà, le parcours de soins et les exceptions doivent être vérifiés pour le remboursement.", "Accès direct : une exception définie, pas une règle universelle.", "scenario", true);
  q("soins", ["H04", "H15"], "Santé mentale des enfants : des structures spécifiques existent", "Des parents cherchent un accompagnement psychologique public pour leur enfant. Quel ensemble de structures peut correspondre à ce besoin ?", "Un CMP pour enfants et adolescents ou un CMPP selon la situation", [
    ["Un CLAT, qui est spécialisé dans tous les troubles psychologiques", "Le CLAT est un centre de lutte contre la tuberculose, et non la structure spécialisée générale de santé mentale des enfants."],
    ["Un CeGIDD, qui remplace automatiquement tout suivi psychologique scolaire", "Le CeGIDD a notamment pour mission l'information et le dépistage du VIH, des hépatites et des IST."],
    ["Uniquement les urgences vitales, même pour un besoin de suivi non urgent", "Les urgences ont un rôle en situation aiguë ; un suivi non urgent peut être organisé dans des structures de proximité adaptées."]
  ], "Des CMP enfants-adolescents et des centres médico-psychopédagogiques accompagnent les jeunes selon les besoins. Une situation de danger immédiat relève toutefois des secours adaptés.", "Suivi de proximité et urgence aiguë ne suivent pas le même circuit.");
  q("soins", ["H04"], "Les centres de psychotraumatisme ont un rôle spécialisé", "Après un événement traumatique, une personne cherche une structure spécialisée de santé mentale. Quel interlocuteur peut notamment être pertinent ?", "Un centre régional de psychotraumatisme, avec une orientation adaptée", [
    ["Un CLAT, dont la spécialité serait la psychothérapie post-traumatique", "Un CLAT est un centre de lutte antituberculeuse : sa mission spécialisée concerne la tuberculose, pas la psychothérapie post-traumatique."],
    ["Un CeGIDD, dont la mission principale serait le traitement de tous les traumatismes psychiques", "Un CeGIDD informe et dépiste notamment le VIH, les hépatites et les IST ; ce n'est pas un centre général de psychotraumatisme."],
    ["Une PMI, qui serait le centre de psychotraumatisme de tous les adultes", "La PMI accompagne notamment les femmes enceintes et les enfants de moins de six ans ; elle ne correspond pas à un centre de psychotraumatisme pour tous les adultes."]
  ], "Les centres régionaux de psychotraumatisme font partie des structures spécialisées indiquées par la fiche. Le médecin traitant ou les professionnels de santé peuvent aider à orienter selon le besoin.", "Un traumatisme psychique peut nécessiter un accompagnement spécialisé.", "study", true);
  q("soins", ["H04"], "L'addiction peut être accompagnée sans attendre une sanction", "Une personne veut être aidée pour une consommation qui devient problématique. Quelle orientation est cohérente ?", "Un CSAPA ou un professionnel de santé compétent", [
    ["Attendre une condamnation, car un CSAPA n'aide que sur décision pénale", "Le soin et l'accompagnement des addictions ne sont pas réservés aux personnes condamnées."],
    ["Un CeGIDD, dont la mission est uniquement de vendre un traitement à toutes les addictions", "Le CeGIDD est notamment consacré au dépistage et à l'information sur les IST ; le CSAPA a la mission spécialisée en addictologie."],
    ["Le service des impôts, qui décide du traitement médical", "L'administration fiscale ne remplace pas l'accompagnement clinique et social des addictions."]
  ], "Les CSAPA proposent soins, accompagnement et prévention en addictologie. Une démarche d'aide peut être volontaire et précoce ; elle ne nécessite pas d'attendre une sanction.", "Demander de l'aide tôt, pas seulement après une conséquence grave.");
  q("soins", ["H05", "A14"], "Perte de connaissance : alerter une urgence médicale", "Une personne perd connaissance et présente des difficultés respiratoires. Quel appel est adapté immédiatement ?", "Le 15 ou le 112", [
    ["Le 115, parce que tous les numéros commençant par 11 ont la même fonction", "Le 115 concerne l'hébergement d'urgence ; le 15 ou le 112 correspond à l'alerte médicale immédiate."],
    ["Le 3919 uniquement, qui remplace toute régulation médicale", "Le 3919 écoute et oriente sur les violences faites aux femmes ; il ne remplace pas les secours médicaux."],
    ["Un rendez-vous de prévention plusieurs semaines plus tard", "Une perte de connaissance avec détresse respiratoire est une urgence ; elle ne doit pas attendre un rendez-vous préventif."]
  ], "Une détresse vitale nécessite une alerte immédiate aux secours. Donner le lieu exact, décrire les signes et suivre les instructions aide les services à organiser la réponse.", "Danger vital : appel immédiat, lieu précis, instructions des secours.");
  q("soins", ["H05", "H12"], "Une urgence n'attend pas l'obtention d'une carte Vitale", "Une personne sans carte Vitale présente une blessure grave nécessitant des soins urgents. Que doit-elle faire ?", "Alerter les secours ou se faire prendre en charge en urgence sans attendre la carte", [
    ["Attendre obligatoirement l'arrivée de la carte avant tout appel au SAMU", "L'accès aux secours en danger immédiat n'est pas subordonné à l'obtention d'une carte Vitale."],
    ["Supposer que l'absence de carte signifie automatiquement absence de tout droit", "La carte et les droits ne sont pas identiques ; des droits ou dispositifs de prise en charge peuvent exister sans carte."],
    ["Choisir uniquement une pharmacie pour toute blessure grave, sans alerte", "Le pharmacien peut conseiller, mais une blessure grave peut exiger une prise en charge médicale urgente."]
  ], "Le service public hospitalier accueille les urgences, y compris les personnes sans couverture sociale. Une carte facilite les démarches mais ne doit pas faire retarder une alerte vitale.", "Une urgence se traite avant d'attendre un document administratif.");
  q("soins", ["H07"], "La permanence des soins répond aux besoins hors horaires habituels", "Un problème nécessite un avis médical le dimanche, sans signe de danger vital immédiat. Quelle démarche permet une orientation appropriée ?", "Rechercher la permanence des soins locale ou demander une régulation médicale selon l'organisation du territoire", [
    ["Attendre dans tous les cas jusqu'au lundi même si l'état se dégrade", "La permanence des soins existe hors des horaires habituels ; une aggravation peut nécessiter une nouvelle évaluation urgente."],
    ["Utiliser le 3919 comme unique service de médecin de garde", "Le 3919 n'est pas le service de permanence médicale ; son rôle concerne les violences faites aux femmes."],
    ["Conclure que toute consultation le dimanche nécessite obligatoirement une hospitalisation", "Un médecin de garde peut conseiller, recevoir ou se déplacer selon la situation ; l'hospitalisation n'est pas automatique."]
  ], "Médecins et pharmacies de garde assurent une continuité des soins les nuits, week-ends et jours fériés. L'organisation et les contacts varient selon le territoire ; en danger vital, appeler le 15 ou le 112.", "Garde : continuité ; danger vital : urgence immédiate.");
  q("assurance-maladie", ["H06", "H10"], "La perte d'emploi ne ferme pas automatiquement les droits PUMa", "Une personne affiliée perd son emploi mais continue de résider en France de manière stable et régulière. Ses droits de base cessent-ils nécessairement le jour du licenciement ?", "Non, la PUMa vise aussi la continuité des droits lors de changements de situation", [
    ["Oui, l'assurance maladie est réservée exclusivement aux personnes actuellement salariées", "La PUMa repose aussi sur la résidence stable et régulière dans les conditions applicables."],
    ["Non, donc aucune mise à jour de situation auprès de la caisse n'est jamais utile", "La continuité ne dispense pas d'informer la caisse et de vérifier les droits correspondant à la situation réelle."],
    ["Oui, sauf si un voisin accepte de prêter sa carte Vitale", "Prêter une carte personnelle n'est pas un moyen légal d'ouvrir les droits de quelqu'un d'autre."]
  ], "La PUMa protège notamment la continuité des frais de santé malgré une perte d'emploi ou un changement familial, si les conditions applicables restent remplies. Les démarches et informations de la caisse restent utiles.", "Changer de situation n'est pas forcément perdre la couverture de base.");
  q("assurance-maladie", ["H06"], "C2S : ressources, affiliation et foyer doivent être vérifiés", "Un ménage a de faibles revenus et cherche une complémentaire santé. Que doit-il vérifier pour la C2S ?", "Les conditions d'affiliation et de ressources, appréciées selon la composition du foyer", [
    ["La C2S dépend seulement de la couleur de la carte Vitale", "La carte Vitale ne fixe pas l'éligibilité ; la situation du foyer et les conditions de ressources doivent être examinées."],
    ["Toutes les personnes reçoivent automatiquement la C2S gratuite sans demande ni condition", "La C2S est soumise à des conditions et peut, selon les ressources, nécessiter une participation."],
    ["La C2S remplace l'obligation de déclarer toute sa situation réelle", "Les informations de situation et de ressources restent nécessaires pour examiner les droits."]
  ], "La complémentaire santé solidaire complète la couverture de base des personnes éligibles aux ressources modestes. Elle peut être gratuite ou avec participation, selon les règles du foyer.", "Complémentaire solidaire : un droit sous conditions, pas un produit universel.");
  q("assurance-maladie", ["H06"], "La mutuelle ne couvre pas nécessairement chaque dépense sans limite", "Un assuré a une mutuelle et reçoit un devis de soins. Quelle vérification reste utile ?", "Les garanties, plafonds et conditions prévus par son contrat", [
    ["Une mutuelle rembourse toujours tous les prix facturés sans plafond", "La couverture varie selon le contrat ; la présence d'une mutuelle ne garantit pas une prise en charge illimitée."],
    ["La mutuelle transforme tous les actes non remboursables en actes de Sécurité sociale", "Le contrat complémentaire et le remboursement de base relèvent de règles distinctes."],
    ["Le devis devient inutile dès qu'il possède une carte Vitale", "La carte transmet les informations de droits et de soins ; elle ne renseigne pas à elle seule sur tout reste à charge."]
  ], "La couverture complémentaire dépend du contrat et complète certains frais. Pour un soin coûteux, vérifier devis, base de remboursement et garanties évite de confondre couverture et absence totale de reste à charge.", "Être couvert ne signifie pas tout prix remboursé.");
  q("assurance-maladie", ["H08", "C2S"], "L'expiration d'un titre ne ferme pas toujours immédiatement les droits de santé", "Une personne dont le titre expire craint que tous ses droits de santé se ferment le jour même. Quelle réponse est prudente et conforme aux dispositifs de maintien ?", "Un maintien peut exister, notamment six mois dans les situations prévues ; elle doit vérifier avec sa caisse", [
    ["La fermeture est toujours immédiate, sans maintien possible", "La page officielle décrit notamment un maintien de droits de six mois dans le cadre prévu."],
    ["Tous les droits de base et complémentaires sont prolongés à vie sans justificatif", "Le maintien est limité et soumis au cadre applicable ; il ne constitue pas une garantie permanente sans démarche."],
    ["La personne doit remplacer sa carte personnelle par celle de son conjoint", "Le prêt d'une carte personnelle ne régularise pas les droits ; il faut vérifier sa propre situation avec la caisse."]
  ], "La caisse doit être contactée pour préciser les documents disponibles et le maintien des droits. Les règles de PUMa, C2S et d'autres dispositifs ne doivent pas être fusionnées en une promesse générale et permanente.", "Ne pas supposer une fermeture immédiate ; vérifier le maintien applicable.", "scenario", true);
  q("assurance-maladie", ["H09", "L5"], "Le tiers payant évite l'avance de la part couverte, pas nécessairement tout reste à charge", "Un professionnel pratique seulement le tiers payant sur la part Assurance maladie. Le patient peut-il conclure qu'il ne paiera jamais rien ?", "Non, une part non couverte peut rester à payer selon les droits et le soin", [
    ["Oui, tiers payant signifie remboursement de tout tarif sans aucune limite", "Le tiers payant concerne l'avance de la part directement payée par l'organisme ; il ne rend pas tout prix intégralement couvert."],
    ["Oui, la carte Vitale est une carte bancaire qui règle le reste", "La carte Vitale n'est pas une carte de paiement et ne finance pas automatiquement le reste à charge."],
    ["Non, donc le tiers payant n'évite jamais aucune avance", "Le dispositif évite justement l'avance de la part concernée, même s'il ne couvre pas forcément toute la dépense."]
  ], "Le tiers payant organise un paiement direct au professionnel pour la part prise en charge. Il faut distinguer dispense d'avance, taux de remboursement et couverture complémentaire.", "Ne pas avancer une part n'est pas être remboursé de tout.");
  q("assurance-maladie", ["H09"], "La carte Vitale et le numéro de sécurité sociale sont personnels", "Une personne souhaite prêter sa carte Vitale à un ami qui attend ses propres documents. Que doit-elle retenir ?", "La carte et l'identifiant sont personnels ; l'ami doit faire valoir ses propres droits", [
    ["Le prêt est toujours autorisé entre amis s'ils habitent la même ville", "La proximité géographique ne rend pas la carte interchangeable ; elle identifie une personne et ses droits."],
    ["Le prêt transfère automatiquement la couverture de l'un à l'autre", "Les droits ne se transfèrent pas par la remise de la carte à un tiers."],
    ["Un numéro d'attente oblige à utiliser le numéro de quelqu'un d'autre", "Un numéro d'attente peut permettre le traitement du dossier ; il n'autorise pas l'utilisation de l'identifiant d'une autre personne."]
  ], "La carte Vitale et le numéro de sécurité sociale sont personnels. Attendre une carte ou une immatriculation définitive ne signifie pas qu'il faut emprunter l'identité d'un tiers : la caisse peut préciser les démarches utiles.", "Droits personnels : utiliser son propre dossier, pas la carte d'un ami.");
  q("assurance-maladie", ["H09"], "Une attestation de droits et une carte Vitale ne sont pas le même support", "Une personne doit justifier ses droits à l'Assurance maladie mais attend une nouvelle carte Vitale. Quel document peut notamment être pertinent ?", "Une attestation de droits délivrée par sa caisse, si ses droits sont ouverts", [
    ["Le permis de conduire, qui atteste automatiquement la couverture maladie", "Le permis atteste un droit à conduire ; il ne prouve pas les droits d'assurance maladie."],
    ["Le contrat de location, qui remplace tous les documents de couverture", "Le bail peut justifier une adresse mais ne constitue pas en lui-même une attestation de droits à l'Assurance maladie."],
    ["Une capture du compte ameli d'un voisin", "Les documents et l'espace ameli sont personnels ; ceux d'un voisin ne justifient pas ses propres droits."]
  ], "L'attestation de droits délivrée par la caisse permet de justifier la couverture. Le compte ameli peut faciliter l'obtention de documents ; il ne faut pas confondre carte, identifiant et droits ouverts.", "La carte est un support ; les droits peuvent se justifier autrement.");
  q("assurance-maladie", ["H10"], "L'ouverture PUMa se raisonne personnellement pour chaque adulte", "Un couple prépare sa première ouverture de droits à l'Assurance maladie. Que faut-il retenir de la démarche des adultes ?", "Chaque adulte effectue une demande personnelle selon sa situation ; le rattachement des enfants est distinct", [
    ["La demande d'un époux ouvre automatiquement tous les dossiers adultes sans vérification", "La PUMa organise des droits personnels pour les adultes ; le dossier d'un conjoint ne remplace pas toutes les démarches de l'autre."],
    ["Les enfants mineurs doivent toujours avoir le même dossier autonome qu'un adulte", "Des modalités de rattachement des enfants existent et doivent être distinguées des droits personnels des adultes."],
    ["Une ouverture personnelle interdit aux parents tout rattachement des enfants", "Droits adultes personnels et rattachement des enfants sont compatibles dans les règles applicables."]
  ], "La fiche demande une ouverture personnelle pour chaque adulte et un formulaire de rattachement pour les enfants à charge lorsque nécessaire. Chaque dossier doit correspondre à la situation réelle.", "Adultes : droits personnels ; enfants : modalités de rattachement.");
  q("assurance-maladie", ["H10", "L5"], "Le régime agricole peut relever de la MSA", "Une personne dépend du régime agricole et prépare ses démarches de santé. Quel organisme doit-elle notamment identifier ?", "La MSA, si elle relève de ce régime", [
    ["La CAF, qui remplace toujours l'assurance maladie agricole", "La CAF gère notamment des prestations familiales et sociales ; elle n'est pas l'organisme du régime agricole d'assurance maladie."],
    ["France Travail, qui assure toutes les consultations des agriculteurs", "France Travail accompagne l'emploi ; il ne remplace pas la MSA pour les droits de santé de ce régime."],
    ["La CPAM obligatoirement pour tous les régimes sans exception", "La CPAM gère le régime général localement ; le régime agricole relève de la MSA."]
  ], "La CPAM est l'interlocuteur de nombreux assurés du régime général. La Mutualité sociale agricole gère le régime agricole ; il faut adresser le dossier à l'organisme correspondant.", "Même protection sociale, organismes selon le régime.");
  q("maternite-sante", ["H11", "MATERNITE"], "À partir du sixième mois, la prise en charge renforcée couvre aussi les soins sans lien avec la grossesse", "Une assurée est au septième mois de grossesse et consulte pour un problème non lié à celle-ci. La prise en charge renforcée concerne-t-elle seulement l'obstétrique ?", "Non, les frais médicaux remboursables sont pris en charge à 100 % de la base applicable, liés ou non à la grossesse", [
    ["Oui, seuls les examens directement liés au fœtus sont concernés", "Du sixième mois au douzième jour après l'accouchement, le dispositif concerne les soins remboursables liés ou non à la grossesse."],
    ["Non, tous les produits de bien-être non remboursables deviennent automatiquement couverts", "La règle vise les frais médicaux remboursables, pas tout produit ou service de bien-être."],
    ["Oui, la prise en charge renforcée commence seulement après l'accouchement", "Elle débute au premier jour du sixième mois, avant la naissance."]
  ], "La couverture renforcée va du premier jour du sixième mois jusqu'au douzième jour après l'accouchement. Elle s'applique sur la base et dans la limite des tarifs de l'Assurance maladie, y compris aux soins remboursables non liés à la grossesse.", "À 100 % de la base applicable, pas seulement l'obstétrique.");
  q("maternite-sante", ["H11", "MATERNITE"], "100 % de la base ne garantit pas le remboursement des dépassements", "Une assurée bénéficie de la maternité à 100 % mais son praticien facture un dépassement d'honoraires. Que doit-elle vérifier ?", "La base remboursée et les garanties éventuelles de sa complémentaire pour le dépassement", [
    ["Le 100 % rembourse automatiquement tout prix facturé sans limite", "Le remboursement à 100 % s'effectue sur la base tarifaire applicable ; les dépassements ne sont pas pris en charge par l'Assurance maladie dans ce cadre."],
    ["Aucun soin de grossesse n'est remboursé dès qu'il existe un dépassement", "La part remboursable peut être couverte ; un dépassement ne supprime pas automatiquement toute prise en charge."],
    ["L'assurance automobile rembourse obligatoirement les honoraires", "L'assurance automobile n'est pas une complémentaire santé générale pour ces honoraires."]
  ], "Le taux et la base de remboursement sont différents. Des dépassements ou frais de confort peuvent rester à charge et être éventuellement couverts par le contrat complémentaire.", "100 % : toujours demander de quelle base.");
  q("maternite-sante", ["H11", "MATERNITE"], "Premières échographies et examens obligatoires ne suivent pas tous le même taux", "Une femme compare un examen prénatal obligatoire et les deux premières échographies réalisées avant la fin du cinquième mois. Quelle distinction est correcte ?", "Les examens obligatoires sont pris en charge à 100 % ; ces premières échographies le sont en principe à 70 %", [
    ["Toutes les échographies sont obligatoirement couvertes à 100 % dès le premier jour", "Les deux premières échographies avant la fin du cinquième mois suivent en principe le taux de 70 %, hors situations particulières."],
    ["Les examens prénataux obligatoires sont toujours intégralement à la charge de la patiente", "Ils bénéficient au contraire d'une prise en charge à 100 % dans le cadre et sur la base prévus."],
    ["La troisième échographie n'est jamais remboursable", "La troisième échographie bénéficie normalement d'une prise en charge à 100 % dans la période renforcée."]
  ], "Les examens prénataux obligatoires sont couverts à 100 %. En principe, les deux premières échographies avant la fin du cinquième mois sont à 70 % ; la troisième est à 100 %. Les situations médicales particulières peuvent modifier les examens et leur prise en charge.", "Même grossesse, plusieurs règles de remboursement.", "scenario", true);
  q("maternite-sante", ["H11", "MATERNITE"], "Un examen de prévention dentaire est proposé pendant la grossesse", "Une assurée reçoit une invitation à un examen de prévention bucco-dentaire à partir du quatrième mois de grossesse. Quelle affirmation est correcte ?", "Cet examen de prévention est pris en charge à 100 % sans avance dans les conditions prévues", [
    ["Tous les traitements dentaires futurs sont automatiquement couverts sans limite par cette invitation", "L'invitation vise un examen de prévention ; elle ne garantit pas tout acte et tout dépassement futur sans conditions."],
    ["Il remplace les examens prénataux et les échographies", "La prévention dentaire complète le suivi de grossesse et ne remplace pas les autres examens."],
    ["La grossesse interdit toute consultation dentaire", "Un examen préventif est justement proposé pendant cette période et peut aider à la santé bucco-dentaire."]
  ], "L'Assurance maladie propose un examen de prévention bucco-dentaire à partir du quatrième mois. La patiente suit les modalités de l'invitation ; cet examen ne vaut pas remboursement universel de tous les soins dentaires.", "Une prévention complémentaire, pas un remplacement du suivi prénatal.", "scenario", true);
  q("patient", ["H12"], "Le secret médical continue après le décès", "Après le décès d'un patient, un professionnel veut publier son dossier par curiosité. Le décès supprime-t-il automatiquement le secret médical ?", "Non, le secret médical continue, avec les exceptions et accès légalement encadrés", [
    ["Oui, toutes les données médicales deviennent publiques dès le décès", "La fiche rappelle que le secret continue après la mort ; les accès éventuels sont encadrés."],
    ["Oui, dès qu'un membre de la famille le demande sur un réseau social", "Une demande publique d'un proche ne rend pas tout le dossier librement publiable."],
    ["Non, donc aucun accès légal d'un ayant droit n'est jamais possible", "La confidentialité n'exclut pas tous les accès prévus pour les ayants droit dans les conditions légales."]
  ], "Le secret protège les informations connues dans le cadre des soins, même après le décès. Certaines communications ou certains accès sont autorisés par la loi ; la curiosité ne suffit pas.", "Décès ne signifie pas dossier médical public.");
  q("patient", ["H12"], "Le partage entre soignants est encadré par le besoin de prise en charge", "Deux professionnels participant aux soins doivent échanger des informations utiles au traitement. Le secret médical interdit-il tout échange ?", "Non, un partage peut être permis dans le cadre légal de la prise en charge", [
    ["Oui, même une information nécessaire à la coordination est toujours interdite", "Le secret partagé permet certains échanges nécessaires et encadrés entre professionnels."],
    ["Non, donc tout salarié de l'hôpital peut consulter chaque dossier par curiosité", "Le partage encadré pour les soins ne donne pas un accès général de curiosité à tous les personnels."],
    ["Non, donc le dossier doit être publié pour informer tous les voisins", "Partager pour soigner n'autorise pas une publication générale des informations privées."]
  ], "Le secret médical partagé existe pour les échanges prévus par la loi et utiles à la prise en charge. Il ne doit pas être confondu avec une libre diffusion ou une consultation de curiosité.", "Partager pour soigner n'est pas diffuser à tous.");
  q("patient", ["H12", "R05"], "Une signature ne remplace pas une information compréhensible", "Un patient reçoit un formulaire technique qu'il ne comprend pas avant une intervention. Quelle demande est légitime ?", "Une explication accessible sur l'acte, ses risques pertinents, les alternatives et les conséquences d'un refus", [
    ["Signer suffit toujours, même sans comprendre ce qui est proposé", "Le consentement doit être éclairé ; la seule signature ne remplace pas l'information compréhensible."],
    ["Demander des informations signifie qu'il renonce automatiquement à tout soin", "Poser des questions fait partie du droit à l'information et n'équivaut pas à renoncer aux soins."],
    ["Le patient doit deviner lui-même les alternatives sans pouvoir les demander", "L'information doit inclure les autres options et les conséquences pertinentes pour sa décision."]
  ], "Le droit à l'information soutient un consentement libre et éclairé. Le patient peut demander une explication adaptée et participer aux choix qui le concernent.", "Comprendre pour consentir, pas seulement signer.");
  q("patient", ["H12"], "La personne de confiance accompagne sans remplacer automatiquement la volonté", "Un adulte capable souhaite être accompagné par sa personne de confiance lors d'une discussion médicale. Quel est son rôle ?", "L'aider dans ses démarches et sa compréhension, sans effacer son propre consentement", [
    ["Décider automatiquement à sa place même s'il peut exprimer sa volonté", "La présence d'une personne de confiance ne supprime pas le droit du patient capable de décider."],
    ["Remplacer le médecin pour poser tout diagnostic", "La personne de confiance accompagne ; elle ne remplace pas le professionnel de santé dans sa compétence clinique."],
    ["Obtenir un droit illimité de publier le dossier sur internet", "L'accompagnement ne supprime pas la confidentialité ni les droits du patient sur ses informations."]
  ], "La personne de confiance peut accompagner la personne et l'aider à faire connaître sa volonté dans les situations prévues. Pour un patient capable, son propre consentement demeure central.", "Être aidé dans sa décision n'est pas perdre sa décision.");
  q("patient", ["H12"], "Refuser un soin suppose une information sur les conséquences et les exceptions légales", "Un adulte capable refuse un traitement après information. Quelle affirmation décrit le principe applicable ?", "Son refus doit être pris en compte dans le cadre légal, avec information sur les conséquences", [
    ["Tout refus permet automatiquement de lui retirer tous les autres soins", "Refuser un traitement ne constitue pas une permission de supprimer indistinctement toute prise en charge."],
    ["Le droit de refus interdit toute exception légale, même en soins sans consentement prévus par la loi", "Le principe de consentement s'articule avec des exceptions légalement encadrées ; il ne faut pas affirmer qu'il n'en existe aucune."],
    ["L'avis de l'employeur remplace le refus du patient capable", "L'employeur n'est pas habilité à décider du consentement médical personnel du salarié."]
  ], "Un patient peut refuser un soin et doit recevoir une information adaptée sur les conséquences. Le principe se comprend dans le cadre légal, notamment avec les exceptions strictement prévues.", "Droit de refuser, information loyale, cadre légal.");
  q("patient", ["H12", "R04"], "Soulager la douleur et respecter l'intimité sont des droits de la personne hospitalisée", "Une personne hospitalisée dit qu'elle souffre et demande que son intimité soit préservée. Ces demandes relèvent-elles seulement du confort facultatif ?", "Non, le soulagement de la douleur, la dignité et l'intimité font partie des principes de prise en charge", [
    ["Oui, les droits du patient concernent uniquement les remboursements", "Les droits hospitaliers portent aussi sur les soins, la dignité, la douleur, l'information et la vie privée."],
    ["Oui, une personne hospitalisée perd tout droit à la tranquillité", "La Charte prévoit au contraire le respect de la personne, de son intimité et de sa tranquillité."],
    ["Non, cela lui donne le droit d'imposer tout acte médical contraire aux protocoles", "Ces garanties ne permettent pas d'imposer un acte incompatible avec la sécurité ou l'organisation légale des soins."]
  ], "La Charte de la personne hospitalisée prévoit une attention au soulagement de la douleur et à une vie digne, ainsi que le respect de l'intimité et de la tranquillité. Ces droits s'articulent avec les exigences médicales.", "Les droits du patient vont au-delà d'une facture remboursée.");
  q("patient", ["H12"], "Un consentement spécifique est requis pour la recherche biomédicale", "Un patient accepte ses soins habituels. Cet accord suffit-il automatiquement pour l'inscrire à une recherche biomédicale ?", "Non, la participation à la recherche nécessite une information et un consentement spécifiques", [
    ["Oui, accepter un soin autorise toute recherche future sans information", "Le consentement aux soins ordinaires ne couvre pas automatiquement la participation à une recherche."],
    ["Oui, à condition que l'étude soit intéressante pour l'établissement", "L'intérêt de l'étude ne remplace pas l'information sur les bénéfices, risques et modalités ni le consentement prévu."],
    ["Non, donc refuser l'étude permet de supprimer les soins habituels", "La Charte précise que le refus de recherche n'a pas de conséquence sur la qualité des soins reçus."]
  ], "La recherche biomédicale est soumise à un consentement spécifique, avec information sur les bénéfices attendus et les risques prévisibles. Le refus ne prive pas le patient de soins ordinaires.", "Consentir à être soigné n'est pas consentir à toute étude.");
  q("prevention", ["H13", "H02"], "Le dépistage se propose aussi sans symptômes, selon le risque", "Une personne reçoit une invitation à un dépistage organisé et ne présente aucun symptôme. Est-ce une raison suffisante pour dire que le dépistage ne sert à rien ?", "Non, le dépistage vise notamment à repérer tôt une maladie avant les symptômes", [
    ["Oui, un dépistage ne peut être utile qu'après l'apparition d'une maladie grave", "La détection précoce est précisément sa finalité ; il ne s'agit pas seulement de diagnostiquer une urgence déjà manifeste."],
    ["Non, donc tous les dépistages doivent être faits chaque semaine par toute la population", "Les programmes dépendent des risques, des âges et des recommandations ; l'utilité ne signifie pas un calendrier identique pour tous."],
    ["Oui, un test de dépistage remplace définitivement toute vaccination", "Dépistage et vaccination sont deux outils de prévention distincts et peuvent être complémentaires."]
  ], "Le dépistage recherche une maladie avant les symptômes dans des groupes et calendriers adaptés. Un professionnel peut expliquer le programme proposé et son intérêt selon la situation.", "Pas de symptômes : parfois justement le moment du dépistage.");
  q("prevention", ["H14", "P05", "P06"], "Les obligations vaccinales s'appliquent selon le calendrier pour la vie collective", "Des parents préparent l'entrée d'un enfant en crèche. Quelle vérification de santé doivent-ils notamment faire ?", "Vérifier les vaccinations requises selon le calendrier et les règles applicables à l'enfant", [
    ["La première inscription en collectivité annule toutes les obligations vaccinales", "La vie collective est au contraire un contexte dans lequel les vaccinations requises doivent être vérifiées."],
    ["Tous les enfants ont exactement les mêmes obligations à toute date, sans tenir compte de leur âge", "Le calendrier et les obligations dépendent notamment de l'âge et des règles applicables ; ils doivent être vérifiés."],
    ["Une autorisation du voisin remplace toute justification médicale", "Un voisin n'établit pas les vaccinations ni les éventuelles contre-indications médicales."]
  ], "La vaccination contribue à protéger la personne et la population. Le calendrier et les règles d'accueil collectif doivent être vérifiés avec les professionnels compétents, notamment en cas de contre-indication.", "Vaccination : calendrier adapté et protection collective.");
  q("prevention", ["H14"], "Un bilan de prévention peut concerner une personne qui n'est pas malade", "Une personne éligible à un bilan de prévention se sent bien. Quel est l'intérêt du rendez-vous ?", "Faire le point sur ses habitudes, risques et besoins de suivi pour préserver sa santé", [
    ["Poser automatiquement un diagnostic grave à toute personne présente", "La prévention n'implique pas que toute personne soit déjà malade ; le rendez-vous fait un point sur les habitudes et le suivi."],
    ["Remplacer les soins urgents si un danger vital apparaît pendant plusieurs jours", "Un rendez-vous de prévention ne remplace pas l'alerte et la prise en charge d'une urgence vitale."],
    ["Obtenir tous les examens imaginables sans tenir compte de la situation", "Le bilan vise des conseils et orientations adaptés, pas une prescription indifférenciée de tout examen."]
  ], "Un bilan de prévention aide à identifier les habitudes et risques concernant notamment alimentation, sommeil, activité physique, tabac et santé mentale. L'accès au dispositif se vérifie selon les conditions et tranches d'âge en vigueur.", "Prévention : agir avant la maladie, selon sa situation.");
  q("prevention", ["H15", "PSY"], "Mon soutien psy : un parcours avec un psychologue partenaire, pas tous les professionnels automatiquement", "Une personne souhaite un remboursement dans le dispositif Mon soutien psy. Que doit-elle vérifier ?", "L'éligibilité au dispositif et le choix d'un psychologue partenaire conventionné", [
    ["Tout professionnel portant le mot psy est automatiquement conventionné", "Psychiatre, psychologue et autres appellations ne sont pas identiques ; tous les professionnels ne sont pas partenaires du dispositif."],
    ["Le dispositif exige toujours une condamnation ou une hospitalisation psychiatrique", "Il vise notamment un mal-être ou des troubles légers à modérés dans les conditions prévues, et non exclusivement une hospitalisation."],
    ["Une séance privée non conventionnée devient remboursable dès qu'elle est payée en espèces", "Le mode de paiement ne remplace pas les conditions de conventionnement et de prise en charge."]
  ], "Le dispositif Mon soutien psy permet, sous conditions, un accompagnement avec un psychologue partenaire. Il ne se confond pas avec tous les soins psychiatriques ni avec toute consultation libérale.", "Vérifier le dispositif, les besoins et le professionnel partenaire.");
  q("prevention", ["H15", "PSY"], "Mon soutien psy : jusqu'à douze séances dans le cadre actuel", "Dans le cadre habituel de Mon soutien psy, quel nombre maximal de séances par année civile est prévu dans les règles actuelles ?", "Jusqu'à 12 séances, dont l'entretien d'évaluation, selon les besoins et conditions", [
    ["Toujours 8 séances parce que le dispositif n'a jamais changé", "Le plafond courant est de 12 séances ; les huit séances correspondent à une présentation ancienne du dispositif."],
    ["Douze séances supplémentaires sans compter l'entretien d'évaluation", "L'entretien d'évaluation est inclus dans le total habituel de douze séances, avec jusqu'à onze suivis."],
    ["Un suivi illimité de toute gravité avec tout psychologue sans condition", "Le dispositif a un plafond et des critères ; une situation nécessitant un suivi spécialisé relève d'une orientation adaptée."]
  ], "Le cadre actuel prévoit jusqu'à douze séances par année civile, comprenant l'entretien d'évaluation, avec un psychologue partenaire et selon les besoins. Une situation grave ou urgente ne doit pas attendre ce parcours.", "12 au total dans le cadre habituel, pas l'ancienne limite de 8.", "study", true);
  q("prevention", ["H15", "H05", "A14"], "Prévention du suicide et danger vital immédiat sont à distinguer", "Un proche a besoin d'écoute sur des idées suicidaires ; plus tard, il présente un danger vital immédiat. Quelle distinction est correcte ?", "Le 3114 peut aider pour la prévention ; en danger vital immédiat, appeler le 15 ou le 112", [
    ["Le 3114 rend tout appel médical urgent inutile quelle que soit la situation", "La ligne de prévention ne doit pas être utilisée pour retarder une intervention médicale en danger vital immédiat."],
    ["Le 115 est le seul service de prévention du suicide et de réanimation", "Le 115 concerne l'hébergement d'urgence ; il ne remplace pas les interlocuteurs de prévention du suicide ni les secours médicaux."],
    ["Il faut attendre un rendez-vous chez un psychologue même si la vie est en danger", "Un danger vital exige une alerte immédiate ; le suivi programmé est une autre étape."]
  ], "Le 3114 est la ligne nationale de prévention du suicide. Une situation mettant immédiatement la vie en danger nécessite les secours médicaux adaptés ; écoute, suivi et urgence sont complémentaires.", "Écouter et suivre, mais ne jamais faire attendre l'urgence vitale.");
  q("aider", ["A14"], "En mer : canal 16 de la VHF pour les secours", "À bord d'un bateau équipé d'une radio VHF, une personne doit donner une alerte de secours en mer. Quel canal est le repère d'appel de détresse ?", "Le canal 16 de la VHF", [
    ["Le canal 18 parce que le numéro des pompiers est 18", "Le numéro téléphonique 18 et les canaux VHF sont des repères différents ; le canal de détresse indiqué est le 16."],
    ["Le canal 115 parce qu'il assure l'hébergement des naufragés", "Le 115 est un numéro terrestre d'hébergement d'urgence ; il n'identifie pas le canal VHF d'alerte en mer."],
    ["Le canal 3018, qui est la fréquence générale de secours maritime", "Le 3018 concerne le harcèlement des jeunes, pas un canal maritime de détresse."]
  ], "Le canal 16 sert aux appels de détresse et de sécurité sur la VHF maritime. Depuis le littoral, le 196 permet d'alerter les secours en mer ; les moyens disponibles et la situation doivent être pris en compte.", "Mer : 196 par téléphone depuis le littoral, canal 16 sur la VHF.", "scenario", true);
  q("aider", ["A14"], "Alerter par SMS dans les transports ferroviaires concernés", "Une personne dans un train du réseau concerné ne peut pas téléphoner et veut signaler un danger pour la sécurité. Quel service SMS spécifique existe ?", "Le 31177, en complément du 3117", [
    ["Le 3919, parce qu'il est le service SMS de tous les trains", "Le 3919 est une ligne d'écoute et d'orientation sur les violences faites aux femmes ; ce n'est pas le SMS ferroviaire de sécurité."],
    ["Le 115, qui est le numéro de sécurité ferroviaire", "Le 115 traite l'hébergement d'urgence, pas la sécurité des trains."],
    ["Le 3114, parce que tous les numéros commençant par 31 ont la même mission", "Le 3114 concerne la prévention du suicide ; le 3117 et le 31177 ont une mission spécifique de sécurité ferroviaire."]
  ], "Le 3117 et le SMS au 31177 permettent une alerte de sécurité dans les transports ferroviaires concernés. Ils ne remplacent pas l'appel aux secours adaptés en urgence vitale.", "3117 par téléphone, 31177 par SMS : repères ferroviaires.", "scenario", true);

  // EMPLOI ET FORMATION : décisions concrètes, distinctions et recours.
  reference("VAE", "ads-vae", "Service Public — Validation des acquis de l'expérience", "https://www.service-public.gouv.fr/particuliers/vosdroits/F2401", "society");
  reference("PATERNITE", "ads-paternite", "Service Public — Congé de paternité et d'accueil de l'enfant", "https://www.service-public.gouv.fr/particuliers/vosdroits/F3156", "society");
  reference("PARENTAL", "ads-conge-parental", "Service Public — Congé parental d'éducation dans le secteur privé", "https://www.service-public.gouv.fr/particuliers/vosdroits/F2280", "society");
  reference("NAISSANCE", "ads-conge-naissance-2026", "Service Public — Congé supplémentaire de naissance 2026", "https://www.service-public.gouv.fr/particuliers/vosdroits/F39685", "society");

  q("emploi-orientation", ["E01", "E02", "E03"], "L'orientation professionnelle tient compte aussi des besoins linguistiques et numériques", "Une personne reçoit un questionnaire d'orientation de France Travail et pense que seules ses expériences d'emploi peuvent être utiles. Pourquoi les difficultés en français ou en numérique peuvent-elles aussi être abordées ?", "Pour adapter l'accompagnement, les formations et les aides à ses besoins réels", [
    ["Pour lui interdire automatiquement tout emploi jusqu'à une maîtrise parfaite", "Identifier un besoin d'apprentissage sert à adapter l'accompagnement ; cela ne crée pas une interdiction universelle de travailler."],
    ["Pour remplacer le CV par une enquête médicale sans lien professionnel", "Le questionnaire évoque la situation et les besoins utiles à l'orientation, pas une enquête médicale sans rapport."],
    ["Pour garantir le même programme à tous, sans tenir compte des réponses", "Les réponses sont justement utilisées pour proposer un accompagnement adapté plutôt qu'un programme uniforme."]
  ], "Les compétences linguistiques, numériques, la situation et l'expérience peuvent éclairer le parcours d'accompagnement. Les questions ne doivent pas être confondues avec l'obligation de posséder déjà toutes les compétences.", "Un besoin identifié permet un accompagnement mieux ciblé.");
  q("emploi-orientation", ["E02", "E03"], "L'inscription automatique peut concerner le partenaire d'un demandeur RSA", "Une personne vit en PACS avec quelqu'un qui demande le RSA. Elle pense que l'inscription automatique à France Travail ne peut concerner que celui qui reçoit déjà l'allocation. Quel point doit-elle vérifier ?", "Les règles d'inscription automatique concernent aussi les demandeurs du RSA et leur conjoint ou partenaire dans les cas prévus", [
    ["L'inscription automatique n'existe qu'après dix ans de versement du RSA", "Les fiches décrivent aussi les demandeurs et certains membres du couple ; un tel délai de dix ans n'est pas prévu."],
    ["Le PACS interdit toute relation avec France Travail", "Le statut de partenaire n'exclut pas l'accompagnement ; il peut au contraire être pertinent pour l'inscription automatique décrite."],
    ["L'inscription automatique ouvre toujours une allocation chômage sans autre condition", "Inscription et droit à une indemnisation sont distincts ; l'ARE exige des conditions propres."]
  ], "L'inscription automatique ne se limite pas aux seuls allocataires déjà payés. Les personnes concernées doivent ensuite consulter les informations reçues et suivre l'orientation ; l'indemnisation chômage n'est pas automatique.", "Inscription automatique et versement d'une allocation : ne pas les confondre.");
  q("emploi-orientation", ["E03", "E04"], "Une inscription automatique laisse des démarches de suivi", "Une personne inscrite automatiquement à France Travail reçoit ses accès et un questionnaire. Quelle réaction permet de bénéficier d'un suivi adapté ?", "Consulter son espace et compléter les étapes d'orientation demandées, en sollicitant de l'aide si besoin", [
    ["Ignorer tous les messages car automatique signifie absence définitive de démarche", "L'inscription peut être automatique mais l'orientation, les rendez-vous et les mises à jour nécessitent un suivi."],
    ["Créer plusieurs dossiers avec des identités différentes pour accélérer l'orientation", "Multiplier des identités ne constitue pas une démarche fiable ; le suivi doit correspondre à sa situation réelle."],
    ["Supposer que la première inscription fixe définitivement ses besoins, même s'ils changent", "Les coordonnées et la situation doivent rester à jour pour que le suivi demeure adapté."]
  ], "La personne peut être inscrite sans dépôt initial classique, mais elle doit prendre connaissance des informations reçues et participer aux démarches d'orientation. Une difficulté linguistique ou numérique peut être accompagnée.", "Automatique au départ ne signifie pas sans suivi ensuite.");
  q("emploi-orientation", ["E04"], "Une difficulté à remplir le questionnaire peut être accompagnée", "Une personne cherche un emploi mais comprend mal le questionnaire en ligne. Quelle démarche est pertinente ?", "Demander l'aide de France Travail ou d'un interlocuteur d'accompagnement prévu", [
    ["Abandonner toute démarche parce que l'accompagnement exige un français parfait", "Les services prévoient une aide et une orientation pour les difficultés de compréhension ; la perfection linguistique n'est pas une condition générale d'accompagnement."],
    ["Choisir toutes les réponses au hasard sans signaler les difficultés", "Des réponses au hasard peuvent produire une orientation inadaptée ; demander de l'aide est plus fiable."],
    ["Payer quelqu'un pour transmettre les identifiants personnels à des inconnus", "Les identifiants doivent être protégés ; l'aide doit être recherchée auprès d'interlocuteurs fiables sans exposer inutilement les accès."]
  ], "France Travail peut accompagner les difficultés de langue ou d'utilisation du questionnaire. L'orientation doit partir d'informations compréhensibles et sincères, avec une aide fiable si nécessaire.", "Demander de l'aide vaut mieux qu'une orientation fondée sur le hasard.");
  q("emploi-orientation", ["E05"], "Handicap et emploi : Cap emploi peut accompagner", "Une personne en situation de handicap cherche un accompagnement adapté vers l'emploi. Quel interlocuteur spécialisé peut l'aider ?", "Cap emploi, en articulation avec les autres acteurs selon ses besoins", [
    ["Une Mission locale comme seul interlocuteur obligatoire quel que soit son âge", "Les Missions locales sont principalement destinées aux 16 à 25 ans ; un besoin lié au handicap peut relever aussi de Cap emploi."],
    ["La PMI, qui est spécialisée dans la reconversion de tous les adultes", "La PMI intervient notamment auprès des femmes enceintes et des jeunes enfants ; elle n'est pas le service spécialisé d'emploi des adultes handicapés."],
    ["Le tribunal de police, qui attribue automatiquement un poste", "Le tribunal de police juge les contraventions ; il n'attribue pas des emplois."]
  ], "Cap emploi accompagne les personnes en situation de handicap vers et dans l'emploi dans son champ. La MDPH, France Travail et d'autres acteurs peuvent également intervenir selon leurs missions.", "Identifier le besoin pour trouver le bon réseau d'accompagnement.");
  q("emploi-orientation", ["E05"], "Les PLIE soutiennent l'insertion de personnes rencontrant des difficultés", "Une personne cumule plusieurs difficultés pour accéder à l'emploi et recherche un soutien local. Quel dispositif peut contribuer à organiser son insertion ?", "Un PLIE et les acteurs locaux d'insertion selon le territoire", [
    ["Un CLAT, qui coordonne toutes les recherches d'emploi", "Le CLAT relève de la lutte contre la tuberculose ; le PLIE concerne l'insertion et l'emploi."],
    ["Le seul compte ameli, qui fournit automatiquement un contrat de travail", "Ameli gère des démarches d'assurance maladie ; il ne remplace pas un parcours d'insertion professionnelle."],
    ["Le consulat, qui est nécessairement l'employeur de tous les résidents étrangers", "Un consulat n'est pas l'employeur général des résidents étrangers ; les réseaux locaux d'insertion peuvent être mobilisés."]
  ], "Les Plans locaux pour l'insertion et l'emploi organisent un accompagnement de personnes ayant des difficultés d'accès au travail. CCAS, associations et autres réseaux locaux peuvent compléter ce soutien.", "Insertion locale : plusieurs acteurs, des missions complémentaires.", "scenario", true);
  q("formation", ["E06"], "Se former sur le temps de travail exige de vérifier l'organisation applicable", "Un salarié veut suivre une formation de français pendant ses heures de travail. Quelle démarche est adaptée ?", "Vérifier le dispositif et organiser les absences avec l'employeur selon les règles applicables", [
    ["Mobiliser son CPF autorise automatiquement toute absence sans information", "Le financement par le CPF et l'autorisation ou l'organisation d'une formation sur le temps de travail sont des questions distinctes."],
    ["Une formation de français est toujours interdite aux salariés", "Différents dispositifs permettent cette formation ; les conditions de financement et d'organisation doivent être examinées."],
    ["Les règles sont obligatoirement identiques avec une entreprise et un particulier employeur", "La fiche indique des règles différentes selon les situations ; il ne faut pas généraliser un régime unique."]
  ], "Une formation de français peut être organisée avec l'employeur ou financée par des droits éligibles. Le temps de formation, les absences et le salaire suivent le dispositif et les règles propres à la situation.", "Financer une formation et organiser son absence : deux démarches.");
  q("formation", ["E07"], "L'attestation de comparabilité n'est pas une admission garantie", "Une personne obtient une attestation ENIC-NARIC pour son diplôme étranger. Cela garantit-il son admission dans toute formation française ?", "Non, l'établissement examine l'admission selon ses critères et le parcours demandé", [
    ["Oui, l'attestation impose la même admission dans toutes les universités", "L'attestation situe le diplôme ; elle ne remplace pas la décision de l'établissement et ses conditions d'admission."],
    ["Oui, elle donne automatiquement tous les concours publics sans autre condition", "Les concours et formations ont leurs conditions propres ; l'attestation n'accorde pas un accès universel."],
    ["Non, donc le document ne peut jamais aider à comprendre le niveau de formation", "La comparabilité peut être utile pour situer le diplôme et informer l'établissement ou l'employeur, même sans garantir une admission."]
  ], "L'attestation de comparabilité permet de situer un diplôme dans le système français. L'établissement ou l'employeur conserve l'examen de la situation ; les professions réglementées suivent en outre leurs propres règles.", "Comparer un diplôme n'est pas garantir une admission.");
  q("formation", ["E07"], "Une profession réglementée exige ses autorisations spécifiques", "Une personne possède un diplôme étranger de médecin et une attestation de comparabilité. Peut-elle en déduire qu'elle peut exercer immédiatement en France sans autre vérification ?", "Non, la profession réglementée suit des règles spécifiques de reconnaissance et d'autorisation", [
    ["Oui, l'attestation remplace toujours toute autorisation d'exercice", "Une attestation situant le niveau de formation ne remplace pas les conditions légales d'exercice d'une profession réglementée."],
    ["Oui, dès qu'un ami traduit oralement le diplôme", "Une traduction orale ne confère pas une autorisation d'exercice et ne remplace pas les démarches requises."],
    ["Non, donc aucun diplôme étranger ne peut jamais être examiné", "Des procédures de reconnaissance peuvent exister ; elles doivent être suivies plutôt que déclarées impossibles de manière générale."]
  ], "Les professions réglementées exigent des conditions propres. L'attestation de comparabilité n'est pas une autorisation universelle d'exercer un métier réservé ou réglementé.", "Niveau du diplôme et droit d'exercer : deux vérifications.");
  q("formation", ["E08", "VAE"], "La VAE prend aussi en compte des expériences non salariées", "Une personne a acquis des compétences en bénévolat et comme proche aidant, en lien avec une certification. Ces expériences sont-elles nécessairement exclues de la VAE ?", "Non, des expériences extraprofessionnelles pertinentes peuvent être prises en compte", [
    ["Oui, seules les expériences assorties d'un bulletin de paie sont recevables", "La VAE peut prendre en compte le bénévolat, des responsabilités et d'autres expériences, pas seulement le salariat."],
    ["Non, donc toute expérience garantit automatiquement tout diplôme sans évaluation", "Les compétences doivent être en lien avec la certification et faire l'objet de l'évaluation prévue."],
    ["Oui, toute personne sans diplôme antérieur est exclue de la VAE", "Le niveau de formation initial ne constitue pas une exclusion générale ; la démarche reconnaît justement l'expérience."]
  ], "La VAE fait évaluer les compétences acquises dans des expériences professionnelles ou extraprofessionnelles en lien direct avec la certification. Le diplôme ou les blocs sont attribués selon la décision prévue.", "L'expérience utile ne se limite pas au travail salarié.");
  q("formation", ["E08", "VAE"], "La VAE n'exige plus un minimum général d'un an d'expérience", "Une personne renonce à une VAE parce qu'elle a lu qu'un minimum universel d'un an est obligatoire. Quelle règle actuelle doit-elle vérifier ?", "Ce minimum général d'un an a été supprimé ; l'expérience doit rester pertinente pour la certification", [
    ["Un an reste toujours obligatoire pour tout candidat et toute certification", "Service Public précise qu'il n'est plus nécessaire de justifier d'au moins un an d'expérience en rapport avec la certification."],
    ["La suppression du minimum rend toute certification automatiquement acquise", "La recevabilité et l'évaluation des compétences restent nécessaires ; supprimer un seuil ne garantit pas le résultat."],
    ["La VAE est devenue réservée aux citoyens français ayant déjà un master", "La nationalité et le niveau de formation ne créent pas cette restriction générale."]
  ], "Le minimum général d'un an a été supprimé. Les compétences et expériences doivent néanmoins correspondre au référentiel, et la certification suit sa procédure ; certaines certifications ne sont pas accessibles par VAE.", "Pas de minimum universel d'un an, mais toujours une évaluation.", "scenario", true);
  q("formation", ["E08", "VAE"], "Une certification absente de France VAE peut relever directement du certificateur", "Une personne ne trouve pas la certification visée sur la plateforme France VAE. Peut-elle conclure que toute démarche est impossible ?", "Non, elle doit vérifier la voie et contacter le certificateur compétent, notamment à partir du RNCP", [
    ["Oui, l'absence sur la plateforme interdit toute validation par principe", "La plateforme n'intègre pas toutes les situations ; Service Public prévoit un contact direct avec le certificateur lorsque nécessaire."],
    ["Non, elle peut créer elle-même un faux diplôme équivalent", "La reconnaissance repose sur un certificateur et une évaluation, pas sur la création personnelle d'un diplôme."],
    ["Oui, un agent public n'a jamais le droit de faire reconnaître son expérience", "Les agents publics peuvent avoir une démarche VAE, mais utilisent leurs interlocuteurs et règles propres, pas nécessairement France VAE."]
  ], "Le certificateur est l'organisme compétent pour la certification. La procédure peut passer par France VAE ou directement par cet organisme selon la certification et le statut du candidat.", "Plateforme absente : vérifier la voie, pas conclure automatiquement à l'impossibilité.", "scenario", true);
  q("contrats", ["E09"], "Une rupture conventionnelle suppose un accord et une procédure", "Un employeur veut appeler rupture conventionnelle une décision qu'il impose seul au salarié. Quelle distinction faut-il faire ?", "La rupture conventionnelle repose sur un accord et sa procédure ; ce n'est pas un licenciement renommé", [
    ["Le nom choisi par l'employeur suffit à supprimer toutes les règles de licenciement", "La qualification dépend de la réalité et de la procédure ; changer le nom ne remplace pas les règles."],
    ["Toute démission doit obligatoirement être transformée en rupture conventionnelle", "Démission et rupture conventionnelle sont des modes distincts ; l'une ne devient pas automatiquement l'autre."],
    ["Un CDI ne peut jamais être rompu, même par accord légal", "Un CDI n'a pas de terme prévu, mais peut être rompu selon les modes et procédures légaux."]
  ], "Le licenciement relève de l'initiative de l'employeur, la démission de celle du salarié, et la rupture conventionnelle d'un accord soumis à procédure. Les mots ne permettent pas de contourner les conditions.", "Accord conventionnel n'est pas décision unilatérale rebaptisée.");
  q("contrats", ["E09"], "Un CDI peut être à temps partiel", "Une personne se voit proposer un emploi de 24 heures par semaine en CDI. Est-ce contradictoire ?", "Non, la durée du contrat et le volume hebdomadaire de travail sont deux dimensions distinctes", [
    ["Oui, tout CDI impose obligatoirement 35 heures par semaine", "Un CDI peut être à temps plein ou partiel ; l'absence de terme ne fixe pas seule le volume horaire."],
    ["Non, donc le temps partiel n'a pas besoin d'un écrit", "Le contrat à temps partiel doit être écrit ; distinguer les dimensions ne supprime pas cette exigence."],
    ["Oui, tout temps partiel est nécessairement un contrat d'intérim", "Le temps partiel peut exister dans différentes formes de contrat et ne signifie pas intérim."]
  ], "CDI ou CDD concerne notamment la durée du lien contractuel. Temps plein ou partiel concerne le volume de travail ; un CDI à temps partiel est possible et suit l'exigence d'écrit.", "Durée du lien et durée du travail ne sont pas la même chose.");
  q("contrats", ["E10"], "En intérim, l'employeur et l'entreprise utilisatrice sont distincts", "Un salarié intérimaire effectue une mission dans un entrepôt. Quelle relation faut-il identifier ?", "L'entreprise de travail temporaire est son employeur et l'entrepôt peut être l'entreprise utilisatrice", [
    ["L'entreprise utilisatrice est toujours la seule partie de tout contrat d'intérim", "L'intérim implique l'entreprise de travail temporaire employeur et l'entreprise utilisatrice, avec les contrats correspondants."],
    ["Le salarié devient automatiquement indépendant sans droits de salarié", "L'intérimaire reste un salarié de l'entreprise de travail temporaire ; la mission n'efface pas ce statut."],
    ["La mission annule l'obligation d'un contrat écrit", "Les contrats de mission suivent des exigences d'écrit ; le caractère temporaire ne les supprime pas."]
  ], "L'intérim distingue l'entreprise de travail temporaire, qui emploie, et l'entreprise utilisatrice, où la mission est effectuée. Ce cadre entraîne des obligations pour les parties.", "Lieu de mission et employeur ne sont pas forcément identiques.");
  q("contrats", ["E10", "E15"], "Les plafonds de travail s'apprécient pour le cumul d'emplois", "Une personne cumule deux emplois salariés de 30 heures par semaine chacun, sans dérogation. Peut-elle affirmer que les plafonds sont respectés parce que chaque contrat est inférieur à 35 heures ?", "Non, les durées doivent être appréciées sur l'ensemble des emplois pour respecter les plafonds applicables", [
    ["Oui, chaque employeur dispose d'un plafond totalement indépendant sans cumul", "Les durées maximales doivent aussi être respectées lorsque les heures sont réalisées auprès de plusieurs employeurs."],
    ["Oui, 35 heures est le maximum absolu pour chaque contrat mais il n'y a aucun maximum total", "Les 35 heures sont une référence de durée légale ; des plafonds de durée maximale existent et ne disparaissent pas lors d'un cumul."],
    ["Non, toute seconde activité est interdite même sans clause ni concurrence", "Le cumul peut être permis dans les conditions prévues ; ce n'est pas une interdiction générale de tout deuxième emploi."]
  ], "Le cumul d'emplois est possible sous conditions, dont les durées maximales, la loyauté et les clauses valides. Soixante heures régulières ne deviennent pas licites simplement parce qu'elles sont réparties entre deux employeurs.", "Deux contrats n'offrent pas deux plafonds sans limite.");
  q("contrats", ["E10"], "Une activité concurrente peut poser un problème de loyauté", "Un salarié veut cumuler un emploi avec une activité directement concurrente de son employeur. Quel point doit-il vérifier ?", "Ses obligations de loyauté et les clauses applicables avant de commencer", [
    ["Le cumul autorise toujours à utiliser les fichiers confidentiels du premier employeur", "Le cumul ne supprime ni la loyauté ni la protection des informations de l'employeur."],
    ["Une activité concurrente est forcément autorisée dès qu'elle se fait le week-end", "Le moment de l'activité ne suffit pas à écarter la loyauté et les clauses légalement applicables."],
    ["Toute clause d'exclusivité est valide sans aucune condition dans tout contrat", "Les clauses doivent être valides au regard des règles applicables ; il ne faut pas généraliser une interdiction contractuelle sans contrôle."]
  ], "Le cumul doit respecter le cadre contractuel et légal, dont la loyauté. Une activité concurrente ou une clause d'exclusivité appelle une vérification des conditions, pas une conclusion automatique.", "Cumuler ne permet pas de contourner la loyauté.");
  q("contrats", ["E10"], "Le contrat de professionnalisation associe travail et formation", "Une personne veut acquérir une qualification tout en travaillant dans le cadre d'une formation en alternance. Quel contrat cité par la fiche correspond à cet objectif ?", "Un contrat de professionnalisation", [
    ["Un contrat d'extra, qui remplace obligatoirement une formation qualifiante", "L'extra est un CDD d'usage pour une tâche temporaire dans certains secteurs ; il ne garantit pas un parcours de qualification en alternance."],
    ["Un bail de logement, qui organise automatiquement l'alternance professionnelle", "Un bail concerne la location d'un logement, pas la relation de travail et de formation."],
    ["Une convention qui supprime le statut de salarié pendant toute formation", "Le contrat de professionnalisation organise précisément un travail salarié associé à la formation."]
  ], "Le contrat de professionnalisation associe activité salariée et formation pour acquérir une qualification, selon ses conditions propres.", "Alternance : travail et qualification dans un cadre défini.");
  q("contrats", ["E11", "L5"], "Créer une activité peut nécessiter une qualification selon le métier", "Une personne veut ouvrir une activité artisanale soumise à une qualification. Peut-elle affirmer qu'aucun diplôme ni condition n'est jamais nécessaire pour créer une entreprise ?", "Non, les exigences dépendent de l'activité et de sa réglementation", [
    ["Oui, immatriculer une entreprise donne automatiquement toutes les autorisations d'exercice", "L'immatriculation ne remplace pas les qualifications ou autorisations propres à certaines activités."],
    ["Non, toutes les activités exigent obligatoirement un diplôme de médecine", "Il n'existe pas une qualification unique pour tous les secteurs ; les exigences varient selon le métier."],
    ["Oui, si l'entreprise ne compte aucun salarié", "L'absence de salarié ne supprime pas les conditions d'exercice d'une activité réglementée."]
  ], "La création d'entreprise est possible sous les conditions de statut et d'activité. Certains métiers exigent une qualification ou une autorisation ; d'autres ne nécessitent pas de diplôme spécifique.", "Créer l'entreprise et avoir le droit d'exercer : deux points à vérifier.");
  q("contrats", ["E11", "L5"], "Artisanat et commerce n'ont pas le même objet principal", "Deux projets sont comparés : produire et transformer des biens artisanalement, ou acheter des produits pour les revendre. Quelle distinction est correcte ?", "Le premier relève notamment de l'artisanat ; le second du commerce", [
    ["Tout achat pour revente est nécessairement une profession libérale médicale", "Le commerce se caractérise notamment par des opérations d'achat pour revente ; cela ne constitue pas une activité médicale libérale."],
    ["Toute activité artisanale est un emploi salarié de la mairie", "L'artisanat peut être une activité indépendante de production, transformation ou prestation de services."],
    ["Les deux projets ont toujours les mêmes règles et formalités sans aucune différence", "Les secteurs et formes d'activité peuvent entraîner des qualifications, formalités et règles propres."]
  ], "Le Livret distingue artisanat, commerce, professions libérales et activité agricole. La nature de l'activité aide à déterminer les règles et interlocuteurs compétents.", "Le secteur du projet compte pour les règles à vérifier.", "study", true);
  q("contrats", ["E11", "L5"], "CCI et CMA peuvent accompagner un projet entrepreneurial", "Une personne prépare la création d'une activité commerciale ou artisanale et cherche un accompagnement. Quel ensemble d'interlocuteurs peut être utile ?", "La CCI ou la CMA selon l'activité, ainsi que les dispositifs d'accompagnement adaptés", [
    ["Le conseil de prud'hommes, qui crée automatiquement les sociétés", "Le conseil de prud'hommes juge des litiges individuels du travail ; il n'immatricule pas les sociétés à la place de leurs créateurs."],
    ["La PMI, qui est la chambre de commerce de toutes les communes", "La PMI est un service de protection maternelle et infantile, pas une chambre consulaire économique."],
    ["La banque seule, qui remplace toute étude de marché et toute formalité", "Un financement bancaire ne remplace pas la préparation du projet ni les formalités légales."]
  ], "Les chambres de commerce et d'industrie et les chambres de métiers et de l'artisanat peuvent apporter conseils et accompagnement selon leur champ. D'autres associations et réseaux aident aussi à préparer et financer le projet.", "Projet entrepreneurial : trouver les acteurs du secteur.");
  q("candidature", ["E12"], "Les offres publiques disposent d'un portail spécialisé", "Une personne cherche spécifiquement des offres dans le service public. Quel portail cité par la fiche peut lui être utile ?", "Choisir le service public", [
    ["L'industrie recrute, qui ne diffuse que des concours de toute la fonction publique", "Ce portail est consacré à l'industrie ; ce n'est pas le portail général des offres publiques."],
    ["Mon compte formation, qui attribue automatiquement tous les emplois publics", "Le CPF sert à financer des formations éligibles ; il n'attribue pas les emplois publics."],
    ["Ameli, qui remplace le recrutement de tous les ministères", "Ameli est un service de l'Assurance maladie, pas le portail de recrutement de toutes les administrations."]
  ], "Il existe des sites généralistes et spécialisés par secteur. Choisir le service public présente les offres publiques ; une candidature doit ensuite suivre les conditions indiquées.", "Rechercher un poste : choisir un portail correspondant au secteur.", "study", true);
  q("candidature", ["E12", "E14"], "Une candidature peut aussi être déposée en personne", "Une personne veut rencontrer des recruteurs mais utilise difficilement internet. Quelle possibilité est mentionnée par la fiche ?", "Participer à un forum ou salon de l'emploi, ou remettre une candidature en personne lorsque cela convient", [
    ["Toute candidature en personne est illégale depuis la généralisation d'internet", "La fiche mentionne précisément plusieurs voies non numériques pour transmettre une candidature."],
    ["Un forum de l'emploi dispense toujours de présenter ses compétences", "Le contact direct ne supprime pas l'intérêt d'une présentation adaptée et d'une préparation."],
    ["Remettre une candidature oblige automatiquement l'entreprise à embaucher", "Une candidature permet un examen du profil ; elle ne crée pas une obligation automatique d'embauche."]
  ], "Internet n'est pas la seule voie : entreprises, forums et salons permettent aussi des échanges directs. La préparation du CV et de la présentation demeure utile.", "Plusieurs canaux de candidature, la même nécessité de préparer son profil.");
  q("candidature", ["E13", "E17", "L5"], "Demander un diplôme pertinent n'est pas une discrimination en soi", "Un emploi exige une qualification précise et l'employeur demande le diplôme correspondant. Est-ce nécessairement discriminatoire ?", "Non, une exigence pertinente liée aux compétences du poste peut être légitime", [
    ["Oui, toute différence de qualification doit être ignorée par un recruteur", "La sélection peut tenir compte des compétences et qualifications nécessaires ; l'égalité n'oblige pas à ignorer les exigences légitimes du poste."],
    ["Non, donc le recruteur peut aussi exiger toute information privée sans lien avec l'emploi", "Une demande légitime de qualification n'autorise pas toutes les questions privées ; les informations doivent avoir un lien direct et nécessaire avec le poste."],
    ["Oui, le diplôme peut être demandé uniquement après le départ à la retraite", "Le recruteur peut vérifier les qualifications nécessaires dans la procédure d'embauche ; il n'a pas à attendre la retraite."]
  ], "La discrimination repose sur un critère interdit dans une décision défavorable. Une qualification pertinente peut être exigée ; les demandes d'information doivent rester liées à l'emploi.", "Critère professionnel pertinent ou critère interdit : savoir les distinguer.");
  q("candidature", ["E13", "E17"], "Une question privée sans lien avec le poste n'est pas justifiée par l'entretien", "Lors d'un entretien, un recruteur demande des détails sur les projets de grossesse d'une candidate sans lien avec le travail proposé. Quel point est en cause ?", "Les informations demandées doivent avoir un lien direct et nécessaire avec le poste", [
    ["Un entretien autorise automatiquement toute question sur la vie privée", "Le contexte de recrutement ne supprime pas les limites protégeant la vie privée et contre les discriminations."],
    ["La grossesse est toujours une compétence professionnelle à vérifier pour tous les postes", "Les projets de grossesse ne constituent pas une qualification générale pour l'emploi."],
    ["Le recruteur ne peut jamais poser de question sur une expérience pertinente", "Les questions professionnelles utiles au poste peuvent être légitimes ; il faut les distinguer des informations privées sans lien."]
  ], "Le recrutement permet de vérifier les aptitudes et compétences liées au poste. Il ne donne pas un accès illimité à la vie privée et ne doit pas fonder une décision sur un critère interdit comme la grossesse.", "Évaluer le profil professionnel, pas imposer une enquête privée.");
  q("candidature", ["E14"], "La motivation doit être reliée aux besoins du poste", "Une lettre de motivation répète seulement le CV sans montrer ce qui intéresse dans le poste. Comment l'améliorer ?", "Relier son intérêt et des exemples de compétences aux besoins de l'entreprise", [
    ["Ajouter uniquement des détails privés sans rapport pour allonger la lettre", "Une lettre utile sélectionne des éléments pertinents ; la longueur et les détails privés ne remplacent pas l'adéquation au poste."],
    ["Copier le même texte sans vérifier l'offre pour toutes les entreprises", "L'adaptation aux besoins de l'offre aide à montrer la compréhension du poste et la contribution proposée."],
    ["Inventer une expérience déterminante pour sembler plus convaincant", "Une candidature doit rester véridique ; inventer une expérience peut avoir des conséquences professionnelles."]
  ], "La lettre explique l'intérêt pour l'offre, présente des exemples adaptés et montre ce que la personne peut apporter. Elle vise à obtenir un échange et peut être relue avec une personne de confiance.", "Motivation : pourquoi ce poste et ce que vous pouvez apporter.");
  q("travail", ["E15", "E16"], "Heures supplémentaires et durée maximale sont deux notions", "Un salarié à temps complet travaille ponctuellement au-delà de 35 heures dans les règles applicables. Quel point doit-il distinguer ?", "Le traitement des heures supplémentaires et le respect des plafonds de durée de travail", [
    ["Payer les heures supplémentaires permet de dépasser toute durée maximale sans limite", "La rémunération ne supprime pas les limites et les règles de repos ; les plafonds doivent aussi être respectés."],
    ["Toute heure au-delà de 35 est interdite sans exception", "Les 35 heures constituent une référence légale ; des heures supplémentaires peuvent être réalisées dans le cadre prévu."],
    ["Toute heure supplémentaire devient automatiquement une activité indépendante", "Elle reste du travail salarié soumis aux règles du contrat et de la durée du travail."]
  ], "La durée légale de référence n'est pas la durée maximale. Les heures supplémentaires suivent des règles de majoration ou repos et n'autorisent pas à écarter les plafonds et protections.", "35 heures : référence ; plafonds : limites à respecter.");
  q("travail", ["E15"], "Une convention collective adapte des règles à une activité", "Un salarié cherche les règles particulières de salaires minimaux et congés de son secteur. Quel document doit-il notamment consulter ?", "La convention collective applicable à son activité", [
    ["Uniquement le règlement intérieur, qui fixe librement tous les salaires sans limite", "Le règlement intérieur porte notamment sur santé, sécurité et discipline ; il ne remplace pas les règles de salaire et la convention collective."],
    ["Le bail de son logement, qui définit les congés de tous les métiers", "Le bail organise la location et ne fixe pas les règles de travail du secteur."],
    ["Une convention de n'importe quel autre secteur sans vérifier son application", "La convention doit être celle applicable ; un texte d'une autre activité ne s'applique pas automatiquement."]
  ], "Le Code du travail pose les règles générales et la convention collective applicable adapte certains aspects à l'activité. Le règlement intérieur a un champ propre et doit rester conforme aux règles supérieures.", "Chercher le texte applicable à son secteur, pas un texte au hasard.");
  q("travail", ["E16"], "Brut, net et durée doivent être distingués pour comprendre un salaire", "Un salarié compare le montant versé sur son compte avec un minimum annoncé en brut. Que doit-il vérifier ?", "La différence brut/net, la durée de travail et les règles salariales applicables", [
    ["Le brut et le net sont toujours identiques pour tous les salariés", "Les cotisations et prélèvements peuvent entraîner une différence ; il faut lire le bulletin et comparer des montants de même nature."],
    ["Un chiffre mensuel de SMIC ancien s'applique définitivement à tout horaire", "Le SMIC évolue et la durée de travail compte ; un montant ancien ne décrit pas toutes les situations."],
    ["Le paiement sur un compte bancaire remplace le bulletin de paie", "Le bulletin de paie reste obligatoire et donne les informations permettant de comprendre le salaire."]
  ], "Le salaire doit respecter les minima applicables, avec les éventuelles règles particulières prévues. La comparaison doit porter sur des bases cohérentes : brut/net, temps de travail et date du minimum.", "Comparer le même montant, la même durée et la bonne date.");
  q("travail", ["E16"], "Le bulletin électronique peut être refusé par le salarié", "Un employeur remet les bulletins de paie sous forme électronique. Quelle affirmation correspond à la fiche ?", "Ce mode est possible, mais le salarié peut s'y opposer dans le cadre prévu", [
    ["Le format électronique supprime l'obligation de remettre tout bulletin", "Le format change le support, pas l'obligation de fournir le document."],
    ["Le salarié ne peut jamais refuser ce mode de remise", "La fiche indique que le bulletin électronique est possible sauf refus du salarié, selon les modalités applicables."],
    ["Un message indiquant seulement le prénom vaut toujours bulletin conforme", "Un bulletin doit contenir les informations obligatoires ; un message minimal ne les remplace pas."]
  ], "L'employeur peut remettre un bulletin électronique dans le cadre prévu et le salarié peut s'y opposer. Le document doit toujours respecter les mentions obligatoires et interdites.", "Changer le support ne change pas l'obligation ni les mentions.", "scenario", true);
  q("travail", ["E16"], "La liberté syndicale protège l'adhésion et la non-adhésion", "Un employeur veut imposer à tous les salariés l'adhésion à un syndicat choisi par lui. Quelle règle doit être respectée ?", "Chaque salarié est libre d'adhérer ou de ne pas adhérer à un syndicat", [
    ["L'employeur peut choisir le syndicat personnel de chaque salarié", "La liberté syndicale appartient au salarié ; elle ne permet pas une adhésion imposée par l'employeur."],
    ["La liberté protège seulement l'adhésion, jamais le refus d'adhérer", "La fiche protège les deux choix : personne ne peut obliger à rejoindre un syndicat ni punir une adhésion."],
    ["Tout salarié syndiqué perd automatiquement son droit à un salaire", "L'appartenance syndicale ne supprime pas les droits du contrat de travail."]
  ], "La liberté syndicale couvre la création, l'adhésion et la participation, ainsi que le choix de ne pas adhérer. Une sanction fondée sur cette seule appartenance ou ce refus n'est pas légitime.", "Libre d'adhérer, libre de ne pas adhérer.");
  q("travail", ["E17"], "Stagiaires et apprentis sont aussi protégés contre la discrimination", "Un stagiaire subit une décision défavorable uniquement en raison de son origine. L'employeur dit que seuls les salariés permanents sont protégés. Est-ce exact ?", "Non, stagiaires et apprentis sont aussi protégés contre les discriminations", [
    ["Oui, seul un CDI ouvre cette protection", "La fiche inclut salariés, stagiaires et apprentis ; le CDI n'est pas la condition exclusive de protection."],
    ["Oui, une discrimination devient légale pendant une formation", "La formation n'autorise pas une décision fondée sur un critère interdit."],
    ["Non, donc toute évaluation négative de compétences est automatiquement une discrimination", "Une évaluation pertinente de compétences n'est pas nécessairement discriminatoire ; il faut identifier la décision et le critère interdit."]
  ], "La protection contre la discrimination s'étend aux différentes personnes travaillant dans l'entreprise, dont stagiaires et apprentis. Elle doit être distinguée d'une appréciation professionnelle objectivement pertinente.", "Statut temporaire ne veut pas dire droits inexistants.");
  q("travail", ["E17", "E18"], "Signaler une discrimination de bonne foi est protégé", "Une personne témoigne de bonne foi d'une discrimination, mais celle-ci n'est pas ensuite établie. Le seul défaut de preuve autorise-t-il automatiquement une sanction pour mensonge ?", "Non, l'absence de preuve ne signifie pas automatiquement mauvaise foi ou mensonge volontaire", [
    ["Oui, tout signalement non confirmé est forcément une dénonciation mensongère", "Une erreur ou un fait non établi ne prouve pas en soi que la personne savait sa déclaration fausse."],
    ["Oui, seules les victimes ayant déjà un jugement peuvent signaler", "Le signalement et les recours permettent précisément de faire examiner les faits avant un jugement."],
    ["Non, donc fabriquer sciemment des faits bénéficie de la même protection", "La bonne foi doit être distinguée d'une fabrication volontaire ; la protection n'autorise pas à inventer sciemment."]
  ], "Le signalement de bonne foi est protégé. Il faut distinguer une déclaration sincère qui n'aboutit pas d'un mensonge volontaire ; l'absence de preuve n'est pas à elle seule la mauvaise foi.", "Non établi ne veut pas automatiquement dire inventé sciemment.");
  q("travail", ["E18", "E16"], "Inspection du travail et prud'hommes n'ont pas la même fonction", "Un salarié demande le paiement d'un salaire impayé dans un litige individuel de droit privé. Quelle juridiction peut juger sa demande ?", "Le conseil de prud'hommes", [
    ["L'inspection du travail, qui prononce elle-même tous les jugements de salaire", "L'inspection informe et contrôle ; elle n'est pas la juridiction qui juge ces litiges individuels et fixe une condamnation civile."],
    ["Le service téléphonique de renseignements, qui remplace toujours un tribunal", "Le service répond à des questions juridiques mais ne rend pas un jugement."],
    ["Le tribunal de police, qui juge tout contrat de travail", "Le tribunal de police concerne les contraventions ; le litige individuel du contrat privé relève principalement des prud'hommes."]
  ], "Le conseil de prud'hommes juge principalement les litiges individuels liés au contrat de travail de droit privé. L'inspection du travail contrôle la réglementation et les renseignements juridiques orientent : les rôles sont distincts.", "Informer, contrôler, juger : trois fonctions.");
  q("travail", ["E18"], "Le service de renseignements informe sans intervenir lui-même dans l'entreprise", "Un salarié appelle le 0 806 000 126 pour comprendre une règle de travail. Quelle est la mission de ce service ?", "Répondre à des questions juridiques en droit du travail, sans intervenir lui-même dans l'entreprise", [
    ["Prononcer immédiatement un licenciement ou une indemnité comme un tribunal", "Le service renseigne ; il ne remplace pas une juridiction ni la procédure nécessaire à une décision."],
    ["Assurer les contrôles sur place de l'inspection du travail pendant l'appel", "L'information téléphonique et l'intervention de contrôle de l'inspection sont des missions distinctes."],
    ["Attribuer automatiquement l'ARE à tous les appelants", "L'indemnisation chômage relève de France Travail et de conditions propres, pas de ce service de renseignements."]
  ], "Le service de renseignements en droit du travail explique les règles. Contrairement à l'inspection, il n'intervient pas dans l'entreprise ; il ne juge pas non plus le litige.", "Un conseil juridique par téléphone n'est ni un contrôle ni un jugement.", "scenario", true);
  q("travail", ["E19"], "Un bulletin minorant volontairement les heures peut constituer du travail dissimulé", "Un employeur déclare volontairement 20 heures alors que le salarié en réalise 35. Le fait d'avoir un bulletin suffit-il à exclure le travail dissimulé ?", "Non, la minoration volontaire des heures peut constituer du travail dissimulé", [
    ["Oui, la présence de tout bulletin rend la déclaration correcte", "Un bulletin peut lui-même dissimuler des heures ; sa présence ne prouve pas que toutes les informations sont sincères."],
    ["Oui, dès que le salarié est payé par virement", "Le mode de paiement ne remplace pas la déclaration exacte des heures et les obligations sociales."],
    ["Non, donc le salarié n'a plus aucun droit de réclamer les heures", "La dissimulation ne supprime pas toute possibilité de faire reconnaître le travail et de réclamer les droits applicables."]
  ], "Le travail dissimulé peut consister à ne pas déclarer l'emploi ou à minorer volontairement les heures. Le salarié peut conserver légalement les éléments utiles et demander conseil pour faire reconnaître ses droits.", "Un document présent peut quand même contenir une dissimulation.");
  q("travail", ["E19", "E16", "E18"], "Le travail dissimulé n'efface pas tous les droits du salarié", "Une personne découvre que son emploi n'est pas déclaré. L'employeur lui dit qu'elle ne peut donc saisir aucun juge. Que faut-il retenir ?", "Elle peut chercher à faire reconnaître la relation de travail et demander les droits applicables", [
    ["L'absence de déclaration rend le contrat invisible à toute juridiction", "La preuve de la relation de travail peut permettre une reconnaissance ; l'employeur ne peut pas écarter tout recours par sa propre dissimulation."],
    ["Elle doit fabriquer un faux bulletin pour avoir le droit de demander conseil", "Il faut conserver ou réunir légalement des éléments sincères, pas fabriquer de faux documents."],
    ["La non-déclaration garantit automatiquement une indemnité identique dans toute situation", "Les droits et indemnités dépendent de la qualification, des faits et des conditions légales ; une somme universelle ne doit pas être promise."]
  ], "Le travail dissimulé fragilise l'accès effectif aux protections et peut entraîner des sanctions. Il ne rend pas tous les droits du salarié inexistants ; un conseil adapté et la preuve de l'activité peuvent être utiles.", "Une faute de déclaration de l'employeur ne supprime pas tout recours.");
  q("travail", ["L5", "PATERNITE"], "Naissance simple : distinguer paternité et congé de naissance", "Pour un salarié du secteur privé lors d'une naissance simple, quelle distinction explique le repère souvent résumé en 28 jours ?", "25 jours calendaires de paternité et d'accueil, auxquels s'ajoutent 3 jours ouvrables de naissance", [
    ["28 jours calendaires de paternité, auxquels s'ajoutent encore 25 jours", "Le résumé de 28 ne correspond pas à deux congés de 28 et 25 jours ; le congé de paternité habituel est de 25 jours calendaires."],
    ["25 jours ouvrables de naissance et 3 jours calendaires de paternité", "Les durées et décomptes sont inversés : 25 calendaires de paternité et 3 ouvrables de naissance."],
    ["Un congé de 28 jours identique pour toute naissance multiple et tout statut", "Les naissances multiples et différents statuts peuvent suivre des règles particulières ; il ne faut pas universaliser ce résumé."]
  ], "Dans le secteur privé et pour une naissance simple, les 25 jours calendaires de paternité et d'accueil s'ajoutent aux trois jours ouvrables de naissance. Les deux décomptes ne doivent pas être fusionnés sans explication.", "25 calendaires + 3 ouvrables : deux congés, deux décomptes.", "study", true);
  q("travail", ["L5", "PATERNITE"], "Le congé d'accueil de l'enfant peut concerner le conjoint de la mère", "Un salarié vit en couple avec la mère d'un enfant sans être son père biologique. Quelle règle doit-il vérifier pour le congé de paternité et d'accueil ?", "Le congé peut aussi bénéficier au conjoint, partenaire ou concubin de la mère dans les conditions prévues", [
    ["Seul le père biologique marié peut en bénéficier dans tous les cas", "Le dispositif d'accueil vise aussi la personne vivant en couple avec la mère dans les conditions prévues."],
    ["Tout voisin du foyer dispose automatiquement du même congé", "Le droit ne s'étend pas indistinctement à tous les proches ou voisins ; il dépend de la situation prévue par la loi."],
    ["L'absence de lien biologique supprime tous les congés possibles après une naissance", "Les droits d'accueil et d'adoption montrent qu'ils ne se réduisent pas au seul lien biologique."]
  ], "Le congé comprend l'accueil de l'enfant et peut bénéficier à la personne vivant en couple avec la mère selon les règles. Il faut vérifier le statut et les justificatifs requis, sans le limiter aux seuls pères biologiques mariés.", "Accueil de l'enfant : un droit qui ne se résume pas au père biologique.", "scenario", true);
  q("travail", ["L5", "PARENTAL"], "Congé parental et prestation financière sont distincts", "Un parent prend un congé parental d'éducation. Peut-il conclure que son salaire habituel et une prestation seront automatiquement versés pendant toute sa durée ?", "Non, le congé et l'indemnisation ou les prestations suivent des conditions et durées distinctes", [
    ["Oui, tout congé parental est obligatoirement rémunéré à salaire complet par l'employeur", "Le congé parental n'entraîne pas ce maintien universel de salaire ; les prestations éventuelles doivent être vérifiées séparément."],
    ["Oui, la durée de la PreParE est toujours exactement celle du congé", "Service Public précise que les durées peuvent ne pas coïncider ; le congé peut être plus long que le versement."],
    ["Non, donc aucun père ne peut demander un congé parental", "Le congé peut concerner le père ou la mère remplissant les conditions ; la question financière ne supprime pas cette possibilité."]
  ], "Le congé parental permet d'arrêter ou de réduire l'activité selon les règles. Les prestations, notamment la PreParE, ont leurs propres conditions et durées ; le droit à congé n'est pas une promesse de salaire complet.", "Temps d'absence et argent versé : vérifier les deux séparément.");
  q("travail", ["L5", "NAISSANCE"], "Le congé supplémentaire de naissance 2026 s'ajoute aux congés existants", "Un parent éligible a un enfant en 2026. Quel est l'objet du nouveau congé supplémentaire de naissance applicable depuis juillet 2026 ?", "Offrir un congé indemnisé supplémentaire, sans remplacer les congés maternité, paternité ou adoption", [
    ["Supprimer le congé de maternité et le remplacer par trois jours", "Le nouveau congé s'ajoute aux congés existants ; il ne les supprime pas."],
    ["Accorder automatiquement le même congé à toute personne sans condition liée à une naissance ou adoption", "Le droit vise les parents et situations prévus, avec des conditions d'ouverture et de délai."],
    ["Transformer le congé parental d'éducation en salaire complet obligatoire", "Le congé supplémentaire de naissance est distinct du congé parental et de ses prestations."]
  ], "Le congé supplémentaire de naissance est mis en œuvre depuis le 1er juillet 2026. Les parents éligibles d'enfants nés ou accueillis selon les conditions prévues peuvent en bénéficier en plus des congés existants.", "Nouveau en 2026 : supplémentaire, pas remplaçant.", "scenario", true);
  q("travail", ["L5", "NAISSANCE"], "Le nouveau congé peut être pris par chacun des deux parents éligibles", "Deux parents remplissent les conditions du congé supplémentaire de naissance 2026. Doivent-ils se partager obligatoirement un seul mois total ?", "Non, chacun peut choisir 1 ou 2 mois, simultanément ou en alternance dans le cadre prévu", [
    ["Oui, un seul mois est disponible pour tout le foyer quels que soient les droits de chaque parent", "Le dispositif prévoit une durée pour chaque parent éligible, pas un unique mois à partager dans tous les cas."],
    ["Non, chacun peut interrompre son activité sans limite jusqu'aux 18 ans de l'enfant dans ce dispositif", "Le congé supplémentaire a une durée et une période de prise encadrées ; il ne se confond pas avec tous les autres congés familiaux."],
    ["Oui, les deux parents doivent obligatoirement prendre les jours exactement en même temps", "Le dispositif permet une prise simultanée ou alternée selon les conditions, pas une simultanéité obligatoire."]
  ], "Chaque parent éligible peut choisir un ou deux mois de congé supplémentaire. Les prises peuvent être simultanées ou alternées. Un congé de deux mois peut être fractionné en deux périodes non consécutives d'un mois.", "Un droit par parent éligible, avec des modalités de prise.", "scenario", true);

  // PARENTALITÉ, ÉCOLE ET NUMÉRIQUE.
  reference("FAMILLE", "ads-autorite-parentale", "Service Public — Exercice de l'autorité parentale", "https://www.service-public.gouv.fr/particuliers/vosdroits/F3132", "society");
  reference("GARDE", "ads-garde-enfants", "Service Public — Faire garder ses enfants", "https://www.service-public.gouv.fr/particuliers/vosdroits/F601", "society");
  reference("INSTRUCTION", "ads-instruction", "Service Public — Instruction obligatoire et formation de 16 à 18 ans", "https://www.service-public.gouv.fr/particuliers/vosdroits/F1898", "society");
  reference("HERITAGE", "ads-reserve-hereditaire", "Service Public — Héritage lorsque le défunt a des enfants", "https://www.service-public.gouv.fr/particuliers/vosdroits/F1270", "society");
  reference("PARENTE", "ads-mariage-parente", "Service Public — Mariage et liens de parenté", "https://www.service-public.gouv.fr/particuliers/vosdroits/F802", "society");
  reference("EUCHARTE", "ads-charte-europeenne-integrite", "Union européenne — Charte des droits fondamentaux, article 3", "https://www.europarl.europa.eu/charter/pdf/text_fr.pdf", "rights");

  q("enfant", ["P01", "P02", "L5"], "Écouter l'enfant n'enlève pas le devoir de le protéger", "Un enfant jeune veut entreprendre une activité dangereuse sans encadrement. Comment ses parents doivent-ils articuler son avis et leur responsabilité ?", "L'écouter selon son âge et sa maturité, tout en prenant une décision qui protège son intérêt et sa sécurité", [
    ["Son droit d'être entendu oblige à accepter toute demande, même dangereuse", "Être entendu ne signifie pas décider sans protection ; les parents demeurent responsables de la sécurité et de l'intérêt de l'enfant."],
    ["La protection autorise à ignorer systématiquement tout avis de l'enfant", "L'autorité parentale doit associer l'enfant aux décisions selon son âge et sa maturité, pas l'exclure de toute discussion."],
    ["L'intérêt de l'enfant se réduit toujours au confort personnel des parents", "L'intérêt supérieur concerne son bien-être, sa sécurité et son développement, pas seulement la préférence des adultes."]
  ], "Les droits de l'enfant incluent le fait d'être entendu. Les parents doivent tenir compte de son âge et de sa maturité, tout en assurant santé, sécurité, éducation et développement.", "Écouter n'est ni tout autoriser, ni tout décider sans l'enfant.");
  q("enfant", ["P01", "L5"], "Les enfants en situation de handicap ont droit à l'éducation et à l'inclusion", "Un enfant en situation de handicap a besoin d'aménagements pour suivre sa scolarité et ses soins. Quelle approche respecte ses droits ?", "Rechercher les adaptations et accompagnements permettant l'accès à l'éducation et à la vie sociale", [
    ["Le handicap supprime automatiquement le droit à l'instruction", "Les droits de l'enfant concernent aussi les enfants en situation de handicap ; ils peuvent avoir besoin d'aménagements et d'accompagnement."],
    ["L'égalité impose toujours un emploi du temps identique sans aucune adaptation", "L'égalité des droits peut nécessiter des adaptations pour permettre un accès effectif à l'éducation et aux soins."],
    ["Une adaptation scolaire interdit nécessairement toute relation avec les autres enfants", "Les aménagements visent l'inclusion et le développement, pas une exclusion automatique de toute vie sociale."]
  ], "L'enfant en situation de handicap bénéficie des mêmes droits fondamentaux et peut avoir des adaptations, notamment de son emploi du temps pour ses soins. L'inclusion doit être organisée selon sa situation.", "Même droit : parfois des moyens adaptés pour l'exercer.");
  q("enfant", ["P01", "R11"], "Le Défenseur des droits peut intervenir pour les droits de l'enfant", "Une personne estime qu'un enfant n'a pas accès à ses droits et cherche une autorité indépendante. Qui peut-elle notamment contacter ?", "Le Défenseur des droits", [
    ["Uniquement le propriétaire du logement, qui juge tous les droits des enfants", "Le propriétaire n'est pas l'autorité indépendante compétente pour défendre les droits de l'enfant."],
    ["Le service de remboursement de l'assurance automobile pour tout droit scolaire", "Ce service traite des garanties d'assurance ; il ne remplace pas l'autorité de défense des droits."],
    ["Personne tant que l'enfant n'a pas 18 ans et le droit de vote", "Les droits de l'enfant sont justement protégés avant la majorité ; l'absence de droit de vote n'empêche pas cette protection."]
  ], "La défense des droits de l'enfant fait partie des missions du Défenseur des droits. En cas de danger immédiat, il faut aussi alerter les secours compétents ; ces rôles ne se confondent pas.", "Les droits de l'enfant se défendent avant sa majorité.");
  q("enfant", ["P02", "P03", "FAMILLE"], "La filiation ne donne pas toujours immédiatement un exercice conjoint de l'autorité", "Un deuxième parent reconnaît l'enfant plus d'un an après la naissance, la filiation ayant auparavant été établie envers le premier parent. Quel point doit-il vérifier ?", "La filiation et les conditions d'exercice de l'autorité parentale, qui ne deviennent pas toujours conjointes automatiquement", [
    ["Toute reconnaissance tardive donne automatiquement l'exercice conjoint sans condition", "Service Public précise que le premier parent peut rester seul investi de l'exercice ; un exercice conjoint peut être obtenu dans les conditions prévues."],
    ["La reconnaissance tardive supprime la filiation du premier parent", "Établir le lien avec un deuxième parent ne supprime pas automatiquement celui du premier."],
    ["La reconnaissance retire définitivement toute possibilité d'exercice au deuxième parent", "Des procédures prévues peuvent permettre l'exercice conjoint ; la situation n'est pas définitivement exclue par principe."]
  ], "En principe, l'autorité est exercée en commun, mais des règles particulières existent, notamment lors d'une reconnaissance tardive. Filiation, titularité et exercice doivent être distingués.", "Être parent et exercer conjointement l'autorité ne sont pas toujours automatiques.", "scenario", true);
  q("enfant", ["P02", "FAMILLE"], "Exercice conjoint : un acte important peut nécessiter l'accord des deux parents", "Deux parents exercent conjointement l'autorité parentale. L'un veut décider seul d'une intervention chirurgicale programmée importante pour l'enfant. Que doit-il vérifier ?", "Les règles de consentement pour un acte non usuel, qui nécessite en principe l'accord des deux parents", [
    ["Tout acte, même important, est toujours assimilé à un soin courant sans accord", "Les actes usuels et non usuels sont distingués ; une décision importante ne relève pas automatiquement du régime d'un soin courant."],
    ["Le parent disposant du plus grand revenu a toujours l'autorité supérieure", "Les revenus ne donnent pas une priorité générale dans l'exercice conjoint."],
    ["L'avis d'un voisin remplace le consentement parental exigé", "Un voisin n'est pas le représentant légal chargé de consentir aux actes importants de l'enfant."]
  ], "L'exercice conjoint prévoit une distinction entre actes usuels et décisions importantes, avec les règles et exceptions prévues, notamment pour la santé. En cas de désaccord, les interlocuteurs et le juge compétents peuvent être saisis.", "Acte courant et décision importante : deux cadres à distinguer.", "scenario", true);
  q("enfant", ["P03", "FAMILLE"], "Administrer le patrimoine de l'enfant ne permet pas de se l'approprier", "Un enfant hérite d'un appartement. Ses parents veulent transférer gratuitement ce bien à un ami pour un intérêt personnel. Leur administration légale leur donne-t-elle ce pouvoir sans limite ?", "Non, ils doivent gérer les biens dans l'intérêt de l'enfant et respecter les interdictions et autorisations légales", [
    ["Oui, l'autorité parentale transfère automatiquement la propriété de tous ses biens aux parents", "Administrer des biens n'en fait pas automatiquement la propriété personnelle des parents."],
    ["Oui, le bien peut être donné librement sans considérer l'intérêt de l'enfant", "Les parents ne disposent pas d'un pouvoir général de donation des biens du mineur au détriment de son intérêt."],
    ["Non, donc un parent ne peut jamais faire aucun acte de gestion pour un enfant", "L'administration existe bien, mais elle est limitée et doit respecter les règles et l'intérêt du mineur."]
  ], "Les parents administrent les biens du mineur dans un cadre protecteur. Certains actes nécessitent une autorisation judiciaire et d'autres sont interdits ; il ne s'agit pas d'un droit de disposer du patrimoine comme du leur.", "Gérer pour l'enfant n'est pas posséder à sa place.");
  q("enfant", ["P03", "FAMILLE"], "La jouissance légale prend fin avant la majorité", "Les parents bénéficient de la jouissance légale de certains biens de leur enfant. Jusqu'à quel âge de l'enfant ce régime est-il en principe prévu ?", "Jusqu'à ses 16 ans, avec les limites et exceptions légales", [
    ["Jusqu'à 25 ans pour tous les biens sans exception", "Le seuil de la jouissance légale est de 16 ans ; il ne se confond pas avec un âge de fin d'études."],
    ["Jusqu'à 18 ans parce que jouissance légale et autorité parentale sont toujours identiques", "L'autorité parentale et la jouissance légale ont des règles et âges différents ; elles ne sont pas interchangeables."],
    ["Sans limite de durée après la majorité", "Ce régime parental n'est pas un droit permanent sur les biens de l'enfant devenu adulte."]
  ], "La fiche et Service Public distinguent l'administration légale et la jouissance légale des biens. Cette dernière est en principe prévue jusqu'aux 16 ans de l'enfant, selon son champ et les exceptions.", "Jouissance légale : 16 ans ; ne pas confondre avec la majorité.", "study", true);
  q("enfant", ["P04", "P03"], "Un parent ne renonce pas librement à son autorité par une simple lettre", "Un parent veut renoncer à son autorité parentale par une lettre privée pour ne plus avoir de responsabilités. Quelle règle faut-il retenir ?", "L'autorité parentale ne se supprime pas par une simple renonciation personnelle ; les décisions prévues relèvent du cadre judiciaire", [
    ["Une lettre suffit à annuler filiation et entretien de l'enfant", "La renonciation privée ne supprime pas automatiquement ces liens et obligations."],
    ["Le parent peut transférer ses devoirs à l'enfant mineur par contrat", "L'intérêt et la protection de l'enfant ne peuvent pas être contournés par une simple convention privée."],
    ["Le retrait n'est jamais possible, même en cas de mise en danger", "Le tribunal peut retirer tout ou partie de l'autorité dans les cas prévus ; le refus d'une renonciation privée n'exclut pas cette protection."]
  ], "L'autorité parentale est une fonction protectrice, pas un engagement qu'un parent annule à volonté. Retrait ou délégation suivent les conditions et décisions prévues, avec maintien des obligations qui subsistent.", "La responsabilité envers l'enfant ne disparaît pas par une lettre privée.");
  q("enfant", ["P04"], "Retrait partiel et retrait total de l'autorité sont distincts", "Un tribunal retire seulement certains droits à un parent. Faut-il en déduire que toute l'autorité et la filiation sont automatiquement supprimées ?", "Non, il faut distinguer le retrait partiel, le retrait total et leurs conséquences prévues", [
    ["Oui, le mot retrait signifie toujours exactement les mêmes conséquences", "La fiche distingue explicitement le retrait total et le retrait partiel ; l'étendue de la décision doit être lue."],
    ["Oui, tout retrait efface automatiquement le lien de parenté", "La filiation ne disparaît pas automatiquement du seul fait d'un retrait d'autorité."],
    ["Non, un retrait partiel permet toujours d'ignorer ce que le tribunal a décidé", "Les droits conservés ne rendent pas facultatives les limitations effectivement prononcées."]
  ], "Le retrait peut porter sur tout ou partie de l'autorité. Il faut respecter la décision et ne pas confondre droits de décision, filiation et obligation de contribuer à l'entretien.", "Lire l'étendue de la décision, pas supposer tout ou rien.");
  q("garde", ["P05", "GARDE"], "Micro-crèche : la capacité actuelle est de douze places", "Quelle capacité réglementée caractérise une micro-crèche dans les règles actuelles d'accueil collectif ?", "Jusqu'à 12 places, dans le cadre réglementaire prévu", [
    ["Toujours 10 places parce que les règles n'ont jamais évolué", "Le repère de dix correspond à une ancienne présentation ; la capacité actuelle indiquée par Service Public est de douze."],
    ["Une capacité illimitée tant qu'un seul adulte est présent", "La capacité et l'encadrement sont réglementés ; une micro-crèche n'est pas un accueil illimité."],
    ["La même capacité qu'un assistant maternel seul dans tous les cas", "Accueil collectif en micro-crèche et agrément d'un assistant maternel relèvent de cadres différents."]
  ], "Une micro-crèche est une petite structure d'accueil collectif dont la capacité actuelle est de douze places dans le cadre prévu. Il ne faut pas appliquer l'ancienne limite de dix trouvée dans certaines présentations.", "Micro-crèche : petite structure collective, 12 places dans le cadre actuel.", "study", true);
  q("garde", ["P05", "GARDE"], "Les aides de garde dépendent du mode choisi et de la situation", "Des parents doivent financer une garde d'enfant. Peut-on affirmer que tous les modes de garde sont gratuits pour toute famille ?", "Non, des aides peuvent exister selon le mode de garde et les conditions de la famille", [
    ["Oui, toute garde à domicile est prise en charge intégralement sans condition", "La garde à domicile peut entraîner un coût et les aides sont soumises à des conditions."],
    ["Non, donc aucune aide ni crédit d'impôt n'existe", "Service Public mentionne des dispositifs comme le CMG ou des crédits d'impôt dans les situations prévues."],
    ["Oui, choisir une micro-crèche ouvre automatiquement tous les mêmes droits que toute crèche", "Les règles de financement et aides peuvent varier selon le mode et la structure ; il faut les vérifier."]
  ], "Garde collective, assistant maternel ou garde à domicile peuvent suivre des financements différents. Les aides, dont le complément de libre choix du mode de garde, se vérifient selon les conditions applicables.", "Comparer le coût, le mode d'accueil et les aides possibles.");
  q("ecole", ["P06", "INSTRUCTION", "E05"], "À 17 ans, l'apprentissage peut remplir l'obligation de formation", "Un jeune de 17 ans quitte le lycée général pour un apprentissage conforme aux règles. A-t-il nécessairement cessé de remplir toute obligation de formation ?", "Non, l'apprentissage est l'une des voies pouvant remplir l'obligation de 16 à 18 ans", [
    ["Oui, l'obligation impose exclusivement un lycée général", "La formation peut être satisfaite par différents parcours, dont apprentissage, emploi ou dispositifs prévus."],
    ["Non, parce qu'aucune obligation n'existe après 16 ans pour aucun jeune", "Une obligation de formation existe jusqu'à 18 ans, avec les modalités et exceptions prévues."],
    ["Oui, seule une inscription à l'université permet de la respecter", "Le jeune n'a pas à être exclusivement à l'université ; plusieurs parcours sont reconnus."]
  ], "L'instruction obligatoire de 3 à 16 ans est prolongée par une obligation de formation de 16 à 18 ans. La Mission locale peut aider à trouver un parcours adapté ; l'apprentissage est une voie reconnue.", "Après 16 ans : plusieurs parcours possibles, pas l'absence de toute obligation.");
  q("ecole", ["P06", "INSTRUCTION"], "Un jeune sans école, emploi ni formation peut être accompagné par la Mission locale", "Un jeune de 17 ans n'est ni scolarisé, ni en emploi, ni en apprentissage ou accompagnement. Quel interlocuteur peut aider à trouver une solution pour son obligation de formation ?", "La Mission locale", [
    ["Le service d'immatriculation des voitures, qui contrôle les parcours scolaires", "Ce service ne gère pas l'obligation de formation ; les Missions locales jouent un rôle de suivi et d'orientation."],
    ["Le notaire de la famille, qui attribue automatiquement un diplôme", "Un notaire n'attribue pas de diplôme et ne remplace pas l'accompagnement vers une formation."],
    ["Personne, car la loi interdit tout accompagnement après 16 ans", "Les dispositifs de formation et d'insertion concernent justement cette période jusqu'à 18 ans."]
  ], "Les Missions locales contrôlent et accompagnent l'obligation de formation des 16 à 18 ans, avec les règles et exceptions prévues. Elles peuvent proposer retour à l'école, formation ou parcours d'insertion.", "Sans solution après 16 ans : demander un accompagnement, pas rester isolé.");
  q("ecole", ["P06", "L5"], "Les trois classes du lycée sont seconde, première et terminale", "Un élève entre au lycée après le collège. Quelle suite de classes correspond au parcours scolaire habituel en trois ans ?", "Seconde, première, terminale", [
    ["Sixième, cinquième, quatrième", "Ces classes appartiennent au collège et ne correspondent pas aux trois classes habituelles du lycée."],
    ["CP, CE1, CE2", "Ce sont des classes de l'école élémentaire, pas du lycée."],
    ["Petite section, moyenne section, grande section", "Ces trois sections correspondent à l'école maternelle, pas au lycée."]
  ], "Le lycée se déroule habituellement en seconde, première et terminale, dans les voies générale, technologique ou professionnelle selon le parcours. Le baccalauréat se distingue du brevet de fin de collège.", "Collège jusqu'à la troisième ; lycée de la seconde à la terminale.", "study");
  q("ecole", ["P06", "L5"], "La maternelle développe langue, apprentissages et vie collective", "Des parents pensent que la maternelle ne sert qu'à faire garder un enfant. Quel rôle éducatif est décrit par la fiche ?", "Développer les premiers apprentissages, la langue et la vie avec les autres", [
    ["Remplacer tout apprentissage par le seul paiement d'un service de garde", "La maternelle fait partie de l'école primaire et a des missions éducatives, distinctes de la simple garde."],
    ["Préparer directement tous les enfants au baccalauréat en un an", "La maternelle organise les premiers apprentissages adaptés à l'âge, pas une préparation immédiate au bac."],
    ["Écarter les enfants qui ne parlent pas encore parfaitement français", "L'école accueille les enfants allophones et contribue notamment à l'apprentissage du français."]
  ], "La maternelle développe langage, compréhension, premiers apprentissages et vivre-ensemble. Elle participe à l'instruction obligatoire et facilite aussi les échanges des parents avec l'école.", "Maternelle : une école des premiers apprentissages.");
  q("ecole", ["P07", "INSTRUCTION"], "L'instruction en famille reste soumise à autorisation et contrôle", "Des parents obtiennent une autorisation d'instruction en famille. Peuvent-ils en déduire qu'aucune obligation ni aucun contrôle ne s'applique ensuite ?", "Non, l'instruction et les contrôles prévus restent applicables", [
    ["Oui, l'autorisation supprime l'obligation d'instruire l'enfant", "Elle autorise un mode d'instruction, pas l'absence d'instruction."],
    ["Oui, elle interdit toute intervention des autorités compétentes", "Le dispositif prévoit des contrôles et obligations ; l'autorisation ne crée pas une exclusion totale des autorités."],
    ["Non, l'enfant doit donc obligatoirement être inscrit dans une école en plus dans tous les cas", "Une instruction en famille autorisée est un mode prévu ; le contrôle ne signifie pas une double inscription scolaire obligatoire dans toute situation."]
  ], "L'instruction en famille est un mode exceptionnel autorisé sous conditions et contrôlé. L'autorisation ne dispense pas de délivrer l'instruction ni des obligations d'information et de suivi prévues.", "Autoriser un mode d'instruction ne supprime pas l'obligation d'instruire.");
  q("ecole", ["P07"], "Le statut privé n'assure pas à tout certificat une reconnaissance officielle", "Une école privée remet une attestation. Peut-on supposer que toute attestation d'un établissement privé a automatiquement la valeur d'un diplôme national ?", "Non, il faut vérifier la nature du diplôme et sa reconnaissance officielle", [
    ["Oui, le seul mot école rend tout certificat équivalent au baccalauréat", "Le nom de l'établissement ne transforme pas toute attestation en diplôme national."],
    ["Non, donc aucun élève du privé ne peut jamais obtenir un diplôme national", "Les élèves d'établissements privés peuvent obtenir des diplômes officiels selon les règles et examens ; la vérification ne signifie pas une exclusion générale."],
    ["Oui, le montant des frais garantit l'équivalence de tout titre", "Le prix de la formation ne détermine pas à lui seul la valeur officielle d'un diplôme."]
  ], "Les écoles privées suivent des statuts et contrôles différents. Il faut distinguer attestation, diplôme propre et diplôme reconnu ou national, sans supposer une équivalence automatique.", "Diplôme : vérifier la reconnaissance, pas le prix ou l'enseigne.");
  q("ecole", ["P08"], "UPE2A-NSA : un accompagnement pour des élèves peu ou pas scolarisés auparavant", "Un élève allophone nouvellement arrivé n'a pas été scolarisé auparavant. Quel dispositif spécifique cité par la fiche peut aider à adapter son parcours ?", "Une UPE2A-NSA selon son évaluation et les dispositifs disponibles", [
    ["Une exclusion automatique jusqu'à ce qu'il obtienne seul un diplôme", "L'école doit accueillir et évaluer ses besoins ; l'absence de scolarité antérieure ne justifie pas cette exclusion automatique."],
    ["Un classement obligatoire en terminale quels que soient ses acquis", "Le positionnement sert à adapter la scolarité ; il ne conduit pas à une classe identique pour tous sans évaluation."],
    ["Un cours OEPRE réservé aux parents à la place de toute scolarité d'enfant", "OEPRE accompagne les parents ; il ne remplace pas le dispositif et la scolarité de l'élève allophone."]
  ], "Les UPE2A accueillent les élèves allophones arrivants. Les UPE2A-NSA concernent spécifiquement ceux qui n'ont pas été scolarisés antérieurement, avec un parcours adapté à l'évaluation.", "Langue et scolarité antérieure : évaluer les deux pour bien accueillir.", "scenario", true);
  q("ecole", ["P09"], "Bulletins et ENT aident à suivre la scolarité", "Un parent consulte l'ENT uniquement au début de l'année et manque les messages des enseignants. Quelle démarche soutient le suivi scolaire ?", "Consulter régulièrement les outils de liaison et échanger avec l'équipe éducative", [
    ["Les messages sont inutiles dès que l'inscription est effectuée", "Le suivi des résultats, du comportement et de la vie scolaire se poursuit après l'inscription."],
    ["Le parent doit transmettre ses identifiants ENT à toute personne sur internet", "Les accès et données de l'enfant doivent être protégés ; suivre la scolarité ne signifie pas partager les identifiants publiquement."],
    ["Le bulletin remplace toute possibilité de dialogue avec les enseignants", "La consultation des documents complète les échanges, réunions et contacts avec l'équipe éducative."]
  ], "Livret scolaire, bulletins, carnet de liaison et ENT permettent de recevoir des informations. Le dialogue avec les enseignants et les réunions aident à accompagner les apprentissages et difficultés.", "Lire les informations et garder le dialogue.");
  q("ecole", ["P09", "L5"], "L'absence de nationalité française n'empêche pas toute participation parentale à l'école", "Un parent étranger souhaite rejoindre une association de parents d'élèves ou participer à la représentation des parents. Le seul fait de ne pas être Français l'en exclut-il automatiquement ?", "Non, les parents peuvent participer à la vie scolaire selon les règles applicables", [
    ["Oui, toute participation à l'école exige le droit de vote présidentiel", "Les élections et associations de parents ne se confondent pas avec les élections nationales."],
    ["Non, donc il décide seul des programmes nationaux", "La participation parentale ne donne pas un pouvoir individuel de fixer le programme national."],
    ["Oui, les parents étrangers n'ont aucun rôle de suivi des devoirs", "Les responsabilités de suivi et d'accompagnement concernent aussi les parents étrangers."]
  ], "Les parents peuvent suivre la scolarité, rejoindre des associations et participer à la représentation selon les règles. Ce rôle est distinct des droits électoraux nationaux et des compétences de l'État.", "Être parent dans l'école n'est pas être électeur présidentiel.");
  q("ecole", ["P10"], "OEPRE associe français, valeurs républicaines et compréhension de l'école", "Un parent pense qu'OEPRE est uniquement un cours de grammaire sans rapport avec l'école. Quels contenus le dispositif associe-t-il ?", "La langue française, les valeurs de la République et le fonctionnement de l'école", [
    ["Uniquement l'entraînement linguistique à un test de langue, sans contenu sur l'école", "Le français est un objectif, mais OEPRE comprend aussi les valeurs républicaines et la compréhension du fonctionnement scolaire."],
    ["Uniquement du soutien scolaire direct aux enfants, sans ateliers pour les parents", "Le soutien scolaire aux enfants peut relever d'autres actions ; OEPRE propose ici des ateliers aux parents pour mieux accompagner leurs enfants."],
    ["La formation qualifiante pour devenir enseignant, sans accompagnement parental", "OEPRE ne délivre pas une qualification d'enseignant : il aide les parents à comprendre l'école et à participer à la réussite de leurs enfants."]
  ], "OEPRE permet aux parents étrangers volontaires de travailler le français, les valeurs républicaines et le fonctionnement scolaire. Il vise à renforcer leur capacité d'accompagnement et leur intégration.", "OEPRE : apprendre le français et mieux comprendre l'école.");
  q("ecole", ["P10"], "Les ateliers OEPRE sont répartis dans l'année scolaire", "Comment les ateliers OEPRE sont-ils organisés dans le cadre décrit par la fiche ?", "Environ 60 à 120 heures réparties sur l'année scolaire dans des établissements", [
    ["Un examen obligatoire unique de 45 minutes pour tous les parents", "Le dispositif est un ensemble d'ateliers volontaires sur l'année, pas un examen obligatoire unique."],
    ["60 à 120 heures obligatoirement regroupées dans une seule semaine", "La durée indiquée est répartie dans l'année scolaire ; elle ne désigne pas une semaine unique imposée à tous les parents."],
    ["Une obligation de suivre exactement le même horaire quotidien dans toute commune", "Les horaires sont organisés localement pour faciliter l'accès ; un horaire quotidien uniforme n'est pas le principe décrit."]
  ], "Les ateliers volontaires ont lieu dans des écoles, collèges ou lycées. Leur durée indicative est de 60 à 120 heures réparties dans l'année scolaire, avec des horaires organisés localement.", "Des ateliers sur l'année, à trouver selon l'offre locale.", "study", true);
  q("enfant", ["P11"], "Le soutien parental s'adresse à toutes les configurations familiales", "Un père séparé veut un soutien pour accompagner son enfant. Le fait d'être séparé l'exclut-il automatiquement des actions de soutien à la parentalité ?", "Non, les actions doivent être accessibles aux diverses familles et valoriser les compétences des parents", [
    ["Oui, elles sont réservées exclusivement aux mères mariées", "La Charte s'adresse à toutes les familles et respecte l'égalité entre les femmes et les hommes."],
    ["Non, mais demander du soutien entraîne automatiquement le retrait de l'autorité parentale", "Une action de soutien bienveillante ne constitue pas en soi une décision de retrait judiciaire."],
    ["Oui, elles ne peuvent jamais concerner grands-parents ou beaux-parents", "La Charte reconnaît aussi des personnes ressources dans l'environnement familial selon les besoins."]
  ], "Le soutien parental tient compte de la diversité des familles et peut concerner des personnes ressources. Il se construit avec les parents, sans jugement ni stéréotype, en visant le bien-être de l'enfant.", "Chercher du soutien n'est ni un échec ni une perte automatique de droits.");
  q("enfant", ["P11"], "Un soutien parental ne doit pas imposer une adhésion politique ou religieuse", "Un atelier de soutien parental impose l'adhésion à un mouvement politique pour pouvoir participer. Quel principe de la Charte est en cause ?", "La neutralité politique, philosophique et confessionnelle des interventions", [
    ["L'atelier peut imposer toute adhésion parce qu'il parle de famille", "Le thème familial ne supprime pas la neutralité prévue par la Charte."],
    ["La neutralité signifie refuser toute famille ayant des croyances", "La neutralité concerne l'intervention ; elle n'exige pas que les bénéficiaires soient sans croyances ou opinions."],
    ["La neutralité autorise à ne pas former les intervenants", "La Charte prévoit aussi la compétence ou la formation des intervenants ; neutralité et qualité sont complémentaires."]
  ], "Les interventions de soutien doivent rester neutres et accessibles à toutes les familles. Les bénévoles et professionnels doivent avoir une compétence ou une formation adaptée.", "Intervention neutre, familles respectées dans leur diversité.");
  q("enfant", ["P12"], "Un LAEP favorise les rencontres avec le jeune enfant, pas une garde autonome", "Un parent souhaite partager un moment et rencontrer d'autres parents avec son enfant de moins de six ans. Quel lieu correspond particulièrement à ce besoin ?", "Un lieu d'accueil enfants-parents, LAEP", [
    ["Un LAEP où il laisse nécessairement l'enfant seul comme dans toute crèche", "Le LAEP favorise la rencontre et l'échange enfant-parent ; il ne doit pas être confondu automatiquement avec un mode de garde autonome."],
    ["Un espace de rencontre imposé uniquement par un conflit de séparation", "Les espaces de rencontre ont une autre fonction, notamment les relations entre parents séparés et enfants ; le LAEP répond au besoin décrit."],
    ["Un CLAS présenté comme un lieu de garde autonome pour tous les moins de six ans", "Le CLAS est un accompagnement à la scolarité et au rôle des parents ; ce n'est pas le lieu enfants-parents décrit ni un mode général de garde des jeunes enfants."]
  ], "Les LAEP favorisent les rencontres et échanges entre parents et jeunes enfants. Ils se distinguent des crèches de garde et des espaces de rencontre liés à certaines situations de séparation.", "Accueil avec le parent : ne pas confondre avec la garde.");
  q("enfant", ["P12"], "Les espaces de rencontre peuvent préserver les relations dans une séparation difficile", "Après une séparation difficile, un cadre est recherché pour permettre des rencontres entre un parent et son enfant. Quel dispositif cité peut correspondre ?", "Un espace de rencontre dans le cadre adapté à la situation", [
    ["Une halte-garderie comme seul dispositif pour toute relation parentale après divorce", "La halte-garderie répond à un besoin de garde ; l'espace de rencontre répond spécifiquement au maintien des relations dans certaines séparations."],
    ["Un CLAS, dont la mission serait de fixer un droit de visite après divorce", "Le CLAS accompagne la scolarité et le rôle des parents ; il n'a pas la fonction de fixer les droits de visite dans une séparation."],
    ["Un Point info famille, qui prononcerait lui-même une décision de garde", "Un Point info famille renseigne et oriente ; il ne prononce pas de décision judiciaire sur la résidence ou les relations avec l'enfant."]
  ], "Les espaces de rencontre offrent un cadre pour certaines relations entre parents séparés et enfants. La médiation familiale peut aider à résoudre certains conflits, mais ne remplace pas la protection en cas de violences.", "Rencontrer dans un cadre adapté n'est pas une simple garde d'enfant.");
  q("enfant", ["P12"], "Un Point info famille facilite l'information et les démarches", "Des parents cherchent des informations sur les services familiaux et leurs démarches. Quel dispositif cité les oriente particulièrement ?", "Un Point info famille", [
    ["Un CLAS qui remplace toute administration et attribue automatiquement toutes les prestations", "Le CLAS accompagne la scolarité ; il ne remplace pas les administrations ni leurs décisions."],
    ["Un LAEP chargé de conduire la procédure judiciaire de divorce", "Le LAEP favorise les rencontres et échanges avec le jeune enfant ; il n'organise pas la procédure judiciaire de divorce."],
    ["Un espace de rencontre qui remplace toutes les démarches administratives familiales", "L'espace de rencontre facilite certaines relations entre parents et enfants ; cette mission ne remplace pas l'information générale et les démarches auprès des services."]
  ], "Les Points info famille mettent de l'information à disposition et facilitent les démarches. L'information ou l'orientation n'est pas une attribution automatique de tous les droits.", "Information familiale : trouver le service, puis vérifier la démarche.");
  q("enfant", ["P12", "P09"], "Le CLAS soutient la scolarité et l'implication des parents", "Un parent veut être aidé pour suivre les apprentissages de son enfant et mieux accompagner sa scolarité. Quel dispositif peut être pertinent ?", "Un contrat local d'accompagnement à la scolarité, CLAS", [
    ["Un CLAS qui remplace définitivement tous les enseignements de l'école", "L'accompagnement complète les apprentissages et le rôle familial ; il ne remplace pas la scolarité."],
    ["Un Point info famille chargé de remplacer les enseignements obligatoires", "Le Point info famille fournit des informations et facilite les démarches ; il ne remplace pas l'école ni son enseignement."],
    ["Un LAEP qui établit les bulletins scolaires officiels de l'enfant", "Le LAEP favorise les rencontres avec de jeunes enfants ; les évaluations et bulletins relèvent de l'établissement scolaire, pas du LAEP."]
  ], "Les CLAS organisent un accompagnement à la scolarité et soutiennent le rôle des parents. Ils complètent l'école et ne doivent pas être confondus avec l'instruction en famille.", "Accompagner la scolarité, pas la remplacer.");
  q("enfant", ["P12", "O06"], "La médiation familiale ne remplace pas la mise en sécurité en cas de violences", "Dans un conflit familial avec menaces et violences, peut-on dire que seule une médiation suffit toujours ?", "Non, la protection et l'intervention adaptées doivent être recherchées ; une médiation ne remplace pas la sécurité", [
    ["Oui, les menaces deviennent légales si les personnes parlent avec un médiateur", "La médiation ne légalise pas la violence et ne supprime pas les besoins de protection."],
    ["Oui, un médiateur garantit à lui seul l'absence de danger immédiat", "Le médiateur ne remplace pas les secours ou les mesures de protection nécessaires en présence d'un danger."],
    ["Non, donc toute solution amiable est interdite dans tout désaccord sans violence", "La médiation peut être utile dans des conflits adaptés ; la vigilance sur la violence n'interdit pas tout recours amiable."]
  ], "La médiation aide à rechercher une solution dans certains conflits familiaux. Une situation violente demande des interlocuteurs et mesures de protection appropriés ; il ne faut pas imposer une médiation comme substitut aux secours.", "D'abord la sécurité ; la médiation n'est pas une protection universelle.");
  q("famille-numerique", ["P02", "P03", "L5"], "Le droit à l'image de l'enfant n'est pas la propriété de ses parents", "Un parent publie des images intimes de son enfant pour attirer des abonnés et dit qu'il peut tout faire parce qu'il est le parent. Quelle obligation est en cause ?", "Protéger la vie privée et l'image de l'enfant, en considérant son intérêt et son avis selon sa maturité", [
    ["L'autorité parentale donne un droit illimité de rendre toute intimité publique", "Elle est exercée dans l'intérêt de l'enfant et comporte un devoir de protection de sa vie privée et de son image."],
    ["Un compte privé garantit toujours qu'une photo ne sera jamais copiée", "Les restrictions du compte réduisent certains accès mais ne garantissent pas l'absence de copie ou de diffusion secondaire."],
    ["L'accord des deux parents autorise toute exposition de l'intimité sans considérer l'enfant", "Même l'accord des parents ne supprime pas leur obligation de protéger l'intérêt, la vie privée et l'image de l'enfant, en tenant compte de sa maturité."]
  ], "Les parents protègent l'image et la vie privée de l'enfant ; publier ne doit pas se faire au détriment de son intérêt. Les réglages techniques ne constituent pas une garantie absolue contre la diffusion.", "L'image de l'enfant n'est pas un contenu appartenant sans limite aux adultes.");
  q("famille-numerique", ["P02", "FAMILLE", "L5"], "Exercice conjoint : une diffusion publique de photos peut nécessiter l'accord des deux parents", "Deux parents exercent conjointement l'autorité. L'un veut publier des photos de l'enfant sur les réseaux sociaux et l'autre s'y oppose. Quelle réaction est adaptée ?", "Respecter le cadre de protection de l'image et rechercher une solution ou saisir le juge compétent en cas de désaccord", [
    ["Le parent qui a pris la photo peut toujours écarter l'autre et tous les droits de l'enfant", "Prendre la photo ne supprime pas les règles de l'autorité conjointe et de protection de l'image de l'enfant."],
    ["Le parent qui héberge l'enfant le plus souvent décide seul de toute diffusion publique", "La résidence habituelle ne supprime pas l'exercice conjoint de l'autorité parentale ni la protection de l'image de l'enfant."],
    ["L'opposition explicite de l'autre parent peut être assimilée à un accord pour cette publication", "Une opposition n'est pas un consentement. La diffusion publique considérée comme non usuelle ne bénéficie pas de la simple présomption d'accord des actes usuels."]
  ], "Service Public distingue certains actes usuels d'une diffusion sur les réseaux sociaux, considérée comme un acte non usuel. L'accord et les recours doivent être examinés, avec protection de la vie privée et avis de l'enfant selon sa maturité.", "Photos publiques : protection de l'enfant et exercice conjoint comptent.", "scenario", true);
  q("famille-numerique", ["L5", "P02"], "Une bonne utilisation des écrans vise aussi sommeil et vie sociale", "Un adolescent utilise les écrans au point de réduire son sommeil et d'abandonner ses relations habituelles. Quelle démarche parentale est cohérente ?", "Dialoguer, organiser un usage adapté et demander un conseil professionnel si les difficultés persistent", [
    ["Considérer que seul le prix du téléphone influence la santé", "Les habitudes d'usage peuvent affecter sommeil, santé physique ou mentale et relations, indépendamment du prix de l'appareil."],
    ["Laisser les écrans remplacer systématiquement toute activité et tout suivi", "Les parents doivent veiller à un usage approprié et aux besoins de santé et de développement."],
    ["Publier ses échanges privés pour le punir sans considérer les conséquences", "Exposer la vie privée peut aggraver la situation et contrevient au devoir de protection de l'enfant."]
  ], "Les outils numériques peuvent être utiles, mais l'excès peut affecter santé et relations. Le rôle parental associe dialogue, protection, accompagnement et recherche d'aide si nécessaire.", "Usage numérique : équilibre, protection et dialogue.");
  q("famille-numerique", ["L5", "R02"], "Derrière un pseudonyme, les droits d'autrui restent applicables", "Une personne publie des menaces sous un pseudonyme et pense que les règles civiques ne s'appliquent pas sur internet. Que faut-il retenir ?", "L'usage d'un pseudonyme ne supprime pas la responsabilité ni le respect des droits d'autrui", [
    ["Les menaces deviennent légales dès que le nom civil est masqué", "Un pseudonyme ne transforme pas une menace en expression licite."],
    ["La citoyenneté numérique se limite à savoir cliquer rapidement", "Elle comprend aussi responsabilité, éthique, sécurité, esprit critique et respect des autres."],
    ["Toute critique paisible en ligne est une menace interdite", "Il faut distinguer critique licite et menace ; l'expression est protégée dans les limites légales."]
  ], "La citoyenneté numérique implique un usage responsable et sûr. Les règles contre les menaces, le harcèlement et les atteintes aux droits ne disparaissent pas parce qu'on utilise un pseudonyme.", "Pseudonyme n'est pas irresponsabilité.");
  q("enfant", ["L5", "HERITAGE"], "La réserve héréditaire protège une part des descendants", "Une personne soumise au droit français veut exclure totalement ses enfants de sa succession par testament, hors cas particuliers. Quel principe doit-elle connaître ?", "Les enfants sont héritiers réservataires et une part leur est en principe protégée", [
    ["Un testament peut toujours retirer toute réserve sans condition", "Le testament doit en principe respecter la réserve héréditaire des descendants ; il n'annule pas cette protection à volonté."],
    ["La réserve impose de donner tout le patrimoine à un seul enfant choisi", "Elle protège les descendants selon les règles ; elle ne crée pas une obligation d'attribuer tout à un enfant unique."],
    ["La réserve signifie qu'aucune part ne peut jamais être attribuée librement", "Une quotité disponible existe et peut être attribuée dans les limites légales ; la protection n'absorbe pas nécessairement tout le patrimoine."]
  ], "Dans le cadre du droit français, la réserve protège en principe une part pour les descendants. La quotité disponible peut être attribuée librement selon les règles, avec les particularités éventuelles de la succession.", "Part réservée et part disponible : deux notions.", "scenario", true);
  q("enfant", ["L5", "HERITAGE"], "Sans testament, les enfants ont les mêmes droits dans la succession", "Une succession soumise au droit français est ouverte sans testament. Peut-on réduire la part d'une fille uniquement parce qu'elle est une fille ?", "Non, les enfants ont les mêmes droits ; leur sexe ne fonde pas une différence de part", [
    ["Oui, la coutume familiale permet toujours de privilégier les garçons", "Une coutume contraire à l'égalité des droits ne remplace pas les règles de succession applicables."],
    ["Oui, la règle n'est égale que si tous les enfants ont le même revenu", "Le sexe ne crée pas une différence légale de droits ; les revenus ne sont pas la condition de cette égalité entre enfants."],
    ["Non, donc un testament ne peut jamais utiliser la quotité disponible", "L'égalité des droits sans testament doit être distinguée de la possibilité d'une libéralité dans la quotité disponible."]
  ], "Sans testament et sous les règles présentées, les enfants ont les mêmes droits dans la succession, avec les particularités légales éventuelles. Il faut distinguer égalité des droits et choix permis dans la quotité disponible.", "Le sexe n'attribue pas une part successorale différente.", "scenario", true);
  q("couple", ["A10", "PARENTE"], "Les empêchements de parenté ne concernent pas automatiquement tous les cousins", "Deux cousins germains majeurs envisagent un mariage et respectent les autres conditions légales. Le seul lien de cousins germains suffit-il à interdire le mariage en droit français ?", "Non, ce lien seul n'est pas un empêchement automatique prévu pour les proches parents", [
    ["Oui, tout lien de famille, même éloigné, interdit le mariage", "Le Code civil définit des empêchements précis ; il ne prévoit pas une interdiction de tout lien familial éloigné."],
    ["Non, donc le mariage entre frère et sœur est également libre", "L'absence d'empêchement pour des cousins germains ne supprime pas les interdictions entre proches parents, comme frère et sœur."],
    ["Oui, une autorisation parentale suffit à créer ou supprimer tout empêchement légal", "Les interdictions et éventuelles dispenses relèvent de la loi ; la volonté parentale ne les définit pas librement."]
  ], "Il faut lire les empêchements précis du Code civil : ligne directe, frères et sœurs et certains autres liens proches ou d'alliance. Ne pas assimiler tous les cousins aux catégories interdites.", "Parenté : vérifier la catégorie exacte, pas interdire toute famille.", "scenario", true);
  q("dignite", ["R04", "EUCHARTE"], "L'article 3 vise le clonage reproductif des êtres humains", "Quel clonage l'article 3 de la Charte des droits fondamentaux de l'Union européenne interdit-il explicitement ?", "Le clonage reproductif des êtres humains", [
    ["Tout procédé biologique qualifié de clonage, humain ou non, sans distinction", "La formulation de l'article vise le clonage reproductif des êtres humains ; elle ne décrit pas une interdiction indistincte de tout procédé biologique portant ce nom."],
    ["Uniquement le clonage reproductif humain pratiqué sans paiement", "L'interdiction citée n'est pas limitée à une technique gratuite ; la question du profit est une garantie distincte concernant le corps et ses parties."],
    ["Le clonage reproductif humain uniquement si aucun formulaire de consentement n'est signé", "Le consentement libre et éclairé est une garantie, mais il ne transforme pas une pratique expressément interdite en pratique autorisée."]
  ], "La Charte protège l'intégrité physique et mentale et énumère des interdictions dans le cadre médical et biologique, dont le clonage reproductif humain. La formulation précise ne doit pas devenir une interdiction indistincte de tout ce qu'on appelle clonage.", "Lire la formulation juridique : reproductif et humain.", "study", true);
  q("dignite", ["R04", "EUCHARTE"], "Les pratiques eugéniques de sélection des personnes sont interdites", "Un programme médical veut sélectionner des êtres humains selon des caractéristiques considérées comme supérieures. Quel principe de l'article 3 de la Charte est en cause ?", "L'interdiction des pratiques eugéniques, notamment celles visant la sélection des personnes", [
    ["L'interdiction concerne seulement les programmes sans finalité commerciale", "La pratique eugénique de sélection des personnes n'est pas autorisée simplement parce qu'elle poursuit une finalité commerciale."],
    ["Le consentement signé autorise toute pratique eugénique de sélection", "Le consentement doit être respecté, mais ne supprime pas une interdiction distincte de pratiques eugéniques."],
    ["L'interdiction de tout examen diagnostique quelles que soient ses conditions", "L'interdiction des pratiques eugéniques ne signifie pas que tout examen médical diagnostique est interdit."]
  ], "L'article 3 interdit les pratiques eugéniques visant notamment la sélection des personnes, tout en protégeant le consentement libre et éclairé et l'intégrité humaine. Il ne faut pas confondre cette interdiction avec celle de tout examen médical.", "Dignité : une personne n'est pas un produit à sélectionner.", "scenario", true);

  // Dernières nuances du Livret : solidarité, citoyenneté et emploi public.
  reference("DECHEANCE", "ads-decheance-nationalite", "Service Public — Conditions de la déchéance de nationalité", "https://www.service-public.gouv.fr/particuliers/vosdroits/F32827", "rights");
  reference("HARCELEMENT", "ads-harcelement-sexuel", "Service Public — Harcèlement sexuel ou sexiste", "https://www.service-public.gouv.fr/particuliers/vosdroits/F1043", "rights");
  reference("PUBLIC", "ads-emploi-public", "Service Public — Conditions d'accès à la fonction publique", "https://www.service-public.gouv.fr/particuliers/vosdroits/F13272", "society");

  q("fondamentaux", ["R03"], "Les droits de troisième génération expriment une solidarité collective internationale", "Une association relie protection des générations futures, paix et assistance humanitaire. À quelle logique de droits la fiche associe-t-elle particulièrement ces objectifs ?", "Aux droits dits de troisième génération, fondés sur la solidarité collective", [
    ["Aux seules libertés individuelles de première génération, sans dimension collective", "Les libertés individuelles sont essentielles, mais les objectifs décrits portent aussi sur des enjeux collectifs et internationaux de solidarité."],
    ["Aux seuls droits économiques et sociaux, limités aux prestations nationales actuelles", "Les droits économiques et sociaux protègent notamment emploi, santé et éducation ; paix, générations futures et assistance humanitaire illustrent ici la troisième génération."],
    ["À des droits tous automatiquement invocables devant n'importe quel tribunal", "La fiche précise que ces droits se développent progressivement et ne sont pas encore tous utilisables devant un tribunal ; il faut distinguer objectif et garantie juridictionnelle."]
  ], "La troisième génération comprend des objectifs de paix, d'environnement sain, de préservation des générations futures et d'assistance humanitaire. Leur dimension collective et internationale ne signifie pas qu'ils produisent tous les mêmes effets devant le juge.", "Solidarité dans l'espace et dans le temps.", "study", true);
  q("fondamentaux", ["R07", "L79", "DECHEANCE"], "La déchéance de nationalité ne peut pas rendre une personne apatride", "Une personne ayant acquis la nationalité française n'a plus aucune autre nationalité. Une déchéance peut-elle la rendre apatride, même si les faits reprochés sont très graves ?", "Non, la déchéance suppose notamment une autre nationalité et ne peut pas rendre apatride", [
    ["Oui, la gravité des faits supprime toujours la condition d'une autre nationalité", "La gravité du motif ne fait pas disparaître la condition destinée à empêcher l'apatridie."],
    ["Oui, si elle possède seulement un titre de séjour dans un autre pays", "Un titre de séjour n'est pas une nationalité ; il ne remplit pas la condition d'une autre nationalité."],
    ["Non, parce qu'une nationalité acquise ne peut jamais faire l'objet d'aucune déchéance", "La déchéance existe pour une nationalité acquise, mais dans les motifs, délais, conditions et procédure prévus par la loi."]
  ], "La déchéance concerne une personne ayant acquis la nationalité française et disposant d'une autre nationalité. Elle est encadrée par des motifs légaux, des délais et une procédure ; une personne française d'origine ne relève pas de cette déchéance.", "Déchéance : une mesure encadrée, sans création d'apatridie.", "scenario", true);
  q("fondamentaux", ["R07", "L79", "DECHEANCE", "R02"], "Perdre la citoyenneté française n'efface pas les droits fondamentaux de la personne", "Une personne fait légalement l'objet d'une déchéance de nationalité française. Quelle conséquence distingue correctement citoyenneté et droits humains ?", "Elle perd les droits attachés à la citoyenneté française, mais conserve ses droits fondamentaux comme personne", [
    ["Elle conserve automatiquement son passeport français parce que seule une amende est prévue", "La déchéance retire la nationalité française ; le droit au passeport français lié à cette qualité n'est pas conservé comme si rien ne changeait."],
    ["Elle perd le droit à la dignité humaine en même temps que le droit de vote national", "La dignité appartient à toute personne et ne dépend pas de la conservation de la nationalité française."],
    ["Elle perd rétroactivement sa nationalité française depuis sa naissance dans tous les cas", "La déchéance a un effet pour l'avenir ; il ne faut pas la confondre avec d'autres mécanismes d'annulation ou de retrait."]
  ], "La nationalité et les droits politiques qui lui sont liés peuvent être retirés dans le cadre légal. Cela n'autorise pas à nier la dignité ou les droits fondamentaux de la personne. Les mécanismes de déchéance, d'annulation et de retrait ne sont pas interchangeables.", "Droits du citoyen et droits de la personne ne se confondent pas.", "scenario", true);
  q("violences", ["O09", "E17", "HARCELEMENT"], "Une pression sexuelle grave peut constituer un harcèlement sans répétition", "Un supérieur fait une pression grave pour obtenir un acte sexuel en échange d'une promotion. Il ne l'a fait qu'une fois. La répétition est-elle toujours nécessaire pour caractériser un harcèlement sexuel ?", "Non, une pression grave visant un acte sexuel peut être assimilée au harcèlement même sans répétition", [
    ["Oui, il faut obligatoirement plusieurs faits dans toutes les situations", "La répétition caractérise certaines formes de harcèlement, mais la loi prévoit aussi la pression grave, même non répétée, pour obtenir un acte sexuel."],
    ["Oui, sauf si un contact physique à caractère sexuel a déjà été imposé", "Le contact imposé peut relever d'une agression sexuelle ; son absence ne rend pas licite la pression grave décrite."],
    ["Non, mais la promesse d'une promotion transforme toujours la pression en consentement libre", "Un avantage professionnel utilisé comme pression ne constitue pas un consentement libre et ne fait pas disparaître l'infraction."]
  ], "Une pression grave, même non répétée, visant un acte sexuel au profit de son auteur ou d'un tiers est assimilée au harcèlement sexuel. Il faut distinguer cette situation des propos ou comportements répétés et d'une agression sexuelle avec contact imposé.", "Gravité d'une pression et répétition : deux voies à distinguer.");
  q("candidature", ["L5", "E12", "PUBLIC"], "Les emplois publics contractuels ne sont pas tous interdits aux étrangers hors UE", "Une personne étrangère hors Union européenne, en situation régulière et remplissant les autres conditions du poste, souhaite candidater à un emploi public contractuel non réservé aux Français. Sa nationalité l'en exclut-elle automatiquement ?", "Non, il n'existe pas de condition générale de nationalité pour devenir contractuel, sous réserve des emplois et conditions applicables", [
    ["Oui, la condition de nationalité de tout fonctionnaire s'applique identiquement à tout contractuel", "Fonctionnaire et contractuel sont des statuts différents ; les conditions de nationalité ne sont pas identiques pour tous les emplois."],
    ["Non, donc elle peut aussi occuper automatiquement tout emploi de souveraineté", "L'absence de condition générale pour les contractuels ne supprime pas la réserve de certains emplois de souveraineté aux Français."],
    ["Oui, seul le concours donne accès à n'importe quel contrat public", "Les emplois contractuels peuvent être recrutés selon leurs modalités propres ; l'accès ne suppose pas toujours un concours de fonctionnaire."]
  ], "Service Public distingue fonctionnaires et contractuels. Un étranger peut être recruté comme contractuel dans le cadre applicable, avec un titre de séjour valable lorsqu'il est exigé et les autres conditions du poste. Les emplois de souveraineté restent réservés aux Français.", "Emploi public : vérifier le statut et le poste, pas seulement la nationalité.", "scenario", true);
  q("candidature", ["L5", "PUBLIC"], "Les emplois de souveraineté restent réservés aux Français", "Une ressortissante d'un État de l'Union européenne remplit les autres conditions d'un emploi de fonctionnaire qui participe directement à l'exercice de la souveraineté française. Sa nationalité européenne suffit-elle pour ce poste ?", "Non, les emplois dits de souveraineté sont réservés aux personnes françaises", [
    ["Oui, la nationalité européenne ouvre automatiquement tous les emplois publics français", "L'ouverture de nombreux emplois aux ressortissants européens comporte une réserve pour les emplois de souveraineté."],
    ["Oui, une équivalence de diplôme français remplace la nationalité française exigée", "La reconnaissance d'un diplôme ne remplace pas une condition de nationalité attachée à l'emploi."],
    ["Non, parce que tous les emplois de fonctionnaire sont interdits à tout Européen non français", "L'exclusion de certains emplois de souveraineté ne signifie pas une interdiction de tous les emplois de fonctionnaire aux ressortissants européens."]
  ], "Certains emplois publics sont ouverts aux ressortissants européens sous les conditions du poste. Ceux qui participent à l'exercice de la souveraineté ou de prérogatives de puissance publique concernées sont réservés aux Français. Des exceptions particulières existent aussi pour certaines professions.", "Ouverture européenne ne signifie pas ouverture de chaque fonction de souveraineté.", "scenario", true);
  q("candidature", ["L5", "PUBLIC"], "Une condamnation pénale n'interdit pas indistinctement tout emploi public", "Une personne veut accéder à la fonction publique et a une condamnation inscrite au bulletin n° 2 du casier judiciaire. Quelle règle faut-il vérifier sans faire de raccourci ?", "Les condamnations qui y figurent ne doivent pas être incompatibles avec l'exercice des fonctions visées", [
    ["Toute condamnation, quelle qu'elle soit, interdit à vie tout emploi public", "La condition porte sur l'incompatibilité avec les fonctions ; elle ne doit pas être transformée en interdiction générale et définitive pour toute condamnation."],
    ["Aucune condamnation ne peut jamais être examinée pour un emploi public", "Le bulletin n° 2 et la compatibilité des condamnations font partie des conditions applicables."],
    ["Une condamnation incompatible devient automatiquement compatible après la réussite du concours", "Réussir un concours ne supprime pas les autres conditions légales d'accès ou d'exercice."]
  ], "Les conditions d'accès comprennent notamment les droits civiques et la compatibilité des mentions du bulletin n° 2 avec les fonctions. L'évaluation dépend des fonctions et des règles applicables, pas d'une formule selon laquelle tout passé pénal exclurait tout poste.", "Casier judiciaire : compatibilité avec les fonctions, pas raccourci absolu.", "scenario", true);
  q("candidature", ["L5"], "Réussir un concours territorial ne garantit pas une nomination immédiate", "Une personne réussit un concours de la fonction publique territoriale et pense qu'une collectivité lui attribuera immédiatement un poste sans autre démarche. Que rappelle le Livret ?", "La réussite permet de candidater mais la personne doit encore trouver un employeur pour être recrutée", [
    ["Le jury du concours l'affecte automatiquement dans la collectivité qu'elle choisit", "Le jury apprécie la réussite au concours ; cette réussite ne remplace pas la candidature et le recrutement par un employeur territorial."],
    ["L'inscription sur la liste après le concours vaut déjà nomination par une collectivité", "La liste permet la candidature dans le cadre prévu ; inscription et nomination sur un emploi sont deux étapes différentes."],
    ["L'État doit la rémunérer dès les résultats avant tout recrutement territorial", "La réussite au concours ne signifie pas qu'un emploi territorial est occupé ; une rémunération d'agent ne découle pas automatiquement des seuls résultats."]
  ], "Le Livret distingue la réussite au concours territorial et le recrutement par un employeur. Il faut rechercher un poste et suivre la procédure applicable ; la réussite ne signifie pas que le poste est déjà attribué.", "Concours réussi : une étape d'accès, pas un poste déjà signé.", "scenario", true);

  window.CIVIQUE_SUPPLEMENTS = window.CIVIQUE_SUPPLEMENTS || [];
  window.CIVIQUE_SUPPLEMENTS.push({ id: "approfondissement-droits-societe", sources, lessons: [], questions });
})();

