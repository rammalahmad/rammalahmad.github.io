# Bleu Blanc Quiz

La France que nous aimons : une application publique, interactive et utilisable hors ligne pour connaître la France et préparer l’examen civique.

## Contenu

- 2 626 QCM en français : 259 énoncés du PDF officiel, 1 754 QCM complémentaires et 613 mises en situation d’entraînement
- Les 227 fiches et sous-fiches des cinq thèmes du ministère, ainsi que les sections du Livret du citoyen, transformées en questions
- 101 leçons sur les valeurs, les droits, l’histoire, la géographie, la culture, les institutions et la vie quotidienne
- Des explications détaillées pour chaque mauvaise réponse
- Des séances adaptatives et une répétition espacée des notions fragiles
- Un parcours intégral par petites séances (20 QCM par défaut, taille réglable) : chaque question est explorée avant de commencer un nouveau tour
- Une révision par notion qui reprend les erreurs et propose d’autres exemples pour vérifier la compréhension
- Des examens blancs de 40 questions en 45 minutes
- Une banque consultable avec recherche sans accents, filtres par thème, type, fiche ou chapitre, niveau, statut de progression et favoris
- Un suivi de couverture par fiche et repère : questions explorées, questions maîtrisées et révision ciblée
- Des références qui ouvrent directement les pages du Livret joint, disponibles dans le cache hors ligne
- Une interface responsive adaptée aux téléphones, tablettes et ordinateurs
- Une progression enregistrée uniquement dans le navigateur
- L’export et l’import des sauvegardes

La version publique est volontairement centrée sur l’examen civique. Elle ne contient pas le module de préparation à l’entretien disponible dans la version complète privée.

## Confidentialité

Aucun compte ni stockage en ligne n’est utilisé. Le prénom ou pseudonyme, les résultats et les préférences restent dans le stockage local du navigateur de chaque visiteur.

La clé de sauvegarde `civique-coach-state-v1`, les 1 957 identifiants de la version précédente et leurs choix sont conservés. Le serveur ne reçoit pas les réponses, le prénom ou les résultats. Chaque navigateur, appareil et origine d’URL possède sa propre sauvegarde ; le stockage n’est pas synchronisé. Un effacement des données du site, une session privée ou une politique d’éviction du navigateur peut supprimer la progression : exportez régulièrement votre sauvegarde.

Les pourcentages de couverture se recalculent sur la banque élargie. Une baisse du pourcentage après la mise à jour ne signifie pas que vos résultats précédents ont été effacés.

Le parcours intégral distingue « abordé » de « maîtrisé ». Une mauvaise réponse est explorée, mais reste à consolider ; une question sans réponse dans un examen blanc compte comme fausse pour la note, sans être artificiellement marquée comme explorée.

## Utilisation locale et hors ligne

Depuis ce dossier, lancez :

    python3 -m http.server 8081 --bind 127.0.0.1

Ouvrez [l’application locale](http://localhost:8081/). Après la première ouverture et l’installation du cache, les QCM et les PDF joints sont utilisables hors ligne. Les liens vers les fiches externes nécessitent une connexion.

La version publique reste centrée sur l’examen ; elle n’expose pas le module d’entretien ni les éléments personnels de la version complète.

## Transparence

Le ministère publie les formulations des questions de connaissance, mais pas leurs choix de réponse. Les choix, explications et mises en situation de cette application sont du matériel pédagogique créé pour l’entraînement et vérifié à partir de sources officielles.

Les formulations officielles sont réutilisées sous la Licence Ouverte 2.0.

Le PDF contient 259 lignes, mais 258 énoncés distincts : une formulation apparaît deux fois. Les 15 lignes dessinées sous forme de contours, auparavant absentes de l’extraction automatique, sont incluses. Les mises en situation du véritable examen ne sont pas publiées : aucun outil ne peut garantir de connaître toutes les questions à venir. Les examens blancs mélangent 28 énoncés officiels et 12 situations pédagogiques, avec le seuil de 32/40.

Les détails de cartes, dates secondaires et autres approfondissements sont signalés. Les séances quotidiennes privilégient les notions de base ; la présence d’un détail dans le Livret ne signifie pas qu’il sera demandé au test.

L’indice d’entraînement est distinct de la couverture de toute la banque. Il porte sur les connaissances officielles, les notions des situations de niveau de base et les trois derniers examens blancs, en respectant la pondération des thèmes de l’examen. Les variantes non vues d’une notion déjà travaillée et les détails complémentaires ne font pas artificiellement baisser cet indice. Il ne prédit pas le résultat de l’examen réel.

## Sources et édition

Contenu consulté et vérifié le 21 octobre 2026 :

- [Fiches thématiques du ministère de l’Intérieur](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/)
- [Catalogue vérifié des fiches](assets/catalogue-fiches-2026-10-21.json) : 256 pages parcourues, dont 29 sommaires et 227 fiches terminales ; aucune fiche absente du registre de questions
- [Page du Livret du citoyen](https://www.immigration.interieur.gouv.fr/documentation/guides-textes-et-brochures/livret-du-citoyen.html)
- [Présentation actuelle de l’examen](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)
- [Banque officielle jointe](assets/questions-naturalisation-officielles.pdf) et [inventaire des 259 lignes](assets/official-source-manifest.json)
- [Livret joint, 83 pages](assets/livret-du-citoyen-mai-2026.pdf), qui porte la mention **édition mai 2026**. Il n’est pas présenté comme une copie vérifiée de l’édition réglementaire de juillet ; consultez le site du ministère pour la version en vigueur.

Chaque QCM indique ses références. Des précisions sourcées évitent d’enseigner comme actuelles des données périmées ou simplifiées : chiffres contextualisés, distinction entre armistice et capitulation, titres d’œuvres homonymes, notions juridiques et périmètres géographiques.
