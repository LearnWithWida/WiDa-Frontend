import React, { useState, useRef, useEffect } from "react";
import "./CourseContent.css";
import CourseThumbnail from "../assets/Thumbnail.png";
import { FaPlay, FaPause, FaExpand, FaCompress, FaLock, FaRedo, FaArrowRight, FaArrowLeft, FaVideo } from "react-icons/fa";
import testingVideo from "../assets/videos/testing.mp4";
import QuizModal from "../components/QuizModal";
import Certificate from "../components/Certificate";
import ExamModal from "../components/ExamModal";
import { useAuth } from '../context/AuthContext';
import { saveVideoProgress, getVideoProgress } from '../firebase/videoProgress';
import LoadingSpinner from '../components/LoadingSpinner';

// Define course sets and quizzes
const courseSets = {
  1: {
    title: "Introduction to Data Analysis",
    description: "Learn the fundamentals of data analysis",
    videos: 10,
    quizzes: [
      {
        questions: [
          { question: "What is data analysis?", options: ["Process of examining data", "Writing code", "Making websites", "None of these"], answer: "Process of examining data" },
          { question: "What is data visualization?", options: ["Visual representation", "Text document", "Audio file", "None of these"], answer: "Visual representation" },
          { question: "What is a histogram?", options: ["Data visualization", "Story", "Picture", "Video"], answer: "Data visualization" },
          { question: "What is a scatter plot?", options: ["2D visualization", "Movie plot", "Story plot", "None of these"], answer: "2D visualization" }
        ]
      }
    ],
    exam: {
      questions: [
        {
          question: "What is the primary goal of data analysis?",
          options: [
            "To create colorful charts",
            "To extract meaningful insights from data to support decision-making",
            "To store data in databases",
            "To make presentations look better"
          ],
          answer: "To extract meaningful insights from data to support decision-making"
        },
        {
          question: "Which combination of visualization tools is most effective for showing both distribution and correlation?",
          options: [
            "Pie chart and line graph",
            "Histogram and scatter plot",
            "Bar chart and pie chart",
            "Line graph and radar chart"
          ],
          answer: "Histogram and scatter plot"
        },
        {
          question: "What is the first step in the data analysis process?",
          options: [
            "Creating visualizations",
            "Data collection",
            "Writing reports",
            "Presenting findings"
          ],
          answer: "Data collection"
        },
        {
          question: "Which statistical measure is most appropriate for understanding the central tendency of skewed data?",
          options: [
            "Mean",
            "Median",
            "Mode",
            "Range"
          ],
          answer: "Median"
        },
        {
          question: "What is the purpose of exploratory data analysis (EDA)?",
          options: [
            "To make final conclusions",
            "To understand patterns and relationships in data",
            "To create presentations",
            "To store data"
          ],
          answer: "To understand patterns and relationships in data"
        },
        {
          question: "Which type of data visualization is best for showing trends over time?",
          options: [
            "Pie chart",
            "Bar graph",
            "Line chart",
            "Scatter plot"
          ],
          answer: "Line chart"
        },
        {
          question: "What is the importance of data cleaning in analysis?",
          options: [
            "To make data look better",
            "To ensure accuracy and reliability of results",
            "To reduce data size",
            "To impress stakeholders"
          ],
          answer: "To ensure accuracy and reliability of results"
        },
        {
          question: "What is a key characteristic of qualitative data?",
          options: [
            "It can be counted",
            "It describes qualities or characteristics",
            "It's always numerical",
            "It's always better than quantitative"
          ],
          answer: "It describes qualities or characteristics"
        },
        {
          question: "Which sampling method is most likely to be representative of a population?",
          options: [
            "Convenience sampling",
            "Random sampling",
            "Voluntary response",
            "Snowball sampling"
          ],
          answer: "Random sampling"
        },
        {
          question: "What is the purpose of data normalization?",
          options: [
            "To make all data positive",
            "To bring different variables to a similar scale",
            "To remove outliers",
            "To create graphs"
          ],
          answer: "To bring different variables to a similar scale"
        }
      ]
    }
  },
  2: {
    title: "Data Cleaning and Preparation",
    description: "Learn how to clean and prepare data for analysis",
    videos: 10,
    quizzes: [
      {
        questions: [
          { question: "What is data cleaning?", options: ["Fixing errors", "Washing data", "Deleting files", "None of these"], answer: "Fixing errors" },
          { question: "Why is data cleaning important?", options: ["Accuracy", "Fun", "Entertainment", "None of these"], answer: "Accuracy" },
          { question: "What is data transformation?", options: ["Converting data", "Robot transformation", "Magic trick", "None of these"], answer: "Converting data" },
          { question: "What is data normalization?", options: ["Standardizing data", "Making normal", "Being average", "None of these"], answer: "Standardizing data" }
        ]
      },
      {
        questions: [
          { question: "What is data integration?", options: ["Combining data", "Social integration", "Cultural mix", "None of these"], answer: "Combining data" },
          { question: "What is data reduction?", options: ["Reducing size", "Price reduction", "Sales", "None of these"], answer: "Reducing size" },
          { question: "What is data discretization?", options: ["Converting continuous", "Being discrete", "Secrets", "None of these"], answer: "Converting continuous" },
          { question: "What is data aggregation?", options: ["Summarizing data", "Angry data", "Data fights", "None of these"], answer: "Summarizing data" }
        ]
      }
    ],
    exam: {
      questions: [
        {
          question: "What is the most important step in data cleaning?",
          options: [
            "Making the data look pretty",
            "Identifying and handling missing values",
            "Converting all data to numbers",
            "Deleting all outliers"
          ],
          answer: "Identifying and handling missing values"
        },
        {
          question: "Which technique is best for handling outliers in a dataset?",
          options: [
            "Always remove them",
            "Always keep them",
            "Analyze their impact and make an informed decision",
            "Ignore them completely"
          ],
          answer: "Analyze their impact and make an informed decision"
        }
      ]
    }
  },
  3: {
    title: "Statistical Analysis",
    description: "Understanding statistical methods in data analysis",
    videos: 10,
    quizzes: [
      {
        questions: [
          { question: "What is a mean?", options: ["Average value", "Highest value", "Lowest value", "None of these"], answer: "Average value" },
          { question: "What is a median?", options: ["Middle value", "First value", "Last value", "None of these"], answer: "Middle value" },
          { question: "What is a mode?", options: ["Most frequent value", "Least frequent", "Random value", "None of these"], answer: "Most frequent value" },
          { question: "What is a standard deviation?", options: ["Measure of spread", "Measure of center", "Measure of height", "None of these"], answer: "Measure of spread" }
        ]
      },
      {
        questions: [
          { question: "What is a variance?", options: ["Measure of variability", "Measure of similarity", "Measure of difference", "None of these"], answer: "Measure of variability" },
          { question: "What is a correlation?", options: ["Relationship between variables", "Relationship between people", "Relationship between countries", "None of these"], answer: "Relationship between variables" },
          { question: "What is a regression?", options: ["Predictive modeling", "Going backwards", "Progression", "None of these"], answer: "Predictive modeling" },
          { question: "What is hypothesis testing?", options: ["Testing assumptions", "Testing products", "Testing people", "None of these"], answer: "Testing assumptions" }
        ]
      }
    ],
    exam: {
      questions: [
        {
          question: "When should you use a t-test versus a z-test?",
          options: [
            "T-test for large samples, z-test for small samples",
            "T-test for small samples, z-test for large samples",
            "They are exactly the same",
            "It depends on the data type only"
          ],
          answer: "T-test for small samples, z-test for large samples"
        },
        {
          question: "What is the relationship between variance and standard deviation?",
          options: [
            "They are the same thing",
            "Standard deviation is the square root of variance",
            "Variance is half of standard deviation",
            "There is no relationship"
          ],
          answer: "Standard deviation is the square root of variance"
        }
      ]
    }
  },
  4: {
    title: "Advanced Data Visualization",
    description: "Creating compelling data visualizations",
    videos: 10,
    quizzes: [
      {
        questions: [
          { question: "What is a line chart?", options: ["Graph of data", "Line of text", "Line of code", "None of these"], answer: "Graph of data" },
          { question: "What is a bar chart?", options: ["Graph with bars", "Bar of chocolate", "Bar of soap", "None of these"], answer: "Graph with bars" },
          { question: "What is a pie chart?", options: ["Circular graph", "Pie recipe", "Pie dish", "None of these"], answer: "Circular graph" },
          { question: "What is a scatter plot?", options: ["Graph of points", "Scatter of papers", "Scatter of seeds", "None of these"], answer: "Graph of points" }
        ]
      },
      {
        questions: [
          { question: "What is a heatmap?", options: ["Color-coded data", "Map of heat", "Map of temperature", "None of these"], answer: "Color-coded data" },
          { question: "What is a bubble chart?", options: ["Graph with bubbles", "Bubble bath", "Bubble gum", "None of these"], answer: "Graph with bubbles" },
          { question: "What is a radar chart?", options: ["Graph with axes", "Radar detection", "Radar signal", "None of these"], answer: "Graph with axes" },
          { question: "What is a waterfall chart?", options: ["Graph of changes", "Waterfall scene", "Waterfall sound", "None of these"], answer: "Graph of changes" }
        ]
      }
    ],
    exam: {
      questions: [
        {
          question: "Which visualization type is best for showing part-to-whole relationships?",
          options: [
            "Scatter plot",
            "Line chart",
            "Pie chart or treemap",
            "Box plot"
          ],
          answer: "Pie chart or treemap"
        },
        {
          question: "What is the key consideration when choosing colors for data visualization?",
          options: [
            "Using as many colors as possible",
            "Making it look artistic",
            "Ensuring accessibility and clear data communication",
            "Using only primary colors"
          ],
          answer: "Ensuring accessibility and clear data communication"
        }
      ]
    }
  }
};

const CourseContent = () => {
  const { user: currentUser } = useAuth();
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [videoEnded, setVideoEnded] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [courseCompleted, setCourseCompleted] = useState(false);
  const [showExam, setShowExam] = useState(false);
  const [examCompleted, setExamCompleted] = useState([]);
  const [examFailed, setExamFailed] = useState(false);
  const [videoProgress, setVideoProgress] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Add this useEffect to load saved progress
  useEffect(() => {
    const loadSavedProgress = async () => {
      if (currentUser) {
        try {
          setIsLoading(true);
          const savedProgress = await getVideoProgress(currentUser.uid);
          if (savedProgress) {
            setVideoProgress(savedProgress);
            const completedFromProgress = Object.entries(savedProgress)
              .filter(([_, data]) => data.completed)
              .map(([index]) => parseInt(index));
            setCompletedVideos(completedFromProgress);
          }
        } catch (error) {
          console.error('Error loading progress:', error);
        }
      }
    };
    loadSavedProgress();
  }, [currentUser]);

  const getGlobalIndex = (setNumber, videoIndex) => {
    let globalIndex = videoIndex;
    // Add up all videos from previous sets
    for (let i = 1; i < setNumber; i++) {
      globalIndex += courseSets[i].videos;
    }
    return globalIndex;
  };

  const getSetVideoIndex = (globalIndex) => {
    let currentSetStart = 0;
    for (let i = 1; i <= currentSet; i++) {
      if (i === currentSet) {
        return globalIndex - currentSetStart;
      }
      currentSetStart += courseSets[i].videos;
    }
    return 0;
  };

  const checkCourseCompletion = () => {
    // Calculate the index of the last video in Set 4
    const totalVideosInPreviousSets = Object.values(courseSets)
      .slice(0, 3) // Get sets 1-3
      .reduce((sum, set) => sum + set.videos, 0);
    
    const lastVideoIndex = totalVideosInPreviousSets + courseSets[4].videos - 1;
    
    // Check if the last video is completed
    const isComplete = completedVideos.includes(lastVideoIndex);
    
    console.log('Last video index:', lastVideoIndex);
    console.log('Completed videos:', completedVideos);
    console.log('Is complete:', isComplete);
    
    setCourseCompleted(isComplete);
  };

  useEffect(() => {
    checkCourseCompletion();
  }, [completedVideos]);

  const handlePlayClick = (index) => {
    setCurrentPlayingIndex(index);
    setIsPlaying(true);
    setVideoEnded(false);
    // Add this setTimeout to ensure video loads before playing
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPaused(false);
      }
    }, 100);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoEnded) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setVideoEnded(false);
        setIsPaused(false);
      } else if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        if (videoContainerRef.current.requestFullscreen) {
          await videoContainerRef.current.requestFullscreen();
        } else if (videoContainerRef.current.webkitRequestFullscreen) {
          await videoContainerRef.current.webkitRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressBarClick = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / progressBar.offsetWidth;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handleVideoEnd = (videoIndex) => {
    console.log('Video Ended:', videoIndex);
    const newCompleted = Array.from(new Set([...completedVideos, videoIndex]));
    setCompletedVideos(newCompleted);
    
    if (currentUser) {
      const newProgress = {
        ...videoProgress,
        [videoIndex]: {
          completed: true,
          timestamp: new Date().toISOString()
        }
      };
      setVideoProgress(newProgress);
      saveVideoProgress(currentUser.uid, newProgress);
    }
    
    // Check if this is the last video in the set
    const currentSetVideos = courseSets[currentSet].videos;
    const isLastVideo = getSetVideoIndex(videoIndex) === currentSetVideos - 1;
    
    if (isLastVideo) {
      // Show exam for last video
      if (!examCompleted.includes(currentSet)) {
        setShowExam(true);
      }
    } else {
      // Show quiz for all other videos
      setShowQuiz(true);
    }
    
    setCurrentPlayingIndex(videoIndex);
  };

  const isSetCompleted = () => {
    const videosInCurrentSet = courseSets[currentSet].videos;
    const currentSetStartIndex = getGlobalIndex(currentSet, 0);
    
    // Check if all videos in the current set are completed
    for (let i = 0; i < videosInCurrentSet; i++) {
      const videoIndex = currentSetStartIndex + i;
      if (!completedVideos.includes(videoIndex)) {
        return false;
      }
    }
    return true;
  };

  const handleNextSet = () => {
    if (isSetCompleted() && !examFailed && currentSet < Object.keys(courseSets).length) {
      setCurrentSet(prev => prev + 1);
      setCurrentPlayingIndex(null);
    }
  };

  const handlePreviousSet = () => {
    if (currentSet > 1) {
      setCurrentSet(prev => prev - 1);
      setCurrentPlayingIndex(null);
    }
  };

  const checkSetCompletion = () => {
    const videosInSet = courseSets[currentSet].videos;
    const startIndex = getGlobalIndex(currentSet, 0);
    const allVideosCompleted = Array.from({ length: videosInSet })
      .every((_, i) => completedVideos.includes(startIndex + i));

    if (allVideosCompleted && !examCompleted.includes(currentSet)) {
      setShowExam(true);
    }
  };

  useEffect(() => {
    checkSetCompletion();
  }, [completedVideos]);

  const handleExamFailure = () => {
    setExamFailed(true);
    setShowExam(false);
    // Reset all progress for current set
    const currentSetFirstVideo = (currentSet - 1) * courseSets[currentSet].videos;
    const currentSetLastVideo = currentSetFirstVideo + courseSets[currentSet].videos - 1;
    
    setCompletedVideos(prev => 
      prev.filter(videoIndex => 
        videoIndex < currentSetFirstVideo || videoIndex > currentSetLastVideo
      )
    );
    setCurrentPlayingIndex(null);
  };

  return (
    <div className={`course-content-container ${transitioning ? 'transitioning' : ''}`}>
      <div className="course-set-header">
        <h1>{courseSets[currentSet].title}</h1>
        <p>{courseSets[currentSet].description}</p>
        <div className="course-set-navigation">
          <span>Set {currentSet} of {Object.keys(courseSets).length}</span>
        </div>
      </div>

      <div className="course-content">
        <div className="videos-grid">
          {Array.from({ length: courseSets[currentSet].videos }).map((_, index) => {
            const globalIndex = (currentSet - 1) * courseSets[currentSet].videos + index;
            const isLocked = index > 0 && !completedVideos.includes(globalIndex - 1);

            return (
              <div key={globalIndex} className="video-item">
                <div className="thumbnail-container">
                  {isLocked ? (
                    <div className="video-locked">
                      <img src={CourseThumbnail} alt="Course Thumbnail" className="locked" />
                      <div className="lock-icon">
                        <FaLock />
                      </div>
                    </div>
                  ) : !isPlaying || currentPlayingIndex !== globalIndex ? (
                    <>
                      <img src={CourseThumbnail} alt="Course Thumbnail" />
                      <div className="play-icon" onClick={() => handlePlayClick(globalIndex)}>
                        <FaPlay />
                      </div>
                    </>
                  ) : (
                    <div className="custom-video-player" ref={videoContainerRef}>
                      <video
                        ref={videoRef}
                        data-index={globalIndex}
                        className="video-player"
                        onEnded={() => handleVideoEnd(globalIndex)}
                        onClick={handleVideoClick}
                        onTimeUpdate={handleTimeUpdate}
                      >
                        <source src={testingVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      <div className="video-controls">
                        <div 
                          className="progress-bar"
                          ref={progressBarRef}
                          onClick={handleProgressBarClick}
                        >
                          <div 
                            className="progress-filled"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        
                        <div className="controls-buttons">
                          <div className="left-controls">
                            <button 
                              className="control-button" 
                              onClick={handleVideoClick}
                            >
                              {videoEnded ? <FaRedo /> : (isPaused ? <FaPlay /> : <FaPause />)}
                            </button>
                          </div>
                          <div className="right-controls">
                            <button 
                              className="control-button"
                              onClick={handleFullScreen}
                            >
                              {isFullscreen ? <FaCompress /> : <FaExpand />}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="video-details">
                  <h1>Video {index + 1}</h1>
                  <p>This is a description for video {index + 1} in the {courseSets[currentSet].title} set.</p>
                  {isLocked ? (
                    <button className="watch-button locked" disabled>
                      Complete Previous Video First
                    </button>
                  ) : (
                    <button className="watch-button" onClick={() => handlePlayClick(globalIndex)}>
                      <FaVideo /> Watch Video
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showQuiz && currentPlayingIndex !== null && 
        getSetVideoIndex(currentPlayingIndex) !== courseSets[currentSet].videos - 1 && (
          <QuizModal
            questions={
              getSetVideoIndex(currentPlayingIndex) < courseSets[currentSet].quizzes.length 
                ? courseSets[currentSet].quizzes[getSetVideoIndex(currentPlayingIndex)].questions
                : courseSets[currentSet].quizzes[0].questions
            }
            onSubmit={() => {
              setCompletedVideos(prev => [...prev, currentPlayingIndex]);
              setShowQuiz(false);
            }}
            forceComplete={true}
          />
        )}

      <div className="course-set-navigation-buttons">
        {currentSet > 1 && (
          <button 
            className="nav-button previous" 
            onClick={handlePreviousSet}
          >
            <FaArrowLeft /> Previous Set
          </button>
        )}
        
        {isSetCompleted() && (
          examFailed ? (
            <button 
              className="nav-button try-exam" 
              onClick={() => setShowExam(true)}
            >
              Try Exam Again
            </button>
          ) : (
            currentSet < Object.keys(courseSets).length && (
              <button 
                className="nav-button next" 
                onClick={handleNextSet}
              >
                Next Set <FaArrowRight />
              </button>
            )
          )
        )}
      </div>

      {courseCompleted && (
        <div className="certificate-button-container">
          <button 
            className="view-certificate-btn"
            onClick={() => setShowCertificate(true)}
          >
            View Certificate
          </button>
        </div>
      )}

      {showCertificate && (
        <Certificate onClose={() => setShowCertificate(false)} />
      )}

      {showExam && (
        <ExamModal
          questions={courseSets[currentSet].exam.questions}
          onSubmit={() => {
            setExamCompleted([...examCompleted, currentSet]);
            setExamFailed(false);
            setShowExam(false);
          }}
          onClose={() => {
            if (!examCompleted.includes(currentSet)) {
              handleExamFailure();
            } else {
              setShowExam(false);
            }
          }}
        />
      )}
    </div>
  );
};

export default CourseContent;

