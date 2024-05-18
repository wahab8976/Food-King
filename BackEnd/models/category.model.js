const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Category name is Required"],
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
