var mongoose = require("mongoose");
var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

mongoose.connect(databaseUri, {
	useMongoClient: true
});

var db = mongoose.connection;
console.log(db);
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
	var computerSchema = new mongoose.Schema(
		{
			Year: String,
			Country: String,
			Languages: String
		},
		{
			collection: "stackoverflow"
		}
	);

	var humanSchema = new mongoose.Schema({
		Year: String,
		Country: String,
		Languages: String
	});
	mongoose.model("Computer", computerSchema);
	mongoose.model("Human", humanSchema);
});
