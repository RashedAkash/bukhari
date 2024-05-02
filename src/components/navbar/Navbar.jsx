import Container from "../container/Container";
import ContainerFulid from "../containerFulid/ContainerFulid";
import { TbBooks } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  return (
    <ContainerFulid>
      <Container>
        <div className="">
          {/* mobile menu */}
          <div className="flex  md:hidden justify-between items-center h-[80px] px-4">
            <div className="flex items-center">
              <div className=" ">
                <Image
                  src="/image/home-logo.png"
                  alt="logo"
                  width={44}
                  height={44}
                  className="mr-[18px] "
                />
              </div>
              <div className="ml-2">
                <h2 className="text-[14px] font-bold   text-[#1fa471] ">
                  আল হাদিস
                </h2>
              </div>
            </div>
            <div className="    flex items-center justify-center rounded-lg  ">
              <div
                className="bg-[#ECEEF0] w-10 h-10
            flex items-center justify-center rounded-lg "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className=" w-4 h-4 opacity-70 "
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className=" w-10 h-10 bg-[#207759]
            flex items-center justify-center rounded-lg ml-6 "
              >
                <svg
                  className=" fill-white w-full h-full"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.2693 12.3894C21.818 10.5369 19.1817 10.5369 18.7304
              12.3894C18.6631 12.6678 18.5309 12.9263 18.3448 13.144C18.1586
              13.3616 17.9237 13.5322 17.6591 13.642C17.3946 13.7517 17.1078
              13.7974 16.8223 13.7753C16.5367 13.7533 16.2604 13.6642 16.0158
              13.5152C14.3865 12.5224 12.5221 14.3868 13.5149 16.0161C14.1561
              17.0682 13.5873 18.441 12.3903 18.7319C10.5366 19.182 10.5366
              21.8195 12.3903 22.2684C12.6687 22.3358 12.9273 22.4681 13.145
              22.6544C13.3626 22.8407 13.5332 23.0758 13.6428 23.3405C13.7524
              23.6052 13.798 23.892 13.7757 24.1777C13.7535 24.4633 13.6641
              24.7397 13.5149 24.9842C12.5221 26.6135 14.3865 28.4779 16.0158
              27.4851C16.2603 27.3359 16.5367 27.2465 16.8223 27.2243C17.108
              27.202 17.3948 27.2476 17.6595 27.3572C17.9242 27.4668 18.1593
              27.6374 18.3456 27.855C18.5319 28.0727 18.6642 28.3313 18.7316
              28.6097C19.1817 30.4634 21.8192 30.4634 22.2681 28.6097C22.3358
              28.3314 22.4681 28.073 22.6545 27.8555C22.8408 27.638 23.0759
              27.4675 23.3405 27.358C23.6051 27.2484 23.8919 27.2028 24.1774
              27.2249C24.463 27.247 24.7393 27.3361 24.9839 27.4851C26.6132
              28.4779 28.4776 26.6135 27.4848 24.9842C27.3359 24.7396 27.2467
              24.4633 27.2246 24.1777C27.2025 23.8922 27.2481 23.6054 27.3577
              23.3408C27.4672 23.0762 27.6377 22.8411 27.8552 22.6548C28.0727
              22.4684 28.3311 22.336 28.6094 22.2684C30.4631 21.8183 30.4631
              19.1808 28.6094 18.7319C28.331 18.6645 28.0724 18.5322 27.8547
              18.3459C27.6371 18.1596 27.4665 17.9245 27.3569 17.6598C27.2473
              17.3951 27.2017 17.1083 27.224 16.8226C27.2462 16.537 27.3356
              16.2606 27.4848 16.0161C28.4776 14.3868 26.6132 12.5224 24.9839
              13.5152C24.7394 13.6644 24.463 13.7538 24.1774 13.776C23.8917
              13.7983 23.6049 13.7527 23.3402 13.6431C23.0755 13.5335 22.8404
              13.3629 22.6541 13.1453C22.4678 12.9276 22.3355 12.669 22.2681
              12.3906L22.2693 12.3894ZM20.4999 24.0627C21.4447 24.0627 22.3508
              23.6874 23.019 23.0193C23.6871 22.3511 24.0624 21.445 24.0624
              20.5001C24.0624 19.5553 23.6871 18.6492 23.019 17.981C22.3508
              17.3129 21.4447 16.9376 20.4999 16.9376C19.555 16.9376 18.6489
              17.3129 17.9807 17.981C17.3126 18.6492 16.9373 19.5553 16.9373
              20.5001C16.9373 21.445 17.3126 22.3511 17.9807 23.0193C18.6489
              23.6874 19.555 24.0627 20.4999 24.0627V24.0627Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        {/* navbar */}
        <div className="md:flex  hidden justify-between items-center h-[80px] px-4">
          <div className="flex">
            <div className=" ">
              <Image
                src="/image/home-logo.png"
                alt="logo"
                width={44}
                height={44}
                className="mr-[18px] "
              />
            </div>
            <div className="ml-2">
              <h2 className="text-black font-bold text-xl">হাদিস সমূহ</h2>
              <p className="text-sm text-[#404040]">
                হাদিস পড়ুন শিখুন এবং জানুন
              </p>
            </div>
          </div>
          <div className="flex items-center gap-20">
            <div className="relative bg-[#ECEEF0] w-[270px] h-[52px] flex items-center justify-center rounded-lg  ">
              <input
                type="text"
                placeholder="Search Hadith"
                className=" border-[#DEE1E5]   border-2 pd-10  rounded-lg focus:outline-0 focus:text-black h-full w-full"
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
            <div
              className=" w-10 h-10 bg-[#207759]
            flex items-center justify-center rounded-lg  "
            >
              <svg
                className=" fill-white w-full h-full"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.2693 12.3894C21.818 10.5369 19.1817 10.5369 18.7304
              12.3894C18.6631 12.6678 18.5309 12.9263 18.3448 13.144C18.1586
              13.3616 17.9237 13.5322 17.6591 13.642C17.3946 13.7517 17.1078
              13.7974 16.8223 13.7753C16.5367 13.7533 16.2604 13.6642 16.0158
              13.5152C14.3865 12.5224 12.5221 14.3868 13.5149 16.0161C14.1561
              17.0682 13.5873 18.441 12.3903 18.7319C10.5366 19.182 10.5366
              21.8195 12.3903 22.2684C12.6687 22.3358 12.9273 22.4681 13.145
              22.6544C13.3626 22.8407 13.5332 23.0758 13.6428 23.3405C13.7524
              23.6052 13.798 23.892 13.7757 24.1777C13.7535 24.4633 13.6641
              24.7397 13.5149 24.9842C12.5221 26.6135 14.3865 28.4779 16.0158
              27.4851C16.2603 27.3359 16.5367 27.2465 16.8223 27.2243C17.108
              27.202 17.3948 27.2476 17.6595 27.3572C17.9242 27.4668 18.1593
              27.6374 18.3456 27.855C18.5319 28.0727 18.6642 28.3313 18.7316
              28.6097C19.1817 30.4634 21.8192 30.4634 22.2681 28.6097C22.3358
              28.3314 22.4681 28.073 22.6545 27.8555C22.8408 27.638 23.0759
              27.4675 23.3405 27.358C23.6051 27.2484 23.8919 27.2028 24.1774
              27.2249C24.463 27.247 24.7393 27.3361 24.9839 27.4851C26.6132
              28.4779 28.4776 26.6135 27.4848 24.9842C27.3359 24.7396 27.2467
              24.4633 27.2246 24.1777C27.2025 23.8922 27.2481 23.6054 27.3577
              23.3408C27.4672 23.0762 27.6377 22.8411 27.8552 22.6548C28.0727
              22.4684 28.3311 22.336 28.6094 22.2684C30.4631 21.8183 30.4631
              19.1808 28.6094 18.7319C28.331 18.6645 28.0724 18.5322 27.8547
              18.3459C27.6371 18.1596 27.4665 17.9245 27.3569 17.6598C27.2473
              17.3951 27.2017 17.1083 27.224 16.8226C27.2462 16.537 27.3356
              16.2606 27.4848 16.0161C28.4776 14.3868 26.6132 12.5224 24.9839
              13.5152C24.7394 13.6644 24.463 13.7538 24.1774 13.776C23.8917
              13.7983 23.6049 13.7527 23.3402 13.6431C23.0755 13.5335 22.8404
              13.3629 22.6541 13.1453C22.4678 12.9276 22.3355 12.669 22.2681
              12.3906L22.2693 12.3894ZM20.4999 24.0627C21.4447 24.0627 22.3508
              23.6874 23.019 23.0193C23.6871 22.3511 24.0624 21.445 24.0624
              20.5001C24.0624 19.5553 23.6871 18.6492 23.019 17.981C22.3508
              17.3129 21.4447 16.9376 20.4999 16.9376C19.555 16.9376 18.6489
              17.3129 17.9807 17.981C17.3126 18.6492 16.9373 19.5553 16.9373
              20.5001C16.9373 21.445 17.3126 22.3511 17.9807 23.0193C18.6489
              23.6874 19.555 24.0627 20.4999 24.0627V24.0627Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </ContainerFulid>
  );
};

export default Navbar;
