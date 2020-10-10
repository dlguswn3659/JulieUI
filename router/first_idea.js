var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/first_idea", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/first_idea"));
});

module.exports = router;
