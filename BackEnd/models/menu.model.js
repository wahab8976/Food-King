const mongoose = require("mongoose");
const Category = require("./category.model");

const menuSchema = new mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  ingredients: {
    type: [String],
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
    type: [String],
    required: [true, "This is a required Field"],
  },
});

module.exports = mongoose.model("Menu", menuSchema);
