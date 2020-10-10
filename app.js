var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
var main = require("./router/main");
var process_select = require("./router/process_select");
var topic = require("./router/topic");
var time_setting = require("./router/time_setting");
var link_copy = require("./router/link_copy");
var start = require("./router/start");
var intro = require("./router/intro");
var self_intro_timer = require("./router/self_intro_timer");
var ice_breaking = require("./router/ice_breaking");
var ice_breaking2 = require("./router/ice_breaking2");
var ice_breaking_end = require("./router/ice_breaking_end");
var idea_board = require("./router/idea_board");

var connection = mysql.createConnection({
  host: "localhost",
  // port: 33060,
  user: "root",
  password: "liapicls135",
  database: "jsman",
});

connection.connect();

app.listen(3000, function () {
  //3000이라는 포트를 배경으로 실행됨.
  console.log("start! express server on port 3000!");
}); //비동기로 동작하는 call back 함수. 스택에서 마지막에 나옴.

app.use(express.static("public")); //static 디렉토리에 express를 넣는 작업
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/", main);
app.use("/main", main);
app.use("/process_select", process_select);
app.use("/topic", topic);
app.use("/time_setting", time_setting);
app.use("/link_copy", link_copy);
app.use("/start", start);
app.use("/intro", intro);
app.use("/self_intro_timer", self_intro_timer);
app.use("/ice_breaking", ice_breaking);
app.use("/ice_breaking2", ice_breaking2);
app.use("/ice_breaking_end", ice_breaking_end);
app.use("/idea_board", idea_board);

app.post("/email_post", function (req, res) {
  console.log(req.body.email);
  // res.send("<h1>welcome !</h1>" + req.body.email);
  res.render("email.ejs", { email: req.body.email });
});

app.post("/ajax_send_email", function (req, res) {
  var email = req.body.email;
  var responseData = {};

  //쿼리 날리자
  var query = connection.query(
    'select name from user where email="' + email + '"',
    function (err, rows) {
      if (err) throw err;
      if (rows[0]) {
        // console.log(rows[0].name);
        responseData.result = "ok";
        responseData.name = rows[0].name;
      } else {
        // console.log("none : " + rows[0]);
        responseData.result = "none";
        responseData.name = "";
      }
      res.json(responseData);
    }
  );
  // res.json(responseData);
});
