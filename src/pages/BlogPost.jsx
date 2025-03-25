import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import heroUpgrade from "../assets/heroUpgrade.png";
import diff from "../assets/diff.png";
import analysisTwo from "../assets/analysisTwo.png";

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    document.title = "Blog Post | Wida";
  }, []);

  return (
    <div className="blog-post-container">
      <div className="blog-post-content">
        <div className="blog-post-image">
          <img src={heroUpgrade} alt="Data Analysis vs Science" style={{minWidth: '1500px'}}/>
        </div>

        <div className="blog-post-text">
          <span className="blog-post-date">01 Feb 2025</span>
          <h1>Data Analysis vs. Data Science: What's the Difference?</h1>
          <p>In today's data-driven world, both data analysis and data science play a crucial role in extracting insights and driving decision-making. However, while the two fields share some similarities, they have distinct differences in scope, tools, and objectives. Understanding these differences can help individuals and businesses leverage data more effectively.</p>
        </div>

        <div className="blog-sections">
          <section>
            <h2>What is Data Analysis?</h2>
            <p>Data analysis focuses on processing and performing statistical analysis on existing datasets. Data analysts concentrate on creating methods to capture, process, and organize data to uncover actionable insights for current problems.</p>
            <h3>Key Responsibilities of a Data Analyst:</h3>
            <ul>
              <li>Collecting data from various sources</li>
              <li>Cleaning and validating data for accuracy</li>
              <li>Analyzing data to identify patterns</li>
              <li>Creating reports and visualizations</li>
              <li>Providing actionable insights to stakeholders</li>
            </ul>
          </section>

          <div className="section-image">
            <img src={heroUpgrade} alt="Data Science Illustration" />
          </div>

          <section>
            <h2>What is Data Science?</h2>
            <p>Data science encompasses a broader field that involves advanced programming, predictive modeling, and machine learning. Data scientists design and construct new processes for data modeling and production using algorithms and statistical methods.</p>
            <h3>Key Responsibilities of a Data Scientist:</h3>
            <ul>
              <li>Developing predictive models and machine learning algorithms</li>
              <li>Creating data visualization tools and frameworks</li>
              <li>Mining complex data sets for business insights</li>
              <li>Building and maintaining AI systems</li>
              <li>Conducting advanced statistical analysis</li>
            </ul>
          </section>

          <div className="section-image">
            <img src={analysisTwo} alt="Career Path Illustration" />
          </div>

          <section>
            <h2>Which Career Path is Right for You?</h2>
            <p>Choosing between data analysis and data science depends on your interests, technical skills, and career goals. Data analysis might be right for you if you enjoy working with existing data and creating actionable insights. Consider data science if you're interested in machine learning, advanced mathematics, and building predictive models.</p>
          </section>

          <div className="conclusion">
            <h2>Conclusion</h2>
            <p>Whether you choose data analysis or data science, both fields offer exciting opportunities to work with data and make a significant impact in today's data-driven world.</p>
          </div>
        </div>

        <div className="diff-image">
          <img src={diff} alt="Data Analysis vs Science" />
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 