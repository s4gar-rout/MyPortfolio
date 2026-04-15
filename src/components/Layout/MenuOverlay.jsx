import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../styles/MenuOverlay.css";

const MenuOverlay = ({ isOpen, onClose, menuAnchor }) => {
  const overlayRef = useRef(null);
  const linksRef = useRef(null);
  const closeRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      // Use menuAnchor if valid, otherwise fall back to top-right corner
      const ax = menuAnchor.x > 0 ? menuAnchor.x : window.innerWidth - 60;
      const ay = menuAnchor.y > 0 ? menuAnchor.y : 60;

      gsap.set(overlayRef.current, { visibility: "visible" });

      // Circular Reveal Animation
      gsap.fromTo(overlayRef.current,
        { clipPath: `circle(0% at ${ax}px ${ay}px)` },
        {
          clipPath: `circle(150% at ${ax}px ${ay}px)`,
          duration: 0.8,
          ease: "power3.inOut",
        }
      );

      // Staggered Link Animation
      const links = linksRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(links,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.4, ease: "power3.out" }
      );

      // Animate close button
      gsap.fromTo(closeRef.current,
        { opacity: 0, rotate: -90 },
        { opacity: 1, rotate: 0, delay: 0.5, duration: 0.3, ease: "power3.out" }
      );
    } else {
      const ax = menuAnchor.x > 0 ? menuAnchor.x : window.innerWidth - 60;
      const ay = menuAnchor.y > 0 ? menuAnchor.y : 60;

      // Hide links before collapsing
      const links = linksRef.current.querySelectorAll(".menu-item");
      gsap.to(links, { opacity: 0, y: -20, stagger: 0.05, duration: 0.2 });
      gsap.to(closeRef.current, { opacity: 0, duration: 0.15 });

      // Hide Animation
      gsap.to(overlayRef.current, {
        clipPath: `circle(0% at ${ax}px ${ay}px)`,
        duration: 0.6,
        delay: 0.1,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { visibility: "hidden" });
        }
      });
    }
  }, { dependencies: [isOpen, menuAnchor] });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Work", href: "#work" },
    { name: "Connect", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
        const element = document.getElementById(href.replace("#", ""));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, 600);
  };

  return (
    <div
      className="menu-overlay"
      ref={overlayRef}
      style={{ visibility: "hidden" }}
    >
      {/* Close button inside menu */}
      <button className="menu-close-btn" ref={closeRef} onClick={onClose} aria-label="Close menu">
        <Icon icon="lucide:x" />
      </button>

      <div className="menu-inner">
        <nav className="menu-nav" ref={linksRef}>
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="menu-item"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              <span className="menu-num">0{i + 1}.</span>
              <span className="menu-link-text">{link.name}</span>
            </a>
          ))}
        </nav>

        <div className="menu-footer">
          <div className="menu-socials">
            <a href="https://www.instagram.com/s4gar___" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Icon icon="lucide:instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/s4gar-rout-3b5807251"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon icon="lucide:linkedin" />
            </a>
            <a
              href="https://github.com/s4gar-rout"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Icon icon="lucide:github" />
            </a>
          </div>
          <div className="menu-email">
            <a href="mailto:sagarrout599@gmail.com">sagarrout599@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
