import { useState } from "react";
import "./App.css";
import SideNave from "./components/SideNav";
import Main from "./components/Main";
import Skills from "./components/Skills";
import About from "./components/About";
import WorkItem from "./components/WorkItem";
import Projects from "./components/Projects";
import ProjectItem from "./components/ProjectItem";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <SideNave />
      <Main />
      <Skills />
      <About />
      <WorkItem />
      <Projects />
      <ProjectItem />
      <Contact />
    </div>
  );
}

export default App;
