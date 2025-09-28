import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates"; // ✅ Added

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} /> {/* ✅ New Route */}
      </Routes>
    </>
  );
}

export default App;
