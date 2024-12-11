import React, { useState } from 'react';
import './ExamModal.css';

const ExamModal = ({ questions, onSubmit, onClose }) => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    const totalQuestions = questions.length;
    const correctAnswers = questions.filter(
      (q, idx) => answers[idx] === q.answer
    ).length;
    const finalScore = (correctAnswers / totalQuestions) * 100;
    setScore(finalScore);
    setShowResults(true);

    if (finalScore >= 70) {
      onSubmit();
    }
  };

  return (
    <div className="exam-modal-overlay">
      <div className="exam-modal">
        <h2>Set Completion Exam</h2>
        <p>Please answer all questions to proceed to the next set. Required score: 70%</p>

        {!showResults ? (
          <>
            {questions.map((q, idx) => (
              <div key={idx} className="exam-question">
                <p>{q.question}</p>
                <div className="options">
                  {q.options.map((option, optIdx) => (
                    <label key={optIdx}>
                      <input
                        type="radio"
                        name={`question-${idx}`}
                        value={option}
                        onChange={(e) => setAnswers({...answers, [idx]: e.target.value})}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={handleSubmit}>Submit Exam</button>
          </>
        ) : (
          <div className="exam-results">
            <h3>Your Score: {score}%</h3>
            {score >= 70 ? (
              <p>Congratulations! You can now proceed to the next set.</p>
            ) : (
              <p>You need to restart this set and review the content before trying again.</p>
            )}
            <button onClick={() => onClose()}>
              {score >= 70 ? 'Continue' : 'Restart Set'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamModal; 