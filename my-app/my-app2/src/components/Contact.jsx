import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [FirstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [Phoneno, setPhoneno] = useState('');
  const [Message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const handleContact = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (FirstName.trim().length < 5) {
      newErrors.FirstName = 'Name must be at least 5 characters.';
    }

    if (!email.includes('@gmail.com')) {
      newErrors.email = 'Email must include @gmail.com';
    }

    if (!/^\d{10}$/.test(Phoneno)) {
      newErrors.Phoneno = 'Please enter a valid 10-digit mobile number.';
    }

    if (Message.trim() === '') {
      newErrors.Message = 'Please enter a message.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");
      setFirstName('');
      setEmail('');
      setPhoneno('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <section className="contact">
      
      <form>
      
        <h1>CONTACT US</h1>
        
        
        <p style={{ textAlign: "center" }}>Fill out the form and we'll be in touch soon!</p>
        <h2 style={{ textAlign: "center" }}>How we can help you?</h2>

        <div className="input-box">
          <input
            type="text"
            className="field"
            placeholder="Your Name..."
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.FirstName && <span className="error">{errors.FirstName}</span>}

          <input
            type="email"
            className="field"
            placeholder="Your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="tel"
            className="field"
            placeholder="Your mobile..."
            value={Phoneno}
            onChange={(e) => setPhoneno(e.target.value)}
          />
          {errors.Phoneno && <span className="error">{errors.Phoneno}</span>}

          <input
            type="text"
            className="field mess"
            placeholder="Your Message..."
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.Message && <span className="error">{errors.Message}</span>}

          <button onClick={handleContact}>Send Message</button>
        </div>
        
      </form>
    </section>
  
     
  );
}

export default Contact; 