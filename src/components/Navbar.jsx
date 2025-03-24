import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import { IoNotificationsOutline, IoArrowDown } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './Navbar.css';
import WidaLogo from '../assets/WidaLogo.png';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProgramsMenu, setShowProgramsMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New course content available",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      message: "Your progress has been updated",
      time: "5 hours ago",
      unread: true
    }
  ]);

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
    <>
    <div className="navtop">
    <p>Unlock your potentials with LearnwithWIDA</p>
    </div>  
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="nav-logo">
          <img src={WidaLogo} alt="Wida Logo" className="wida-logo" />
        </Link>
      </div>
      <div className="links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About Us</NavLink>
        
        {/* Programs Dropdown */}
        <div 
          className={`nav-dropdown ${showProgramsMenu ? 'active' : ''}`}
          onMouseEnter={() => setShowProgramsMenu(true)}
          onMouseLeave={() => setShowProgramsMenu(false)}
        >
          <NavLink to="/Programs" className="nav-link with-arrow">
            Programs
            <MdKeyboardArrowDown className="dropdown-arrow" />
          </NavLink>
          {showProgramsMenu && (
            <div className="dropdown-content programs-dropdown">
              <Link to="/programs/virtual" className="dropdown-link">Virtual Program</Link>
              <Link to="/programs/physical" className="dropdown-link">Physical Program</Link>
              <Link to="/programs/one-on-one" className="dropdown-link">One-on-One Program</Link>
              <Link to="/programs/mentorship" className="dropdown-link">Mentorship Program</Link>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div 
          className={`nav-dropdown ${showResourcesMenu ? 'active' : ''}`}
          onMouseEnter={() => setShowResourcesMenu(true)}
          onMouseLeave={() => setShowResourcesMenu(false)}
        >
          <NavLink to="/Resources" className="nav-link with-arrow">
            Resources
            <MdKeyboardArrowDown className="dropdown-arrow" />
          </NavLink>
          {showResourcesMenu && (
            <div className="dropdown-content resources-dropdown">
              <Link to="/scholarship" className="dropdown-link">Scholarships</Link>
              <Link to="/blog" className="dropdown-link">Blog</Link>
              <Link to="/privacy-policy" className="dropdown-link">Privacy Policy</Link>
              <Link to="/collaborate" className="dropdown-link">Collaborate with Us</Link>
              <Link to="/faqs" className="dropdown-link">FAQs</Link>
            </div>
          )}
        </div>

        <NavLink to="/Contact" className="nav-link">Contact Us</NavLink>
      </div>
      <div className="nav-right">
        {user ? (
          <div className="notification-wrapper">
            <div className="notification-icon" onClick={() => setShowNotifications(!showNotifications)}>
              <IoNotificationsOutline size={24} />
              {notifications.filter(n => n.unread).length > 0 && (
                <span className="notification-badge">{notifications.filter(n => n.unread).length}</span>
              )}
            </div>
            
            {showNotifications && (
              <div className="notifications-dropdown">
                <div className="notifications-header">
                  <h3>Notifications</h3>
                  <button className="mark-all-read" onClick={() => {
                    setNotifications(notifications.map(n => ({...n, unread: false})))
                  }}>
                    Mark all as read
                  </button>
                </div>
                <div className="notifications-list">
                  {notifications.map(notification => (
                    <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                      <p className="notification-message">{notification.message}</p>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="Login">Login</Link>
            <Link to="/SignUp" className="signup-btn">Apply</Link>
          </>
        )}

        {user && (
          <div className="user-profile" onClick={() => setShowDropdown(!showDropdown)}>
            <div className="user-info">
              <FaUserCircle className="user-icon" />
              <span className="user-name">{user.displayName}</span>
            </div>
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="dropdown-item">
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;
