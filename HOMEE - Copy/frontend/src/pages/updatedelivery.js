import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDeliveryById, updateDelivery } from "../api";

import "../styles/updatedelivery.css";

const UpdateDelivery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    orderTrackingID: "",
    email: "",
    phoneNumber: "",
    distance: "",
    vehicleNo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDeliveryById(id);
      setFormData(data);
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDelivery(id, formData);
    alert("Delivery Updated!");
    navigate("/deliveries");
  };

  return (
    <div>
      <h2>Update Delivery</h2>
      <form onSubmit={handleSubmit}>
        <input name="orderTrackingID" value={formData.orderTrackingID} readOnly />
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        <input name="distance" type="number" value={formData.distance} onChange={handleChange} required />
        <input name="vehicleNo" value={formData.vehicleNo} onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateDelivery;
