/*
 * ========================================
 * HOME COMPONENT
 * ========================================
 * This is the main landing page component that contains:
 * - Header with Navigation
 * - Mobile Menu
 * - Home Section (Hero)
 * - About Section (Services)
 * - Contact Section (Form)
 * - Footer Section
 * ========================================
 */

// ========================================
// IMPORTS
// ========================================
import { useEffect, useMemo, useState } from "react";
import "../App.css";

// Icons
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import { BsQrCodeScan, BsTwitterX } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight, PiStudentDuotone } from "react-icons/pi";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { GrPlan } from "react-icons/gr";
import {
  MdMobileFriendly,
  MdOutlineLocationOn,
  MdOutlineMarkEmailRead,
  MdOutlineSupportAgent,
  MdOutlinePayments,
} from "react-icons/md";

// Images
import image from "./Photo/image.png";
import share from "./Photo/share.jpg";
import mobileLogo from "./Photo/Mobile logo.png";

// ========================================
// DATA CONSTANTS
// ========================================

// Features for About Section
const features = [
  {
    icon: BsQrCodeScan,
    title: "QR Code Payments",
    description:
      "Secure and fast payment system using QR codes no cash or card hassles during meal times.",
  },
  {
    icon: RiSecurePaymentLine,
    title: "Secure Platform",
    description:
      "Your payments and personal information stay protected with enterprise-grade security.",
  },
  {
    icon: MdMobileFriendly,
    title: "Mobile Friendly",
    description:
      "Access your account, check balances, and make payments right from your smartphone.",
  },
];

// Contact Details for Contact Section
const contactDetails = [
  {
    icon: MdOutlineLocationOn,
    title: "Visit Us",
    description: "KK 737 Street, Gikondo, Kigali, Rwanda",
  },
  {
    icon: FiPhoneCall,
    title: "Call Us",
    description: "+250 791 268 906",
  },
  {
    icon: MdOutlineMarkEmailRead,
    title: "Email Us",
    description: "dusangire@gmail.com",
  },
];

// Social Media Links
const socialLinks = [
  { icon: FaInstagram, label: "Instagram" },
  { icon: CiFacebook, label: "Facebook" },
  { icon: BsTwitterX, label: "Twitter" },
  { icon: CiLinkedin, label: "LinkedIn" },
  { icon: PiTiktokLogoLight, label: "TikTok" },
];

// ========================================
// MAIN COMPONENT
// ========================================

export default function Home() {
  // State Management
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationItems = useMemo(
    () => ["Home", "About", "Contact", "Services"],
    []
  );

  // Effect: Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Effect: Handle body scroll on menu open
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

  // Event Handlers
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <div className="home-landing" id="home">
      {/* ========================================
          HEADER / NAVIGATION
          ======================================== */}
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
                <button
                  type="button"
                  onClick={() => handleNavClick(item.toLowerCase())}
                >
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

      {/* ========================================
          MOBILE MENU
          ======================================== */}
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
              <p>Dusangire</p>
              <small>Let's share</small>
            </div>
            <button type="button" aria-label="Close menu" onClick={toggleMenu}>
              <FiX />
            </button>
          </div>
          <ul className="mobile-menu__links">
            {navigationItems.map((item) => (
              <li key={`${item}-mobile`}>
                <button
                  type="button"
                  onClick={() => handleNavClick(item.toLowerCase())}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="signup-login-button mobile-menu__cta"
            onClick={toggleMenu}
          >
            Login / Sign Up
          </button>
        </div>
      </div>

      {/* ========================================
          HOME SECTION
          ======================================== */}
      <section className="home-content">
        <div className="header-home">
          <h2>DUSANGIRE</h2>
          <span className="lets">
            Let's <strong className="share">share</strong>
          </span>
          <p className="paragraph-description">
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

      {/* ========================================
          ABOUT SECTION
          ======================================== */}
      <section className="about-section">
        <div className="about-container">
          <h2>About Dusangire</h2>
          <p className="paragraph-description">
            DUSANGIRE is revolutionizing campus dining through a state of the
            art digital payment system designed specifically for educational
            institutions. Our mission is to make meal payments quicker, more
            secure, and incredibly convenient for students, faculty, and staff.
          </p>
          <p className="paragraph-description">
            By integrating cutting edge technology with user-friendly
            interfaces, we eliminate the hassles of traditional payment methods.
            No more waiting in long lines, carrying cash, or dealing with lost
            meal cards. DUSANGIRE streamlines the entire dining experience.
          </p>
          <div className="about-features">
            {features.map(({ icon: Icon, title, description }) => (
              <div className="about-feature" key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p className="paragraph-description">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          CONTACT SECTION
          ======================================== */}
      <section
        className="contact-container"
        style={{ scrollMarginTop: "80px" }}
      >
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p className="paragraph-description">
            We'd love to hear from you. Reach out for more information about
            implementing DUSANGIRE on your campus.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card contact-info">
            <h3>Get in Touch</h3>
            <ul className="contact-list">
              {contactDetails.map(({ icon: Icon, title, description }) => (
                <li className="contact-item" key={title}>
                  <span className="contact-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <div className="social-icons" aria-label="Social media links">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a href="#" key={label} aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <form className="contact-card contact-form">
            <h3>Send Us a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <div className="button-group">
              <button type="submit" className="submit-button">
                Send Message
              </button>
              <button type="button" className="Whatsapp-button">
                WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ========================================
          FOOTER SECTION
          ======================================== */}
      <footer>
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">DUSANGIRE</div>
            <p className="footer-description">
              Transforming campus dining experiences through innovative digital
              payment solutions. Quick, secure, and convenient for every
              student.
            </p>
            <div className="footer-social-icons">
              <a href="#">
                <BsTwitterX />
              </a>
              <a href="#">
                <CiFacebook />
              </a>
              <a href="#">
                <CiLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <PiTiktokLogoLight />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("home")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i>
                  {" "}
                  <MdOutlineLocationOn />
                </i>
                Kigali, Rwanda
              </li>

              <li>
                <i>
                  {" "}
                  <FiPhoneCall />
                </i>
                +250 791 268 906
              </li>
              <li>
                <i>
                  <MdOutlineMarkEmailRead />
                </i>
                dusangire@gmail.com
              </li>
              <li>
                <i>
                  <MdOutlineSupportAgent />
                </i>
                Support: 24/7 Available
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Our Services</h3>

            <ul>
              <li>
                <i>
                  <LiaBalanceScaleSolid />{" "}
                </i>
                Balance Tracking
              </li>
              <li>
                <i>
                  {" "}
                  <MdOutlinePayments />
                </i>{" "}
                Digital Meal Payments
              </li>
              <li>
                <i>
                  {" "}
                  <PiStudentDuotone />
                </i>
                Student Account Management
              </li>
              <li>
                <i>
                  <GrPlan />
                </i>
                Meal Planning
              </li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 School Restaurant System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
