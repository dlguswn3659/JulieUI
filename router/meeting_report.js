var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/meeting_report", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/meeting_report"));
});

module.exports = router;
