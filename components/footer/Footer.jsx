import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10">
      <h1 className=" text-center mb-7">visit our social media platforms</h1>
      <div className="flex justify-center">
        <Link
          href="https://www.facebook.com/profile.php?id=61565863765699"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/facebook.svg"
            className="w-15 h-7 px-3"
            alt="Facebook"
          />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/instagram.png"
            className="w-15 h-7 px-3"
            alt="Instagram"
          />
        </Link>
        <Link
          href="www.linkedin.com/in/
misale-tutors-b66160331
"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/linkdin.png"
            className="w-15 h-7 px-3"
            alt="LinkedIn"
          />
        </Link>
        <Link
          href="https://t.me/wisdomwayeducation"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/telegram.svg"
            className="w-15 h-6"
            alt="Telegram"
          />
        </Link>
        <Link
          href="https://x.com/MisaleTutors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/logos/x.png" className="w-15 h-7 px-3" alt="Twitter" />
        </Link>
        <Link
          href="https://www.youtube.com/@MISALETUTORS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logos/youtube.svg"
            className="w-15 h-7 px-3"
            alt="YouTube"
          />
        </Link>
      </div>
      <div className="text-center mt-4 ">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
