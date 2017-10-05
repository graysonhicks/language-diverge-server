var computerData = require("../model/computers");

exports.list = function(req, res) {
	computerData.computerList(req.params, function(err, computerList) {
		var labels = function unique(computerList) {
			var hash = {},
				result = [];
			for (var i = 0, l = computerList.length; i < l; ++i) {
				if (!hash.hasOwnProperty(computerList[i])) {
					hash[computerList[i]] = true;
					result.push(computerList[i]);
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
