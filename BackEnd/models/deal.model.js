const mongoose = require("mongoose");
const dealSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  originalprice: {
    required: true,
    type: Number,
  },
  discountedprice: {
    type: Number,
    default: 0,
  },
  percentageoff: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Deal", dealSchema);
