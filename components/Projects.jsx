import { ImGithub, ImLink } from "react-icons/im";
import Image from "next/image";
import sd from "../public/assets/sd.png";
import feedback from "../public/assets/feedback.png";
import quote from "../public/assets/quote.png";
import { RoughNotation } from "react-rough-notation";


const Projects = () => {
  return (
    <div id="projects" className="hidden lg:flex">
      <div className="w-4/5  mx-auto  mt-20 ">
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
          <h2> Projects</h2>
        </div>
        {/* bottom */}
        <div className="p-5 my-6 sm:p-0 flex justify-evenly items-center gap-8 flex-wrap">
          {/* card */}
          <div class="flex justify-center cursor-default ">
            <div class="rounded-xl shadow-lg bg-white max-w-xs">
              <Image
                src={sd}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="Screenshot"
                layout="responsive"
              />

              <div class="p-4">
                <h5 class="text-gray-900 text-2xl font-bold mb-2">
                  Support Desk
                </h5>

                <div className="flex ">
                  <div className="px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]">
                    MERN
                  </div>
                  <div className="px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]">
                    Full-Stack
                  </div>
                </div>

                <p class="text-gray-700 tracking-normal mb-4 mt-2">
                  An application where user can register, login, view and track
                  the status of items using tickets functionality
                </p>
                <div className="flex justify-evenly">
                  <a
                    href="https://github.com/rush33/support-desk"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImGithub className="inline text-md" /> Github
                    </span>
                  </a>

                  <a
                    href="#_"
                    target="_blank"
                    rel="noreferrer"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImLink className="inline text-md" /> Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center cursor-default ">
            <div class="rounded-xl shadow-lg bg-white max-w-xs ">
              <Image
                src={feedback}
                className="rounded-lg object-cover"
                width={"100"}
                height={"80"}
                layout="responsive"
                alt="Screenshot"
              />

              <div class="p-4">
                <h5 class="text-gray-900 text-2xl font-bold mb-2">
                  Feedback UI
                </h5>

                <div className="flex">
                  <div className="px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]">
                    React JS
                  </div>
                  <div className="px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]">
                    JSON Server
                  </div>
                </div>

                <p class="text-gray-700 tracking-normal mb-4 mt-2">
                  A UI to add and delete ratings where all data are stored and fetched from JSON Web Server
                </p>
                <div className="flex justify-evenly">
                  <a
                    href="https://github.com/rush33/feedback-app"
                    rel="noreferrer"
                    target="_blank"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImGithub className="inline text-md" /> Github
                    </span>
                  </a>

                  <a
                    href="https://feedback-app-eight-liard.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImLink className="inline text-md" /> Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center cursor-default">
            <div class="rounded-xl shadow-lg bg-white max-w-xs ">
              <Image
                src={quote}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                alt="Screenshot"
                layout="responsive"
              />

              <div class="p-4">
                <h5 class="text-gray-900 text-2xl font-bold mb-2">
                  Quote Generator
                </h5>

                <div className="flex">
                  <div className="px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]">
                    Javascript
                  </div>
                  <div className="px-2 py-0.5 border-2 border-[orange] rounded-2xl w-fit mx-0.5 text-[orange]">
                    CSS
                  </div>
                </div>

                <p class="text-gray-700 tracking-normal mb-4 mt-2">
                  A simple quote generator which fetches new quotes which can be
                  copied to clipboard.
                </p>
                <div className="flex justify-evenly">
                  <a
                    href="https://github.com/rush33/quote-generator"
                    rel="noreferrer"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                    target="_blank"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImGithub className="inline text-md" /> Github
                    </span>
                  </a>

                  <a
                    href="https://quotegen33.netlify.app/"
                    class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-yellow-50 text-[orange] inline-block"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-yellow-400 group-hover:h-full opacity-90"></span>
                    <span class="relative group-hover:text-white flex items-center gap-1">
                      <ImLink className="inline text-md" /> Preview
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
