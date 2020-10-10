var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/process_select", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/process_select"));
});

module.exports = router;
