var computerData = require("../model/computers");

exports.list = function(req, res) {
	var year = "2016";
	computerData.computerList(year, function(err, computerList) {
		res.render("index", {
			title: "Test web page on node.js using Express and Mongoose",
			pagetitle: "Hello there",
			year: year,
			computers: computerList
		});
	});
};
