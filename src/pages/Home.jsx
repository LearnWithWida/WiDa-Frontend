import React, { useState, useEffect } from "react";
import Joyride, { STATUS } from 'react-joyride';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import "./Global.css";
import heroUpgrade from "../assets/heroUpgrade.png";
import Physical from "../assets/Physical.png";
import Virtual from "../assets/Virtual.png";
import Mentorship from "../assets/Mentorship.png";
import analysisOne from "../assets/analysisOne.png";
import analysisTwo from "../assets/analysisTwo.png";
import whyData from "../assets/why-data.png";
import studentImage from "../assets/student.png";
import blogImage from "../assets/blog-img.png";
import logo from "../assets/WidaLogo.png";

const testimonials = [
  {
    id: 1,
    name: "Emma Davis",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "The support from instructors is outstanding. They're always available to help and guide you through complex concepts.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Business Intelligence Analyst",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "The practical assignments and real-world projects helped me apply what I learned immediately in my work. Highly recommended!",
  },
  {
    id: 3,
    name: "Sarah Wilson",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "The course structure is well-organized and the content is up-to-date with current industry standards. Great learning experience!",
  }
];

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

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [runTour, setRunTour] = useState(true);

  const steps = [
    {
      target: '.home-container',
      content: '👋 Welcome to our Data Science Learning Platform! Let us show you around.',
      placement: 'center',
      disableBeacon: true,
    },
    {
      target: '.offer-section',
      content: '🎯 Discover what we offer - from comprehensive courses to hands-on practice.',
      placement: 'bottom',
    },
    {
      target: '.course-section',
      content: '📚 Explore our detailed courses designed to enhance your data science skills.',
      placement: 'top',
    },
    {
      target: '.tryout-section',
      content: '✍️ Practice your skills with our interactive exam simulations.',
      placement: 'top',
    },
    {
      target: '.data-sec',
      content: '👨‍🏫 Get expert mentorship from industry professionals.',
      placement: 'left',
    },
    {
      target: '.Testimonials-section',
      content: '💬 See what our successful students have to say about their learning journey.',
      placement: 'top',
    },
    {
      target: '.FAQ',
      content: '❓ Find answers to common questions about our platform.',
      placement: 'top',
    }
  ];

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      setRunTour(false);
      localStorage.setItem('hasSeenTour', 'true');
    }
  };

  const startTour = () => {
    setRunTour(true);
  };

  const handleInstructorClick = () => {
    navigate("/instructors");
  };
  return (
    <>
      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: '#FF7600',
            backgroundColor: '#ffffff',
            textColor: '#333',
            arrowColor: '#FF7600',
            zIndex: 1000,
          },
          tooltip: {
            padding: '20px',
          },
          buttonNext: {
            backgroundColor: '#FF7600',
          },
          buttonBack: {
            marginRight: 10,
            color: '#FF7600',
          }
        }}
      />

      <button 
        onClick={startTour}
        className="tour-btn"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#FF7600',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        title="Start Website Tour"
      >
        <i className="fas fa-question"></i>
      </button>

      <div className="home-container">
        <div className="content-wrapper">
          <div className="hero-left">
            <h1>
              <span className="highlight">Data</span> is the <span className="highlight">Future</span> and the future is <span className="highlight">NOW!</span>
            </h1>
            <p>
              Dive into our comprehensive suite of tools designed to help you uncover valuable insights, visualize trends, and make informed decisions. Whether you're a novice or an expert, our platform provides intuitive features and robust functionality to support your data exploration journey. Join our community of data enthusiasts today and embark on a voyage of discovery with us!
            </p>
            <div className="button-group">
              <button className="primary-btn">Join Us Now</button>
              <button className="secondary-btn">Explore Course</button>
            </div>
          </div>
          <div className="hero-right">
            <img src={heroUpgrade} alt="Hero" className="hero-image" />
          </div>
        </div>
      </div>

      <div className="offer-section">
        <div className="offer-header">
          <h1>Physical, virtual or Mentorship? Beginner or intermediate?</h1>
          <p>Our courses are tailored to your specific skill level and learning preferences, offering both in-person and online options to suit your needs and lifestyle.</p>
        </div>
        
        <div className="offer-cards">
          {/* First Card */}
          <div className="offer-card">
            <div className="offer-content">
              <h1>Explore Our Physical Courses</h1>
              <p>Experience Immersive Learning: Our In-Person Training Programs Seamlessly Blend Expert Instruction with Practical, Hands-On Experience in a Dynamic and Engaging Classroom Environment.</p>
              <button className="offer-btn">Explore Course</button>
            </div>
            <div className="offer-image">
              <img src={Physical} alt="Physical Course" />
            </div>
          </div>

          {/* Second Card - Reverse */}
          <div className="offer-card reverse">
            <div className="offer-content">
              <h1>Explore Our Virtual Courses</h1>
              <p>Experience Immersive Learning: Our Virtual Training Programs Seamlessly Blend Expert Instruction with Practical, Hands-On Experience in a Dynamic and Engaging Classroom Environment.</p>
              <button className="offer-btn">Explore Course</button>
            </div>
            <div className="offer-image">
              <img src={Virtual} alt="Virtual Course" />
            </div>
          </div>

          {/* Third Card */}
          <div className="offer-card">
            <div className="offer-content">
              <h1>Explore Our Mentorship Program</h1>
              <p>Experience Immersive Learning: Our Virtual Training Programs Seamlessly Blend Expert Instruction with Practical, Hands-On Experience in a Dynamic and Engaging Classroom Environment.</p>
              <button className="offer-btn">Explore Course</button>
            </div>
            <div className="offer-image">
              <img src={Mentorship} alt="Mentorship Program" />
            </div>
          </div>
        </div>
      </div>

      <div className="course-section">
        <div className="course-header">
          <h1>Browse Our Top Courses <br />
          Elevate your skills today!</h1>
        </div>
        
        <div className="course-cards">
          {/* Data Analysis Card */}
          <div className="course-card">
            <img src={analysisOne} alt="Data Analysis" className="course-image" />
            <div className="course-info">
              <div className="course-type">
                <div className="type-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Physical/Online Lecture</span>
                </div>
                <div className="type-item">
                  <i className="far fa-clock"></i>
                  <span>3 months (Installments allowed)</span>
                </div>
              </div>
              <h2>Data Analysis</h2>
              <p>A data analyst collects, processes, and interprets data to help organizations make informed decisions. They use tools like Excel, SQL, Python, and visualization software to uncover patterns and trends, turning raw data into actionable insights. Strong analytical, statistical, and communication skills are essential for success in this field.</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>

          {/* Data Science Card */}
          <div className="course-card">
            <img src={analysisTwo} alt="Data Science" className="course-image" />
            <div className="course-info">
              <div className="course-type">
                <div className="type-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Physical/Online Lecture</span>
                </div>
                <div className="type-item">
                  <i className="far fa-clock"></i>
                  <span>3 months (Installments allowed)</span>
                </div>
              </div>
              <h2>Data Science</h2>
              <p>Data science is the field of using programming, statistics, and machine learning to analyze and interpret large datasets. It focuses on extracting valuable insights and solving problems by turning raw data into actionable knowledge.</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
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
            <h1>Why Data?</h1>
            <p>Data science is a broad field focused on extracting insights from data using techniques like machine learning, programming, and statistics. Data analysis is a key part of data science, involving the collection, cleaning, and interpretation of data to identify trends and support decision-making. Together, they turn raw data into actionable knowledge.</p>
            <Link to="/ExamCourse">
              <button className="tryout-btn">Explore Course</button>
            </Link>
          </div>
        </div>
      </div>
      
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
            <h3 className="student-name">Abdurrazzaq Abdulmuhsin B.</h3>
            <p className="student-course">Data Science</p>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="testimonial-text">
              The data science course exceeded my expectations. The instructors were knowledgeable and supportive, and the content was both challenging and rewarding. I've already started applying what I learned in my job!
            </p>
          </div>

          <button className="slider-arrow next">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
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
      <div className="feedback-container">
        <h1>Press & Blog Posts</h1>
        
        <div className="blog-grid">
          {/* First Blog Post */}
          <div className="blog-post">
            <div className="blog-content">
              <span className="blog-date">01 Feb 2025</span>
              <h2>Data Analysis vs. Data Science: What's the Difference?</h2>
              <p>Clarify the distinction between data analysis (focused on interpreting existing data) and data science (broader, including predictive modeling and machine learning).</p>
              <button className="view-more-btn">View More</button>
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
              <button className="view-more-btn">View More</button>
            </div>
            <div className="blog-image">
              <img src={blogImage} alt="Data Analysis Tools" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-left">
          <img src={logo} alt="IDA Logo" className="footer-logo" />
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
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>About</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>Login</li>
              <li>Scholarship</li>
              <li>Contact Us</li>
              <li>Testimonials</li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Programs</h3>
            <ul>
              <li>Virtual</li>
              <li>Physical</li>
              <li>Mentorship</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
