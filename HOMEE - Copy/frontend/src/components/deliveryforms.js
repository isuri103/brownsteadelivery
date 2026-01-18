//deliveryforms.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DeliveryForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails || {};
 
  const [formData, setFormData] = useState({
    orderTrackingID: orderDetails.orderTrackingID || "",
    customerName: orderDetails.customerName || "",
    phoneNumber: orderDetails.phoneNumber || "",
    email: orderDetails.email || "",
    distance: orderDetails.distance || "",
    vehicleNo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isApiConnected, setIsApiConnected] = useState(true);

  // Check API connection on mount
  useEffect(() => {
    const checkApiConnection = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/deliveries');
        setIsApiConnected(response.ok);
      } catch (error) {
        console.error('API connection check failed:', error);
        setIsApiConnected(false);
      }
    };
    checkApiConnection();
  }, []);

  // Function to create delivery
  const createDelivery = async (deliveryData) => {
    try {
      const response = await fetch('http://localhost:5000/api/deliveries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(deliveryData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create delivery');
      }

      return await response.json();
    } catch (error) {
      console.error('Error in createDelivery:', error);
      throw error;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    
    try {
      setIsSubmitting(true);
      console.log("Form submission started");
      console.log("Current form data:", formData);

      // Validate required fields
      if (!formData.orderTrackingID || !formData.email || !formData.phoneNumber || !formData.distance) {
        console.log("Validation failed - missing required fields");
        alert("Please fill in all required fields (Order ID, Email, Phone, and Distance)");
        setIsSubmitting(false);
        return;
      }

      // Create a clean object with only the fields the backend expects
      const deliveryData = {
        orderTrackingID: formData.orderTrackingID.trim(),
        email: formData.email.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        distance: String(formData.distance),
        vehicleNo: formData.vehicleNo ? formData.vehicleNo.trim() : 'Not assigned'
      };

      console.log("Prepared delivery data:", deliveryData);

      // Try to create the delivery
      try {
        const response = await createDelivery(deliveryData);
        console.log("Delivery created successfully:", response);
        
        // Reset form
        setFormData({
          orderTrackingID: '',
          customerName: '',
          phoneNumber: '',
          email: '',
          distance: '',
          vehicleNo: ''
        });
        
        alert("Delivery created successfully!");
        navigate("/deliveries-table");
      } catch (apiError) {
        console.error("API error:", apiError);
        
        // Check for specific error types
        if (apiError.message.includes("Network error")) {
          alert("Cannot connect to the server. Please check if the backend is running at http://localhost:5000");
        } else if (apiError.message.includes("timeout")) {
          alert("Request timed out. The server is taking too long to respond. Please try again.");
        } else if (apiError.message.includes("Failed to create delivery")) {
          alert("Server error: " + apiError.message);
        } else {
          alert("Error creating delivery: " + apiError.message);
        }
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      console.error("Error details:", {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      alert("An unexpected error occurred: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      backgroundImage: "url('/teacup.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "1.5rem",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "400px",
        margin: "20px auto 0",
        marginTop: "20px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#333", fontSize: "1.5rem" }}>Delivery Information</h2>
        {!isApiConnected && (
          <div style={{ 
            padding: "10px", 
            backgroundColor: "#fff3cd", 
            color: "#856404", 
            borderRadius: "5px", 
            marginBottom: "1rem",
            textAlign: "center"
          }}>
            Warning: Cannot connect to the server. Please check if the backend is running.
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
          <input 
            name="orderTrackingID" 
            placeholder="Order ID" 
            value={formData.orderTrackingID}
            onChange={handleChange} 
            required 
            style={{
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "0.9rem"
            }}
          />
          <input 
            name="customerName" 
            placeholder="Customer Name" 
            value={formData.customerName}
            onChange={handleChange} 
            style={{
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "0.9rem"
            }}
          />
          <input 
            name="phoneNumber" 
            placeholder="Phone" 
            value={formData.phoneNumber}
            onChange={handleChange} 
            required 
            style={{
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "0.9rem"
            }}
          />
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange} 
            required 
            style={{
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "0.9rem"
            }}
          />
          <input 
            name="distance" 
            type="number" 
            placeholder="Distance (km)" 
            value={formData.distance}
            onChange={handleChange} 
            required 
            style={{
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "0.9rem"
            }}
          />
          <input 
            name="vehicleNo" 
            placeholder="Vehicle No (Optional)" 
            value={formData.vehicleNo}
            onChange={handleChange} 
            style={{
              padding: "0.6rem",
              borderRadius: "5px",
              border: "1px solid #ddd",
              fontSize: "0.9rem"
            }}
          />
          <div style={{ 
            padding: "0.6rem", 
            backgroundColor: "#f8f9fa", 
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "0.9rem"
          }}>
            <strong>Suggested Delivery Date: </strong>
            {formData.distance ? (
              Number(formData.distance) > 5 
                ? new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString()
                : new Date().toLocaleDateString()
            ) : "Enter distance to calculate"}
          </div>
          <button 
            type="submit"
            disabled={!isApiConnected || isSubmitting}
            style={{
              padding: "0.6rem",
              backgroundColor: isApiConnected ? "#4CAF50" : "#cccccc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "0.9rem",
              cursor: isApiConnected ? "pointer" : "not-allowed",
              transition: "background-color 0.3s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = isApiConnected ? "#45a049" : "#cccccc"}
            onMouseOut={(e) => e.target.style.backgroundColor = isApiConnected ? "#4CAF50" : "#cccccc"}
          >
            {isSubmitting ? "Creating..." : "Create Delivery"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeliveryForm;
