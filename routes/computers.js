var computerData = require("../model/computers");

function unique(arr) {
	var o = {},
		i,
		l = arr.length,
		r = [];
	for (i = 0; i < l; i += 1) o[arr[i]] = arr[i];
	for (i in o) r.push(o[i]);
	return r;
}

exports.list = function(req, res) {
	computerData.computerList(req.params, function(err, computerList) {
		var labels = computerList.map(function(item) {
			return item.Year;
		});
		labels = unique(labels);
		console.log(labels);
		res.send({
			labels: labels,
			computers: computerList
		});
	});
};
