const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: { type: String, required: true },
  bodyColor: { type: String },
  artworkColors: [String],
  actualQuantity: { type: Number },
  quantityForPrint: { type: Number },
  quantityPrinted: { type: Number },
  strikeOff: { type: Boolean, default: false },
  ppSample: { type: Boolean, default: false },
});

module.exports = mongoose.model("Team", TeamSchema);
