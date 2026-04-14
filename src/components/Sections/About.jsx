import React from "react";
import { Icon } from "@iconify/react";
import "../../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="perspective-container">
          <div className="glass-panel">
            <div className="panel-glow"></div>
            <h3 className="panel-title">// ABOUT ME</h3>
            <p className="panel-content">
              I craft scalable digital experiences that blend clean code with
              stunning design.
            </p>
            <div className="panel-text">
              <p>
                I’m a MERN Stack Developer passionate about building modern,
                high-performance web applications. My journey started with
                curiosity for design and evolved into a deep love for clean
                architecture and seamless user experiences.
              </p>
              <p>
                I specialize in creating responsive interfaces, optimized
                backend systems, and smooth interactions using modern tools like
                React, Node.js, and advanced animation libraries.
              </p>
            </div>
          </div>
        </div>

        <div className="about-mindset">
          <div className="mindset-header">
            <h2>My Approach</h2>
            <div className="mindset-line"></div>
          </div>

          <div className="mindset-cards">
            <div className="mindset-card">
              <Icon icon="lucide:box" className="card-icon" />
              <h4 className="card-title">Problem Solving</h4>
              <p className="card-text">
                Breaking down complex problems into scalable and efficient
                solutions.
              </p>
            </div>
            <div className="mindset-card">
              <Icon icon="lucide:zap" className="card-icon" />
              <h4 className="card-title">Performance First</h4>
              <p className="card-text">
                Building fast, optimized applications that deliver smooth user
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
