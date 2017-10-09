exports.endangeredList = function endangeredList(params, callback) {
	db
		.collection("endangered")
		.find()
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				callback("", languages);
			}
		}); // end endangered.find
}; // end exports.endangeredList
