const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();

const app = express();

// OFFICIAL MIDDLEWARES

// Middleware for parsing JSON
app.use(express.json());
// Use CORS middleware
app.use(cors());

// Connect to MongoDB
connectDB();

//   Routes
const purchaseOrdersRouter = require("./routes/purchaseOrders");
app.use("/shakilprint/purchaseorders", purchaseOrdersRouter);

const userRoutes = require("./routes/auth");
app.use("/shakilprint/users", userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
