const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/auth");

router.get("/post/:id", authMiddleware.verifyToken, async (req, res) => {
  await postController.getResourceById(req, res);
});

router.get("/post", authMiddleware.verifyToken, async (req, res) => {
  await postController.getAllResources(req, res);
});

router.delete("/post/:id", authMiddleware.verifyToken, async (req, res) => {
  await postController.deleteResourceById(req, res);
});

router.put("/post/:id", authMiddleware.verifyToken, async (req, res) => {
  await postController.updateResourceById(req, res);
});

router.post("/post", authMiddleware.verifyToken, async (req, res) => {
  await postController.insertResource(req, res);
});

module.exports = router;
