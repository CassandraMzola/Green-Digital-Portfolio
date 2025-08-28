// src/components/Contact.js
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/contact.css";
import { User, Mail, MessageSquare, Send } from "react-feather"; // example icons

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!formRef.current) return;

    // Ensure form is visible immediately
    gsap.set(formRef.current, { opacity: 1, y: 0 });

    gsap.from(formRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 85%",
        toggleActions: "play none none none",
        once: true, // animation triggers only once
      },
    });
  }, []);

  const handleSend = (e) => {
    e.preventDefault();

    const mailtoUrl = `mailto:cassandramzola@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(
      message
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Contact Me</h2>
      <p className="section-subtitle">
        I’m actively looking for roles and collaborations. Feel free to reach out!
      </p>

      <div className="contact-container" ref={formRef}>
        <form className="contact-form-box" onSubmit={handleSend}>
          {/* Name */}
          <div className="input-group">
            <User className="input-icon" />
            <input
              type="text"
              placeholder="Your Name"
              className="contact-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="email"
              placeholder="Your Email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div className="input-group">
            <MessageSquare className="input-group" />
            <textarea
              placeholder="Your Message"
              className="contact-textarea"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Send button */}
          <button type="submit" className="contact-send-btn">
            Send Message <Send className="input-group send-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;




