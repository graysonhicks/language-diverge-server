var computerData = require("../model/computers");

exports.list = function(req, res) {
	computerData.computerList(req.params, function(err, computerList) {
		var labels = function(computerList) {
			var hash = {},
				result = [];
			for (var i = 0, l = computerList.length; i < l; ++i) {
				if (!hash.hasOwnProperty(computerList[i].Year)) {
					hash[computerList[i].Year] = true;
					result.push(computerList[i].Year);
				}
			}
			return result;
		};
		res.send({
			labels: labels,
			computers: computerList
		});
	});
};
