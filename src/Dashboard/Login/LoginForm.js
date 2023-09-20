import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import your CSS stylesheet

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State to track login error

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      // Send a request to the mockapi.io API to check if the user exists by username
      const response = await fetch(`https://64e736deb0fd9648b78f8d37.mockapi.io/pet_api/registration?username=${username}`);
      const data = await response.json();

      if (data.length > 0 && data[0].password === password) {
        // Login successful
        onLogin();
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        navigate('/dashboard');
      } else {
        setError('Incorrect username or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  const handleRegister = () => {
    navigate('/registrationform');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              placeholder='Enter Username'
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
