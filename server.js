/*
  Au lancement du serveur:
    Se connecter à la base de données (qui devrait être crée déjà, avec les informations dans ./bin/constants.js),
    créer les tables dans la base de données,
    lancer une tache CRON avec une fréquence de xx heures qui va s'occuper d'aller récupérer les données via API et remplir notre base de données avec,
 */
// Charger les variables d'environnement
require("dotenv").config({ path: __dirname + "/.env" });

// Port d'écoute du serveur d'application
const PORT = 8081;

// Modules pour lancer le serveur
const app = require("./bin/express")();
const router = require("./bin/express-router")();

// Module de base de données accédant à MySQL
const database = require("./bin/database");

// Module s'occupant des tâches CRON
const scheduler = require("./bin/scheduler");

// Connexion au serveur de base de données
// database.connect().then(() => database.migrate());

// Lancer la tâche CRON à une fréquence d'1 heure
// scheduler.each(1, () => {});

// Le module pilotant Redmine
const redmine = require("./bin/redmine");

// Monter les routes sur l'application
require("./src/routers/default")(router);

// Puis on dit à express d'utiliser notre routeur
app.use("/", router);

// Enfin on lance notre serveur sur le port
app.listen(PORT);

// Serveur lancé
console.log(`
Serveur d'application en écoute sur le port: ${PORT}.
\nAccéder à l'application via http://127.0.0.1:${PORT}
`);
