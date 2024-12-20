import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { courseData } from "../Data";
import { useAuth } from '../context/AuthContext';
import { examTrackingService } from '../services/examTrackingService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ExamCourse.css";
import heroImage from "../assets/course-hero.png";

const CoursesList = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [attemptedExams, setAttemptedExams] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAttemptedExams = async () => {
      if (!user) {
        setAttemptedExams({});
        setLoading(false);
        return;
      }

      try {
        const attempts = {};
        for (const course of courseData) {
          for (const exam of course.exams) {
            const hasAttempted = await examTrackingService.hasAttemptedExam(
              user.uid,
              course.id,
              exam.id
            );
            if (hasAttempted) {
              console.log(`User ${user.uid} has attempted exam ${course.id}_${exam.id}`);
            }
            attempts[`${course.id}_${exam.id}`] = hasAttempted;
          }
        }
        setAttemptedExams(attempts);
      } catch (error) {
        console.error('Error loading exam attempts:', error);
        toast.error('Failed to load exam history');
      } finally {
        setLoading(false);
      }
    };

    loadAttemptedExams();
  }, [user]);

  const handleStartExam = async (courseId, examId) => {
    if (!user) {
      toast.error("Please login to take the exam");
      navigate('/login');
      return;
    }

    try {
      const hasAttempted = await examTrackingService.hasAttemptedExam(
        user.uid,
        courseId,
        examId
      );

      if (hasAttempted) {
        toast.warning("You have already completed this exam!");
        return;
      }

      navigate(`/test/${courseId}/${examId}`);
    } catch (error) {
      console.error('Error checking exam attempt:', error);
      toast.error('Failed to check exam status');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-page">
      <ToastContainer position="top-right" autoClose={3000} />
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
        <img src={heroImage} alt="Course Hero" className="hero-image" />
      </div>

      <div className="courses-container">
        {courseData.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card-left">
              <img src={heroImage} alt={course.title} />
            </div>
            <div className="course-card-right">
              <h2>{course.title}</h2>
              <p className="course-level">{course.level}</p>
              <div className="course-modules">
                <div className="modules-grid">
                  {course.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </div>
              </div>
              <button
                className={`payment-btn ${attemptedExams[`${course.id}_${course.exams[0].id}`] ? 'disabled' : ''}`}
                onClick={() => handleStartExam(course.id, course.exams[0].id)}
                disabled={attemptedExams[`${course.id}_${course.exams[0].id}`]}
              >
                {attemptedExams[`${course.id}_${course.exams[0].id}`] ? 'Completed' : 'Start Exam'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
