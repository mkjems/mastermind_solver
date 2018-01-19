
const util = require('util')

exports.log = (...args) => {
    args.map(arg => console.log(util.inspect(arg, false, null)) );
}
