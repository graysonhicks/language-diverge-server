var historicData = require("../model/historic");

exports.list = function(req, res, mjs) {
	historicData.historicList(req.params, function(err, historicList) {
		mjs.get("historic", function(err, v) {
			if (v) {
				console.log(v);
				res.send(v.toString());
			} else {
				var newV = {
					data: historicList
				};
				mjs.set("historic", newV, function(err) {
					if (err) {
						console.log("Error setting key: " + err);
						res.render("error", {
							message: err.message,
							error: err
						});
					} else {
						res.send(newV);
					}
				});
			}
		});
	});
};
