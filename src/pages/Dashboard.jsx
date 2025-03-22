import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CourseThumb from "../assets/CourseThumb.png";
import OnlineClass from "../assets/OnlineClass.png";
import { FaUserCircle } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login', { replace: true });
    }
    document.title = "My Learning Dashboard | Wida";
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="dashboard-container">
      <div className="welcome-header">
        <div className="user-welcome">
          <FaUserCircle className="user-icon" />
          <h2>Welcome back, {user?.displayName || 'Student'}</h2>
        </div>
      </div>

      <section className="my-learning">
        <h3>My Learning</h3>
        <div className="course-progress-card">
          <div className="course-image">
            <img src={CourseThumb} alt="Data Analysis" />
          </div>
          <div className="course-details">
            <h4>Data Analysis</h4>
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div className="progress" style={{width: '15%'}}></div>
              </div>
              <span>Overall Progress</span>
              <span className="progress-percentage">15%</span>
            </div>
            <button className="go-to-course-btn">Go to Course</button>
          </div>
        </div>
      </section>

      <section className="explore-courses">
        <h3>Explore Other Courses</h3>
        <div className="courses-grid">
          <div className="course-card">
            <img src={OnlineClass} alt="Virtual Assistant" />
            <div className="course-info">
              <h4>Virtual Assistant</h4>
              <div className="course-meta">
                <BiTime className="time-icon" />
                <span>8 weeks • 3 certifications planned</span>
              </div>
              <p>A virtual assistant is an advanced or trained person who can work from anywhere in the world providing various business and personal assistance services like administrative support, technical, creative...</p>
              <button className="start-btn">Start Now</button>
            </div>
          </div>

          <div className="course-card">
            <img src={OnlineClass} alt="Cyber Security" />
            <div className="course-info">
              <h4>Cyber Security</h4>
              <div className="course-meta">
                <BiTime className="time-icon" />
                <span>12 weeks • 2 certifications planned</span>
              </div>
              <p>Cybersecurity is the defense against digital threats, protecting computer systems and networks from unauthorized access...</p>
              <button className="start-btn">Start Now</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="dashboard-footer">
        <div className="footer-section">
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Resources</h5>
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Programs</h5>
          <ul>
            <li>Virtual</li>
            <li>Physical</li>
            <li>One on One</li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Subscribe</h5>
          <p>Stay up to date with our latest news and products.</p>
          <button className="subscribe-btn">Sign Up</button>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard; 