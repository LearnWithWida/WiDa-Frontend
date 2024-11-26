import React from "react";
import whatWeOfferImage from "../assets/Offer.png";
import connect from "../assets/connect.png";
import instructor from "../assets/instructor.jpg";
import instructor2 from "../assets/instructor2.jpg";
import choose from "../assets/choose.png";
import banner from "../assets/baner.png";
import "../pages/Global.css";
import box1 from "../assets/1.png";
import box2 from "../assets/2.png";
import box3 from "../assets/3.png";
import box4 from "../assets/4.png";
import choose1 from "../assets/choose1.png";
import choose2 from "../assets/choose2.png";
import choose3 from "../assets/choose3.png";
import choose4 from "../assets/choose4.png";
const About = () => {
  return (
    <div>
      <div className="connect-sec">
        <div style={{ textAlign: "center" }}>
          <img src={connect} alt="connect" className="offer-title" />
        </div>
        <div className="founder-section">
          <div className="founder-image">
            <img src={instructor} alt="Yusuf Mustapha" />
          </div>
          <div className="founder-content">
            <h1>Yusuf Mustapha</h1>
            <p className="founder-title">Founder of WiDa</p>
            <p className="founder-message">
              As the CEO of WiDa, I am deeply committed to empowering
              individuals with the skills and knowledge they need to thrive in
              today's data-driven world. With a passion for innovation and
              education, I lead our mission to bridge the gap between aspiring
              professionals and the ever-evolving fields of data science,
              analysis, and research. Together with my team, we are building a
              platform that not only fosters learning but also inspires
              transformation and growth for our global community.
            </p>
            <button className="connect-btn">Connect</button>
          </div>
        </div>
        <div className="founder-section">
          <div className="founder-image">
            <img src={instructor2} alt="Ibrahim Muiz" />
          </div>
          <div className="founder-content">
            <h1>Ibrahim Muiz</h1>
            <p className="founder-title">Co-Founder of WiDa</p>
            <p className="founder-message">
              “ As the Co-Founder of WiDa, I am proud to have been part of
              shaping a platform that empowers individuals and organizations to
              unlock the potential of data science, analysis, and research. My
              role has been driven by a vision to create accessible,
              high-quality learning opportunities that equip learners to thrive
              in a data-driven world. Together with our incredible team, we are
              building a community of innovators, learners, and professionals
              dedicated to transforming industries and solving real-world
              challenges through data."
            </p>
            <button className="connect-btn">Connect</button>
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

      <div
        className="banner-section"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-content">
          <h1>
            Ready to transform your data skills? Start your journey with us
            today!
          </h1>
          <button className="get-started-btn">Get Started Now</button>
        </div>
      </div>

      <div className="offer-section choose">
        <img src={choose} alt="What We Offer" className="offer-title" />
        <div className="offer-boxes">
          <img src={choose1} alt="Offer 1" className="offer-box" />
          <img src={choose2} alt="Offer 2" className="offer-box" />
          <img src={choose3} alt="Offer 3" className="offer-box" />
          <img src={choose4} alt="Offer 4" className="offer-box" />
        </div>
      </div>
    </div>
  );
};

export default About;
