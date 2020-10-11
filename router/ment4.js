var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/ment4", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/ment4"));
});

module.exports = router;
