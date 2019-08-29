const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  phone: Number,
  email: String,
  favoriteProducts: Array,
  viewedProducts: Array,
  orders: Array
});

const User = mongoose.model("User", userSchema);

module.exports = User;
