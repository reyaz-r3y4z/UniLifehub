const express = require('express');
const Buddy = require('../models/Buddy');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const buddy = new Buddy({
    ...req.body,
    user: req.user._id
  });

  try {
    await buddy.save();
    res.status(201).send(buddy);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const buddies = await Buddy.find().populate('user', 'username');
    res.send(buddies);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;