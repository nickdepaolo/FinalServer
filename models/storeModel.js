const {DataTypes} = require("sequelize");
const db = require("../db");

const Store = db.define("store", {
    
    storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },

    items: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true
    },

    contactInfo: {
        type: DataTypes.STRING,
        allowNull: true  
    }

})

module.exports = Store