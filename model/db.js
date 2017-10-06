var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI || "mongodb://heroku_vmpww4mj:c4qmiss0djr41uqspd12vkuchc@ds161304.mlab.com:61304/heroku_vmpww4mj";

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(databaseUri, (err, database) => {
	// ... start the server
	db = database;
});
