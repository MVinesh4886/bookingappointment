const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const USER = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  UserName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: Sequelize.STRING,
  EmailId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: Sequelize.STRING,
  PhoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = USER;
