//Almost certainly can remove the jawsDB part of this but leaving it until we settle on storage.

var mysql = require('mysql');
// var sqlConnect = require("./apikeys/keys.js");
// Mysql

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "admin",
    database: "Users_DB"
});
}



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;