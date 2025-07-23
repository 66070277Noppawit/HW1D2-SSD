const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password4demo',
  database: 'express_api_db',
});

module.exports = connection;
