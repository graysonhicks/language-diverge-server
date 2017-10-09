exports.historicList = function historicList(params, callback) {
	db
		.collection("historic")
		.find()
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				callback("", languages);
			}
		}); // end historic.find
}; // end exports.historicList
