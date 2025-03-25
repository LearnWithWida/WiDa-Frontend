import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
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

      <div className='course-cont'> 
        <h1 style={{fontFamily: 'Recoleta', fontSize: '1.4rem', color: '#333', marginBottom: '1.5rem'}}>Explore Other Courses</h1>
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
              <Link to="/cyber-security">
                <button className="Reg">Register</button>
              </Link>
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
              <Link to="/cyber-security">
                <button className="Reg">Register</button>
              </Link>
            </div>
          </div>

        </div>
      </div>


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