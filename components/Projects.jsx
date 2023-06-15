import { ImGithub, ImLink } from "react-icons/im";
import Image from "next/image";
import { RoughNotation } from "react-rough-notation";

import sd from "../public/assets/sd.png";
import feedback from "../public/assets/feedback.png";
import food from "../public/assets/food.png";
import social from "../public/assets/social.png";

const ProjectCard = ({
  imageSrc,
  title,
  technologies,
  description,
  github,
  demoLink,
}) => {
  return (
    <div className="flex justify-center cursor-default">
      <div className="rounded-xl shadow-lg bg-white max-w-xs">
        <Image
          src={imageSrc}
          className="rounded-lg object-cover"
          width={100}
          height={80}
          alt="Screenshot"
          layout="responsive"
        />

        <div className="p-4">
          <h5 className="text-gray-900 text-2xl font-bold mb-2">{title}</h5>

          <div className="flex">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]"
              >
                {tech}
              </div>
            ))}
          </div>

          <p className="text-gray-700 tracking-normal mb-4 mt-2">
            {description}
          </p>

          <div className="flex justify-evenly">
            <a
              href={github}
              rel="noreferrer"
              className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
              target="_blank"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white flex items-center gap-1">
                <ImGithub className="inline text-md" /> Github
              </span>
            </a>

            {demoLink && (
              <a
                href={demoLink}
                className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                target="_blank"
                rel="noreferrer"
              >
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
                <span className="relative group-hover:text-white flex items-center gap-1">
                  <ImLink className="inline text-md" /> Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="hidden lg:flex">
      <div className="w-4/5 mx-auto mt-20">
        {/* top */}
        <div className="flex flex-col">
          <p className="font-medium text-xl tracking-widest uppercase text-black">
            <RoughNotation
              type="highlight"
              show={true}
              color="#fff176"
              animationDuration="2000"
              animationDelay="1500"
            >
              Works &
            </RoughNotation>
          </p>
          <h2>Projects</h2>
        </div>
        {/* bottom */}
        <div className="p-5 my-6 sm:p-0 flex justify-evenly items-center gap-8 flex-wrap">
          {/* card */}
          <ProjectCard
            imageSrc={food}
            title="Food Delivery App"
            technologies={["React Native", "Firebase"]}
            description="A fullstack food delivery app along with restaurant admin dashboard and courier app."
            github="https://github.com/rush33/food-delivery"
            demoLink="https://www.youtube.com/watch?v=J5GAZIMtrSM&feature=youtu.be"
          />

          <ProjectCard
            imageSrc={sd}
            title="Support Desk"
            technologies={["MERN", "Full-Stack"]}
            description="An application where user can register, login, view and track the status of items using tickets functionality."
            github="https://github.com/rush33/support-desk"
          />

          <ProjectCard
            imageSrc={social}
            title="Social Cards"
            technologies={["React JS", "Rest API"]}
            description="A UI to search and filter social cards fetched from an API"
            github="https://github.com/rush33/social-cards"
            demoLink="https://social-cards.vercel.app/"
          />

          <ProjectCard
            imageSrc={feedback}
            title="Feedback UI"
            technologies={["React JS", "JSON Server"]}
            description="A UI to add and delete ratings where all data are stored and fetched from JSON Web Server."
            github="https://github.com/rush33/feedback-app"
            demoLink="https://feedback-app-eight-liard.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
