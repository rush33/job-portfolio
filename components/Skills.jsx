import {createElement} from "react";
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
  SiTypescript,
  SiFirebase
} from "react-icons/si";
import { RoughNotation } from "react-rough-notation";

const skillsData = [
  { icon: SiJavascript, text: "Javascript", style: "text-[#f0db4f] bg-black" },
  { icon: SiReact, text: "React", style: "text-blue-400" },
  { icon: SiTypescript, text: "TypeScript", style: "text-blue-500" },
  { icon: SiReact, text: "React Native", style: "text-blue-600" },
  { icon: SiTailwindcss, text: "Tailwind CSS", style: "text-blue-400" },
  { icon: SiFirebase, text: "Firebase", style: "text-orange-400" },
  { icon: SiNextdotjs, text: "Next JS", style: "text-black" },
  { icon: SiMongodb, text: "Mongo DB", style: "text-green-500" },
  { icon: SiRedux, text: "Redux", style: "text-purple-500" },
  { icon: SiNodedotjs, text: "Node JS", style: "text-green-600" },
  { icon: SiCss3, text: "CSS", style: "text-blue-600" },
  { icon: SiGit, text: "Git", style: "text-orange-500" },
  { icon: SiHtml5, text: "HTML", style: "text-orange-600" },
  { icon: SiExpress, text: "Express JS", style: "text-[#5651e5]" },
];

const Skill = ({style, icon, text}) => (
  <div
    className="py-4 shadow-lg rounded-xl hover:scale-110 ease-in duration-150"
  >
    <div className="flex flex-col justify-center items-center">
      <div className={`mx-auto text-5xl ${style}`}>
        {createElement(icon)}
      </div>
      <p className="font-semibold my-1 cursor-default">
        {text}
      </p>
    </div>
  </div>
)

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
        <div className="mt-12 p-5 gap-12 sm:p-0 grid grid-cols-2 md:grid-cols-7 justify-center w-full mx-auto">
          {skillsData.map((skill, index) => (
            <Skill
              style={skill.style}
              icon={skill.icon}
              text={skill.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
