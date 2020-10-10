var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/re_idea_board", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/re_idea_board"));
});

module.exports = router;
