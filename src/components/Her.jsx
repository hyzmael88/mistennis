import React from "react";
import Herimg from "../assets/her.jpg";
import {HiArrowUpRight} from 'react-icons/hi2'
import Button from "./Button";

function Her() {
  return (
    <div className="flex flex-cols-2 w-full h-full mt-24 ">
       <div className="w-1/2">
        <img src={Herimg} alt="him" className="" />
      </div>
      <div className="flex flex-col items-center  w-1/2">
        <h3 className="text-5xl mb-8 text-left uppercase">For Her</h3>
        <p className="text-left font-medium mx-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <Button/>
      </div>
      
      
    </div>
  );
}

export default Her;
