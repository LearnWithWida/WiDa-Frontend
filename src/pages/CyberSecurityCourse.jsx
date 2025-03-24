import React from "react";
import "./DataAnalysisCourse.css";
import { FaStar } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import crss from "../assets/crss.png";
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import logo from "../assets/WidaLogo.png";

const CyberSecurityCourse = () => {
    const weekTopic = [
        {
          week: "Week 1",
          topics: [
            "Cybersecurity introduction and overview",
            "Introduction and definition of Cybersecurity",
            "Comparison of Cybersecurity and information security",
            "The objectives of cybersecurity",
            "Cybersecurity roles and Governance",
            "Domains of cybersecurity",
          ],
        },
        {
          week: "Week 2",
          topics: [
            "Network Fundamentals",
            "Networking Components",
            "Ethernet and Internetworks",
            "IP Addressing",
            "IP Subnetting",
          ],
        },
        {
          week: "Week 3",
          topics: [
            "Cybersecurity Concept",
            "Risk management terms, concept and frameworks",
            "Common Attack types and vectors",
            "General process and attributes of cyberattacks",
            "Malware",
            "Framework and guidance for policies and procedure",
            "Cybersecurity control processses",
          ],
        },
        {
          week: "Week 4",
          topics: [
            "Security of networks, system, application and data",
          ],
        },
        {
          week: "Week 5",
          topics: [
            "Lab installation and Setup",
            "Virtualization",
            "Installing Virtualization Software",
            "Installing Guest hosts (Virtual machines)",
            "Connecting and configuring virtual machines networks",
          ],
        },
        {
          week: "Week 6 ",
          topics: [
            "Lab installation and Setup II",
            "Continuation",
          ],
        },
        {
          week: "Week 7",
          topics: [
            "Basic Linux Command",
            "Basic commands Part I",
            "Basic commands Part II",
            "Basic commands Part III",
          ],
        },
        {
          week: "Week 8; Advanced SQL Concepts",
          topics: [
            "Reconnaissance",
            "Information Gathering",
            "Scanning",
            "Social Engineering",
          ],
        },  
        {
          week: "Week 9",
          topics: [
            "Wireless Attacking Theory",
            "Brute forcing",
            "Cracking password using John the Ripper",
            "Cracking Hashes",
            "Making password list with crunch",
            "Preventing Wireless Attacks",
          ],
        },
        {
          week: "Week 10",
          topics: [
            "Man in the middle attack",
            "Concept of MITMA",
            "Vulnerability Assessment Scan",
            "Practical",
          ],
        },
        {
          week: "Week 11",
          topics: [
            "Designing home network",
            "Network devices and configuration",
            "Practical I",
            "Practical II",
          ],
        },
        {
          week: "Week 12",
          topics: [
            "Open Source Intelligence OSINT",
            "Introduction to Malware analysis",
            "Writing Yara rule",
            "Examination",
          ],
        },
      ];
    
      return (
        <div>
          <div className="data-analysis-container">
            <h1>Data Analysis Course</h1>
          </div>
          <div className="data-analysis-content">
            <h1>About this course</h1>
            <p>
            Cybersecurity is the backbone of digital protection, ensuring the safety of networks, systems, and sensitive data from cyber threats like hacking, malware, and ransomware. This course provides an in-depth understanding of cybersecurity principles, covering areas such as ethical hacking, encryption, risk management, and threat detection. With hands-on training, learners will develop the skills needed to identify vulnerabilities, implement security measures, and respond to cyberattacks effectively.
            </p>
            <p>
            Cybersecurity is essential across industries, including finance, healthcare, government, e-commerce, and technology, where protecting sensitive information is a top priority. This course explores real-world applications, from securing financial transactions to defending critical infrastructure and ensuring data privacy in cloud environments. Learners will gain expertise in industry-standard tools and best practices to safeguard digital assets in various sectors.
            </p>
            <p>
            The primary goal of this course is to equip individuals with the knowledge and practical experience needed to combat cyber threats and strengthen digital security. Whether you're an aspiring cybersecurity professional or an IT specialist looking to enhance your skills, this course will prepare you for a future in the ever-evolving field of cybersecurity.
            </p>
            <button className="register-button">Register</button>
          </div>
          <div className="course-thumb">
            <h1>This course includes:</h1>
            <div className="course-tiles">
              <p>Job summit</p>
              <p>Portfolio creation</p>
              <p>Projects</p>
              <p>Live classes</p>
              <p>3 months Learning</p>
              <p>Diploma certification</p>
            </div>
          </div>
          <div className="course-topic">
            <h1>What you'll Learn</h1>
            <p>The course covers a wide range of topics, including:</p>
            <div className="week-topic">
              <div className="week-grid">
                {weekTopic.map((week, index) => (
                  <div key={index} className="week-card">
                    <h3>{week.week}</h3>
                    <ul>
                      {week.topics.map((topic, topicIndex) => (
                        <li key={topicIndex}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="requirement">
            <h1>Requirements</h1>
            <ul>
              <li>
                This course has no skill prerequisites; however, having a basic
                familiarity with computer operations is beneficial.
              </li>
              <li>
                Personal computer—whether it's a Mac, Windows PC, or a Linux machine
              </li>
              <li>
                A stable internet connection is essential for engaging in virtual
                classes, downloading required softwares, and for individual
                practice.
              </li>
              <li>Time</li>
            </ul>
          </div>
          <div className="teacher-container">
          <div className="teachers-info">
            <div className="teacher-info-head">
              <h1>Instructor</h1>
              <h3>Yusuf Mustapha</h3>
              <p>Data Engineer</p>
            </div>
            <div className="teacher-stats">
              <h3>5.3</h3>
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <IoPeopleOutline />
                <p>1,500+ Students</p>
              </div>
            </div>
            <p>Mentor Richards is a skilled Data Analytics professional with a Master's in Big Data Analytics from the University of Derby, UK. He has expertise in various Engineering Tech Stacks, contributing to process optimization and market enhancement for organizations. His strategic approach focuses on promoting business growth and efficiency. Additionally, Richards is committed to knowledge-sharing and continuous learning within the tech community, advancing data analytics and technology.</p>
          </div>
          <div className="teachers-info">
            <div className="teacher-info-head">
              <h1>Reviews</h1>
              <h3>Ghaniyat</h3>
            </div>
            <div className="teacher-stats">
              <h3>5.3</h3>
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
              </div>
            </div>
            <p>I joined Learnwithwida a month after the program started, missing the Excel class. However, I was provided with recorded sessions, which made catching up easy. The structured learning in SQL, Power BI, and introduction to Python was practical and well organized, making it easy to understand. The hands-on approach and the presence of a good tutor helped my understanding despite joining the program late.</p>
          </div>
          <div className="teachers-info">
            <div className="teacher-info-head">
              <h3>Abdulazeez Gunu</h3>
              </div>
            <div className="teacher-stats">
              <h3>5.3</h3>
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p> Learning data analytics with LearnWithWIDA was an eye opening experience. I gained hands-on experience with Excel, SQL, Power BI, and Python. Learning data analytics also made me realize that data analytics is more than just creating dashboards but deriving  meaningful insights from data.</p>
          </div>
          </div>
    
          <div className="contact-content">
            <div className="contact-image">
              <img src={crss} alt="Customer Service" />
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

export default CyberSecurityCourse; 