const Sequelize = require("sequelize");

module.exports = seq => {
  return seq.define(
    "Books",
    {
      title: {
        type: Sequelize.STRING,
        field: "title"
      },
      sub_title: {
        type: Sequelize.STRING,
        field: "subTitle"
      },
      author: {
        type: Sequelize.STRING,
        field: "author"
      },
      originalTitle: {
        type: Sequelize.STRING,
        field: "originalTitle"
      },
      copyrightYear: {
        type: Sequelize.INTEGER,
        field: "copyrightYear"
      },
      editionInfos: {
        type: Sequelize.TEXT,
        field: "editionInfos"
      },
      lang: {
        type: Sequelize.STRING,
        field: "lang"
      },
      chapterName: {
        type: Sequelize.STRING,
        field: "chapterName"
      },
      partName: {
        type: Sequelize.STRING,
        field: "partName"
      },
    },
    { freezeTableName: true }
  );
};
