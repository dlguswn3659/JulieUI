var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/vote_result", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/vote_result"));
});

module.exports = router;
