const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  category: String,
  pincode: Number,
  address: String,
  city: String,
  state: String,
  country: String,
  gstRegistrationNumber: String
});

module.exports = mongoose.model("Admin", adminSchema)
