exports.computerList = function computerList(year, callback) {
	db
		.collection("stackoverflow")
		.find({ Year: year })
		.limit(10)
		.toArray(function(err, computers) {
			if (err) {
				console.log(err);
			} else {
				callback("", computers);
			}
		}); // end Computer.find
}; // end exports.computerList
