import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

// Layout components
import Background from './components/Layout/Background';
import Navbar from './components/Layout/Navbar';
import CustomCursor from './components/Layout/CustomCursor';
import Preloader from './components/Layout/Preloader';

// Sections
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Stack from './components/Sections/Stack';
import Work from './components/Sections/Work';
import Contact from './components/Sections/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
        lenis.destroy();
        gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useGSAP(() => {
    if (isLoading) return;
    
    // Section transition animations
    const sections = gsap.utils.toArray('section');
    sections.forEach(section => {
      // Find children that should be animated
      const animateItems = section.querySelectorAll('.glass-panel, h2, p, .stack-card, .project-card, form');
      
      if (animateItems.length > 0) {
        gsap.from(animateItems, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out"
        });
      }
    });

    // Logo hover glitch effect
    const logo = document.querySelector('.nav-logo');
    if (logo) {
      const handleLogoMouseEnter = () => {
        gsap.to(logo, { skewX: 10, duration: 0.1, yoyo: true, repeat: 3 });
      };
      logo.addEventListener('mouseenter', handleLogoMouseEnter);
      return () => logo.removeEventListener('mouseenter', handleLogoMouseEnter);
    }
  }, { scope: containerRef });

  return (
    <div className={`app-container ${isLoading ? 'loading' : ''}`} ref={containerRef}>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stack />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
