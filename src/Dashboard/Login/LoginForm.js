// Login.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import your CSS stylesheet
import { useNavigate } from 'react-router-dom';


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
    <div className="login_form_container">
      <div className="login_form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className="input_text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Password"
              className="input_text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button_group" id="login_button">
            <button type="submit">Submit</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
        <div className="fotter">
          {/* <a>Forgot Password ?</a> */}
          <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
