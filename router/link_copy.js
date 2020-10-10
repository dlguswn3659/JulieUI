var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/topic", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/link_copy"));
});

module.exports = router;
