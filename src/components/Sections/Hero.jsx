import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../styles/Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctasRef = useRef(null);
  const orbRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(
        [
          subtitleRef.current,
          titleRef.current,
          descRef.current,
          ctasRef.current,
        ],
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.5,
        },
      );

      gsap.to(orbRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 300,
        opacity: 0,
      });
    },
    { scope: heroRef },
  ); // Scope ensures animations only target elements inside heroRef

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero-bg">
        <div id="hero-orb" ref={orbRef}></div>
        <div className="mesh-3d">
          <div className="mesh-inner"></div>
          <div className="mesh-glow"></div>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-subtitle" ref={subtitleRef}>
          Hi, I'm
        </p>
        <div className="hero-title-group" ref={titleRef}>
          <h1 className="hero-title">SAGAR</h1>
          <h1 className="hero-title rout-text">ROUT</h1>
        </div>
        <div className="hero-description" ref={descRef}>
          MERN Stack Developer crafting modern, scalable and visually engaging
          web experiences.
        </div>
        <div className="hero-ctas" ref={ctasRef}>
          <a href="#work" className="btn-primary">
            Explore Universe
            <Icon icon="lucide:arrow-down" />
          </a>
          <a href="#contact" className="btn-secondary">
            Start Project
          </a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
