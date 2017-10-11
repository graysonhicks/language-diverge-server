var computerData = require("../model/computers");

exports.list = function(req, res, mjs) {
	computerData.computerList(req.params, function(err, computersList) {
		mjs.set("computer", { data: computersList }, function(err, val) {
			res.send({ data: val });
		});
	});
};
