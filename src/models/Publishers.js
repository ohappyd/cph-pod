const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "Publishers",
    {
      name: {
        type: Sequelize.STRING,
        field: "name"
      },
      address: {
        type: Sequelize.STRING,
        field: "address"
      },
      email: {
        type: Sequelize.STRING,
        field: "email"
      },
      phoneNumber: {
        type: Sequelize.STRING,
        field: "phoneNumber"
      },
    },
    { freezeTableName: true }
  );
};
