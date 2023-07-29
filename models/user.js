const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    email: {
      type: String,
      unique: true,
      //   required: true,
    },
    phone: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = User = model("User", userSchema);
