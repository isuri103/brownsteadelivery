import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';
import './Header.css';
import logo from './images/logo.jpg'; // Corrected path

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <button className="menu-btn" onClick={toggleSidebar} aria-label="Toggle menu">
            <FaBars />
          </button>
          <span className="brand-name">BROWNS TEA</span>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/teas" className="nav-link">Our Teas</Link>
            </li>
            <li className="nav-item">
              <Link to="/plantations" className="nav-link">Plantations</Link>
            </li>
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">Blogs</Link>
            </li>
          </ul>
        </nav>
        
        <div className="header-right">
          <Link to="/cart" className="header-icon cart-icon" aria-label="Shopping cart">
            <FaShoppingCart />
            <span className="icon-label">Cart</span>
          </Link>
          <Link to="/login" className="header-icon login-btn">
            <FaUser />
            <span className="icon-label">Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;