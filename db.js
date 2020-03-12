const mysql = require('mysql');
const dbConfig = require('./db.config');

const database = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

database.connect(error => {
  if(error) throw error;
  console.log('Connecté à la BDD !');
});

module.exports = database;