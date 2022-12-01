import React from "react";
import {
  RiLinkedinBoxLine,
  RiGithubLine,
  RiMailLine,
  RiInstagramLine,
} from "react-icons/ri";
import Image from "next/image";
import dp from "../assets/dp.jpg";
import { Tooltip, Button } from "@material-tailwind/react";

const Contact = () => {
  const theme = {
    tooltip: {
      styles: {
        base: {
          bg: "bg-black",
          color: "text-white",
        },
      },
    },
  };
  return (
    <div id="contact" className="mt-24 pt-8 pb-12 mx-auto bg-[#CDD7DF]">
      <div className="w-4/5 mx-auto">
        <h2>Connect</h2>
        <p className="text-md tracking-widest uppercase text-[#5651e5] ">
          with me
        </p>
        <div className="flex justify-between items">
          <div className=" flex flex-col  justify-center">
            <div>
              <p className="my-1 font-semibold">
                🎓 Bachelor`s in Computer Applications <br />
                📍 India
              </p>
            </div>
            <div className="flex justify-around pt-4">
              <Tooltip content="LinkedIn" placement="bottom">
                <a
                  href="https://linkedin.com/in/rushad-ahmed-a952b4243"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiLinkedinBoxLine className="text-4xl text-blue-800 drop-shadow-2xl hover:text-blue-400" />
                </a>
              </Tooltip>

              <Tooltip content="Mail me" placement="bottom">
                <a
                  href="mailto:rushadmahmed@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiMailLine className="text-4xl text-red-600 drop-shadow-2xl hover:text-red-300 " />
                </a>
              </Tooltip>

              <Tooltip content="Github" placement="bottom">
                <a
                  href="https://github.com/rush33"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiGithubLine className="text-4xl text-gray-600 drop-shadow-2xl" />
                </a>
              </Tooltip>

              <Tooltip content="Instagram" placement="bottom">
                <a
                  href="https://www.instagram.com/rushdt.3"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiInstagramLine className="text-4xl text-pink-600 drop-shadow-2xl hover:text-pink-400" />
                </a>
              </Tooltip>
            </div>
          </div>
          <div>
            <Image
              src={dp}
              width="200"
              height="100"
              className="rounded-full drop-shadow-2xl"
              alt="Rushad's Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
