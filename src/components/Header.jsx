import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => (
  <header className="header">
    <h1>Real Estate Management System</h1>
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/properties">Properties</Link> */}
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact us</Link>
      <Link to="/login">Login</Link>
    </nav>
  </header>
);

export default Header;
