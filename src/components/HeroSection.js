import React, { useRef, useEffect } from "react";
import { ReactTyped as Typed } from "react-typed";
import { gsap } from "gsap";
import "../styles/hero.css";
import HeroAnimation from "../components/HeroAnimation";

const HeroSection = () => {
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    gsap.set([subtitleRef.current, descRef.current, buttonsRef.current], {
      opacity: 0,
      y: 20,
    });

    gsap.to([subtitleRef.current, descRef.current, buttonsRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: "power2.out",
      delay: 1.2,
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>
          <Typed
            strings={["Hi there! I’m Cassandra."]}
            typeSpeed={50}
            backSpeed={30}
            showCursor={true}
          />
        </h1>

        <div className="intro-subtitle" ref={subtitleRef}>
          I’m an{" "}
          <span className="intro-subtitle-name">
            Environmental Scientist & Data Analyst
          </span>{" "}
          passionate about sustainability.
        </div>

        <div className="intro-desc" ref={descRef}>
          I’m a problem-solver at heart who loves turning concepts into actionable
          solutions. Whether analysing trends, developing strategies, or building
          community-focused projects, I thrive on making meaningful impact.
        </div>

        <div className="intro-buttons" ref={buttonsRef}>
          <a
            href="/assets/Cassandra_Mzola_Resume.pdf"
            className="outline-button btn-effect"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </div>

     
      <div className="hero-right">
        <HeroAnimation />
      </div>
    </section>
  );
};

export default HeroSection;



