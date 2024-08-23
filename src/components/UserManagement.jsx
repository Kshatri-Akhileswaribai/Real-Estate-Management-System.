import React, { useState, useEffect } from 'react';
import * as userService from '../api/userService'; 
import '../style.css'; 

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'client',
  });
  const [editingUser, setEditingUser] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users!');
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filteredUsers = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setUsers(filteredUsers);
  }, [searchQuery]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newUser.password !== newUser.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }
    setIsLoading(true);
    try {
      if (editingUser) {
        await userService.updateUser(editingUser.id, newUser);
        alert('User updated successfully!');
      } else {
        await userService.createUser(newUser); 
        alert('User added successfully!');
      }
      const updatedUsers = await userService.getUsers(); 
      setUsers(updatedUsers.data);
      resetForm();
      setShowForm(false);
    } catch (error) {
      setError('Error saving user!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setNewUser(user);
    setShowForm(true);
  };

  const handleDelete = async (userId) => {
    try {
      await userService.deleteUser(userId);
      alert('User deleted successfully!');
      const updatedUsers = await userService.getUsers();
      setUsers(updatedUsers.data);
    } catch (error) {
      setError('Error deleting user!');
    }
  };

  const resetForm = () => {
    setNewUser({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      role: 'client',
    });
    setEditingUser(null);
    setError('');
    setShowForm(false);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>

      <div className="search-add-bar">
        <input
          type="text"
          placeholder="Search Users by Name or Email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={() => setShowForm(!showForm)} className="add-user-button">
          {showForm ? 'Hide Form' : 'Add User'}
        </button>
      </div>

      {showForm && (
        <form className="user-form" onSubmit={handleSubmit}>
          <h3>{editingUser ? 'Edit User' : 'Add New User'}</h3>
          <div className="input-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={newUser.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              autoComplete='off'
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={newUser.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              autoComplete='off'
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              placeholder="Email"
              required
              autoComplete='off'
            />
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={newUser.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              autoComplete='off'
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
              placeholder="Password"
              required={!editingUser} 
              autoComplete='off'
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={newUser.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required={!editingUser} 
              autoComplete='off'
            />
          </div>
          <fieldset className="user-form-fieldset">
              <legend className="user-form-legend">Select Role:</legend>
              <label className="user-form-radio-label">
              <input
                type="radio"
                name="type"
                value="client"
                checked={newUser.type === 'client'}
                onChange={handleChange}
                className="user-form-radio-input"
              />
              Client
              </label>
              <label className="user-form-radio-label">
             <input
                type="radio"
                name="type"
                value="agent"
                checked={newUser.type === 'agent'}
                onChange={handleChange}
                className="user-form-radio-input"
              />
              Agent
              </label>
          </fieldset>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Saving...' : editingUser ? 'Update User' : 'Add User'}
          </button>
          {editingUser && (
            <button type="button" onClick={resetForm} className="reset-button">
              Cancel
            </button>
          )}
        </form>
      )}

      <h3>Existing Users</h3>
      <table className="user-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)} className="delBtn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
