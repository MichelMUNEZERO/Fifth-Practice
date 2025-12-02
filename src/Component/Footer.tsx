import React from "react";
import "./Footer.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMarkEmailRead } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-logo">DUSANGIRE</div>
          <p className="footer-description">
            Transforming campus dining experiences through innovative digital
            payment solutions. Quick, secure, and convenient for every student.
          </p>
          <div className="social-icons">
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
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
        <div className="footer-bottom">
          <p>&copy; 2024 School Restaurant System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
