const express = require("express");
const menuSchema = require("../models/menu.model");

const handleItemAdd = async (req, res) => {};

const handleShowMenu = async (req, res) => {
  try {
    const menu = await menuSchema.find({}); // Wait for the query execution

    if (!menu || menu.length === 0) {
      return res.status(404).json({ error: "Menu not found!" });
    }

    return res.status(200).json(menu);
  } catch (error) {
    console.error("Error fetching menu:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  handleItemAdd,
  handleShowMenu,
};
