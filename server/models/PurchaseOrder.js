const mongoose = require("mongoose");

const PurchaseOrderSchema = new mongoose.Schema({
  purchaseOrderNumber: { type: String, required: true },
  unit: { type: String },
  emailDate: { type: String },
  teams: [
    {
      teamName: { type: String },
      bodyColor: { type: String },
      artworkColors: [{ type: String }],
      quantityIn: { type: Number },
      quantityOut: { type: Number },
      actualQuantity: { type: Number },
    },
  ],
  items: [
    {
      name: { type: String },
      value: { type: String },
    },
  ],
  strikeOff: { type: Boolean, default: false },
  ppSample: { type: Boolean, default: false },
  requiredQuantity: { type: Number },
  purchaseOrderQuantity: { type: Number },
  quantityForPrint: { type: Number },
  quantityPrinted: { type: Number },
  clientPurchaseOrderNumber: { type: String },
  shipmentDate: { type: String },
  quantityForBilling: { type: Number },
  rate: { type: Number },
  invoiceNumber: { type: String },
  lastModified: { type: String, default: Date.now },
});

// Ensure the correct export
module.exports = mongoose.model(
  "PurchaseOrder",
  PurchaseOrderSchema,
  "purchaseorders"
);
