var express = require("express");
var request = require("request");
var fs = require("fs");
var app = express();
var cors = require("cors");

var appRoot = process.cwd();

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get("/", function(req, res) {
	res.send("Go to <a href='https://graysonhicks.github.io/language-diverge'>here</a> to see data.");
});

app.get("/human", function(req, res) {
	res.send("human language data");
});

app.get("/computer", function(req, res) {
	res.send("computer language data");
});

var port = process.env.PORT || 3000;
app.listen(port);
