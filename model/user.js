const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  image: String,
});
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  isAdmin: Boolean,
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  products: [productSchema],
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
