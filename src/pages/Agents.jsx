import React from 'react';
import '../index.css';
import PropertyManagement from '../components/PropertyManagement';
import Footer from './Footer';

const Agents = () => (
  <div className="clients">
    <h1>Agent Panel</h1><br />
    <PropertyManagement/><br /><br />
    <Footer/>
  </div>
);

export default Agents;
