import "./DataAnalysisCourse.css";
import { FaStar } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import crss from "../assets/crss.png";
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import logo from "../assets/WidaLogo.png";
import "./VirtualAssistantCourse.css";  
const VirtualAssistantCourse = () => {
    const weekTopic = [
        {
          week: "Week 1; Introduction to Virtual Assistance",
          topics: [
            "1.1 Understanding the VA Role",
            "Who is a Virtual Assistant?",
            "Different Types of Virtual Assistant",
            "The Benefits & Challenges of Being a VA",
            "1.2 Essential Skills for a Virtual Assistant",
            "Time Management & Organization",
            "Strong communication Skills",
            "Basic Tech Knowledge (Cloud-Based Tools, CRMs, Automation)",
            "Problem-Solving and Critical Thinking",
            "1.3 Understanding Client Needs & Business Structure",
            "Identifying Business Needs as a VA",
            "Defining your VA Niche",
            "Setting up your Business (Freelance vs. Agency)",
            "Pricing your services & Payment Methods",
          ],
        },
        {
          week: "Week 2-3; Productivity & Task Management",
          topics: [
            "2.1 Task & Project Management Tools",
            "Google calendar, Outlook Calendar -> Scheduling Meetings & Appointments",
            "Asana, Trello, Notion -> Organizing Tasks & Workflows",
            "Trello for Beginners -> Creating Boards, Lists, and Cards",
            "Asana for Teamwork -> Task Assignments, Workflow Automation",
            "2.2 Calendar & Scheduling Mastery",
            "Google Calendar vs. Outlook Calendar -> Scheduling Meetings & Appointments",
            "Setting Up Recurring Events, Time Blocks, & Reminders",
            "Syncing Calendars with Task Management Tools",
            "2.3 Documentation & Note-Taking Systems",
            "Notion for Documentation -> Creating knowledge Basses & Client SOPs",
            "Google Docs vs. Notion -> When to use Each Tools",
          ],
        },
        {
          week: "Week 4-5; Communication & Collaboration Tools",
          topics: [
            "3.1 Professional Email & Chat Management",
            "Google Workspace (Gmail, Drive, Meet) vs. Outlook -> Best Practices for Email Management",
            "Managing Inbox Overload -> Using Filters, Labels, and Priority Emails",
            "Drafting & Automating Emails for Clients",
            "3.2 Virtual Meetings & Video Conferencing",
            "Using Google Meet, Zoom, Microsoft Teams for Client Meetings",
            "Setting Up Calendar invites for Calls & Follow-ups",
          ],
        },
        {
          week: "Week 6-7; Website & Content Management",
          topics: [
            "4.1 WordPress Basics for VAs",
            "Setting Up a WordPress Website",
            "Managing Blog Posts & Pages",
            "Basic SEO for Content Management",
            "4.2 Email Marketing & Campaign Management",
            "Zoho Campaigns -> Creating & Managing Email Campaigns",
            "Understanding Email Sequences & Automations", 
          ],
        },
        {
          week: "Week 8-9; CRM & Lead Generations",
          topics: [
            "5.1 Introduction to CRM & Lead management",
            "Apollo.io, HubSpot, Zoho CRM -> Finding & managing Leads]",
            "Automating Outreach & Email Follow-ups",
          ],
        },
        {
          week: "Week 10-11; Social Media & Marketing Support",
          topics: [
            "6.1 Social Media Management for Clients",
            "Planning & Scheduling Content Using Trello & Asana",
            "Scheduling Tools Overview: Hootsuite, Buffer, Meta Business Suite",
            "6.2 Zoho Campaigns for Email & Social Media",
            "Integrating Email & Social Campaigns for Clients",
            "Managing Multiple Platforms Efficiently",
          ],
        },
        {
          week: "Week 7; Data Modification Commands",
          topics: [
            "7.1 Finding VA Jobs & clients",
            "Freelance Platforms ( Upwork, Fiverr, PeoplePerHour)",
            "Cold Outreach & Networking Strategies",
          ],
        },
        {
          week: "Week 14-15; Advanced Automation & AI for VAs",
          topics: [
            "Using CASE statements",
            "Recursive CTEs",
            "Pivot and Unpivot operations",
            "Indexing for performance optimization",
            "Transactions and rollback",
            "SQL for Data Analysis (Using Superstore Dataset)",
            "Writing complex queries for business insights",
            "Customer segmentation",
            "Sales trends and performance analysis",
            "Inventory management queries",
            "Building reports with SQL",
          ],
        },
        {
          week: "Week 9; Introduction to power BI",
          topics: [
            "8.1 Automating Workflows with Zapier & IFTTT",
            "Connecting Apps & Automating Repetitive Tasks",
            "8.2 AI Tools for Virtual Assistants",
            "AI-Powered Scheduling & Email Drafting",
            "Using Chatbots & AI-driven CRM Tools",
          ],
        },
        {
          week: "Final Project & Certification",
          topics: [
            "Real-world client simulation",
            "Final assessment & Certification",
          ],
        },
      ];
    
      return (
        <div>
          <div className="data-analysis-container">
            <h1>VIRTUAL ASSISTANT</h1>
          </div>
          <div className="data-analysis-content">
            <h1>About this course</h1>
            <p>
            Virtual learning is transforming education, making knowledge accessible anytime, anywhere. This course provides a comprehensive understanding of online learning strategies, digital tools, and interactive teaching methods that enhance engagement and effectiveness. From self-paced modules to live virtual sessions, learners will explore the flexibility and convenience of digital education while developing essential skills for success in an online learning environment.
            </p>
            <p>
            Virtual learning is widely used in various fields, including higher education, corporate training, skill development, and professional certifications. It enables students, educators, and professionals to access high-quality content, collaborate remotely, and leverage technology-driven learning solutions. This course covers best practices in virtual instruction, student engagement techniques, and the integration of multimedia and AI-driven learning tools to create a dynamic educational experience.
            </p>
            <p>
            The goal of this course is to equip learners with the knowledge and skills needed to navigate and excel in virtual learning environments. Whether you are an educator looking to enhance your online teaching methods, a student seeking to maximize your digital learning experience, or a professional aiming to upskill remotely, this course will help you adapt to the evolving world of online education.
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

export default VirtualAssistantCourse; 