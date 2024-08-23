import React from 'react';
import PropertyManagement from '../components/PropertyManagement';
import UserManagement from '../components/UserManagement';
import '../index.css';
import Footer from './Footer';

const Admin = () => (
  <div className="admin">
    <h1>Admin Panel</h1>
    <br />
    <UserManagement /><br />
    <PropertyManagement /><br /><br />
    <Footer/>
  </div>
);

export default Admin;
