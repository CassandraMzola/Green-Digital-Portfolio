import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap, Rocket } from "lucide-react"; // icons

const Experience = () => {
  return (
    <section id="experience" className="experience-section bg-[#0a1f3c] text-white py-20">
      <h2 className="text-3xl font-bold text-center text-gold mb-12">
        Experience
      </h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: "#112a4d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #112a4d" }}
          date="2025 – Present"
          iconStyle={{ background: "#FFD700", color: "#fff" }}
          icon={<Rocket />}
        >
          <h3 className="text-xl font-semibold">Science Engagement Intern</h3>
          <h4 className="text-md">SARAO (via SAASTA NYS Programme)</h4>
          <p>
            Developing interactive platforms to make science accessible. 
            Presented at the Communicating Discovery Science Symposium and AfAS Conference.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#112a4d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #112a4d" }}
          date="2024"
          iconStyle={{ background: "#FFD700", color: "#fff" }}
          icon={<Briefcase />}
        >
          <h3 className="text-xl font-semibold">Founder</h3>
          <h4 className="text-md">Earth Connect & EcoAnalytics</h4>
          <p>
            Launched sustainability education platform and waste management startup concept. 
            Recognized by JAMII Femmes and BRICS Women’s Startup Contest.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#112a4d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #112a4d" }}
          date="2023"
          iconStyle={{ background: "#FFD700", color: "#fff" }}
          icon={<GraduationCap />}
        >
          <h3 className="text-xl font-semibold">Data Analytics Upskilling</h3>
          <p>
            Google Professional Data Analytics Certificate, virtual internships with KPMG & Accenture, ISO 14001:2015 EMS, ESG Certification.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#112a4d", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #112a4d" }}
          date="2018 – 2021"
          iconStyle={{ background: "#FFD700", color: "#fff" }}
          icon={<GraduationCap />}
        >
          <h3 className="text-xl font-semibold">BSc Environmental & Water Sciences</h3>
          <h4 className="text-md">University of the Western Cape</h4>
          <p>
            Academic foundation + community engagement, fieldwork, mentoring, and leadership (UWC Choir & 4IR Conference).
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
