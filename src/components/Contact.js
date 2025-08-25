// src/components/ContactForm.js
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icons";
import "../styles/contact.css";;

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <section id="contact" className="contact-page">
      <div className="contact-form">
        <div className="contact-header">
          <h2 className="section-heading">Contact Me</h2>
          <p
            style={{
              color: "#f5f5f5",
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            I am actively looking for roles and opportunities to collaborate.
            Feel free to connect and reach out!
          </p>
        </div>

        <form ref={formRef} className="contact-form-box">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

