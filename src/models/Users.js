const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "Users",
    {
      firstName: {
        type: Sequelize.STRING,
        field: "firstName"
      },
      lastName: {
        type: Sequelize.STRING,
        field: "lastName"
      },
      email: {
        type: Sequelize.STRING,
        field: "email"
      },
      password: {
        type: Sequelize.STRING,
        field: "password"
      },
      ldapAccount: {
        type: Sequelize.INTEGER,
        field: "ldapAccount"
      },
      lang: {
        type: Sequelize.TEXT,
        field: "lang"
      }
    },
    { freezeTableName: true }
  );
};
