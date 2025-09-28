// src/components/Footer.jsx
import React, { useEffect, useState } from "react";
import "../App.css";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled 300px down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer-section bg-dark text-white text-center py-4 animate-fade-in">
        <div className="container">
          <p className="mb-1">
            <i className="fas fa-phone-alt me-2"></i> +91-7010897301
          </p>
          <p className="mb-2">
            <i className="fas fa-envelope me-2"></i> aarthipazhamalai1@gmail.com
          </p>

          <div className="social-icons d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://www.linkedin.com/in/aarthi-pazhamalai-427269302"
              target="_blank"
              rel="noreferrer"
              className="icon-link text-white fs-5"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/Aarthi-IT-2005-github"
              target="_blank"
              rel="noreferrer"
              className="icon-link text-white fs-5"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://instagram.com/aarthi"
              target="_blank"
              rel="noreferrer"
              className="icon-link text-white fs-5"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          <p className="mt-3 small">© 2025 Aarthi Pazhamalai. All rights reserved.</p>
        </div>
      </footer>

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;
