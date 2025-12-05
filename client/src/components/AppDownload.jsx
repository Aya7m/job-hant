import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 py-24 2xl:px-20 mx-auto">
      <div className="relative bg-gradient-to-r from-violet-50 to-blue-100 p-12 sm:p-24 lg:p-32 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold md:text-4xl mb-8 max-w-md">Download Mobile App For Better Experience</h1>
          <div className="flex items-center gap-5">
            <a href="#" className="inline-block">
              <img className="h-12" src={assets.play_store} alt="" />
            </a>

            <a  href="#" className="inline-block">
              <img className="h-12" src={assets.app_store} alt="" />
            </a>
          </div>
         
        </div>
         <img className="absolute right-5 top-5 bottom-0 max-lg:hidden" src={assets.app_main_img} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
