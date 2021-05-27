const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Connected React with Node");
});
app.post("/login", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(5000, () => {
  console.log("Listening on Port 5000");
});
