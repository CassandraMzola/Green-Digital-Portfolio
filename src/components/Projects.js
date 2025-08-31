import React, { useState } from "react";
import ProjectList from "./ProjectList";
import "../styles/projects.css";
import { FiFolderPlus, FiFolderMinus } from "react-icons/fi";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(ProjectList[0]);
  const [openFolders, setOpenFolders] = useState({});

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  return (
    <section id="projects">
      <div className="projects-section-container">
        <h2 className="section-heading">Projects</h2>
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
              <div className="project-info-container" style={{ backgroundColor: "#0a1f3c" }}>
                <div className="project-overlay"></div>
                <div className="project-content">
                  <h3 className="project-title">{selectedProject.name}</h3>

                  {selectedProject.files.map((folder, idx) => (
                    <div key={idx} className="project-folder">
                      <button
                        className="directory-folder"
                        onClick={() => toggleFolder(folder.folder)}
                      >
                        {openFolders[folder.folder] ? (
                          <FiFolderMinus style={{ marginRight: "8px" }} />
                        ) : (
                          <FiFolderPlus style={{ marginRight: "8px" }} />
                        )}
                        {folder.folder}
                      </button>

                      {openFolders[folder.folder] && (
                        <ul className="folder-items">
                          {folder.items.map((file, i) => (
                            <li key={i}>
                              {file.type === "code" ? (
                                <pre>{file.content}</pre>
                              ) : (
                                <p>{file.content}</p>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  <ul className="project-tags">
                    {selectedProject.tags.map((tag, index) => (
                      <li key={index} className="tag-pill">{tag}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    {selectedProject.github && (
                      <a href={selectedProject.github} className="icon-link" target="_blank" rel="noreferrer">
                        GitHub
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



