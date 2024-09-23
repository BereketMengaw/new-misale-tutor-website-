import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10">
      <h1 className=" text-center mb-7">visit our social media platforms</h1>
      <div className="flex justify-center">
        <img src="/logos/facebook.svg" className="w-15  h-7 px-3" alt="" />
        <img src="/logos/instagram.png" className="w-15 h-7 px-3" alt="" />
        <img src="/logos/linkdin.png" className="w-15 h-7 px-3" alt="" />
        <img src="/logos/telegram.png" className="w-15 h-6 " alt="" />
        <img src="/logos/x.png" className="w-15 h-7 px-3" alt="" />
        <img src="/logos/youtube.svg" className="w-15 h-7 px-3" alt="" />
      </div>
      <div className="text-center mt-4 ">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
