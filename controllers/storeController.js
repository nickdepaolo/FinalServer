const Express = require("express");
const router = Express.Router();
const validateJWT = require('../middleware/validate-jwt');
const { StoreModel } = require('../models/storeModel');

//Create New Store
router.post('/', validateJWT, async ( req, res ) => {
    const { storeId, items, contactInfo } = req.body.store;
    const { id } = req.user;
    const storeEntry = {
        storeId,
        items,
        contactInfo
    } 
    try {
        const newStore = await StoreModel.create( storeEntry );
        res.status( 200 ).json( newStore );
    } catch ( err ) {
        res.status( 500 ).json( { error: err } );
    }
    StoreModel.create( storeEntry )
} );

//Get Store By Id 
router.get( '/mystore', async ( req, res ) => {
    const { id } = req.user;
    try {
        const results = await StoreModel.findAll( {
            where: {
                owner_id: id
            }
        } );
        res.status( 200 ).json( results )
    } catch {
        res.status( 500 ).json( { error: err } );
    }
} );

//Update Contact
router.put( '/update/Id', validateJWT, async ( req, res ) => {
    const { contactInfo } = req.body.store;
    const storeId = req.params.Id;
    const userId = req.user.Id

    const query = {
        where: {
            id:  storeId,
        }
    };

    const updatedDescription = { 
        contactInfo: contactInfo
    };

    try {
        const update = await StoreModel.update( updatedDescription, query );
        res.status( 200 ).json( update );
    } catch ( err ) {
        res.status( 500 ).json( {error: err } )
    }
} );

//Delete C0ontact Info
router.delete( '/delete/:id', validateJWT, async ( req, res ) => {
    const storeId = req.params.id
    const userId = req.user.id

    try {
        const query = {
            where: {
                id: contactInfo
            }
        };

        await StoreModel.destroy( query );
        res.status( 200 ).json( { message: 'Contact Info Removed'} );
    } catch ( err ) {
        res.status( 500 ).json( {error: err } )
    }
} );

module.exports = router;