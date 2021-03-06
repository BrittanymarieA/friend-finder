var friends = require("./../data/friends")

//puling data from file
module.exports = function (app) {

  //get request   
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //posting to body 
  app.post("/api/friends", function (req, res) {
    console.log(req.body.scores);

    var bestMatch = {
      name: "",
      photo: "",
      friendDiffernce: 1000
    }

    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference;

    for (var i = 0; i < friends.length; i++) {
     var currendFriend = friends[i]; 
     totalDifference = 0;

      for (var j = 0; j < friends[i].scores[j]; j++) {
        var currendFriendScore = currendFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currendFriendScore));
      }

      if (totalDifference <= bestMatch.friendDiffernce) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photo;
        bestMatch.friendDiffernce = totalDifference;

      }
    }


    //pushing to body
    friends.push(userData);

    res.json(bestMatch);
  });
};


