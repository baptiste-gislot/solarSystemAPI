const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Bodies = require('./Routes/Bodies');
const port = "8542";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bodies', Bodies);

app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port} !`);
});