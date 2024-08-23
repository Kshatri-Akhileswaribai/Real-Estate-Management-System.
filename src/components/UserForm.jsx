import React, { useState } from 'react';
import { registerUser } from '../api/userService';
import '../style.css';

const UserForm = ({ onSuccess }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'client',
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setError('');
  };

  const validateForm = () => {
    if (user.password !== user.confirmPassword) {
      return 'Passwords do not match!';
    }
    if (!user.email.includes('@')) {
      return 'Invalid email format!';
    }
    if (user.phoneNumber.length < 10) {
      return 'Phone number must be at least 10 digits!';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formError = validateForm();
    if (formError) {
      setError(formError);
      return;
    }

    setIsSubmitting(true);
    try {
      await registerUser(user); 
      alert('User registered successfully!');
      setError('');
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        role: 'client',
      }); 
      if (onSuccess) {
        onSuccess(); 
      }
    } catch (error) {
      setError('Error registering user!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="users-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Create an Account</h1>

      <div className="input-group">
        <label htmlFor="firstName" className="form-label">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="form-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="lastName" className="form-label">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="form-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="form-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={user.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="form-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="form-label">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="form-input"
        />
      </div>

      <div className="input-group">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          className="form-input"
        />
      </div>

      <fieldset className="form-fieldset">
        <legend className="form-legend">Role:</legend>
        <label className="form-radio-label">
          <input
            type="radio"
            name="role"
            value="client"
            checked={user.role === 'client'}
            onChange={handleChange}
            className="form-radio-input"
          />
          Client
        </label>
        <label className="form-radio-label">
          <input
            type="radio"
            name="role"
            value="agent"
            checked={user.role === 'agent'}
            onChange={handleChange}
            className="form-radio-input"
          />
          Agent
        </label>
      </fieldset>

      {error && <p className="error-message">{error}</p>}

      <button type="submit" disabled={isSubmitting} className="form-button">
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>

      <p className="form-text">
        Already have an account? <a href="/login" className="form-link">Login here</a>
      </p>
    </form>
  );
};

export default UserForm;
