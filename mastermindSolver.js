var compare = require('shallow-equal/arrays');

const { log } = require('./log');
const { colors } = require('./constants');
const { generate } = require('./generateAllMasterMindCombinations');

const { calculateFeedback } = require('./calculateFeedback');

const first_all = generate(colors, 4);

const usersHiddenCode = [2, 4, 1, 3];
log('usersHiddenCode', usersHiddenCode);

// ----------------------
log('first', first_all);
log(first_all.length);

const firstGuess = [1, 1, 2, 2];
log('first guess:', firstGuess);

calculateFeedback(usersHiddenCode, firstGuess)
    .then((feedback_01) => {
        log('1st. feedback', feedback_01);
        
        const second_all = first_all.filter(ca => {
            return compare(calculateFeedback(ca, firstGuess), feedback_01);
        });
        log('*****************************************************');
    });

// ----------------------

// log('second_all', second_all);

// const secondGuess = second_all[0];
// log('second guess:', secondGuess);

// const fb_02 = calculateFeedback(usersHiddenCode, secondGuess);
// log('2nd. feedback', fb_02);

// const third_all = second_all.filter(ca => {
//     return compare(calculateFeedback(ca, secondGuess), fb_02);
// });

// log('*****************************************************');

// // ----------------------

// log('third_all', third_all);

// const thirdGuess = third_all[0];
// log('third guess:', firstGuess);

// const fb_03 = calculateFeedback(usersHiddenCode, thirdGuess);
// log('3. feedback', fb_03);

// const fourth_all = third_all.filter(ca => {
//     return compare(calculateFeedback(ca, thirdGuess), fb_03);
// });

// log('*****************************************************');

// // ----------------------

// log('fourth_all', fourth_all);
