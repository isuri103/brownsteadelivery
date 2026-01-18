//orderpage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orderID: "",
    email: "",
    phone: "",
    distance: "",
    concerns: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Navigate to the deliveries page with order details
    navigate("/deliveries", { 
      state: { 
        orderDetails: {
          orderTrackingID: formData.orderID,
          email: formData.email,
          phoneNumber: formData.phone,
          distance: formData.distance
        }
      }
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: "10px",
      backgroundImage: "url('/shade.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}>
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "15px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
      }}>
        <h2 style={{ 
          color: "#006400", 
          marginBottom: "15px",
          textAlign: "center",
          fontSize: "1.5rem"
        }}>
          Order Management
        </h2>
        
        <form onSubmit={handleSubmit}>
          <h3 style={{ 
            color: "#006400", 
            marginBottom: "15px",
            textAlign: "center",
            fontSize: "1.3rem"
          }}>
            Order Details
          </h3>
          
          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "4px", color: "#006400", fontWeight: "500", fontSize: "0.9rem" }}>
              Order ID
            </label>
            <input
              type="text"
              name="orderID"
              value={formData.orderID}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #006400",
                fontSize: "0.9rem",
                backgroundColor: "white"
              }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "4px", color: "#006400", fontWeight: "500", fontSize: "0.9rem" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #006400",
                fontSize: "0.9rem",
                backgroundColor: "white"
              }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "4px", color: "#006400", fontWeight: "500", fontSize: "0.9rem" }}>
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #006400",
                fontSize: "0.9rem",
                backgroundColor: "white"
              }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "4px", color: "#006400", fontWeight: "500", fontSize: "0.9rem" }}>
              Distance (km)
            </label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #006400",
                fontSize: "0.9rem",
                backgroundColor: "white"
              }}
            />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <label style={{ display: "block", marginBottom: "4px", color: "#006400", fontWeight: "500", fontSize: "0.9rem" }}>
              Concerns
            </label>
            <textarea
              name="concerns"
              value={formData.concerns}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "6px",
                borderRadius: "4px",
                border: "1px solid #006400",
                fontSize: "0.9rem",
                backgroundColor: "white",
                minHeight: "80px"
              }}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              Submit Order
            </button>
            
            <button
              type="button"
              onClick={() => navigate("/deliveries-table")}
              style={{
                backgroundColor: "#006400",
                color: "white",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600"
              }}
            >
              View Delivery Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderPage;
