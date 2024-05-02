"use client"
import Image from "next/image";
import Link from "next/link";
import { GoBook, GoHome } from "react-icons/go";
import { TbBooks } from "react-icons/tb";
import { BiGridAlt } from "react-icons/bi";
import { CiBookmark } from "react-icons/ci";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => {
   const pathname = usePathname();
  return (
    <nav className="md:px-4 bg-white fixed bottom-0 md:absolute md:bottom-12 flex justify-evenly md:flex-col items-center md:justify-center md:space-y-7 ">
      <Link
        className="p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300 "
        href=""
      >
        <GoHome className="w-[30px] h-[30px] hover:text-[#2b9e76] transition-all duration-300 " />
      </Link>
      <Link
        className={`link ${
          pathname === "/hadith"
            ? "p-4 bg-[#2b9e76] text-white rounded-lg "
            : "p-4 hover:bg-[#f8f8f9] hover:rounded-lg transition-all duration-300"
        }`}
        href="/hadith"
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
      <div className="hidden md:block">
        <div className="w-[64px]   h-[48px] flex items-center justify-center">
          <FaHandHoldingHeart className=" mt-16 text-white bg-[#2b9e76] w-full h-full p-3 rounded-lg " />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
