var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/vote2", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/vote2"));
});

module.exports = router;
