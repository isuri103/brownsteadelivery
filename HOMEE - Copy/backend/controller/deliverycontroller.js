//deliverycontroller.js
const Delivery = require("../models/delivery");
const nodemailer = require("nodemailer");

// Create a new delivery record
exports.createDelivery = async (req, res) => {
  try {
    const { orderTrackingID, email, phoneNumber, distance, vehicleNo } = req.body;

    // Calculate suggested delivered date (5 days after for distances > 5km)
    const presentDate = new Date();
    const suggestedDeliveredDate = distance > 5
      ? new Date(presentDate.setDate(presentDate.getDate() + 5))
      : presentDate;

    const newDelivery = new Delivery({
      orderTrackingID,
      email,
      phoneNumber,
      distance,
      suggestedDeliveredDate,
      vehicleNo,
    });


    await newDelivery.save();

     // Send email with delivery details
     const transporter = nodemailer.createTransport({
      service: "gmail", // Use the email service you prefer (Gmail used here as an example)
      auth: {
        user: process.env.EMAIL_USER,  // Your email address
        pass: process.env.EMAIL_PASS,  // Your email password (or use an app-specific password)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,  // Sender's email address
      to: email,  // Recipient's email address (from the request body)
      subject: "Delivery Details for Your Order",  // Email subject
      html: `<h2>Delivery Details</h2>
             <p>Order Tracking ID: ${orderTrackingID}</p>
             <p>Email: ${email}</p>
             <p>Phone Number: ${phoneNumber}</p>
             <p>Distance: ${distance} km</p>
             <p>Suggested Delivery Date: ${suggestedDeliveredDate.toDateString()}</p>
             <p>Vehicle Number: ${vehicleNo || "N/A"}</p>`,  // The email body in HTML format
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Email sent: " + info.response);
    });


    res.status(201).json({ message: "Delivery record created successfully!", newDelivery });
  } catch (error) {
    res.status(500).json({ message: "Error creating delivery record", error });
  }
};

// Get all delivery records
exports.getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching deliveries", error });
  }
};

// Get a single delivery by ID
exports.getDeliveryById = async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id);
    if (!delivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }
    res.status(200).json(delivery);
  } catch (error) {
    res.status(500).json({ message: "Error fetching delivery", error });
  }
};

// Update delivery record (e.g., update vehicle number)
exports.updateDelivery = async (req, res) => {
  try {
    const updatedDelivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedDelivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }

    res.status(200).json({ message: "Delivery updated successfully", updatedDelivery });
  } catch (error) {
    res.status(500).json({ message: "Error updating delivery", error });
  }
};

// Delete a delivery record
exports.deleteDelivery = async (req, res) => {
  try {
    const deletedDelivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!deletedDelivery) {
      return res.status(404).json({ message: "Delivery not found" });
    }
    res.status(200).json({ message: "Delivery deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting delivery", error });
  }
};



// Generate a report of all deliveries
exports.generateReport = async (req, res) => {
  try {
    console.log("Fetching all deliveries...");

    // Fetch all deliveries without using _id in the query
    const deliveries = await Delivery.find();

    if (!deliveries || deliveries.length === 0) {
      return res.status(404).json({ message: "No deliveries found for the report" });
    }

    const reportData = deliveries.map(delivery => ({
      orderTrackingID: delivery.orderTrackingID,
      email: delivery.email,
      phoneNumber: delivery.phoneNumber,
      distance: delivery.distance,
      vehicleNo: delivery.vehicleNo || 'N/A',
    }));

    res.status(200).json({
      message: "Report generated successfully!",
      deliveries: reportData
    });
  } catch (error) {
    console.error("Error generating report:", error);
    res.status(500).json({ message: "Error generating report", error });
  }
}; 