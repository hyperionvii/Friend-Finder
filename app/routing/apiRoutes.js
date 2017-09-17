
var surveyData = require("../data/surveyData.js");

module.exports = function(app) {

  app.get("/api/surveyData", function(req, res) {
    res.json(surveyData);
  });

  app.post("/api/surveyData", function(req, res) {

    var surveyMatch =  
    { name: "",
    linkToPicture: "",
    difference: 1000
    };

    var userData = req.body;
    var userScore = userData.surveyResults;

    var totalDifference = 0;

    // console.log(req.body);


    for(var i = 0; i < surveyData.length; i++) {

      console.log(surveyData[i]);

      for(var e = 0; e < surveyData[i].surveyResults[e]; e++) {

        // console.log(userScore);
        // console.log(surveyData);

        totalDifference += Math.abs(parseInt(userScore[e])) - parseInt(surveyData[i].surveyResults[e]);



        if (totalDifference <= surveyMatch.difference) {

          surveyMatch.name = surveyData[i].name;
          surveyMatch.photo = surveyData[i].photo;
          surveyMatch.difference = totalDifference;
        };
      };
    };

    surveyData.push(userData);
    res.json(surveyMatch);
  });
};
