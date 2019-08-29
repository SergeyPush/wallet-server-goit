const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  productList: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },
      size: String,
      itemsCount: Number
    }
  ],
  deliveryType: String,
  deliveryAddress: String,
  sumToPay: Number,
  ststus: String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
