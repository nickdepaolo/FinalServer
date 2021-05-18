const db = require( '../db');

const UserModel = require( './users' );
const StoreModel = require( './store' );
const ItemModel = require( './item' );

UserModel.hasOne( StoreModel );
UserModel.hasMany( ItemModel );

StoreModel.belongsTo( UserModel );
StoreModel.hasMany( ItemModel );

ItemModel.belongsTo( StoreModel );

module.exports = {
    dbConnection: db,
    models: {
        UserModel,
        StoreModel,
        ItemModel
    }
};
