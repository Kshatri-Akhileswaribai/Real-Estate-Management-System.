import React from 'react';
import UserForm from '../components/UserForm';
import '../style.css';
import Footer from './Footer';

const Register = ({ history }) => {
  const handleSuccess = () => {
    history.push('/login');
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <br />
      <UserForm onSuccess={handleSuccess} />
      <br /><br />
      <Footer/>
    </div>
  );
};

export default Register;
