import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { courseData, pricing } from "../Data";
import "./CourseDetails.css";
import { PaystackButton } from "react-paystack";
import { useAuth } from '../context/AuthContext';

const CourseDetails = () => {
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);
  const { user } = useAuth();

  // Find the Data Analysis course directly
  const course = courseData.find(c => c.title.toLowerCase() === 'data analysis');

  useEffect(() => {
    if (user) {
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      const userPurchases = purchasedCourses[user?.uid] || {};
      setIsPurchased(!!userPurchases['data analysis']);
    }
  }, [user]);

  useEffect(() => {
    // Verify Paystack configuration
    const paystackKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
    if (!paystackKey) {
      console.error('Paystack public key is not configured');
    }
  }, []);

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>Course not found</h2>
        <p>The course you're looking for doesn't exist.</p>
      </div>
    );
  }

  const getPaystackProps = (amount, packageType) => {
    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const config = {
      reference: new Date().getTime().toString(),
      email: user.email,
      amount: Number(amount) * 100, // Convert to kobo
      publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      text: "Purchase Course",
      onSuccess: (reference) => handlePaymentSuccess(reference, packageType),
      onClose: () => console.log("Payment window closed"),
      currency: "NGN"
    };

    // Debug log
    console.log('Paystack Config:', {
      ...config,
      amount: config.amount,
      email: config.email,
      publicKey: config.publicKey ? 'Valid Key Present' : 'Missing Key'
    });

    return config;
  };

  const handlePaymentSuccess = (reference, packageType) => {
    if (user) {
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      if (!purchasedCourses[user.uid]) {
        purchasedCourses[user.uid] = {};
      }
      purchasedCourses[user.uid]['data analysis'] = {
        purchaseDate: new Date().toISOString(),
        packageType: packageType,
        reference: reference
      };
      localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
      setIsPurchased(true);
    }
  };

  const handleGoToCourse = (e) => {
    e.preventDefault();
    if (user && isPurchased) {
      navigate('/course/data-analysis/content', { replace: true });
    }
  };

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
                    ₦{pricing.virtual.original}
                  </span>
                )}
                <span className="current-price">
                  ₦{pricing.virtual.current}
                </span>
              </div>
              <ul className="features-list">
                <li>✓ Lifetime access to course materials</li>
                <li>✓ Interactive online sessions</li>
                <li>✓ Virtual mentorship support</li>
                <li>✓ Access to online community</li>
              </ul>
              <PaystackButton 
                {...getPaystackProps(pricing.virtual.current, 'virtual')}
                className="purchase-button"
              />
            </div>

            <div className="purchase-card">
              <div className="card-header">
                <h3>Physical Study</h3>
                <span className="tag">Premium</span>
              </div>
              <div className="price-group">
                {pricing.physical.original && (
                  <span className="original-price">
                    ₦{pricing.physical.original}
                  </span>
                )}
                <span className="current-price">
                  ₦{pricing.physical.current}
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
            className="access-course-button"
            onClick={handleGoToCourse}
          >
            Go to Course
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
