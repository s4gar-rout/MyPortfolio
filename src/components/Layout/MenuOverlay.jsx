import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../styles/MenuOverlay.css";

const MenuOverlay = ({ isOpen, onClose, menuAnchor }) => {
  const overlayRef = useRef(null);
  const linksRef = useRef(null);

  useGSAP(() => {
    if (isOpen) {
      // Circular Reveal Animation
      gsap.to(overlayRef.current, {
        clipPath: `circle(150% at ${menuAnchor.x}px ${menuAnchor.y}px)`,
        duration: 0.8,
        ease: "power3.inOut",
        visibility: "visible"
      });

      // Staggered Link Animation
      const links = linksRef.current.querySelectorAll(".menu-item");
      gsap.fromTo(links, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.4, ease: "power3.out" }
      );
    } else {
      // Hide Animation
      gsap.to(overlayRef.current, {
        clipPath: `circle(0% at ${menuAnchor.x}px ${menuAnchor.y}px)`,
        duration: 0.6,
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
    <div className="menu-overlay" ref={overlayRef} style={{ visibility: "hidden" }}>
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
              <span className="menu-text">{link.name}</span>
            </a>
          ))}
        </nav>

        <div className="menu-footer">
          <div className="menu-socials">
            <a href="#"><Icon icon="lucide:instagram" /></a>
            <a href="#"><Icon icon="lucide:linkedin" /></a>
            <a href="#"><Icon icon="lucide:github" /></a>
          </div>
          <div className="menu-email">
            <a href="mailto:hello@example.com">hello@example.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
