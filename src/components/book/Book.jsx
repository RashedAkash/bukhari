"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { hadithData } from "../../../public/data/data";
import BookCard from "./BookCard";
const Book = () => {
  return (
    <div className="bg-white rounded-lg w-[350px]">
      <Tabs>
        <TabList>
          <Tab>বই</Tab>
          <Tab>অধ্যায়</Tab>
        </TabList>

        <TabPanel>
          <div>
            <div className="relative  w-[318px] h-[48px] flex items-center justify-center rounded-lg  ">
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
            <div>
              {
                hadithData?.map(h=><BookCard key={h?.hadith} h={h} />)
              }
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Book;
