const express = require("express");
const router = express.Router();
const multer = require("multer");
const { cloudinary, storage } = require("../cloudinary");
const { requireLogin, isAdmin } = require("../middlewares");
const upload = multer({ storage });
const Product = require("../model/product");
router.post(
  "/add/product",
  requireLogin,
  isAdmin,
  upload.array("image"),
  async (req, res) => {
    const product = new Product(req.body);
    const images = [];
    req.files.forEach((file) => {
      images.push({ url: file.path, filename: file.filename });
    });
    product.images.push(...images);
    await product.save();
  }
);
router.get("/all/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});
module.exports = router;
