const User = require("../models/user");

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const { email } = req.body;
    const existe = await User.findOne({ email });
    if (existe) res.status(400).json("user with this eamil existe");
    const newUser = await user.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.log("errr", error);
  }
};

const getUsers = async (req, res) => {
  try {
    const usersList = await User.find();
    res.json(usersList);
  } catch (error) {
    console.log("errr", error);
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    console.log("errr", error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.deleteOne();
      res.status(200).json("user removed");
    } else {
      return res.status(400).json("user not found");
    }
  } catch (error) {
    console.log("errr", error);
  }
};
module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
};