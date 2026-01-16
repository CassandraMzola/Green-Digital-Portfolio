import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <div className="App">
        <Navbar />
        <SocialLinks />

        <main>
          <Routes>
            {/* Home route */}
            <Route
              path="/"
              element={
                <>
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
                </>
              }
            />

            {/* Single project route */}
            <Route path="/projects/:projectSlug" element={<Projects />} />
          </Routes>
        </main>

        <Credits />
      </div>
    </Router>
  );
}

export default App;







