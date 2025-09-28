// src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import sa1 from '../assets/sa1.png';
import sa2 from '../assets/sa2.png';
import sa3 from '../assets/sa3.png';
import '../App.css';

const projects = [
  {
    title: 'YouTube Cloning',
    image: project1,
    summary: 'YouTube clone UI with video thumbnails, search bar, and responsive layout.',
    description:
      'This project replicates the YouTube UI using HTML, CSS, and JavaScript. It includes a responsive video grid, a sidebar menu, and a search functionality layout simulation. Great for practicing front-end web design concepts.',
    link: 'https://your-link-to-youtube-clone.com'
  },
  {
    title: 'E-Commerce Dashboard',
    image: project2,
    summary: 'Admin dashboard with sales analytics, built using React and Chart.js.',
    description:
      'An E-commerce Admin Panel created using React and Bootstrap. It visualizes product sales, revenue charts, and manages orders using stateful components. Chart.js is used for data visualization and layout is mobile responsive.',
    link: 'https://your-link-to-ecommerce-dashboard.com'
  },
  {
    title: 'Sentiment Analysis (Flipkart)',
    images: [sa1, sa2, sa3],
    summary: 'NLP-based model to classify product reviews as Positive, Negative, or Neutral.',
    description:
      'This machine learning project analyzes Flipkart product reviews to classify them based on sentiment using Python. Text preprocessing, TF-IDF vectorization, and classification algorithms like Logistic Regression were used to achieve efficient sentiment labeling.',
    link: 'https://your-link-to-sentiment-analysis.com'
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (expandedIndex === 2) {
        setCurrentSlide((prev) => (prev + 1) % projects[2].images.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [expandedIndex]);

  const handleToggle = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i);
    setCurrentSlide(0);
  };

  const handleNextSlide = (images) => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrevSlide = (images) => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="projects-section py-5" style={{ background: 'linear-gradient(to right, #1e1e2f, #3c3c6b)' }}>
      <div className="container">
        <h2 className="text-center mb-5 text-white">Projects</h2>
        <div className="d-flex flex-column align-items-center">
          {projects.map((proj, i) => (
            <div className="mb-5 w-100" key={i}>
              <div
                className="project-card p-3 rounded shadow-sm animate-fade-in text-white bg-dark"
                onClick={() => handleToggle(i)}
                style={{ cursor: 'pointer', transition: 'transform 0.3s', maxWidth: '700px', margin: '0 auto' }}
              >
                {proj.images ? (
                  <img src={proj.images[currentSlide]} alt={proj.title} className="img-fluid rounded" />
                ) : (
                  <img src={proj.image} alt={proj.title} className="img-fluid rounded" />
                )}
                <h4 className="mt-3 text-warning">{proj.title}</h4>
                <p className="text-light">{proj.summary}</p>
              </div>

              {expandedIndex === i && (
                <div className="project-details p-4 mt-3 bg-white text-dark rounded shadow animate-slide-in" style={{ maxWidth: '700px', margin: '0 auto' }}>
                  <h5 className="text-primary">About Project</h5>
                  <p>{proj.description}</p>

                  {proj.images && proj.images.length > 1 && (
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <button className="btn btn-sm btn-outline-primary" onClick={() => handlePrevSlide(proj.images)}>
                        ◀ Prev
                      </button>
                      <span>Slide {currentSlide + 1} / {proj.images.length}</span>
                      <button className="btn btn-sm btn-outline-primary" onClick={() => handleNextSlide(proj.images)}>
                        Next ▶
                      </button>
                    </div>
                  )}

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success mt-3"
                  >
                    Click here for project ↗
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;