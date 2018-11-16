// Requiring the connection.js file
const connection = require("./connection");

// Creating the methods to interact with the database
const orm = {
  // Finds the average of sandwich ratings by sandwich_id
  selectRating: function(colName, tableName, cb) {
    let queryString =
      "SELECT AVG(?) AS averageRating FROM ?? GROUP BY sandwich_id";

    console.log(queryString);

    connection.query(queryString, [colName, tableName], function(
      error,
      result
    ) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  // Displaying the standard menu
  selectStandard: function(cb) {
    let queryString = "SELECT * FROM sandwich LIMIT 0, 10";

    console.log(queryString);

    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  // Selecting the weekly features
  selectWeekly: function(cb) {
    let queryString = "SELECT * FROM sandwich WHERE sandwich_id > 10";

    console.log(queryString);

    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  // Selecting a random sandwich
  selectRandom: function(cb) {
    let queryString =
      "SELECT * FROM sandwich WHERE sandwich_id > 10 ORDER BY RAND() LIMIT 1";

    console.log(queryString);

    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  // Adding a user's sandwich to the database
  insertSandwich: function(userSandwich, userId, cb) {
    let queryString = "INSERT INTO sandwich (name, user_id) VALUES (?,?)";

    console.log(queryString);

    connection.query(queryString, [userSandwich, userId], function(
      error,
      result
    ) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  // Adding a user's sandwich meat to the database
  insertMeat: function(userMeat, sandwichId, cb) {
    let queryString = "INSERT INTO meat (meat_type, sandwich_id) VALUES (?,?)";

    console.log(queryString);

    connection.query(queryString, [userMeat, sandwichId], function(
      error,
      result
    ) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  // Adding a user's toppings to the database
  insertToppings: function(userTopping, sandwichId, cb) {
    let queryString =
      "INSERT INTO toppings (topping, sandwich_id) VALUES (?,?)";

    console.log(queryString);

    connection.query(queryString, [userTopping, sandwichId], function(
      error,
      result
    ) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  },
  // Updating the rating of the sandwich
  updateRating: function(rating, value, sandwichId, userId, cb) {
    let queryString =
      "UPDATE ratings SET ?? = ? WHERE sandwich_id = ? AND user_id = ?";

    console.log(queryString, [rating, value, sandwichId, userId], function(
      error,
      result
    ) {
      if (error) {
        throw error;
      }
      cb(result);
    });
  }
};

// Exporting the orm module
module.exports = orm;
