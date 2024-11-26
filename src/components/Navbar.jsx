import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  
  const notifications = [
    {
      id: 1,
      message: "Welcome to LearnWithWida!",
      time: "Just now",
      unread: true
    },
    {
      id: 2,
      message: "New course available: Data Science",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 3,
      message: "Your profile has been updated",
      time: "1 day ago",
      unread: false
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Add resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate('/');
      setShowDropdown(false);
    } catch (error) {
      console.error(error);
    }
  };

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <nav>
      <div style={{marginLeft: isMobile ? "10px" : "30px"}} />
      
      {!isMobile && (
        <div className="links">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/course" className="nav-link">Courses</NavLink>
          {user && (
            <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
          )}
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/faq" className="nav-link">FAQ</NavLink>
          <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
        </div>
      )}

      <div className="btns">
        {user ? (
          <div className="user-controls">
            <div className="notification-wrapper" ref={notificationRef}>
              <div 
                className="notification-icon"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <IoNotificationsOutline size={24} />
                {unreadCount > 0 && (
                  <span className="notification-badge">{unreadCount}</span>
                )}
              </div>
              
              {showNotifications && (
                <div className="notifications-dropdown">
                  <div className="notifications-header">
                    <h3>Notifications</h3>
                    {unreadCount > 0 && (
                      <button className="mark-all-read">Mark all as read</button>
                    )}
                  </div>
                  <div className="notifications-list">
                    {notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.unread ? 'unread' : ''}`}
                      >
                        <p className="notification-message">{notification.message}</p>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="user-profile" ref={dropdownRef}>
              <img 
                src={user.photoURL} 
                alt="Profile" 
                className="profile-image"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="profile-dropdown">
                  <div className="dropdown-user-info">
                    <img src={user.photoURL} alt="Profile" className="dropdown-profile-image" />
                    <div className="dropdown-user-details">
                      <span className="dropdown-username">{user.displayName}</span>
                      <span className="dropdown-email">{user.email}</span>
                    </div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-menu-items">
                    <button onClick={() => navigate('/dashboard')} className="dropdown-item">
                      Dashboard
                    </button>
                    <button onClick={() => navigate('/profile')} className="dropdown-item">
                      Profile
                    </button>
                    <button onClick={handleSignOut} className="dropdown-item">
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <button className="Login" onClick={handleLogin}>
              Login
            </button>
            <button className="SignUp" onClick={handleSignUp}>
              SignUp
            </button> 
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
