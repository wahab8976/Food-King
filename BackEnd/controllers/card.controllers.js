const cardSchema = require("../models/card.model");
const mongoose = require("mongoose");

const handleAddCard = async (req, res) => {
  try {
    const newItem = new cardSchema(req.body);
    await newItem.save();
    return res.status(201).json(newItem);
  } catch (error) {
    console.error("Error Adding Item:", error);
    return res.status(400).json({ msg: "Error Adding Item", error });
  }
};

const handleDeleteCard = async (req, res) => {
  try {
    const cardId = req.params.id;
    // Check if the cardId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(cardId)) {
      return res.status(400).json({ msg: "Invalid Card ID" });
    }
    const deletedCard = await cardSchema.findByIdAndDelete(cardId);
    if (!deletedCard) {
      return res.status(404).json({ msg: "Card not Found" });
    }
    res.status(200).json({ msg: "Card Deleted Successfully!" });
  } catch (error) {
    console.error("Error Deleting Item:", error);
    res.status(500).json({ msg: "Something went wrong", error });
  }
};

const handleEditCard = async (req, res) => {
  try {
    const cardId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(cardId))
      res.status(400).json({ msg: "Invalid Card Id" });
    const toUpdate = req.body;

    const updatedCard = await cardSchema.findByIdAndUpdate(cardId, toUpdate, {
      new: true,
    });
    if (!updatedCard) res.status(404).json({ msg: "Card not Found" });
    res.status(200).json(updatedCard);
  } catch (error) {
    console.error("Error Occured: ", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { handleAddCard, handleDeleteCard, handleEditCard };
