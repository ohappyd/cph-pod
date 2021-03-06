const defaultController = require("./../controllers/default");
const authenticatedController = require("./../controllers/authenticated");

module.exports = function(router) {
  // Intercepter la route "/" : Page d'accueil
  router.get("/", defaultController.renderHomePage);

  // Intercepter la route "/connexion" : Page d'authentification
  router.get("/connexion", defaultController.renderLoginPage);
  router.post("/connexion", defaultController.attemptLogin);

  // Intercepter la route "/pod" : Page de Print On Demand
  router.get("/nouvelle-commande", authenticatedController.renderDodPage);

  // Intercepter la route "/commandes" : Page de Print On Demand
  router.get("/commandes", authenticatedController.renderHistoryPage);

  // Intercepter la route 404 : Page inexistante
  router.get("*", defaultController.renderNotFoundPage);
};
