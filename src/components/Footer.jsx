import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        © 2024 LEARNWITHWIDA. ALL RIGHTS RESERVED.
      </div>
      <div className="footer-icons">
        <a href="https://facebook.com" target="_blank+" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://x.com/learnwithwida?s=21" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/learnwithwida?igsh=NjVycXRyNHgxYndv&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;