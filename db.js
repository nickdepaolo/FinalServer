const { Sequelize } = require( "sequelize" );

const db = new Sequelize( process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIROMENT === 'production'
});

module.exports = db;