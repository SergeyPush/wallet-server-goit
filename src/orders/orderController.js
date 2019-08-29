const Order = require("./orderModel");

exports.getAllOrders = async (req, res) => {
  try {
    const order = await Order.find();
    res.status(201).json({
      status: "success",
      order
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.status(201).json({
      status: "success",
      order
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      order
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error
    });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(201).json({
      status: "success",
      order
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error
    });
  }
};
