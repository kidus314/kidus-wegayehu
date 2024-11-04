// src/components/Footer.jsx
// import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-trace">
      <svg width="100%" height="100" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path
          className="trace-path"
          d="M0,50 L100,50 C150,50 150,100 200,100 L400,100 C450,100 450,50 500,50 L700,50 C750,50 750,100 800,100 L1000,100 C1050,100 1050,50 1100,50 L1200,50"
          stroke="#83F0FF" strokeWidth="2" fill="none"
        />
      </svg>
    </div>
    <div className="footer-content">
      <p className="footer-text">© 2024 All Rights Reserved | Built with passion </p>
    </div>
  </footer>
);

export default Footer;
