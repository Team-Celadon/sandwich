// Requiring mysql
var mysql = require('mysql')

let connection

//Creating database connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'sandwiches_db'
})
}

// Checking the connection
connection.connect(function (error) {
    if (error) {
        console.log('Error connection: ' + error.stack)
        return
    }
    console.log("Connected as ID " + connection.threadId)
})

// Exporting the connection module
module.exports = connection