import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import Entries from "./Entries";

function Blog() {
  return (
    <div>
      <div className="flex flex-row w-full h-full mt-20 justify-between items-center ">
        <h3 className="text-4xl lg:text-6xl uppercase ml-4 lg:ml-0">Blog</h3>
        <div>
          <span className="hidden lg:flex flex-row border-b-[1px] border-gray-900 uppercase font-medium cursor-pointer">
            show all &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
        </div>
      </div>
    <Entries/>
    </div>
  );
}

export default Blog;
