import React from "react";
import SearchBar from "./SearchBar";

const SideBar = () => {
  return (
    <>
      <SearchBar />
      <div className="top-0 left-0 w-[21vw] bg-slate-900   p-10 pl-20 text-white fixed h-full ">
        <h2 className="mt-20 text-4xl font-semibold text-white">
          I am a sidebar
        </h2>
      </div>
      <div>
        <ul className="">
          <li className="text-white">Home</li>
          <li className="hover:text-gray-900 cursor-pointer hover:underline transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 ">
            Home
          </li>
          <li>Home</li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
