// src/components/About.js
import React, { useEffect, useRef } from "react";
import "../styles/about.css";

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current.querySelectorAll(".animate");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className="section-heading">About Me</h2>

      <p className="about-text animate">
        I’m an <span className="highlight">Environmental Scientist</span>, 
        <span className="highlight"> Data Analyst</span>, and 
        <span className="highlight"> Entrepreneur</span> passionate about bridging the gap between 
        <span className="highlight"> science</span>, 
        <span className="highlight"> sustainability</span>, and society. My journey began with a 
        BSc in Environmental and Water Sciences at the University of the Western Cape, where I combined 
        academic learning with practical experience in environmental monitoring, fieldwork, and 
        community engagement.
      </p>

      <p className="about-text animate">
        Early in my career, I developed skills in 
        <span className="highlight"> social media management</span>, 
        <span className="highlight"> event coordination</span>, and 
        <span className="highlight"> mentorship</span>, creating platforms that amplified the impact 
        of the University Choir and the Green Campus Initiative’s 4IR Conference. These experiences 
        taught me how to communicate complex ideas clearly and engage diverse audiences effectively.
      </p>

      <p className="about-text animate">
        In 2023, I expanded my skill set into 
        <span className="highlight"> data analytics</span>, completing the Google Professional 
        Data Analytics Certificate and virtual internships with KPMG and Accenture, where I applied 
        <span className="highlight"> SQL</span>, <span className="highlight"> Power BI</span>, 
        <span className="highlight"> Tableau</span>, and <span className="highlight"> Python</span> 
        to solve real-world problems. I also earned an ISO 14001:2015 EMS certification and an 
        Introduction to ESG Certificate from the Corporate Finance Institute, blending environmental 
        knowledge with business and sustainability frameworks.
      </p>

      <p className="about-text animate">
        I am the founder of <span className="highlight">Earth Connect</span>, a platform dedicated to 
        teaching sustainability in practical, accessible ways. I also developed 
        <span className="highlight"> EcoAnalytics</span>, a data-driven concept aimed at helping 
        cities manage waste efficiently to reduce environmental harm and improve quality of life. 
        These entrepreneurial initiatives were recognized through my participation in the 
        <span className="highlight"> JAMII Femmes Program</span> and the 
        <span className="highlight"> BRICS Women’s Startup Contest</span>.
      </p>

      <p className="about-text animate">
        Currently, I work as a <span className="highlight">Science Engagement Intern</span> at SARAO, 
        where I got inspiration to develop an <span className="highlight">Interactive Platform</span> to make science more accessible to the public. I’ve 
        presented this platform at the <span className="highlight">Communicating Discovery Science Symposium</span> 
         and the <span className="highlight">African Astronomical Society Conference</span>, demonstrating 
        my commitment to creating meaningful, community-centered solutions.
      </p>

      <p className="about-text animate">
        I thrive at the intersection of <span className="highlight">science</span>, 
        <span className="highlight"> sustainability</span>, and 
        <span className="highlight"> technology</span>, using data and communication to drive 
        innovation and positive societal impact.
      </p>
    </section>
  );
};

export default About;


