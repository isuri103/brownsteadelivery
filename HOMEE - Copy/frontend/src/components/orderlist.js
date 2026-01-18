//orderlist.js
import React, { useEffect, useState } from "react";
import { getAllOrders } from "../api";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders()
      .then((res) => {
        if (res && res.data) {
          setOrders(res.data);
        } else {
          console.error("Invalid API response:", res);
          setOrders([]); // Set default value to avoid errors
        }
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setOrders([]); // Ensure no crash if API fails
      });
  }, []);
  

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.orderTrackingID}>
            {order.email} - {order.phoneNumber} - {order.distance} km
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
