var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

//puling data from file
 module.exports = function apiRoutes(){

 //get request   
  app.get("/api/friends", function(req, res) {
    res.json(newFriends);
  });

 //posting to body 
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);


    var user = req.body;

    // looping throuhg scores of survey
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    
    var bestFriend = 0;
    var minimumDifference = 40;

//looping through freinds array
    for(var i = 0; i < newFriends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < newFriends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - newFriends[i].scores[j]);
        totalDifference += difference;
      }

      if(totalDifference < minimumDifference) {
        bestFriend = i;
        minimumDifference = totalDifference;
      }
    }

//pushing to body
    newFriends.push(user);

    res.json(newFriends[bestFriend]);
  });
};


