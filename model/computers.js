exports.computerList = function computerList(params, callback) {
	db
		.collection("so2012")
		.find()
		.toArray(function(err, computers) {
			if (err) {
				console.log(err);
			} else {
				computers = computers.map(item => {
					item.languages = item.languages.split(";");
					return item;
				});
				callback("", computers);
			}
		}); // end Computer.find
}; // end exports.computerList
