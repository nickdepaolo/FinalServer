const { DataTypes } = require("sequelize");
const db = require("../db");

const Store = db.define("store", {
  contactInfo: {
    type: DataTypes.STRING,
    allowNull: true,
   
  },
  storeDes: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },


});

module.exports = Store;
