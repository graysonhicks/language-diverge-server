var extinctData = require("../model/extinct");

exports.list = function(req, res) {
	extinctData.exinctList(req.params, function(err, exinctList) {
		res.send({
			data: exinctList
		});
	});
};
