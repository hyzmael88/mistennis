import React from 'react'
import { client, urlFor } from "../../lib/client";

function Mosaic({producto}) {
  //console.log(producto?.image)
  
  return (
    <div className='grid grid-cols-2 gap-10 w-full h-full px-4'>
      {
        producto?.image.map((img, index) =>(
          <img src={urlFor(img.asset._ref)} alt="" />
        ))
      }

    </div>
  )
}

export default Mosaic