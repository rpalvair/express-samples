const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log("Application active sur le port %s ", port);
});

module.exports = server;
