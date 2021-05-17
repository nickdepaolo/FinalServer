const {DataTypes} = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
       
    itemId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },

    itemPhoto: {
        type: DataTypes.BLOB,
        allowNull: true
    },

    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = Item