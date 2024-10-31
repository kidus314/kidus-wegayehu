// src/components/ContactMe.jsx
 import React from 'react';
import data from '../data.json';
import './ContactMe.css';

const ContactMe = () => (
  <section className="contact-container">
    <div className="contact-card">
      <div className="contact-form-section">
        <h2 className="contact-title">{data.contact.title}</h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Please fill out the form below or connect with me on social media.
        </p>
        <form className="contact-form">
          <input type="text" placeholder={data.contact.form.firstName} className="form-input" required />
          <input type="text" placeholder={data.contact.form.lastName} className="form-input" required />
          <input type="email" placeholder={data.contact.form.email} className="form-input" required />
          <textarea placeholder={data.contact.form.message} className="form-textarea" required />
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
      <div className="contact-social-section">
        <h3 className="social-title">Connect with Me</h3>
        <div className="contact-socials">
          {data.contact.socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={social.icon} alt={social.platform} className="social-icon" />
            </a>
          ))}
        </div>
        <div className="contact-details">
          <p className="contact-detail"><strong>Phone:</strong> +123-456-7890</p>
          <p className="contact-detail"><strong>Email:</strong> youremail@example.com</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMe;
