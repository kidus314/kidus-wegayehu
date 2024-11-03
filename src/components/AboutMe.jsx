// src/components/AboutMe.jsx
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
import data from '../data.json';
import './AboutMe.css';



const AboutMe = () => {
  




  return (
    <div className="about-me">
      <h2 className="about-me-title">About Me</h2>
      <div className="about-me-content">
        <div className="about-me-image-container">
          
          <div className="about-me-blob"></div>
          <img src={data.aboutMe.image} alt="About Me" className="about-me-image" />
        </div>
        <p className="about-me-text">{data.aboutMe.description}</p>

      </div>
    </div>
  );
  
};

export default AboutMe;
