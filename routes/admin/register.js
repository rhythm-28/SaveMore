const express = require("express");
const Admin = require("../../model/admin/register");
const User = require("../../model/user/auth");
const router = express.Router();
const { requireLogin } = require("../../middlewares");
router.post("/admin/register", requireLogin, async (req, res) => {
  const newAdmin = new Admin(req.body);
  await newAdmin.save();
  await User.findByIdAndUpdate(req.user.id, {
    isAdmin: true,
    admin: newAdmin._id,
  });
  res.send(newAdmin);
});
module.exports = router;
