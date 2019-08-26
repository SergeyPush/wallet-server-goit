const express = require("express");
const router = express.Router();
const ordersController = require("./orderController");

router.post("/", ordersController.createOrder);

module.exports = router;
