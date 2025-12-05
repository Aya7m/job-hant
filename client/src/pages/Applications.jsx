import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [Resume, setResume] = useState(null);
  return (
    <>
      <Navbar />

      <div className="container max-w-6xl mx-auto min-h-[70vh]">
        <h2 className="font-bold my-3">Your Resume</h2>
        <div className="flex gap-3 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-500 px-4 py-2 rounded-lg mr-2">
                  Select Resume
                </p>
                <input
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="applications/pdf"
                  type="file"
                  id="resumeUpload"
                  hidden
                />
                <img src={assets.profile_upload_icon} alt="" />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className="bg-green-100 border border-green-400 rounded-lg px-4 py-2"
              >
                Save
              </button>
            </>
          ) : (
            <div className="flex gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg"
                href=""
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Jobs Applied</h2>
          <table className="min-w-full border bg-white shadow">
            <thead>
              <tr>
                <th className="py-3 px-4 border-b text-left">Company</th>
                <th className="py-3 px-4 border-b text-left">Job Title</th>
                <th className="py-3 px-4 border-b text-left max-sm:hidden">
                  Location
                </th>
                <th className="py-3 px-4 border-b text-left max-sm:hidden">
                  Date
                </th>
                <th className="py-3 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {jobsApplied.map((job, index) =>
                true ? (
                  <tr key={index}>
                    <td className="py-3 px-4 border-b w-[30%]">
                      <div className="flex items-center gap-2">
                        <img className="w-8 h-8" src={job.logo} alt="" />
                        {job.company}
                      </div>
                    </td>

                    <td className="py-3 px-4 border-b align-middle w-[25%]">
                      {job.title}
                    </td>
                    <td className="py-3 px-4 border-b max-sm:hidden align-middle w-[20%]">
                      {job.location}
                    </td>
                    <td className="py-3 px-4 border-b max-sm:hidden align-middle w-[15%]">
                      {moment(job.date).format("ll")}
                    </td>
                    <td className="py-3 px-4 border-b align-middle w-[20%]">
                      <span
                        className={`${
                          job.status === "Accepted"
                            ? "bg-green-100 text-green-600 px-4 py-1.5 rounded-lg"
                            : job.status === "Rejected"
                            ? "bg-red-100 text-red-600 px-4 py-1.5 rounded-lg"
                            : "text-blue-600 bg-blue-100 px-4 py-1.5 rounded-lg"
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
       
      </div>
       <Footer/>
    </>
  );
};

export default Applications;
