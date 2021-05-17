const {DataTypes} = require("sequelize");
const db = require("../db");

const Item = db.define("item", {
    
    storeId: {
        type: DataTypes.NUMBER,
        allowNull: false
    },

    items: {
        type: DataTypes.ARRAY,
        allowNull: true
    },

    constactInfo: {
        type: DataTypes.STRING,
        allowNull: true  
    }

})

module.exports = Item