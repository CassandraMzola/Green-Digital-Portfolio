// src/components/Experience.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/experience.css";

// Import your company logos
import saraoLogo from "../assets/logos/sarao.png";
import accentureLogo from "../assets/logos/accenture.jpg";
import kpmgLogo from "../assets/logos/kpmg.png";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    title: "SARAO – Science Engagement Intern",
    description: `Supported delivery of on-site and off-site outreach activities with schools, communities, and stakeholders.
Coordinated science engagement events including National Science Week, school tours, and community outreach.
Delivered presentations at national and international conferences, including:
African Astronomical Society (AfAS) Conference, 2025.
Communicating Discovery Science Symposium, 2024.
Assisted in the design and facilitation of activities and digital communication campaigns.
Provided administrative support: logistics planning, scheduling visits, preparing reports.`,
    year: "May 2025 – Present",
    logo: saraoLogo,
  },
  {
    title: "Accenture – Virtual Data Analytics Intern",
    description: `Advised a hypothetical social media client by cleaning, modeling, and analyzing 7 datasets to uncover content trends.
Provided insights that informed strategic decisions on content strategies and audience engagement.
Prepared a PowerPoint deck and video presentation to communicate findings to the client and internal stakeholders.`,
    year: "Nov – Dec 2023",
    logo: accentureLogo,
  },
  {
    title: "KPMG Australia – Data Analytics Consultant",
    description: `Advised a client on customer targeting by analyzing demographic and attribute data.
Assessed data quality and completeness to ensure accurate analysis and reliable results.
Developed and presented dashboards to communicate key insights and findings visually.`,
    year: "Oct – Nov 2023",
    logo: kpmgLogo,
  }
];

export default function Experience() {
  const timelineWrapRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    timelineItemsRef.current = timelineItemsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        "#experience .section-heading",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#experience .section-heading",
            start: "top 90%",
            toggleActions: "restart none none reverse",
          },
        }
      );

      // Animate progress line
      gsap.fromTo(
        "#experience-progress-line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineWrapRef.current,
            start: "top 70%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      // Animate each timeline item
      timelineItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? -1 : 1;
        const content = item.querySelector(".timeline-content");
        const dot = item.querySelector(".timeline-dot");
        const date = item.querySelector(".timeline-date");

        const itemTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "restart none none reverse",
          },
        });

        itemTl
          .fromTo(
            content,
            { x: direction * 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
          )
          .fromTo(
            dot,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
            "-=0.3"
          )
          .fromTo(
            date,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            "-=0.2"
          );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="experience">
      <h2 className="section-heading">Experience</h2>

      <div className="timeline-wrapper" ref={timelineWrapRef}>
        <div className="timeline-progress">
          <div id="experience-progress-line"></div>
        </div>

        <div className="timeline-items">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
              ref={(el) => (timelineItemsRef.current[idx] = el)}
            >
              <div className="timeline-dot">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="timeline-logo"
                />
              </div>
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
