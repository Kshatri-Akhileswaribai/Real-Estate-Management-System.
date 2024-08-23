import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as clientService from '../api/clientService'; 
import '../style.css';
import Footer from './Footer';

const ClientProfile = () => {
  const { id } = useParams(); 
  const [client, setClient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const clientData = await clientService.getClientProfile(id);
        const purchaseHistoryData = await clientService.getPurchaseHistory(id);
        const savedItemsData = await clientService.getSavedItems(id);
        
        setClient(clientData);
        setPurchaseHistory(purchaseHistoryData);
        setSavedItems(savedItemsData);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchClientData();
  }, [id]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await clientService.updateClientProfile(id, client); 
      alert('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      setError('Error updating profile');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="client-profile">
      <h2>My Profile</h2>
      <br />
      <button
        className="edit-button"
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>
      <br />
      {isEditing ? (
        <form className="form-container" onSubmit={handleSubmit}>
          <h3>Update Profile</h3>
          <div className="input-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={client.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={client.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={client.email}
              onChange={handleChange}
              placeholder="Email"
              required
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={client.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              autoComplete="off"
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={client.address}
              onChange={handleChange}
              placeholder="Address"
              required
              autoComplete="off"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : 'Update Profile'}
          </button>
        </form>
      ) : (
        <div className="profile-details">
          <p><strong>First Name:</strong> {client.firstName}</p>
          <p><strong>Last Name:</strong> {client.lastName}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Phone Number:</strong> {client.phoneNumber}</p>
          <p><strong>Address:</strong> {client.address}</p>
        </div>
      )}

      <h3>Purchase History</h3>
      <div className="purchase-history">
        {purchaseHistory.length > 0 ? (
          <table className="history-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((purchase) => (
                <tr key={purchase.id}>
                  <td>{purchase.orderId}</td>
                  <td>{purchase.date}</td>
                  <td>${purchase.total}</td>
                  <td>{purchase.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No purchase history available.</p>
        )}
      </div>

      <h3>Saved Items</h3>
      <div className="saved-items">
        {savedItems.length > 0 ? (
          <ul>
            {savedItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>No saved items available.</p>
        )}
      </div>
      <br /><br />
      <Footer/>
    </div>
  );
};

export default ClientProfile;
