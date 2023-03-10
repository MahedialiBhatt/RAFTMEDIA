const Sequelize = require("sequelize");
const sequelize = require("../db/sequelize");

const Post = sequelize.define("post", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
