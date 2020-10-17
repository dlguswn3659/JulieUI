var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/individual_idea", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/individual_idea"));
});

module.exports = router;
