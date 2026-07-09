let mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "19082002",
  database:"multivendor",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;




