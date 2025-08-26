
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import "./../styles/contact.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/CassandraMzola" target="_blank" rel="noreferrer">
        <FaGithub size={30} />
      </a>
      <a href="https://www.linkedin.com/in/cassandramzola" target="_blank" rel="noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://cassandramzola.wixsite.com/cassandrasportfolio" target="_blank" rel="noreferrer">
        <FiGlobe size={30} />
      </a>
      <a href="mailto:cassandramzola@gmail.com">
        <FaEnvelope size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;

