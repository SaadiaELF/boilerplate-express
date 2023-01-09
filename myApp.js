let express = require("express");
let app = express();

app.get("/", function () {
  console.log("Hello World");
});

module.exports = app;
