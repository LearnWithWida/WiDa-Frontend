import React, { useEffect } from 'react';
import logo from "../assets/WidaLogo.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import blogImage from "../assets/blog-img.png";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Wida";
  }, []);

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>The LearnWithWiDa Blog</h1>
        <div className="search-container">
          <input type="text" placeholder="Search articles..." />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <section className="blog-section">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <p>Explore our latest insights and learning resources</p>
        </div>
        <div className="blog-posts">
          <div className="blog-post">
            <img src={blogImage} alt="Blog post" />
            <div className="post-content">
              <h3>Data Analysis vs Data Science: What's the Difference?</h3>
              <p>Discover the key differences between Data Analysis and Data Science, including their roles, responsibilities, and career paths.</p>
              <div className="post-footer">
                <span>Mar 19, 2024</span>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="blog-post">
            <img src={blogImage} alt="Blog post" />
            <div className="post-content">
              <h3>Top 5 Tools Every Aspiring Data Analyst Should Master</h3>
              <p>Learn about essential tools like SQL, Python, Excel, Tableau, and Power BI to jumpstart your data career.</p>
              <div className="post-footer">
                <span>Mar 19, 2024</span>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="blog-post">
            <img src={blogImage} alt="Blog post" />
            <div className="post-content">
              <h3>Data Analysis vs Data Science: What's the Difference?</h3>
              <p>Discover the key differences between Data Analysis and Data Science, including their roles, responsibilities, and career paths.</p>
              <div className="post-footer">
                <span>Mar 19, 2024</span>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="blog-post">
            <img src={blogImage} alt="Blog post" />
            <div className="post-content">
              <h3>Top 5 Tools Every Aspiring Data Analyst Should Master</h3>
              <p>Learn about essential tools like SQL, Python, Excel, Tableau, and Power BI to jumpstart your data career.</p>
              <div className="post-footer">
                <span>Mar 19, 2024</span>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default Blog; 