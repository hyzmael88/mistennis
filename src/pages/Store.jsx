import React, { Fragment } from 'react'
import Product from '../components/Store/Product'
import Sidebar from '../components/Store/Sidebar'
import {AppContext} from '../context/StateContext'

function Store() {
      const {products} = AppContext()
      

  return (
    <Fragment>
    <div className='w-full flex flex-row justify-end mt-4 pr-6 cursor-pointer '>
        <span className='uppercase'>sort by:&nbsp;</span>
        <span> Hight price</span>
    </div>
    <div className='flex flex-row w-full h-full'>
        
            <Sidebar/>
        
        <div className='grid grid-cols-3 w-full'>
            {
            products.map((product, index) =>(

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