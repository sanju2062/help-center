const express = require("express");
const router = express.Router();
const Card = require("../models/CardSchema");

// GET request to retrieve all data from the database
router.get("/", async (req, res) => {
  console.log(req.query.title);
  const title = req.query.title;
  try {
    const card = await Card.find({ title: new RegExp(`^${title}$`, "i") });
    if (card.length == 0) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json({ card: card });
  } catch (error) {
    console.error("Error fetching card:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// router.get("/", async (req, res) => {
//   res.status(200).json({ message: "Enter the title of card" });
// });

module.exports = router;
