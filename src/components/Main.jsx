import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://images.unsplash.com/photo-1502325966718-85a90488dc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50 ">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className=" sm:text-5xl text-xl font-bold text-gray-800">
            Hi, I'm vasu yadav
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4  text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                2000,
                "Freelancer",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className=" cursor-pointer size={20}" />
            <FaLinkedinIn className=" cursor-pointer size={30}" />
            <FaGithub className=" cursor-pointer size={20}" />
            <GrDocumentText className=" cursor-pointer size={20}" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
