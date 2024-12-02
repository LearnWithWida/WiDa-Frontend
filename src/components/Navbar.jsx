import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      setShowDropdown(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          LearnWithWida
        </Link>
      </div>

      <div className="nav-right">
        {user ? (
          <div className="user-profile">
            <div 
              className="user-info" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <FaUserCircle className="user-icon" />
              <span className="user-name">
                {user?.displayName || 'User'}
              </span>
            </div>
            
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="dropdown-item">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
