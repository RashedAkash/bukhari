import Book from "@/components/book/Book";
import Subject from "@/components/subject/Subject";


const layout = ({children}) => {
  return (
    <div className="grid grid-cols-12 bg-[#F2F4F6]  rounded-tl-3xl p-5">
      <div className="col-span-4 ">
        <Book />
      </div>
      <div className="col-span-8 ml-5">
        <Subject />
      </div>
    </div>
  );
};

export default layout;