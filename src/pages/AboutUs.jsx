import React from 'react';
import '../style.css';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div>
    <div className="about-us-page">
      <div className="overlay">
        <div className="about-content">
          <h1>About RealEstate</h1>
          <br />
          <p>
            RealEstate is a premier real estate platform dedicated to helping you find the perfect property. With years of experience in the real estate industry, we pride ourselves on providing top-notch service, personalized attention, and comprehensive resources to assist you in making the best real estate decisions.
          </p>
          <p>
            Whether you are looking to buy, sell, or rent a property, our team of experts is here to guide you every step of the way. We believe in transparency, integrity, and building long-lasting relationships with our clients.
          </p>
          <p>
            Our mission is to make the real estate process seamless and stress-free for our clients, and we are committed to helping you achieve your real estate goals.
          </p>
        </div>
      </div>
      </div>
      <br /><br />
      <Footer/>
    </div>
  );
};

export default AboutUs;
