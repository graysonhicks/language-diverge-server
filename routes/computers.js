var computerData = require("../model/computers");

exports.list = function(req, res) {
	computerData.computerList(req.params, function(err, computerList) {
		var labels = computerList.map(function(item) {
			return item.Year;
		});
		res.send({
			labels: labels,
			computers: computerList
		});
	});
};
