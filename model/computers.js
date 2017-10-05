exports.computerList = function computerList(year, callback) {
	db
		.collection("stackoverflow")
		.find({
			Year: year
		})
		.toArray(function(err, computers) {
			if (err) {
				console.log(err);
			} else {
				console.log(computers);
				callback("", computers);
			}
		}); // end Computer.find
}; // end exports.computerList
