
# Cas d'utilisation

## Lancement du serveur
- Le serveur lance une tâche CRON qui s'exécutera à chaque heure pour aller récupérer les livres qui sont au statut BAT (Bon à tirer) sur Redmine, en JSON
- Une fois récupérées, on parse ces données JSON et on les stocke dans notre base de données, chaque objet vers sa table

## L'utilisateur arrive sur la page d'accueil
- Aucun objet de la base de données n'intervient.

## L'utilisateur tente d'accéder à l'application de Delivery On Demand (dod)
- Le système vérifie s'il y a une session d'utilisateur en cours
  - Si oui, on récupère cet utilisateur en question (@User) pour faire les requêtes prochaines
  - Sinon, on le redirige vers la page de connexion

- Sur la page de connexion, on demande à l'internaute de renseigner ces informations de connexion et on tente l'authentification
  - Si l'authentification marche, on persiste cet utilisateur dans la session et on le redirige vers la page de dod
  - Sinon on le redirige vers la page de connexion

- Sur la page dod
  - Côté serveur, on récupère les données (en base) pour fournir à l'application: les @Books, les @Publishers, les @Addendas, les @PrintContexts, les @Publishers(de l'@User en cours)
  - On génère le formulaire de dod avec les champs nécessaires et les données récupérées


- Différents items du formulaire:
**Publisher** : Si l'utilisateur est lié à plusieurs maisons d'édition, il a la possibilité de choisir la maison d'édition pour laquelle le fichier doit être généré. 
**Livre**: Choix dans une liste du livre à éditer
**ISBN**: Obligatoire. Valider si ça respecte le format des ISBN
**Format de sortie**: PDF/Mobi (A venir)/EPUB (A venir)   /// Choix multiple
**Format du PDF final**: (disponible uniquement si on choisit un PDF. help: Largeur X Hauteur en centimètres: exemple 13.34 X 20.32)
**Taille par défaut des textes**: 11pt/12pt/13pt
**Informations d'édition**: textarea

- Addenda
**Ajouter le "Très important"?** Oui/Non
**Ajouter la "Biographie de l'auteur"?** Oui/Non
**Ajouter le "Catalogue"?** Oui/Non
**Ajouter la page "Contacts"?** Oui/Non
**Rendre les chapitres non numérotés?** Oui/Non


  - Suite à la creation de la @PrintRequest, on appel l'API Jenkins (infos à définir) qui lance la tâche de génération. Dans la requête, on donne les informations de l'API local qui doit être contactée pour renvoyer le(s) fichier(s) généré(s).
  - Si cette @PrintRequest.command avait déjà été exécutée, il y a au plus xx heures, le serveur va donc récupérer le(s) fichier(s) résultant(s) de cette génération et le(s) soumettre en téléchargement nouveau
  - Le serveur soumet cette @PrintRequest.command à l'API qui s'occupera de faire le job correspondant
  - À cette @PrintRequest, on lui spécifie que le job n'est pas encore terminé @PrintRequest.completed(false), vu que la génération du fichier(s) n'est pas instantané, il faut un certain temps
  - On redirige l'internaute vers la page des historiques des commandes qu'il a effectué

## L'utilisateur tente d'accéder à la page de l'historique des commandes
- Vérifier déjà qu'un utilisateur est connecté...
- Cette page listera toutes les @PrintRequest, même celles qui ne sont pas encore terminées
- Et dès qu'on a une réponse de l'API pour une certaine @PrintRequest, on la modifie, en spécifiant qu'elle est terminée désormais @PrintRequest.completed(true), la page des historiques des commandes se met à jour automatiquement
- Le serveur enregistre le(s) fichier(s) résultant(s) de la génération dans un répertoire dédié et modifie la @PrintRequest.destFiles[] qui sera le chemin vers ce(s) fichier(s)
- L'internaute peut alors cliquer sur un bouton pour télécharger le(s) fichier(s) généré(s), un autre bouton pour relancer la @PrintRequest.command

## L'utilisateur se déconnecte
- Le serveur détruit la session de l'utilisateur actuel
- L'internaute est redirigé vers la page de connexion ou la page d'accueil
