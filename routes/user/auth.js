const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../../model/user/auth");
router.post("/api/user/login", passport.authenticate("local"), (req, res) => {
  const { username, email, firstName, lastName, _id } = req.user;
  res.send({ username, email, firstName, lastName, _id });
});
router.post("/api/user/signup", async (req, res) => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    const isAdmin = false;
    const user = new User({ username, email, firstName, lastName,isAdmin });
    const newUser = await User.register(user, password);
    req.login(newUser, function (err) {
      if (err) {
        res.send({ error: err });
      } else {
        const { username, email, firstName, lastName, _id,isAdmin } = newUser;
        res.send({ username, email, firstName, lastName, _id,isAdmin });
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
    res.status(404).send({ err: "No user found" });
  }
  //const { username, _id, firstName, lastName, email } = req.user;
});
router.get("/api/user/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});
module.exports = router;
