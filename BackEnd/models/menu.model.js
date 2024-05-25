const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["pizza", "burger", "chicken"],
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price is Required"],
  },
  instock: {
    type: Boolean,
    default: true,
  },
  image: {
    type: String,
    required: [true, "This is a required Field"],
  },
});

module.exports = mongoose.model("Menu", menuSchema);
