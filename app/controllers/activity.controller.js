const pool = require('../config/db');
const queries = require('./queries');
const db = require("../models");

const Activity = db.activity;


exports.createActivity = (req, res) => {
  // Save User to Database
  Activity.create({
    libelle: req.body.libelle,
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

    res.status(200).send("Activity created");


};


exports.activityBoard = (req, res) => {
    pool.query(queries.getAllActivityQuery,(error,results)=>{
      if(error)throw error;
      res.status(200).json(results.rows);
  });
};

exports.getActivityByID = (req, res) => {
  const id = req.params.id;
  pool.query(queries.getActivityByIDQuery,[id],(error,results)=>{
      if(error)
      {
        res.status(422).send("Wrong ID");
      }
      else {
          res.status(200).json(results.rows);
      }

  });
};

