var express = require("express");
var app = express();
var bodyParser = require("body-parser");

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
  console.log(req.body.email);
  var responseData = { result: "ok", email: req.body.email };
  res.json(responseData);
});
