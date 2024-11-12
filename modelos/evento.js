const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['pickup', 'in-transit', 'delivered', 'warehouse'],
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Event', eventSchema);
