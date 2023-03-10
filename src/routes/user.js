const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");

router.post("/register", authMiddleware.encryptPassword, async (req, res) => {
  await userController.registerUser(req, res);
});

router.post("/login", async (req, res) => {
  await userController.loginUser(req, res);
});

module.exports = router;
