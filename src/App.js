import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Admin from './pages/Admin';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import './index.css';
import Agents from './pages/Agents';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import ClientProfile from './pages/ClientProfile';
import PropertyDetail from './pages/PropertyDetail';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/properties" element={<Properties/>} />
          <Route path="/agent" element={<Agents/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/property" element={<PropertyDetail/>} />
          <Route path="/client-profile" element={<ClientProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
