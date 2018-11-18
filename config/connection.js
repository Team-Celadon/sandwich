// Requiring mysql
var mysql = require("mysql");

// Creating the database connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "sandwiches_db"
});

// Checking the connection
connection.connect(function(error) {
  if (error) {
    console.log("Error connection: " + error.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

// Exporting the connection module
module.exports = connection;
