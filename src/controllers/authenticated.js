const Includes = require("./../config/includes");
const mailer = require("./../config/mailer");

// Page de POD (Print On Demand)
module.exports.renderDodPage = (req, res) => {
  res.render("dod", {});
};

// Page de visualisation des commandes passées
module.exports.renderHistoryPage = (req, res) => {
  res.render("history", {});
};
