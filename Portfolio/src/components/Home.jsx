// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import resumePDF from "../assets/Aarthiresume.pdf"; // ✅ Import Resume here
import Footer from "./Footer"; 
import "../App.css";

const Home = () => {
  const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Frontend Developer",
    "Java Developer"
  ];

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <>
      {/* Hero Section */}
      <section className="home-section text-white d-flex align-items-center">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Text Area */}
            <div className="col-md-8 text-center text-md-start animate-fade-in">
              <h1 className="fw-bold">
                Hey I'm <span className="text-gradient">Aarthi Pazhamalai</span>
              </h1>
              <h2 className="typewriter mt-2">
                I’m a <span className="text-highlight">{displayText}</span>
              </h2>
              <p className="lead mt-3">
                I build responsive web apps, integrate REST APIs, and focus on UI/UX design to
                deliver seamless user experiences and performance-optimized solutions.
              </p>
              <p className="lead">
                Skilled in React.js, JavaScript, Python, and Java with a strong grasp on MVC architecture and backend integration.
              </p>
              <p className="lead">
                Currently building an ATS-driven portfolio and real-time projects to enhance productivity and career visibility.
              </p>

              {/* Social Icons */}
              <div className="social-icons mt-4">
                <a href="https://www.linkedin.com/in/aarthi-pazhamalai-427269302/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="icon-button me-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/Aarthi-IT-2005-github" target="_blank" rel="noreferrer" className="icon-button me-3">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://instagram.com/your-instagram" target="_blank" rel="noreferrer" className="icon-button me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.hackerrank.com/your-hackerrank" target="_blank" rel="noreferrer" className="icon-button">
                  <i className="fab fa-hackerrank"></i>
                </a>
              </div>

              {/* Buttons */}
              <div className="mt-4">
                {/* View Resume in browser */}
                <a
                  href={resumePDF}
                  className="btn btn-outline-light me-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>

                {/* Download Resume directly */}
                <a
                  href={resumePDF}
                  download="Aarthi_Pazhamalai_Resume.pdf"
                  className="btn btn-primary"
                >
                  Download <i className="fas fa-download ms-1"></i>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-md-4 text-center mt-4 mt-md-0 animate-slide-in">
              <img
                src={profile}
                alt="Aarthi Profile"
                className="rounded-circle profile-img"
                style={{ width: "250px", height: "300px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer only shown on Home page */}
      <Footer />
    </>
  );
};

export default Home;
