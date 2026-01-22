import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Animate all paragraphs
    gsap.from(textRefs.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className="section-heading">About Me</h2>

      <p ref={el => (textRefs.current[0] = el)} className="about-text">
        I earned a <span className="highlight">BSc in Environmental and Water Sciences</span> 
        at the University of the Western Cape, gaining hands-on experience in environmental 
        monitoring, fieldwork, and community engagement.
      </p>

      <p ref={el => (textRefs.current[1] = el)} className="about-text">
        Early in my career, I developed skills in <span className="highlight">social media management</span>, 
        <span className="highlight"> event coordination</span>, and <span className="highlight">mentorship</span>, 
        creating platforms that amplified the impact of the University Choir and the 4IR Conference.
      </p>

      <p ref={el => (textRefs.current[2] = el)} className="about-text">
        In 2023, I expanded into <span className="highlight">data analytics</span>, completing the 
        Google Professional Data Analytics Certificate and virtual internships with KPMG and Accenture, 
        using <span className="highlight">SQL</span>, <span className="highlight">Power BI</span>, 
        <span className="highlight">Tableau</span>, and <span className="highlight">Python</span>.
      </p>

      <p ref={el => (textRefs.current[3] = el)} className="about-text">
        I founded <span className="highlight">Earth Connect</span> to teach sustainability practically, 
        and developed <span className="highlight">EcoAnalytics</span> to help cities manage waste efficiently. 
        These initiatives were recognized through the <span className="highlight">JAMII Femmes Program</span> 
        and <span className="highlight">BRICS Women’s Startup Contest</span>.
      </p>

      <p ref={el => (textRefs.current[4] = el)} className="about-text">
        Currently, I work as a <span className="highlight">Science Engagement Intern</span> at SARAO, 
        where I developed an <span className="highlight">Interactive Online Platform</span> to make 
        science more accessible. I’ve presented it at the <span className="highlight">Communicating Discovery Science Symposium</span> 
        and the <span className="highlight">African Astronomical Society Conference</span>.
      </p>

      <p ref={el => (textRefs.current[5] = el)} className="about-text">
        I thrive at the intersection of <span className="highlight">science</span>, 
        <span className="highlight"> sustainability</span>, and <span className="highlight">technology</span>, 
        using data and communication to drive innovation and positive societal impact.
      </p>

      <div ref={el => (textRefs.current[6] = el)} className="about-buttons">
        <a href="#contact" className="outline-button">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default About;





