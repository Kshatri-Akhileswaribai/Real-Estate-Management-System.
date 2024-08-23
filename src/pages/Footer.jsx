import React from 'react';
import '../style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            RealEstate is a leading real estate platform that helps you find your dream home or property. Our team of experts is dedicated to providing the best service to help you make informed decisions.
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email: <a href="mailto:info@lamaestate.com">info@realestate.com</a>
          </p>
          <p>
            Phone: <a href="tel:+123456789">+1 234 567 89</a>
          </p>
          <p>
            Address: 1234 Broadway St, Chennai, TN 600004.
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Real Estate. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
