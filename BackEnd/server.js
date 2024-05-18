const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./DB/connect");
const cors = require("cors");
const adminRoutes = require("./routes/card.routes");
const cardSchema = require("./models/card.model");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

// Admin routes
app.use("/api/admin", adminRoutes);

// Sample route to get all cards
app.get("/", async (req, res) => {
  try {
    const cards = await cardSchema.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching cards" });
  }
});

// Start the server
app.listen(port, async () => {
  try {
    await connectDB("mongodb://localhost:27017/FoodKing");
    console.log(`Server listening on port ${port}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
});
