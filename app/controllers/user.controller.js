const pool = require('../config/db');
const queries = require('./queries');



exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    pool.query(queries.getAllUserQuery,(error,results)=>{
      if(error)throw error;
      res.status(200).json(results.rows);
  });
};

exports.getUserByID = (req, res) => {
  const id = req.params.id;
  pool.query(queries.getUserByIDQuery,[id],(error,results)=>{
      if(error)
      {
        res.status(422).send("Wrong ID");
      }
      else {
          res.status(200).json(results.rows);
      }

  });
};

exports.removeUserById = (req, res) => {
  const id = req.params.id;
  pool.query(queries.removeUser,[id],(error,results)=>{
      if(error)
      {
        res.status(422).send(error.message);
      }
      else {
          res.status(200).json(results.rows);
      }

  });
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
