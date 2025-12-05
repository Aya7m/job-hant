import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-12 sm:px-14 lg:px-24 mb-5 gap-4 ">
      <div className="flex items-center gap-4">
        <h2 className="md:text-2xl text-blue-500 font-bold sm:text-3xl sm:px-5 md:px-6 py-2 cursor-pointer hover:border hover:border-blue-50 max-w-48 transition-all duration-200">
          WUZZUFNY
        </h2>
        <p>|</p>
        <p className="text-sm text-gray-600">All right reserved. Copyright @Wuzzufny</p>
      </div>
      <div className="flex items-center gap-4">
        <img className="h-8 cursor-pointer" src={assets.facebook_icon} alt="" />
        <img className="h-8 cursor-pointer" src={assets.twitter_icon} alt="" />
        <img className="h-8 cursor-pointer" src={assets.instagram_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
