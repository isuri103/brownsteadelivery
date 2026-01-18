//deliveryroutes.js
const express = require("express");
const router = express.Router();
const deliveryController = require("../controller/deliverycontroller");


// Define routes
router.post("/", deliveryController.createDelivery);
router.get("/", deliveryController.getAllDeliveries);

router.get("/report", (req, res, next) => {
  console.log("Request received for /report:", req.params);  // Add this logging
  next();
}, deliveryController.generateReport);


router.get("/:id", deliveryController.getDeliveryById);
router.put("/:id", deliveryController.updateDelivery);
router.delete("/:id", deliveryController.deleteDelivery);

router.get("/report", (req, res, next) => {
  console.log("Request received for /report:", req.params);  // Add this logging
  next();
}, deliveryController.generateReport);


module.exports = router;



































/*//deliveryroutes.js
const express = require('express');
const router = express.Router();
const Delivery = require('../models/delivery');

// Calculate suggested delivery date based on distance
const calculateSuggestedDeliveryDate = (distance) => {
  const today = new Date();
  const suggestedDate = new Date(today);
  if (distance > 5) {
    suggestedDate.setDate(today.getDate() + 5); // Adds 5 days if distance > 5 km
  } else {
    suggestedDate.setDate(today.getDate() + 2); // Adds 2 days if distance <= 5 km
  }
  return suggestedDate;
};

// Create a new delivery record
router.post('/create', async (req, res) => {
  try {
    const { email, phoneNumber, distance } = req.body;

    const suggestedDeliveredDate = calculateSuggestedDeliveryDate(distance);

    const newDelivery = new Delivery({
      orderTrackingID: Math.random().toString(36).substring(2, 15), // Random ID
      email,
      phoneNumber,
      distance,
      suggestedDeliveredDate,
    });

    await newDelivery.save();
    res.status(201).json(newDelivery);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error creating delivery details' });
  }
});

// Read all delivery records
router.get('/', async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching delivery records' });
  }
});

// Update a delivery record
router.put('/:id', async (req, res) => {
  try {
    const { vehicleNo } = req.body;
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      { vehicleNo },
      { new: true } // Return updated document
    );
    res.json(updatedDelivery);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating delivery details' });
  }
});

// Delete a delivery record
router.delete('/:id', async (req, res) => {
  try {
    const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
    res.json({ message: 'Delivery details deleted', deletedDelivery });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error deleting delivery details' });
  }
});

module.exports = router;*/
