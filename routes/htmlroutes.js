let path = require("path");

module.exports = app => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/login.html"));
  });
  app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  app.get("/vote", (req, res) => {
    res.sendFile(path.join(__dirname, "/../public/vote.html"));
  });
};
