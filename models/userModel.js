const {DataTypes} = require("sequelize");
const db = require("../db");

const User = db.define("user", {
   
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {                                       
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    maker: {
        type: DataTypes.BOOLEAN,
        allowNull: false 
    },
    storeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    admin: {
        type: DataTypes.STRING,
        allowNull: false,
    }

})

module.exports = User;