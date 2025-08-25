// src/components/Projects.js
import React from "react";
import { FaGithub, FaTable } from "react-icons/fa"; // ✅ Importing icons
import "../styles/projects.css";

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-heading">Projects</h2>

      <div className="projects-container">
        {/* Example Project */}
        <div className="project-card">
          <aside className="sidebar">
            <p>📂 SQL Project</p>
            <p>📄 README</p>
            <p>📊 Dataset</p>
          </aside>

          <div className="project-content">
            <h3>Hotel Operations SQL Analysis</h3>
            <p>
              A SQL-based project analyzing hotel booking and operations data. 
              Includes cleaning, exploration, and visualization.
            </p>
            <div className="project-links">
              <a href="https://github.com/yourusername/your-sql-project" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://public.tableau.com/app/profile/yourusername" target="_blank" rel="noopener noreferrer">
                <FaTable size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

