import React from "react";

import Navbar from "@/components/navbars/Navbars";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";

import "./styles.css";

function contact() {
  return (
    <div>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}

export default contact;
