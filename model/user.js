const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const USER = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  UserName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  EmailId: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  PhoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
});

module.exports = USER;
