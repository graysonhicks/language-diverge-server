var historicData = require("../model/historic");

exports.list = function(req, res, mjs) {
	historicData.historicList(req.params, function(err, historicList) {
		mjs.get("historic", function(err, v) {
			if (v) {
				console.log(v);
				var json = JSON.stringify(v);
				res.send({ data: json });
			} else {
				var newV = historicList;
				newV = newV.toString();
				mjs.set("historic", newV, function(err, val) {
					if (err) {
						console.log("Error setting key: " + err);
						res.render("error", {
							message: err.message,
							error: err
						});
					} else {
						var json = JSON.stringify(val);
						res.send({ data: json });
					}
				});
			}
		});
	});
};
