import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/techstack.css";
import { RiFileExcel2Fill, RiGitBranchLine } from "react-icons/ri";
import { SiPostgresql, SiPython, SiTableau, SiJupyter, SiR, SiHtml5, SiCss3, SiJavascript, SiArcgis } from "react-icons/si";
import { FaChartBar, FaProjectDiagram } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const techStackData = [
  // Data Analytics
  { name: "Excel", icon: <RiFileExcel2Fill />, color: "#217346" },
  { name: "Power BI", icon: <SiTableau />, color: "#E97627" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "R", icon: <SiR />, color: "#276DC3" },
  { name: "Jupyter Notebook", icon: <SiJupyter />, color: "#F37626" },
  { name: "Git / GitHub", icon: <RiGitBranchLine />, color: "#F05032" },

  // Data Visualization & Stats
  { name: "Statistics", icon: <FaChartBar />, color: "#FF9900" },
  { name: "Matplotlib / Seaborn", icon: <FaProjectDiagram />, color: "#4B8BBE" },

  // Web
  { name: "HTML5", icon: <SiHtml5 />, color: "#E44D26" },
  { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },

  // Environmental / Sustainability Tools
  { name: "ArcGIS / QGIS", icon: <SiArcgis />, color: "#009966" },
];
export default function TechStack() {
  const techStackRef = useRef(null);

  useEffect(() => {
    const icons = techStackRef.current.querySelectorAll(".tech-icon-container");

   
    gsap.fromTo(".tech-title",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#tech-stack",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );


    gsap.fromTo(icons,
      { scale: 0.1, y: -50, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: "#tech-stack",
          start: "top 75%",
        },
      }
    );
  }, []);

  const handleIconHover = (e, enter) => {
    const target = e.currentTarget;
    if (enter) {
      gsap.to(target, { y: -5, scale: 1.1, duration: 0.3, ease: "power2.out" });
      gsap.to(target.querySelector(".tech-icon"), { color: "var(--green-bright)", duration: 0.3 });
    } else {
      gsap.to(target, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(target.querySelector(".tech-icon"), { color: target.dataset.color, duration: 0.3 });
    }
  };

  return (
    <section id="tech-stack" ref={techStackRef}>
      <div className="section-header">
        <span className="section-heading">Tech Stack</span>
      </div>

      <div className="tech-grid-container">
        {techStackData.map((tool) => (
          <div
            key={tool.name}
            className="tech-icon-container"
            data-color={tool.color}
            title={tool.name}
            onMouseEnter={(e) => handleIconHover(e, true)}
            onMouseLeave={(e) => handleIconHover(e, false)}
          >
            <div className="tech-icon" style={{ color: tool.color }}>
              {tool.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
