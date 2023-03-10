const Sequelize = require("sequelize");
const sequelize = require("../db/sequelize");

const Chat = sequelize.define("chat", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Chat;
