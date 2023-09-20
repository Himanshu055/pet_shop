import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li>
            <a href="#">Order Medicines</a>
          </li>
          <li>
            <a href="#">Book Lab Tests</a>
          </li>
          <li>
            <a href="#">Consult a Doctor</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Download Our App</h3>
        <ul>
          <li>
            <a href="#">
              <img
              className='playstore'
                src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/play_store.png?v=1683527854"
                alt="Download on Google Play"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
              className='appstore'
                src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/app_store.png?v=1683527854"
                alt="Download on the App Store"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h2 className="footer-heading">Connect with us</h2>
        <div className="footer-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
