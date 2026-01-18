import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orderTrackingID: "",
    email: "",
    phoneNumber: "",
    distance: "",
    vehicleNo: "",
    suggestedDeliveredDate: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDelivery = async () => {
      try {
        setLoading(true);
        console.log(`Fetching delivery with ID: ${id}`);
        const response = await axios.get(`http://localhost:5000/api/deliveries/${id}`);
        console.log("Fetched delivery data:", response.data);
        
        // Format the date to YYYY-MM-DD for the date input
        const deliveryData = response.data;
        if (deliveryData.suggestedDeliveredDate) {
          const date = new Date(deliveryData.suggestedDeliveredDate);
          deliveryData.suggestedDeliveredDate = date.toISOString().split('T')[0];
        }
        
        setFormData(deliveryData);
        setError(null);
      } catch (error) {
        console.error("Error fetching delivery:", error);
        setError("Failed to load delivery data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchDelivery();
  }, [id]);

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
      console.log("Updating delivery with data:", formData);
      await axios.put(`http://localhost:5000/api/deliveries/${id}`, formData);
      alert("Delivery updated successfully!");
      navigate("/deliveries-table");
    } catch (error) {
      console.error("Error updating delivery:", error);
      if (error.response) {
        alert(`Failed to update delivery: ${error.response.data.message || 'Server error'}`);
      } else if (error.request) {
        alert("Failed to connect to the server. Please check your connection.");
      } else {
        alert("An error occurred while updating the delivery. Please try again.");
      }
    }
  };

  if (loading) {
    return <div style={{ textAlign: "center", padding: "20px" }}>Loading delivery data...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", padding: "20px", color: "red" }}>{error}</div>;
  }

  return (
    <div style={{ 
      padding: "20px", 
      maxWidth: "600px", 
      margin: "0 auto",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ color: "#006400", marginBottom: "20px", textAlign: "center" }}>Update Delivery</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>Order ID</label>
          <input
            type="text"
            name="orderTrackingID"
            value={formData.orderTrackingID}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>Phone</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>Distance (km)</label>
          <input
            type="number"
            name="distance"
            value={formData.distance}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>Vehicle No</label>
          <input
            type="text"
            name="vehicleNo"
            value={formData.vehicleNo}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div>
          <label style={{ display: "block", marginBottom: "5px", color: "#333", fontWeight: "500" }}>Suggested Delivery Date</label>
          <input
            type="date"
            name="suggestedDeliveredDate"
            value={formData.suggestedDeliveredDate}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              flex: 1
            }}
          >
            Update Delivery
          </button>
          <button
            type="button"
            onClick={() => navigate("/deliveries-table")}
            style={{
              backgroundColor: "#6c757d",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              flex: 1
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePage; 