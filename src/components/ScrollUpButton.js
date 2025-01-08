import React, { useState, useEffect } from "react";

export default function ScrollUpButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const videoTag = document.querySelector(".background-video");
    if (videoTag) {
      const videoBottom = videoTag.getBoundingClientRect().bottom;
      setIsScrolled(videoBottom < 250); // Change navbar style 50px before crossing
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`scroll-up-btn ${isScrolled ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <i className="fas fa-angle-up"></i>
    </div>
  );
}
