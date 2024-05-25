const express = require("express");
const dealRoutes = express.Router();
const {
  handleAddDeals,
  handleShowDeals,
} = require("../controllers/deal.controllers");

dealRoutes.post("/add", handleAddDeals); 
dealRoutes.get("/", handleShowDeals);
module.exports = dealRoutes;
