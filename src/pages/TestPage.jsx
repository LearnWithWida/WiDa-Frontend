import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "../Data";
import "./TestPage.css";
import Lottie from 'lottie-react';
import confettiAnimation from '../assets/confetti.json';
import { examService } from '../services/examService';
import { examTrackingService } from '../services/examTrackingService';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner';

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const TestPage = () => {
  const { courseId, examId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200);
  const [showRules, setShowRules] = useState(true);
  const [examStarted, setExamStarted] = useState(false);
  const [autoSubmitReason, setAutoSubmitReason] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Find the course and exam
  const course = courseData.find((c) => c.id === courseId);
  const exam = course?.exams?.find((e) => e.id === Number(examId));

  // Define handleSubmit using useCallback
  const handleSubmit = useCallback(async (reason = null) => {
    if (!user) {
      toast.error("You must be logged in to submit the exam");
      return;
    }

    setShowResults(true);
    if (reason) {
      setAutoSubmitReason(reason);
    }

    const score = calculateScore();

    try {
      const saved = await examTrackingService.saveExamAttempt(
        user.uid,
        courseId,
        Number(examId),
        score
      );

      if (!saved) {
        console.error('Failed to save exam attempt');
        toast.error('Failed to save exam results');
      }
    } catch (error) {
      console.error('Error saving exam attempt:', error);
      toast.error('Failed to save exam results');
    }
  }, [user, courseId, examId]);

  // Calculate score function
  const calculateScore = useCallback(() => {
    let correct = 0;
    exam?.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return exam ? (correct / exam.questions.length) * 100 : 0;
  }, [exam, userAnswers]);

  useEffect(() => {
    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden && !showResults) {
        handleSubmit('tab-switch');
      }
    };

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0 || showResults) {
          clearInterval(timer);
          if (!showResults) {
            handleSubmit('time-up');
          }
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [showResults, handleSubmit]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!course || !exam) {
    return (
      <div className="error-container">
        <h2>Exam not found</h2>
        <button onClick={() => navigate('/ExamCourse')}>Back to Courses</button>
      </div>
    );
  }

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setUserAnswers({
      ...userAnswers,
      [questionIndex]: answerIndex,
    });
  };

  const startExam = () => {
    setShowRules(false);
    setExamStarted(true);
  };

  if (!examStarted) {
    return (
      <div className="test-page">
        {showRules && (
          <div className="rules-modal">
            <div className="rules-content">
              <h2>📝 Exam Rules & Instructions</h2>
              
              <div className="rules-section">
                <h3>⏰ Time Limit</h3>
                <p>• You have 20 minutes to complete this exam</p>
                <p>• The exam will auto-submit when time expires</p>
              </div>

              <div className="rules-section">
                <h3>⚠️ Important Rules</h3>
                <p>• Do not switch tabs or windows during the exam</p>
                <p>• Switching tabs/windows will result in automatic submission</p>
                <p>• Ensure stable internet connection before starting</p>
                <p>• Answer all questions to enable submission</p>
              </div>

              <div className="rules-section">
                <h3>📋 Exam Format</h3>
                <p>• Multiple choice questions</p>
                <p>• Each question has one correct answer</p>
                <p>• You can review and change answers before final submission</p>
                <p>• Minimum passing score: 50%</p>
              </div>

              <div className="rules-section">
                <h3>🎯 Tips</h3>
                <p>• Read each question carefully</p>
                <p>• Keep track of remaining time</p>
                <p>• Don't spend too much time on one question</p>
                <p>• Review your answers if time permits</p>
              </div>

              <div className="consent-section">
                <p>By clicking "Start Exam", you agree to follow these rules and understand that breaking them may result in automatic submission.</p>
              </div>

              <button className="start-exam-btn" onClick={startExam}>
                Start Exam
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="test-page">
        <div className="results-container">
          {autoSubmitReason === 'tab-switch' && (
            <div className="auto-submit-alert">
              <p>⚠️ Your exam was automatically submitted because you switched tabs/windows.</p>
              <p>To maintain exam integrity, switching tabs or windows is not allowed.</p>
            </div>
          )}
          {autoSubmitReason === 'time-up' && (
            <div className="auto-submit-alert">
              <p>⏰ Your exam was automatically submitted because the time limit was reached.</p>
            </div>
          )}
          {score >= 50 && (
            <div className="confetti-animation">
              <Lottie
                animationData={confettiAnimation}
                loop={true}
                autoplay={true}
                style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1000 }}
              />
            </div>
          )}
          <div className="course-title-banner">
            <h1>{course.title} Result</h1>
            <span className="exam-name">You score: {Math.round(score)}%</span>
          </div>
          {/* <h2 className="results-title">
            Exam Results
            <span className="emoji">🎉</span>
          </h2> */}
          {/* <div className="score-container"> */}
            {/* <div className="score-circle"> */}
              {/* <div className="score-number"></div> */}
              {/* <div className="score-label"></div> */}
            {/* </div> */}
            {score >= 50 ? (
              <div className="pass-badge">
                <span className="badge-text">YOU PASSED!🏆</span>
                {/* <span className="badge-icon"></span> */}
              </div>
            ) : (
              <div className="fail-badge">
                <span className="badge-text">Keep Going! 💪</span>
                <p className="encouragement">Every attempt brings you closer to success.</p>
                <p className="encouragement">Review your answers and try again!</p>
              </div>
            )}
          {/* </div> */}
          <div className="answers-review">
            {exam.questions.map((question, index) => (
              <div 
                key={index} 
                className="question-review"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="qtn">
                  <strong>Question {index + 1}:</strong> {question.question}
                </p>
                <p className={userAnswers[index] === question.correctAnswer ? "correct" : "incorrect"}>
                  Your answer: {question.options[userAnswers[index]]}
                  {userAnswers[index] === question.correctAnswer ? " ✓" : " ✗"}
                </p>
                {userAnswers[index] !== question.correctAnswer && (
                  <p className="correct-answer">
                    Correct answer: {question.options[question.correctAnswer]} ✓
                  </p>
                )}
              </div>
            ))}
          </div>
          <button className="start-exam-btn" onClick={() => navigate('/ExamCourse')}>
            Back to Course List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="test-page">
      <div className="question-container">
        <div className="timer">Time Left: {formatTime(timeLeft)}</div>
        <h2>{exam.title}</h2>
        <div className="progress">
          Question {currentQuestion + 1} of {exam.questions.length}
        </div>
        <div className="question">
          <h3>{exam.questions[currentQuestion].question}</h3>
          <div className="options">
  {exam.questions[currentQuestion].options.map((option, index) => (
    <label
      key={index}
      className={`option ${userAnswers[currentQuestion] === index ? "active" : ""}`}
    >
      <input
        type="radio"
        name={`question-${currentQuestion}`}
        checked={userAnswers[currentQuestion] === index}
        onChange={() => handleAnswerSelect(currentQuestion, index)}
      />
      {option}
    </label>
  ))}
</div>
        </div>
        <div className="navigation">
          <button
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(curr => curr - 1)}
          >
            Previous
          </button>
          {currentQuestion === exam.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(userAnswers).length !== exam.questions.length}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion(curr => curr + 1)}
              className="Next-Btn"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;