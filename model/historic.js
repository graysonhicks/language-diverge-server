exports.historicList = function historicList(params, callback) {
	db
		.collection("historic")
		.aggregate([{ $group: { _id: "year" } }])
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				callback("", languages);
			}
		}); // end historic.find
}; // end exports.historicList
