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

// Tenter de se connecter
module.exports.attemptLogin = (req, res) => {
  // const LDAP = require("ldap-client");
  // const ldap = new LDAP(
  //   {
  //     uri: process.env.LDAP_SERVER_HOST,
  //     connect: response => {
  //       ldap.bind(
  //         {
  //           binddn: "cn=admin,dc=com",
  //           password: "supersecret"
  //         },
  //         err => {}
  //       );
  //     },
  //     disconnect: () => {}
  //   },
  //   err => {
  //     console.log(err);
  //   }
  // );

  return res.redirect("/commandes");
};

// Page de dod (Delivery On Demand)
module.exports.renderPodPage = (req, res) => {
  res.render("dod", {});
};

// Page de visualisation des commandes passées
module.exports.renderHistoryPage = (req, res) => {
  res.render("history", {});
};

// Page 404
module.exports.renderNotFoundPage = (req, res) => {
  res.render("404", {});
};
