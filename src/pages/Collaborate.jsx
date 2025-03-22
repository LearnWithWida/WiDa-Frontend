import React, { useEffect } from 'react';
import logo from "../assets/WidaLogo.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import collaborateImg from "../assets/collaborate-img.png";
import whyData from "../assets/why-data.png";
import { BsBriefcase } from 'react-icons/bs';
import { BsShield } from 'react-icons/bs';
import { BsGraphUp } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Collaborate = () => {
  useEffect(() => {
    document.title = "Collaborate With Us | Wida";
  }, []);

  const collaborationBenefits = [
    {
      title: "Knowledge Sharing",
      description: "Collaborate with us to gain knowledge and expertise in various data analysis and research"
    },
    {
      title: "Building a Stronger Community",
      description: "Join us in fostering a vibrant community of learners and professionals"
    },
    {
      title: "Driving Innovation in Learning",
      description: "Help shape the future of data education through innovative approaches"
    },
    {
      title: "Creating Lasting Opportunities",
      description: "Open doors to new possibilities and career paths in the data science field"
    }
  ];

  return (
    <div className="collaborate-container">
      <div className="collaborate-header">
        <h1>COLLABORATE WITH US</h1>
        <p>Join us in shaping the future! We provide the support, tools, and opportunities you need to innovate, grow, and succeed in today's data-driven digital landscape.</p>
      </div>

      <div className="partner-section">
        <div className="partner-content">
          <h2>Become a Partner</h2>
            <p>Step into the forefront of online education with LearnwithWiDa!</p>
            <br />
            <br />
            <p>Your collaboration will help shape the future of learning in Africa and beyond. Together, we're equipping the younger generation of leaders with the knowledge, skills, and resources to excel and stay relevant in a rapidly evolving world. Through innovative learning experiences, mentorship, and industry-aligned programs, we are preparing learners for real-world opportunities.</p>
            <br />
            <br />
            <p>LearnwithWiDa is committed to empowering individuals with the tools they need to thrive in their careers and personal growth. By working together, we can bridge the gap between education and opportunity, fostering a community of lifelong learners and future leaders.</p>
        </div>
        <div className="partner-image">
          <img src={collaborateImg} alt="Collaboration" />
        </div>
      </div>

     
        <div className="tryout-section">
        <div className="tryout-card">
          <div className="tryout-image-wrapper">
            <div className="image-container">
              <img src={whyData} alt="Why Data Science" className="tryout-image" />
              <div className="youtube-play-icon">
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <div className="tryout-content">
            <h1>Why Collaborate with Us</h1>
            <p className="tryout-subtitle">
            Collaboration fuels innovation, and together, we can create meaningful change. By joining forces, we can empower learners, drive opportunities, and build a future where knowledge leads to success. Let’s shape the next generation of leaders and innovators while growing together in the ever-evolving world of education and technology.
            </p>
            <br />
            <p style={{fontWeight: '400', color: '#FFFFFF', fontFamily: 'Recoleta', fontSize: '20px'}}>How We Make a Difference:</p>
            <div className="tech-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsBriefcase />
                </div>
                <div className="benefit-text">
                  <h3>Empowering Future Leaders </h3>
                  <p>Provide learners with the skills, knowledge, and opportunities to thrive in their careers and beyond.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsShield />
                </div>
                <div className="benefit-text">
                  <h3>Building a Stronger Community</h3>
                  <p>Join us in fostering a vibrant community of learners and professionals.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsGraphUp />
                </div>
                <div className="benefit-text">
                  <h3>Driving Innovation in Learning</h3>
                  <p>Leverage cutting-edge technology and modern learning methods to enhance education and skill development.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsCurrencyDollar />
                </div>
                <div className="benefit-text">
                  <h3>Creating Lasting Opportunities</h3>
                  <p>Open doors for learners through mentorship, internships, and real-world experiences that drive career success. </p>
                </div>
              </div>
            </div>
            <Link to="/ExamCourse">
              <button className="tryout-btn">Partner with Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="contribution-section">
        <h2>Want to Make a Difference? A Small Contribution Can Change a Life!</h2>
        <p>As a sponsor of LearnwithWiDa Scholarships, you have the opportunity to be part of the exciting technology revolution shaping the future. By supporting our program, you are investing in the education and growth of learners who will lead this transformation.</p>
        <br />
        <p>At LearnwithWiDa, our goal is to empower individuals with the skills and knowledge needed to excel across various industries, and your support will play a crucial role in making that a reality. Partner with us today and help shape the future of technology by establishing a Scholarship Fund at LearnwithWiDa!</p>
        <button className="donate-btn">Partner with Us</button>
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

export default Collaborate; 