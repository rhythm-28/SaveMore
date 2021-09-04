const express = require("express");
const router = express.Router();
const { requireLogin, isAdmin } = require("../middlewares");
const multer = require("multer");
const { cloudinary, storage } = require("../cloudinary");
const upload = multer({ storage });
const catchAsync = require("../utils/catchAsync");
const Product = require("../model/product");
const shortid = require("shortid");
const Razorpay = require("razorpay");
const razorpay = new Razorpay({
  key_id: process.env.Key,
  key_secret: process.env.KeySecret,
});
router.post(
  "/add/product",
  requireLogin,
  isAdmin,
  upload.array("image"),
  catchAsync(async (req, res) => {
    const product = new Product(req.body);
    const images = [];
    req.files.forEach((file) => {
      images.push({ url: file.path, filename: file.filename });
    });
    product.images.push(...images);
    product.admin = req.user.admin;
    await product.save();

    res.send(product);
  })
);
router.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
router.get(
  "/api/product/:id",
  catchAsync(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.send(product);
  })
);
router.post(
  "/update/product/:id",
  requireLogin,
  isAdmin,
  upload.array("image"),
  catchAsync(async (req, res) => {
    const image = [];
    req.files.forEach((f) => {
      image.push({ url: f.path, filename: f.filename });
    });
    const product = await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    if (req.body.deleteImages) {
      if (Array.isArray(req.body.deleteImages)) {
        for (let filename of req.body.deleteImages) {
          cloudinary.uploader.destroy(filename);
        }
      } else {
        cloudinary.uploader.destroy(req.body.deleteImages);
      }
      await product.updateOne({
        $pull: { images: { filename: { $in: req.body.deleteImages } } },
      });
    }
    product.images.push(...image);
    await product.save();
    res.send("product");
  })
);
router.get(
  "/api/product/:id/delete",
  catchAsync(async (req, res) => {
    const product = await Product.findByIdAndRemove(req.params.id);
    const products = await Product.find({ admin: req.user.admin });
    if (product.images.length) {
      for (let image of product.images) {
        cloudinary.uploader.destroy(image.filename);
      }
    }
    res.send(products);
  })
);
router.post("/api/razorpay", async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.amount;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
