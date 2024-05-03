"use client"
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { hadithData, hadithData2, hadithDetailsData } from "../../../public/data/data";
import SubjectCard from "./SubjectCard";
import { SlMenu } from "react-icons/sl";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookCard from "../book/BookCard";

const Subject = () => {
  return (
    <div>
      {/* mobile */}
      <div className="mb-8 md:hidden block  ">
        <div className="drawer ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="  p-4 bg-white w-full  rounded-lg items-center cursor-pointer flex gap-x-3  "
            >
              <SlMenu />
              সহিহ বুখারী
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <section className=" ">
                <Tabs>
                  <TabList>
                    <Tab>বই</Tab>
                    <Tab>অধ্যায়</Tab>
                  </TabList>

                  <TabPanel>
                    <div>
                      <div className="relative border border-[#F2F4F6]   h-[48px] flex items-center justify-center rounded-lg  ">
                        <input
                          type="text"
                          placeholder="Search For filter"
                          className="  bg-[#F2F4F6]    pd-10  rounded-lg focus:outline-0 focus:text-black h-full w-full"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4 opacity-70 absolute left-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className=" mt-5">
                        {hadithData?.map((h) => (
                          <BookCard key={h?.hadith} h={h} />
                        ))}
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div>
                      <div className="relative border border-[#F2F4F6]   h-[48px] flex items-center justify-center rounded-lg  ">
                        <input
                          type="text"
                          placeholder="Search For filter"
                          className=" border-none bg-[#F2F4F6]    pd-10  rounded-lg focus:outline-0 focus:text-black h-full w-full"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4 opacity-70 absolute left-3"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className=" mt-5">
                        {hadithData2?.map((h) => (
                          <BookCard key={h?.hadith} h={h} />
                        ))}
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </section>
            </ul>
          </div>
        </div>
      </div>
      {/* desktop */}
      <section className="overflow-y-auto h-[100vh]">
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
        <div>
          {hadithDetailsData?.map((d) => (
            <SubjectCard key={d.number} d={d} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subject;
