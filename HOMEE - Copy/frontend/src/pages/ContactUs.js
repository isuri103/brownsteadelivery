import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const faqs = [
    {
      question: "What is the best way to brew tea?",
      answer: "The best brewing method depends on the tea type. Black teas require boiling water (212°F) for 3-5 minutes. Green teas prefer cooler water (160-180°F) for 1-3 minutes. Always use filtered water for optimal taste."
    },
    {
      question: "Do you offer wholesale options?",
      answer: "Yes! We offer competitive wholesale pricing for businesses. Contact our wholesale team for bulk orders and special pricing arrangements."
    },
    {
      question: "How can I track my delivery?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this to monitor your delivery in real-time through our portal."
    },
    {
      question: "Are your teas organic?",
      answer: "Many of our teas are certified organic. Please check the product description for certification details. We're committed to sustainable farming practices across all our estates."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, contact us for a full refund or replacement."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-7 business days depending on your location. Rush delivery options are available for an additional fee."
    }
  ];

  return (
    <div className="contact-us-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Reach out to us with any questions or feedback.</p>
      </div>

      <div className="contact-content">
        {/* Contact Form Section */}
        <section className="contact-form-section">
          <div className="form-container">
            <h2>Send us a Message</h2>
            
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please tell us what's on your mind..."
                  rows="6"
                />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Address</h3>
                <p>Browns Plantations Ltd.<br />123 Tea Estate Drive<br />Kandy, Sri Lanka 20000</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+94 81 123 4567<br />+94 81 123 4568</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>info@brownstea.com<br />support@brownstea.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">⏰</div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p className="faq-subtitle">Find answers to common questions about our products and services</p>

          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="support-section">
          <h2>How Can We Help?</h2>
          <div className="support-cards">
            <div className="support-card">
              <div className="support-icon">🛍️</div>
              <h3>Product Questions</h3>
              <p>Learn more about our tea varieties, brewing tips, and product information</p>
            </div>

            <div className="support-card">
              <div className="support-icon">📦</div>
              <h3>Order & Delivery</h3>
              <p>Track your order, learn about shipping options, and delivery information</p>
            </div>

            <div className="support-card">
              <div className="support-icon">💼</div>
              <h3>Wholesale</h3>
              <p>Inquire about bulk orders, wholesale pricing, and business partnerships</p>
            </div>

            <div className="support-card">
              <div className="support-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>Learn about our environmental practices and commitment to the planet</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
