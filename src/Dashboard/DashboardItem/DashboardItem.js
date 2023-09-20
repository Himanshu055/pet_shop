// DashboardItem.js
import React from 'react';
import './DashboardItems.css';

const DashboardItem = ({ title, icon, value }) => {
  return (
    <div className="dashboard-item">
      <div className="item-icon">{icon}</div>
      <div className="item-title">{title}</div>
      <div className="item-value">{value}</div>
    </div>
  );
};

export default DashboardItem;
