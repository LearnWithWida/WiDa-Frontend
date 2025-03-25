import { useEffect } from 'react';
import logo from "../assets/WidaLogo.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Wida";
  }, []);

  return (
    <div className="privacy-container">
      <div className='p-content'>
        <h1>Privacy & Policy</h1>
        <p className="privacy-intro">
          Welcome to LearnwithWiDa ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal data when you use our website and services.
        </p>
        <p>By accessing or using [Your Website Name], you consent to the practices described in this policy. If you do not agree, please do not use our services.</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>

          <p><strong>a. Personal Information</strong></p>
          <p>When you register, subscribe, or use our services, we may collect personal information, including but not limited to:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing information (if making payments)</li>
          </ul>

          <p><strong>b. Usage Data</strong></p>
          <ul>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Device information</li>
          </ul>

          <p><strong>c. Cookies and Tracking Technologies</strong></p>
          <p>We use cookies and similar tracking technologies to enhance your experience. You can manage your cookie preferences through your browser settings.</p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve our data analytics services</li>
            <li>Personalize user experience</li>
            <li>Process transactions and manage accounts</li>
            <li>Analyze trends and optimize our platform</li>
            <li>Communicate with you regarding updates, promotions, or support</li>
            <li>Ensure security and prevent fraud</li>
          </ul>
        </section>

        <section>
          <h2>3. Sharing Your Information</h2>
          <p>We do not sell your personal information. However, we may share your data with:</p>
          <ul>
            <li>With service providers: Third-party vendors assisting with hosting, analytics, or customer support</li>
            <li>Legal compliance: If required by law or to protect our rights</li>
            <li>Business transfers: In case of a merger, sale, or acquisition</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We implement security measures to protect your information, including encryption and access controls. However, no system is 100% secure, and we encourage users to take precautions when sharing data online.</p>
        </section>

        <section>
          <h2>5. Your Rights & Choices</h2>
          <p>Depending on your location, you may have rights regarding your data, such as:</p>
          <ul>
            <li>Accessing, correcting, or deleting your information</li>
            <li>Opting out of marketing communications</li>
            <li>Managing cookie preferences</li>
          </ul>
          <p>To exercise these rights, please contact us at [Your Contact Email].</p>
        </section>

        <section>
          <h2>6. Third Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices, so please review their policies separately.</p>
        </section>

        <section>
          <h2>7. Updates to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated "Effective Date." Continued use of our services after changes means you accept the revised policy.</p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us at:</p>
          <p>Email: support@qjumpa.com</p>
        </section>

        <p className="privacy-footer">Thank you for trusting LearnwithWiDa! We are committed to ensuring your privacy and delivering a seamless order-ahead experience.</p>
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

export default PrivacyPolicy;