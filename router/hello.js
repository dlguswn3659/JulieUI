var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/hello", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/hello"));
});

module.exports = router;
