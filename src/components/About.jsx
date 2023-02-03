import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Front-end developer",
    duration: "1 year",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum ultricies fermentum. Mauris lacus nisl",
  },
  {
    year: 2022,
    title: "abc",
    duration: "7 cgpa",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum ultricies fermentum. Mauris lacus nisl",
  },
  {
    year: 2021,
    title: "Graduation",
    duration: "8.3 cgpa",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum ultricies fermentum. Mauris lacus nisl,",
  },
  {
    year: 2017,
    title: "12th grade",
    duration: "93%",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum ultricies fermentum.",
  },
];

const About = () => {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">About</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default About;
