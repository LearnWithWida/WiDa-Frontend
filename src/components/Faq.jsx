import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    "What is Data Science?",
    "How is Data Science different from Data Analysis?",
    "What are the essential skills and tools needed to become a Data Scientist?",
    "What programming languages are most commonly used in Data Science?",
    "What is the difference between descriptive, predictive, and prescriptive analysis?",
    "How do I clean and preprocess raw data for analysis?",
    "What tools are best for data visualization, and when should they be used?",
    "How do I determine the best statistical test for my research study?",
    "What is the importance of reproducibility in research analysis, and how can it be ensured?",
    "How can I choose the right algorithm for my data science project?",
    "How can I deal with missing or incomplete data in my analysis?",
    "How do I ensure that my research findings are unbiased and reliable?",
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FAQ">
   
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq}
              <span className="toggle-icon">
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit elit et dolor posuere, non fermentum turpis elementum.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
