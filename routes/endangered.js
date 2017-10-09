var endangeredData = require("../model/endangered");

exports.list = function(req, res) {
	endangeredData.endangeredList(req.params, function(err, endangeredList) {
		res.send({
			data: endangeredList
		});
	});
};
