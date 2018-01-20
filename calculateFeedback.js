
const { compact } = require('lodash');

exports.calculateFeedback = function (secret, guess) {
	const num_reds_arr = secret.map((val, index) => {
		return val == guess[index];
	});
	const num_reds = compact(num_reds_arr).length;
	const reds_arr = Array(num_reds).fill('red');
	var num_found_in_secret = secret.map((val) => {
		return guess.includes(val);
	});
	num_found_in_secret = compact(num_found_in_secret);
	const num_whites = (num_found_in_secret.length) - num_reds;
	const whites_arr = Array(num_whites).fill('white');
	const none_arr = Array(guess.length - (num_whites + num_reds)).fill('none');
	return([...reds_arr, ...whites_arr, ...none_arr].sort());
};