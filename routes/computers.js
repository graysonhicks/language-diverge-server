var computerData = require("../model/computers");


exports.list = function(req, res) {
	computerData.computerList(req.params, function(err, data) {
		res.send(data);
	});
};
