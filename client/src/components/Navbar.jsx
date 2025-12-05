import React, { useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div>
      <div className="py-5 px-7 border-b border-gray-200 shadow-2xs flex justify-between">
        <h2
          onClick={() => navigate("/")}
          className="md:text-2xl text-blue-500 font-bold sm:text-3xl sm:px-5 md:px-6 py-2 cursor-pointer hover:border hover:border-blue-50 max-w-48 transition-all duration-200"
        >
          WUZZUFNY
        </h2>

        <div className="flex gap-4 items-center">
          {!user ? (
            <>
              <button onClick={()=>setShowRecruiterLogin(true)} className="text-gray-600">Recruiter Login</button>

              <button
                onClick={openSignIn}
                className="bg-blue-500 text-white px-6 py-1 rounded-full cursor-pointer"
              >
                Login
              </button>
            </>
          ) : (
            <>
              <Link to={"/applications"}>Applied Jobs</Link>
              <p>|</p>
              <p className="max-sm:hidden">
                Hi,{user.firstName + " " + user.lastName}
              </p>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
