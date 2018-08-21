// Cli runner module
require('console.table');
let runner = {
    launch : (args) => {
        let BreakException = {};
        try {
            process.argv.forEach(function (value, index, array) {
                if (index > 0) {
                    if (value.includes('--') && Object.keys(args).includes(value.replace('--', '')) && process.argv.length > index) {
                        if (process.argv[(index + 1).toString()].includes('--') === false) {
                            args[value.replace('--', '')].value = process.argv[(index + 1).toString()];
                        } else {
                            args[value.replace('--', '')] = true;
                        }
                    } else if (value.includes('--') && !Object.keys(args).includes(value.replace('--', ''))) {
                        console.log("Unknow argument '" + value + "' used");
                        throw BreakException;
                    }
                }
            });
        } catch (e) {
            if (e !== BreakException) throw e;
        }
    },
    // Display help interface
    help : (args) => {
        let helpCommands = [];
        Object.keys(args).forEach(function (key, index) {
            helpCommands.push({
                "Command": args[key].command,
                "Description": args[key].desc
            });
        });
        console.log('');
        console.table(helpCommands);
        console.log('');
    }
};

module.exports = runner;