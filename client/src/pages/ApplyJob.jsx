import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

import kConvert from "k-convert";
import moment from "moment";
import JobCard from "../components/JobCard";
import Footer from "../components/Footer";

const ApplyJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJobs = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
      console.log(data);
    }
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJobs();
    }
  }, [id, jobs]);
  return jobData ? (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col container px-4 py-10 2xl:px-20 mx-auto">
        <div className="bg-white w-full rounded-lg">
          <div className="flex items-center md:justify-between flex-wrap gap-8 px-14 py-20 bg-sky-50 border border-blue-500 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src={jobData.companyId.image}
                alt="logo"
                className="bg-white h-20 p-4 rounded"
              />
              <div className="text-center md:text-left text-neutral-700">
                <h1 className="font-bold text-2xl mb-3">{jobData.title}</h1>
                <div className="flex flex-row flex-wrap max-md:justify-center gap-y-2 gap-6 items-center text-gray-600 mt-2">
                  <span className="flex items-center gap-1">
                    <img src={assets.suitcase_icon} alt="" />
                    {jobData.companyId.name}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.location_icon} alt="" className="" />
                    {jobData.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.person_icon} alt="" />
                    {jobData.level}
                  </span>

                  <span className="flex items-center gap-1">
                    <img src={assets.money_icon} alt="" />
                    {kConvert.convertTo(jobData.salary)}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-end text-sm max-md:mx-auto max-md:text-center">
              <button className="bg-blue-500 text-white px-4 py-1.5 mb-2 rounded">
                Apply Now
              </button>
              <p>Posting {moment(jobData.date).fromNow()} </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start">
            <div className="w-full lg:w-2/3">
              <h2 className="font-bold text-2xl my-4">Job description</h2>
              <div
                className="my-3 max-w-lg rich-text"
                dangerouslySetInnerHTML={{ __html: jobData.description }}
              ></div>
              <button className="bg-blue-500 text-white px-5 py-1.5 rounded mt-6">
                Apply Now
              </button>
            </div>

            {/* right section */}
            <div className="w-full lg:w-1/3 mt-8 lg:ml-8 space-y-5">
              <h2 className="text-2xl font-semibold">More jobs from {jobData.companyId.name}</h2>
              {jobs
                .filter(
                  (job) =>
                    job._id !== jobData._id &&
                    job.companyId._id === jobData.companyId._id
                )
                .filter((job) => true)
                .slice(0, 4)
                .map((job, index) => (
                  <JobCard key={index} job={job} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  ) : (
    <Loading />
  );
};

export default ApplyJob;
