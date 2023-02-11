import React from "react";
import { AppContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";


function Shopping() {
  const { cart } = AppContext();
  console.log(cart)

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-7xl">Shopping bag</h1>
      </div>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col w-2/3 pl-8">Form</div>
        <div className="flex flex-col w-1/3">
          <h3 className="uppercase font-bold">Summary</h3>
          {cart.map((product) => (
            <div className="flex flex-row w-full h-full">
                <div className="flex flex-col w-1/3 h-full">
                    <img src={urlFor(product?.image[0])}
        alt="snkr" />
                </div>
                <div className="flex flex-col w-2/3 h-full">
                    <p>{product?.name}</p>
                    <p>Quantity: </p>
                    {
                        product.productSizes.map((size) => (
                            
                            <p>Size: {size[0]?.size}</p>
                        ))
                    }
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shopping;
