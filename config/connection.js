var mysql = require("mysql");

var connection;


	connection = mysql.createConnection();
} else {
    connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Underscore_66",
	database: "burgers_db"
});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});


module.exports = connection;