
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Credits from "./components/Credits";
import SocialLinks from "./components/SocialLinks";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />

    
      <SocialLinks />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="techstack">
          <TechStack />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>


      <Credits />
    </div>
  );
}

export default App;






