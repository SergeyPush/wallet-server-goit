const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  password: String,
  phone: Number,
  email: String,
  favoriteProducts: [String],
  viewedProducts: [String],
  orders: [String]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
