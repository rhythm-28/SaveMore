const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./model/auth/user");
const session = require("express-session");
const userRouter = require("./routes/auth/user");
app.use(
  session({
    secret: "This is the secret key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //Strategies range from verifying a username and password
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/testDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
app.use("/", userRouter);
app.get("/", (req, res) => {
  res.send("Connected React with Node");
});
app.listen(5000, () => {
  console.log("Listening on Port 5000");
});
