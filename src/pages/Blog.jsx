import { useEffect } from 'react';
import logo from "../assets/WidaLogo.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import blogImage from "../assets/blog-img.png";
import heroUpgrade from "../assets/heroUpgrade.png";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog | Wida";
  }, []);

 

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>The <span style={{color: '#064919', fontFamily: 'Recoleta', fontWeight: '500'}}>LearnWithWiDa</span> Blog</h1>
        <p>Updates and announcements from Team WiDa</p>
        <div className="search-container">
          <input type="text" placeholder="Email Address" />
          <button className="search-btn">Subscribe</button>
        </div>
          <p>You can unsubscribe at any time. Learn more about our <span style={{color: '#064919', fontFamily: 'Recoleta', fontWeight: '500'}}><Link to="/privacy-policy" style={{textDecoration: 'none',color: '#064919'}}>Privacy Policy</Link></span></p>
      </div>
      <div className="feedback-container">
        
      <div className="blog-grid">
          {/* First Blog Post */}
          <div className="blog-post">   
            <div className="blog-content">
              <span className="blog-date">01 Feb 2025</span>
              <h2>Data Analysis vs. Data Science: What's the Difference?</h2>
              <p>Clarify the distinction between data analysis (focused on interpreting existing data) and data science (broader, including predictive modeling and machine learning).</p>
              <Link to={`/blog/${1}`}>
                <button className="view-more-btn">View More</button>
              </Link>
            </div>
            <div className="blog-image">
              <img src={heroUpgrade} alt="Data Analysis vs Science" />
            </div>
          </div>

           {/* Second Blog Post */}
           <div className="blog-post reverse">
            <div className="blog-content">
              <span className="blog-date">01 Feb 2025</span>
              <h2>Top 5 Tools Every Aspiring Data Analyst Should Master</h2>
              <p>Introduce essential tools like Excel, SQL, Tableau, Python, and Power BI, explaining their role in cleaning, analyzing, and visualizing data.</p>
              <Link to={`/blog/${2}`}>
                <button className="view-more-btn">View More</button>
              </Link>
            </div>
            <div className="blog-image">
              <img src={blogImage} alt="Data Analysis Tools" />
            </div>
          </div>

          {/* First Blog Post */}
          <div className="blog-post">   
            <div className="blog-content">
              <span className="blog-date">01 Feb 2025</span>
              <h2>Data Analysis vs. Data Science: What's the Difference?</h2>
              <p>Clarify the distinction between data analysis (focused on interpreting existing data) and data science (broader, including predictive modeling and machine learning).</p>
              <Link to={`/blog/${3}`}>
                <button className="view-more-btn">View More</button>
              </Link>
            </div>
            <div className="blog-image">
              <img src={heroUpgrade} alt="Data Analysis vs Science" />
            </div>
          </div>

           {/* Second Blog Post */}
           <div className="blog-post reverse">
            <div className="blog-content">
              <span className="blog-date">01 Feb 2025</span>
              <h2>Top 5 Tools Every Aspiring Data Analyst Should Master</h2>
              <p>Introduce essential tools like Excel, SQL, Tableau, Python, and Power BI, explaining their role in cleaning, analyzing, and visualizing data.</p>
              <Link to={`/blog/${4}`}>
                <button className="view-more-btn">View More</button>
              </Link>
            </div>
            <div className="blog-image">
              <img src={blogImage} alt="Data Analysis Tools" />
            </div>
          </div>


  {/* First Blog Post */}
  <div className="blog-post">   
            <div className="blog-content">
              <span className="blog-date">01 Feb 2025</span>
              <h2>Data Analysis vs. Data Science: What's the Difference?</h2>
              <p>Clarify the distinction between data analysis (focused on interpreting existing data) and data science (broader, including predictive modeling and machine learning).</p>
              <Link to={`/blog/${5}`}>
                <button className="view-more-btn">View More</button>
              </Link>
            </div>
            <div className="blog-image">
              <img src={heroUpgrade} alt="Data Analysis vs Science" />
            </div>
          </div>

           {/* Second Blog Post */}
           <div className="blog-post reverse">
            <div className="blog-content">
              <span className="blog-date">01 Feb 2025</span>
              <h2>Top 5 Tools Every Aspiring Data Analyst Should Master</h2>
              <p>Introduce essential tools like Excel, SQL, Tableau, Python, and Power BI, explaining their role in cleaning, analyzing, and visualizing data.</p>
              <Link to={`/blog/${6}`}>
                <button className="view-more-btn">View More</button>
              </Link>
            </div>
            <div className="blog-image">
              <img src={blogImage} alt="Data Analysis Tools" />
            </div>
          </div>


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

export default Blog; 