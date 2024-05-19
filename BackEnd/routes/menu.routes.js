const express = require("express");
const { handleItemAdd } = require("../controllers/menu.conrollers");
const menuRoutes = express.Router();

menuRoutes.post("/add", handleItemAdd);





module.exports = menuRoutes;
