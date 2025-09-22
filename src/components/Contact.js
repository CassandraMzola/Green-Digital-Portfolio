import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/contact.css";
import { User, Mail, MessageSquare, Send } from "react-feather";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // <-- For feedback

  useEffect(() => {
    if (!formRef.current) return;

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
        once: true,
      },
    });
  }, []);

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5x6dnd8", // replace with your EmailJS service ID
        "template_tvacgh6", // replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "9B7ZimOwRa_Ooh1SS" // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("Message sent! ✅");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error(error);
          setStatus("Failed to send. Please try again. ❌");
        }
      );
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
            <MessageSquare className="input-icon" />
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
            Send Message <Send className="send-icon" />
          </button>

          {/* Status feedback */}
          {status && <p className="contact-status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;




