const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "BookCategories",
    {
      name: {
        type: Sequelize.STRING,
        field: "name"
      },
      description: {
        type: Sequelize.TEXT,
        field: "description"
      },
    },
    { freezeTableName: true }
  );
};
