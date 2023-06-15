import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImGithub, ImLink } from "react-icons/im";
import { RoughNotation } from "react-rough-notation";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import sd from "../public/assets/sd.png";
import feedback from "../public/assets/feedback.png";
import food from "../public/assets/food.png";

const ProjectCard = ({
  imageSrc,
  title,
  technologies,
  description,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="flex justify-center m-2">
      <div className="rounded-xl shadow-lg bg-white max-w-xs">
        <Image
          src={imageSrc}
          className="rounded-lg object-cover"
          width={100}
          height={80}
          layout="responsive"
          alt="Screenshot"
        />

        <div className="p-4">
          <h5 className="text-gray-900 text-2xl font-bold mb-2">{title}</h5>

          <div className="flex">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className=" px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]"
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
              href={githubLink}
              className="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bbg-yellow-400 group-hover:h-full opacity-90"></span>
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
                <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bbg-yellow-400 group-hover:h-full opacity-90"></span>
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

const MobileProjects = () => {
  return (
    <div id="mobile" className="container mx-auto mt-20 lg:hidden">
      {/* top */}
      <div className='mx-auto w-4/5'>
        <p className=" font-medium text-xl tracking-widest uppercase text-[black] ">
        <RoughNotation
          type="highlight"
          show={true}
          color="#fff176"
          animationDuration={2000}
          animationDelay={1500}
        >
          Works &
        </RoughNotation>
      </p>
      <h2>Projects</h2>
      </div>
      
      <div className="mt-12 gap-12 sm:flex flex-wrap justify-center w-full mx-auto ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <ProjectCard
              imageSrc={food}
              title="Full Stack Food Delivery App"
              technologies={["React Native", "Firebase"]}
              description="A fullstack food delivery app along with restaurant dashboard and courier app."
              githubLink="https://github.com/rush33/food-delivery"
              demoLink="https://www.youtube.com/watch?v=J5GAZIMtrSM&feature=youtu.be"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              imageSrc={feedback}
              title="Feedback UI"
              technologies={["React JS", "JSON Server"]}
              description="A UI to add and delete ratings where all data are stored and fetched from JSON Web Server"
              githubLink="https://github.com/rush33/feedback-app"
              demoLink="https://feedback-app-eight-liard.vercel.app/"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              imageSrc={sd}
              title="Support Desk"
              technologies={["MERN", "Full-Stack"]}
              description="An application where user can register, login, view and track the status of items using tickets functionality"
              githubLink="https://github.com/rush33/support-desk"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileProjects;
