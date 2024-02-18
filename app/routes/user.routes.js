const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/v1/all", controller.allAccess);

  app.get(
    "/api/v1/user",
    [authJwt.verifyToken],
    controller.userBoard
  );


  app.get(
    "/api/v1/user/:id",
    [authJwt.verifyToken],
    controller.getUserByID
  );

  app.get(
    "/api/v1/user/:id/lobbys",
    [authJwt.verifyToken],
    controller.getUserLobbysByID
  );

  app.get(
    "/api/v1/user/:id/ratings",
    [authJwt.verifyToken],
    controller.getUserRatingsByID
  );
  
  app.delete(
    "/api/v1/user/:id",
    [authJwt.verifyToken],
    controller.removeUserById
  );

  app.patch(
    "/api/v1/user/:id/profile-picture",
    [authJwt.verifyToken],
    controller.changeProfilePic
  );

  app.get(
    "/api/v1/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
