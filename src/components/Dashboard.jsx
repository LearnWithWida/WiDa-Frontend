import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Welcome to your Dashboard, {user.displayName}!</h1>
      <div className="dashboard-content">
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard; 