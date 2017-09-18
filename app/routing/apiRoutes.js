var surveyData = require("../data/surveyData.js");

module.exports = function(app) {

  app.get("/api/surveyData", function(req, res) {
    res.json(surveyData);
  });


//

  app.post("/api/surveyData", function(req, res) {
    // res.json(surveyData);
  });

}
