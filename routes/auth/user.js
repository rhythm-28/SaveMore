const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../model/auth/user");
router.post("/api/user/login", passport.authenticate("local"), (req, res) => {
  const { username, email, firstName, lastName, _id } = req.user;
  res.send({ username, email, firstName, lastName, _id });
});
router.post("/api/user/signup", async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    console.log(req.body);
    const user = new User({ username, email, firstName, lastName });
    const newUser = await User.register(user, password);
    req.login(newUser, function (err) {
      if (err) {
        res.send({ error: err });
      } else {
        const { username, email, firstName, lastName, _id } = newUser;
        res.send({ username, email, firstName, lastName, _id });
      }
    });
  } catch (err) {
    res.send({ error: err });
  }
});
router.get("/api/currentUser", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    res.send({ error: "Something went wrong" });
  }
});
router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});
module.exports = router;
