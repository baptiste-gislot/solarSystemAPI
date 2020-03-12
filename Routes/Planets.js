const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM Planets;', (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(result);
  });
});

router.get('/:id', (req, res) => {
  db.query(`SELECT * FROM Planets WHERE id = ${req.params.id}`, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(result);
  });
});

router.put('/:id', (req, res) => {
  db.query(`UPDATE TABLE Planets SET ? WHERE id = ${req.params.id}`, req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(`La planète N°${req.params.id} a bien été modifiée !`);
  });
})

router.delete('/:id', (req, res) => {
  db.query(`DELETE FROM Planets WHERE id = ${req.params.id}`, (err,result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(`La planète N°${req.params.id} a bien été supprimée !`);
  })
})

router.post('/', (req, res) => {
  db.query('INSERT INTO Planets SET ?', req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send('Planète correctement ajoutée à la BDD !');
  });
});

module.exports = router;