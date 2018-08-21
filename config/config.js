let config = {
    path : {
        spi: (currentDirectory) => {
            return process.env.PWD === currentDirectory ? process.env.PWD + '/../spi.config.json' : process.env.PWD + '/spi.config.json';
        },
        cli: (currentDirectory) => {
            return process.env.PWD === currentDirectory ? process.env.PWD + '/../console/cli.config.json' : process.env.PWD + '/console/cli.config.json';
        }
    }

};

module.exports = config;