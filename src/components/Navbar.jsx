import React, { useEffect, useState } from 'react'
import {FiMenu, FiSearch} from 'react-icons/fi'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { AppContext } from "../context/StateContext";
import Cart from './Cart/Cart';



function Navbar() {
  
  const {facebookUser} = AppContext()
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log(facebookUser)
    const storedData = localStorage.getItem("facebookUser");
   setUser( storedData ? JSON.parse(storedData) : null) 
  
  }, [facebookUser])
  
  

  
  return (
    <div>

    
    <div className='hidden lg:flex lg:flex-row h-20 w-full justify-between items-center border-b-2 drop-shadow-xl font-semibold '>
      <Link to='/'>
        <div className='ml-4 text-xl'>
            Mis Tennis
        </div>
        </Link>
        <div className='flex flex-row uppercase'>
          <span className=''>For Her</span>
          <span className='ml-4'>For Him</span>
          <span className='ml-4'>Sale</span>
          <span className='ml-4'>Magazine</span>
          
        </div>
        <div className='flex flex-row items-center mr-8'>
          <div className='flex flex-row border-b-2 border-gray-400'>
            <span className='mr-2'>SEARCH</span>
            <FiSearch className='mt-1' />
          </div>
          {
            user?
            <p className='flex flex-row items-center justify-center'>
               <img
        src={user?.picture ? 
        user.picture
        :
        user.picture.data.url
        }
        alt="Profile picture"
        className="w-[30px] h-[30px]  rounded-full ml-4 mt-1 mr-3"
      />
              {user.name}</p>
            :
            <Link to='auth'>
          <div className='ml-4 uppercase cursor-pointer'>
            Iniciar Sesion
          </div>
          </Link>
          }
          
          <div >
            <Cart/>
          </div>
            {/* <FiMenu className='text-3xl'/> */}
        </div>
    </div>

    <div className='flex flex-row h-20 w-full justify-between items-center border-b-2 drop-shadow-xl font-semibold lg:hidden'>
        <div className='ml-4 text-xl'>
            Mis Tennis
        </div>
        
        <div className='flex flex-row items-center mr-4'>
          
          <div className='border-2 border-black ml-4 rounded-full p-3.5'>
          <HiOutlineShoppingBag className=' text-2xl '/>
          </div>
          <div className='border-2 border-black ml-4 rounded-full p-2.5'>
              
             <FiMenu className='text-3xl'/>
            
          </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar