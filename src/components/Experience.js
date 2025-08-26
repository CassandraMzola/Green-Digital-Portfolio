// src/components/Experience.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaUniversity, FaLaptopCode, FaFemale, FaUsers, FaRecycle, FaGlobe, FaBriefcase 
} from "react-icons/fa";
import "../styles/experience.css";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    title: "SARAO – Science Engagement Intern",
    description: "Conduct educational tours, workshops, and community outreach. Developed the Interactive Online Platform presented at the Communicating Discovery Science Symposium 2024 and African Astronomical Society Conference 2025. Lead sustainability initiatives and Women of Worth events.",
    year: "May 2025 – Present",
    type: "internship"
  },
  {
    title: "KPMG Australia – Data Analytics Consultant",
    description: "Virtual Internship: Conducted data cleaning, modeling, visualization, and reporting. Built dashboards and delivered insights to inform strategy with an environmental focus.",
    year: "Oct – Nov 2023",
    type: "kpmg"
  },
  {
    title: "Accenture – Virtual Data Analytics Intern",
    description: "Virtual Internship: Applied SQL, Power BI, Tableau, and Python for data-driven solutions.",
    year: "Nov 2023",
    type: "accenture"
  },
  {
    title: "EcoAnalytics – Founder",
    description: "Founded a data-powered platform to help cities manage waste efficiently. Pitched at JAMII Femmes Program (Mar 2024) and BRICS Women’s Startup Contest (Jul 2024).",
    year: "Mar 2024 – Jul 2024",
    type: "entrepreneurship"
  },
  {
    title: "Earth Connect – Founder",
    description: "Developed sustainability education platforms for public engagement through social media and interactive content.",
    year: "2024 – Present",
    type: "sustainability"
  },
  {
    title: "University of the Western Cape – Choir Social Media Manager & Deputy Secretary",
    description: "Created and managed choir’s social media, increasing visibility and engagement.",
    year: "Aug 2018 – Jan 2021",
    type: "education"
  },
  {
    title: "Peer Facilitator / Mentor – Office for Student Development",
    description: "Supported first-year students’ transition from high school to university.",
    year: "Jan 2019 – Feb 2019",
    type: "mentorship"
  },
  {
    title: "4IR Conference – Green Campus Initiative",
    description: "Managed PR and social media for the 4IR Conference and assisted with administrative tasks.",
    year: "Mar – Jul 2019",
    type: "event"
  }
];

export default function Experience() {
  const timelineWrapRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    timelineItemsRef.current = timelineItemsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo("#experience .section-title", 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#experience .section-title",
            start: "top 90%",
            toggleActions: "restart none none reverse"
          }
        }
      );

      // Animate progress line
      gsap.fromTo("#experience-progress-line", 
        { height: "0%" },
        { 
          height: "100%", 
          ease: "none",
          scrollTrigger: {
            trigger: timelineWrapRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1
          }
        }
      );

      // Animate each timeline item
      timelineItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const content = item.querySelector('.timeline-content');
        const dot = item.querySelector('.timeline-dot');
        const date = item.querySelector('.timeline-date');

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none reverse"
          }
        });

        itemTl.fromTo(content,
          { x: direction * 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        ).fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
          "-=0.3"
        ).fromTo(date,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          "-=0.2"
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const renderIcon = (type) => {
    switch (type) {
      case 'education': return <FaUniversity className="timeline-icon" />;
      case 'internship': return <FaLaptopCode className="timeline-icon" />;
      case 'kpmg':
      case 'accenture': return <FaBriefcase className="timeline-icon" />;
      case 'entrepreneurship': return <FaRecycle className="timeline-icon" />;
      case 'sustainability': return <FaGlobe className="timeline-icon" />;
      case 'mentorship': return <FaUsers className="timeline-icon" />;
      case 'event': return <FaFemale className="timeline-icon" />;
      default: return null;
    }
  };

  return (
    <div id="experience">
      <div className="section-header">
        <span className="section-title">My Experience & Initiatives</span>
      </div>

      <div className="timeline-wrapper" ref={timelineWrapRef}>
        <div className="timeline-progress">
          <div id="experience-progress-line"></div>
        </div>

        <div className="timeline-items">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
              ref={el => timelineItemsRef.current[idx] = el}
            >
              <div className="timeline-dot">{renderIcon(item.type)}</div>
              <div className="timeline-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <span className="timeline-date">{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
