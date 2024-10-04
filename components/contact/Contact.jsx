import React from "react";
import Link from "next/link";

function Contact() {
  return (
    <div className="contact relative flex flex-col items-center justify-center h-screen w-full overflow-hidden lg:mt-10">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right blur-md"
        style={{ backgroundImage: 'url("/result/contactTwo.png")' }}
      />

      <div className="relative z-10 text-white text-center p-6 md:p-8 lg:p-10 rounded-lg shadow-lg bg-white bg-opacity-10 max-w-md mx-auto">
        <h1 className="text-4xl md:text-5xl text-blue-800 font-bold mb-4 md:mb-6">
          Contact Us
        </h1>
        <p className="text-base md:text-lg mb-6 md:mb-8 text-black">
          Have a question or need more information? Don&apos;t hesitate to reach
          out.
        </p>

        <div className="flex flex-col space-y-4">
          <ContactItem
            href="mailto:your@email.com"
            text="Email: misaletutors@gmail.com"
          />
          <ContactItem
            href="tel:+251907152943"
            text={
              <span className="font-bold text-black">Call: +251907152943 </span>
            }
          />
          <ContactItem
            href="https://www.yourwebsite.com"
            text="Visit Website: misaletutors.com"
          />
        </div>

        <div className="flex  justify-center space-x-4 mt-6">
          <SocialMediaLink
            href="https://www.facebook.com/profile.php?id=61565863765699"
            text="Facebook"
          />
          <SocialMediaLink href="https://x.com/MisaleTutors" text="Twitter" />
          <SocialMediaLink href="https://www.instagram.com" text="Instagram" />
          <SocialMediaLink
            href="www.linkedin.com/in/misale-tutors-undefined-b66160331"
            text="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}

const ContactItem = ({ href, text }) => (
  <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-200">
    <a href={href} className="text-lg">
      {text}
    </a>
  </div>
);

const SocialMediaLink = ({ href, text }) => (
  <Link
    href={href}
    className="text-black text-lg hover:text-blue-400 transition-colors duration-200"
  >
    {text}
  </Link>
);

export default Contact;
