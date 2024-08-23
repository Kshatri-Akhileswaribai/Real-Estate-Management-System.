import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as propertyService from '../api/propertyService';
import '../style.css';
import Footer from './Footer';

const PropertiesListing = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await propertyService.getProperties();
        console.log('Fetched properties:', response.data); 
        setProperties(response.data || []);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([]);
      }
    };

    fetchProperties();
  }, []);

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div>
      <div className="properties-listing-page">
        <h1>Available Properties</h1><br />
        <div className="properties-list">
          {properties.length > 0 ? (
            properties.map((property) => (
              <div 
                key={property.id} 
                className="property-card" 
                onClick={() => handlePropertyClick(property.id)}
              >
                <img src={property.image} alt={property.name} className="property-image" />
                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p className="property-price">${property.price}</p>
                  <p><strong>Dimensions:</strong> {property.dimension}</p>
                  <p><strong>Location:</strong> {property.location}</p>
                  <p className="property-description">{property.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No properties available.</p>
          )}
        </div>
      </div>
      <br /><br />
      <Footer/>
    </div>
  );
};

export default PropertiesListing;
