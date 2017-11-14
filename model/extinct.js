var colors = require("./colors").colors;

exports.extinctList = function extinctList(params, callback) {
	db
		.collection("extinct")
		.find()
		.toArray(function(err, languages) {
			if (err) {
				console.log(err);
			} else {
				db.collection("extinct").distinct("year", function(err, uniqueYears) {
					if (err) {
						console.log(err);
					} else {
						uniqueYears = uniqueYears.reverse();
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
								data: years,
								latitude: item.latitude,
								longitude: item.longitude,
								year: item.year
							};
						});
						callback("", { languages: languages, uniqueYears: uniqueYears });
					}
				});
			}
		}); // end extinct.find
}; // end exports.extinctList
