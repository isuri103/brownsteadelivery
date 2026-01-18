import React, { useState } from 'react';
import './LocationPage.css';

const LocationPage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      id: 1,
      name: "Browns Tea Colombo Flagship Store",
      type: "Flagship Store",
      address: "145 Galle Road, Colombo 03, Sri Lanka",
      phone: "+94 11 234 5678",
      email: "colombo@brownstea.lk",
      hours: "Monday - Saturday: 9:00 AM - 8:00 PM, Sunday: 10:00 AM - 6:00 PM",
      mapCoords: { lat: 6.9271, lng: 79.8612 },
      features: ["Tea Tasting", "Gift Shop", "Café", "Parking Available"]
    },
    {
      id: 2,
      name: "Browns Tea Kandy Store",
      type: "Retail Store",
      address: "89 Temple Street, Kandy, Sri Lanka",
      phone: "+94 81 222 3456",
      email: "kandy@brownstea.lk",
      hours: "Monday - Saturday: 9:00 AM - 7:00 PM, Sunday: 10:00 AM - 5:00 PM",
      mapCoords: { lat: 7.2906, lng: 80.6337 },
      features: ["Tea Tasting", "Gift Shop", "Free Samples"]
    },
    {
      id: 3,
      name: "Browns Tea Galle Store",
      type: "Retail Store",
      address: "23 Fort Road, Galle Fort, Galle, Sri Lanka",
      phone: "+94 91 222 7890",
      email: "galle@brownstea.lk",
      hours: "Monday - Saturday: 9:00 AM - 7:00 PM, Sunday: 10:00 AM - 5:00 PM",
      mapCoords: { lat: 6.0535, lng: 80.2210 },
      features: ["Gift Shop", "Historic Location", "Online Order Pickup"]
    },
    {
      id: 4,
      name: "Browns Tea Factory & Visitor Center",
      type: "Factory & Experience Center",
      address: "Nuwara Eliya Road, Hatton, Sri Lanka",
      phone: "+94 51 222 4567",
      email: "factory@brownstea.lk",
      hours: "Monday - Friday: 8:00 AM - 5:00 PM, Closed on Weekends",
      mapCoords: { lat: 6.8932, lng: 80.5956 },
      features: ["Factory Tours", "Tea Museum", "Plantation Visits", "Tea Processing Demos"]
    },
    {
      id: 5,
      name: "Browns Tea Online Hub",
      type: "Distribution Center",
      address: "567 Industrial Zone, Kaduwela, Sri Lanka",
      phone: "+94 11 345 6789",
      email: "online@brownstea.lk",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 2:00 PM",
      mapCoords: { lat: 6.9331, lng: 79.9826 },
      features: ["Online Orders", "Bulk Orders", "Express Delivery", "Corporate Orders"]
    }
  ];

  return (
    <div className="location-container">
      {/* Hero Section */}
      <div className="location-hero">
        <h1>Our Locations</h1>
        <p>Visit us at any of our stores or experience centers across Sri Lanka</p>
      </div>

      {/* Locations Grid */}
      <section className="locations-section">
        <div className="locations-intro">
          <h2>Find Us Near You</h2>
          <p>Discover our stores, factory tours, and distribution centers</p>
        </div>

        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <div className="location-type-badge">{location.type}</div>
              
              <h3 className="location-name">{location.name}</h3>
              
              <div className="location-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span className="detail-text">{location.address}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">📞</span>
                  <span className="detail-text">{location.phone}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <span className="detail-text">{location.email}</span>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">🕒</span>
                  <span className="detail-text">{location.hours}</span>
                </div>
              </div>

              <div className="location-features">
                <h4>Available Services:</h4>
                <div className="features-list">
                  {location.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      ✓ {feature}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="view-map-btn"
                onClick={() => setSelectedLocation(location)}
              >
                View on Map
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p>Hotline: +94 11 234 5678</p>
            <p>Available: Mon-Sat 9AM-8PM</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email Us</h3>
            <p>info@brownstea.lk</p>
            <p>Response within 24 hours</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🚚</div>
            <h3>Online Orders</h3>
            <p>Free delivery on orders over Rs. 5000</p>
            <p>Island-wide shipping</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🏭</div>
            <h3>Factory Tours</h3>
            <p>Book your plantation visit</p>
            <p>Experience tea processing</p>
          </div>
        </div>
      </section>

      {/* Map Modal */}
      {selectedLocation && (
        <div className="map-modal-overlay" onClick={() => setSelectedLocation(null)}>
          <div className="map-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedLocation(null)}>
              ×
            </button>
            <h3>{selectedLocation.name}</h3>
            <p className="modal-address">{selectedLocation.address}</p>
            
            {/* Embedded Google Maps */}
            <div className="map-container">
              <iframe
                title={`Map of ${selectedLocation.name}`}
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps?q=${selectedLocation.mapCoords.lat},${selectedLocation.mapCoords.lng}&output=embed`}
                allowFullScreen
              ></iframe>
            </div>

            <div className="modal-actions">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.mapCoords.lat},${selectedLocation.mapCoords.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="directions-btn"
              >
                Get Directions
              </a>
              <a
                href={`tel:${selectedLocation.phone}`}
                className="call-btn"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="location-cta">
        <h2>Can't Visit in Person?</h2>
        <p>Shop online and get your favorite Browns Tea delivered to your doorstep</p>
        <button className="shop-online-btn">Shop Online Now</button>
      </section>
    </div>
  );
};

export default LocationPage;
