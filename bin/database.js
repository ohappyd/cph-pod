// Utiliser sequelize pour générer
// la base de données et les tables
const Sequelize = require("sequelize");
const Constants = require("./constants");

class Database {
  constructor() {
    // Sequelize instance
    this.sequelizeInstance = null;

    // Models
    this.PrintContext = null;
  }

  // Attempt to connect to database server with credentials in constants file
  async connect() {
    // Créer une nouvelle instance de Seq, utilisant les constantes
    this.sequelizeInstance = new Sequelize(
      Constants.DB_NAME,
      Constants.DB_USER,
      Constants.DB_PASSWORD,
      {
        host: Constants.DB_HOST,
        port: Constants.DB_PORT,
        dialect: "mysql",
        pool: { max: 5, min: 0, idle: 10000 }
      }
    );

    // Forcer l'authentification et retourner en promesse
    return this.sequelizeInstance.authenticate();
  }

  // Launch migrations (create tables)
  async migrate() {
    // Charger les models requis en leur passant l'instance actuelle de Seq en paramètres
    this.Addendas = require("./../src/models/Addendas")(this.sequelizeInstance);
    this.BookCategories = require("./../src/models/BookCategories")(
      this.sequelizeInstance
    );
    this.Books = require("./../src/models/books")(this.sequelizeInstance);
    this.PrintContexts = require("./../src/models/PrintContexts")(
      this.sequelizeInstance
    );
    this.PrintRequests = require("./../src/models/PrintRequests")(
      this.sequelizeInstance
    );
    this.Publishers = require("./../src/models/Publishers")(
      this.sequelizeInstance
    );
    this.Roles = require("./../src/models/Roles")(this.sequelizeInstance);
    this.Users = require("./../src/models/Users")(this.sequelizeInstance);

    // Mettre en place les associations, clés étrangères, ...
    this.Publishers.belongsToMany(this.PrintContexts, {
      through: "PublisherPrintContexts",
      foreignKey: "publisherId",
      otherKey: "printContextId"
    }); // Une maison d'édition peut avoir plusieurs sorties d'impression (PDF, Kindle, Play Livres, ...)

    this.Books.belongsToMany(this.Addendas, {
      through: "BookAddendas",
      foreignKey: "bookId",
      otherKey: "addendaId"
    }); // Un livre peut avoir plusieurs addendas (Repentance, Biography, Very important, ...)
    this.Books.belongsTo(this.BookCategories, { as: "bookCategory" }); // Un livre appartient à une seule catégorie de livre

    this.Users.belongsToMany(this.Roles, {
      through: "UserRoles",
      foreignKey: "userId",
      otherKey: "roleId"
    }); // Un utilisateur a un ou plusieurs rôles
    this.Users.belongsToMany(this.Publishers, {
      through: "UserInPublishers",
      foreignKey: "userId",
      otherKey: "publisherId"
    }); // Un utilisateur est dans au moins une maison d'édition

    this.PrintRequests.belongsTo(this.Users, { as: "user" }); // Une demande d'impression ,POD prochainement, est lancée par un utilisateur
    this.PrintRequests.belongsTo(this.Publishers, { as: "publisher" }); // Un POD est relié à une seule maison d'édition
    this.PrintRequests.belongsTo(this.Books, { as: "book" }); // Un POD est relié à un seul livre
    this.PrintRequests.belongsToMany(this.Addendas, {
      through: "PrintRequestsAddendas",
      foreignKey: "printRequestId",
      otherKey: "addendaId"
    }); // Un POD peut overrider les addendas sélectionnés par défaut d'un livre

    // La méthode 'sync' de Seq permet de créer toutes les tables montées
    return this.sequelizeInstance.sync({ force: true, logging: false });
  }
}

// Retourner une instance de database
module.exports = new Database();
