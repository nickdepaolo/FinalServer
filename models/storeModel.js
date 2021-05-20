const {DataTypes} = require("sequelize");
const db = require("../db");

const Store = db.define("store", {
    
    contactInfo: {
        type: DataTypes.STRING,
        allowNull: true  
    }

})

module.exports = Store