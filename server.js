var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.json());

app.use(bodyParser.json ({type: 'application/**json'}));

app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

app.use(bodyParser.text({type: 'text/html'}));

app.use(express.static("public"));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT http://localhost:" + PORT);
});