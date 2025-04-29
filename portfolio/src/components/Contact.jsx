import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jzqe2iq',           // Your actual Service ID
      'template_m61tdel',           // Your Template ID
      form.current,
      '2-P8Drub3UqBarBeu'          // Your Public Key
    ).then(() => {
        setSuccess(true);
        form.current.reset();
      }, (error) => {
        console.error(error.text);
        setSuccess(false);
      });
  };

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Contact Me</h2>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="6" placeholder="Your Message" required />
        <button type="submit">Send</button>
        {success && <p className="success-msg">Message sent successfully!</p>}
      </form>

      {/* CV Download Button */}
      <div className="cv-download">
        <a 
          href="/Ernest.Cheruiyot.pdf"  // Link to the file in the public folder
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
