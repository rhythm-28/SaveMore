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
  admin: {
    type: Schema.Types.ObjectId,
    ref: "Admin",
  },
});
module.exports = mongoose.model("Product", productSchema);
