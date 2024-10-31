// src/components/Navbar.jsx
import  { useState, useEffect } from 'react';
import data from '../data.json';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    // Adjust 100 to your desired scroll position for switching
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <img src={data.navbar.logo} alt="Logo" className="navbar-logo" />
        <ul className="navbar-list">
          {data.navbar.items.map((item, index) => (
            <li key={index} className="navbar-item">
              <button>{item}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
