const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Convertir le pool en promesses
const promisePool = pool.promise();

// Test de connexion
promisePool.getConnection()
  .then(connection => {
    console.log('Connecté à la base de données MySQL');
    connection.release();
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données:', err);
  });

module.exports = promisePool; 