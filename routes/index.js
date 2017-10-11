exports.index = function(req, res, mjs) {
	mjs.get("home", function(err, v) {
		if (v) {
			console.log(v);
			res.send({ data: v.toString() });
		} else {
			var newV = {
				title: "Test web page on node.js using Express",
				pagetitle: "Hello there",
				group: "D",
				teams: [{ country: "England" }, { country: "France" }, { country: "Sweden" }, { country: "Ukraine" }]
			};
			newV = newV.toString();
			mjs.set("home", newV, function(err, val) {
				res.send({ data: val.toString() });
			});
		}
	});
};
