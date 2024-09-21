const mongoose = require('mongoose');

const BuddySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: String, required: true }
});

module.exports = mongoose.model('Buddy', BuddySchema);