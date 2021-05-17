const {DataTypes} = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
    
    storeId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true
    },

    items: {
        type: DataTypes.ARRAY(DataTypes.NUMBER),
        allowNull: true
    },

    contactInfo: {
        type: DataTypes.STRING,
        allowNull: true  
    }

})

module.exports = Item