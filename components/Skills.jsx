import React from "react";
import { RoughNotation } from "react-rough-notation";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiMongodb,
  SiRedux,
} from "react-icons/si";

const skillsData = [
  { icon: <SiJavascript />, text: "Javascript", skillColor: "yellow-400" },
  { icon: <SiReact />, text: "React", skillColor: "blue-400" },
  { icon: <SiReact />, text: "React Native", skillColor: "blue-600" },
  { icon: <SiTailwindcss />, text: "Tailwind CSS", skillColor: "blue-400" },
  { icon: <SiNextdotjs />, text: "Next JS", skillColor: "black" },
  { icon: <SiMongodb />, text: "Mongo DB", skillColor: "green-500" },
  { icon: <SiRedux />, text: "Redux", skillColor: "purple-500" },
  { icon: <SiNodedotjs />, text: "Node JS", skillColor: "green-600" },
  { icon: <SiCss3 />, text: "CSS", skillColor: "blue-600" },
  { icon: <SiGit />, text: "Git", skillColor: "orange-500" },
  { icon: <SiHtml5 />, text: "HTML", skillColor: "orange-600" },
  { icon: <SiExpress />, text: "Express JS", skillColor: "indigo-600" },
];

const SkillItem = ({ icon, text, skillColor }) => (
  <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
    <div className="flex flex-col justify-center items-center">
      <div className={`mx-auto text-5xl text-${skillColor}`}>{icon}</div>
      <p className="font-semibold my-1 cursor-default">{text}</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div id="skills" className="w-4/5 py-24 mx-auto">
      <div className="mx-auto flex flex-col flex-start">
        <p className="text-xl font-medium tracking-widest uppercase text-black">
          <RoughNotation
            type="highlight"
            show={true}
            color="#fff176"
            animationDuration="2000"
            animationDelay="1500"
          >
            Skills &
          </RoughNotation>
        </p>
        <h2>Experience</h2>
        <div className="mt-12 p-5 gap-12 sm:p-0 flex flex-wrap justify-center w-full mx-auto">
          {skillsData.map((skill, index) => (
            <SkillItem
              key={index}
              icon={skill.icon}
              text={skill.text}
              skillColor={skill.skillColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
