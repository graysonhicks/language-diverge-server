var extinctData = require("../model/extinct");

exports.list = function(req, res, mjs) {
	extinctData.exinctList(req.params, function(err, exinctList) {
		mjs.get("extinct", function(err, v) {
			if (v) {
				var json = JSON.parse(v.toString());
				res.send({ data: json });
			} else {
				var newV = exinctList;
				newV = JSON.stringify(newV);
				mjs.set("extinct", newV, function(err, val) {
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
