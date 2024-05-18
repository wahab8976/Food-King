const express = require("express");
const cardRoutes = express.Router();
const {
  handleAddCard,
  handleDeleteCard,
  handleEditCard,
} = require("../controllers/card.controllers");

cardRoutes.post("/addcard", handleAddCard);
cardRoutes.delete("/deletecard/:id", handleDeleteCard);
cardRoutes.put("/editcard/:id", handleEditCard);

module.exports = cardRoutes;
