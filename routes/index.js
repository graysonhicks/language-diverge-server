exports.index = function(req, res) {
	res.send({
		title: "Test web page on node.js using Express",
		pagetitle: "Hello there",
		group: "D",
		teams: [{ country: "England" }, { country: "France" }, { country: "Sweden" }, { country: "Ukraine" }]
	});
};
