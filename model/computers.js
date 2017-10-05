exports.computerList = function computerList(params, callback) {
	db
		.collection("stackoverflow")
		.find()
		.limit(1000)
		.toArray(function(err, computers) {
			if (err) {
				console.log(err);
			} else {
				callback("", computers);
			}
		}); // end Computer.find
}; // end exports.computerList
