const Includes = require("./../config/includes");
const mailer = require("./../config/mailer");

// Page d'accueil du site
module.exports.renderHomePage = (req, res) => {
  res.render("index", {});
};

// Page d'authentification
module.exports.renderLoginPage = (req, res) => {
  res.render("login", {});
};

// Page de POD (Print On Demand)
module.exports.renderPodPage = (req, res) => {
  res.render("pod", {});
};

// Page de visualisation des commandes passées
module.exports.renderHistoryPage = (req, res) => {
  res.render("history", {});
};

// Page 404
module.exports.renderNotFoundPage = (req, res) => {
  res.render("404", {});
};
