import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import "./Global.css";
import heroUpgrade from "../assets/heroUpgrade.png";
import Physical from "../assets/Physical.png";  
import Virtual from "../assets/Virtual.png";
import OneOnOne from "../assets/OneOnOne.png";
import Mentorship from "../assets/Mentorship.png";
import analysisOne from "../assets/analysisOne.png";
import analysisTwo from "../assets/analysisTwo.png";
import whyData from "../assets/why-data.png";
import studentImage from "../assets/student.png";
import blogImage from "../assets/blog-img.png";
import logo from "../assets/WidaLogo.png";
import { BsBriefcase } from 'react-icons/bs';
import { BsShield } from 'react-icons/bs';
import { BsGraphUp } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { HiAcademicCap } from 'react-icons/hi';
import { BsCheckCircle } from 'react-icons/bs';
import { RiUserStarLine } from 'react-icons/ri';
import { TbCertificate } from 'react-icons/tb';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import '../styles/CourseCards.css';
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

const programsData = [
  {
    id: 1,
    title: "Physical Program",
    description: "Learn in a traditional classroom setting with direct instructor interaction.",
    image: Physical,
    link: "/physical-program"
  },
  {
    id: 2,
    title: "Virtual Program",
    image: Virtual,
    description: "Learn data analytics from anywhere with our virtual program. Gain hands-on experience with real-world projects and develop industry-relevant skills through guidance from the comfort of your home.",
    link: "/programs/virtual"
  },
  {
    id: 3,
    title: "One-on-One Program",
    image: OneOnOne,
    description: "Learn data analytics at your own pace with our personalized one-on-one program. Get customized guidance and lessons tailored just for you.",
    link: "/programs/one-on-one"
  },
  {
    id: 4,
    title: "Mentorship",
    image: Mentorship,
    description: "Accelerate your data analytics journey with our mentorship program. Get guidance from industry experts, experienced analysts, receive career advice, and work on real projects to build your portfolio and boost your confidence in the field.",
    link: "/programs/mentorship"
  }
];

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [runTour, setRunTour] = useState(true);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleInstructorClick = () => {
    navigate("/instructors");
  };

  const checkScrollPosition = (container) => {
    const isStart = container.scrollLeft === 0;
    const isEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth;
    
    setIsAtStart(isStart);
    setIsAtEnd(isEnd);
  };

  const handleScroll = (direction) => {
    const container = document.querySelector('.course-cards');
    const scrollAmount = container.offsetWidth;
    
    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }

    // Check position after scroll animation
    setTimeout(() => checkScrollPosition(container), 500);
  };

  useEffect(() => {
    const container = document.querySelector('.course-cards');
    checkScrollPosition(container);
    
    // Add scroll event listener
    container.addEventListener('scroll', () => checkScrollPosition(container));
    
    return () => {
      container.removeEventListener('scroll', () => checkScrollPosition(container));
    };
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <div className="hero-left">
          <h1>
            Unlock Limitless <span className="highlight">Learning</span> - Learn a <span className="highlight">Tech Skill</span> & Transform your Future.
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

      <section className="program-section">
        <h2 className="section-title">Perfect Program for Your Learning Journey</h2>
        <p className="section-subtitle">
          Flexible programs tailored to your journey. From Physical classes to virtual learning and one-on-one mentorship,
          our programs are designed to fit your needs and help you achieve your goals
        </p>

        <div className="program-cards">
          {programsData.map((program) => (
            <div key={program.id} className="program-card">
              <img src={program.image} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <Link to={program.link} className="learn-more">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>

      <div className="course-section">
        <div className="course-header">
          <h1>Browse Our Top Courses <br />
          Elevate your skills today!</h1>
          <div className="course-navigation">
            <button 
              className="nav-arrow prev" 
              onClick={() => handleScroll('left')}
              disabled={isAtStart}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              className="nav-arrow next" 
              onClick={() => handleScroll('right')}
              disabled={isAtEnd}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
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
              <p>A data analyst collects, processes, and interprets data to help organizations make informed decisions. They use tools like Excel, SQL, Python, and visualization software.</p>
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
              <p>Data science is the field of using programming, statistics, and machine learning to analyze and interpret large datasets. Perfect for those interested in AI and ML.</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>

          {/* Cyber Security Card */}
          <div className="course-card">
            <img src={analysisOne} alt="Cyber Security" className="course-image" />
            <div className="course-info">
              <div className="course-type">
                <div className="type-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Physical/Online Lecture</span>
                </div>
                <div className="type-item">
                  <i className="far fa-clock"></i>
                  <span>4 months (Installments allowed)</span>
                </div>
              </div>
              <h2>Cyber Security</h2>
              <p>Master cybersecurity fundamentals and advanced techniques. Learn to protect systems, networks, and data from cyber threats. Develop skills in security protocols.</p>
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
            <h1>Why Learn a Tech Skill?</h1>
            <p className="tryout-subtitle">
              Technology drives decision-making, innovation, and growth across every industry. It's about collecting real-world data, uncovering patterns, and enabling impactful decisions.
            </p>
            <div className="tech-benefits">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsBriefcase />
                </div>
                <div className="benefit-text">
                  <h3>Diverse Career Paths</h3>
                  <p>A career in Tech opens doors to various industries, including healthcare, finance, e-commerce, marketing, sales and more.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsShield />
                </div>
                <div className="benefit-text">
                  <h3>Growing Industry with Job Security</h3>
                  <p>Tech careers offer a steady expanding marketplace with job security and long-term career prospects.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsGraphUp />
                </div>
                <div className="benefit-text">
                  <h3>Making an Impact</h3>
                  <p>Help organizations make informed decisions that can improve products, services, and customer experiences.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <BsCurrencyDollar />
                </div>
                <div className="benefit-text">
                  <h3>Attractive Salaries and Benefits</h3>
                  <p>Tech professionals command some of the highest-paying job salaries. Roles such as data analyst, cyber security & virtual assistant rank among the highest-paying jobs.</p>
                </div>
              </div>
            </div>
            <Link to="/ExamCourse">
              <button className="tryout-btn">Explore Courses</button>
            </Link>
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
            <h3>Comprehensive Exam & Certification Platform</h3>
            <p>We provide practice exams and professional assessments to help students test their knowledge and showcase their expertise.</p>
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

          {/* Third Blog Post */}
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
  );
};

export default Home;
