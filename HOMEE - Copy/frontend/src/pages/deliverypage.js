//deliverypage.js
import React from "react";
import DeliveryForm from "../components/deliveryforms";
import DeliveryList from "../components/deliverylist";
import { useNavigate } from "react-router-dom";
import "../styles/deliverypage.css"; 

const DeliveriesPage = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{
      padding: "20px",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <h1 style={{ color: "#006400", margin: 0 }}>Delivery Management</h1>
        <div>
          <button
            onClick={() => navigate("/deliveries-table")}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              marginRight: "10px"
            }}
          >
            View Delivery Table
          </button>
          <button
            onClick={() => navigate("/delivery-report")}
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
            View Delivery Report
          </button>
        </div>
      </div>
      
      <DeliveryForm />
      <DeliveryList />
    </div>
  );
};

export default DeliveriesPage;
