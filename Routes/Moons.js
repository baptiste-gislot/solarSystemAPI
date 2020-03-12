const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.query(`SELECT * FROM Moons`, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(result);
  });
});

router.post('/', (req, res) => {
  db.query(`INSERT INTO Moons SET ?`, req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send('La lune a bien été crée !');
  });
});

module.exports = router;