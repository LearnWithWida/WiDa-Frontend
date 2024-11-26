import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CourseContent.css";
import Thumbnail from "../assets/CourseThumb.png";
import Curriculum from "../assets/Curriculum.png";
import CourseThumbnail from "../assets/Thumbnail.png";
import { FaPlay, FaPause, FaExpand, FaCompress } from "react-icons/fa";
import testingVideo from "../assets/videos/testing.mp4";
import testingVideo2 from "../assets/videos/testing.mp4";
import CourseThumbnail2 from "../assets/Thumbnail.png";

const CourseContent = () => {
  const { courseName } = useParams();
  const [video, setVideo] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPaused2, setIsPaused2] = useState(false);
  const [progress2, setProgress2] = useState(0);
  const video2Ref = useRef(null);
  const progressBar2Ref = useRef(null);
  const videoContainer2Ref = useRef(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setVideo(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current.paused) {
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
        } else if (videoContainerRef.current.msRequestFullscreen) {
          await videoContainerRef.current.msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressBarClick = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / progressBar.offsetWidth;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const handlePlayClick2 = () => {
    setIsPlaying2(true);
    setVideo(true);
  };

  const handleVideoClick2 = () => {
    if (video2Ref.current.paused) {
      video2Ref.current.play();
      setIsPaused2(false);
    } else {
      video2Ref.current.pause();
      setIsPaused2(true);
    }
  };

  const handleTimeUpdate2 = () => {
    if (video2Ref.current) {
      const progress =
        (video2Ref.current.currentTime / video2Ref.current.duration) * 100;
      setProgress2(progress);
    }
  };

  const handleProgressBarClick2 = (e) => {
    const progressBar = progressBar2Ref.current;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / progressBar.offsetWidth;
    video2Ref.current.currentTime = pos * video2Ref.current.duration;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "mozfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div>
      <div className="course-content">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="video-section">
            <div className="thumbnail-container">
              {!isPlaying ? (
                <>
                  <img src={CourseThumbnail} alt="Course Thumbnail" />
                  <div className="play-icon" onClick={handlePlayClick}>
                    <FaPlay />
                  </div>
                </>
              ) : (
                <div className="custom-video-player" ref={videoContainerRef}>
                  <video
                    ref={videoRef}
                    autoPlay
                    className="video-player"
                    onEnded={() => setVideo(true)}
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
                      <button
                        className="control-button"
                        onClick={handleVideoClick}
                      >
                        {isPaused ? <FaPlay /> : <FaPause />}
                      </button>
                      <button
                        className="control-button"
                        onClick={() => handleFullScreen(videoContainerRef)}
                      >
                        {isFullscreen ? <FaCompress /> : <FaExpand />}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="video-details">
              <h1>Introduction to Data Science</h1>
              <p>
                Data science is the process of extracting meaningful insights and
                knowledge from data using techniques from mathematics, statistics,
                and computer science. It involves data collection, cleaning,
                analysis, and visualization to uncover patterns, make predictions,
                and solve real-world problems. By leveraging tools like Python,
                SQL, and machine learning, data science empowers individuals and
                organizations to make informed, data-driven decisions.
              </p>
              {video ? (
                <button className="quiz-button">Take Quiz</button>
              ) : (
                <button className="watch-button">Watch Video</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
