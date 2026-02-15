const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


// ===== MongoDB Connection =====
console.log("Mongo URI =", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("FULL ERROR BELOW:");
    console.error(err);
  });

// ===== Middlewares =====
app.use(cors());
app.use(express.json());


// ===== Routes =====
app.use('/api/auth', require('./routes/auth'));
app.use('/api/transactions', require('./routes/transactions'));


// ===== Server Start =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
