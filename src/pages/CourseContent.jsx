import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { saveVideoProgress, getVideoProgress } from '../firebase/videoProgress';
import './CourseContent.css';
import { FaPlay, FaPause, FaRedo, FaLock, FaExpand, FaCompress } from 'react-icons/fa';
import CourseThumbnail from '../assets/thumbnail.png'; 
import testingVideo from "../assets/videos/testing.mp4";

const courseVideos = Array(10).fill(testingVideo);

const courseQuizzes = { 
  0: {
    questions: [
      {
        questionText: 'What is Data Analysis?',
        options: [
          'Creating spreadsheets',
          'Examining data to find insights',
          'Writing code',
          'Making presentations'
        ],
        correctAnswer: 1
      },
      {
        questionText: 'Which of the following is a key step in data analysis?',
        options: [
          'Designing logos',
          'Data cleaning and preparation',
          'Website development',
          'Social media marketing'
        ],
        correctAnswer: 1
      },
      {
        questionText: 'What is the purpose of data visualization?',
        options: [
          'To make data look pretty',
          'To confuse readers',
          'To communicate insights effectively',
          'To store data securely'
        ],
        correctAnswer: 2
      },
      {
        questionText: 'Which tool is commonly used for basic data analysis?',
        options: [
          'Microsoft Paint',
          'Notepad',
          'Microsoft Excel',
          'Windows Media Player'
        ],
        correctAnswer: 2
      }
    ]
  }
};

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz completed
      const passed = (score + (isCorrect ? 1 : 0)) / questions.length >= 0.7; // 70% passing score
      alert(`Your score: ${score + (isCorrect ? 1 : 0)} out of ${questions.length}`);
      onComplete(passed);
    }
  };

  return (
    <div className="quiz-content">
      <h2>Question {currentQuestion + 1} of {questions.length}</h2>
      <p className="question-text">{questions[currentQuestion].questionText}</p>
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const CourseContent = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [videoStates, setVideoStates] = useState(
    Array(10).fill({
      isPlaying: false,
      isPaused: false,
      progress: 0,
      videoEnded: false,
      quizCompleted: false,
      quizPassed: false
    })
  );
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);

  const videoRefs = useRef(Array(10).fill(null));
  const progressBarRefs = useRef(Array(10).fill(null));
  const videoContainerRefs = useRef(Array(10).fill(null));

  useEffect(() => {
    const checkAccess = () => {
      if (!user) {
        navigate('/login');
        return;
      }

      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      const userPurchases = purchasedCourses[user.uid] || {};
      
      if (!userPurchases['data analysis']) {
        navigate('/course/DataAnalysis');
        return;
      }

      setIsAuthorized(true);
    };

    checkAccess();
  }, [user, navigate]);

  useEffect(() => {
    const loadUserProgress = async () => {
      if (user) {
        const progressData = await getVideoProgress(user.uid);
        if (progressData) {
          setVideoStates(prevStates => 
            prevStates.map((state, index) => ({
              ...state,
              ...progressData[index] // Merge saved progress with current state
            }))
          );
        }
      }
    };

    loadUserProgress();
  }, [user]);

  const handleTimeUpdate = useCallback((index) => {
    const videoRef = videoRefs.current[index];
    if (videoRef) {
      const progress = (videoRef.currentTime / videoRef.duration) * 100;
      setVideoStates(prev => prev.map((state, i) => 
        i === index ? { ...state, progress } : state
      ));

      if (user && progress % 5 < 1) {
        const progressData = {
          [index]: {
            progress,
            videoEnded: false,
            lastPosition: videoRef.currentTime
          }
        };
        saveVideoProgress(user.uid, progressData).catch(console.error);
      }
    }
  }, [user]);

  const handleQuizComplete = useCallback((passed) => {
    setVideoStates(prev => prev.map((state, i) => 
      i === currentQuizIndex ? {
        ...state,
        quizCompleted: true,
        quizPassed: passed
      } : state
    ));

    if (user) {
      const progressData = {
        [currentQuizIndex]: {
          quizCompleted: true,
          quizPassed: passed,
          progress: 100,
          videoEnded: true
        }
      };
      saveVideoProgress(user.uid, progressData).catch(console.error);
    }

    if (!passed) {
      const videoRef = videoRefs.current[currentQuizIndex];
      if (videoRef) {
        videoRef.currentTime = 0;
      }
    }
    setShowQuiz(false);
  }, [user, currentQuizIndex]);

  const handlePlayClick = useCallback((index) => {
    if (index > 0 && !videoStates[index - 1].videoEnded) {
      return; // Don't play if previous video isn't complete
    }

    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, isPlaying: true } : state
    ));

    const videoRef = videoRefs.current[index];
    if (videoRef) {
      videoRef.play().catch(console.error);
    }
  }, [videoStates]);

  const handleVideoEnd = (index) => {
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, videoEnded: true } : state
    ));

    // Automatically show the quiz after the video ends
    setCurrentQuizIndex(index); // Set the current quiz index to the video index
    setShowQuiz(true); // Show the quiz
  };

  const handleVideoClick = (index) => {
    setVideoStates(prev => prev.map((state, i) => 
      i === index ? { ...state, isPaused: !state.isPaused } : state
    ));

    const videoRef = videoRefs.current[index];
    if (videoRef) {
      if (videoStates[index].isPaused) {
        videoRef.play().catch(console.error);
      } else {
        videoRef.pause();
      }
    }
  };

  const handleFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleProgressBarClick = useCallback((e, index) => {
    const progressBar = progressBarRefs.current[index];
    const video = videoRefs.current[index];
    
    if (progressBar && video) {
      // Get the clicked position relative to the progress bar
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      
      // Calculate the new time based on click position
      const clickedTime = (clickPosition / progressBarWidth) * video.duration;
      
      // Update video time
      video.currentTime = clickedTime;
      
      // Update progress state
      const progress = (clickedTime / video.duration) * 100;
      setVideoStates(prev => prev.map((state, i) => 
        i === index ? { ...state, progress } : state
      ));
    }
  }, []);

  if (!isAuthorized) {
    return (
      <div className="loading-container">
        <p>Loading course content...</p>
      </div>
    );
  }

  return (
    <div className="course-content">
      {Array.from({ length: 10 }).map((_, index) => {
        const isLocked = index > 0 && !videoStates[index - 1].videoEnded;
        const currentState = videoStates[index];
        const isCompleted = currentState.quizCompleted && currentState.quizPassed;

        return (
          <div key={index} className="video-section">
            <div className="thumbnail-container">
              {isLocked ? (
                <div className="video-locked">
                  <img 
                    src={CourseThumbnail} 
                    alt="Course Thumbnail" 
                    className="locked"
                  />
                  <div className="lock-icon">
                    <FaLock />
                  </div>
                </div>
              ) : !currentState.isPlaying ? (
                <>
                  <img src={CourseThumbnail} alt="Course Thumbnail" />
                  {isCompleted ? (
                    <div 
                      className="play-icon completed" 
                      onClick={() => handlePlayClick(index)}
                    >
                      <FaRedo />
                    </div>
                  ) : (
                    <div 
                      className="play-icon" 
                      onClick={() => handlePlayClick(index)}
                    >
                      {currentState.videoEnded ? <FaRedo /> : <FaPlay />}
                    </div>
                  )}
                </>
              ) : (
                <div 
                  className="custom-video-player" 
                  ref={el => videoContainerRefs.current[index] = el}
                >
                  <video
                    ref={el => videoRefs.current[index] = el}
                    autoPlay
                    className="video-player"
                    onEnded={() => handleVideoEnd(index)}
                    onClick={() => handleVideoClick(index)}
                    onTimeUpdate={() => handleTimeUpdate(index)}
                  >
                    <source src={courseVideos[index]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-controls">
                    <div
                      className="progress-bar"
                      ref={el => progressBarRefs.current[index] = el}
                      onClick={(e) => handleProgressBarClick(e, index)}
                    >
                      <div
                        className="progress-filled"
                        style={{ width: `${currentState.progress}%` }}
                      ></div>
                    </div>
                    <div className="controls-buttons">
                      <button 
                        className="control-button" 
                        onClick={() => handleVideoClick(index)}
                      >
                        {currentState.videoEnded ? (
                          <FaRedo />
                        ) : (
                          currentState.isPaused ? <FaPlay /> : <FaPause />
                        )}
                      </button>
                      <button
                        className="control-button"
                        onClick={() => handleFullScreen()}
                      >
                        {isFullscreen ? <FaCompress /> : <FaExpand />}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="video-details">
              <h1>Introduction to Data Analysis</h1>
              <p>
                Data analysis is the process of examining, cleaning, transforming, 
                and modeling data to discover useful information, draw conclusions, 
                and support decision-making. Through statistical methods and 
                analytical tools, data analysis helps organizations understand
              </p>
              {isLocked ? (
                <button className="watch-button locked" disabled>
                  Complete Previous Video First
                </button>
              ) : isCompleted ? (
                <button 
                  className="watch-button completed"
                  onClick={() => handlePlayClick(index)}
                >
                  <FaRedo /> Watch Again
                </button>
              ) : currentState.videoEnded ? (
                <button 
                  className="quiz-button" 
                  onClick={() => setShowQuiz(true)}
                >
                  Take Quiz
                </button>
              ) : (
                <button 
                  className="watch-button"
                  onClick={() => handlePlayClick(index)}
                >
                  Watch Video
                </button>
              )}
            </div>
          </div>
        );
      })}
      {showQuiz && (
        <div className="quiz-overlay">
          <div className="quiz-container">
            {courseQuizzes[currentQuizIndex] ? (
              <Quiz
                questions={courseQuizzes[currentQuizIndex].questions}
                onComplete={handleQuizComplete}
              />
            ) : (
              <div>No quiz available for this section.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContent;
