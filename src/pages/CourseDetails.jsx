import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "../Data"; 
import "./CourseDetails.css";
import { PaystackButton } from "react-paystack";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const CourseDetails = () => {
  const { courseName } = useParams();
  const navigate = useNavigate();
  const [isPurchased, setIsPurchased] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const userEmail = "learnwithwida@gmail.com";

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
      savePurchaseToBackend({
        ...reference,
        packageType,
        amount: formatPrice(price)
      });
    },
    onClose: () => {
      alert("Payment cancelled or failed. Please try again.");
    }
  });

  const savePurchaseToBackend = async (reference) => {
    try {
      const purchaseData = {
        courseId: courseName,
        paymentReference: reference.reference,
        amount: reference.amount,
        userEmail: userEmail,
        transactionDate: new Date().toISOString(),
        status: 'success',
        metadata: reference // Store full Paystack reference for records
      };

      // Add document to 'purchases' collection
      const docRef = await addDoc(collection(db, 'purchases'), purchaseData);
      console.log('Purchase saved with ID:', docRef.id);

      // Save to localStorage for quick client-side access
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      purchasedCourses[courseName.toLowerCase()] = true;
      localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));

    } catch (error) {
      console.error('Error saving purchase to Firebase:', error);
      // Still update localStorage even if Firebase fails
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      purchasedCourses[courseName.toLowerCase()] = true;
      localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
    }
  };

  useEffect(() => {
    const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
    setIsPurchased(!!purchasedCourses[courseName.toLowerCase()]);
  }, [courseName]);

  const course = courseData.find(
    (c) => c.title.toLowerCase() === courseName.toLowerCase()
  );

  const getPricing = (courseTitle) => {
    switch (courseTitle.toLowerCase()) {
      case 'data science':
        return {
          virtual: { original: '₦100000', current: '₦80000' },
          physical: { original: '₦150000', current: '₦100000' }
        };
      case 'research analysis':
        return {
          virtual: { original: '₦100000', current: '₦50000' },
          physical: { original: '₦100000', current: '₦80000' }
        };
      case 'data analysis':
        return {
          virtual: { original: null, current: '₦50000' },
          physical: { original: null, current: '₦80000' }
        };
      default:
        return {
          virtual: { original: '₦100000', current: '₦80000' },
          physical: { original: '₦150000', current: '₦100000' }
        };
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

  const pricing = getPricing(course.title);

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
            className="access-course-button"
            onClick={() => navigate(`/course-content/${courseName.toLowerCase()}`)}
          >
            Go to Course
          </button>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
