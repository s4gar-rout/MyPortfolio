import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import '../../styles/Contact.css';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        
        const formData = new FormData(event.target);

       
        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully!");
            event.target.reset();
            setTimeout(() => setResult(""), 4000);
        } else {
            console.log("Error", data);
            setResult("An error occurred. Please try again.");
            setTimeout(() => setResult(""), 4000);
        }
    };

    return (
      <section id="contact" className="contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              LET’S BUILD SOMETHING EXTRAORDINARY
            </h2>
            <p className="contact-subtitle">
              Have an idea? Let’s turn it into reality.
            </p>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="What should I call you?"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="Where can I reach you?"
                className="form-input"
                required
              />
            </div>
            <div className="form-group full-width">
              <label className="form-label">PROJECT DETAILS</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your idea, goals, or what you're looking to build..."
                className="form-textarea"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={result === "Sending..."}
            >
              {result === "Sending..." ? (
                <>
                  <div className="spinner"></div>
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <Icon icon="lucide:send" />
                </>
              )}
            </button>
            {result && result !== "Sending..." && (
              <div
                style={{
                  marginTop: "1.5rem",
                  textAlign: "center",
                  fontSize: "1rem",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: result.includes("Error") ? "#ff4d4d" : "#4ade80",
                }}
              >
                {result}
              </div>
            )}
          </form>

          <footer className="contact-footer">
            <div className="social-links">
              <a href="https://github.com/s4gar-rout" className="social-link">
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/s4gar-rout-3b5807251"
                className="social-link"
              >
                LINKEDIN
              </a>
              <a
                href="https://www.instagram.com/s4gar___"
                className="social-link"
              >
                INSTAGRAM
              </a>
            </div>
          </footer>
        </div>
      </section>
    );
};

export default Contact;
