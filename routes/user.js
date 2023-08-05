const express = require("express");
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");
const { userValidator, validate } = require("../middlewares/validators");

const router = express.Router();

router.post("/add", userValidator, validate, createUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
