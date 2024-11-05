// src/components/Admin.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');





  
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get('https://kidus-wegayehu.onrender.com/messages', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in request headers
          },
        });
        setMessages(response.data); // Store messages in state
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError('Error fetching messages. Please check your authentication.');
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-heading">Admin - Messages</h2>
    
     {/* {error && <p className="error-message">{error}</p>} */}

    
      <div className="messages-list">
        {messages.length === 0 ? (
          <p>No messages available.</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} className="message-item">
              <h3>{msg.name}</h3>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><strong>Date:</strong> {new Date(msg.date).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Admin;
