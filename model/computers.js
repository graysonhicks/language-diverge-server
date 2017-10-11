exports.computerList = function computerList(params, callback) {
	db
		.collection("so2012")
		.find()
		.toArray(function(err, computers) {
			if (err) {
				console.log(err);
			} else {
				callback("", computers);
			}
		}); // end Computer.find
}; // end exports.computerList
