const express = require('express');
const app = express();
const fs = require('fs');
let path = require('path');
const router = require('./router');
const config = require('../config/config');
let spiConfig = JSON.parse(fs.readFileSync(config.path.spi(path.resolve(__dirname))));
router.getRoutes().then(routes => {
    app
    // middleware that is specific to this router
        .use(function timeLog(req, res, next) {
            console.log('Time: ', new Date(Date.now()).toString());
            next()
        })
        // Uses routes
        .use('/', routes);

    let server = require('http').Server(app);

    server.listen(spiConfig.port, () => {
        console.log('Server launch on port 3000 ...');
    });
});
