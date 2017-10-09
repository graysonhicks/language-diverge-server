var historicData = require("../model/historic");

exports.list = function(req, res) {
	historicData.historicList(req.params, function(err, historicList) {
		res.send({
			data: historicList
		});
	});
};
