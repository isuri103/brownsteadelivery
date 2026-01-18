//orderform.js
import React, { useState } from "react";
import { createOrder } from "../api";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    orderTrackingID: "",
    email: "",
    phoneNumber: "",
    distance: "",
    concerns: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createOrder(formData);
    alert("Order Created!");
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      padding: "1.5rem",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#333", fontSize: "1.5rem" }}>Order Information</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <input 
          name="orderTrackingID" 
          placeholder="Order ID" 
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
          name="phoneNumber" 
          placeholder="Phone" 
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
          name="concerns" 
          placeholder="Concerns (optional)" 
          onChange={handleChange}
          style={{
            padding: "0.6rem",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "0.9rem"
          }}
        />
        <button 
          type="submit"
          style={{
            padding: "0.6rem",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "background-color 0.3s"
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
        >
          Create Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
