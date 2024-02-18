const pool = require('../config/db');
const queries = require('./queries');
const db = require("../models");

const Lobby = db.lobby;


exports.createLobby = (req, res) => {
  // Save Lobby to Database
  Lobby.create({
      activite: req.body.activite,
      libelle: req.body.libelle,
      owner: req.body.owner, // Store the username in the lobby
      size: req.body.size,
      dateTime:req.body.dateTime,
      adresse: req.body.adresse,
      privacy: req.body.privacy,
      password: req.body.password,
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

              res.status(200).json(res.rows);

  

};


exports.lobbyBoard = (req, res) => {
    pool.query(queries.getAllLobbyQuery,(error,results)=>{
      if(error)throw error;
      res.status(200).json(results.rows);
  });
};

exports.getLobbyByID = (req, res) => {
  const id = req.params.id;
  pool.query(queries.getLobbyByIDQuery,[id],(error,results)=>{
      if(error)
      {
        res.status(422).send("Wrong ID");
      }
      else {
          res.status(200).json(results.rows);
      }

  });
};

