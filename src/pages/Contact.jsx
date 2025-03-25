import {useEffect} from "react";
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import customerService from "../assets/customer-service.png";
import logo from "../assets/WidaLogo.png";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Wida";
  }, []);
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>CONTACT US</h1>
        <p>We value your feedback and are here to assist you! If you have any questions, concerns, or suggestions, please don't hesitate to reach out to us.</p>
        
        <div className="social-links">
          <a href="#" className="social-link">
            <HiOutlineMail />
          </a>
          <a href="#" className="social-link">
            <FaFacebookF />
          </a>
          <a href="#" className="social-link">
            <RiTwitterXFill />
          </a>
          <a href="#" className="social-link">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-image">
          <img src={customerService} alt="Customer Service" />
        </div>
        
        <div className="contact-form-section">
          <h2>HOW CAN WE HELP?</h2>
          <p>Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.</p>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-banner">
          <div className="banner-left">
            <h3>Join our LearnwithWiDa's experience</h3>
          </div>
          <div className="banner-right">
            <h2>We have trained over <br/> 2000 students to be <br/> tech professionals</h2>
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
                <li>About Us</li>
                <li>Courses</li>
                <li>Login</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Scholarship</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Collaborate with Us</li>
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
    </div>
  );
};

export default Contact; 