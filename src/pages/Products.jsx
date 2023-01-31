import React from 'react'
import Product from '../components/Products/Product'
import Sidebar from '../components/Products/Sidebar'
import {AppContext} from '../context/StateContext'

function Products() {
      const {products} = AppContext()
      console.log(products)

  return (
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
  )
}

export default Products