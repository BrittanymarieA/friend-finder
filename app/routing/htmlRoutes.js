var path = require("path");


module.exports = function (app){
//creating route to home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "./../public/index.html"));
});

//creating route to survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "./../public/survey.html"));
});

}

