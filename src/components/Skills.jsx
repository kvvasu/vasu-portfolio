import React from "react";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { FaReact, FaGitAlt } from "react-icons/fa";
import { TbBrandCss3 } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const Skills = () => {
  return (
    <div id="skills" className="  max-w-[1040px] m-auto md:pl-20  py-32 px-2">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
      <div>
        <div className="flex justify-between flex-wrap  gap-2 mt-24 ">
          <div>
            <AiOutlineHtml5 className="shadow rounded-lg shadow-gray-400 cursor-pointer  h-16 w-20 py-4  hover:scale-110 ease-in duration-200 " />
            <small className="my-4 text-sm font-normal leading-none text-stone-400">
              HTML5
            </small>
          </div>
          <div>
            <TbBrandCss3 className="shadow rounded-lg shadow-gray-400 cursor-pointer h-16 w-20 py-4  hover:scale-110 ease-in duration-200  " />
            <small className="my-1 text-sm font-normal leading-none text-stone-400">
              CSS3
            </small>
          </div>

          <div>
            <IoLogoJavascript className="shadow rounded-lg shadow-gray-400 cursor-pointer h-16 w-20 py-4  hover:scale-110 ease-in duration-200 " />
            <small className="my-1 text-sm font-normal leading-none text-stone-400">
              JavaScript
            </small>
          </div>
          <div>
            <FaReact className="shadow rounded-md shadow-gray-400 cursor-pointer h-16 w-20 py-4  hover:scale-110 ease-in duration-200 " />
            <small className="my-1 text-sm font-normal leading-none text-stone-400">
              React Js
            </small>
          </div>

          <div>
            <SiTailwindcss className="shadow rounded-lg shadow-gray-400 cursor-pointer h-16 w-20 py-4  hover:scale-110 ease-in duration-200 " />
            <small className="my-1 text-sm font-normal leading-none text-stone-400">
              Tailwindcss
            </small>
          </div>
          <div>
            <AiFillGithub className="shadow rounded-lg shadow-gray-400 cursor-pointer h-16 w-20 py-4  hover:scale-110 ease-in duration-200 " />
            <small className="my-1 text-sm font-normal leading-none text-stone-400">
              Github
            </small>
          </div>
          <div>
            <FaGitAlt className="shadow rounded-lg shadow-gray-400 cursor-pointer h-16 w-20 py-4  hover:scale-110 ease-in duration-200 " />
            <small className="my-1 text-sm font-normal leading-none text-stone-400">
              Git
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
