// Bringing in all of the dependencies
const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
// Need to update this
// const routes = require(NULL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/htmlroutes.js", require("./routes/htmlroutes"));
require("./routes/htmlroutes")(app);
app.use(express.static(__dirname + "/public"));

app.use("/apiroutes", require("./routes/apiroutes"));

// var passport = require("passport"),
//   LocalStrategy = require("passport-local").Strategy;

// passport.use(
//   new LocalStrategy(function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) {
//         return done(err);
//       }
//       if (!user) {
//         return done(null, false, { message: "Incorrect username." });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: "Incorrect password." });
//       }
//       return done(null, user);
//     });
//   })
// );
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true
//   })
// );
// passport.use(new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'passwd'
// },
//   function (username, password, done) {
//     // ...
//   }
// ));

app.listen(process.env.port || 4000, function() {
  console.log("Server listening on PORT: " + PORT);
});
