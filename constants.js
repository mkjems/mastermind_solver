
const colors = {
    1: 'yellow',
    2: 'pink',
    3: 'white',
    4: 'grey'
    // 5: 'red',
    // 6: 'green',
    // 7: 'blue',
    // 8: 'silver'
};

const colorKeys = Object.keys(colors).map(k=>Number(k));

module.exports = {
    colors,
    colorKeys
};
