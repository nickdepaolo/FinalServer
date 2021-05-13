const Express = require ('express');
const app = Express();

app.listen(3586, () => {
    console.log(`[Server]: Listening on 3586`);
})