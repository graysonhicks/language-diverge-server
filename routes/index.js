exports.index = function(req, res, mjs) {
	mjs.get("home", function(err, v) {
		if (v) {
			var json = JSON.parse(v.toString());
			res.send({ data: json });
		} else {
			var newV = {
				title: "Test web page on node.js using Express",
				pagetitle: "Hello there",
				group: "D",
				teams: [{ country: "England" }, { country: "France" }, { country: "Sweden" }, { country: "Ukraine" }]
			};
			newV = JSON.stringify(newV);
			mjs.set("home", newV, function(err, val) {
				var json = JSON.parse(val.toString());
				res.send({ data: json });
			});
		}
	});
};
