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

exports.computerList = function computerList(params, callback) {
	db
		.collection("so2011")
		.find()
		.toArray(function(err, so2011) {
			if (err) {
				console.log(err);
			} else {
				var so2011LanguageCountObj = _.countBy(
					so2011.map(item => {
						var languages = item.languages.split(";");
						for (var i = 0; i < languages.length; i++) {
							return languages[i];
						}
					})
				);

				computers["so2011"] = _.map(so2011LanguageCountObj, (val, key) => {
					var language = key;
					return {
						label: language,
						data: val
					};
				});
				db
					.collection("so2012")
					.find()
					.toArray(function(err, so2012) {
						if (err) {
							console.log(err);
						} else {
							var so2012LanguageCountObj = _.countBy(
								so2012.map(item => {
									var languages = item.languages.split(";");
									for (var i = 0; i < languages.length; i++) {
										return languages[i];
									}
								})
							);

							computers["so2012"] = _.map(so2012LanguageCountObj, (val, key) => {
								var language = key;
								return {
									label: language,
									data: val
								};
							});

							db
								.collection("so2013")
								.find()
								.toArray(function(err, so2013) {
									if (err) {
										console.log(err);
									} else {
										var so2013LanguageCountObj = _.countBy(
											so2013.map(item => {
												var languages = item.languages.split(";");
												for (var i = 0; i < languages.length; i++) {
													return languages[i];
												}
											})
										);

										computers["so2013"] = _.map(so2013LanguageCountObj, (val, key) => {
											var language = key;
											return {
												label: language,
												data: val
											};
										});
										db
											.collection("so2014")
											.find()
											.toArray(function(err, so2014) {
												if (err) {
													console.log(err);
												} else {
													var so2014LanguageCountObj = _.countBy(
														so2014.map(item => {
															var languages = item.languages.split(";");
															for (var i = 0; i < languages.length; i++) {
																return languages[i];
															}
														})
													);

													computers["so2014"] = _.map(so2014LanguageCountObj, (val, key) => {
														var language = key;
														return {
															label: language,
															data: val
														};
													});
													db
														.collection("so2015")
														.find()
														.toArray(function(err, so2015) {
															if (err) {
																console.log(err);
															} else {
																var so2015LanguageCountObj = _.countBy(
																	so2015.map(item => {
																		var languages = item.languages.split(";");
																		for (var i = 0; i < languages.length; i++) {
																			return languages[i];
																		}
																	})
																);

																computers["so2015"] = _.map(so2015LanguageCountObj, (val, key) => {
																	var language = key;
																	return {
																		label: language,
																		data: val
																	};
																});
																db
																	.collection("so2016")
																	.find()
																	.toArray(function(err, so2016) {
																		if (err) {
																			console.log(err);
																		} else {
																			var so2016LanguageCountObj = _.countBy(
																				so2016.map(item => {
																					var languages = item.languages.split(";");
																					for (var i = 0; i < languages.length; i++) {
																						return languages[i];
																					}
																				})
																			);

																			computers["so2016"] = _.map(so2016LanguageCountObj, (val, key) => {
																				var language = key;
																				return {
																					label: language,
																					data: val
																				};
																			});

																			computers["final"] = _.union(
																				computers["so2011"],
																				computers["so2012"],
																				computers["so2013"],
																				computers["so2014"],
																				computers["so2015"],
																				computers["so2016"]
																			);

																			var results = computers["final"].map((item, index) => {
																				var existing = _.findWhere(results, { label: item.label });
																				if (existing) {
																					existing["data"].push(item.data);
																				} else {
																					item.data = [item.data];
																					item.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
																					results.push(item);
																				}
																			});

																			callback("", results);
																		}
																	}); // end Computer.find
															}
														}); // end Computer.find
												}
											}); // end Computer.find
									}
								}); // end Computer.find
						}
					}); // end Computer.find
			}
		}); // end Computer.find
}; // end exports.computerList
