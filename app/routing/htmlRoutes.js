var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();


module.exports = function htmlRoutes (){
//creating route to home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

//creating route to survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

}

