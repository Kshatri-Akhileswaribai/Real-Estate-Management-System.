import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import '../style.css';
import Footer from './Footer';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/'); 
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <br />
      <LoginForm onLogin={handleLogin} />
      <br /><br />
      <Footer />
    </div>
  );
};

export default Login;
