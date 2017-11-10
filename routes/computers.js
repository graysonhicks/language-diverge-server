var computerData = require("../model/computers");

exports.list = function(req, res, mjs) {
	computerData.computerList(req.params, function(err, computersList) {
		mjs.get("computer", function(err, v) {
			if (v) {
				var json = JSON.parse(v.toString());
				console.log(json, "old");
				res.send({ data: json });
			} else {
				var newV = computersList;
				newV = JSON.stringify(newV);
				mjs.set("computer", newV, { expires: 86400 }, function(err, val) {
					if (err) {
						console.log("Error setting key: " + err);
						res.render("error", {
							message: err.message,
							error: err
						});
					} else {
						var json = JSON.parse(newV.toString());
						console.log(newV, "newVal");
						console.log(val, "val");
						console.log(json, "new");

						res.send({ data: json });
					}
				});
			}
		});
	});
};
