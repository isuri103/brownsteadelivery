//orderroutes.js
const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router.post('/', async (req, res) => {
  const { orderTrackingID, email, phoneNumber, distance, concerns } = req.body;

  try {
    const newOrder = new Order({
      orderTrackingID,
      email,
      phoneNumber,
      distance,
      concerns
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order tracking data saved successfully!' });
  } catch (error) {
    console.error('Error saving order tracking:', error);
    res.status(500).json({ error: 'Failed to save order tracking data' });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();  // Fetch all orders from the database
    res.status(200).json(orders);  // Return the list of orders
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;
