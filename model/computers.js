var computers = {
	"2011": [],
	"2012": []
};
exports.computerList = function computerList(params, callback) {
	db
		.collection("so2011")
		.find()
		.toArray(function(err, computers) {
			if (err) {
				console.log(err);
			} else {
				computers["2011"] = computers.map(item => {
					item.languages = item.languages.split(";");
					return item;
				});
				db
					.collection("so2012")
					.find()
					.toArray(function(err, computers) {
						if (err) {
							console.log(err);
						} else {
							computers["2012"] = computers.map(item => {
								item.languages = item.languages.split(";");
								return item;
							});
						}
					}); // end Computer.find
				callback("", computers);
			}
		}); // end Computer.find
}; // end exports.computerList
