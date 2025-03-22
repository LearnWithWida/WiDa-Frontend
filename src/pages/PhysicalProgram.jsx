import React, { useEffect } from 'react';
import Physical from "../assets/Physical.png";
import OnlineClass from "../assets/OnlineClass.png";
import Instructor from "../assets/instructor.png";
import studentImage from "../assets/student.png";
import logo from "../assets/WiDalogo.png";
import { HiAcademicCap } from "react-icons/hi";
import { BsCheckCircle } from "react-icons/bs";
import { RiUserStarLine } from "react-icons/ri";
import { TbCertificate } from "react-icons/tb";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import whyData from "../assets/why-data.png";
import CourseThumb from "../assets/CourseThumb.png";
  

const PhysicalProgram = () => {
  useEffect(() => {
    document.title = "Physical Program | Wida";
  }, []);

  return (
    <div className="physical-program-container">
      <div className="scholarship-header">
        <h1>PHYSICAL PROGRAM</h1>
        <p>Our in-person Tech program offers hands-on training, expert-led sessions, and collaborative learning experiences.</p>
      </div>
      
      <div className='course-cont'> 
        <div className="course-card-container">
          {/* Data Analysis Card */}
          <div className="course-card-wrapper">
            <img src={CourseThumb} alt="Data Analysis" />
            <div className="metas">
              <p><i className="far fa-calendar"></i>3 months (12 Weeks)</p>
              <p><i className="far fa-clock"></i>Mon, Tues & Fri.</p>
            </div>
            <div className="course-infomation">
              <h2>Data Analysis</h2>
              <p>A data analyst collects, processes, and interprets data to help organizations make informed decisions. They use tools like Excel, SQL, Python, and visualization software to uncover patterns and trends, turning raw data into actionable insights. Strong analytical, statistical, and communication skills are essential for success in this field.</p>
              <h3>₦100,000</h3>
              <button className="Reg">Register</button>
            </div>
          </div>

          {/* Data Science Card */}
          <div className="course-card-wrapper">
            <img src={OnlineClass} alt="Data Science" />
            <div className="metas">
              <p><i className="far fa-calendar"></i>4 months (16 Weeks)</p>
              <p><i className="far fa-clock"></i>Mon, Wed & Fri.</p>
            </div>
            <div className="course-infomation">
              <h2>Cyber Security</h2>
              <p>Cybersecurity is the defense against digital threats, protecting data, networks, and systems from hacking, malware, and breaches. It ensures privacy, integrity, and reliability through encryption, firewalls, AI-driven security, and proactive threat detection, keeping the digital world safe and resilient.</p>
              <h3>₦100,000</h3>
              <button className="Reg">Register</button>
            </div>
          </div>

        </div>
      </div>
      <section className="why-study-section">
        <h2>Why Study with Us</h2>
        <p className="study-subtitle">
          Gain cutting-edge tech skills, hands-on experience, and expert guidance. Stay ahead in the digital world with industry-driven learning! 🚀
        </p>
        
        <div className="study-grid">
          <div className="study-card">
            <div className="study-icon">
              <HiAcademicCap />
            </div>
            <h3>Project-based Learning Approach</h3>
            <p>We don't just teach theory—we emphasize real-world applications using industry-standard projects, case studies and solving business problems that mirror industry challenges.</p>
          </div>
          
          <div className="study-card">
            <div className="study-icon">
              <BsCheckCircle />
            </div>
            <h3>Job Readiness Focus</h3>
            <p>Our courses are designed to equip students with the exact skills employers look for, making them job-ready upon completion.</p>
          </div>
          
          <div className="study-card">
            <div className="study-icon">
              <RiUserStarLine />
            </div>
            <h3>Personalized Mentorship</h3>
            <p>Unlike many other platforms, we offer one-on-one mentorship, guiding our students through their learning journey.</p>
          </div>
          
          <div className="study-card">
            <div className="study-icon">
              <TbCertificate />
            </div>
            <h3>Comprehensive Certification</h3>
            <p>We provide professional assessments to help students showcase their expertise.</p>
          </div>
        </div>
      </section>
      <section>
        <h1>Meet our instructors</h1>
      <div className="image-data">
              <img src={whyData} alt="Why Data Science" className="tryout-image" />
              <div className="youtube-play-icon">
                <i className="fab fa-youtube"></i>
              </div>
            </div>
      </section>
      <div className="testimonials-section">
        <h1>What Our Students have to say</h1>
        <p className="testimonial-subtitle">
          Discover the profound reflections shared by our mentees as they articulate their experiences with our exceptional learning proceedings.
        </p>
        
        <div className="testimonial-slider">
          <button className="slider-arrow prev">
            <i className="fas fa-arrow-left"></i>
          </button>
          
          <div className="testimonial-content">
            <img 
              src={studentImage} 
              alt="Student" 
              className="student-image"
            />
            <h3 className="student-name">Ajetunbomi Abdulwasiu</h3>
            <p className="student-course">Data Analysis</p>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-text">
            The best I did for myself was learn from WiDA Analytics. In September last year, I enrolled for the 3rd cohort of WiDa Analytics to learn Data Analysis. this was the best decision for me as I was exposed to the practical way of using ; Excel, SQL, PowerBI, and Python. After rigorous learning coupled with hand-on assignments and project work, I successfully built my personal project thanks to our tutor's effective way of teaching
            I recommend learning data analysis from WiDa Analytics for anyone who wants to take up the journey of Data Analysis, and definitely you will not regret it. 
            </p>
          </div>

          <button className="slider-arrow next">
            <i className="fas fa-arrow-right"></i>
          </button>
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
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
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
  );
};

export default PhysicalProgram; 