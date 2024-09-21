const express = require('express');
const Resource = require('../models/Resource');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const resources = await Resource.find();
    res.send(resources);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;