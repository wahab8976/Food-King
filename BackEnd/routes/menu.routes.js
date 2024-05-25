const express = require("express");
const {
  handleItemAdd,
  handleShowMenu,
} = require("../controllers/menu.contollers");
const menuRoutes = express.Router();

menuRoutes.post("/add", handleItemAdd);
menuRoutes.get("/", handleShowMenu);

module.exports = menuRoutes;
