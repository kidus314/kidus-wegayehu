import { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation,  useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Login from './components/Login';
import './App.css';

function App() {
  const [isBrightMode, setIsBrightMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // to navigate programmatically

  // Check for authentication token on initial render
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) setIsAuthenticated(true);
  }, []);

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

  // Modified scrollToSection function
  const scrollToSection = (ref) => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to home page first if not already there
    }
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: 'smooth' }); // Then scroll to section
    }, 100); // Small delay to ensure navigation happens first
  };

  return (
    <div>
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ landingRef, aboutRef, skillsRef, projectsRef, contactRef }} 
      />

      <Routes>
        <Route path="/" element={
          <div>
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
          </div>
        } />
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <Admin />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>

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
