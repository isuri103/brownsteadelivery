//deliverytable.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/table.css";

function DeliveryTable() {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDeliveries();
  }, []);

  const fetchDeliveries = async () => {
    try {
      setLoading(true);
      console.log("Fetching deliveries from API...");
      const response = await axios.get("http://localhost:5000/api/deliveries");
      console.log("API response:", response.data);
      setDeliveries(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching deliveries:", error);
      setError("Failed to load delivery data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this delivery?")) {
      try {
        await axios.delete(`http://localhost:3001/api/deliveries/${id}`);
        fetchDeliveries();
        alert("Delivery deleted successfully!");
      } catch (error) {
        console.error("Error deleting delivery:", error);
        alert("Failed to delete delivery. Please try again.");
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  // Format date to a readable format
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div style={{ padding: "10px", marginTop: "5px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
          <h2 style={{ color: "#006400", margin: 0 }}>Delivery Details</h2>
          <button
            onClick={() => navigate("/delivery-report")}
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
            View Report
          </button>
        </div>
        
        {loading ? (
          <div style={{ textAlign: "center", padding: "20px" }}>Loading delivery data...</div>
        ) : error ? (
          <div style={{ textAlign: "center", padding: "20px", color: "red" }}>{error}</div>
        ) : deliveries.length === 0 ? (
          <div style={{ textAlign: "center", padding: "20px" }}>
            No delivery records found. Create a new delivery to see it here.
          </div>
        ) : (
          <table className="styled-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Distance</th>
                <th>Vehicle No</th>
                <th>Suggested Delivery Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveries.map((delivery) => (
                <tr key={delivery._id}>
                  <td>{delivery.orderTrackingID}</td>
                  <td>{delivery.email}</td>
                  <td>{delivery.phoneNumber}</td>
                  <td>{delivery.distance}</td>
                  <td>{delivery.vehicleNo || "Not assigned"}</td>
                  <td>{formatDate(delivery.suggestedDeliveredDate)}</td>
                  <td>
                    <button
                      onClick={() => handleEdit(delivery._id)}
                      style={{
                        backgroundColor: "#4CAF50",
                        color: "white",
                        padding: "6px 12px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        marginRight: "8px"
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(delivery._id)}
                      style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        padding: "6px 12px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DeliveryTable;
