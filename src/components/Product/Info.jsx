import React, { useState } from "react";
import Size from "./Size";

function Info({ producto }) {
  console.log(producto);

  const [productSize, setProductSize] = useState(producto?.sizes[0]);

  const handleSizeClick = (size) => {
    setProductSize(size);
  };
  console.log("el tamano que recibi", productSize);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-row w-full h-full justify-between items-center">
        <div className="uppercase font-bold w-[300px]">{producto?.name}</div>
        <div className="uppercase font-bold ">
          {productSize ? (
            <span>${productSize.price}</span>
          ) : (
            <p>${producto?.sizes[0].price}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center ">
          <p className="uppercase font-semibold text-sm">size</p>
          <p className="text-4xl cursor-pointer">-</p>
        </div>
        <div className="grid grid-cols-4 gap-y-4 place-items-center w-full">
          {producto?.sizes.map((size, index) => (
            <Size size={size} onClick={() => handleSizeClick(size)}
            productSize={productSize}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center ">
          <p className="uppercase font-semibold text-sm">Description</p>
          <p className="text-4xl cursor-pointer">-</p>
        </div>

        {producto?.description}
      </div>
      <div className="w-full">
        <button className="w-full h-10 bg-black text-white uppercase font-bold mt-4">
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default Info;
