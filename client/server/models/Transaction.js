const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  date: String,
  notes: String,
   userId:String
});

module.exports = mongoose.model('Transaction', transactionSchema);
