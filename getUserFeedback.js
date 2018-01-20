const readline = require('readline');
const { colors } = require('./constants');
const chalk = require('chalk');

const user_input = {
    w: 'white',
    r: 'red',
    n: 'none'
}
exports.getUserFeedback = (guess) => {
    return new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const color_guess = guess.map(num => {
            const color = colors[num];
            return ' ' + chalk.keyword(color)(color);
        });
        const prompt = `
        My guess is: ${color_guess}. 

        Use: 
        'r' (red) - correct position and color.  
        'w' (white)  - correct color wrong position.
        to give feedback\n\n`;

        rl.question(prompt, (answer) => {
            rl.close();
            const res = answer.split('')
                .filter(l => (l === 'r' ||  l === 'w'));
            const res2 = res.slice(0,4);
            const res3 = [...res2, ...(new Array(4 - res2.length).fill('n')) ];
            const res4 = res3.map(l => user_input[l])
            resolve(res4.sort());
        });

    })
};

