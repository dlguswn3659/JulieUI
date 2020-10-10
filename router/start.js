var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/start", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/start"));
});

module.exports = router;
