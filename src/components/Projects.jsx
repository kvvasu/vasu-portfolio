import React from "react";
import ProjectItem from "./ProjectItem";
import code from "../assets/code.jpg";
import laptop from "../assets/laptop.jpg";
import laptop2 from "../assets/laptop2.jpg";
import reactjs from "../assets/reactjs.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
        hendrerit leo, nec viverra sem. Duis pulvinar eros nec orci blandit
        tristique. Nam consectetur suscipit ante
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={code} title="code" />
        <ProjectItem img={laptop} title="laptop" />
        <ProjectItem img={laptop2} title="laptop2" />
        <ProjectItem img={reactjs} title="reactjs" />
      </div>
    </div>
  );
};
export default Projects;
