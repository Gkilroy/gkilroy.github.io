//-- replit.com index.js ----

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//-- nodjs middleware --

//-- used to allow localhost access to webserver
app.use(cors());

//-- post routes to parse form data to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const _PORT = 8080;

app.get("/", (req, res) => {
  const _msg = "Node/Express webserver v2.0.2";
  res.send({ msg: _msg });
});

app.get("/test1", (req, res) => {
  const _msg = "Node/Express test1 route";
  console.log(_msg);
  res.send({ msg: _msg });
});

app.get("/test2", (req, res) => {
  const _id = req.query.id;

  const _msg = `Node/Express test2 route id = ${_id}`;
  console.log(_msg);

  res.send({ msg: _msg });
});

app.get("/testdb1", (req, res) => {
  
    const _msg = `Node/Express testdb1 `;
    console.log(_msg);
  
    res.send({ msg: _msg });
});
  
app.get("/test3/:id", (req, res) => {
  const _id = req.params.id;

  const _msg = `Node/Express test3 route id = ${_id}`;
  console.log(_msg);

  res.send({ msg: _msg });
});

app.get("/login/:username/:password", (req, res) => {
  const _username = req.params.username;
  const _password = req.params.password;

  //let _msg = `login route, username: ${_username}, password: ${_password}`;
  //console.log(_msg);

  let _data = {};

  _msg = "* login successful";
  _data = { msg: _msg, login: true };

  if (
    _username === null ||
    _username === undefined ||
    _username.trim().toLowerCase() !== "admin"
  ) {
    _msg = "* invalid username/password";
    _data = { msg: _msg, login: false };
  }

  res.send(_data);
});

app.post("/register", (req, res) => {
  const _body = req.body;

  //let _msg = `register route, body: ${JSON.stringify(_body)}`;
  //console.log(_msg);

  let _return = {};

  _msg = "* registration successful";
  _return = { msg: _msg, register: true };

  _username = _body.username;

  //-- lookup username in database
  if (
    _username === null ||
    _username === undefined ||
    _username.trim().toLowerCase() === "admin"
  ) {
    _msg = "* invalid registration, username already exists.";
    _return = { msg: _msg, register: false };
  } else {
    console.log("save username/password to database");
  }

  res.send(_return);
});

app.listen(_PORT, () => {
  const _msg = `Node/express webserver 2.0.1 ...running on port: ${_PORT}`;

  console.log(_msg);
});
