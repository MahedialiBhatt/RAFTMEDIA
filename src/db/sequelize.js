const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: "mysql",
  }
);

sequelize
  .query("CREATE DATABASE IF NOT EXISTS raftmedia")
  .then(() => {})
  .catch((err) => {
    console.error("Error creating database:", err);
  });

module.exports = sequelize;
