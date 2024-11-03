// src/App.jsx
import  { useState } from 'react';
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

  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />

      {/* Floating Theme Toggle Button */}
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        {isBrightMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default App;
