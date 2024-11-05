// src/components/Login.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://kidus-wegayehu.onrender.com/login', {
        email: username,
        password,
      });

      // Store the JWT token in localStorage
      localStorage.setItem('token', response.data.token);
      onLogin(true); // Update parent component's state
      navigate('/admin'); // Redirect to /admin on successful login
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="heading">Sign In</div>
        {error && <p className="error">{error}</p>}
        <form className="form" onSubmit={handleLogin}>
          <input
            required
            className="input"
            type="text"
            name="email"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            className="input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="forgot-password">
            <a href="#">Forgot Password?</a>
          </span>
          <input className="login-button" type="submit" value="Sign In" />
        </form>
        <span className="agreement">
          <a href="#">Learn user license agreement</a>
        </span>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
