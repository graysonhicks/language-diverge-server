exports.index = function(req, res, mjs) {
	mjs.set(
		"home",
		{
			title: "Test web page on node.js using Express",
			pagetitle: "Hello there",
			group: "D",
			teams: [{ country: "England" }, { country: "France" }, { country: "Sweden" }, { country: "Ukraine" }]
		},
		function(err, val) {
			res.send(val);
		}
	);
};
