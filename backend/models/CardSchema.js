const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Card", CardSchema);
