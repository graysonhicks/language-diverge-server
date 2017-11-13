import colors from "./colors";

exports.historicList = function historicList(params, callback) {
	db
		.collection("historic")
		.find()
		.sort({ year: 1 })
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				db.collection("historic").distinct("year", function(err, uniqueYears) {
					if (err) {
						console.log(err);
					} else {
						languages = languages.map(item => {
							var years = [];
							for (var i = 0; i < uniqueYears.length; i++) {
								if (item.year == uniqueYears[i]) {
									years.push(1);
								} else {
									years.push(0);
								}
							}
							return {
								label: item.language,
								backgroundColor: colors[Math.floor(Math.random() * colors.length)],
								data: years
							};
						});
						callback("", { languages: languages, uniqueYears: uniqueYears });
					}
				});
			}
		}); // end historic.find
}; // end exports.historicList
