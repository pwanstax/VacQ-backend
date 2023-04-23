const mysql = require("mysql");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "michomicho!",
  database: "vacCenter",
});

module.exports = connection;
