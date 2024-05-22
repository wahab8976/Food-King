const express = require("express");
const categorySchema = require("../models/category.model");

const handleAddCategory = async (req, res) => {
  try {
    const newCategory = new categorySchema(req.body);
    await newCategory.save();
    return res.status(201).json(newCategory);
  } catch (error) {
    return res.json({ msg: "Error Adding a Category" });
    console.error(error);
  }
};

module.exports = { handleAddCategory };
