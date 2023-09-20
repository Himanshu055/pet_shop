import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Import the CSS file for styling

function NotFound() {
  return (
    <div className="not-found-container">
      <Link to="/">
        <img src="https://e-tuitions.com/assets/img/error-404.png" alt="404 Not Found" className="not-found-gif" style={{ cursor: 'pointer' }} />
      </Link>
    </div>
  );
}

export default NotFound;
