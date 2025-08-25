// src/components/HeroSection.js
import React from "react";
import { ReactTyped as Typed } from "react-typed";
import SocialLinks from "./SocialLinks"; // import your social icons
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      {/* Left column: Hero text */}
      <div className="hero-left">
        <h1>
          <Typed
            strings={["Hi there! I’m Cassandra."]}
            typeSpeed={50}
            backSpeed={30}
            showCursor={true}
          />
        </h1>
        <p className="bio">
          I’m an Environmental Scientist and Data Analyst with a passion for sustainability and science engagement. 
          I’m a problem-solver at heart, driven to connect people, ideas, and data to create meaningful impact. 
          Whether it’s analysing trends, developing strategies, or building community-focused projects, 
          I love turning concepts into solutions that inspire change.
        </p>
      </div>

      {/* Right column: Tree animation + Social icons */}
      <div className="hero-right">
        <div className="tree-grid">
          <div className="tree"></div>
          <div className="tree"></div>
          <div className="tree"></div>
          <div className="tree"></div>
          <div className="tree"></div>
        </div>
        <SocialLinks />
      </div>
    </section>
  );
};

export default HeroSection;
