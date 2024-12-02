import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { courseData } from "../Data"; 
import "./CourseDetails.css";
import { PaystackButton } from "react-paystack";
import { useAuth } from '../context/AuthContext';

const CourseDetails = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);
  const userEmail = "learnwithwida@gmail.com";

  // Since we only have Data Analysis course, we can directly use it
  const courseName = "data analysis";
  
  // Convert price string to number (remove ₦ and commas)
  const formatPrice = (priceString) => {
    if (!priceString) return 0;
    return Number(priceString.replace('₦', '').replace(/,/g, ''));
  };

  // Create separate component props for each package
  const getPaystackProps = (price, packageType) => ({
    email: userEmail,
    amount: formatPrice(price) * 100, 
    publicKey: 'pk_test_1f7f9f0abf9a2c1ac3146188bfff27ed81b78ed7',
    text: "Purchase Now",
    metadata: {
      courseTitle: courseName,
      packageType: packageType
    },
    onSuccess: (reference) => {
      setIsPurchased(true);
      // Store purchase in localStorage with user ID
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      
      // Initialize or update user's purchases
      if (!purchasedCourses[user.uid]) {
        purchasedCourses[user.uid] = {};
      }
      
      purchasedCourses[user.uid]['data analysis'] = {
        ...reference,
        packageType,
        amount: formatPrice(price),
        purchaseDate: new Date().toISOString()
      };
      
      localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
    },
    onClose: () => {
      alert("Payment cancelled or failed. Please try again.");
    }
  });

  useEffect(() => {
    if (user) {
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      const userPurchases = purchasedCourses[user.uid] || {};
      setIsPurchased(!!userPurchases['data analysis']);
    }
  }, [user]);

  const course = courseData.find(
    (c) => c.title.toLowerCase() === courseName
  );

  const pricing = {
    virtual: { original: null, current: '₦50000' },
    physical: { original: null, current: '₦80000' }
  };

  const handleGoToCourse = (e) => {
    e.preventDefault();
    if (user && isPurchased) {
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      const userPurchases = purchasedCourses[user.uid] || {};
      
      if (userPurchases['data analysis']) {
        console.log('Navigating to course content...');
        navigate('/course/DataAnalysis/videoCourse');
      } else {
        console.log('Purchase verification failed');
        setIsPurchased(false);
      }
    }
  };

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <p>The course you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="course-details">
      <div className="course-details-header">
        <img src={course.image} alt={course.title} />
        <div className="course-details-info">
          <h1>{course.title}</h1>
          <p className="level">{course.level}</p>
          <p className="description">{course.description}</p>
        </div>
      </div>

      <div className="curriculum-section">
        <h1>Curriculum</h1>
        <p>The course covers a wide range of topics, including:</p>
        <div className="course-modules">
          <div className="modules-grid">
            {course.modules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </div>
        </div>
      </div>
      {!isPurchased ? (
        <div className="curriculum-section buy-course">
          <h1>Unlock Your Learning Journey</h1>
          <p>Choose your preferred learning package</p>
          <div className="purchase-options">
            <div className="purchase-card">
              <div className="card-header">
                <h3>Virtual Study</h3>
                <span className="tag">Most Popular</span>
              </div>
              <div className="price-group">
                {pricing.virtual.original && (
                  <span className="original-price">
                    {pricing.virtual.original}
                  </span>
                )}
                <span className="current-price">
                  {pricing.virtual.current}
                </span>
              </div>
              <ul className="features-list">
                <li>✓ Lifetime access to course materials</li>
                <li>✓ Interactive online sessions</li>
                <li>✓ Virtual mentorship support</li>
                <li>✓ Access to online community</li>
              </ul>
              {!user ? (
                <button 
                  className="purchase-button"
                  onClick={() => navigate('/login')}
                >
                  Login to Purchase
                </button>
              ) : (
                <PaystackButton 
                  {...getPaystackProps(pricing.virtual.current, 'virtual')}
                  className="purchase-button"
                />
              )}
            </div>

            <div className="purchase-card">
              <div className="card-header">
                <h3>Physical Study</h3>
                <span className="tag">Premium</span>
              </div>
              <div className="price-group">
                {pricing.physical.original && (
                  <span className="original-price">
                    {pricing.physical.original}
                  </span>
                )}
                <span className="current-price">
                  {pricing.physical.current}
                </span>
              </div>
              <ul className="features-list">
                <li>✓ In-person classroom sessions</li>
                <li>✓ Direct interaction with instructors</li>
                <li>✓ Physical study materials</li>
                <li>✓ Networking opportunities</li>
              </ul>
              <PaystackButton 
                {...getPaystackProps(pricing.physical.current, 'physical')}
                className="purchase-button"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="curriculum-section access-course">
          <h1>Ready to Start Learning?</h1>
          <p>Your course is ready. Click below to start your learning journey!</p>
          <button 
            onClick={handleGoToCourse}
            className="access-course-button"
            style={{ 
              cursor: 'pointer',
              backgroundColor: '#ff7600',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              display: 'inline-block',
              margin: '20px 0'
            }}
          >
            Go to Course
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
