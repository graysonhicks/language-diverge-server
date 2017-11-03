var _ = require("underscore");

var collections = ["so2011", "so2012", "so2013", "so2014", "so2015", "so2016"];

var getCollection = function(collection, nextCollectionCallback) {
	db
		.collection(collection)
		.find()
		.toArray(function(err, results) {
			if (err) {
				console.log(err);
			} else {
				computers[collection] = _.countBy(
					results.map(item => {
						var languages = item.languages.split(";");
						for (var i = 0; i < languages.length; i++) {
							return languages[i];
						}
					})
				);

				nextCollectionCallback();
			}
		}); // end Computer.find
};

var computers = {
	so2011: [],
	so2012: [],
	so2013: [],
	so2014: [],
	so2015: [],
	so2016: []
};

exports.computerList = function computerList(params, callback) {
	getCollection("so2011", getCollection("so2012", callback("", computers)));
	// db
	// 	.collection("so2011")
	// 	.find()
	// 	.toArray(function(err, so2011) {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			computers["so2016"] = _.countBy(
	// 				so2011.map(item => {
	// 					var languages = item.languages.split(";");
	// 					for (var i = 0; i < languages.length; i++) {
	// 						return languages[i];
	// 					}
	// 				})
	// 			);
	// 			db
	// 				.collection("so2012")
	// 				.find()
	// 				.toArray(function(err, so2012) {
	// 					if (err) {
	// 						console.log(err);
	// 					} else {
	// 						computers["so2016"] = _.countBy(
	// 							so2012.map(item => {
	// 								var languages = item.languages.split(";");
	// 								for (var i = 0; i < languages.length; i++) {
	// 									return languages[i];
	// 								}
	// 							})
	// 						);
	// 						db
	// 							.collection("so2013")
	// 							.find()
	// 							.toArray(function(err, so2013) {
	// 								if (err) {
	// 									console.log(err);
	// 								} else {
	// 									computers["so2016"] = _.countBy(
	// 										so2013.map(item => {
	// 											var languages = item.languages.split(";");
	// 											for (var i = 0; i < languages.length; i++) {
	// 												return languages[i];
	// 											}
	// 										})
	// 									);
	// 									db
	// 										.collection("so2014")
	// 										.find()
	// 										.toArray(function(err, so2014) {
	// 											if (err) {
	// 												console.log(err);
	// 											} else {
	// 												computers["so2016"] = _.countBy(
	// 													so2014.map(item => {
	// 														var languages = item.languages.split(";");
	// 														for (var i = 0; i < languages.length; i++) {
	// 															return languages[i];
	// 														}
	// 													})
	// 												);
	// 												db
	// 													.collection("so2015")
	// 													.find()
	// 													.toArray(function(err, so2015) {
	// 														if (err) {
	// 															console.log(err);
	// 														} else {
	// 															computers["so2016"] = _.countBy(
	// 																so2015.map(item => {
	// 																	var languages = item.languages.split(";");
	// 																	for (var i = 0; i < languages.length; i++) {
	// 																		return languages[i];
	// 																	}
	// 																})
	// 															);
	// 															db
	// 																.collection("so2016")
	// 																.find()
	// 																.toArray(function(err, so2016) {
	// 																	if (err) {
	// 																		console.log(err);
	// 																	} else {
	// 																		computers["so2016"] = _.countBy(
	// 																			so2016.map(item => {
	// 																				var languages = item.languages.split(";");
	// 																				for (var i = 0; i < languages.length; i++) {
	// 																					return languages[i];
	// 																				}
	// 																			})
	// 																		);
	//
	// 																		callback("", computers);
	// 																	}
	// 																}); // end Computer.find
	// 														}
	// 													}); // end Computer.find
	// 											}
	// 										}); // end Computer.find
	// 								}
	// 							}); // end Computer.find
	// 					}
	// 				}); // end Computer.find
	// 		}
	// 	}); // end Computer.find
}; // end exports.computerList
