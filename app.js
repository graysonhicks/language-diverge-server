var express = require("express");
var routes = require("./routes");
var db = require("./model/db");
var request = require("request");
var app = express();
var cors = require("cors");
var memjs = require("memjs").Client;

var mjs = memjs.create();
app.use(cors());

// Routes
var computers = require("./routes/computers");
var endangered = require("./routes/endangered");
var extinct = require("./routes/extinct");
var historic = require("./routes/historic");

app.get("/", function(req, res) {
	routes.index(req, res, mjs);
});

app.get("/endangered", function(req, res) {
	endangered.list(req, res, mjs);
});

app.get("/extinct", function(req, res) {
	extinct.list(req, res, mjs);
});

app.get("/historic", function(req, res) {
	historic.list(req, res, mjs);
});

app.get("/computer", function(req, res) {
	computers.list(req, res, mjs);
});

var port = process.env.PORT || 3001;
app.listen(port);
