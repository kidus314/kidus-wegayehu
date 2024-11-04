// src/components/Navbar.jsx
import  { useState, useEffect } from 'react';
import data from '../data.json';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) closeMenu();
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Close menu when resizing back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) closeMenu();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={data.navbar.logo} alt="Logo" className="navbar-logo" />

        {/* Hamburger icon for small screens */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          ☰
        </div>

        {/* Navbar list for desktop */}
        <ul className="navbar-list">
          {data.navbar.items.map((item, index) => (
            <li key={index} className="navbar-item">
              <button>{item}</button>
            </li>
          ))}
        </ul>

        {/* Dropdown menu for mobile */}
        {isMenuOpen && (
          <div className="navbar-dropdown">
            {data.navbar.items.map((item, index) => (
              <div key={index} className="navbar-dropdown-item" onClick={toggleMenu}>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
