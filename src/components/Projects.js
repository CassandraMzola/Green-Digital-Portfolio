import React, { useState } from "react";
import ProjectList from "./ProjectList";
import "../styles/projects.css"; // ✅ assuming styles is in src/styles


const Project = () => {
  const [selectedProject, setSelectedProject] = useState(ProjectList[0]);

  return (
    <section id="projects">
      <div className="projects-section-container">
        <h2 className="project-section-title">My Projects</h2>
        <div className="projects-directory-layout">
          <div className="directory-box">
            <div className="directory-sidebar">
              <ul className="directory-tree">
                {ProjectList.map((project, index) => (
                  <li key={index} className="project-item">
                    <button
                      className={`directory-folder ${selectedProject.name === project.name ? "active" : ""}`}
                      onClick={() => setSelectedProject(project)}
                    >
                      {project.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="directory-content">
              <div
                className="project-info-container"
                style={{ backgroundColor: "#0a1f3c" }}
              >
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3 className="project-title">{selectedProject.name}</h3>
                  <p className="project-description">
                    {selectedProject.files[0]?.content || "No description available."}
                  </p>
                  <ul className="project-tags">
                    {selectedProject.tags.map((tag, index) => (
                      <li key={index} className="tag-pill">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="project-links">
                    {selectedProject.github && (
                      <a href={selectedProject.github} className="icon-link" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                    {selectedProject.medium && (
                      <a href={selectedProject.medium} className="icon-link" target="_blank" rel="noreferrer">
                        Medium
                      </a>
                    )}
                    {selectedProject.dataset && (
                      <a href={selectedProject.dataset} className="icon-link" target="_blank" rel="noreferrer">
                        Dataset
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;


