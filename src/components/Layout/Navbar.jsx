import React, { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import MenuOverlay from "./MenuOverlay";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState({ x: 0, y: 0 });
  const toggleRef = useRef(null);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleToggle = () => {
    if (!isMenuOpen) {
      const rect = toggleRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setMenuAnchor({ x: centerX, y: centerY });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a
            href="#"
            className="nav-logo"
            onClick={(e) => scrollToSection(e, "root")}
          >
            <span className="logo-slash">/</span>SR
          </a>

          <div className="nav-links">
            {["about", "stack", "work", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="nav-link"
                onClick={(e) => scrollToSection(e, id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>

          <div className="nav-right">
            <div className="menu-toggle-wrapper" onClick={handleToggle} ref={toggleRef}>
                <span className="menu-text">{isMenuOpen ? "CLOSE" : "MENU"}</span>
                <button className={`menu-toggle ${isMenuOpen ? "open" : ""}`}>
                    <Icon icon={isMenuOpen ? "lucide:x" : "lucide:menu"} />
                </button>
            </div>
          </div>
        </div>
      </nav>

      <MenuOverlay 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        menuAnchor={menuAnchor}
      />
    </>
  );
};

export default Navbar;
