const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "PrintRequests",
    {
      command: {
        type: Sequelize.STRING,
        field: "command"
      },
      isbn: {
        type: Sequelize.STRING,
        field: "isbn"
      },
      ip: {
        type: Sequelize.STRING,
        field: "ip"
      },
      completed: {
        type: Sequelize.BOOLEAN,
        field: "completed"
      },
      downloaded: {
        type: Sequelize.BOOLEAN,
        field: "downloaded"
      },
      customEditionInfos: {
        type: Sequelize.TEXT,
        field: "customEditionInfos"
      },
      rebuildCount: {
        type: Sequelize.INTEGER,
        field: "rebuildCount"
      },
      sendEmailWhenReady: {
        type: Sequelize.BOOLEAN,
        field: "sendEmailWhenReady"
      },
    },
    { freezeTableName: true }
  );
};
