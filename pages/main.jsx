import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Steps from "@/components/steps/Steps";
import Why from "@/components/why/Why";
import Result from "@/components/result/Results";
import React from "react";
import ComingSoon from "@/components/comingSoon/comingsoon";
import Top from "@/components/logoflow/Top";
import LogoRiver from "@/components/logoflow/LogoFlow";
import Contact from "@/components/contact/Contact";

function main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Steps />
      <Why />
      <Result />
      <ComingSoon />
      <Top />
      <LogoRiver />
      <Contact />
    </div>
  );
}

export default main;
