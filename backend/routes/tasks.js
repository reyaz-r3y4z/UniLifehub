const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  const task = new Task({
    ...req.body,
    user: req.user._id
  });

  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.send(tasks);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;