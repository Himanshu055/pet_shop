import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS stylesheet
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [drawer, setDrawer] = useState(true);

  const toggleDrawer = () => {
    setDrawer(drawer);
  };

  const menuList = [
    { icon: 'inbox', label: 'Pet Management:', link: '/dashboard/petmanagement' },
    { icon: 'star', label: 'Service Listing:', link: '/service-listing' },
    // Add more menu items
  ];

  return (
    <div className="sidebar">
      <div className={`q-drawer ${drawer ? 'open' : ''}`}>
        <div className="q-scroll-area fit">
          <div className="user-avatar">
            <img src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0JTIwYW5pbWFsJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="User Avatar" className="avatar" />
            <span className="username">Himanshu</span>
          </div>
          <ul className="q-list">
        {menuList.map((menuItem, index) => (
          <li className={`q-item clickable ${menuItem.label === 'Pet Management:' ? 'active' : ''}`} key={index}>
            <div className="q-item-section avatar">
              <i className={`q-icon ${menuItem.icon}`} />
            </div>
            <div className="q-item-section">
              <Link to={menuItem.link}>{menuItem.label}</Link>
            </div>
          </li>
        ))}
      </ul>
        </div>
      </div>
      <button className={`sidebar-toggle ${drawer ? 'open' : 'close'}`} onClick={toggleDrawer}>
        ☰
      </button>
      <div className={`q-page-container ${drawer ? 'open' : 'close'}`}>
     
      </div>
    </div>
  );
};

export default Sidebar;
