import React from "react";
import Size from "./Size";

function Info({ producto }) {
    console.log(producto)
  return (
    <div className="w-full h-full flex flex-col">
        <div className="flex flex-row w-full h-full justify-between items-center">

      <div className="uppercase font-bold w-[300px]">{producto?.name}</div>
      <div className="uppercase font-bold ">${producto?.price}</div>
      
        </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center ">
          <p className="uppercase font-semibold text-sm">size</p>
          <p className="text-4xl cursor-pointer">-</p>
        </div>

        <Size />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center ">
          <p className="uppercase font-semibold text-sm">Description</p>
          <p className="text-4xl cursor-pointer">-</p>
        </div>

    {producto?.description}
      </div>
      <div className="w-full">
        <button className="w-full h-10 bg-black text-white uppercase font-bold">
            Add to bag
        </button>
      </div>
    </div>
  );
}

export default Info;
