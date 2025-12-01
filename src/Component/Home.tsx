import React from "react";
import "./Home.css";

import image from "./Photo/image.png";
import share from "./Photo/share.jpg";

export default function Home() {
  return (
    <div>
      <div>
        <div className="Header-content">
          <div className="logo-image">
            <img src={image} alt="" />
          </div>
          <div className="header-middle">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="button-header">
            <button className="signup-login-button">Login/ Sign Up</button>
          </div>
        </div>
        <div className="home-content">
          <div className="header-home">
            <h2>Welcome to School Restaurant</h2>
            <p>
              Experience the future of campus dining with our <br />
              digital payment system. Quick, secure, and <br />
              convenient meals for every student.
            </p>
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn more</button>
          </div>
          <div className="description-image">
            <img src={share} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
