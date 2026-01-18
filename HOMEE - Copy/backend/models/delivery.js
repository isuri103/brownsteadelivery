//delivery.js
const mongoose = require('mongoose');

// Define schema for delivery
const deliverySchema = new mongoose.Schema({
  orderTrackingID: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  suggestedDeliveredDate: {
    type: Date,
    required: true,
  },
  vehicleNo: {
    type: String,
  },
});

// Create model
const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
