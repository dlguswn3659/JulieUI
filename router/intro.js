var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/intro", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/intro"));
});

module.exports = router;
