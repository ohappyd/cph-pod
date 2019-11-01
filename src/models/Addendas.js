const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "Addendas",
    {
      label: {
        type: Sequelize.STRING,
        field: "label"
      },
      content: {
        type: Sequelize.TEXT,
        field: "content"
      },
    },
    { freezeTableName: true }
  );
};
