const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    required: [true, "Username is a required field"],
    type: String,
  },
  password: {
    required: [true, "Password is a required field"],
    type: String,
  },
  phone: {
    required: [true, "Phone number is a required field"],
    type: String,
    unique: [true, "Phone number already exists. Please try another one"],
  },
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer",
  },
});

module.exports = mongoose.model("User", userSchema);
