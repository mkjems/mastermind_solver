
const colors = [
    'yellow',
    'magenta',
    'white',
    'orange',
    'red',
    'green',
    'blue',
    'silver'
];

const colorKeys = Object.keys(colors).map(k => Number(k));

const correct_feedback = ['red', 'red', 'red', 'red'];

module.exports = {
    colors,
    colorKeys,
    correct_feedback
};
