const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:5173", // Your frontend URL
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type",
};

// Use CORS middleware
app.use(cors(corsOptions));

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Routes
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
