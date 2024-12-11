import React, { useState, useEffect } from 'react';
import instructorImg from '../assets/instructor.png';
import './Instructor.css';

const Instructor = () => {
  const [formData, setFormData] = useState({
    "First Name * ": '',
    "Last Name": '',
    "Email Address": '',
    "Phone Number": '',
    "Country": '',
    "City": '',
    "Current Role/Position": '',
    "Field of Interest": '',
    "Area of Focus": '',
    "Current Skill Level": '',
    "Relevant Skills": '',
    "Preferred Communication Method": '',
    "Why Should we Mentor You?": ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data being submitted:', formData);
    
    try {
      console.log('Attempting to submit to SheetBest API...');
      const response = await fetch('https://api.sheetbest.com/sheets/310f65da-23f2-4702-b400-7e6107a9eb7a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({
          "First Name * ": '',
          "Last Name": '',
          "Email Address": '',
          "Phone Number": '',
          "Country": '',
          "City": '',
          "Current Role/Position": '',
          "Field of Interest": '',
          "Area of Focus": '',
          "Current Skill Level": '',
          "Relevant Skills": '',
          "Preferred Communication Method": '',
          "Why Should we Mentor You?": ''
        });
      } else {
        console.error('Error response:', response);
        alert(`Error submitting form. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Submission error details:', error);
      alert('Error submitting form. Please check console for details.');
    }
  };

  useEffect(() => {
    const getSheetHeaders = async () => {
      try {
        const response = await fetch('https://api.sheetbest.com/sheets/310f65da-23f2-4702-b400-7e6107a9eb7a', {
          method: 'GET'
        });
        const data = await response.json();
        if (data.length > 0) {
          console.log('Sheet headers:', Object.keys(data[0]));
        }
      } catch (error) {
        console.error('Error fetching headers:', error);
      }
    };
    
    getSheetHeaders();
  }, []);

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
        <form className="mentor-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name *</label>
              <input 
                type="text" 
                name="First Name * "
                value={formData["First Name * "]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Last Name</label>
              <input 
                type="text" 
                name="Last Name"
                value={formData["Last Name"]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="Email Address"
                value={formData["Email Address"]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="Phone Number"
                value={formData["Phone Number"]}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Country</label>
              <input 
                type="text" 
                name="Country"
                value={formData["Country"]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                name="City"
                value={formData["City"]}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Current Role/Position</label>
              <input 
                type="text" 
                name="Current Role/Position"
                value={formData["Current Role/Position"]}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Field of Interest</label>
              <input 
                type="text" 
                name="Field of Interest"
                value={formData["Field of Interest"]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Area of Focus</label>
              <input 
                type="text" 
                name="Area of Focus"
                value={formData["Area of Focus"]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Current Skill Level</label>
              <input 
                type="text" 
                name="Current Skill Level"
                value={formData["Current Skill Level"]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Relevant Skills</label>
              <input 
                type="text" 
                name="Relevant Skills"
                value={formData["Relevant Skills"]}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Preferred Communication Method</label>
              <input 
                type="text" 
                name="Preferred Communication Method"
                value={formData["Preferred Communication Method"]}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group textarea-group">
            <label>Why Should we Mentor You?</label>
            <textarea 
              name="Why Should we Mentor You?"
              value={formData["Why Should we Mentor You?"]}
              onChange={handleChange}
              rows="5"
            />
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Instructor;
