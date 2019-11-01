const express = require("express");
const favicon = require('serve-favicon');

module.exports = function() {
  const app = express();

  // On ajoute jade à express ainsi que le chemin des vues
  app.set("view engine", "pug");
  app.set("views", "./public/views");

  // Serve favicon
  app.use(favicon(__dirname + '/../public/favicon.png'));

  // On définit des alias sur nos assets,
  // ainsi dans la vue on pourra facilement y faire référence sans tenir
  // compte du chemin du fichier
  app.use("/css", express.static("./public/css"));
  app.use("/js", express.static("./public/js"));
  app.use("/img", express.static("./public/img"));
  app.use("/vendor", express.static("./public/vendor"));

  return app;
};
