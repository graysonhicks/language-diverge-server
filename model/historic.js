exports.historicList = function historicList(params, callback) {
	db
		.collection("historic")
		.find()
		.sort({ Year: 1 })
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				callback("", languages);
			}
		}); // end historic.find
}; // end exports.historicList
