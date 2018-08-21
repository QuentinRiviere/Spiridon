const fs = require("fs");
let router = {
    getRoutes: () => {
        return new Promise((resolv, reject) => {
            fs.exists(process.env.PWD + "/routes", (exists) => {
                if (!exists) {
                    fs.mkdir(path + 'app/routes', () => {
                        router.readFiles().then(result => {
                            console.log('ok');
                            resolv(result);
                        }).catch(err => {
                            console.log(err);
                            reject([]);
                        });
                    });
                } else {
                    router.readFiles().then(result => {
                        resolv(result);
                    }).catch(err => {
                        console.log(err);
                        reject([]);
                    });
                }
            });
        });
    },
    readFiles: () => {
        return new Promise((resolv, reject) => {
            let array = [];
            fs.readdir(process.env.PWD + '/routes', (err, items) => {
                if (err) {
                    reject();
                }
                if (items.length > 0) {
                    for (let i = 0; i < items.length; i++) {
                        array.push(require('./routes/' + items[i]));
                        if (i === items.length - 1) {
                            resolv(array);
                        }
                    }
                } else {
                    console.log('No routes defined');
                }
            });
        });
    }
};

module.exports = router;