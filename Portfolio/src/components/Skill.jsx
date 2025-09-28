import React, { useState } from 'react';
import '../App.css';

// Import images
import htmlImg from '../assets/html.jpeg';
import cssImg from '../assets/css.jpeg';
import jsImg from '../assets/js.png';
import reactImg from '../assets/react.jpeg';
import pythonImg from '../assets/python.jpeg';
import javaImg from '../assets/java.jpeg';

const skills = [
  { name: 'HTML', img: htmlImg, desc: 'I use HTML to structure the content on webpages. I understand tags, forms, media, and semantic elements thoroughly.' },
  { name: 'CSS', img: cssImg, desc: 'I use CSS for layout, styling, and animations. I work with Flexbox, Grid, transitions, and responsive design.' },
  { name: 'JavaScript', img: jsImg, desc: 'I use JavaScript for DOM manipulation, event handling, and asynchronous programming using fetch, promises, and ES6+' },
  { name: 'React', img: reactImg, desc: 'I build interactive SPAs with React. Familiar with JSX, props, state, hooks, and component lifecycle.' },
  { name: 'Python', img: pythonImg, desc: 'I use Python for scripting, logic building, and backend tasks like Flask or data processing.' },
  { name: 'Java', img: javaImg, desc: 'I use Java for object-oriented programming, backend logic, and understanding core principles like OOP and exception handling.' }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSkillClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="skills-section text-white">
      <div className="container py-5">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-md-5 mx-3 skill-card animate-fade-in"
              onClick={() => handleSkillClick(index)}
            >
              <img src={skill.img} alt={skill.name} className="img-fluid mb-2 rounded" />
              <h4>{skill.name}</h4>
              {activeIndex === index && (
                <p className="description-text mt-3">{skill.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
