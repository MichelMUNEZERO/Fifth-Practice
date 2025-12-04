import "./About.css";
import { BsQrCodeScan } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

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

export default function About() {
  return (
    <div id="about">
      <section className="about-section" id="services">
        <div className="about-container">
          <h3>About Dusangire</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                DUSANGIRE is revolutionizing campus dining through a state of
                the art digital payment system designed specifically for
                educational institutions. Our mission is to make meal payments
                quicker, more secure, and incredibly convenient for students,
                faculty, and staff.
              </p>
              <p>
                By integrating cutting edge technology with user-friendly
                interfaces, we eliminate the hassles of traditional payment
                methods. No more waiting in long lines, carrying cash, or
                dealing with lost meal cards. DUSANGIRE streamlines the entire
                dining experience.
              </p>
              <div className="about-features">
                {features.map(({ icon: Icon, title, description }) => (
                  <div className="about-feature" key={title}>
                    <Icon aria-hidden="true" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
