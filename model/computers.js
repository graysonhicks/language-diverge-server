var mongoose = require("mongoose");
exports.computerList = function computerList(year, callback) {
	var Computer = mongoose.model("Computer");
	Computer.find(
		{
			Year: year
		},
		function(err, teams) {
			if (err) {
				console.log(err);
			} else {
				console.log(computers);
				callback("", computers);
			}
		}
	); // end Computer.find
}; // end exports.computerList
