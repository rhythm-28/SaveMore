const express = require("express");
const router = express.Router();
const { requireLogin, isAdmin } = require("../middlewares");
const multer = require("multer");
const { cloudinary, storage } = require("../cloudinary");
const upload = multer({ storage });
const catchAsync = require("../utils/catchAsync");
const Product = require("../model/product");
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
module.exports = router;
