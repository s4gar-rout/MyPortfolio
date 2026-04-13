import React from 'react';
import { Icon } from '@iconify/react';
import '../../styles/Work.css';

const Work = () => {
    return (
        <section id="work" className="work">
            <div className="work-container">
                <div className="work-header">
                    <div className="work-title-group">
                        <h2 className="work-title">SELECTED WORKS</h2>
                        <p className="work-subtitle">A collection of projects pushing the boundaries of the modern web. Every interface is a story told through interaction.</p>
                    </div>
                    <div className="work-nav">
                        <button className="work-nav-btn">
                            <Icon icon="lucide:chevron-left" />
                        </button>
                        <button className="work-nav-btn">
                            <Icon icon="lucide:chevron-right" />
                        </button>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image-container">
                        <img 
                            src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=2070" 
                            alt="Moodify" 
                            className="project-image" 
                        />
                        <div className="project-overlay">
                            <span className="featured-badge">Featured Case Study</span>
                        </div>
                    </div>
                    <div className="project-details">
                        <h3 className="project-name">Moodify</h3>
                        <p className="project-desc">
                            A next-generation music visualizer and mood-based streaming discovery engine. Integrated with Spotify API and custom WebGL shaders for emotional resonance.
                        </p>
                        <div className="project-tags">
                            <span className="tag">Three.js</span>
                            <span className="tag">Next.js</span>
                            <span className="tag">GLSL</span>
                            <span className="tag">Socket.io</span>
                        </div>
                        <a href="#" className="project-link">
                            VIEW LIVE PROJECT
                            <Icon icon="lucide:external-link" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
