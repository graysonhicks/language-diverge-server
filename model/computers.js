function unique(arr) {
	var o = {},
		i,
		l = arr.length,
		r = [];
	for (i = 0; i < l; i += 1) o[arr[i]] = arr[i];
	for (i in o) r.push(o[i]);
	return r;
}


exports.computerList = function computerList(params, callback) {
	db
		.collection("stackoverflow")
		.find()
		.toArray(function(err, computers) {
			if (err) {
				console.log(err);
			} else {
				  var newData = {};
					computers.map(function(item) {
						var itemLanguagesArray = item.Languages.split(";");
						var itemCountry = item.Country;
						var itemYear = item.Year;

						for (var i = 0; i < itemLanguagesArray.length; i++) {
							var languageObject = {
								language: itemLanguagesArray[i].trim(),
								country: itemCountry,
								year: itemYear
							}
							if(!newData[itemLanguagesArray[i].trim().toLowerCase()]){
								newData[itemLanguagesArray[i].trim().toLowerCase()] = [];
							}
							newData[itemLanguagesArray[i].trim().toLowerCase()].push(languageObject);
						}
					});


				callback("", newData);
			}
		}); // end Computer.find
}; // end exports.computerList
