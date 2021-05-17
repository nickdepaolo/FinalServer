const db = require( '../db');

const UserModel = require( './users' );
const StoreModel = require( './store' );
const ItemModel = require( './item' );

StoreModel.hasMany(ItemModel);
StoreModel.belongsTo(UserModel);
ItemModel.belongsTo(StoreModel)

module.exports = {
    dbConnection: db,
    models: {
        UserModel,
        StoreModel,
        ItemModel
    }
};
