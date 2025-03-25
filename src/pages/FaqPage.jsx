import './FaqPage.css';
import { useEffect } from 'react';
import customerService from "../assets/customer-service.png";
import logo from "../assets/WidaLogo.png";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const FaqPage = () => {
  const faqData = [
    {
      icon: <i className="far fa-file-alt"></i>,
      question: "What is data analysis?",
      answer: "Data analysis involves collecting, cleaning, and interpreting data to uncover patterns, trends, and insights that drive decision-making and guide decision-making."
    },
    {
      icon: <i className="fas fa-chart-line"></i>,
      question: "How is data analysis different from data science?",
      answer: "Data analysis focuses on processing and interpreting existing data, while data science includes broader tasks like building predictive models, using machine learning, and working with unstructured data to uncover insights."
    },
    {
      icon: <i className="fas fa-tools"></i>,
      question: "What tools do data scientists use?",
      answer: "Data scientists commonly use tools like Python, R, SQL, Jupyter Notebook, TensorFlow, Tableau, Power BI, and cloud platforms like AWS and Azure."
    },
    {
      icon: <i className="fas fa-chart-bar"></i>,
      question: "Can I become a data analyst or data scientist without a degree?",
      answer: "While a degree can help, many successful data analysts and scientists have learned through online courses, bootcamps, and hands-on projects. Building a strong portfolio is key."
    },
    {
      icon: <i className="far fa-clock"></i>,
      question: "How long does it take to learn data analysis or data science?",
      answer: "Depending on your background, learning data analysis may take 3-6 months, while data science could take 6-12 months or longer to master. Hands-on practice is the key to progress."
    },
    {
      icon: <i className="far fa-file-code"></i>,
      question: "What is data science?",
      answer: "Data science is a multidisciplinary field that uses programming, statistics, machine learning, and domain expertise to extract insights and make predictions from large and complex datasets."
    },
    {
      icon: <i className="fas fa-cog"></i>,
      question: "What skills are required to become a data analyst?",
      answer: "Key skills include proficiency in tools like Excel, SQL, and Python, data visualization, statistical knowledge, and critical thinking to interpret and present data effectively."
    },
    {
      icon: <i className="fas fa-sync"></i>,
      question: "Do I need coding skills for data analysis or data science?",
      answer: "Yes, basic coding skills in languages like Python, R, or SQL are essential, especially for tasks like cleaning data, automating processes, and building machine learning models in data science."
    },
    {
      icon: <i className="far fa-building"></i>,
      question: "What industries hire data analysts and data scientists?",
      answer: "Almost every industry hires data professionals, including finance, healthcare, retail, technology, manufacturing, and consulting."
    },
    {
      icon: <i className="fas fa-chart-pie"></i>,
      question: "What is the career growth potential in data analysis?",
      answer: "Both fields offer strong career growth. Data analysts can advance to senior analyst roles or specialize in business intelligence, while data scientists often move into machine learning engineering, AI research, or leadership roles."
    }
  ];
  useEffect(() => {
    document.title = "FAQs | Wida";
  }, []);
  return (
    <div>
        <div className="scholarship-header">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <p>We’re on a mission to deliver engaging, curated courses at a reasonable price.</p>
      </div>
      <div className="faq-section">
        <h1>Frequently Asked Questions (FAQs)</h1>
        <div className="faq-grid">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-icon">{faq.icon}</div>
              <div className="faq-content">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
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
    </div>
  )
}

export default FaqPage
