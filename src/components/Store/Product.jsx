import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../lib/client";


function Product({ product }) {
  
  const [category, setCategory] = useState(null);
  useEffect(() => {
    client
      .fetch(`*[_id == "${product.category._ref}"]`)
      .then((category) => setCategory(category));
  }, [product.category._ref]);
  return (
    <Link to={`/products/${product.slug.current} `} className="cursor-pointer">
    
    <div className="flex flex-col justiy-center items-center w-full h-[350px] border-[1px] lg:border-[0.5px] border-gray-300 ">
      <div className="w-[90%]">

      <img
        src={urlFor(product?.image[0])}
        alt="snkr"
        className=" mt-14"
      />
      <div className="flex flex-row w-full h-full ">
        <div className="flex flex-col w-full">
          <p className="mt-6 text-sm text-gray-400 ">
            {category && category[0] && category[0].title}
          </p>
          <div className="flex flex-row w-full justify-between">
          <p className="font-semibold uppercase w-[100px]">{product?.name}</p>
          <p className="font-semibold uppercase"> ${product?.minPrice}</p>
        </div>
        </div>
        
      </div>
      </div>
    </div>
    </Link>
  );
}

export default Product;
