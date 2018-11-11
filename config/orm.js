// Requiring the connection.js file
const connection = require('./connection')

// Creating the methods to interact with the database
const orm = {
    // Finds the average of sandwich ratings by sandwich_id
    selectRating: function (colName, tableName, cb) {
        let queryString = 'SELECT AVG(?) AS averageRating FROM ?? GROUP BY sandwich_id'

        console.log(queryString)

        connection.query(queryString, [colName, tableName], function (error, result) {
            if (error) {
                throw error
            }
            cb(result)
        })
    },
    // Displaying the standard menu
    selectStandard: function (cb) {
        let queryString = 'SELECT * FROM sandwich LIMIT 0, 10'

        console.log(queryString)

        connection.query(queryString, function (error, result) {
            if (error) {
                throw error
            }
            cb(result)
        })
    },
    // Selecting the weekly features
    selectWeekly: function (cb) {
        let queryString = 'SELECT * FROM sandwich WHERE sandwich_id > 10'

        console.log(queryString)

        connection.query(queryString, function (error, result) {
            if (error) {
                throw error
            }
            cb(result)
        })
    },
    // Selecting a random sandwich
    selectRandom: function (cb) {
        let queryString = 'SELECT * FROM sandwich WHERE sandwich_id > 10 ORDER BY RAND() LIMIT 1'

        console.log(queryString)

        connection.query(queryString, function (error, result) {
            if (error) {
                throw error
            }
            cb(result)
        })
    },
    // Adding a user's burger to the database
    insertOne: function () {
        
    }
}