var historicData = require("../model/historic");

exports.list = function(req, res, mjs) {
	historicData.historicList(req.params, function(err, historicList) {
		mjs.get("historic", function(err, v) {
			if (v) {
				console.log(v.toString());
				var json = v.toJSON();
				console.log(json);
				res.send({ data: json });
			} else {
				var newV = historicList;
				newV = JSON.stringify(newV);
				mjs.set("historic", newV, function(err, val) {
					if (err) {
						console.log("Error setting key: " + err);
						res.render("error", {
							message: err.message,
							error: err
						});
					} else {
						console.log(val);
						var json = JSON.parse(val.toString());
						console.log(json);
						res.send({ data: json });
					}
				});
			}
		});
	});
};
