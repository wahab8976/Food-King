const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./DataBase/connect");
const cors = require("cors");
const cardSchema = require("./models/card.model");

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.use("/admin/api/card", require("./routes/card.routes"));
app.use("/menu/api/item", require("./routes/menu.routes"));
app.use("/menu/api/item/deals", require("./routes/deal.routes"));
app.use("/user/api", require("./routes/user.routes"));

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
