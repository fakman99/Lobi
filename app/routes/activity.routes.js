const { authJwt } = require("../middleware");
const controller = require("../controllers/activity.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get(
    "/api/v1/activity",
    [authJwt.verifyToken],
    controller.activityBoard
  );
  
  app.post(
    "/api/v1/addActivity",
    [authJwt.verifyToken],
    controller.createActivity
  );

  app.get(
    "/api/v1/activity/:id",
    [authJwt.verifyToken],
    controller.getActivityByID
  );

  
};
