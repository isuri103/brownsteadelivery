import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBoxOpen, FaWarehouse, FaMapMarkerAlt, FaTruck, FaCommentDots, FaQuestionCircle } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ isOpen, closeSidebar }) => {
  const navigate = useNavigate();

  const handleDeliveryClick = (e) => {
    e.preventDefault();
    closeSidebar();
    navigate('/');
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={closeSidebar}>×</button>
      <h3>Admin Menu</h3>
      <ul className="sidebar-menu">
        <li>
          <Link to="/inventory/products" onClick={closeSidebar}>
            <FaBoxOpen className="menu-icon" /> Product Inventory
          </Link>
        </li>
        <li>
          <Link to="/inventory/wholesale" onClick={closeSidebar}>
            <FaWarehouse className="menu-icon" /> Wholesale Inventory
          </Link>
        </li>
        <li>
          <Link to="/locations" onClick={closeSidebar}>
            <FaMapMarkerAlt className="menu-icon" /> Location
          </Link>
        </li>
        <li>
          <a href="/" onClick={handleDeliveryClick}>
            <FaTruck className="menu-icon" /> Delivery Management
          </a>
        </li>
        <li>
          <Link to="/feedback-page" onClick={closeSidebar}>
            <FaCommentDots className="menu-icon" /> Feedback
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
