import React, { useState } from 'react';
import '../pages/CourseContent.css';

const QuizModal = ({ questions, onSubmit, onClose, forceComplete }) => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showScorePopup, setShowScorePopup] = useState(false);

  const handleAnswerSelect = (questionIndex, option) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: option
    }));
  };

  const handleSubmit = () => {
    const correctAnswers = questions.filter(
      (q, i) => answers[i] === q.answer
    ).length;

    const passed = correctAnswers >= 2;
    setResult({
      passed,
      score: correctAnswers,
      total: questions.length,
      percentage: (correctAnswers / questions.length) * 100
    });
    
    setShowScorePopup(true);
  };

  const answeredQuestions = Object.keys(answers).length;
  const progressPercentage = (answeredQuestions / questions.length) * 100;

  const handleOverlayClick = (e) => {
    if (!forceComplete && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="quiz-modal-overlay" onClick={handleOverlayClick}>
      <div className="quiz-modal" onClick={e => e.stopPropagation()}>
        <h2>Complete the Quiz</h2>
        
        <div className="quiz-progress">
          <span>{answeredQuestions} of {questions.length} answered</span>
          <div className="quiz-progress-bar">
            <div 
              className="quiz-progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {questions.map((q, qIndex) => (
          <div key={qIndex} className="quiz-question">
            <p>{q.question}</p>
            <div className="quiz-options">
              {q.options.map((option, oIndex) => (
                <label 
                  key={oIndex} 
                  className={`option-label ${answers[qIndex] === option ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name={`question-${qIndex}`}
                    value={option}
                    checked={answers[qIndex] === option}
                    onChange={() => handleAnswerSelect(qIndex, option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {showScorePopup && (
          <div className="score-popup-overlay">
            <div className="score-popup">
              <div className="score-header">
                <h2>{result.passed ? "Congratulations! 🎉" : "Keep Trying! 💪"}</h2>
              </div>
              
              <div className="score-content">
                <div className="score-circle">
                  <div className="score-number">
                    {result.score}/{result.total}
                  </div>
                  <div className="score-percent">
                    {result.percentage}%
                  </div>
                </div>
                
                <div className="score-message">
                  {result.passed 
                    ? "Great job! You've passed the quiz."
                    : "Don't worry! Review the content and try again."}
                </div>
              </div>
              
              <div className="score-buttons">
                <button 
                  className="score-btn continue"
                  onClick={() => {
                    if (result.passed) {
                      onSubmit();
                    } else {
                      onClose();
                    }
                  }}
                >
                  {result.passed ? "Continue" : "Try Again"}
                </button>
                <button 
                  className="score-btn review"
                  onClick={onClose}
                >
                  Review Answers
                </button>
              </div>
            </div>
          </div>
        )}

        <button 
          className="quiz-submit-btn"
          onClick={handleSubmit}
          disabled={answeredQuestions < questions.length}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizModal;