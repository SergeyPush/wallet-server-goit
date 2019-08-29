const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  sku: {
    type: Number,
    unique: true
  },
  name: {
    type: String
  },
  description: String,
  likes: Number
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
