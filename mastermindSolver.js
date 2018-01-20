const  shallowEqual = require('shallow-equal/arrays');
const { log } = require('./log');
const { colors, correct_feedback } = require('./constants');
const { generate } = require('./generateAllMasterMindCombinations');
const { calculateFeedback } = require('./calculateFeedback');
const { getUserFeedback } = require('./getUserFeedback');
const { printInstructions } = require('./printInstructions');

const elimination = (possibi, guess, feedback) => {
    return possibi.filter(code => {
        return shallowEqual(calculateFeedback(code, guess), feedback);
    });
};

// Simple algorithm for finding next guess from remaining possibilities!
const newGuess = (possibilities) => {
    return possibilities[0];
}

const go = async (guess, possibilities, done) => {
    console.log('possibilities', possibilities.length);
    const feedback = await getUserFeedback(guess);
    const new_possibilities = elimination(possibilities, guess, feedback);
    const new_guess = newGuess(new_possibilities);
    shallowEqual(correct_feedback, feedback) ? done() : go(new_guess, new_possibilities, done);
};

const done = () => {
    console.log('-- DONE! -- ');
}

const startGame = async () => {
    const a = await printInstructions();
    const possibilities = generate(colors, 4);
    const guess = [1, 1, 2, 2];
    go(guess, possibilities, done);
}

startGame();