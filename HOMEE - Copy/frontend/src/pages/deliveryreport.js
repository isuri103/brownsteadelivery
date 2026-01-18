import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useNavigate } from 'react-router-dom';

const DeliveryReport = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/deliveries/report');
        setDeliveries(response.data.deliveries);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch report:', err.response || err);
        setError('Failed to fetch report');
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

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

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    // Set Title
    doc.text("Delivery Report", 14, 10);

    // Define Table Columns & Data
    const tableColumn = ["Order Tracking ID", "Email", "Phone", "Distance (km)", "Vehicle No"];
    const tableRows = deliveries.map(delivery => [
      delivery.orderTrackingID,
      delivery.email,
      delivery.phoneNumber,
      delivery.distance,
      delivery.vehicleNo || "Not assigned"
    ]);

    // Generate PDF Table
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    // Save PDF
    doc.save("Delivery_Report.pdf");
  };

  if (loading) return <p>Loading report...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        marginBottom: "20px"
      }}>
        <h2 style={{ color: "#006400", margin: 0 }}>Delivery Report</h2>
        <div>
          <button 
            onClick={downloadPDF}
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
            Download PDF
          </button>
          <button
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
            Back to Delivery Table
          </button>
        </div>
      </div>
      
      <div style={{ overflowX: "auto" }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          marginTop: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
        }}>
          <thead>
            <tr style={{ backgroundColor: "#006400", color: "white" }}>
              <th style={{ padding: "12px", textAlign: "left" }}>Order Tracking ID</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Phone Number</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Distance (km)</th>
              <th style={{ padding: "12px", textAlign: "left" }}>Vehicle No</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr key={delivery.orderTrackingID} style={{ 
                borderBottom: "1px solid #ddd",
                backgroundColor: "white"
              }}>
                <td style={{ padding: "12px" }}>{delivery.orderTrackingID}</td>
                <td style={{ padding: "12px" }}>{delivery.email}</td>
                <td style={{ padding: "12px" }}>{delivery.phoneNumber}</td>
                <td style={{ padding: "12px" }}>{delivery.distance}</td>
                <td style={{ padding: "12px" }}>{delivery.vehicleNo || "Not assigned"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryReport;
