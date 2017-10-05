var mongoose = require("mongoose");
var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

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
mongoose.connect(databaseUri);
