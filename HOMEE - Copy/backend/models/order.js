//order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderTrackingID: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  distance: { type: Number, required: true },
  concerns: { type: String, required: false }
});

module.exports = mongoose.model('Order', orderSchema);
