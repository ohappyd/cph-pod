const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "Roles",
    {
      label: {
        type: Sequelize.STRING,
        field: "label"
      }
    },
    { freezeTableName: true }
  );
};
