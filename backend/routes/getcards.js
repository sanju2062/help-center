const express = require("express");
const router = express.Router();
const Card = require("../models/CardSchema");

// GET request to retrieve all Cards from the database
router.get("/", async (req, res) => {
  try {
    const allCards = await Card.find();
    if (!allCards || allCards.length === 0) {
      return res.status(404).json({ message: "No Cards found" });
    }
    res.status(200).json({ Cards: allCards });
  } catch (error) {
    console.error("Error fetching Cards:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
