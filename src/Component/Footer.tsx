import "./Footer.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMarkEmailRead } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { MdOutlinePayments } from "react-icons/md";
import { PiStudentDuotone } from "react-icons/pi";
import { GrPlan } from "react-icons/gr";

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
  );
}
