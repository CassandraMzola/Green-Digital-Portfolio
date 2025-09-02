
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
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
      <a href="https://medium.com/@cassandramzola" target="_blank" rel="noreferrer">
        <SiMedium size={30} />
      </a>
      <a href="mailto:cassandramzola@gmail.com">
        <FaEnvelope size={30} />
      </a>
    </div>
  );
};

export default SocialLinks;

