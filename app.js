var express = require("express");
var routes = require("./routes");
var db = require("./model/db");
var request = require("request");
var app = express();
var cors = require("cors");

app.use(cors());

// Routes
var computers = require("./routes/computers");
var endangered = require("./routes/endangered");
var extinct = require("./routes/extinct");
var historic = require("./routes/historic");

app.get("/", routes.index);

app.get("/endangered", endangered.list);

app.get("/extinct", extinct.list);

app.get("/historic", historic.list);

app.get("/computer", computers.list);

var port = process.env.PORT || 3001;
app.listen(port);
