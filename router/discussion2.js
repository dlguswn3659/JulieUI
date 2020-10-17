var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/discussion2", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/discussion"));
});

module.exports = router;
