var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/self_intro_timer", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/self_intro_timer"));
});

module.exports = router;
