require( 'dotenv' ).config();
const Express = require( 'express' );
const app = Express();
const dbConnection = require( "./db" );
const controllers = require('./controllers');

app.use( require( './middleware/headers' ) );
app.use( require( "./middleware/validate-jwt" ) );
app.use( '/user', controllers.userController );
app.use( '/item', controllers.itemController );
app.use( '/store', controllers.storeController )
app.use( Express.json() );



dbConnection.authenticate()
    .then( () => dbConnection.sync() )
    .then( () => {
        app.listen( 3586, () => {
            console.log( `[Server]: App is listening on 3586.` );
        });
    })
    .catch( ( err ) => {
        console.log( `[Server]: Server crashed. Error = ${err}` );
    });
