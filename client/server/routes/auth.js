const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// REGISTER
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});


// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email
    });

    if (!user || user.password !== req.body.password)
      return res.status(400).json("Invalid credentials");

    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({ token });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
