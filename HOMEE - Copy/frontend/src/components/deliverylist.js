//deliverylist.js
import React, { useEffect, useState } from "react";
import { getAllDeliveries, deleteDelivery } from "../api"; // Import the required functions

// Use getAllDeliveries and deleteDelivery as needed

// Use fetchData or deleteData as needed

const DeliveryList = () => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    getAllDeliveries()
      .then((res) => {
        if (res && res.data) {
          setDeliveries(res.data);
        } else {
          console.error("Invalid response format", res);
          setDeliveries([]); // Ensure deliveries is at least an empty array
        }
      })
      .catch((error) => {
        console.error("Error fetching deliveries:", error);
        setDeliveries([]); // Set default value to prevent errors
      });
  }, []);
  

  const handleDelete = async (id) => {
    await deleteDelivery(id);
    setDeliveries(deliveries.filter((d) => d._id !== id));
  };

  return (
    <div>
      <h2>Deliveries</h2>
      <ul>
        {deliveries.map((delivery) => (
          <li key={delivery._id}>
            {delivery.email} - {delivery.vehicleNo} - {delivery.suggestedDeliveredDate}
            <button onClick={() => handleDelete(delivery._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default DeliveryList;
