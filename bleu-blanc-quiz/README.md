# Bleu Blanc Quiz

La France que nous aimons : une application publique, interactive et utilisable hors ligne pour connaître la France et préparer l’examen civique.

## Contenu

- 2 626 QCM en français : 259 énoncés du PDF officiel, 1 754 QCM complémentaires et 613 mises en situation d’entraînement
- Les 227 fiches et sous-fiches des cinq thèmes du ministère, ainsi que les sections du Livret du citoyen, transformées en questions
- 101 leçons sur les valeurs, les droits, l’histoire, la géographie, la culture, les institutions et la vie quotidienne
- Des explications détaillées pour chaque mauvaise réponse
- Des séances adaptatives et une répétition espacée des notions fragiles
- Un parcours intégral par petites séances (20 QCM par défaut, taille réglable) : chaque question est explorée avant de commencer un nouveau tour
- Un mode « Tout un thème » pour faire la liste complète de l’un des cinq grands thèmes, sans limite de séance
- Une révision par notion qui reprend les erreurs et propose d’autres exemples pour vérifier la compréhension
- Des examens blancs de 40 questions en 45 minutes
- Une banque consultable avec recherche sans accents, filtres par thème, type, fiche ou chapitre, niveau, statut de progression et favoris
- Un suivi de couverture par fiche et repère : questions explorées, questions maîtrisées et révision ciblée
- Des références qui ouvrent directement les pages du Livret joint, disponibles dans le cache hors ligne
- Une interface responsive adaptée aux téléphones, tablettes et ordinateurs
- Une progression enregistrée uniquement dans le navigateur
- L’export et l’import des sauvegardes

La version publique est volontairement centrée sur l’examen civique. Elle ne contient pas le module de préparation à l’entretien disponible dans la version complète privée.

## Priorité aux 258 questions officielles

Depuis la mise à jour du 24 octobre 2026, l’accueil, le premier mode d’entraînement et la banque de questions donnent la priorité aux **258 énoncés officiels distincts**. Les séances de 20 questions couvrent d’abord les questions non abordées, sans répétition ; le doublon du PDF n’est compté qu’une fois. Le parcours intégral des 2 626 QCM reste disponible comme complément, sans être un préalable à l’examen.

Les quatre choix des nouvelles séances sont plus exigeants : dates proches, durées voisines et fonctions institutionnelles faciles à confondre. Chaque mauvais choix possède sa propre explication et un repère aide à mémoriser la bonne réponse. Ces choix sont pédagogiques, pas les options officielles du véritable examen.

Un compteur séparé distingue les questions abordées avec ces choix exigeants, les bonnes réponses au dernier essai et les erreurs à retravailler immédiatement. Il commence à zéro sans effacer les anciens résultats ou favoris. Une bonne réponse récente ne garantit pas une maîtrise durable : les mises en situation et les examens blancs restent importants.

Les anciennes séances sauvegardées conservent leurs choix et corrections. Les nouvelles séances enregistrent aussi une copie de leurs options, pour reprendre exactement au même endroit après rechargement. Le remplacement d’une séance en cours demande confirmation ; les réponses d’un examen blanc interrompu sont comptabilisées sans créer un faux score d’examen complet.

## Tout un grand thème

Dans **S’entraîner → Tout un thème**, choisissez le contenu puis l’une des cinq cartes :

- **Questions officielles — priorité** : toutes les questions officielles distinctes de ce thème (38, 56, 37, 83 et 44, dans l’ordre des cartes).
- **Tout le thème — QCM et situations** : les connaissances officielles, les QCM complémentaires et les situations, y compris les approfondissements.
- **Mises en situation** : toutes les situations pédagogiques du thème.

La liste complète est parcourue sans limite de 20 questions et sans chronomètre. Les questions non abordées sont placées en premier, mais celles déjà vues restent dans la séance. Le doublon officiel n’est proposé qu’une fois : ce mode couvre 2 625 questions distinctes sur les 2 626 lignes de la banque.

Les réponses, explications détaillées, favoris, ordre des choix et position sont sauvegardés dans le navigateur. La carte de la séance en cours affiche **Reprendre la séance**. Il n’existe qu’une séance active : commencer un autre thème demande confirmation et remplace sa reprise, sans effacer les réponses déjà données. Les longues séances affichent seulement 80 indicateurs de position à la fois ; aucune question n’est retirée.

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

## Répartition des examens blancs

Chaque nouvel examen blanc tire au hasard les questions dans les quotas suivants :

| Thème | Connaissances | Mises en situation | Total |
|---|---:|---:|---:|
| Principes et valeurs de la République | 5 | 6 | 11 |
| Système institutionnel et politique | 6 | 0 | 6 |
| Droits et devoirs | 5 | 6 | 11 |
| Histoire, géographie et culture | 8 | 0 | 8 |
| Vivre dans la société française | 4 | 0 | 4 |
| Total | 28 | 12 | 40 |

Les connaissances sont sélectionnées parmi les 258 énoncés officiels distincts. Les situations restent pédagogiques et ne sont pas issues de la banque réelle. Les autres situations restent disponibles dans les entraînements libres. L’indice d’entraînement utilise la même pondération. Les séances déjà commencées conservent leurs questions et leurs choix ; aucune progression ni aucun historique n’est effacé.

### Quotas par notion

Les nouveaux examens respectent aussi les sous-quotas de l’[article 3 de l’arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/eli/arrete/2025/10/10/INTV2527907A/jo/article_3) :

| Thème | Questions de connaissances | Situations |
|---|---|---:|
| Principes et valeurs | Devise et symboles : 3 ; laïcité : 2 | 6 |
| Institutions | Démocratie et vote : 3 ; organisation de la République : 2 ; institutions européennes : 1 | 0 |
| Droits et devoirs | Droits fondamentaux : 2 ; obligations et devoirs : 3 | 6 |
| Histoire, géographie et culture | Périodes et personnages historiques : 3 ; territoires et géographie : 3 ; patrimoine : 2 | 0 |
| Vie en société | Installation et résidence : 1 ; soins : 1 ; travail : 1 ; autorité parentale et éducation : 1 | 0 |

Le fichier partagé [mock-blueprint.js](mock-blueprint.js) répartit explicitement les 258 énoncés distincts dans les 14 notions de connaissances. Ce classement question par question est pédagogique, et non une annotation ministérielle publiée. Les thèmes, énoncés, réponses et anciens identifiants restent inchangés. O045 conserve son rôle d’ancien alias de O037 ; les nouveaux tirages ne proposent que le représentant canonique.

Le générateur respecte le quota de chaque notion, puis mélange les 40 questions. Aucune question n’est empruntée à une autre notion pour compléter un quota. Si une réserve devient insuffisante, aucun examen partiel n’est lancé.

La page « Examen blanc » permet de déplier **Voir les quotas par notion**. Les anciens examens enregistrés gardent leur tirage et affichent un avertissement si leur plan est antérieur. Commencer un nouvel examen demande confirmation lorsqu’une séance est en cours ; les réponses d’un examen interrompu sont comptabilisées une seule fois, sans créer de faux score complet. La durée de 45 minutes, le seuil de 32/40, les sauvegardes et les choix exigeants sont conservés.

### Rotation des questions entre examens

Chaque nouvel examen donne la priorité aux questions qui n’ont encore jamais été proposées dans chaque notion. Les questions du dernier tirage passent après les autres ; si la réserve restante ne suffit pas, seules les répétitions nécessaires sont réintroduites, sans changer les quotas. À mesure que les notions sont parcourues, les questions les moins proposées puis les plus anciennes reviennent. Les égalités et l’ordre des 40 questions restent mélangés.

Les réserves actuelles permettent deux nouveaux examens consécutifs entièrement différents. La rotation couvre les 258 énoncés officiels distincts et les 194 situations essentielles des deux thèmes concernés. Une petite notion peut revenir avant que toutes les questions d’une autre notion soient passées : ses quotas restent obligatoires.

La mémoire de rotation est privée et stockée dans le même navigateur que la progression, dans un bloc indépendant des réussites et erreurs. Un nouvel examen est compté uniquement à son départ confirmé, avec sa séance. Préparer un tirage, annuler, reprendre ou terminer l’examen ne la consomme pas à nouveau. Un ancien examen interrompu est aussi conservé dans cette mémoire lorsqu’une séance d’entraînement le remplace, sans compter celle-ci comme un examen. Un compteur de couverture est affiché sur la page « Examen blanc ».

Les anciens examens conservés (au maximum les 20 présents dans l’historique) et le mock actif servent à initialiser cette mémoire sans modifier leurs scores, réponses ou options. Même une question proposée mais laissée sans réponse est comptée comme proposée. Les anciens alias sont canonisés sans double crédit. Exporter/importer la progression conserve la rotation ; réinitialiser la progression la remet à zéro.

Le module [mock-rotation.js](mock-rotation.js) est partagé entre les deux versions et précaché pour l’usage hors ligne. Aucun nom, réponse ou compteur n’est envoyé à un serveur.

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
