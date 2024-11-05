// src/App.jsx
import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import './App.css'; // Ensure this file contains the CSS variables and theme styles

function App() {
  const [isBrightMode, setIsBrightMode] = useState(false);

  const toggleTheme = () => {
    setIsBrightMode(!isBrightMode);
    if (!isBrightMode) {
      document.body.classList.add('bright-mode');
    } else {
      document.body.classList.remove('bright-mode');
    }
  };

  // References for each section
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ landingRef, aboutRef, skillsRef, projectsRef, contactRef }} 
      />
      
      <div ref={landingRef}>
        <LandingPage />
      </div>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactMe />
      </div>
      
      <Footer />

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {isBrightMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        <a href="/Kidus_Cv.pdf" target="_blank" rel="noopener noreferrer" className="cv-button">
          📄 See CV
        </a>
      </div>
    </div>
  );
}

export default App;
