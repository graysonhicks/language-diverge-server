exports.historicList = function historicList(params, callback) {
	db
		.collection("historic")
		.find()
		.sort({ year: 1 })
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				db.collection("historic").distinct("year", function(err, years) {
					callback("", { languages: languages, years: years });
				});
			}
		}); // end historic.find
}; // end exports.historicList
