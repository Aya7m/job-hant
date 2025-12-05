import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
const AddJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("Egypt");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Senior");
  const [salary, setSalary] = useState(0);

  const editorRef=useRef(null)
  const quillRef=useRef(null)

  useEffect(()=>{

    if(!quillRef.current &&editorRef.current){
        quillRef.current=new Quill(editorRef.current,{
            theme:'snow'
        })
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-12">
      <div className="flex-col space-y-4 text-gray-600">
        <div className="flex-col items-center space-y-2">
          <p className="text-sm">JOB TITLE</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Type Here .."
            className="w-full border px-3 py-1.5 border-blue-400"
            required
          />
        </div>
        <div className="flex-col items-center space-y-2">
          <p className="text-sm">JOB DESCRIPTION</p>
          {/* <textarea
            rows={6}
            cols={12}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full outline-blue-50 border-blue-100 p-2"
          /> */}

          <div ref={editorRef} className="bg-white border border-blue-100 min-h-[200px]">

          </div>
        </div>

        <div className="flex items-center gap-6 max-sm:flex-wrap">
          <div className="flex-col text-start">
            <p className="text-sm mb-2">job category</p>
            <select
              className="w-full border border-gray-100 px-6 py-1.5"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="Programming">Programming</option>
              <option value="Networking">Networking</option>
              <option value="Management">Management</option>
              <option value="Marketing">Marketing</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
            </select>
          </div>

          <div>
            <p className="text-sm mb-2 text-start">job Location</p>
            <select
              className="w-full border border-blue-100 px-6 py-1.5"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="Egypt">Egypt</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Qatar">Qatar</option>
              <option value="Oman">Oman</option>
            </select>
          </div>

          <div>
            <p className="text-sm mb-2 text-start">job Level</p>
            <select
              className="w-full border border-blue-100 px-6 py-1.5"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="Senior">Senior</option>
              <option value="mid-level">mid-level</option>
              <option value="junior">junior</option>
            </select>
          </div>
        </div>

        <div className=" text-start">
          <p className="text-sm mb-2">Salary</p>
          <input
            min={0}
            type="number"
            placeholder="0"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="max-w-32 border border-blue-100 px-6 py-1.5"
            required
          />
        </div>

        <button className="bg-blue-500 px-6 py-1.5 text-white m-5 rounded-2xl cursor-pointer">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddJob;
