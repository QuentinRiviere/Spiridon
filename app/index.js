var express = require('express');
var app = express();
let router = require('./router');

router.getRoutes().then(routes => {
    app
    // middleware that is specific to this router
        .use(function timeLog(req, res, next) {
            console.log('Time: ', new Date(Date.now()).toString());
            next()
        })
        .use('/', routes);

    let server = require('http').Server(app);

    server.listen(3000, () => {
        console.log('Server launch on port 3000 ...');
    });
});
