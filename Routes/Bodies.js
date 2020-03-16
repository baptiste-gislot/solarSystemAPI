const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  if(req.query.type) {
    switch(req.query.type) {
      case 'planets':
        db.query('SELECT * FROM Bodies WHERE type = "Planet";', (err, result) => {
          if(err) {
            console.log(err);
            res.sendStatus(400);
          }
          res.status(200).json(result);
        });
        break;
      case 'moons':
        db.query('SELECT * FROM Bodies WHERE type = "Moon";', (err, result) => {
          if(err) {
            console.log(err);
            res.sendStatus(400);
          }
          res.status(200).json(result);
        });
        break;
      case 'stars':
        db.query('SELECT * FROM Bodies WHERE type = "Star";', (err, result) => {
          if(err) {
            console.log(err);
            res.sendStatus(400);
          }
          res.status(200).json(result);
        });
        break;
      default:
        res.status(400).send('Bad option');
    }
  } else {
    db.query('SELECT * FROM Bodies;', (err, result) => {
      if(err) {
        console.log(err);
        res.sendStatus(400);
      }
      res.status(200).json(result);
    });
  }
});

router.get('/:id', (req, res) => {
  db.query(`SELECT * FROM Bodies WHERE id = ${req.params.id}`, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).json(result);
  });
});

router.put('/:id', (req, res) => {
  db.query(`UPDATE TABLE Bodies SET ? WHERE id = ${req.params.id}`, req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(`La planète N°${req.params.id} a bien été modifiée !`);
  });
});

router.delete('/:id', (req, res) => {
  db.query(`DELETE FROM Bodies WHERE id = ${req.params.id}`, (err,result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(`La planète N°${req.params.id} a bien été supprimée !`);
  });
});

router.post('/', (req, res) => {
  db.query('INSERT INTO Bodies SET ?', req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send('Planète correctement ajoutée à la BDD !');
  });
});

module.exports = router;