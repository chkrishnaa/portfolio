import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleScroll = () => {
    const videoTag = document.querySelector(".background-video");
    if (videoTag) {
      const videoBottom = videoTag.getBoundingClientRect().bottom;
      setIsScrolled(videoBottom < 50); // Change navbar style 50px before crossing
    }
  };

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = isScrolled
    ? {
        backgroundColor: "crimson",
        color: "white",
        padding: "10px 0",
        zIndex: 10,
      }
    : {
        backgroundColor: "transparent",
        color: "white",
        padding: "30px 0",
        zIndex: 10,
      };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="max-width">
        <div className="logo">
          <a href="#home">
            Port<span style={{ color: isScrolled ? "white" : "crimson" }}>folio.</span>
          </a>
        </div>
        <ul className={`menu ${menuActive ? "active" : ""}`}>
          <li>
            <a href="#home" style={{ color: "inherit" }}>Home</a>
          </li>
          <li>
            <a href="#about" style={{ color: "inherit" }}>About</a>
          </li>
          <li>
            <a href="#services" style={{ color: "inherit" }}>Services</a>
          </li>
          <li>
            <a href="#skills" style={{ color: "inherit" }}>Skills</a>
          </li>
          <li>
            <a href="#team-members" style={{ color: "inherit" }}>Teams</a>
          </li>
          <li>
            <a href="#contact" style={{ color: "inherit" }}>Contact</a>
          </li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={`fas fa-bars ${menuActive ? "active" : ""}`}></i>
        </div>
      </div>
    </nav>
  );
}