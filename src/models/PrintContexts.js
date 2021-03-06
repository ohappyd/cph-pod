const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "PrintContexts",
    {
      label: {
        type: Sequelize.STRING,
        field: "label"
      }
    },
    { freezeTableName: true }
  );
};
