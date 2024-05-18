const mongoose = require("mongoose");
const cardSchema = require("./card.model");

const menuSchema = new mongoose.Schema({
  card: {
    type: mongoose.Schema.Types.ObjectId,
    ref: cardSchema,
    required: true,
  },
  ingredients: {
    type: [string],
  },
  price: {
    type: Number,
    required: [true, "Price is Required"],
  },
  inStock: {
    type: Boolean,
    default: true,
    required: [true, "This is a required Field"],
  },
  
});

module.exports = mongoose.model("Menu", menuSchema);
