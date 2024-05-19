const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    index: true, // Adding index
  },
  description: {
    type: String,
  },
});
