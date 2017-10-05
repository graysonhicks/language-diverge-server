var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(databaseUri, (err, database) => {
	// ... start the server
	db = database;
});
