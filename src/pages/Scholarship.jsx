import  { useEffect } from 'react';
import logo from "../assets/WidaLogo.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import clipboardImg from "../assets/clipboard-img.png";
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';

const Scholarship = () => {
  useEffect(() => {
    document.title = "Scholarships | Wida";
  }, []);

  return (
    <div className="scholarship-container">
      <div className="scholarship-header">
        <h1>SCHOLARSHIPS</h1>
        <p>...offering free support and resources you need to explore, learn, and thrive in the dynamic world of technology.</p>
      </div>

      <div className="scholarship-content">
        <div className="no-scholarship-message">
          <img src={clipboardImg} alt="No Scholarships" />
          <h2>No Scholarships Available Yet</h2>
          <p>It takes few time service scholarships at the moment. Check back later or explore other opportunities that may be available to you</p>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="WIDA Logo" className="footer-logo" />
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+2348130287334</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp"></i>
              <span>+2348130287334</span>
            </div>
            <div className="contact-item">
              <i className="far fa-envelope"></i>
              <span>Email Support</span>
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><RiTwitterXFill /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/scholarship">Scholarship</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/collaborate">Collaborate with Us</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Programs</h3>
            <ul>
              <li>Virtual</li>
              <li>Physical</li>
              <li>Mentorship</li>
              <li>One-on-One</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Subscribe</h3>
            <p>1.18k+ of our students are subscribe around the world.</p>
            <div className="subscribe-form">
              <div className="subscribe-input-wrapper">
                <HiOutlineMail className="subscribe-icon" />
                <input type="email" placeholder="Email" />
              </div>
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarship; 