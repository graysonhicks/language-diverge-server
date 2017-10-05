var express = require("express");
var routes = require("./routes");
var db = require("./model/db");
var request = require("request");
var fs = require("fs");
var app = express();
var cors = require("cors");

var appRoot = process.cwd();

// Routes

var humans = require("./routes/humans");
var computers = require("./routes/computers");

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get("/", routes.index);

app.get("/human", humans.list);

app.get("/computer", computers.list);

var port = process.env.PORT || 3000;
app.listen(port);
