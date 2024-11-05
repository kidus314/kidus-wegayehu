import { useState } from 'react';
import data from '../data.json';
import './ContactMe.css';

const ContactMe = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://kidus-wegayehu.onrender.com/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        setStatusMessage('Failed to send the message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="contact-container">
      <div className="contact-card">
        <div className="contact-form-section">
          <h2 className="contact-title">{data.contact.title}</h2>
          <p className="contact-subtitle">
            I’d love to hear from you! Please fill out the form below or connect with me on social media.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder={data.contact.form.firstName}
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder={data.contact.form.lastName}
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={data.contact.form.email}
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder={data.contact.form.message}
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
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
            <p className="contact-detail"><strong>Phone:</strong> +251-984112342</p>
            <p className="contact-detail"><strong>Email:</strong> kidusweg@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
