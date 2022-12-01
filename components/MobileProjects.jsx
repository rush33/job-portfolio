import sd from "../public/assets/sd.png";
import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImGithub, ImLink } from "react-icons/im";
import feedback from "../public/assets/feedback.png";
import quote from "../public/assets/quote.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MobileProjects = () => {
  return (
    <div id="mobile" className="container w-4/5 mx-auto mt-20 lg:hidden">
      {/* top */}
      <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
        Works &
      </p>
      <h2>Projects</h2>
      <div className="mt-12 p-5 gap-12 sm:flex flex-wrap justify-center w-full mx-auto ">
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
            <div class="flex justify-center ">
              <div class="rounded-xl shadow-lg bg-white max-w-xs">
                <Image
                  src={sd}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />

                <div class="p-4">
                  <h5 class="text-gray-900 text-2xl font-bold mb-2">
                    Support Desk
                  </h5>

                  <div className="flex">
                    <div className="px-2 py-0.5 border-2 border-[#5651e5] rounded-2xl w-fit mx-0.5 text-[#5651e5]">
                      MERN
                    </div>
                    <div className="px-2 py-0.5 border-2 border-[#5651e5] rounded-2xl w-fit mx-0.5 text-[#5651e5]">
                      Full-Stack
                    </div>
                  </div>

                  <p class="text-gray-700 tracking-normal mb-4 mt-2">
                    An application where user can register, login, view and
                    track the status of items using tickets functionality
                  </p>
                  <div className="flex justify-evenly">
                    <a
                      href="https://github.com/rush33/support-desk"
                      class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#5651e5] inline-block"
                      target="_blank"
                    >
                      <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                      <span class="relative group-hover:text-white flex items-center gap-1">
                        <ImGithub className="inline text-md" /> Github
                      </span>
                    </a>

                    <a
                      href=""
                      class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#5651e5] inline-block"
                      target="_blank"
                    >
                      <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                      <span class="relative group-hover:text-white flex items-center gap-1">
                        <ImLink className="inline text-md" /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div class="flex justify-center border-3 border-red-600 ">
              <div class="rounded-xl shadow-lg bg-white max-w-xs ">
                <Image
                  src={quote}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />

                <div class="p-4">
                  <h5 class="text-gray-900 text-2xl font-bold mb-2">
                    Quote Generator
                  </h5>

                  <div className="flex">
                    <div className="px-2 py-0.5 border-2 border-[#5651e5] rounded-2xl w-fit mx-0.5 text-[#5651e5]">
                      Javascript
                    </div>
                    <div className="px-2 py-0.5 border-2 border-[#5651e5] rounded-2xl w-fit mx-0.5 text-[#5651e5]">
                      CSS
                    </div>
                  </div>

                  <p class="text-gray-700 tracking-normal mb-4 mt-2">
                    A simple quote generator which fetches new quotes which can
                    be copied to clipboard.
                  </p>
                  <div className="flex justify-evenly">
                    <a
                      href=""
                      class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#5651e5] inline-block"
                      target="_blank"
                    >
                      <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                      <span class="relative group-hover:text-white flex items-center gap-1">
                        <ImGithub className="inline text-md" /> Github
                      </span>
                    </a>

                    <a
                      href="https://quotegen33.netlify.app/"
                      class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#5651e5] inline-block"
                      target="_blank"
                    >
                      <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                      <span class="relative group-hover:text-white flex items-center gap-1">
                        <ImLink className="inline text-md" /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="flex justify-center ">
              <div class="rounded-xl shadow-lg bg-white max-w-xs ">
                <Image
                  src={feedback}
                  className="rounded-lg object-cover"
                  width={"100"}
                  height={"80"}
                  layout="responsive"
                />

                <div class="p-4">
                  <h5 class="text-gray-900 text-2xl font-bold mb-2">
                    Feedback UI
                  </h5>

                  <div className="flex">
                    <div className="px-2 py-0.5 border-2 border-[#5651e5] rounded-2xl w-fit mx-0.5 text-[#5651e5]">
                      React JS
                    </div>
                    <div className="px-2 py-0.5 border-2 border-[#5651e5] rounded-2xl w-fit mx-0.5 text-[#5651e5]">
                      JSON Server
                    </div>
                  </div>

                  <p class="text-gray-700 tracking-normal mb-4 mt-2">
                    A feedback interface where user can give ratings, write
                    reviews and view the average ratings.
                  </p>
                  <div className="flex justify-evenly">
                    <a
                      href="https://github.com/rush33/feedback-app"
                      class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#5651e5] inline-block"
                      target="_blank"
                    >
                      <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                      <span class="relative group-hover:text-white flex items-center gap-1">
                        <ImGithub className="inline text-md" /> Github
                      </span>
                    </a>

                    <a
                      href="#_"
                      class="px-3 py-2 relative rounded group overflow-hidden font-medium bg-purple-50 text-[#5651e5] inline-block"
                    >
                      <span class=" absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                      <span class="relative group-hover:text-white flex items-center gap-1">
                        <ImLink className="inline text-md" /> Preview
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileProjects;
