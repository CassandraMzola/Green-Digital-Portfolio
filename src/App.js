// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <h2 className="section-heading">About Me</h2>
        <About />
      </section>

      <section id="experience">
        <h2 className="section-heading">Experience</h2>
        <Experience />
      </section>

      <section id="projects">
        <h2 className="section-heading">Projects</h2>
        <Projects />
      </section>

      <section id="techstack">
        <h2 className="section-heading">Tech Stack</h2>
        <TechStack />
      </section>

      <section id="contact">
        <h2 className="section-heading">Contact</h2>
        <Contact />
      </section>
    </div>
  );
}

export default App;


