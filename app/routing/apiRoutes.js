
var surveyData = require("../data/surveyData.js");

module.exports = function(app) {

  app.get("/api/surveyData", function(req, res) {
    res.json(surveyData);
  });

  app.post("/api/surveyData", function(req, res) {

    var surveyMatch =  
    { name: "",
    linkToPicture: "",
    surveyResults: compatScore
    };

    // loop through all the friends in the survey list

      //as you are looping through, compare the new survey answers to the answers in the surveyData


    for(var i = 0; i <= surveyData.length; i++) {
      surveyData[i]
      var compatCount;
      console.log(surveyData.length)

      for(var e = 0; e < surveyData[i].surveyResults[e]; e++){

        var set = surveyMatch.surveyResults[e];

        if(surveyMatch.surveyResults[e] == surveyData[i].surveyResults[e]) {
          var count;
          compatCount = [];
          count++;

          console.log(surveyMatch.surveyResults[e]);

          if( set == surveyMatch.surveyResults[e]) {
            highestNumber.push(count);
          };
        };
      };

      var max = compatCount.indexOf(Math.max(compatCount));
    }

    surveyMatch.push(surveyData);
  });


};
