const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const planets = require('./Routes/Planets');
const moons = require('./Routes/Moons');
const port = "8542";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/planet', planets);
app.use('/moon', moons);

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port} !`);
});