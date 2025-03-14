import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdKeyboardArrowDown } from 'react-icons/md';
import './Navbar.css';
import WidaLogo from '../assets/WidaLogo.png';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProgramsMenu, setShowProgramsMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);

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
              <Link to="/resources/privacy-policy" className="dropdown-link">Privacy Policy</Link>
              <Link to="/resources/collaborate" className="dropdown-link">Collaborate with Us</Link>
              <Link to="/resources/faqs" className="dropdown-link">FAQs</Link>
            </div>
          )}
        </div>

        <NavLink to="/Contact" className="nav-link">Contact Us</NavLink>
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
          <>
            <Link to="/login" className="Login">Login</Link>
            <Link to="/SignUp" className="signup-btn">Apply</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
