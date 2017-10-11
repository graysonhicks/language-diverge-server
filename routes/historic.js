var historicData = require("../model/historic");

exports.list = function(req, res, mjs) {
	historicData.historicList(req.params, function(err, historicList) {
		mjs.get("historic", function(err, v) {
			if (v) {
				res.send(v.toString());
			} else {
				res.send({
					data: historicList
				});
			}
		});
	});
};
