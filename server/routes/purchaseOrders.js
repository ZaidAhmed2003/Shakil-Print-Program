const express = require("express");
const router = express.Router();
const PurchaseOrder = require("../models/PurchaseOrder");

// Get all purchase orders
router.get("/", async (req, res) => {
  try {
    const purchaseOrders = await PurchaseOrder.find();
    res.json(purchaseOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new purchase order
router.post("/", async (req, res) => {
  const purchaseOrder = new PurchaseOrder(req.body);
  try {
    const newPurchaseOrder = await purchaseOrder.save();
    res.status(201).json(newPurchaseOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a purchase order by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPurchaseOrder = await PurchaseOrder.findByIdAndDelete(id);

    if (!deletedPurchaseOrder) {
      return res.status(404).json({ message: "Purchase Order not found" });
    }
    res.status(200).json({ message: "Purchase Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
