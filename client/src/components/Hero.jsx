import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setIsSearch, setSearchFilter } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
   setIsSearch(true);

   
  };

  return (
    <div className="mt-5 max-w-5xl mx-auto">
      <div className="flex flex-col items-center gap-2 border border-stone-200 p-5">
        <p className="md:text-4xl font-semibold sm:text-xl text-blue-500">
          Over 10,000+ jobs to apply
        </p>
        <p className="sm:text-sm lg:text-lg">Over 10,000+ jobs to apply</p>
        <div className="flex items-center gap-2 bg-white border border-blue-200 p-2 rounded-lg mt-3 sm:max-w-2xl">
          <div className="flex gap-2">
            <img src={assets.search_icon} alt="search" />
            <input
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              type="text"
              placeholder="search for jobs"
              ref={titleRef}

            />
          </div>
          <p>|</p>
          <div className="flex gap-2">
            <img src={assets.location_icon} alt="location" />
            <input
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              type="text"
              placeholder="location"
              ref={locationRef}
            />
          </div>
          <button onClick={onSearch} className="bg-blue-500 text-white px-4 py-1 rounded-lg cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="mt-10  mx-auto">
        <div className="flex flex-wrap text-start items-center gap-5 border border-stone-200 p-4">
          <p className="text-xl">Trusted by</p>
          <img src={assets.microsoft_logo} alt="microsoft" className="h-4" />
          <img src={assets.walmart_logo} alt="walmart" className="h-4" />
          <img src={assets.accenture_logo} alt="accenture" className="h-4" />
          <img src={assets.amazon_logo} alt="accenture" className="h-4" />
          <img src={assets.adobe_logo} alt="accenture" className="h-4" />
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
