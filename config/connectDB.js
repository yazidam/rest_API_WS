const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ahmed:ahmed@cluster0.ymsmc19.mongodb.net/"
    );
    console.log("database connected");
  } catch (error) {
    console.log("errrr", error);
  }
};

module.exports = connectDB;
