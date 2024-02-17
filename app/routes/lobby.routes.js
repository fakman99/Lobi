const { authJwt } = require("../middleware");
const controller = require("../controllers/lobby.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get(
    "/api/v1/lobby",
    [authJwt.verifyToken],
    controller.lobbyBoard
  );
  
  app.post(
    "/api/v1/addLobby",
    [authJwt.verifyToken],
    controller.createLobby
  );

  app.get(
    "/api/v1/lobby/:id",
    [authJwt.verifyToken],
    controller.getLobbyByID
  );

  
};
