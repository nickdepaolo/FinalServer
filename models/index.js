// const db = require( '../db');
const sequelize = require ('sequelize');

const UserModel = require( './userModel' );
const StoreModel = require( './storeModel' );
const ItemModel = require( './itemModel' );

UserModel.hasOne( StoreModel );
UserModel.hasMany( ItemModel );

StoreModel.belongsTo( UserModel );
StoreModel.hasMany( ItemModel );

ItemModel.belongsTo( StoreModel );

module.exports = {
    // dbConnection: db,
    // models: {
        UserModel,
        StoreModel,
        ItemModel
    // }
};
