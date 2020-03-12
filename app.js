const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const port = "8542";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  db.query('SELECT * FROM Planets;', (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(result);
  });
});

app.get('/:id', (req, res) => {
  db.query(`SELECT * FROM Planets WHERE id = ${req.params.id}`, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(result);
  });
});

app.put('/:id', (req, res) => {
  db.query(`UPDATE TABLE Planets SET ? WHERE id = ${req.params.id}`, req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(`La planète N°${req.params.id} a bien été modifiée !`);
  });
})

app.delete('/:id', (req, res) => {
  db.query(`DELETE FROM Planets WHERE id = ${req.params.id}`, (err,result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send(`La planète N°${req.params.id} a bien été supprimée !`);
  })
})

app.post('/', (req, res) => {
  db.query('INSERT INTO Planets SET ?', req.body, (err, result) => {
    if(err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.status(200).send('Planète correctement ajoutée à la BDD !');
  });
});

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port} !`);
});