import React from "react";
import "./Global.css";
import homeImage from "../assets/home.png";
import whatWeOfferImage from "../assets/Offer.png";
import courseImage from "../assets/course.png";
import Tryout1 from "../assets/Tryout1.png";
import Tryout2 from "../assets/Tryout2.png";
import box1 from "../assets/1.png";
import box2 from "../assets/2.png";
import box3 from "../assets/3.png";
import box4 from "../assets/4.png";
import DataImg from "../assets/data.png";
import instructor from "../assets/instructor.png";
import { courseData } from "../Data";
import { useState, useRef, useEffect } from "react";
import FAQImage from "../assets/FAQ.png";
import FAQ from "../components/Faq";
import Feedback from "../components/Feedback";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Data Science Student",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "The course structure and teaching methodology are exceptional. I've learned more in months than I did in years.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Research Analyst",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "The practical approach to learning has helped me apply these skills directly in my work. Highly recommended!",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Data Analyst",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "The support from instructors is outstanding. They're always available to help and guide you through complex concepts.",
  },
];

const useSlider = (slideInterval = 3000) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPos(e.type === "mousedown" ? e.pageX : e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentPosition =
      e.type === "mousemove" ? e.pageX : e.touches[0].clientX;
    const translate = prevTranslate + currentPosition - startPos;

    const maxTranslate = 0;
    const minTranslate = -(
      slideRef.current?.scrollWidth - slideRef.current?.clientWidth
    );

    if (translate > maxTranslate) {
      setCurrentTranslate(maxTranslate);
    } else if (translate < minTranslate) {
      setCurrentTranslate(minTranslate);
    } else {
      setCurrentTranslate(translate);
    }

    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(${translate}px)`;
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setPrevTranslate(currentTranslate);
  };

  return {
    currentSlide,
    slideRef,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    setCurrentSlide,
  };
};

const Home = () => {
  const navigate = useNavigate();
  const {
    currentSlide,
    slideRef,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
    setCurrentSlide,
  } = useSlider();
  const handleInstructorClick = () => {
    navigate("/instructors");
  };
  return (
    <>
      <div className="home-container">
        <div className="content-wrapper">
          <img src={homeImage} alt="Home" className="home-image" />
          <div className="button-group">
            <button className="primary-btn">Join us now</button>
            <button className="secondary-btn">Explore course</button>
          </div>
        </div>
      </div>

      <div className="offer-section">
        <img
          src={whatWeOfferImage}
          alt="What We Offer"
          className="offer-title"
        />
        <div className="offer-boxes">
          <img src={box1} alt="Offer 1" className="offer-box" />
          <img src={box2} alt="Offer 2" className="offer-box" />
          <img src={box3} alt="Offer 3" className="offer-box" />
          <img src={box4} alt="Offer 4" className="offer-box" />
        </div>
      </div>

      <div className="course-section">
        <img src={courseImage} alt="Course" className="course-title" />
        <div className="course-list">
          {courseData.map((course, index) => (
            <div
              key={course.id}
              className={`course-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="course-image">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="course-content">
                <h1>{course.title}</h1>
                <p className="level">{course.level}</p>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html: course.description.replace(
                      /\*\*(.*?)\*\*/g,
                      "<strong>$1</strong>"
                    ),
                  }}
                />
                <button
                  className="learn-more-btn"
                  onClick={() =>
                    navigate(`/course/${course.title.toLowerCase()}`)
                  }
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tryout-section">
        <div className="tryout-container">
          <div className="tryout-image-wrapper">
            <img src={Tryout1} alt="Tryout 1" className="tryout-image" />
          </div>
          <div className="tryout-right">
            <img
              src={Tryout2}
              alt="Tryout 2"
              className="tryout-image changes"
            />
            <button className="tryout-btn">Try it out</button>
          </div>
        </div>
      </div>
      <div className="data-sec">
        <div className="data-content">
          <h1>Expert Mentorship</h1>
          <p>
            Unlock your potential with expert mentorship that bridges the gap
            between theory and real-world application. Our mentors are seasoned
            professionals and industry leaders with hands-on experience in their
            fields. They offer personalized guidance, helping you navigate
            challenges, enhance your skills, and achieve your goals. Through
            one-on-one sessions, group discussions, and tailored feedback,
            you’ll gain invaluable insights into industry trends, best
            practices, and innovative techniques. Whether you're a student, a
            professional seeking to advance, or an entrepreneur with big ideas,
            expert mentorship ensures you have the support and direction needed
            to excel in your journey.
          </p>
          <button onClick={handleInstructorClick} className="learn-more-btn">
            Learn More →
          </button>
        </div>
        <div className="data-image-wrapper">
          <img src={instructor} alt="Data" className="data-image" />
        </div>
      </div>
      <div className="Testimonials-section">
        <h3>Testimonials</h3>
        <h1>What Are They Saying About Us</h1>
        <div className="slider-container">
          <div
            className="slider-wrapper"
            ref={slideRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="FAQ">
        <img src={FAQImage} alt="FAQ" className="faq-title" />
        <FAQ />
      </div>
      <div>
        <Feedback />
      </div>
      <div className="data-sec">
        <div className="data-content">
          <h1>
            Understanding Data Sets: The Foundation of Insightful Analysis
          </h1>
          <p>
            A data set is a structured collection of data, organized in rows and
            columns, where each row represents a record and columns contain
            different attributes. Analyzing data sets helps uncover patterns,
            trends, and relationships, providing valuable insights for informed
            decision-making. Whether for statistical analysis or machine
            learning, working with data sets transforms raw information into
            actionable knowledge.
          </p>
          <button className="learn-more-btn">Learn More →</button>
        </div>
        <div className="data-image-wrapper">
          <img src={DataImg} alt="Data" className="data-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
