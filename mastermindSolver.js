const shallowEqual = require('shallow-equal/arrays');
const { log } = require('./log');
const { colors, correct_feedback } = require('./constants');
const { generate } = require('./generateAllMasterMindCombinations');
const { calculateFeedback } = require('./calculateFeedback');
const { getUserFeedback } = require('./getUserFeedback');
const { printInstructions } = require('./printInstructions');

// remove combinations that do not produce the feedback we recieved.
const elimination = (possibi, guess, feedback) => {
    return possibi.filter(code => {
        return shallowEqual(calculateFeedback(code, guess), feedback);
    });
};

// Simple algorithm for finding next guess from remaining possibilities!
const newGuess = (possibilities) => {
    return possibilities[0];
}

const go = async (guess, possibilities, done, state) => {
    const { guessNumber } = state;
    const nextGuessNumber = guessNumber + 1;
    const feedback = await getUserFeedback(guess, nextGuessNumber, possibilities.length);
    const new_possibilities = elimination(possibilities, guess, feedback);
    const new_guess = newGuess(new_possibilities);
    const new_state = {
        guessNumber: state.guessNumber + 1
    }
    shallowEqual(correct_feedback, feedback) ?
        done() :
        go(new_guess, new_possibilities, done, new_state);
};

const done = () => {
    console.log('-- DONE! -- ');
}

const startGame = async () => {
    const a = await printInstructions();
    const possibilities = generate(colors, 4);
    const guess = [1, 1, 2, 2];
    const state = {
        guessNumber: 0
    }
    go(guess, possibilities, done, state);
}

startGame();