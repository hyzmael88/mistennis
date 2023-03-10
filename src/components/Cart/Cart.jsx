import React, { useEffect, useState } from 'react'
import { AppContext } from "../../context/StateContext";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { Link } from 'react-router-dom';



function Cart({cart}) {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let aux = 0 
    for(var i = 0; i < cart?.length; i++){ 
      aux = cart[i]?.quantity + aux
    }
    setTotal(aux)
  }, [cart]) 
  
  console.log(cart)
  
    
   
  return (
    <div>
{
        cart?.length == 0 ?
        <div className='border-2 border-black ml-4 rounded-full p-4'>

          <HiOutlineShoppingBag className=' '/>
        </div>
    :
    <Link to='shopping'>
    <div className='border-2 border-black ml-4 rounded-full px-5 py-3 lg:px-4 lg:py-2'>

      <span className=''> {total}</span>
    </div>
    </Link>
      }
    </div>
    
  )
}

export default Cart