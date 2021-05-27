const { DataTypes } = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,

  },

  itemPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
 
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Item;
