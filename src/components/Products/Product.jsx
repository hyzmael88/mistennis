import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/client";

function Product({ product }) {
  console.log(product);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    client
      .fetch(`*[_id == "${product.category._ref}"]`)
      .then((category) => setCategory(category));
  }, [product.category._ref]);
  return (
    <div className="flex flex-col w-full h-full border-[0.5px] border-gray-100 ">
      <div className="w-[90%]">

      <img
        src={urlFor(product?.image)}
        alt="snkr"
        className="w-[250px] h-[150px] mt-24"
      />
      <div className="flex flex-row w-full h-full ">
        <div className="flex flex-col w-full">
          <p className="mt-6 text-sm text-gray-400 ">
            {category && category[0] && category[0].title}
          </p>
          <div className="flex flex-row w-full justify-between">
          <p className="font-semibold uppercase w-[120px]">{product?.name}</p>
          <p className="font-semibold uppercase"> ${product?.price}</p>
        </div>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Product;
