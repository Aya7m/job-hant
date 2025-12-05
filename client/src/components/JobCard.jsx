import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {

    const navigate=useNavigate()
  return (
    <div className="border p-6 rounded shadow">
      <div className="flex justify-between items-center">
        <img src={assets.company_icon} className="h-8" alt="icon" />
      </div>
      <h4 className="font-medium text-2xl mt-3">{job.title}</h4>
      <div className="flex items-center gap-3 text-sm mt-2">
        <span className="bg-blue-200 border border-blue-50 rounded px-4 py-1.5">{job.location}</span>
        <span className="bg-red-200 border border-blue-50 rounded px-4 py-1.5">{job.level}</span>
      </div>

      <p className="text-sm mt-4 text-gray-800"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>
      <div className="flex items-center gap-3 mt-3">
        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className="bg-blue-500 text-white border rounded px-3 py-1.5 cursor-pointer">
          Apply Now
        </button>
        <button onClick={()=>{navigate(`/apply-job/${job._id}`);scrollTo(0,0)}} className="border border-blue-500 rounded px-3 py-1.5 cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
