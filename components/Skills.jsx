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

const SkillItem = ({ icon, text, color }) => (
  <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
    <div className="flex flex-col justify-center items-center">
      <div className={`mx-auto text-5xl text-${color}`}>{icon}</div>
      <p className="font-semibold my-1 cursor-default">{text}</p>
    </div>
  </div>
);

const Skills = () => {
  return (
    <div id="skills" className="w-4/5 py-32 mx-auto">
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
        <div className="mt-12 p-5 gap-6 sm:gap-12 sm:p-0 flex flex-wrap justify-center w-full mx-auto">
          <SkillItem
            icon={<SiJavascript />}
            text="Javascript"
            color="yellow-400"
          />
          <SkillItem icon={<SiReact />} text="React" color="blue-400" />
          <SkillItem icon={<SiReact />} text="React Native" color="blue-600" />
          <SkillItem
            icon={<SiTailwindcss />}
            text="Tailwind CSS"
            color="blue-400"
          />
          <SkillItem icon={<SiNextdotjs />} text="Next JS" color="black" />
          <SkillItem icon={<SiMongodb />} text="Mongo DB" color="green-500" />
          <SkillItem icon={<SiRedux />} text="Redux" color="purple-500" />
          <SkillItem icon={<SiNodedotjs />} text="Node JS" color="green-600" />
          <SkillItem icon={<SiCss3 />} text="CSS" color="blue-600" />
          <SkillItem icon={<SiGit />} text="Git" color="orange-500" />
          <SkillItem icon={<SiHtml5 />} text="HTML" color="orange-600" />
          <SkillItem
            icon={<SiExpress />}
            text="Express JS"
            color="indigo-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
