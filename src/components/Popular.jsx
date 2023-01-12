import React from 'react'
import {HiArrowUpRight} from 'react-icons/hi2'


function Popular() {
  return (
    <div>

   
    <div className='flex flex-row w-full h-full mt-20 justify-between items-center '>
        <h3 className='text-6xl uppercase'>Popular</h3>
        <div>
        <span className='flex flex-row border-b-[1px] border-gray-900 uppercase font-medium cursor-pointer'>
            show all &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs"/>
        </span>
        </div>
        
    </div>
    <p>carrousel infinito</p>
    </div>
  )
}

export default Popular