import React from 'react';
import instructorImg from '../assets/instructor.png';
import './Instructor.css';

const Instructor = () => {
  return (
    <div className="instructor-container">
      <div className="instructor-hero">
        <div className="instructor-image">
          <img src={instructorImg} alt="Expert Mentorship" />
        </div>
        <div className="instructor-content">
          <h1>Expert <span>Mentorship</span></h1>
          <p>
            Unlock your potential with expert mentorship that bridges the gap between theory and real-world application. Our mentors are seasoned professionals and industry leaders with hands-on experience in their fields. They offer personalized guidance, helping you navigate challenges, enhance your skills, and achieve your goals.
          </p>
          <p>
            Through one-on-one sessions, group discussions, and tailored feedback, you'll gain invaluable insights into industry trends, best practices, and innovative techniques. Whether you're a student, a professional seeking to advance, or an entrepreneur with big ideas, expert mentorship ensures you have the support and direction needed to excel in your journey.
          </p>
        </div>
      </div>

      <div className="form-section">
        <h1>Unlock Your Potential with Expert Guidance</h1>
        <p>
          Ready to accelerate your growth and achieve your goals? Our expert mentors are here to guide you every step of the way. Whether you're looking to refine your skills, overcome challenges, or explore new opportunities, we'll connect you with experienced professionals in your field. Fill out the form below, and let's match you with the mentor who can help turn your aspirations into achievements!
        </p>
        <form className="mentor-form">
          <div className="form-grid">
            <div className="form-group">
              <label>First Name *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" required />
            </div>
            
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" />
            </div>
            
            <div className="form-group">
              <label>Country *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>City</label>
              <input type="text" />
            </div>
            
            <div className="form-group">
              <label>Current Role/Position</label>
              <input type="text" />
            </div>
            
            <div className="form-group">
              <label>Field of Interest *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Area of Focus *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Current Skill Level *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Relevant Skills *</label>
              <input type="text" required />
            </div>
            
            <div className="form-group">
              <label>Preferred Communication Method *</label>
              <input type="text" required />
            </div>
          </div>
          
          <div className="form-group textarea-group">
            <label>Why Should we Mentor You?</label>
            <textarea rows="5"></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Instructor;
