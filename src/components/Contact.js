import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/contact.css";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <section id="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>
          I am actively looking for roles and opportunities to collaborate.
          Feel free to connect and reach out!
        </p>
      </div>

      <div className="contact-container" ref={formRef}>
        <form className="contact-form-box">
          <input type="text" placeholder="Your Name" className="contact-input" required />
          <input type="email" placeholder="Your Email" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-textarea" rows="6" required></textarea>
          <button type="submit" className="contact-send-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



