const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: String,
  lastName: String,
  isAdmin: Boolean,
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
