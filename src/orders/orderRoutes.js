const express = require("express");
const router = express.Router();
const ordersController = require("./orderController");

router.get("/", ordersController.getAllOrders);
router.get("/:id", ordersController.getOrder);
router.post("/", ordersController.createOrder);
router.put("/:id", ordersController.updateOrder);

module.exports = router;
