const readline = require('readline');

/**
 * Execute a command line with input and output.
 *
 * @param {string} query
 * @param {Function} callback
 * @returns void
 */
function execCommand(query, callback) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question(`\n>> ${query}  `, function (answer) {
        rl.close();
        callback(String(answer).trim());
    });
}

exports.execCommand = execCommand;