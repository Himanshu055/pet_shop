import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css'; // Import your CSS stylesheet
import axios from 'axios';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState(null);

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Validate if any field is empty
    if (!username || !phoneNumber || !password) {
      setRegistrationError('All field are required');
      return;
    }

    try {
      // Check if phone number is already registered
      const response = await axios.get(`https://64e736deb0fd9648b78f8d37.mockapi.io/pet_api/registration?phone=${phoneNumber}`);
      const existingUser = response.data.length > 0;

      if (existingUser) {
        setRegistrationError('An account with this phone number already exists.');
        return;
      }

      // Proceed with registration
      const registrationResponse = await axios.post('https://64e736deb0fd9648b78f8d37.mockapi.io/pet_api/registration', {
        username,
        phoneNumber,
        password,
        // Add other registration data here
      });

      if (registrationResponse.status === 201) {
        // Registration successful
        navigate('/loginform'); // Navigate to the login page
      } else {
        setRegistrationError('An error occurred during registration.'); // Display generic error message
      }
    } catch (error) {
      if (error.response) {
        setRegistrationError(error.response.data.message); // Display registration error message from API
      } else {
        setRegistrationError('An error occurred during registration.'); // Display generic error message
      }
    }
  };

  const handleLogin = () => {
    navigate('/loginform'); // Navigate to the login page
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="form-group">
            {/* <label htmlFor="username">Username:</label> */}
            <input
              type="text"
              id="username"
              className='input_text'
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="phoneNumber">Phone Number:</label> */}
            <input
              type="tel"
              id="phoneNumber"
              className='input_text'
              value={phoneNumber}
              placeholder="Enter Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="password">Password:</label> */}
            <input
              type="password"
              id="password"
              value={password}
              className='input_text'
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Add other registration form inputs here */}
          <div className="fotter">
            {/* <a>Forgot Password ?</a> */}
            <button className="register-button" type='submit'>
              Register
            </button>
          </div>
        </form>
        <p>Already have an account? <button className="login-link" onClick={handleLogin}>Login</button></p>
        {registrationError && <p className="error-message">{registrationError}</p>}
      </div>
    </div>
  );
};

export default RegistrationForm;
