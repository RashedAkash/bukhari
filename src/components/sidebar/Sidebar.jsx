import Image from 'next/image';
import Link from 'next/link';
import { GoBook, GoHome } from "react-icons/go";
import { TbBooks } from "react-icons/tb";
import { BiGridAlt } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="px-4 absolute bottom-12 flex flex-col items-center justify-center space-y-7">
      <Link
        className="p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300 "
        href=""
      >
        <GoHome className="w-[30px] h-[30px] hover:text-[#2b9e76] transition-all duration-300 " />
      </Link>
      <Link
        className="p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300"
        href=""
      >
        <TbBooks className="w-[30px] h-[30px] hover:text-[#2b9e76] transition-all duration-300 " />
      </Link>
      <Link
        className="p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300"
        href=""
      >
        <GoBook className="w-[30px] h-[30px] hover:text-[#2b9e76] transition-all duration-300 " />
      </Link>
      <Link
        className="p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300"
        href=""
      >
        <CiBookmark className="w-[30px] h-[30px] hover:text-[#2b9e76] transition-all duration-300 " />
      </Link>

      <Link
        className="p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300"
        href=""
      >
        <BiGridAlt className="w-[30px] h-[30px] hover:text-[#2b9e76] transition-all duration-300 " />
      </Link>
      <Link
        className="p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300"
        href=""
      >
        <FaTelegramPlane className="w-[30px] h-[30px] hover:text-[#2b9e76] transition-all duration-300 " />
      </Link>
      <div className="w-[64px]   h-[48px] flex items-center justify-center">
        <FaHandHoldingHeart className=" mt-16 text-white bg-[#2b9e76] w-full h-full p-3 rounded-lg " />
      </div>
    </div>
  );
};

export default Sidebar;