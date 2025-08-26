// src/components/About.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Animate each paragraph on scroll
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className="section-heading">About Me</h2>

      <p ref={(el) => (textRefs.current[0] = el)} className="about-text">
        I’m an <span className="highlight">Environmental Scientist</span>, 
        <span className="highlight"> Data Analyst</span>, and 
        <span className="highlight"> Entrepreneur</span> passionate about bridging the gap between 
        <span className="highlight"> science</span>, 
        <span className="highlight"> sustainability</span>, and society. My journey began with a 
        BSc in Environmental and Water Sciences at the University of the Western Cape, where I combined 
        academic learning with practical experience in environmental monitoring, fieldwork, and 
        community engagement.
      </p>

      <p ref={(el) => (textRefs.current[1] = el)} className="about-text">
        Early in my career, I developed skills in 
        <span className="highlight"> social media management</span>, 
        <span className="highlight"> event coordination</span>, and 
        <span className="highlight"> mentorship</span>, creating platforms that amplified the impact 
        of the University Choir and the Green Campus Initiative’s 4IR Conference. These experiences 
        taught me how to communicate complex ideas clearly and engage diverse audiences effectively.
      </p>

      <p ref={(el) => (textRefs.current[2] = el)} className="about-text">
        In 2023, I expanded my skill set into 
        <span className="highlight"> data analytics</span>, completing the Google Professional 
        Data Analytics Certificate and virtual internships with KPMG and Accenture, where I applied 
        <span className="highlight"> SQL</span>, <span className="highlight"> Power BI</span>, 
        <span className="highlight"> Tableau</span>, and <span className="highlight"> Python</span> 
        to solve real-world problems. I also earned an ISO 14001:2015 EMS certification and an 
        Introduction to ESG Certificate from the Corporate Finance Institute, blending environmental 
        knowledge with business and sustainability frameworks.
      </p>

      <p ref={(el) => (textRefs.current[3] = el)} className="about-text">
        I am the founder of <span className="highlight">Earth Connect</span>, a platform dedicated to 
        teaching sustainability in practical, accessible ways. I also developed 
        <span className="highlight"> EcoAnalytics</span>, a data-driven concept aimed at helping 
        cities manage waste efficiently to reduce environmental harm and improve quality of life. 
        These entrepreneurial initiatives were recognized through my participation in the 
        <span className="highlight"> JAMII Femmes Program</span> and the 
        <span className="highlight"> BRICS Women’s Startup Contest</span>.
      </p>

      <p ref={(el) => (textRefs.current[4] = el)} className="about-text">
        Currently, I work as a <span className="highlight">Science Engagement Intern</span> at SARAO, 
        where I got inspiration to develop an <span className="highlight">Interactive Platform</span> to make science more accessible to the public. I’ve 
        presented this platform at the <span className="highlight">Communicating Discovery Science Symposium</span> 
         and the <span className="highlight">African Astronomical Society Conference</span>, demonstrating 
        my commitment to creating meaningful, community-centered solutions.
      </p>

      <p ref={(el) => (textRefs.current[5] = el)} className="about-text">
        I thrive at the intersection of <span className="highlight">science</span>, 
        <span className="highlight"> sustainability</span>, and 
        <span className="highlight"> technology</span>, using data and communication to drive 
        innovation and positive societal impact.
      </p>

      {/* Get In Touch button */}
      <div ref={(el) => (textRefs.current[6] = el)} className="about-buttons">
        <a href="#contact" className="outline-button">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default About;




