const express = require("express");

const userRoutes = express.Router();
const {
  handleUserAuthentication,
  handleUserRegisteration,
} = require("../controllers/user.controllers");

userRoutes.post("/signup", handleUserRegisteration);
userRoutes.post("/login", handleUserAuthentication);

module.exports = userRoutes;
