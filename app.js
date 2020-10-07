var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");

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

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/main", function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
});

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
