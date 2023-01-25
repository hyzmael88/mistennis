import React from 'react'
import {HiArrowUpRight} from 'react-icons/hi2'
import {AppContext} from '../context/StateContext'
import Producto from './Producto'


function Newseason() {
  const {products} = AppContext()
  return (
    <div>

   
    <div className='flex flex-row w-full h-full mt-20 justify-between items-center '>
        <h3 className='text-6xl uppercase'>New season</h3>
        <div>
        <span className='flex flex-row border-b-[1px] border-gray-900 uppercase font-medium cursor-pointer'>
            show all &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs"/>
        </span>
        </div>
        
    </div>
    {products?.map((product, index) =>(
    <Producto
    producto = {product}
    className="ml-10"
    />
    ))}
    </div>
  )
}

export default Newseason