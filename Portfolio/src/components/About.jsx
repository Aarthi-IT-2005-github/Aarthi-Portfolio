import React from "react";
import profile from "../assets/profile.jpg";
import fullstack from "../assets/fullstack.png";
import "../App.css";

const About = () => {
  return (
    <section className="about-section text-white" style={{ padding: "60px 0 30px 0" }}>
      <div className="container">
        {/* First Row: Profile and Bio */}
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img
              src={profile}
              alt="Aarthi profile"
              className="img-fluid rounded-circle profile-hover"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8 animate-fade-in">
            <h2>Hello, I’m <strong>Aarthi Pazhamalai</strong></h2>
            <p>
              Passionate full stack web developer skilled in <strong>React.js</strong>, <strong>Bootstrap</strong>,
              <strong> Node.js</strong>, and <strong>MongoDB</strong>. I design clean UIs and develop powerful,
              scalable APIs for modern applications.
            </p>
            <p>
              Experienced in using tools like <strong>Postman</strong>, <strong>GitHub</strong>, and <strong>Figma</strong>
              for version control and interface planning. I’ve also contributed to college-level projects involving
              API integration and database design.
            </p>
            <p>
              I have hands-on experience building dynamic web applications using the MERN stack and I’m currently
              enhancing my knowledge in <strong>microservices architecture</strong> and <strong>DevOps</strong> tools.
            </p>
          </div>
        </div>

        {/* Second Row: Full Stack Journey */}
        <div className="row align-items-center mt-5">
          {/* Left Content */}
          <div className="col-md-6 animate-slide-left">
            <h3 className="mb-3">Aspiring Full Stack Developer 🚀</h3>
            <p>
              Full Stack Development involves building everything — from intuitive front-ends to scalable back-ends.
              I specialize in <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and
              <strong> MongoDB</strong> to craft complete web applications.
            </p>
            <p>
              I enjoy solving real-world problems, integrating third-party APIs, and building RESTful services.
              My mission is to deliver smooth, fast, and optimized web apps.
            </p>
          </div>

          {/* Right Image */}
          <div className="col-md-6 text-center animate-slide-right">
            <img
              src={fullstack}
              alt="Full Stack Developer"
              className="img-fluid shadow rounded"
              style={{ maxWidth: "70%", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
