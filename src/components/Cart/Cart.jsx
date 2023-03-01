import React, { useState } from 'react'
import { AppContext } from "../../context/StateContext";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { Link } from 'react-router-dom';



function Cart({cart}) {
    
   
  return (
    <div>
{
        cart?.length == 0 ?
        <div className='border-2 border-black ml-4 rounded-full p-4'>

          <HiOutlineShoppingBag className=' '/>
        </div>
    :
    <Link to='shopping'>
    <div className='border-2 border-black ml-4 rounded-full px-4 py-2'>

      <span className=''> {cart?.length}</span>
    </div>
    </Link>
      }
    </div>
    
  )
}

export default Cart