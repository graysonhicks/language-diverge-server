var _ = require("underscore");

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

var collections = ["so2011", "so2012", "so2013", "so2014", "so2015", "so2016"];

var computers = {
	so2011: [],
	so2012: [],
	so2013: [],
	so2014: [],
	so2015: [],
	so2016: [],
	final: []
};

var buildCountObject = function(yearData) {
	return _.countBy(
		yearData.map(item => {
			var languages = item.languages.split(";");
			for (var i = 0; i < languages.length; i++) {
				return languages[i];
			}
		})
	);
};

var sumOfCountObj = function(countObj) {
	return _.reduce(
		countObj,
		function(memo, num) {
			return memo + num;
		},
		0
	);
};

var addYearDataToFinalArray = function(yearKey, countObj, yearIndex) {
	computers[yearKey] = _.map(countObj, (val, key) => {
		var language = key;

		return {
			label: language,
			data: val / sum,
			yearIndex: yearIndex
		};
	});
};

exports.computerList = function computerList(params, callback) {
	db
		.collection("so2011")
		.find()
		.toArray(function(err, so2011) {
			if (err) {
				console.log(err);
			} else {
				var so2011LanguageCountObj = buildCountObject(so2011);

				var sum = sumOfCountObj(so2011LanguageCountObj);

				addYearDataToFinalArray("so2011", so2011LanguageCountObj, 0);
				db
					.collection("so2012")
					.find()
					.toArray(function(err, so2012) {
						if (err) {
							console.log(err);
						} else {
							var so2012LanguageCountObj = buildCountObject(so2012);

							var sum = sumOfCountObj(so2012LanguageCountObj);

							addYearDataToFinalArray("so2012", so2012LanguageCountObj, 1);

							db
								.collection("so2013")
								.find()
								.toArray(function(err, so2013) {
									if (err) {
										console.log(err);
									} else {
										var so2013LanguageCountObj = buildCountObject(so2013);

										var sum = sumOfCountObj(so2013LanguageCountObj);

										addYearDataToFinalArray("so2013", so2013LanguageCountObj, 2);

										db
											.collection("so2014")
											.find()
											.toArray(function(err, so2014) {
												if (err) {
													console.log(err);
												} else {
													var so2014LanguageCountObj = buildCountObject(so2014);

													var sum = sumOfCountObj(so2014LanguageCountObj);

													addYearDataToFinalArray("so2014", so2014LanguageCountObj, 3);

													db
														.collection("so2015")
														.find()
														.toArray(function(err, so2015) {
															if (err) {
																console.log(err);
															} else {
																var so2015LanguageCountObj = buildCountObject(so2015);

																var sum = sumOfCountObj(so2015LanguageCountObj);

																addYearDataToFinalArray("so2015", so2015LanguageCountObj, 4);

																db
																	.collection("so2016")
																	.find()
																	.toArray(function(err, so2016) {
																		if (err) {
																			console.log(err);
																		} else {
																			var so2016LanguageCountObj = buildCountObject(so2016);

																			var sum = sumOfCountObj(so2016LanguageCountObj);

																			addYearDataToFinalArray("so2016", so2016LanguageCountObj, 5);

																			// flatten all arrays in to one
																			computers["final"] = _.union(
																				computers["so2011"],
																				computers["so2012"],
																				computers["so2013"],
																				computers["so2014"],
																				computers["so2015"],
																				computers["so2016"]
																			);
																			var results = [];

																			// loop over flattened array
																			for (var i = 0; i < computers["final"].length; i++) {
																				var item = computers["final"][i];

																				var objIndex = results.findIndex(
																					obj => obj.label.toLowerCase() === item.label.toLowerCase()
																				);

																				if (objIndex < 0) {
																					var newItem = {};
																					newItem.data = [0, 0, 0, 0, 0, 0];
																					for (var i = 0; i < newItem.data.length; i++) {
																						if (item.yearIndex == i) {
																							newItem.data[item.yearIndex] = item.data;
																						}
																					}
																					newItem.label = item.label;
																					newItem.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
																					results.push(newItem);
																				} else {
																					results[objIndex]["data"][item.yearIndex] = item.data;
																				}
																			}

																			callback("", results);
																		}
																	}); // end 2016
															}
														}); // end 2015
												}
											}); // end 2014
									}
								}); // end 2013
						}
					}); // end 2012
			}
		}); // end 2011
}; // end exports.computerList
