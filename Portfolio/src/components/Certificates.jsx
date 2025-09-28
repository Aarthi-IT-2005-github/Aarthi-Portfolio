// src/components/Certificates.jsx
import React, { useState } from 'react';
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.jpg';
import cert6 from '../assets/cert6.jpg';
import cert7 from '../assets/cert7.png';
import cert8 from '../assets/cert8.jpg';
import '../App.css';

const certificates = [
  {
    title: 'TCS iON Career Edge - Young Professional',
    image: cert1,
    description: 'Covered communication, resume writing, interview skills, accounting fundamentals, IT basics, and an overview of AI.'
  },
  {
    title: 'Java & Python Programming Mastery (Udemy)',
    image: cert2,
    description: 'Completed comprehensive training in Java and Python programming to build real-world applications.'
  },
  {
    title: 'Web Development for Beginners (Simplilearn)',
    image: cert3,
    description: 'Learned to build responsive websites using HTML, CSS, and JavaScript through practical projects.'
  },
 {
    title: 'Java Internship',
    image: cert4,
    description: 'During this internship, I learned Java in depth and developed mini projects like a simple currency converter, ATM machine simulation, and a student management system.'
}
,
{
    title: 'Sentiment Analysis with ML',
    image: cert6,
    description: 'Implemented a model to analyze Flipkart product reviews using machine learning and text classification.'
  },
  {
    title: 'Frontend Virtual Internship',
    image: cert7,
    description: 'Developed a Translator project using React, HTML, CSS, and JavaScript.'
},
{
    title: 'Full Stack Development Internship',
    image: cert8,
    description: 'Learned front-end with React & Vite, backend with MongoDB & SQL, API integration, and connecting frontend to backend.'
}
,

  {
    title: 'Academic Performance Merit - 3rd Rank',
    image: cert5,
    description: 'Secured 3rd rank in academic performance (2023–2024) in the Information Technology department.'
  }
];

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCertificate = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="certificates-section py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5">Certificates</h2>
        <div className="row justify-content-center">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="col-md-6 d-flex flex-column align-items-center mb-5 animate-slide-in"
            >
              {/* Image box */}
              <div
                className="certificate-clickbox"
                onClick={() => toggleCertificate(index)}
                style={{
                  cursor: 'pointer',
                  backgroundColor: '#f8f9fa',
                  padding: '15px',
                  borderRadius: '10px',
                  boxShadow: '0 0 12px rgba(0,0,0,0.1)',
                  width: '400px',
                  height: '280px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease',
                }}
              >
               <img
                   src={cert.image}
                    alt={cert.title}
                     style={{
                     width: '100%',
                       height: '100%',
                       objectFit: 'contain',  // ✅ Fixes cropping issue
                            borderRadius: '8px',
                                transition: 'transform 0.3s ease',
  }}


                />
              </div>

              {/* Description area - shows only if clicked */}
              {activeIndex === index && (
                <div
                  className="certificate-detail bg-light text-dark p-3 mt-3 rounded animate-slide-right"
                  style={{ width: '100%', maxWidth: '500px' }}
                >
                  <h5 className="text-primary">{cert.title}</h5>
                  <p>{cert.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
