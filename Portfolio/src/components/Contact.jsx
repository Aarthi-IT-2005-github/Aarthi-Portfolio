import React, { useState } from 'react'; //  Added useState here
import axios from 'axios';               //  Added Axios import
import '../App.css'; // Keep this for styles

const Contact = () => {
  // State hooks added here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  // Submit handler added here
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/contact", {
      name,
      email,
      mobile,
      message,
    })
    .then((res) => {
      alert(res.data.message);
      setName('');
      setEmail('');
      setMobile('');
      setMessage('');
    })
    .catch((err) => {
      console.error("Error submitting form:", err);
      alert("Submission failed. Please try again.");
    });
  };

  return (
    <section className="contact-section py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5 animate-fade-in">Contact Me</h2>
        <div className="row align-items-center">

          {/* Left Side: Contact Info */}
          <div className="col-md-6 mb-4 animate-slide-left">
            <h4 className="mb-4">Connect With Me</h4>
            <ul className="list-unstyled contact-icons">
              <li><i className="fas fa-phone-alt me-2"></i> +91-7010897301</li>
              <li><i className="fas fa-envelope me-2"></i> <a href="mailto:aarthip2005@gmail.com">aarthipazhamalai1@gmail.com</a></li>
              <li><i className="fab fa-github me-2"></i> <a href="https://github.com/Aarthi-IT-2005-github" target="_blank" rel="noreferrer">github.com/AarthiPazhamalai</a></li>
              <li><i className="fab fa-linkedin me-2"></i> <a href="https://www.linkedin.com/in/aarthi-pazhamalai-427269302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">linkedin.com/in/AarthiPazhamalai</a></li>
              <li><i className="fab fa-instagram me-2"></i> <a href="https://instagram.com/aarthi" target="_blank" rel="noreferrer">instagram.com/aarthi</a></li>
              <li><i className="fab fa-hackerrank me-2"></i> <a href="https://hackerrank.com/aarthip" target="_blank" rel="noreferrer">hackerrank.com/aarthip</a></li>
            </ul>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-md-6 animate-slide-right">
            <h4 className="mb-4">Send a Message</h4>
            {/* Added onSubmit */}
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Added value and onChange */}
              <input 
                type="text" 
                className="form-control mb-3" 
                placeholder="Your Name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                type="email" 
                className="form-control mb-3" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                type="text" 
                className="form-control mb-3" 
                placeholder="Mobile Number" 
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <textarea 
                className="form-control mb-3" 
                rows="4" 
                placeholder="Describe your requirement"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button type="submit" className="btn btn-outline-light hover-glow">Submit</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
