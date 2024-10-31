// src/components/AboutMe.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import data from '../data.json';
import './AboutMe.css';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    // Initial scale and fade-in animation with glow
    gsap.fromTo(
      imageRef.current,
      { scale: 0.5, opacity: 0, boxShadow: '0px 0px 0px 0px rgba(131, 240, 255, 0)' },
      {
        scale: 1,
        opacity: 1,
        duration: 5,
        ease: 'power2.out',
        boxShadow: '0px 0px 20px 10px rgba(131, 240, 255, 0.6)',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          onComplete: () => {
            // Start pulsing glow effect after initial animation completes
            gsap.to(imageRef.current, {
              boxShadow: '0px 0px 40px 45px rgba(131, 240, 255, 0.4)',
              duration: 4,
              ease: 'power1.inOut',
            //   repeat: -1, // Loop indefinitely
              yoyo: true, // Glow fades in and out
            });
          },
        },
      }
    );
  }, []);

  return (
    <section className="about-me">
      <h2 className="about-me-title">{data.aboutMe.title}</h2>
      <div className="about-me-content">
        <img src={data.aboutMe.image} alt="About me" className="about-me-image" ref={imageRef} />
        <p className="about-me-text">{data.aboutMe.description}</p>
      </div>
    </section>
  );
};

export default AboutMe;
