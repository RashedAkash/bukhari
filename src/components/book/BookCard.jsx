import Image from "next/image";
import Book from "./Book";


const BookCard = ({h}) => {
  return (
    <div>
      
      {/* //desktop */}
      <div className="mb-4 md:mb-0">
        <div className="flex group p-4 cursor-pointer  hover:bg-[#ebfcf6] bg-white rounded-2xl h-[6.25rem] gap-5 items-center  ">
          <div className="custom-shape relative transition-all duration-300 ease-in-out group-hover:bg-[#2b9e76]  ">
            <span className="absolute top-1/2 translate-y-[-50%] translate-x-[-50%] left-1/2 text-[#80888f] transition-all duration-300 ease-in-out group-hover:text-white">
              {h?.logo}
            </span>
          </div>
          <div>
            <h2 className=" text-[#000] text-[1.05rem]">{h?.title}</h2>
            <p className=" text-[#40404099] text-[.9rem]">{h?.hadith}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;