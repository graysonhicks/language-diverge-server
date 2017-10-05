exports.humansList = function humansList(year, callback) {
	Human.find(
		{
			Year: year
		},
		function(err, humans) {
			if (err) {
				console.log(err);
			} else {
				console.log(humans);
				callback("", humans);
			}
		}
	); // end Human.find
}; // end exports.humansList
