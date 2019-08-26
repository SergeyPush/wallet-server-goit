exports.getUser = (req, res) => {
  res.status(200).json({
    ststus: "success",
    user: req.params.id
  });
};

exports.createUser = (req, res) => {
  res.status(201).json({
    ststus: "success",
    user: req.body
  });
};
