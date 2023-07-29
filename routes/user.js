const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/add", createUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
