var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/ment3", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/ment3"));
});

module.exports = router;
