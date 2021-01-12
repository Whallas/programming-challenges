const { execCommand } = require('../readline');
const { findSum } = require('./algorithm');

console.log('### Sum of all the multiples of 3 or 5 ###');

function run() {
    execCommand('Type a positive number:', function (number) {
        if (isNaN(number)) {
            console.error('Error: The value must be numeric.');
        } else if (number < 1) {
            console.error('Error: The number must be greater than 0.');
        } else {
            number--;
            console.log('The sum is', findSum(number));
        }
        run();
    });
}

run();
