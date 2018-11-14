// Bringing in all of the dependencies
const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
// Need to update this
// const routes = require(NULL);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/htmlroutes")(app);
app.use(express.static(__dirname + "public/assets"));

app.use("/apiroutes", require("./routes/apiroutes"));

app.listen(process.env.port || 4000, function() {
  console.log("Server listening on PORT: " + PORT);
});
