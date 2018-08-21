#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
let runner = require('./modules/runner');
let makeRoute = require('./commands/make-route');
let config = require('../config/config');
// Check if spi.config.json exist
let appPath = process.env.PWD === __dirname ? process.env.PWD + '/../' : process.env.PWD + '/';
let spiConfigPath = config.path.spi(__dirname);
let cliConfigPath = config.path.cli(__dirname);
if (!fs.existsSync(spiConfigPath) || !fs.existsSync(cliConfigPath)) {
    if (!fs.existsSync(spiConfigPath)) {
        console.error('spi.config.json is missing');
    }
    if (!fs.existsSync(cliConfigPath)) {
        console.warn('cli.config.json is missing');
    }
    return '';
}

let commandFunctions = {
  'make-route' : makeRoute
};

// Construct "args" object with global commands from console/cli.config.json and spi.config.json
let args = {};
let spiConfig = JSON.parse(fs.readFileSync(spiConfigPath));
let cliConfig = JSON.parse(fs.readFileSync(cliConfigPath));
Object.keys(cliConfig.default).forEach(function (key, index) {
    args[key] = cliConfig.default[key];
});
Object.keys(spiConfig.commands).forEach(function (key, index) {
    args[key] = spiConfig.commands[key];
});

if (process.argv.includes('--help') || process.argv.includes('--h') || process.argv.includes('-h')) {
    runner.help(args);
} else {
    runner.launch(args);

    let commands = '';
    let firstCommand = 0;
    Object.keys(args).forEach(function (key, index) {
        if(args[key].active === true){
            if(firstCommand === 0){
                firstCommand++;
                commandFunctions[key].launch(args[key].value, appPath);
                console.log('');
                console.log('🔥' + args[key].value + '🔥 route created');
                console.log('');
            }else{
            }
        }
    });

}