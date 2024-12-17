import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courseData } from "../Data";
import "./TestPage.css";

const TestPage = () => {
  const { courseId, examId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Find the course and exam
  const course = courseData.find((c) => c.id === courseId);
  const exam = course?.exams?.find((e) => e.id === Number(examId));

  console.log("Course:", course);
  console.log("Exam:", exam);

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

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    exam.questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / exam.questions.length) * 100;
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="test-page">
        <div className="results-container">
          <h2>Exam Results🎉

</h2>
          <p className="score">Your Score: {score.toFixed(2)}%</p>
          <div className="answers-review">
            {exam.questions.map((question, index) => (
              <div key={index} className="question-review">
                <p className="qtn"><strong className="qtn">Question {index + 1}:</strong> {question.question}</p>
                <p className={userAnswers[index] === question.correctAnswer ? "correct" : "incorrect"}>
                  Your answer: {question.options[userAnswers[index]]}
                </p>
                <p className="correct-answer">
                  Correct answer: {question.options[question.correctAnswer]}
                </p>
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