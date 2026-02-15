const router = require('express').Router();
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');


// ADD transaction
router.post('/', auth, async (req, res) => {

  const tx = new Transaction({
    ...req.body,
    userId: req.user
  });

  await tx.save();
  res.json(tx);
});


// GET transactions (only logged user)
router.get('/', auth, async (req, res) => {

  const tx = await Transaction.find({
    userId: req.user
  });

  res.json(tx);
});


// UPDATE transaction
router.put('/:id', auth, async (req, res) => {

  const tx = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(tx);
});


// DELETE transaction
router.delete('/:id', auth, async (req, res) => {

  await Transaction.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
