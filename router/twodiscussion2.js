var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

router.get("/twodiscussion2", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/twodiscussion2"));
});

module.exports = router;
