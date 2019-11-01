const Includes = require("./../config/includes");
const mailer = require("./../config/mailer");

// Page de POD (Print On Demand)
module.exports.renderPodPage = (req, res) => {
  res.render("pod", {});
};

// Page de visualisation des commandes passées
module.exports.renderHistoryPage = (req, res) => {
  res.render("history", {});
};
