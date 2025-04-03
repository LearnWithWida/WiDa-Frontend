import { useState, useEffect, useRef } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaExpand,
  FaCompress,
  FaVolumeUp,
  FaVolumeMute,
  FaForward,
  FaBackward,
} from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { LuTvMinimalPlay } from "react-icons/lu";
import testVideo from "../assets/videos/testing.mp4";
import "./Lessons.css";
import { IoPeopleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import logo from "../assets/Widalogo.png";
import { Link, useParams } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { cyberSecurityContent } from '../data/cyberSecurityCourse';
import { dataAnalysisContent } from '../data/dataAnalysisCourse';
import { virtualAssistanceContent } from '../data/virtualAssistanceCourse';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import Failure from '../assets/failure.png';


const courseContents = {
  'cyber-security': cyberSecurityContent,
  'data-analysis': dataAnalysisContent,
  'virtual-assistance': virtualAssistanceContent
};

const Lessons = () => {
  const params = useParams();
  console.log("Route params:", params); // Debug log
  
  const { courseName } = useParams();
  console.log("Course name from params:", courseName); // Debug log
  
  // 1. Group all useState hooks together
  const [isLoading, setIsLoading] = useState(true);
  const [courseContent, setCourseContent] = useState(null);
  const [activeWeek, setActiveWeek] = useState(0);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [activeContent, setActiveContent] = useState(null);
  const [activeTopic, setActiveTopic] = useState("0-0");
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [countdown, setCountdown] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoStates, setVideoStates] = useState({});
  const [isAssessmentWeek, setIsAssessmentWeek] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResultModal, setShowResultModal] = useState(false);
  const [assessmentPassed, setAssessmentPassed] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  useEffect(() => {
    const getCourseContent = () => {
      console.log("Getting course content for:", courseName);
      const courseContents = {
        'virtual-assistant': virtualAssistanceContent,
        'cyber-security': cyberSecurityContent,
        'data-analysis': dataAnalysisContent
      };
      console.log("Available courses:", Object.keys(courseContents));
      const content = courseContents[courseName];
      console.log("Found content:", content);
      
      // Filter out Month Assessment weeks
      if (content && content.weeks) {
        content.weeks = content.weeks.filter(week => 
          !week.title?.toLowerCase().includes('month') && 
          !week.title?.toLowerCase().includes('assessment')
        );
        
        // Add assignment to each remaining week
        content.weeks.forEach((week, weekIndex) => {
          // Add an assignment topic to each week if it doesn't already have one
          const hasAssignment = week.topics?.some(topic => 
            topic.name?.toLowerCase().includes('assignment') || topic.isAssignment
          );
          
          if (!hasAssignment && week.topics) {
            week.topics.push({
              id: `week-${weekIndex}-assignment`,
              name: `Week ${weekIndex + 1} Assignment`,
              duration: "N/A",
              isAssignment: true,
              content: {
                isAssignment: true,
                questions: getAssignmentQuestions(weekIndex)
              }
            });
          }
        });
      }
      
      return content || null;
    };

    // Helper function to get assignment questions for a specific week
    const getAssignmentQuestions = (weekIndex) => {
      const weekSpecificQuestions = {
        0: [
          {
            text: "What is the primary role of a Virtual Assistant?",
            options: [
              "Managing physical office spaces",
              "Providing remote administrative support",
              "In-person customer service",
              "Hardware maintenance"
            ]
          },
          {
            text: "Which tool is most commonly used for scheduling meetings?",
            options: [
              "Microsoft Word",
              "Google Calendar",
              "Adobe Photoshop",
              "QuickBooks"
            ]
          }
        ],
        1: [
          {
            text: "What is an important skill for effective email management?",
            options: [
              "Graphic design",
              "Programming",
              "Prioritization and organization",
              "Video editing"
            ]
          },
          {
            text: "Which communication channel is typically NOT used by Virtual Assistants?",
            options: [
              "Email",
              "Video conferencing",
              "In-person meetings",
              "Instant messaging"
            ]
          }
        ],
        2: [
          {
            text: "What is the best practice for managing a client's calendar?",
            options: [
              "Schedule meetings without confirming availability",
              "Double-book time slots to maximize efficiency",
              "Confirm availability before scheduling",
              "Only schedule meetings during weekends"
            ]
          },
          {
            text: "Which of these is NOT a common virtual assistant task?",
            options: [
              "Email management",
              "Social media management",
              "Physical office maintenance",
              "Data entry"
            ]
          }
        ],
        3: [
          {
            text: "What software is commonly used for project management by virtual assistants?",
            options: [
              "Adobe Photoshop",
              "Trello or Asana",
              "QuickBooks",
              "AutoCAD"
            ]
          },
          {
            text: "Which skill is most important for handling client communications?",
            options: [
              "Technical programming",
              "Graphic design",
              "Clear and professional writing",
              "Video production"
            ]
          }
        ]
      };
      
      return weekSpecificQuestions[weekIndex] || [
        {
          text: `Week ${weekIndex + 1} Assignment Question 1`,
          options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
          ]
        },
        {
          text: `Week ${weekIndex + 1} Assignment Question 2`,
          options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
          ]
        }
      ];
    };

    if (courseName) {
      const content = getCourseContent();
      setCourseContent(content);
      
      if (content) {
        setIsLoading(false);
        if (content.weeks?.[0]?.topics?.[0]) {
          setActiveContent(content.weeks[0].topics[0].content);
        }
      } else {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
  }, [courseName]);

  const toggleWeek = (index) => {
    setActiveWeek(activeWeek === index ? null : index);
  };

  const handleTopicClick = (weekIndex, topicIndex) => {
    const week = courseContent.weeks[weekIndex];
    const topic = week.topics[topicIndex];
    const isAssignment = topic.isAssignment || topic.name?.toLowerCase().includes('assignment');
    
    setIsAssessmentWeek(isAssignment);
    setActiveWeek(weekIndex);
    
    if (isAssignment) {
      setActiveContent(topic.content);
    } else {
      setActiveContent(topic.content);
    }
    
    setActiveTopic(`${weekIndex}-${topicIndex}`);
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnd = () => {
    const [weekIndex, topicIndex] = activeTopic.split("-").map(Number);
    const currentTopicId = courseContent.weeks[weekIndex].topics[topicIndex].id;

    setCompletedTopics((prev) => {
      const newCompletedTopics = [...prev];
      if (!newCompletedTopics.includes(currentTopicId)) {
        newCompletedTopics.push(currentTopicId);
      }
      return newCompletedTopics;
    });

    setShowNextButton(true);
    setCountdown(5);
    setIsPlaying(false);

    console.log("Video ended, marking topic as complete:", currentTopicId);
  };

  const handleNextTopic = () => {
    const [weekIndex, topicIndex] = activeTopic.split("-").map(Number);
    const nextTopicIndex = topicIndex + 1;

    if (nextTopicIndex < courseContent.weeks[weekIndex].topics.length) {
      handleTopicClick(weekIndex, nextTopicIndex);
    } else if (weekIndex + 1 < courseContent.weeks.length) {
      setActiveWeek(weekIndex + 1); 
      handleTopicClick(weekIndex + 1, 0);
    }
    setShowNextButton(false);
    setCountdown(null);
  };

  useEffect(() => {
    let timer;
    if (countdown !== null && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (countdown === 0) {
      handleNextTopic();
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    videoRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      videoContainerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleVolume = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      videoRef.current.volume = volume;
      setIsMuted(false);
    } else {
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickPosition =
      (e.pageX - progressBar.offsetLeft) / progressBar.offsetWidth;
    const newTime = clickPosition * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [activeTopic]);  

  useEffect(() => {
    const handleScroll = () => {
      const leftContainer = document.querySelector('.left-container');
      const rightContainer = document.querySelector('.right-container');
      
      if (!leftContainer || !rightContainer) return;
      
      const leftHeight = leftContainer.scrollHeight;
      const rightHeight = rightContainer.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      
      const maxLeftScroll = leftHeight - windowHeight;
      
      if (rightHeight < leftHeight) {
        if (scrollY >= maxLeftScroll) {
          rightContainer.style.position = 'relative';
          rightContainer.style.top = `${maxLeftScroll}px`;
        } else {
          rightContainer.style.position = 'sticky';
          rightContainer.style.top = '0';
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Enhanced function to calculate both progress and total hours with updated formatting
  const getWeekProgress = (weekIndex) => {
    if (!courseContent?.weeks?.[weekIndex]?.topics) return "0/0";
    
    const week = courseContent.weeks[weekIndex];
    const totalTopics = week.topics.length;
    
    if (totalTopics === 0) return "0/0";
    
    // Count completed topics in this week
    let completedCount = 0;
    let totalHours = 0;
    
    week.topics.forEach(topic => {
      if (completedTopics.includes(topic.id)) {
        completedCount++;
      }
      
      // Calculate total hours from duration strings like "30 mins" or "1 hr 15 mins"
      const duration = topic.duration || "";
      if (duration.includes("hr")) {
        const hrMatch = duration.match(/(\d+)\s*hr/);
        const minMatch = duration.match(/(\d+)\s*min/);
        const hours = hrMatch ? parseInt(hrMatch[1]) : 0;
        const mins = minMatch ? parseInt(minMatch[1]) : 0;
        totalHours += hours + (mins / 60);
      } else if (duration.includes("min")) {
        const minMatch = duration.match(/(\d+)\s*min/);
        const mins = minMatch ? parseInt(minMatch[1]) : 0;
        totalHours += mins / 60;
      }
    });
    
    // Format total hours - remove decimal point and add space, put in parentheses
    const wholeHours = Math.floor(totalHours);
    const minutes = Math.round((totalHours - wholeHours) * 60);
    const formattedHours = minutes > 0 
      ? `(${wholeHours} hrs ${minutes} mins)` 
      : `(${wholeHours} hrs)`;
    
    return `${completedCount}/${totalTopics} ${formattedHours}`;
  };

  // Add this function to handle assignment clicks
  const handleAssignmentClick = (weekIndex) => {
    setIsAssessmentWeek(true);
    setActiveWeek(weekIndex);
    
    // Define different questions for each week's assessment
    const weekSpecificQuestions = {
      0: [
        {
          text: "What is the primary role of a Virtual Assistant?",
          options: [
            "Managing physical office spaces",
            "Providing remote administrative support",
            "In-person customer service",
            "Hardware maintenance"
          ]
        },
        {
          text: "Which tool is most commonly used for scheduling meetings?",
          options: [
            "Microsoft Word",
            "Google Calendar",
            "Adobe Photoshop",
            "QuickBooks"
          ]
        }
      ],
      1: [
        {
          text: "What is an important skill for effective email management?",
          options: [
            "Graphic design",
            "Programming",
            "Prioritization and organization",
            "Video editing"
          ]
        },
        {
          text: "Which communication channel is typically NOT used by Virtual Assistants?",
          options: [
            "Email",
            "Video conferencing",
            "In-person meetings",
            "Instant messaging"
          ]
        }
      ],
      2: [
        {
          text: "What is the best practice for managing a client's calendar?",
          options: [
            "Schedule meetings without confirming availability",
            "Double-book time slots to maximize efficiency",
            "Confirm availability before scheduling",
            "Only schedule meetings during weekends"
          ]
        },
        {
          text: "Which of these is NOT a common virtual assistant task?",
          options: [
            "Email management",
            "Social media management",
            "Physical office maintenance",
            "Data entry"
          ]
        }
      ],
      3: [
        {
          text: "What software is commonly used for project management by virtual assistants?",
          options: [
            "Adobe Photoshop",
            "Trello or Asana",
            "QuickBooks",
            "AutoCAD"
          ]
        },
        {
          text: "Which skill is most important for handling client communications?",
          options: [
            "Technical programming",
            "Graphic design",
            "Clear and professional writing",
            "Video production"
          ]
        }
      ]
    };
    
    // Set active content with week-specific questions
    setActiveContent({
      isAssignment: true,
      questions: weekSpecificQuestions[weekIndex] || [
        {
          text: `Week ${weekIndex + 1} Assignment Question 1`,
          options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
          ]
        },
        {
          text: `Week ${weekIndex + 1} Assignment Question 2`,
          options: [
            "Option A",
            "Option B",
            "Option C",
            "Option D"
          ]
        }
      ]
    });
    
    setActiveTopic(`${weekIndex}-assignment`);
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Updated function to handle assessment submission
  const handleAssessmentSubmit = (selectedAnswers) => {
    // Calculate score based on selected answers
    const questions = activeContent?.questions || [];
    setTotalQuestions(questions.length);
    
    // For testing purposes, let's log the selected answers
    console.log("Selected answers:", selectedAnswers);
    
    // Always set a passing score for testing the success modal
    const score = questions.length; // Perfect score
    setAssessmentScore(score);
    setAssessmentPassed(true);
    
    // Mark the topic as completed
    const topicId = activeContent?.id || `week-${activeWeek}-assessment`;
    if (!completedTopics.includes(topicId)) {
      const updatedCompletedTopics = [...completedTopics, topicId];
      setCompletedTopics(updatedCompletedTopics);
      localStorage.setItem('completedTopics', JSON.stringify(updatedCompletedTopics));
    }
    
    // Show the result modal
    setShowResultModal(true);
  };

  return (
    <div className="lesson">
      <div className="lessons-container">
        <div className="left-container">
          {activeContent ? (
            <div className="content-viewer">
              <div className="video-container" ref={videoContainerRef}>
                {!isPlaying && (
                  <div className="video-overlay" onClick={togglePlay}>
                    <div className="play-button">
                      <FaPlay className="play-icon-large" />
                    </div>
                  </div>
                )}  
                <video
                  ref={videoRef}
                  src={testVideo}
                  onEnded={handleVideoEnd}
                  className="video-player"
                  playsInline
                  onClick={togglePlay}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                />
                <div className="video-controls">
                  <div className="progress-bar" onClick={handleProgressClick}>
                    <div
                      className="progress-filled"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="controls-container">
                    <div className="controls-left">
                      <button
                        onClick={togglePlay}
                        className="control-button small"
                      >
                        {isPlaying ? <FaPause /> : <FaPlay />}
                      </button>
                      <button
                        onClick={handleBackward}
                        className="control-button small"
                      >
                        <FaBackward />
                      </button>
                      <button
                        onClick={handleForward}
                        className="control-button small"
                      >
                        <FaForward />
                      </button>
                    </div>
                    <div className="controls-right">
                      <div className="volume-control">
                        <button
                          onClick={toggleMute}
                          className="control-button small"
                        >
                          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          value={isMuted ? 0 : volume}
                          onChange={handleVolume}
                          className="volume-slider"
                        />
                      </div>
                      <button
                        onClick={toggleFullscreen}
                        className="control-button small"
                      >
                        {isFullscreen ? <FaCompress /> : <FaExpand />}
                      </button>
                    </div>
                  </div>
                </div>
                {showNextButton && (
                  <div className="next-button-container">
                    <button className="next-button" onClick={handleNextTopic}>
                      Next {countdown !== null ? `(${countdown})` : ""}
                    </button>
                  </div>
                )}
              </div>
              <div className="course-cont-text">
                {activeContent ? (
                  isAssessmentWeek ? (
                    <div className="assignment-content">
                      <h2>Assignment Questions</h2>
                      <div className="questions">
                        {activeContent.questions?.map((question, index) => (
                          <div key={index} className="question">
                            <h3>Question {index + 1}</h3>
                            <p className="question-text">{question.text || question}</p>
                            
                            {question.options ? (
                              <div className="options">
                                {question.options.map((option, optionIndex) => (
                                  <div 
                                    key={optionIndex} 
                                    className={`option ${selectedAnswers[`${index}-${optionIndex}`] ? 'selected' : ''}`}
                                    onClick={() => {
                                      // Clear previous selections for this question
                                      const newAnswers = {...selectedAnswers};
                                      Object.keys(newAnswers).forEach(key => {
                                        if (key.startsWith(`${index}-`)) {
                                          delete newAnswers[key];
                                        }
                                      });
                                      // Set new selection
                                      newAnswers[`${index}-${optionIndex}`] = true;
                                      setSelectedAnswers(newAnswers);
                                    }}
                                  >
                                    <div className="radio-container">
                                      <div className={`radio ${selectedAnswers[`${index}-${optionIndex}`] ? 'checked' : ''}`}>
                                        {selectedAnswers[`${index}-${optionIndex}`] && <div className="radio-inner"></div>}
                                      </div>
                                      <span>{option}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <p>This question requires a written response.</p>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <button className="submit-assignment" onClick={() => handleAssessmentSubmit(selectedAnswers)}>Submit</button>
                    </div>
                  ) : (
                    <div className="data-analysis-content">
                      <div className="teacher-stats">
                        <h3>5.3</h3>
                        <div>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                        <div>
                          <IoPeopleOutline />
                          <p style={{ fontSize: "15px", color: "#000" }}>
                            1,500+ Students
                          </p>
                        </div>
                      </div>
                      <h1>Course Overview</h1>
                      <p> 
                      Data analytics is the process of examining and interpreting data to uncover valuable insights, identify patterns, and support informed decision-making. It involves a range of techniques and tools to collect, clean, and analyze data, helping organizations optimize processes, enhance performance, and forecast future trends based on historical information. By leveraging data analytics, businesses can make data-driven decisions, improve efficiency, and maintain a competitive edge.
                      </p>
                      <p>
                      The primary goal of data analytics is to enhance decision-making by providing actionable insights and recommendations. Organizations can use these insights to streamline operations, enhance customer experiences, identify new opportunities, and mitigate potential risks.
                      </p>
                      <p>
                      Data analytics is widely used across industries such as finance, healthcare, marketing, retail, and sports. Companies apply it to understand customer behavior, improve efficiency, manage risks, and drive strategic initiatives.
                      Ultimately, data analytics transforms raw data into meaningful insights, empowering organizations to maximize the value of their data, stay ahead of the competition, and achieve their objectives.
                      </p>
                    </div>
                  )
                ) : (
                  <div className="no-content">
                    <h2 style={{color:"#000"}}>Select a topic to start learning</h2>
                  </div>
                )}
              </div>
              {!isAssessmentWeek && (
                <div style={{marginLeft:"30px"}}>
                  <div className="teacher-info-head">
                    <h1>Instructor</h1>
                    <h3>Yusuf Mustapha</h3>
                    <p>Data Engineer</p>
                  </div>
                  <div className="teacher-stats">
                    <h3>5.3</h3>
                    <div>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div>
                      <IoPeopleOutline />
                      <p style={{color:"#000"}}>1,500+ Students</p>
                    </div>
                  </div>
                  <p style={{color:"#000",fontSize:"15px"}}>Mentor Richards is a skilled Data Analytics professional with a Master's in Big Data Analytics from the University of Derby, UK. He has expertise in various Engineering Tech Stacks, contributing to process optimization and market enhancement for organizations. His strategic approach focuses on promoting business growth and efficiency. Additionally, Richards is committed to knowledge-sharing and continuous learning within the tech community, advancing data analytics and technology.</p>
                </div>
              )}
            </div>
          ) : (
            <div className="no-content">
              <h2 style={{color:"#000"}}>Select a topic to start learning</h2>
            </div>
          )}
        </div>
        <div className="right-container">
          <div className="right-box-container">
            <h3>Course Content</h3>
            {courseContent?.weeks?.map((week, index) => {
              const isAssessmentWeek = week.title?.toLowerCase().includes('assessment') || week.isAssessment;
              
              return (
                <div key={index}>
                  <div className="right-box" onClick={() => toggleWeek(index)}>
                    <div className="right-box-content">
                      <div className="right-box-header">
                        <h1>{week.title}</h1>
                        <p className="hours-text">
                          {getWeekProgress(index)}
                        </p>
                      </div>
                      <div className="right-box-info">
                        {activeWeek === index ? (
                          <FaChevronDown className="arrow-icon" />
                        ) : (
                          <FaChevronRight className="arrow-icon" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`topics-dropdown ${activeWeek === index ? "open" : ""}`}>
                    {isAssessmentWeek ? (
                      // Render single assignment item for assessment weeks
                      <div
                        className={`topic-item assignment ${
                          activeTopic === `${index}-0` ? 'active' : ''
                        }`}
                        onClick={() => handleTopicClick(index, 0)}
                      >
                        <div className="topic-left">
                          <div
                            className={`checkbox ${
                              completedTopics.includes(week.id) ? "checked" : ""
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          />
                          <div className="topic-content">
                            <span className="topic-text">
                              1. Assignment Questions
                            </span>
                            <div className="duration-container">
                              <LuTvMinimalPlay />
                              <span className="duration">
                                {week.content?.duration || 'N/A'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      // Render regular topics for normal weeks
                      week.topics?.map((subtopic, subIndex) => (
                        <div
                          key={subIndex}
                          className={`topic-item ${
                            activeTopic === `${index}-${subIndex}` ? 'active' : ''
                          }`}
                          onClick={() => handleTopicClick(index, subIndex)}
                        >
                          <div className="topic-left">
                            <div
                              className={`checkbox ${
                                completedTopics.includes(subtopic.id) ? "checked" : ""
                              }`}
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            />
                            <div className="topic-content">
                              <span className="topic-text">
                                {subIndex + 1}. {subtopic.name}
                              </span>
                              <div className="duration-container">
                                <LuTvMinimalPlay />
                                <span className="duration">{subtopic.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="WIDA Logo" className="footer-logo" />
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+2348130287334</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <span>+2348130287334</span>
              </div>
              <div className="contact-item">
                <i className="far fa-envelope"></i>
                <span>Email Support</span>
              </div>
            </div>
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><RiTwitterXFill /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <ul>
                <li>About Us</li>
                <li>Courses</li>
                <li>Login</li>
                <li>Testimonials</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>Blog</li>
                <li>Scholarship</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li>Collaborate with Us</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Programs</h3>
              <ul>
                <li>Virtual</li>
                <li>Physical</li>
                <li>Mentorship</li>
                <li>One-on-One</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Subscribe</h3>
              <p>1.18k+ of our students are subscribe around the world.</p>
              <div className="subscribe-form">
                <div className="subscribe-input-wrapper">
                  <HiOutlineMail className="subscribe-icon" />
                  <input type="email" placeholder="Email" />
                </div>
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Assessment Result Modal */}
      {showResultModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>{assessmentPassed ? "Assessment Passed!" : ""}</h3>
            </div>
            <div className="modal-body">
              <div className="result-icon">
                {assessmentPassed ? (
                  <div className="success-icon">✓</div>
                ) : (
                  <img src={Failure} alt="Failure" className="failure-image" />
                )}
              </div>
              <h4>
                {assessmentPassed 
                  ? "Congratulations!" 
                  : "Oops!!! Every Failure is a Step Forward"}
              </h4>
              <p className="score-text">
                Grade Received: {Math.round((assessmentScore/totalQuestions) * 100)}%
              </p>
              <p className="score-detail">
                Your score: {assessmentScore}/{totalQuestions} 
              </p>
            </div>
            <div className="modal-footer">
              {assessmentPassed ? (
                <button 
                  className="modal-button success-button"
                  onClick={() => setShowResultModal(false)}
                >
                  Continue
                </button>
              ) : (
                <div className="failure-buttons">
                  <button 
                    className="modal-button retry-button"
                    onClick={() => setShowResultModal(false)}
                  >
                    Retake Quiz
                  </button>
                  <button 
                    className="modal-button course-button"
                    onClick={() => {
                      setShowResultModal(false);
                      // Logic to go back to course content
                      setIsAssessmentWeek(false);
                      setActiveContent(courseContent.weeks[activeWeek].topics[0].content);
                    }}
                  >
                    Retake Course
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lessons;
