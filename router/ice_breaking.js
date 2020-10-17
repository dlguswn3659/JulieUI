var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/ice_breaking", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/ice_breaking"));
});

module.exports = router;
