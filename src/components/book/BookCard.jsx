import Image from "next/image";


const BookCard = ({h}) => {
  return (
    <div
      class="p-4 flex  group cursor-pointer  false hover:bg-[#ebfcf6] bg-white  hover:dark:bg-darkchapter-list-hover dark:bg-hadith-dark-card justify-between items-center  h-[6.25rem]"
      className="flex group p-4 cursor-pointer  hover:bg-[#ebfcf6] bg-white rounded-2xl h-[6.25rem] gap-5 items-center"
    >
      <div className="custom-shape transition-all duration-300 ease-in-out group-hover:bg-[#2b9e76]  "></div>
      <div>
        <h2>{h?.title}</h2>
        <p>সর্বমোট হাদিস - {h?.hadith}</p>
      </div>
    </div>
  );
};

export default BookCard;