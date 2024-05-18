const express = require("express");
const categorySchema = require("../models/category.model");

const handleAddCategory = async (req, res) => {
  try {
    const newCategory = new categorySchema(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.json({ msg: "Error Adding a Category" });
    console.error(error);
  }
};

module.exports = { handleAddCategory };
