var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/indi2_idea", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/indi2_idea"));
});

module.exports = router;
