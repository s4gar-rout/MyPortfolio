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
            <h3 className="panel-title">// ARCHITECTURE</h3>
            <p className="panel-content">
              I build the logic that powers the pixels, and the art that keeps
              users engaged.
            </p>
            <div className="panel-text">
              <p>
                My journey began at the intersection of graphic design and hard
                engineering. Today, I create immersive environments that live in
                the browser.
              </p>
              <p>
                I focus on performance-optimized 3D scenes, clean
                component-driven React architecture, and real-time state
                management.
              </p>
            </div>
          </div>
        </div>

        <div className="about-mindset">
          <div className="mindset-header">
            <h2>The Mindset</h2>
            <div className="mindset-line"></div>
          </div>

          <div className="mindset-cards">
            <div className="mindset-card">
              <Icon icon="lucide:box" className="card-icon" />
              <h4 className="card-title">Spatial Thinking</h4>
              <p className="card-text">
                Creating depth through 3D layers and camera interactions.
              </p>
            </div>
            <div className="mindset-card">
              <Icon icon="lucide:zap" className="card-icon" />
              <h4 className="card-title">Performance</h4>
              <p className="card-text">
                Silky smooth 60FPS experiences optimized for mobile and desktop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
