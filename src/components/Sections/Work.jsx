import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../styles/Work.css';
import moodifyImg from '../../assets/Moodify.png';
import macOsImg from '../../assets/Mac0s.png';
import mirandaImg from '../../assets/miranda.png';
import ochiImg from '../../assets/Ochi.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Neurox AI',
    description: 'An intelligent, dark-themed AI chat application leveraging the MERN stack to provide seamless conversations and dynamic text generation.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveLink: 'https://neurox-ai-two.vercel.app',
  
  },
  {
    id: 2,
    title: 'Moodify',
    description: 'A dynamic web application that intelligently recommends songs to users based on their current mood, delivering a personalized music experience.',
   
    image: moodifyImg,
    tags: ['React', 'Node.js', 'API Integration', 'CSS'],
    liveLink: 'https://moodify-97ks.onrender.com',
   
  },

  {
    id: 3,
    title: 'macOS Portfolio',
    description: 'A highly interactive, MacOS-themed portfolio website simulating a realistic desktop environment with movable windows and applications.',
    image: macOsImg,
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'UI/UX'],
    liveLink: 'https://mac0-s-portfolio.vercel.app/',
 
  },
  {
    id: 4,
    title: 'Ochi Design Clone',
    description: 'A pixel-perfect frontend clone of the award-winning Ochi website, featuring advanced GSAP animations and smooth scrolling.',
    image:ochiImg,
    tags: ['React', 'GSAP', 'Locomotive Scroll', 'Tailwind UI'],
    liveLink: 'https://ochi-design-peach-phi.vercel.app',

  },
  {
    id: 5,
    title: 'Miranda Web Clone',
    description: 'A high-fidelity clone of the Miranda website, showcasing intricate UI details, smooth animations, and beautiful typography.',
   image:mirandaImg,
    tags: ['React', 'GSAP', 'CSS', 'UI Design'],
    liveLink: 'https://miranda-web-five.vercel.app'
  }
];

const Work = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top top+=100',
        endTrigger: '.projects-container',
        end: 'bottom bottom',
        pin: true,
        pinSpacing: false,
      });

      if (index !== cards.length - 1) {
        gsap.to(card, {
          scale: 0.92,
        
          scrollTrigger: {
            trigger: cards[index + 1],
            start: 'top bottom',
            end: 'top top+=100',
            scrub: true,
          }
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section id="work" className="work" ref={containerRef}>
      <div className="work-header work-container">
        <div className="work-title-group">
          <h2 className="work-title">Featured Projects</h2>
          <p className="work-subtitle">
            A curated collection of my best work — blending design,
            performance, and real-world problem solving.
          </p>
        </div>
      </div>

      <div className="projects-container work-container">
        {projects.map((project, index) => (
          <div className="project-card" key={project.id} style={{ zIndex: index + 1 }}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
           
            </div>
            <div className="project-details">
              <div className="project-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
                  Live Demo <Icon icon="lucide:arrow-up-right" />
                </a>
                {project.caseStudyLink && (
                  <a href={project.caseStudyLink} className="cta-secondary">
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="spacer" style={{ height: '15vh' }}></div>
      </div>
    </section>
  );
};

export default Work;
