const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },

  maker: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = User;
