var computers = {
	"2011": [],
	"2012": []
};
exports.computerList = function computerList(params, callback) {
	db
		.collection("so2011")
		.find()
		.toArray(function(err, so2011) {
			if (err) {
				console.log(err);
			} else {
				computers["2011"] = so2011.map(item => {
					return item.languages.split(";");
				});
				db
					.collection("so2012")
					.find()
					.toArray(function(err, so2012) {
						if (err) {
							console.log(err);
						} else {
							computers["2012"] = so2012.map(item => {
								return item.languages.split(";");
							});

							callback("", computers);
						}
					}); // end Computer.find
			}
		}); // end Computer.find
}; // end exports.computerList
