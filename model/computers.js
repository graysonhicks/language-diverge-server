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
				computers["2011"] = _.countBy(
					so2011.map(item => {
						var languages = item.languages.split(";");
						for (var i = 0; i < languages.length; i++) {
							return languages[i];
						}
					})
				);
				db
					.collection("so2012")
					.find()
					.toArray(function(err, so2012) {
						if (err) {
							console.log(err);
						} else {
							computers["2012"] = _.countBy(
								so2012.map(item => {
									var languages = item.languages.split(";");
									for (var i = 0; i < languages.length; i++) {
										return languages[i];
									}
								})
							);

							callback("", computers);
						}
					}); // end Computer.find
			}
		}); // end Computer.find
}; // end exports.computerList
