var humansData = require("../model/humans");

exports.list = function(req, res) {
	var year = "2016";
	humansData.humansList(year, function(err, humansList) {
		res.send({
			title: "Test web page on node.js using Express and Mongoose",
			pagetitle: "Hello there",
			year: year,
			humans: humansList
		});
	});
};
