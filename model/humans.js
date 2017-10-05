var mongoose = require("mongoose");
exports.humansList = function humansList(year, callback) {
	var Human = mongoose.model("Human");
	Human.find(
		{
			Year: year
		},
		function(err, humans) {
			if (err) {
				console.log(err);
			} else {
				console.log(humans);
				callback("", humans);
			}
		}
	); // end Human.find
}; // end exports.humansList
