const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
  const { username, password, role } = req.body;

  // Validate request body
  if (!username || !password || !role) {
    return res
      .status(400)
      .json({ message: "Username, password, and role are required" });
  }

  const user = new User({ username, password, role });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    // More detailed error handling can be added here
    res.status(400).json({ message: err.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check password
    const isMatch = (await password) === user.password;
    if (!isMatch) return res.status(400).json({ msg: "Invalid Password" });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      user: { id: user._id, username: user.username, role: user.role },
      token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a User by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
