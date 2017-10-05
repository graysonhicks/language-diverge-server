var computerData = require("../model/computers");

exports.list = function(req, res) {
	computerData.computerList(year, function(err, computerList) {
		console.log(err);
		console.log(computerList);
		res.send({
			title: "Test web page on node.js using Express and Mongoose",
			pagetitle: "Hello there",
			year: year,
			computers: computerList
		});
	});
};
