const express = require("express");
const bcrypt = require("bcrypt");
const userSchema = require("../models/user.model");

const handleUserRegisteration = async (req, res) => {
  try {
    const { password, username, phone } = req.body;
    const isExistingUser = await userSchema.findOne({ phone: phone });

    if (isExistingUser) {
      return res.status(400).json({ error: "User already exist!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new userSchema({
      username,
      password: hashedPassword,
      phone,
    });

    await newUser.save();
    return res.status(201).json({ msg: "User Created!" });
  } catch (error) {
    console.error("Something went Wrong: ", error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};

const handleUserAuthentication = async (req, res) => {
  try {
    const { tempIdentifier, password } = req.body;

    // Convert tempIdentifier to string if it's a number
    const identifier =
      typeof tempIdentifier === "number"
        ? tempIdentifier.toString()
        : tempIdentifier;

    // Find the user by username or phone number
    const user = await userSchema.findOne({
      $or: [{ username: identifier }, { phone: identifier }],
    });

    if (!user) {
      return res
        .status(400)
        .json({ error: "Username or phone number not found!" });
    }

    // Comparing with hashed password in DB
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid Password!" });
    }
    // Authentication successful
    return res.status(200).json({ msg: "Login successful" });
  } catch (error) {
    console.error("Something went wrong: ", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};
module.exports = { handleUserRegisteration, handleUserAuthentication };
