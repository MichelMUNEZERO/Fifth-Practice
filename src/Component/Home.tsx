import React, { useEffect, useMemo, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Home.css";

import image from "./Photo/image.png";
import share from "./Photo/share.jpg";
import mobileLogo from "./Photo/Mobile logo.png";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = useMemo(
    () => ["Home", "About", "Contact", "Services"],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="home-landing">
      <header className="Header-content">
        <div className="logo-image">
          <img src={image} alt="School restaurant logo" />
        </div>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav className="header-middle" aria-label="Primary">
          <ul>
            {navigationItems.map((item) => (
              <li key={item}>
                <button type="button" onClick={handleNavClick}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="button-header">
          <button className="signup-login-button">Login / SignUp</button>
        </div>
      </header>

      <div
        className={`mobile-menu ${isMenuOpen ? "show" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className="mobile-menu__panel"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu__header">
            <div className="mobile-menu__brand">
              <img src={mobileLogo} alt="Dusangire logo" />
              <div>
                <p>Dusangire</p>
                <small>Let's share</small>
              </div>
            </div>
            <button type="button" aria-label="Close menu" onClick={toggleMenu}>
              <FiX />
            </button>
          </div>
          <ul className="mobile-menu__links">
            {navigationItems.map((item) => (
              <li key={`${item}-mobile`}>
                <button type="button" onClick={handleNavClick}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="signup-login-button mobile-menu__cta"
            onClick={handleNavClick}
          >
            Login / Sign Up
          </button>
        </div>
      </div>

      <section className="home-content">
        <div className="header-home">
          <h2>DUSANGIRE</h2>
          <span className="lets">
            Let's <strong>share</strong>
          </span>
          <p>
            Experience the future of campus dining with our digital payment
            system. Quick, secure, and convenient meals for every student.
          </p>
          <div className="cta-buttons">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn more</button>
          </div>
        </div>
        <div className="description-image">
          <img src={share} alt="Students sharing a meal" />
        </div>
      </section>
    </div>
  );
}
