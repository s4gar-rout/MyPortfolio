import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../styles/Stack.css';

gsap.registerPlugin(ScrollTrigger);

const allSkills = [
  { icon: "logos:html-5", name: "HTML5", color: "#E34F26" },
  { icon: "logos:css-3", name: "CSS3", color: "#1572B6" },
  { icon: "logos:javascript", name: "JavaScript", color: "#F7DF1E" },
  { icon: "logos:typescript-icon", name: "TypeScript", color: "#3178C6" },
  { icon: "logos:react", name: "React.js", color: "#61DAFB" },
  { icon: "logos:threejs", name: "Three.js", color: "#FFFFFF", invert: true },
  { icon: "logos:tailwindcss-icon", name: "Tailwind", color: "#06B6D4" },
  { icon: "logos:nodejs-icon", name: "Node.js", color: "#339933" },
  { icon: "skill-icons:expressjs-dark", name: "Express.js", color: "#FFFFFF" },
  { icon: "logos:mongodb-icon", name: "MongoDB", color: "#47A248" },
  { icon: "logos:redis", name: "Redis", color: "#DC382D" },
  { icon: "simple-icons:greensock", name: "GSAP", color: "#88CE02" },
  { icon: "simple-icons:greensock", name: "ScrollTrigger", color: "#88CE02" },
  { icon: "ph:train-fill", name: "Locomotive", color: "#FFFFFF" },
  { icon: "ph:fingerprint-simple-fill", name: "Lenis", color: "#FFFFFF" },
  { icon: "logos:git-icon", name: "Git", color: "#F05032" },
  { icon: "logos:github-icon", name: "GitHub", color: "#FFFFFF", invert: true },
  { icon: "logos:visual-studio-code", name: "VS Code", color: "#007ACC" },
  { icon: "logos:vercel-icon", name: "Vercel", color: "#FFFFFF", invert: true },
  { icon: "simple-icons:render", name: "Render", color: "#46E3B7" },
];

const Stack = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  // Divide skills into three rows
  const rowCount = 3;
  const itemsPerRow = Math.ceil(allSkills.length / rowCount);
  const row1 = allSkills.slice(0, itemsPerRow);
  const row2 = allSkills.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = allSkills.slice(itemsPerRow * 2);

  useGSAP(() => {
    const section = sectionRef.current;
    const r1 = row1Ref.current;
    const r2 = row2Ref.current;
    const r3 = row3Ref.current;

    // Pinning the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=1200",
        pin: true,
        scrub: 1,
      }
    });

    // Horizontal animations
    tl.to(r1, { x: "-20%", ease: "none" }, 0);
    tl.to(r2, { x: "20%", ease: "none" }, 0);
    tl.to(r3, { x: "-20%", ease: "none" }, 0);

    // Fade in text lines
    gsap.from(".stack-title, .stack-status", {
        scrollTrigger: {
            trigger: section,
            start: "top center",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
    });

  }, { scope: sectionRef });

  return (
    <section id="stack" className="stack" ref={sectionRef}>
      <div className="stack-container">
        <div className="stack-header">
          <h2 className="stack-title">TECH STACK</h2>
          <p className="stack-status">
            [ Localizing Systems • Syncing Environment • Data Stream Offline ]
          </p>
        </div>

        <div className="stack-scroll-area">
          <div className="row-wrapper">
            <div className="stack-row" ref={row1Ref}>
              {row1.map((tech, index) => (
                <TechCard key={`r1-${index}`} tech={tech} />
              ))}
            </div>
          </div>

          <div className="row-wrapper">
            <div className="stack-row reverse" ref={row2Ref}>
              {row2.map((tech, index) => (
                <TechCard key={`r2-${index}`} tech={tech} />
              ))}
            </div>
          </div>

          <div className="row-wrapper">
            <div className="stack-row" ref={row3Ref}>
              {row3.map((tech, index) => (
                <TechCard key={`r3-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TechCard = ({ tech }) => (
  <div className="stack-card" style={{ '--hover-color': tech.color }}>
    <div className="icon-wrapper">
      <Icon
        icon={tech.icon}
        className={`stack-icon ${tech.invert ? "invert-icon" : ""}`}
      />
    </div>
    <p className="stack-name">{tech.name}</p>
  </div>
);

export default Stack;
