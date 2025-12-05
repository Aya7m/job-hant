import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      {/* navbar for requiter panal */}
      <div className="shadow py-4">
        <div className="flex items-center justify-between px-5">
          <h2
            onClick={() => navigate("/")}
            className="md:text-2xl text-blue-500 font-bold sm:text-3xl sm:px-5 md:px-6 py-2 cursor-pointer hover:border hover:border-blue-50 max-w-48 transition-all duration-200"
          >
            WUZZUFNY
          </h2>

          <div className="flex items-center gap-4">
            <p className="max-sm:hidden">Hi,Aya</p>
            <div className="relative group">
              <img
                className="cursor-pointer max-sm:w-12 border border-blue-300 p-3 rounded-full"
                src={assets.company_icon}
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-14">
                <ul className="border text-sm p-2 bg-white rounded-md m-0 list-none">
                  <li className="py-1 px-2 cursor-pointer">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start">
        {/* left sidebar */}
        <div className="inline-block min-h-screen border-r-2">
          <ul className="flex flex-col items-start pt-5 text-gray-800">
            <NavLink to="/dashboard/add-job" className={({isActive})=>`flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive &&'bg-blue-400 text-white '} gap-3`}>
              <img className="min-w-4" src={assets.add_icon} alt="" />
               <p className="max-sm:hidden"> Add Job</p>
            </NavLink>

            <NavLink to="/dashboard/manage-jobs" className={({isActive})=>`flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive &&'bg-blue-400 text-white'} gap-3`}>
              <img className="min-w-4" src={assets.home_icon} alt="" />
                <p className="max-sm:hidden">Manage Job</p>
            </NavLink>

            <NavLink to="/dashboard/view-applications" className={({isActive})=>`flex items-center p-3 sm:px-6 w-full hover:bg-gray-100 ${isActive &&'bg-blue-400 text-white'} gap-3`}>
              <img className="min-w-4" src={assets.person_tick_icon} alt="" />
               <p className="max-sm:hidden"> View Applications</p>
            </NavLink>
          </ul>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
