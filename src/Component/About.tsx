import React from "react";
import "./About.css";
import { BsQrCodeScan } from "react-icons/bs";
import { MdMobileFriendly } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function About() {
  return (
    <div>
      <section className="about-section">
        <div className="about-container">
          <h3>About Dusangire</h3>
          <div className="about-content">
            <div className="about-text">
              <p>
                DUSANGIRE is revolutionizing campus dining through a
                state-of-the-art digital payment system designed specifically
                for educational institutions. Our mission is to make meal
                payments quicker, more secure, and incredibly convenient for
                students, faculty, and staff.
              </p>
              <p>
                By integrating cutting-edge technology with user-friendly
                interfaces, we eliminate the hassles of traditional payment
                methods. No more waiting in long lines, carrying cash, or
                dealing with lost meal cards. DUSANGIRE streamlines the entire
                dining experience.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <BsQrCodeScan />
                  <h3>QR Code Payments</h3>
                  <p>
                    Secure and fast payment system using QR codes. No more cash
                    or card hassles during meal times.
                  </p>
                </div>
                <div className="about-feature">
                  <RiSecurePaymentLine />
                  <h3> Secure Platform</h3>
                  <p>
                    Access your account, check balance, and make payments right
                    from your smartphone.
                  </p>
                </div>
                <div className="about-feature">
                  <MdMobileFriendly />
                  <h3>Mobile Friendly</h3>
                  <p>
                    Your payments and personal information are protected with
                    enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
