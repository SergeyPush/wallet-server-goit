const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);

module.exports = router;
