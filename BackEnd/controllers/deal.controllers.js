const express = require("express");
const dealSchema = require("../models/deal.model");

const handleAddDeals = async (req, res) => {
  const { title, description, originalprice, discountedprice } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required!" });
  else if (!description)
    return res.status(400).json({ error: "Description is required!" });
  else if (!originalprice)
    return res.status(400).json({ error: "Price is required!" });

  const percentageoff = ((discountedprice / originalprice) * 100).toFixed(0);

  const newDeal = new dealSchema({
    title: title,
    description: description,
    originalprice: originalprice,
    discountedprice: discountedprice,
    percentageoff: percentageoff,
  });

  if (!newDeal) return res.status(400).json({ error: "Deal not Found!" });
  await newDeal.save();
  return res.status(201).json(newDeal);
};

const handleShowDeals = async (req, res) => {
  try {
    const deals = await dealSchema.find({});
    if (!deals) return res.status(404).json({ error: "No deal Found" });
    return res.status(200).json(deals);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { handleAddDeals, handleShowDeals };
