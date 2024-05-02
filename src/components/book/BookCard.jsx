import Image from "next/image";


const BookCard = ({h}) => {
  return (
    <div className="flex group p-4 cursor-pointer  hover:bg-[#ebfcf6] bg-white rounded-2xl h-[6.25rem] gap-5 items-center  ">
      <div className="custom-shape transition-all duration-300 ease-in-out group-hover:bg-[#2b9e76]  "></div>
      <div>
        <h2 className=" text-[#000] text-[1.05rem]">{h?.title}</h2>
        <p className=" text-[#40404099] text-[.9rem]">
          সর্বমোট হাদিস - {h?.hadith}
        </p>
      </div>
    </div>
  );
};

export default BookCard;