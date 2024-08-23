import React from 'react';
import '../style.css';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div>
    <div className="contact-us-page">
      <div className="overlay">
        <div className="contact-content">
          <h1>Contact Us</h1>
          <br />
          <p>
            We'd love to hear from you! Whether you have a question about properties, services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
          <div className="contact-info">
            <p>
              Email: <a href="mailto:info@realestate.com">info@realestate.com</a>
            </p>
            <p>
              Phone: <a href="tel:+123456789">+1 234 567 89</a>
            </p>
            <p>
              Address: 1234 Broadway St, Chennai , TN 600004.
            </p>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactUs;
