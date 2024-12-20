import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "Who should I contact if I have questions about a course?",
      answer: "For any course-related questions, you can contact our support team at support@learnwithwida.com or reach out to us through our contact form on the website. We typically respond within 24 hours."
    },
    {
      question: "How do I register for a course?",
      answer: "To register for a course: 1) Create an account or log in 2) Browse our course catalog 3) Select your desired course 4) Click the 'Enroll Now' button 5) Complete the payment process 6) Access your course materials immediately after payment confirmation."
    },
    {
      question: "I've registered for a course. How do I access it?",
      answer: "After registration, you can access your course by: 1) Logging into your account 2) Going to 'My Courses' in your dashboard 3) Clicking on the course title to start learning. All course materials will be available immediately after successful enrollment."
    },
    {
      question: "What is the time commitment for the courses?",
      answer: "Course durations vary, but most courses are designed to be completed within 4-6 weeks. You can learn at your own pace, and you'll have access to the course materials for 12 months after enrollment. We recommend dedicating 5-7 hours per week for optimal learning."
    },
    {
      question: "Are there assessments or exams in the courses?",
      answer: "Yes, our courses include various assessments to help track your progress: 1) Quiz after each module 2) Practical assignments 3) Final course assessment. You need to score at least 50% to pass the assessments and receive your certificate."
    },
    {
      question: "How will the course assist me with my career?",
      answer: "Our courses are designed to enhance your professional skills by: 1) Providing industry-relevant knowledge 2) Offering practical, hands-on experience 3) Including real-world case studies 4) Providing certificates upon completion 5) Teaching in-demand skills that employers value."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FAQ">
      <div className="faq-items">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="toggle-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
