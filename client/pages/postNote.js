import React from "react";
import { useState } from "react";
import Dropzone from "../components/Dropzone";
import UploadImg from "../components/UploadImg";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";
const Post = () => {

  const{isAuthenticated,Moralis}=useMoralis()
  return (
    <>
    {isAuthenticated?(
      <div className="grid place-items-center bg-slate-800">
        <div className="py-3 bg-slate-800 w-96  ">
          <htmlForm>
            <div classame="flex justify-center">
              <div className="mb-3 xl:w-96">
                <label
                  htmlFor="titlehtmlFormControlInput1"
                  class="htmlForm-label inline-block mb-2 text-gray-400"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="
        htmlForm-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        focus:text-white
        bg-slate-700 bg-clip-padding
        border border-solid 
        rounded
        transition
        ease-in-out
        m-0
      focus:border-blue-600 focus:outline-none
      "
                  id="examplehtmlFormControlInput1"
                  placeholder="Graph theory notes htmlFor dummies"
                />
              </div>
            </div>

            {/* New input field */}
            <div classame="flex justify-center">
              <div className="mb-3 xl:w-96">
                <label
                  htmlFor="titlehtmlFormControlInput1"
                  class="htmlForm-label inline-block mb-2 text-gray-400"
                >
                  One liner Description
                </label>
                <input
                  type="text"
                  className="
        htmlForm-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        focus:text-white
        bg-slate-700 bg-clip-padding
        border border-solid 
        rounded
        transition
        ease-in-out
        m-0
      focus:border-blue-600 focus:outline-none
      "
                  id="descriptionhtmlFormControlInput1"
                  placeholder="Graph theory notes for dummies"
                />
              </div>
            </div>

            {/* new one */}
            <div>
              <div classame="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <label
                    htmlFor="titlehtmlFormControlInput1"
                    class="htmlForm-label inline-block mb-2 text-gray-400"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    className="
        htmlForm-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        focus:text-white
        bg-slate-700 bg-clip-padding
        border border-solid 
        rounded
        transition
        ease-in-out
        m-0
      focus:border-blue-600 focus:outline-none
      "
                    id="descriptionhtmlFormControlInput1"
                    placeholder="Basic Electrical"
                  />
                </div>
              </div>

              {/* neonw */}

              <div classame="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <label
                    htmlFor="titlehtmlFormControlInput1"
                    class="htmlForm-label inline-block mb-2 text-gray-400"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    className="
        htmlForm-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white
        focus:text-white
        bg-slate-700 bg-clip-padding
        border border-solid 
        rounded
        transition
        ease-in-out
        m-0
      focus:border-blue-600 focus:outline-none
      "
                    id="descriptionhtmlFormControlInput1"
                    placeholder="0.000003"
                  />
                </div>
              </div>
            </div>
            {/* <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div> */}
            <div className="grid grid-flow-col gap-8">
              <div>
                <label
                  htmlFor="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Department
                </label>
                <select
                  id="department"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="MECH">MECH</option>
                  <option value="DS">DS</option>
                  <option value="ELEC">ELEC</option>
                  <option value="ECE">ECE</option>
                  <option value="AIML">AIML</option>
                  <option value="BT">BT</option>

                  <option value="CH">CHEM</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Semester
                </label>
                <select
                  id="semesters"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3</option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                  <option value="six">6</option>
                  <option value="seven">7</option>
                  <option value="eight">8</option>
                </select>
              </div>
            </div>
            <div className="pt-4">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                htmlFor="file_input"
              >
                Upload Notes(.pdf)
              </label>

              <input
                class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />

              <div className="pt-4">
                <UploadImg />
              </div>
              <div className=" pt-4">
                <p className="text-gray-400">Add Demo Images</p>
                <Dropzone />
              </div>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </htmlForm>
        </div>
      </div>
      ):(
        
        <div className="h-screen bg-slate-800 flex items-center">
         <h1 className="text-white text-3xl pl-96 ml-16 font-semibold">Connect your Wallet to Upload Notes</h1>
        </div>
      )}
    </>
  );
};

export default Post;
