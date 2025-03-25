import { useEffect } from "react";
import instructor from "../assets/instructor.jpg";
import instructor2 from "../assets/instructor2.jpg";
import "../pages/Global.css";
import officeImage from "../assets/office.png";
import logo from "../assets/WidaLogo.png";
import { HiOutlineAdjustments } from 'react-icons/hi';
import { BsClipboardCheck } from 'react-icons/bs';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';

const About = () => {

  useEffect(() => {
    document.title = "About Us | Wida"  ;
  }, []);
  return (
    <div className="about-container">
      <div className="company-overview">
        <h1>COMPANY OVERVIEW</h1>
        <p>
          LearnWithWIDA is a leading provider of comprehensive data analysis and research education aimed at equipping 
          individuals with tools and knowledge to succeed. While data plays a crucial role in guiding business decisions, 
          bridging the gap in digital skills has never been more critical in data analytics. Through this, we provide the 
          structure and tools needed to help students and professionals worldwide.
        </p>
      </div>

      <div className="mission-goals">
        <div className="goal-section">
          <div className="goal-header">
            <HiOutlineAdjustments className="icon" />
            <h2>Our Goal</h2>
          </div>
          <p>
            Our goal is to provide quality data analysis and research education to 
            individuals by providing well-detailed and practical approach to data 
            analysis and research. Our aim is to create a thriving ecosystem 
            where students can learn and grow while making impact in their 
            various fields on what they have learnt today.
          </p>
        </div>

        <div className="mission-section">
          <div className="goal-header">
            <BsClipboardCheck className="icon" />
            <h2>Our Mission</h2>
          </div>
          <p>
            To empower aspiring and professional data analysts with the 
            knowledge and skills needed to excel in their careers and make 
            impact. We are committed to building a community where 
            students can learn, grow and achieve their career goals.
          </p>
        </div>
      </div>

      <div className="teaching-approach">
        <div className="approach-content">
          <h2>Our Approach To Teaching</h2>
          <p>
            At LearnWithWIDA, we offer structured and interactive learning to 
            help students succeed. Our teaching style (MS, Power BI, Excel, 
            Python, SQL, etc.) is designed to help students understand concepts 
            and implement, ensuring students gain real-life knowledge for 
            career prospects.
          </p>
          <h3>We Focus On:</h3>
          <ul>
            <li>Live and recorded sessions for flexible learning</li>
            <li>Mentorship programs where students get certifications</li>
            <li>Real world projects to build confidence and competence</li>
            <li>Building a community of data analysts to help improve career prospects.</li>
          </ul>
        </div>
        <div className="approach-image">
          <img src={officeImage} alt="Office Environment" />
        </div>
      </div>

      <div className="team-section">
        <div className="team-members">
          <div className="team-member">
            <img src={instructor} alt="Yusuf Mustapha" />
            <h3>YUSUF MUSTAPHA</h3>
            <p>Founder</p>
          </div>

          <div className="team-content">
            <h2>OUR TEAM</h2>
            <p className="team-description">
              LearnwithWiDa is co-founded by Yusuf Mustapha and Ibrahim Muiz, two passionate educators and 
              data professionals committed to empowering the next generation of analysts. Today, our team 
              consists of 5 permanent staff members and 5 interns, totaling 10 dedicated professionals 
              working together to ensure high-quality education and mentorship.
            </p>
          </div>

          <div className="team-member">
            <img src={instructor2} alt="Ibrahim Muiz" />
            <h3>IBRAHIM MUIZ</h3>
            <p>Co-Founder</p>
          </div>
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

export default About;
