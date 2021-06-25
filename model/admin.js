const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImageSchema = new Schema({
  url: String,
  filename: String,
});
const adminSchema = new Schema({
  storeName: {
    type: String,
    required: true,
  },
  category: String,
  pinCode: Number,
  address: String,
  city: String,
  state: String,
  country: String,
  gstIn: String,
  image: ImageSchema,
});

module.exports = mongoose.model("Admin", adminSchema);
