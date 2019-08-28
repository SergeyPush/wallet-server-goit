const User = require("./userModel");

exports.getAllUsers = async (req, res) => {
  try {
    const user = await User.find();
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

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

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
