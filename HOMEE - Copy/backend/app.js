require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const feedbackRoutes = require("./routes/dfeedbackroute");
const deliveryRoutes = require("./routes/deliveryroutes");
const orderRoutes = require("./routes/orderroutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Add basic route for testing server
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Routes
app.use("/api/dfeedbacks", feedbackRoutes);
app.use('/api/order-tracking', orderRoutes);
app.use('/api/deliveries', deliveryRoutes);

// Additional error handling for unhandled routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// MongoDB Connection with improved error handling
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://dasuniuthpala2002:mBcoj9vTzxjsVuGm@cluster0.y6utk.mongodb.net/feedbackDB")
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server after successful DB connection
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    // Exit the process if the database connection fails
    process.exit(1);
  });