import Link from "next/link";
import { FiSend } from "react-icons/fi";
import Image from "next/image";
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-md fixed z-20 border-b-2 lg:px-24">
      <div className=" navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 "
          >
            <li className="text font-medium ">
              <Link href="/#skills">
                <span className="text-lg">Skills</span>
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/#mobile">
                <span className="text-lg">Experience</span>
              </Link>
            </li>
            <li className="font-medium">
              <Link href="/#contact">
                <span className="text-lg">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="flex lg:hidden">
          <ul className="flex flex-row">
            <li className="font-medium mx-4">Services</li>
            <li className="font-medium mx-4">Experience</li>
            <li className="font-medium mx-4">About</li>
          </ul>
        </div> */}
        <Link href="/">
          <div className="hidden lg:flex">
            <Image src={Logo} width={70} height={70} responsive />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <div className="mx-4">
            <Link href="/#skills">
              <div className="relative group mx-2">
                <span className="font-medium ">Skills</span>
                <span className=" absolute left-0 -bottom-1 w-full h-1  bg-[#fff176] -z-10 group-hover:h-full group-hover:transition-all duration-150 delay-100"></span>
              </div>
            </Link>
          </div>
          <div className="mx-4">
            <Link href="/#projects">
              <div className="relative group  mx-2">
                <span className="font-medium">Projects</span>
                <span className=" absolute left-0 -bottom-1 w-full h-1  bg-[#fff176] -z-10 group-hover:h-full group-hover:transition-all duration-150 delay-100"></span>
              </div>
            </Link>
          </div>
          <div className="mx-4">
            <Link href="/#contact">
              <div className="relative group  mx-2">
                <span className="font-medium">Connect</span>
                <span className=" absolute left-0 -bottom-1 w-full h-1  bg-[#fff176] -z-10 group-hover:h-full group-hover:transition-all duration-150 delay-100"></span>
              </div>
            </Link>
          </div>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="mailto:rushadmahmed@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className="flex items-center justify-center border-2 border-black bg-[#fff176]  text-black font-medium py-2 px-4 rounded-full hover:bg-[#f5c000] cursor-pointer duration-200 delay-100">
            <FiSend className="mr-1 text-lg" />
            <span>Send a message</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
