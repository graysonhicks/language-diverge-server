var extinctData = require("../model/extinct");

exports.list = function(req, res, mjs) {
	extinctData.extinctList(req.params, function(err, extinctList) {
		mjs.get("extinct", function(err, v) {
			if (v) {
				var json = JSON.parse(v.toString());

				res.json({ data: json });
			} else {
				var newV = extinctList;
				newV = JSON.stringify(newV);

				mjs.set("extinct", newV, { expires: 86400 }, function(err, val) {
					if (err) {
						console.log("Error setting key: " + err);
						res.render("error", {
							message: err.message,
							error: err
						});
					} else {
						var json = JSON.parse(newV.toString());

						res.send({ data: json });
					}
				});
			}
		});
	});
};
