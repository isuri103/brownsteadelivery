import React from 'react';
import './Plantations.css';
import h1 from '../components/images/h1.jpg';
import h2 from '../components/images/h2.jpg';
import h3 from '../components/images/h3.jpg';

const Plantations = () => {
  const plantations = [
    {
      id: 1,
      name: "High Mountain Estate",
      image: h1,
      altitude: "5,000+ ft",
      area: "8,500 hectares",
      established: "1891",
      description: "Our flagship estate located in the heart of Sri Lanka's central highlands, renowned for producing the finest high-grown Ceylon teas.",
      details: "The High Mountain Estate is our crown jewel, situated at elevations exceeding 5,000 feet. The cooler climate and misty conditions at this altitude produce teas with exceptional complexity and brightness. Our experienced tea masters carefully cultivate and process teas that have won numerous international awards.",
      practices: "Organic cultivation, Water conservation, Shade-grown tea, Biodiversity preservation"
    },
    {
      id: 2,
      name: "Emerald Valley Plantation",
      image: h2,
      altitude: "3,500-4,500 ft",
      area: "6,200 hectares",
      established: "1920",
      description: "A picturesque plantation known for balanced teas with unique flavor characteristics and sustainable farming methods.",
      details: "Nestled in the lush emerald valleys of Sri Lanka, this plantation produces medium-grown teas with distinctive brisk character and copper-golden color. Our commitment to sustainability is evident in every aspect of operations, from soil management to waste reduction.",
      practices: "Sustainable farming, Renewable energy use, Fair trade practices, Community development"
    },
    {
      id: 3,
      name: "Golden Sun Estate",
      image: h3,
      altitude: "2,000-3,000 ft",
      area: "5,800 hectares",
      established: "1905",
      description: "A low-grown tea estate producing bold, full-bodied teas perfect for breakfast blends and strong afternoon brews.",
      details: "Located in the warmer regions of Sri Lanka, the Golden Sun Estate produces robust black teas with deep color and full flavor. The longer growing season and natural sunlight create unique teas that are ideal for traditional tea blends and require no additional flavor enhancement.",
      practices: "Natural pest management, Rainwater harvesting, Traditional processing, Worker welfare programs"
    }
  ];

  const sustainability = [
    {
      icon: "🌱",
      title: "Organic Methods",
      description: "We use natural fertilizers and avoid harmful pesticides, maintaining soil health for generations to come."
    },
    {
      icon: "💧",
      title: "Water Conservation",
      description: "Advanced irrigation systems and rainwater harvesting reduce water consumption while ensuring optimal tea quality."
    },
    {
      icon: "♻️",
      title: "Waste Reduction",
      description: "Processing waste is composted and reused, and we've achieved zero-waste targets in several estates."
    },
    {
      icon: "⚡",
      title: "Renewable Energy",
      description: "Solar panels and biomass power our processing facilities, reducing our carbon footprint significantly."
    },
    {
      icon: "👥",
      title: "Community Care",
      description: "We invest in education, healthcare, and fair wages for our workers and their families."
    },
    {
      icon: "🌍",
      title: "Biodiversity",
      description: "We maintain forest areas and encourage native species to thrive alongside our tea plants."
    }
  ];

  return (
    <div className="plantations-container">
      {/* Hero Section */}
      <div className="plantations-hero">
        <div className="hero-content">
          <h1>Our Tea Plantations</h1>
          <p>Discover the origins of excellence in sustainable tea cultivation</p>
        </div>
      </div>

      {/* About Section */}
      <section className="about-plantations">
        <div className="about-content">
          <h2>Browns Plantations: A Legacy of Excellence</h2>
          <p>
            Browns Plantations represents a unique synergy of three leading Sri Lankan plantation companies, 
            uniting over 32,000 hectares of lush estates across Sri Lanka's finest tea-growing regions. With 
            a legacy spanning over 125 years, we have perfected the art of tea cultivation while maintaining 
            our commitment to environmental stewardship and community welfare.
          </p>
          <p>
            Every estate under our umbrella is managed with the same dedication to quality and sustainability. 
            We believe that great tea begins with great care—care for the land, the plants, the people, and 
            the future generations who will enjoy our teas.
          </p>
        </div>
      </section>

      {/* Plantations Grid */}
      <section className="plantations-grid-section">
        <h2>Our Estate Portfolio</h2>
        <div className="plantations-grid">
          {plantations.map((plantation) => (
            <div key={plantation.id} className="plantation-card">
              <div className="plantation-image">
                <img src={plantation.image} alt={plantation.name} />
              </div>

              <div className="plantation-info">
                <h3>{plantation.name}</h3>
                <p className="plantation-description">{plantation.description}</p>

                <div className="plantation-stats">
                  <div className="stat">
                    <span className="stat-label">Altitude:</span>
                    <span className="stat-value">{plantation.altitude}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Area:</span>
                    <span className="stat-value">{plantation.area}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Est:</span>
                    <span className="stat-value">{plantation.established}</span>
                  </div>
                </div>

                <p className="plantation-details">{plantation.details}</p>

                <div className="plantation-practices">
                  <h4>Key Practices</h4>
                  <p>{plantation.practices}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section">
        <div className="sustainability-header">
          <h2>Our Commitment to Sustainability</h2>
          <p>We believe in leaving the land better than we found it</p>
        </div>

        <div className="sustainability-grid">
          {sustainability.map((item, index) => (
            <div key={index} className="sustainability-card">
              <div className="sustainability-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <h2>Our Tea Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>1891</h4>
              <p>High Mountain Estate established, pioneering quality Ceylon tea production</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>1920</h4>
              <p>Emerald Valley Plantation joins our portfolio, expanding operations</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>1950s-1980s</h4>
              <p>Modernization of processing facilities while maintaining traditional methods</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>2000s</h4>
              <p>Implementation of organic farming practices across all estates</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h4>2020s</h4>
              <p>Complete transition to renewable energy and achieving carbon neutrality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Experience Our Plantations</h2>
        <p>Discover the story behind every cup of tea. Visit our plantations for an unforgettable experience.</p>
        <button className="cta-button">Plan Your Visit</button>
      </section>
    </div>
  );
};

export default Plantations;