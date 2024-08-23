import React, { useState, useEffect } from 'react';
import * as propertyService from '../api/propertyService';
import Footer from './Footer';
import '../style.css';
import templatedata from '../TemplateData.json';
import SearchBar from './SearchBar';
import HouseList from './HouseList';
import HouseDetail from './HouseDetail';

const Home = () => {
  const [activeTab, setActiveTab] = useState('buy'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState([]); 
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await propertyService.getProperties({ type: activeTab });
        const propertiesData = response.data || [];
        setProperties(propertiesData); 
        setFilteredProperties(propertiesData);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setError('Failed to fetch properties. Please try again later.');
      }
    };

    fetchProperties();
  }, [activeTab]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = properties.filter(property =>
      property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProperties(filtered);
  };
  const [filteredData, setFilteredData] = useState(templatedata);
  const [selectedHouse, setSelectedHouse] = useState(null);


  return (
    <div>
      <div className="home-page">
        <h1>Find Your Dream Property</h1>
        <div className="quote-section">
          <p>"Home is the starting place of love, hope, and dreams."</p>
          <p>"The magic thing about home is that it feels good to leave, and it feels even better to come back."</p>
          <p>"Your home should tell the story of who you are, and be a collection of what you love."</p>
        </div>
        <div className="home">
          <SearchBar
              data={templatedata}
              setFilteredData={setFilteredData}
              setSelectedHouse={setSelectedHouse}
          />
          {selectedHouse ? (
              <HouseDetail house={selectedHouse} />
          ) : (
              <HouseList
                  filteredData={filteredData}
                  setSelectedHouse={setSelectedHouse}
              />
          )}
          
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
