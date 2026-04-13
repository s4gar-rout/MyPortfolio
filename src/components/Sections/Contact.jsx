import React from 'react';
import { Icon } from '@iconify/react';
import '../../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">LET'S MANIFEST</h2>
                    <p className="contact-subtitle">The next dimension awaits</p>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label className="form-label">Identity</label>
                        <input type="text" placeholder="Your Name" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Channel</label>
                        <input type="email" placeholder="Email Address" className="form-input" />
                    </div>
                    <div className="form-group full-width">
                        <label className="form-label">The Vision</label>
                        <textarea rows="6" placeholder="Tell me about your project..." className="form-textarea"></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        SEND MESSAGE
                        <Icon icon="lucide:send" />
                    </button>
                </form>

                <footer className="contact-footer">
                    <div className="social-links">
                        <a href="#" className="social-link">GITHUB</a>
                        <a href="#" className="social-link">LINKEDIN</a>
                        <a href="#" className="social-link">TWITTER</a>
                    </div>
                    <div className="copyright">
                        &copy; 2024 NEXUS LABS. ALL RIGHTS RESERVED.
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
