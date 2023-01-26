import React, { Fragment } from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function Entries() {
  return (
    <Fragment>
    {/* 1 */}
    <div className="flex flex-col  lg:flex-row lg:justify-between  w-full pb-5 mt-5 border-b-2 ">
      <div className=" flex flex-col items-center">

      <img src="/4.jpg" alt="blog-entry-img" className=" w-[90%] lg:w-[250px]" />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex flex-col mx-4 lg:mx-0 ">
          <h3 className="font-semibold text-xl lg:text-4xl mt-4 lg:mt-0">The prototype</h3>
          <p className=" w-full lg:w-[500px]  lg:mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by ...
          </p>
        </div>

        <div className="mt-4 ml-4 lg:ml-0 flex flex-row justify-between lg:mt-auto">
          <span className="flex flex-row  uppercase font-bold lg:font-medium cursor-pointer ">
            read more &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
          <span className="mr-4 text-gray-400 md:hidden">05.01.2022</span>
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-1 gap-4 place-items-end">05/01/2022</div>
    </div>
    
    {/* 2 */}
    <div className="flex flex-row justify-between w-full pb-5 mt-5 border-b-2 ">
      <img src="/4.jpg" alt="blog-entry-img" className="w-[250px]" />

      <div className="flex flex-col text-left">
        <div className="flex flex-col ">
          <h3 className="font-semibold text-4xl">The prototype</h3>
          <p className="w-[500px] mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by ...
          </p>
        </div>

        <div className="mt-auto">
          <span className="flex flex-row  uppercase font-medium cursor-pointer ">
            read more &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 place-items-end">05/01/2022</div>
    </div>
    {/* 3 */}
    <div className="flex flex-row justify-between w-full pb-5 mt-5 border-b-2 ">
      <img src="/4.jpg" alt="blog-entry-img" className="w-[250px]" />

      <div className="flex flex-col text-left">
        <div className="flex flex-col ">
          <h3 className="font-semibold text-4xl">The prototype</h3>
          <p className="w-[500px] mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by ...
          </p>
        </div>

        <div className="mt-auto">
          <span className="flex flex-row  uppercase font-medium cursor-pointer ">
            read more &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 place-items-end">05/01/2022</div>
    </div>
    {/* 4 */}
    <div className="flex flex-row justify-between w-full pb-5 mt-5 border-b-2 ">
      <img src="/4.jpg" alt="blog-entry-img" className="w-[250px]" />

      <div className="flex flex-col text-left">
        <div className="flex flex-col ">
          <h3 className="font-semibold text-4xl">The prototype</h3>
          <p className="w-[500px] mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by ...
          </p>
        </div>

        <div className="mt-auto">
          <span className="flex flex-row  uppercase font-medium cursor-pointer ">
            read more &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 place-items-end">05/01/2022</div>
    </div>
    {/* 5 */}
    <div className="flex flex-row justify-between w-full pb-5 mt-5 border-b-2 ">
      <img src="/4.jpg" alt="blog-entry-img" className="w-[250px]" />

      <div className="flex flex-col text-left">
        <div className="flex flex-col ">
          <h3 className="font-semibold text-4xl">The prototype</h3>
          <p className="w-[500px] mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by ...
          </p>
        </div>

        <div className="mt-auto">
          <span className="flex flex-row  uppercase font-medium cursor-pointer ">
            read more &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 place-items-end">05/01/2022</div>
    </div>

    </Fragment>



  );
}

export default Entries;
