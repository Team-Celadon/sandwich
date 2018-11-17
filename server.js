// // Bringing in all of the dependencies
// const express = require("express");
// const PORT = process.env.PORT || 8000;
// var bodyParser = require("body-parser");
// const app = express();
// // Need to update this
// // const routes = require(NULL);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(bodyParser.json());

// app.use(express.static(__dirname + "/assets"));

// app.use(routes);

// app.listen(PORT => {
//   console.log("Server listening on PORT: " + PORT);
// });

// Bringing in all of the dependencies
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
var PORT = process.env.PORT || 3030;
const app = express();
const api = require("./routes/apiroutes");
const html = require("./routes/htmlroutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/assets"));

app.use(api);
app.use(html);

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, function() {
  console.log("Server listening on PORT: " + PORT);
});
