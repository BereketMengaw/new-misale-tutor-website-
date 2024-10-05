"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "../../public/navbar/menu.png";
import Remove from "../../public/navbar/remove.png";
import Logo from "../../public/logo/logoOne.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300  ${
        scrolled ? "lg:bg-blue-950 bg-transparent" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto pt-2">
        <div className="text-white text-sm font-semibold">
          <Image src={Logo} height={70} width={70} alt="Logo" />
        </div>

        {/* Hamburger Icon for mobile */}
        <div
          className="relative lg:hidden text-white cursor-pointer pr-3"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <Image src={Remove} alt="Close Menu" width={20} height={20} />
          ) : (
            <Image src={Menu} alt="Open Menu" width={20} height={20} />
          )}
        </div>

        {/* Menu Items */}
        <ul
          className={`lg:flex lg:space-x-8 lg:items-center text-white ${
            isOpen
              ? "absolute top-16 right-0 w-1/2 bg-gray-400 rounded-md animate-slide-down animation-duration-2000"
              : "hidden"
          } lg:block lg:mt-0 space-y-4 lg:space-y-0 text-center lg:text-left`}
        >
          {["/", "/services", "/contact", "/about", "/Jobs"].map(
            (path, index) => (
              <li key={index} className="relative group">
                <Link href={path} className="mb-1 block">
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </Link>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </li>
            )
          )}
          <li>
            <Link href="/request-tutor">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg animate-pulse hover:bg-blue-600 transition duration-300">
                Request a Tutor
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
