const fs = require("fs");
let makeRoute = {
    launch: (route, path) => {
        fs.exists(path + "app/routes/", (exists) => {
            if (!exists) {
                fs.mkdir(path + 'app/routes', () => {
                    makeRoute.createFile(route, path);
                });
            } else {
                makeRoute.createFile(route, path);
            }
        });
    },
    createFile: (route, path) => {
        fs.readFile(path + "console/templates/routes/crud.js", 'utf8', (err, data) => {
            let createStream = fs.createWriteStream(path + "app/routes/" + route + ".js");
            createStream.write(data.replace(/\$router/g, route));
            createStream.end();
        });
    }

};

module.exports = makeRoute;