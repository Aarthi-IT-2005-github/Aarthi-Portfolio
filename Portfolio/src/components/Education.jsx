import React, { useState } from 'react';
import "../App.css";

const Education = () => {
  const timeline = [
    {
      year: "College",
      name: "UCE-BIT Campus, Anna University, Trichy",
      description: "B.Tech IT – CGPA: 8.82",
      experience: "Developed several mini-projects using C, Java, and Python. Participated in paper presentations and technical symposiums. Built a team-based full-stack college project using React and MongoDB."
    },
    {
      year: "12th",
      name: "Aruna Higher Secondary School, Cuddalore",
      description: "Percentage: 89%",
      experience: "Focused on core science subjects. Participated in computer science competitions and completed mini software modules using Scratch and C basics."
    },
    {
      year: "11th",
      name: "Aruna Higher Secondary School, Cuddalore",
      description: "Percentage: 80%",
      experience: "Laid strong academic foundation in computer science, mathematics, and logical reasoning. Built static websites using HTML and CSS during lab hours."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleExperience = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="education-section py-5 text-white">
      <div className="container">
        <h2 className="text-center mb-5">Education</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} animate-fade-in`}
              onClick={() => toggleExperience(index)}
            >
              <div className="timeline-content text-center">
                <h4>{item.year}</h4>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                {activeIndex === index && (
                  <p className="experience-text">{item.experience}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
