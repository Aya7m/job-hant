import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations } from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { searchFilter, setSearchFilter, isSearch, jobs } =
    useContext(AppContext);
  const [showFilter, setShowFilter] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectLocation, setSelectLocation] = useState([]);
  const [filterdJobs, setFilterdJobs] = useState(jobs);

  const handleCategoryChange = (category) => {
    setSelectCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleLocation = (location) => {
    setSelectLocation((prev) =>
      prev.includes(location)
        ? prev.filter((c) => c !== location)
        : [...prev, location]
    );
  };

  useEffect(() => {
    const matchesCategory = (job) =>
      selectCategory.length === 0 || selectCategory.includes(job.category);
    const matchesLocation = (job) =>
      selectLocation.length === 0 || selectLocation.includes(job.location);

    const matchesTitle=job=>searchFilter.title==="" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
    const matchesSearchLocation=job=>searchFilter.location==="" ||job.location.toLowerCase().includes(searchFilter.location.toLowerCase())

    const newFilteredJobs=jobs.slice().reverse().filter(
        job=>matchesCategory(job) && matchesLocation(job) &&matchesTitle(job) && matchesSearchLocation(job)
    )
    setFilterdJobs(newFilteredJobs)
    setCurrentPage(1)
  }, [jobs,selectCategory,selectLocation,searchFilter]);
  return (
    <div className="flex 2xl:px-20 mx-auto flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* search filter from hero section */}
        {isSearch &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-800">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      src={assets.cross_icon}
                      alt="img"
                      className="cursor-pointer"
                    />
                  </span>
                )}

                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2.5 bg-blue-50 border border-red-200 px-4 py-1.5 rounded">
                    {searchFilter.location}{" "}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      src={assets.cross_icon}
                      alt="img"
                      className="cursor-pointer"
                    />
                  </span>
                )}
              </div>
            </>
          )}
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-6 py-1.5 rounded border border-gray-400 lg:hidden"
        >
          {showFilter ? "Close" : "Filter"}
        </button>
        {/* category fillter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search By Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li key={index} className="flex gap-3 text-center">
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleCategoryChange(category)}
                  checked={selectCategory.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* location fillter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4 pt-14">Search By Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li key={index} className="flex gap-3 text-center">
                <input
                  className="scale-125"
                  type="checkbox"
                  onChange={() => handleLocation(location)}
                  checked={selectLocation.includes(location)}
                />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* lasting jobs */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-2xl py-2" id="job-list">
          Latest jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filterdJobs
            .slice((currentPage - 1) * 6, currentPage * 6)
            .map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
        </div>

        {/* pagination */}
        {filterdJobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-10">
            <a href="#job-list">
              <img
                onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                src={assets.left_arrow_icon}
                alt=""
              />
            </a>
            {Array.from({ length: Math.ceil(filterdJobs.length / 6) }).map(
              (_, index) => (
                <a key={index} href="#job-list">
                  <button
                    onClick={() => setCurrentPage(index + 1)}
                    className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-100 text-blue-500"
                        : "text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </button>
                </a>
              )
            )}

            <a href="#job-list">
              <img
                onClick={() =>
                  setCurrentPage(
                    Math.min(currentPage + 1, Math.ceil(filterdJobs.length / 6))
                  )
                }
                src={assets.right_arrow_icon}
                alt=""
              />
            </a>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
