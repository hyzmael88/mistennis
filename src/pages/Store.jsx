import React, { Fragment, useState } from 'react'
import Product from '../components/Store/Product'
import Sidebar from '../components/Store/Sidebar'
import {AppContext} from '../context/StateContext'
import Dropdown from '../components/Store/Dropdown'

function Store() {
      const {filteredProducts} = AppContext()

      const [showMenu, setShowMenu] = useState(false)
      const toggleMenu = () => setShowMenu(!showMenu)

      
  return (
    <Fragment>
    <div className='w-full flex flex-row justify-end mt-4 pr-6 cursor-pointer items-center relative '>
        <span className='uppercase'>sort by:&nbsp;</span>
        <Dropdown/>
        
        
    </div>
    <div className='flex flex-row w-full h-full'>
        
            <Sidebar/>
        
        <div className='grid grid-cols-3 w-full'>
            {
            filteredProducts.map((product, index) =>(

                <Product
                key={product._id}
                product = {product}
                />
            ))
            }
        </div>
    </div>
    </Fragment>
  )
}

export default Store