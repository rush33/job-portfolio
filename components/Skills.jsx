import React from "react";
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
  SiMongodb
} from "react-icons/si";
const Skills = () => {
  return (
    <div id="skills" className="w-4/5 py-24 mx-auto" >
      <div className="mx-auto flex flex-col flex-start ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          Skills &
        </p>
        <h2>Experience</h2>
        <div className="mt-12 p-5 gap-12 sm:p-0 flex flex-wrap justify-center w-full mx-auto ">
          <div className="flex p-4 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-[#f0db4f] bg-black ">
                <SiJavascript />
              </div>
              <p className="my-1 font-semibold cursor-default ">Javascript</p>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-blue-400">
                <SiReact />
              </div>
              <p className="my-1  cursor-default font-semibold">React</p>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-blue-400">
                <SiTailwindcss />
              </div>
              <p className="my-1 font-semibold cursor-default ">Tailwind CSS</p>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-black">
                <SiNextdotjs />
              </div>
              <p className="font-semibold my-1 cursor-default ">Next JS</p>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-green-500">
                <SiMongodb />
              </div>
              <p className="font-semibold my-1 cursor-default ">Mongo DB</p>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-green-600">
                <SiNodedotjs />
              </div>
              <p className="my-1 font-semibold cursor-default ">Node JS</p>
            </div>
          </div>
          <div className="flex p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-blue-600">
                <SiCss3 />
              </div>
              <p className="my-1 font-semibold cursor-default ">CSS</p>
            </div>
          </div>
          <div className="flex  p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-orange-500">
                <SiGit />
              </div>
              <p className="my-1 font-semibold cursor-default ">Git</p>
            </div>
          </div>

          <div className="flex  p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-orange-600">
                <SiHtml5 />
              </div>
              <p className="my-1 font-semibold cursor-default ">HTML</p>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300 ">
            <div className="flex flex-col justify-center items-center ">
              <div className="mx-auto text-5xl text-[#5651e5]">
                <SiExpress />
              </div>
              <p className=" cursor-default font-semibold ">Express JS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
