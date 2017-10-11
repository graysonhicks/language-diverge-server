var historicData = require("../model/historic");

exports.list = function(req, res, mjs) {
	historicData.historicList(req.params, function(err, historicList) {
		mjs.get("historic", function(err, v) {
			if (v) {
				var json = JSON.parse(val.toString());

				res.send({ data: json });
			} else {
				var newV = historicList;
				console.log(newV);
				newV = JSON.stringify(newV);
				mjs.set("historic", newV, function(err, val) {
					if (err) {
						console.log("Error setting key: " + err);
						res.render("error", {
							message: err.message,
							error: err
						});
					} else {
						var json = JSON.parse(val.toString());

						res.send({ data: json });
					}
				});
			}
		});
	});
};
