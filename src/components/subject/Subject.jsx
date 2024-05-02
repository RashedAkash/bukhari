import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";

const Subject = () => {
  return (
    <section>
      <div
        className="h-14 px-5 py-4 gap-1 flex w-full items-center 
    bg-[#FAFBFB] dark:bg-hadith-dark-card rounded-t-xl text-[#667085] 
     text-sm border-b-2 border-b-[#ECEEF0] 
     cursor-pointer "
      >
        <h1>
          <TbBooks className="text-2xl" />
        </h1>
        <h1>
          <FaAngleRight />
        </h1>
        <h1>Bukhari</h1>
        <h1>
          <FaAngleRight />
        </h1>
        <p>1</p>
      </div>
      <div className=" h-26 px-5 py-6 bg-white rounded-b-xl md-max:rounded-t-xl sm-max:py-5 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div>
            <Image src="/image/books.png" alt="img" width={42} height={35} />
          </div>
          <div>
            <h1 className="mb-1 text-[1.50rem] text-[#000]">সহিহ বুখারী</h1>
            <p className="text-[.9rem] text-[#000]">সর্বমোট হাদিস - ৭৫৬৩</p>
          </div>
        </div>
        <div>
          <h1 className="text-[1.5rem] text-[#000]">صحيح البخاري</h1>
        </div>
      </div>

      <div class="flex items-center gap-x-4 bg-white dark:bg-hadith-dark-card rounded-xl px-5 py-5 w-full my-4 ">
        <h1 className=" flex items-center justify-center bg-[#2b9e76] p-4 text-white w-[42.34px] h-10 rounded-xl  font-medium leading-6 ">
          ১
        </h1>
        <p className=" text-xl leading-7  ">ওহীর সূচনা অধ্যায়</p>
      </div>
      <div className="bg-white  my-4 px-5 py-6 rounded-xl ">
        <div class="flex items-center gap-x-3 ">
          <div>
            <Image src="/image/book.svg" alt="img" width={32} height={32} />
          </div>
          <div>
            <h1 class=" flex items-center text-[17px] font-semibold leading-5 ">
              ১/১. অধ্যায়ঃ
            </h1>
          </div>
        </div>
        <div>
          <h2 className=" text-base text-[#000] font-medium pt-4 pb-5 border-b border-[#ECEEF0]">
            আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে
            ওয়াহী [১] শুরু হয়েছিল।
          </h2>
          <p className=" text-base mt-5  text-[#373737]">
            এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী
            প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ
            করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Subject;
