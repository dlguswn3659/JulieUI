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
var first_idea = require("./router/first_idea");
var individual_idea = require("./router/individual_idea");
var indi2_idea = require("./router/indi2_idea");
var re_idea_board = require("./router/re_idea_board");
var discussion2 = require("./router/discussion2");
var twodiscussion2 = require("./router/twodiscussion2");
var longideaboard = require("./router/longideaboard");
var vote1 = require("./router/vote1");
var vote2 = require("./router/vote2");
var vote_result = require("./router/vote_result");
var breaktime = require("./router/breaktime");
var final_vote = require("./router/final_vote");
var meeting_report = require("./router/meeting_report");
var ideationtime = require("./router/ideationtime");
var ment4 = require("./router/ment4");
var ment3 = require("./router/ment3");
var ment2 = require("./router/ment2");
var ment1 = require("./router/ment1");
var introduce1 = require("./router/introduce1");
var introduce2 = require("./router/introduce2");
var people = require("./router/people");
var hello = require("./router/hello");

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
app.use("/first_idea", first_idea);
app.use("/individual_idea", individual_idea);
app.use("/indi2_idea", indi2_idea);
app.use("/re_idea_board", re_idea_board);
app.use("/discussion2", discussion2);
app.use("/twodiscussion2", twodiscussion2);
app.use("/longideaboard", longideaboard);
app.use("/vote1", vote1);
app.use("/vote2", vote2);
app.use("/vote_result", vote_result);
app.use("/breaktime", breaktime);
app.use("/final_vote", final_vote);
app.use("/meeting_report", meeting_report);
app.use("/ideationtime", ideationtime);
app.use("/ment4", ment4);
app.use("/ment3", ment3);
app.use("/ment2", ment2);
app.use("/ment1", ment1);
app.use("/introduce2", introduce2);
app.use("/introduce1", introduce1);
app.use("/people", people);
app.use("/hello", hello);

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
