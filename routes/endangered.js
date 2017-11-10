var endangeredData = require("../model/endangered");

exports.list = function(req, res, mjs) {
	endangeredData.endangeredList(req.params, function(err, endangeredList) {
		mjs.get("endangered", function(err, v) {
			if (v) {
				var json = JSON.parse(v.toString());
				res.send({ data: json });
			} else {
				var newV = endangeredList;
				newV = JSON.stringify(newV);
				mjs.set("endangered", newV, { expires: 86400 }, function(err, val) {
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
