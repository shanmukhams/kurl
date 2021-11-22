const Sequelize = require("sequelize");
const sequelize = require("../startup/db");

const Log = sequelize.define("Log", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  kurl: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Url;