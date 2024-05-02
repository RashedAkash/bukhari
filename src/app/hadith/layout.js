import Book from "@/components/book/Book";
import Subject from "@/components/subject/Subject";


const layout = ({children}) => {
  return (
    <div className="grid grid-cols-12 bg-[#F2F4F6]  rounded-tl-3xl p-5">
      <div className="lg:col-span-4 mb-5 lg:mb-0  ">
        <Book />
      </div>
      <div className="lg:col-span-8 col-span-12 ">
        <Subject />
      </div>
    </div>
  );
};

export default layout;