import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLeaf, FaTruck, FaAward, FaHeart, FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import '../styles/homepage.css';
import heroImage from '../components/images/h1.jpg';
import teaImage from '../components/images/btea.jpg';
import featureImg1 from '../components/images/about1.jpg';
import featureImg2 from '../components/images/about2.jpg';
import featureImg3 from '../components/images/about3.jpg';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <FaLeaf />,
      title: "Premium Quality",
      description: "Sourced from the finest plantations in Sri Lanka with exceptional taste and aroma."
    },
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service ensuring your tea arrives fresh and on time."
    },
    {
      icon: <FaAward />,
      title: "Award Winning",
      description: "Recognized globally for excellence and quality in tea production and delivery."
    }
  ];

  const products = [
    {
      name: "Black Tea",
      image: featureImg1,
      description: "Bold and rich flavor with perfect brewing"
    },
    {
      name: "Green Tea",
      image: featureImg2,
      description: "Fresh and light with natural health benefits"
    },
    {
      name: "Premium Blend",
      image: featureImg3,
      description: "Unique blend of finest tea leaves"
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Premium Tea<br />
              <span className="highlight">Delivered Fresh</span>
            </h1>
            <p className="hero-subtitle">
              Experience the finest Sri Lankan tea with expert delivery service
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => navigate("/teas")}>
                <FaLeaf /> Explore Our Teas
              </button>
              <button className="btn btn-secondary" onClick={() => navigate("/orders")}>
                <FaShoppingBag /> Place Delivery
              </button>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>50K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Fresh Guarantee</p>
            </div>
            <div className="stat">
              <h3>24/7</h3>
              <p>Support Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-header">
          <h2>Why Choose Browns Tea?</h2>
          <p>Excellence in every cup, reliability in every delivery</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`feature-card ${activeFeature === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Showcase */}
      <section className="products-showcase">
        <div className="showcase-header">
          <h2>Our Tea Collections</h2>
          <p>Carefully selected varieties for every palate</p>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-overlay">
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button 
                  className="add-cart-btn"
                  onClick={() => navigate("/orders")}
                >
                  Add to Cart <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready for Your Tea Journey?</h2>
          <p>Get your premium tea delivered to your doorstep today</p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large" onClick={() => navigate("/orders")}>
              Order Now
            </button>
            <button className="btn btn-outline btn-large" onClick={() => navigate("/about")}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-card">
            <h3>1000+</h3>
            <p>Daily Deliveries</p>
          </div>
          <div className="stats-card">
            <h3>25+</h3>
            <p>Tea Varieties</p>
          </div>
          <div className="stats-card">
            <h3>98%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stats-card">
            <h3>5</h3>
            <p>Years Excellence</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get exclusive deals and tea recommendations delivered to your inbox</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 