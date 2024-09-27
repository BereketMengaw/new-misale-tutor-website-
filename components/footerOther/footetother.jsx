import React from "react";
import Image from "next/image";
import "./style.css"; // Import the CSS file

const FooterOther = () => {
  return (
    <footer className="footer">
      <h1 className="footer-title">Visit our social media platforms</h1>
      <div className="social-icons">
        <img src="/logos/facebook.svg" className="social-icon" alt="Facebook" />
        <img
          src="/logos/instagram.png"
          className="social-icon"
          alt="Instagram"
        />
        <img src="/logos/linkdin.png" className="social-icon" alt="LinkedIn" />
        <img src="/logos/telegram.png" className="social-icon" alt="Telegram" />
        <img src="/logos/x.png" className="social-icon" alt="X" />
        <img src="/logos/youtube.svg" className="social-icon" alt="YouTube" />
      </div>
      <div className="footer-text">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterOther;
