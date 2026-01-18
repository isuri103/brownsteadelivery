import React, { useState } from 'react';
import './OurTeas.css';
import btea from '../components/images/btea.jpg';
import gtea from '../components/images/gtea.jpg';
import ctea from '../components/images/ctea.jpg';

const OurTeas = () => {
  const [selectedTea, setSelectedTea] = useState(null);

  const teas = [
    {
      id: 1,
      name: "Black Tea",
      image: btea,
      category: "Full-Bodied",
      description: "Rich and robust",
      details: "Our premium Black Tea is carefully selected from the finest tea gardens. Known for its bold flavor and dark color, Black Tea is perfect for a morning cup or afternoon pick-me-up. Rich in antioxidants and naturally energizing, our Black Tea blend offers a smooth, full-bodied taste with subtle undertones of honey and spice.",
      origin: "Sri Lanka",
      flavor: "Bold, Full-bodied, Slightly Sweet",
      benefits: "High in antioxidants, Natural energy boost, Supports heart health",
      brewing: "3-5 minutes at 212°F (100°C)"
    },
    {
      id: 2,
      name: "Green Tea",
      image: gtea,
      category: "Light & Fresh",
      description: "Refreshing and delicate",
      details: "Our Green Tea is produced using traditional methods that preserve the natural antioxidants and fresh flavor. With its light, grassy notes and subtle sweetness, Green Tea is perfect for those seeking a healthier alternative. Enjoy it hot or cold for a refreshing beverage that supports wellness.",
      origin: "Sri Lanka",
      flavor: "Light, Grassy, Fresh with subtle sweetness",
      benefits: "Rich in antioxidants, Aids digestion, Boosts mental clarity",
      brewing: "1-3 minutes at 160-180°F (70-80°C)"
    },
    {
      id: 3,
      name: "Ceylon Tea",
      image: ctea,
      category: "Premium Blend",
      description: "The finest Ceylon selection",
      details: "Our signature Ceylon Tea is a masterful blend of premium teas from different altitudes across Sri Lanka's finest gardens. This exquisite blend captures the essence of Ceylon tea—bright, vibrant, and complex. Each cup tells the story of our plantations and our commitment to quality.",
      origin: "Sri Lanka - Multiple Estates",
      flavor: "Bright, Complex, Hints of citrus and spice",
      benefits: "Full antioxidant profile, Energy and focus, Digestive support",
      brewing: "3-5 minutes at 200-212°F (93-100°C)"
    }
  ];

  return (
    <div className="our-teas-container">
      {/* Header Section */}
      <div className="teas-header">
        <div className="teas-header-content">
          <h1>Our Premium Tea Collection</h1>
          <p>Discover the finest teas handpicked from our sustainable plantations</p>
        </div>
      </div>

      {/* Tea Selection Grid */}
      <section className="teas-grid-section">
        <div className="teas-intro">
          <h2>Browse Our Varieties</h2>
          <p>Each tea is carefully cultivated and processed to bring you the perfect cup</p>
        </div>

        <div className="teas-grid">
          {teas.map((tea) => (
            <div key={tea.id} className="tea-card">
              <div className="tea-image-wrapper">
                <img src={tea.image} alt={tea.name} className="tea-image" />
                <span className="tea-category-badge">{tea.category}</span>
              </div>

              <div className="tea-card-content">
                <h3 className="tea-name">{tea.name}</h3>
                <p className="tea-description">{tea.description}</p>
                <p className="tea-short-details">{tea.details.substring(0, 100)}...</p>

                <button
                  className="view-details-btn"
                  onClick={() => setSelectedTea(tea.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tea Details Modal */}
      {selectedTea && (
        <div className="tea-modal-overlay" onClick={() => setSelectedTea(null)}>
          <div className="tea-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedTea(null)}>×</button>

            {teas.map((tea) =>
              tea.id === selectedTea ? (
                <div key={tea.id} className="tea-modal-content">
                  <div className="modal-image">
                    <img src={tea.image} alt={tea.name} />
                  </div>

                  <div className="modal-details">
                    <h2>{tea.name}</h2>
                    <span className="modal-category">{tea.category}</span>

                    <p className="modal-description">{tea.details}</p>

                    <div className="tea-specs">
                      <div className="spec">
                        <h4>Origin</h4>
                        <p>{tea.origin}</p>
                      </div>

                      <div className="spec">
                        <h4>Flavor Profile</h4>
                        <p>{tea.flavor}</p>
                      </div>

                      <div className="spec">
                        <h4>Health Benefits</h4>
                        <p>{tea.benefits}</p>
                      </div>

                      <div className="spec">
                        <h4>Brewing Instructions</h4>
                        <p>{tea.brewing}</p>
                      </div>
                    </div>

                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      )}

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <h2>Why Choose Browns Tea?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">🌱</div>
            <h3>100% Natural</h3>
            <p>No artificial additives or preservatives, just pure tea goodness</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🌍</div>
            <h3>Sustainably Sourced</h3>
            <p>Grown using eco-friendly practices that respect our planet</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">✓</div>
            <h3>Quality Assured</h3>
            <p>Rigorous testing ensures only the finest teas reach your cup</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">🏆</div>
            <h3>Award-Winning</h3>
            <p>Recognized globally for excellence and taste</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeas;