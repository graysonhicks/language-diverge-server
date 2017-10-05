exports.humansList = function humansList(params, callback) {
	db
		.collection("humans")
		.find()
		.limit(10)
		.toArray(function(err, humans) {
			if (err) {
				console.log(err);
			} else {
				callback("", humans);
			}
		}); // end humans.find
}; // end exports.humansList
