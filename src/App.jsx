// src/App.jsx
// import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar />
     <LandingPage/>
     <AboutMe/>

     <Skills/>
     <Projects/>
     <ContactMe/>
     <Footer/>
      {/* Add other components here */}
    </div>
  );
}

export default App;
