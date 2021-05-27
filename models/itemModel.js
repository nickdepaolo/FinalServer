const { DataTypes } = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  itemPhoto: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Item;
