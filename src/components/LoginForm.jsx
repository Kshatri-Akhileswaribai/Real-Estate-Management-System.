import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import * as userService from '../api/userService'; 
import '../style.css';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: 'client', 
    id:'',
  });

  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleRoleChange = (e) => {
    setCredentials({ ...credentials, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await userService.loginUser(credentials); 
      console.log('Login successful:', user); 
      alert('Login successful!');
      
      onLogin(user);
  
      
      if (credentials.role === 'client') {
        navigate('/client-profile');
      } else if (credentials.role === 'admin') {
        navigate('/admin'); 
      } else if (credentials.role === 'agent') {
        navigate('/agent'); 
      }
    } catch (error) {
      console.error('Login failed:', error); 
      alert('Invalid email, password, or role!');
    }
    
  };
  

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="login-form-title">Welcome Back!</h1>

      <label htmlFor="email" className="login-form-label">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
        placeholder="Enter your email"
        required
        autoComplete="off"
        className="login-form-input"
      />

      <label htmlFor="password" className="login-form-label">
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Enter your password"
        required
        autoComplete="off"
        className="login-form-input"
      />

      <fieldset className="login-form-fieldset">
        <legend className="login-form-legend">Select Role:</legend>
        <label className="login-form-radio-label">
          <input
            type="radio"
            name="role"
            value="admin"
            checked={credentials.role === 'admin'}
            onChange={handleRoleChange}
            className="login-form-radio-input"
          />
          Admin
        </label>
        <label className="login-form-radio-label">
          <input
            type="radio"
            name="role"
            value="agent"
            checked={credentials.role === 'agent'}
            onChange={handleRoleChange}
            className="login-form-radio-input"
          />
          Agent
        </label>
        <label className="login-form-radio-label">
          <input
            type="radio"
            name="role"
            value="client"
            checked={credentials.role === 'client'}
            onChange={handleRoleChange}
            className="login-form-radio-input"
          />
          Client
        </label>
      </fieldset>

      <button type="submit" className="login-form-button">Login</button>

      <p className="login-form-text">
        <a href="/forgot-password" className="login-form-link">Forgot Password?</a>
      </p>
      <p className="login-form-text">
        Don't have an account? <a href="/register" className="login-form-link">Create an account</a>
      </p>
    </form>
  );
};

export default LoginForm;
