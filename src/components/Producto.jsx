import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/client";


function Producto({ producto }) {
  const [category, setCategory] = useState(null);
 

  useEffect(() => {
    client
      .fetch(`*[_id == "${producto.category._ref}"]`)
      .then(category => setCategory(category))
  }, [producto.category._ref]);


  return (
    <div className=" mt-10 w-[500px] mr-10 cursor-pointer">
      <img src={urlFor(producto?.image)} alt="snkr" className="w-[250px] h-[150px]" />
     <p className="mt-6 text-sm text-gray-400 ">{category && category[0] && category[0].title}</p> 
      <div className="flex flex-row gap-8 justify-between">

      <p className="font-semibold uppercase w-[250px]" >{producto?.name}</p>
      <div className="grid grid-cols-1 gap-4 place-items-end">

      <p className="font-semibold uppercase"> ${producto?.price}</p>
      </div>
      </div>
    </div>
  );
}

export default Producto;