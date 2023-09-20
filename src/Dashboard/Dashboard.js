import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';
import Sidebar from './sideBar/Sidebar';
import MainContent from './MainContent/MainContent';
import DashboardItem from './DashboardItem/DashboardItem';
import CustomerList from './CustomerList';
import ServiceList from './ServiceList';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/loginform');
    }
  }, []);

  const [activeTab, setActiveTab] = useState('customers'); // Set the default tab to 'customers'

  return (
    <div className="dashboard">
      {/* <Sidebar className="sidebar" /> */}
      <MainContent>
        <div className="dashboard-content">
          <div className="tab-navigation">
          
            <button
              className={activeTab === 'customers' ? 'active' : ''}
              onClick={() => setActiveTab('customers')}
            >
             Pet Management
            </button>
            <button
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              Service List
            </button>
          </div>
          <div className={`tab-content ${activeTab === 'dashboard' ? 'active' : ''}`}>
            <ServiceList />
            <div className="dashboard-items">
              {/* Render DashboardItem components */}
              {/* ... */}
            </div>
            <div className="dashboard-graph">{/* Render the Graph component */}</div>
          </div>
          <div className={`tab-content ${activeTab === 'customers' ? 'active' : ''}`}>
            <CustomerList />
          </div>
        </div>
      </MainContent>
    </div>
  );
};

export default App;
