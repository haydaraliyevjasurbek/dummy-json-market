import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container contact"> 
      <h1 className="contact__title title t">Connection</h1>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-group">
          <label htmlFor="name" className="contact__label">Your name:</label>
          <input
            type="text"
            id="name"
            className="contact__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email" className="contact__label">Email:</label>
          <input
            type="email"
            id="email"
            className="contact__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="message" className="contact__label">Message:</label>
          <textarea
            id="message"
            className="contact__textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="contact__button">Sending</button>
      </form>
    </div>
  );
}

export default Contact;
