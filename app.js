require( 'dotenv' ).config();
const Express = require( 'express' );
const dbConnection = require( "./db" );
const app = Express();
const controllers = require('./controllers');
app.use( Express.json() );

app.use( require( './middleware/headers' ) );
app.use( '/user', controllers.userController );
// app.use( require( "./middleware/validate-jwt" ) );
app.use( '/item', controllers.itemController );
app.use( '/store', controllers.storeController )



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
