var computerData = require("../model/computers");

exports.list = function(req, res, mjs) {
	computerData.computerList(req.params, function(err, computersList) {
		res.send({ data: computersList });
		// mjs.get("computer", function(err, v) {
		// 	if (v) {
		// 		var json = JSON.parse(v.toString());
		// 		console.log(json);
		// 		res.send({ data: json });
		// 	} else {
		// 		var newV = computersList;
		// 		newV = JSON.stringify(newV);
		// 		mjs.set("computer", newV, function(err, val) {
		// 			if (err) {
		// 				console.log("Error setting key: " + err);
		// 				res.render("error", {
		// 					message: err.message,
		// 					error: err
		// 				});
		// 			} else {
		// 				var json = JSON.parse(val.toString());
		// 				res.send({ data: json });
		// 			}
		// 		});
		// 	}
		// });
	});
};
