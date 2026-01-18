import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
    navigate(path);
  };

  return (
    <nav style={{
      backgroundColor: "#006400",
      padding: "15px 20px",
      borderBottom: "2px solid #90EE90",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          onClick={() => handleNavigation("/home")}
          style={{ 
            backgroundColor: "transparent", 
            color: "white", 
            textDecoration: "none", 
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            padding: "0"
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            console.log("Orders button clicked");
            handleNavigation("/orders");
          }}
          style={{ 
            backgroundColor: "transparent", 
            color: "white", 
            textDecoration: "none", 
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            padding: "0"
          }}
        >
          Orders
        </button>
        <button
          onClick={() => handleNavigation("/deliveries")}
          style={{ 
            backgroundColor: "transparent", 
            color: "white", 
            textDecoration: "none", 
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            padding: "0"
          }}
        >
          Deliveries
        </button>
        <button
          onClick={() => handleNavigation("/deliveries-table")}
          style={{ 
            backgroundColor: "transparent", 
            color: "white", 
            textDecoration: "none", 
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            padding: "0"
          }}
        >
          Delivery Table
        </button>
        <button
          onClick={() => handleNavigation("/delivery-report")}
          style={{ 
            backgroundColor: "transparent", 
            color: "white", 
            textDecoration: "none", 
            fontSize: "18px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            padding: "0"
          }}
        >
          Delivery Report
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 