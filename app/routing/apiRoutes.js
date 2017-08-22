
var surveyData = require("../data/surveyData.js");

module.exports = function(app) {

  app.get("/api/surveyData", function(req, res) {
    res.json(surveyData);
  });

//set it up to see who the friends are!
//   app.post("/api/surveyData", function(req, res) {
//   });


};
