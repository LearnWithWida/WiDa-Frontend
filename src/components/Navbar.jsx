import  { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import { IoNotificationsOutline, IoArrowDown } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './Navbar.css';
import WidaLogo from '../assets/WidaLogo.png';
import { useNotifications } from '../context/NotificationContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [showProgramsMenu, setShowProgramsMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { notifications, markAsRead, clearNotification } = useNotifications();
  const profileRef = useRef(null);
  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
  };

  const handleNotificationClick = (id) => {
    markAsRead(id);
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
        <Link to="/" className="home-link">Home</Link>
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
              <Link to="/physical-program" className="dropdown-link">Physical Program</Link>
              <Link to="/programs/one-on-one" className="dropdown-link">One-on-One Program</Link>
              <Link to="/programs/mentorship" className="dropdown-link">Mentorship Program</Link>
            </div>
          )}
        </div>

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
          <div className="notification-wrapper" ref={notificationRef}>
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
                  {notifications.length > 0 && (
                    <button className="mark-all-read" onClick={() => {
                      notifications.forEach(notification => markAsRead(notification.id));
                    }}>
                      Mark all as read
                    </button>
                  )}
                </div>
                <div className="notifications-list">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.unread ? 'unread' : ''}`}
                        onClick={() => handleNotificationClick(notification.id)}
                      >
                        <p>{notification.message}</p>
                        <span className="notification-time">
                          {new Date(notification.time).toLocaleString()}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="no-notifications-message">
                      <p>No notifications yet</p>
                    </div>
                  )}
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
          <div className="profile-menu" ref={profileRef}>
            <div 
              className="profile-icon" 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" />
              ) : (
                <FaUserCircle />
              )}
            </div>
            
            {showDropdown && (
              <div className="dropdown-menu">
                <button onClick={() => handleNavigation('/dashboard')}>
                  Dashboard
                </button>
                <button onClick={logout}>Sign Out</button>
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
