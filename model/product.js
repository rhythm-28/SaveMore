const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  url: String,
  filename: String,
});
const productSchema = new Schema({
  name: String,
  marketPrice: Number,
  discountPrice: Number,
  description: String,
  images: [ImageSchema],
});
module.exports = mongoose.model("Product", productSchema);
