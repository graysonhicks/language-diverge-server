exports.extinctList = function extinctList(params, callback) {
	db
		.collection("extinct")
		.find()
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				callback("", languages);
			}
		}); // end extinct.find
}; // end exports.extinctList
