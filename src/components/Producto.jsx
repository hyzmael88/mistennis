import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/client";

function Producto({ producto }) {
  const [category, setCategory] = useState(null);
  console.log(producto);

  useEffect(() => {
    client
      .fetch(`*[_id == "${producto.category._ref}"]`)
      .then(category => setCategory(category))
  }, [producto.category._ref]);

console.log(category)

  return (
    <div className=" mt-10 w-[250px]">
      <img src={urlFor(producto?.image)} alt="" />
     <p className="mt-6 text-sm text-gray-400 ">{category && category[0] && category[0].title}</p> 
      <div className="flex flex-row gap-8 justify-between">

      <p className="font-semibold uppercase" >{producto?.name}</p>
      <div className="grid grid-cols-1 gap-4 place-items-end">

      <p className="font-semibold uppercase"> ${producto?.price}</p>
      </div>
      </div>
    </div>
  );
}

export default Producto;
