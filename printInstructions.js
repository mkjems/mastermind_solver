const readline = require('readline');
const chalk = require('chalk');

const { colors } = require('./constants');

exports.printInstructions = () => {
    return new Promise((resolve, reject) => {

        const cols = colors.map(color => {
            return chalk.keyword(color)(' ' + color);
        });

        console.log(`
        Let's play Mastermind !
        The possible colors are: 
        
        ${cols}
    
        Please write a combination of four colors down, and I will try to guess it.
        You may only use the same color once.
        `);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('When you are ready, Press enter to start', (answer) => {
            rl.close();
            resolve('');
        });
    });
}