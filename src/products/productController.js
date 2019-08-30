const Product = require("./productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: "success",
      product
    });
  } catch (error) {
    res.status(404).json({
      ststus: "fail",
      error
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "sucess",
      product
    });
  } catch (error) {
    res.status(404).json({
      ststus: "fail",
      error
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      product
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error
    });
  }
};

exports.updateProduct = (req, res) => {
  try {
    const product = Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.ststus(201).json({
      status: "success",
      product
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      error
    });
  }
};
