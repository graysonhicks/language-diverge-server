var computerData = require("../model/computers");

exports.list = function(req, res) {
	computerData.computerList(req.params, function(err, computerList) {
		console.log(computerList);
		res.send({
			computers: computerList
		});
	});
};
