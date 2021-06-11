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
  admin: Boolean,
  adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);
