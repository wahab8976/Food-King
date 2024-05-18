const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    required: [true, "Title is Required"],
    type: String,
  },
  description: {
    required: [true, "Description is Required"],
    type: String,
  },
  image: {
    required: [true, "Image URL is Required"],
    type: [String],
  }
});

module.exports = mongoose.model("Card", cardSchema);
