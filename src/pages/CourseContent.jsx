import React, { useState, useRef, useEffect } from "react";
import "./CourseContent.css";
import CourseThumbnail from "../assets/Thumbnail.png";
import { FaPlay, FaPause, FaExpand, FaCompress, FaLock, FaRedo, FaArrowRight, FaArrowLeft, FaVideo } from "react-icons/fa";
import testingVideo from "../assets/videos/testing.mp4";
import QuizModal from "../components/QuizModal";
import Certificate from "../components/Certificate";

// Define course sets and quizzes
const courseSets = {
  1: {
    title: "Introduction to Data Analysis",
    description: "Fundamentals and basic concepts of data analysis",
    videos: 2,
    quizzes: [
      {
        questions: [
          { question: "What is data analysis?", options: ["Process of examining data", "Writing code", "Creating websites", "None of these"], answer: "Process of examining data" },
          { question: "Why is data analysis important?", options: ["Decision making", "Entertainment", "Exercise", "Gaming"], answer: "Decision making" },
          { question: "What is a data set?", options: ["Collection of data", "Computer program", "Website", "Video game"], answer: "Collection of data" },
          { question: "What is data cleaning?", options: ["Removing errors", "Washing data", "Deleting everything", "None of these"], answer: "Removing errors" }
        ]
      },
      {
        questions: [
          { question: "What is a histogram?", options: ["Data visualization", "Story", "Picture", "Video"], answer: "Data visualization" },
          { question: "What is a scatter plot?", options: ["2D visualization", "Movie plot", "Story plot", "None of these"], answer: "2D visualization" },
          { question: "What is a bar chart?", options: ["Data representation", "Restaurant", "Drink", "None of these"], answer: "Data representation" },
          { question: "What is a pie chart?", options: ["Circular graph", "Dessert", "Recipe", "None of these"], answer: "Circular graph" }
        ]
      }
    ]
  },
  2: {
    title: "Data Cleaning and Preparation",
    description: "Learn how to clean and prepare data for analysis",
    videos: 2,
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
    ]
  },
  3: {
    title: "Statistical Analysis",
    description: "Understanding statistical methods in data analysis",
    videos: 2,
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
    ]
  },
  4: {
    title: "Advanced Data Visualization",
    description: "Creating compelling data visualizations",
    videos: 2,
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
    ]
  }
};

const CourseContent = () => {
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
    if (currentPlayingIndex !== null && currentPlayingIndex !== index) {
      const prevVideo = document.querySelector(`video[data-index="${currentPlayingIndex}"]`);
      if (prevVideo) {
        prevVideo.pause();
        prevVideo.currentTime = 0;
      }
    }
    
    setCurrentPlayingIndex(index);
    setIsPlaying(true);
    setVideoEnded(false);
    setIsPaused(false);
  };

  const handleVideoClick = () => {
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
    setCompletedVideos(prev => {
      const newCompleted = Array.from(new Set([...prev, videoIndex]));
      console.log('New Completed Videos:', newCompleted);
      return newCompleted;
    });
    
    setCurrentPlayingIndex(videoIndex);
    setShowQuiz(true);
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
    if (isSetCompleted() && currentSet < Object.keys(courseSets).length) {
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

      {showQuiz && currentPlayingIndex !== null && (
        <QuizModal
          questions={courseSets[currentSet].quizzes[getSetVideoIndex(currentPlayingIndex)].questions}
          onSubmit={() => {
            setCompletedVideos(prev => [...prev, currentPlayingIndex]);
            setShowQuiz(false);
          }}
          onClose={() => setShowQuiz(false)}
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
        
        {isSetCompleted() && currentSet < Object.keys(courseSets).length && (
          <button 
            className="nav-button next" 
            onClick={handleNextSet}
          >
            Next Set <FaArrowRight />
          </button>
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
    </div>
  );
};

export default CourseContent;
