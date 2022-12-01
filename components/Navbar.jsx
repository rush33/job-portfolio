import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-md fixed">
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost normal-case text-xl">Rushad's Portfolio</Link>
        </div>
        
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-semibold">
            <Link href="/#skills">
              <li className="mx-3">Skills</li>
            </Link>

            <Link href="/#projects">
              <li className="mx-3">Projects</li>
            </Link>

            <Link href="/#contact">
              <li className="mx-3">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>

    // <div className="fixed w-full backdrop-blur-md shadow-md h-14">
    //   <div className="flex justify-between items-center w-full h-full px-12 sm:border-2 2xl:px-16 ">
    //     <Image
    //       src="/../public/assets/react.png"
    //       width="50"
    //       height="50"
    //       className="hidden md:flex"
    //     />

    //     <div>
    //       <ul className="flex md:mx-auto">

    //       </ul>
    //     </div>
    //     {/* <div className="md:hidden">
    //         <AiOutlineMenu size={25} />
    //     </div> */}
    //   </div>
    // </div>
  );
};

export default Navbar;

