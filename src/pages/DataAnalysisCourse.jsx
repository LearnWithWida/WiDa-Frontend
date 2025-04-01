import "./DataAnalysisCourse.css";
import { FaStar } from "react-icons/fa6";
import { IoPeopleOutline } from "react-icons/io5";
import crss from "../assets/crss.png";
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import logo from "../assets/WidaLogo.png";
import { useState } from 'react';
import PaymentModal from '../components/PaymentModal';

const DataAnalysisCourse = () => {
  const [showPayment, setShowPayment] = useState(false);

  const weekTopic = [
    {
      week: "Week 1",
      topics: [
        "Introduction to Data Analytics",
        "Introduction to excel",
        "Editing Options",
        "Formatting",
        "Conditional Formatting",
        "Copy and Fill Options",
        "Basic Formulas",
        "Basic Functions",
      ],
    },
    {
      week: "Week 2",
      topics: [
        "Conditional Functions",
        "String Functions",
        "Date Functions",
        "Logical Functions",
        "Sorting and Filtering",
        "Cell Referencing",
        "Absolute and Relative referencing",
        "index and Match",
      ],
    },
    {
      week: "Week 3",
      topics: [
        "Vlook, Hlook up, Xlook up",
        "Nested Lookup",
        "Introduction to power query",
        "Data Import and connections",
        "Data clearing and transformation",
        "Advanced Data transformation",
        "Merging and Appending Queries",
      ],
    },
    {
      week: "Week 4",
      topics: [
        "Fundamental of Data Visualization",
        "Charts and Graphs",
        "Advanced visualization techniques",
        "Data storytelling",
        "Formatting charts",
      ],
    },
    {
      week: "Week 5; Introduction to SQL",
      topics: [
        "What is SQL?",
        "Databases and Relational Database Management Systems (RDBMS)",
        "SQL syntax and structure",
        "Types of SQL commands: DDL, DML, DQL, DCL, TCL.",
        "Setting up a SQL environment (PostgreSQL, MySQL, or SQL Server)",
        "Data Retrieval Using SELECT",
        "SELECT statement basics",
        "Filtering with WHERE",
        "Sorting data with ORDER BY",
        "Using DISTINCT to remove duplicates",
        "Column aliasing with AS",
      ],
    },
    {
      week: "Week 6; Working with SQL Functions",
      topics: [
        "String functions (LOWER)(), UPPER(), SUBSTRING(), TRIM(), e.t.c",
        "Numeric functions (ROUND(), CEIL(), FLOOR(), e.t.c",
        "Date and time functions (NOW(), DATEADD(), DATEDIFF(), e.t.c)",
        "Aggregation and Grouping",
        "Aggregate functions (COUNT(), SUM(), AVG(), MIN(), MAX())",
        "GROUP BY and HAVING clauses",
        "Combining filters with HAVING and WHERE",
        "Joins and Subqueries",
        "Understanding relationships in databases",
        "Types of joins: INNER JOIN, LEFT JOIN. RIGHT JOIN, FULL OUTER JOIN, CROSS JOIN",
        "Using subqueries (EXISTS, IN, NOT IN)",
        "Correlated subqueries",
      ],
    },
    {
      week: "Week 7; Data Modification Commands",
      topics: [
        "Inserting data (INSERT INTO)",
        "Updating records (UPDATE)",
        "Deleting records (DELETE)",
        "Truncating vs. Deleting data",
        "Window Function & CTEs",
        "Introduction to window functions (ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE())",
        "Using PARTITION BY for advanced analytics",
        "Common Table Expressions (CTEs) vs. Subqueries",
      ],
    },
    {
      week: "Week 8; Advanced SQL Concepts",
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
        "Overview of Power BI and its components",
        "Power BI Desktop vs. Power BI Service vs. Power BI Mobile",
        "Installing and setting up Power BI",
        "Connecting to different data sources",
        "Data Preparation & Transformation (Power Query)",
        "Importing dat from Excel, SQL, and Web",
        "Data cleaning and transformation techniques",
        "Merging and appending queries",
        "Handling missing and duplicate data",
        "Column splitting and grouping",
      ],
    },
    {
      week: "Week 10; Data Modeling in Power BI",
      topics: [
        "Understanding relationships between tables",
        "Star and Snowflake schema concepts",
        "Creating calculated columns and measures",
        "Optimizing model performance DAX (Data Analysis Expressions)",
        "Introduction to DAX",
        "Basic functions: SUM, AVERAGE, COUNT, DISTINCT",
        "Logical functions: IF, SWITCH",
        "Time intelligence functions: TOTALYTD, SAMEPERIODLASTYEAR",
        "Advanced DAX: Variables, CALCULATE, FILTER",
      ],
    },
    {
      week: "Week 11; Maps, KPI cards, and custom visuals",
      topics: [
        "Conditional formatting and tooltips",
        "Power BI Service & Sharing Reports",
        "Publishing reports to Power BI Service",
        "Creating dashboards",
        "Row-Level Security (RLS)",
        "Power BI Workspaces and sharing reports",
      ],
    },
    {
      week: "Week 12; Automation & Performance Optimization",
      topics: [
        "Scheduled data refresh",
        "Performance tuning techniques",
        "Query folding and optimizing DAX querie",
        "Power BI Integration and Advanced Features",
        "Integrating Power BI with Excel, power Automate, and Power Apps",
        "Embedding Power BI reports in websites",
        "AI features in Power BI (Cognitive Services, Smart Narratives)",
      ],
    },
    {
      week: "Week 13; Python Fundamentals for Data Analysis",
      topics: [
        "Setting up Python and Jupyter Notebook",
        "Python basics: variables, data types, and basic operations",
        "Control structures: Conditional statements and loops",
        "Functions and list comprehensions",
        "Introduction to NumPy: Arrays, indexing, slicing, and basic operations",
        "Introduction to Pandas: Series and DataFrames, loading data from CSV/Excel",
        "Basic data manipulation: Filtering, sorting, and aggregations",
      ],
    },
    {
      week: "Week 14; Data Wrangling, Visualization, and Exploration",
      topics: [
        "Advanced Pandas: Handling missing data, merging, and groupby operations",
        "Data visualization with Matplotlib & Seaborn: Line plots, bar charts, histograms, scatter plots",
        "Exploratory Data Analysis (EDA) techniques",
        "File handling: Reading/writing CSV and excel files",
        "Introduction to SQL in Python (using SQLite or Pandas)",
        "Mini data analysis project (real-world dataset)",
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
        <button 
          className="register-button" 
          onClick={() => setShowPayment(true)}
        >
          Register Now
        </button>
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

      {showPayment && (
        <PaymentModal 
          amount={50000}
          courseName="data-analysis"
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
};

export default DataAnalysisCourse;
