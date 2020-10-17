var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/final_vote", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/final_vote"));
});

module.exports = router;
