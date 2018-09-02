//npm install express ejs passport passport-local passport-local-mongoose mongoose express-session body-parser --save
var express = require("express");
var app = express();

var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStre


app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("home");
});

app.listen(1337, "127.0.0.1", function () {
    console.log("Start listening");
});