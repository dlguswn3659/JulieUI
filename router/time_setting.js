var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/time_setting", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/time_setting"));
});

module.exports = router;
