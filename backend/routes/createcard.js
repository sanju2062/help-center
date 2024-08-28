const express = require("express");
const router = express.Router();

const Card = require("../models/CardSchema");

router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(404)
        .json({ message: "title or description not found" });
    }
    const card = new Card({
      title,
      description,
    });
    await card.save();
    res.status(200).json({ message: "Card created Successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ Error: "Unable to create card" });
  }
});

module.exports = router;
