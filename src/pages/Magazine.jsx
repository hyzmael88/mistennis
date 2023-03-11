import React, { useEffect, useState } from 'react'
import { client, urlFor } from "../lib/client";
import ColorThief from 'colorthief';

import { AppContext } from "../context/StateContext";

function Magazine() {
    const { getPosts, posts } = AppContext();

    useEffect(() => {
      getPosts()
    
    }, [])
    
    


    const [entries, setEntries] = useState([])
    const [fondo, setFondo] = useState('')

    function cambiarFondo(event) {
        console.log("entre")
        const colorThief = new ColorThief();
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
          const colorDominante = colorThief.getColor(img);
          const hex = '#' + ('000000' + (colorDominante[0] << 16 | colorDominante[1] << 8 | colorDominante[2]).toString(16)).slice(-6);
          console.log(hex)
          setFondo(hex);
        }
        img.src = event.target.src;
      }
      console.log(`bg-[${fondo}]`)
      
      

  return (
    <div className='flex flex-col w-full h-full'>
        <div className='text-8xl font-medium text-center mb-14'>
        Magazine
        </div>
        <div className='grid grid-cols-3 place-items-center w-full h-full px-8'>
            {
                posts.map((item, index) =>(
                    <div className='relative w-full h-[250px]'>
                       {
                        fondo==''?
                        <img src={urlFor(item?.mainImage.asset._ref)}  className={`w-full h-full object-cover absolute`} onMouseOver={cambiarFondo}/>
                        :
                    <div className={`bg-[${fondo}] w-full h-full absolute z-10`}></div>
                    }
                        
                        
                    </div>
                ))
            }

        </div>
        </div>
  )
}

export default Magazine