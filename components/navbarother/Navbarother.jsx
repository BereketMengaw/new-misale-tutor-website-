"use client";
import React, { useState } from "react";

import "./style.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo/logoOne.png";

const NavbarOther = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="navbar"
      // Inline styles applied here
    >
      <nav className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Image src={Logo} height={70} width={70} alt="Logo" />
        </div>

        {/* Toggle Button for Mobile View */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span style={{ color: "#fff", cursor: "pointer" }}>
            {isMenuOpen ? "✖" : "☰"} {/* Simple text for toggle */}
          </span>
        </div>

        {/* Menu Items */}
        <ul className={`menu-list ${isMenuOpen ? "show" : ""}`}>
          {["/", "/services", "/contact", "/about"].map((path, index) => (
            <li key={index} className="menu-item">
              <Link href={path} className="link">
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </Link>
              <span className="underline"></span>
            </li>
          ))}
          <li style={{ marginLeft: "1rem" }}>
            <Link href="/request-tutor">
              <button className="button">Request a Tutor</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarOther;
