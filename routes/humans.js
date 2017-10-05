var humansData = require("../model/humans");

exports.list = function(req, res) {
	humansData.humansList(req.params, function(err, humansList) {
		res.send({
			humans: humansList
		});
	});
};
