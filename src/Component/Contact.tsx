import "./Contact.css";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationOn, MdOutlineMarkEmailRead } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiTiktokLogoLight } from "react-icons/pi";

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

const socialLinks = [
  { icon: FaInstagram, label: "Instagram" },
  { icon: CiFacebook, label: "Facebook" },
  { icon: BsTwitterX, label: "Twitter" },
  { icon: CiLinkedin, label: "LinkedIn" },
  { icon: PiTiktokLogoLight, label: "TikTok" },
];

export default function Contact() {
  return (
    <section
      className="contact"
      id="contact"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Us</h2>
          <p>
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
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
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
      </div>
    </section>
  );
}
