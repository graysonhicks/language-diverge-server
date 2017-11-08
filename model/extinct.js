var colors = [
	"#29a390",
	"#8f93ff",
	"#c7c9ff",
	"#0f147f",
	"#161cb5",
	"#ffd780",
	"#ffebbf",
	"#b37a00",
	"#ffaf00",
	"#ffaf80",
	"#ffd7bf",
	"#b34300",
	"#ff5f00",
	"#80fff7",
	"#bffffb",
	"#006d66",
	"#009c92"
];

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
						console.log(uniqueYears);
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
								longitude: item.longitude
							};
						});
						callback("", { languages: languages, uniqueYears: uniqueYears.reverse() });
					}
				});
			}
		}); // end extinct.find
}; // end exports.extinctList
