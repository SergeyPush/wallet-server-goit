const express = require("express");
const router = express.Router();
const productController = require("./productController");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
