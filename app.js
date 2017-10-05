var express = require("express");
var routes = require("./routes");
var db = require("./model/db");
var request = require("request");
var app = express();

// Routes
var humans = require("./routes/humans");
var computers = require("./routes/computers");

app.get("/", routes.index);

app.get("/human", humans.list);

app.get("/computer", computers.list);

var port = process.env.PORT || 3000;
app.listen(port);
