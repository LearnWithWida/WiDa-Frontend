import React from "react";
import { Link } from "react-router-dom";
import { courseData as courses }from "../coursesData";
import "./Course.css";
import heroImage from "../assets/course-hero.png";

const CoursesList = () => {
  return (
    <div className="course-page">
      <div className="course-hero">
        <div className="hero-content">
          <h1>
            Get yourself{" "}
            <span style={{ color: "#FF7600", fontFamily: "Recoleta" }}>
              prepared
            </span>{" "}
            with Hands-On Practice
          </h1>
          <p>
            "Strengthen your expertise in data science, analysis, and research
            with tailored practice questions and mock exams. Gain hands-on
            experience and assess your readiness for real-world challenges!"
          </p>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Data Science Learning" />
        </div>
      </div>

      <div className="course-intro">
        <h1>Available Courses</h1>
        <p className="course-intro-text">
          Assess your skills with our practice exams in data science, data
          analysis, and research analysis. These exams are designed to simulate
          real-world challenges, helping you identify strengths, improve weak
          areas, and build confidence for professional applications.
        </p>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card-left">
              <img src={heroImage} alt={course.name} />
            </div>
            <div className="course-card-right">
              <h2 className="course-name">{course.name}</h2>
              <p className="course-level">{course.level}</p>
              <p style={{color: "#FF7600", paddingTop: "20px", paddingBottom: '#FF7600'}}>level</p>
              <div className="course-modules">
                <div className="modules-grid">
                  {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </div>
              </div>
              <button className="payment-btn">Proceed to Payment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
