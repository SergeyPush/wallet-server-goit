const User = require("./userModel");

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      ststus: "success",
      user
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.status(201).json({
      ststus: "success",
      user
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error
    });
  }
};
