const express = require("express");
const Admin = require("../model/admin");
const User = require("../model/user");
const Product = require("../model/product");
const router = express.Router();
const { requireLogin, isAdmin } = require("../middlewares");
const multer = require("multer");
const { cloudinary, storage } = require("../cloudinary");
const upload = multer({ storage });
const catchAsync = require("../utils/catchAsync");
router.post(
  "/admin/register",
  requireLogin,
  upload.single("image"),
  catchAsync(async (req, res) => {
    const newAdmin = new Admin(req.body);
    if (req.file)
      newAdmin.image = { url: req.file.path, filename: req.file.filename };
    else newAdmin.image = {};
    await newAdmin.save();
    await User.findByIdAndUpdate(req.user.id, {
      isAdmin: true,
      admin: newAdmin._id,
    });
    res.send(newAdmin);
  })
);
router.get("/api/currentAdmin", requireLogin, isAdmin, async (req, res) => {
  const admin = await Admin.findById(req.user.admin);
  res.send(admin);
});
router.post(
  "/api/admin/update",
  requireLogin,
  isAdmin,
  catchAsync(async (req, res) => {
    delete req.body["_id"];
    delete req.body[" __v"];
    const newAdmin = await Admin.findByIdAndUpdate(req.user.admin, {
      ...req.body,
    });
    res.send(newAdmin);
  })
);
router.get(
  "/api/admin/products",
  requireLogin,
  isAdmin,
  catchAsync(async (req, res) => {
    const products = await Product.find({ admin: req.user.admin });
    console.log(products);
    res.send(products);
  })
);
module.exports = router;
