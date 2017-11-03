var _ = require("underscore");

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
					item.languages.split(";");
					for (var i = 0; i < item.languages.length; i++) {
						return item.languages[i];
					}
				});
				db
					.collection("so2012")
					.find()
					.toArray(function(err, so2012) {
						if (err) {
							console.log(err);
						} else {
							computers["2012"] = so2012.map(item => {
								item.languages.split(";");
								for (var i = 0; i < item.languages.length; i++) {
									return item.languages[i];
								}
							});

							callback("", computers);
						}
					}); // end Computer.find
			}
		}); // end Computer.find
}; // end exports.computerList
