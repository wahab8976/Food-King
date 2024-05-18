const categorySchema = require("../models/category.model");
const category = express.Router();
const { handleAddCategory } = require("../controllers/card.controllers");

category.post("/add", handleAddCategory);

module.exports = category;
