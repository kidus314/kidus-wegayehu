// src/components/LandingPage.jsx
import  { useEffect, useRef } from 'react';
import gsap from 'gsap';
import data from '../data.json';
import './LandingPage.css';

const LandingPage = () => {
  const titleRef = useRef(null); // Reference to the title element
  const imageRef = useRef(null); // Reference to the hero image

  useEffect(() => {
    // Animation for the hero image to roll in first
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, rotation: -90 }, // Starts with rotation and scaled down
      { opacity: 1, scale: 1, rotation: 0, duration: 5, ease: 'sine.in' }
    );

    // Animation for the title, which follows after the hero image
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 5, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

  return (
    <section className="landing">
      <div className="landing-content">
        <h1 className="landing-title" ref={titleRef}>{data.landingPage.title}</h1>
        <div className="landing-roles">
          {data.landingPage.content.map((role, index) => (
            <p key={index}>{role}</p>
          ))}
        </div>
      </div>
      <img src={data.landingPage.heroImage} alt="Hero" className="landing-image" ref={imageRef} />
    </section>
  );
};

export default LandingPage;
