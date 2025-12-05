import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Rlogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(false);
  const [isTextDataSubmit, setIsTextDataSubmit] = useState(false);
  const { setShowRecruiterLogin } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTextDataSubmit) {
      setIsTextDataSubmit(true);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="relative bg-white p-10 border rounded-2xl text-slate-600"
      >
        <h2 className="text-center font-semibold text-2xl mb-2">
          Recruiter {state}
        </h2>
        <p className="text-sm text-center my-6">
          Welcome back! Please sign in to continue
        </p>

        {state === "Sign Up" && isTextDataSubmit ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  id="image"
                  hidden
                />
              </label>
              <p>
                Upload Company <br /> logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="flex items-center gap-4 mb-4">
                <img src={assets.person_icon} alt="img" className="w-6" />
                <input
                  className=" w-full border border-blue-100 px-4 py-1.5 rounded-2xl outline-0 "
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Company Name"
                  required={state !== "Sign Up" || !isTextDataSubmit}
                />
              </div>
            )}

            <div className="flex items-center gap-4 mb-4">
              <img src={assets.email_icon} alt="img" className="w-6" />
              <input
                className=" w-full border border-blue-100 px-4 py-1.5 rounded-2xl outline-0 "
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email Id"
                required={state !== "Sign Up" || !isTextDataSubmit}
              />
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img src={assets.lock_icon} alt="img" className="w-6" />
              <input
                className=" w-full border border-blue-100 px-4 py-1.5 rounded-2xl outline-0 "
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                required={state !== "Sign Up" || !isTextDataSubmit}
              />
            </div>
          </>
        )}
        {state === "Login" && (
          <p className="text-blue-500 text-sm my-2">Forgot password?</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-1.5 w-full my-2 rounded-2xl cursor-pointer"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmit
            ? "Create Account"
            : "Next"}
        </button>

        {state === "Login" ? (
          <p className="text-sm">
            Don’t have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-500 cursor-pointer font-medium underline"
            >
              Sign up
            </span>{" "}
          </p>
        ) : (
          <p className="text-sm">
            Already have an account{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-500 cursor-pointer font-medium underline"
            >
              Login
            </span>{" "}
          </p>
        )}

        <img
          onClick={() => setShowRecruiterLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 left-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Rlogin;
