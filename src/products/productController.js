exports.getAllProducts = (req, res) => {
  if (req.query) {
    console.log(req.query.ids);
  }

  res.status(200).json({
    status: "success",
    products: []
  });
};

exports.getProduct = (req, res) => {
  res.status(200).json({
    status: "sucess",
    product: req.params.id
  });
};
