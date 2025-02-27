const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  population: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Community', CommunitySchema);