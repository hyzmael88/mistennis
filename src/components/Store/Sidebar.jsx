import React from "react";
import {AppContext} from '../../context/StateContext'
import RadioButton from "./RadioButton";
import RangeSlider from "./RangeSlider";

function Sidebar() {
  const {categories, products} = AppContext()
  
  const sortedProductsPrice = products?.map((product) => {
  const totalSales = product.sizes.reduce(
    (acc, size) => acc + size.sales,
    0
  );
  //reduce devuelve como resultado un valor unico
  
  return { ...product, totalSales };
  
});


sortedProductsPrice.sort((a, b) => b.totalSales - a.totalSales);

  console.log(sortedProductsPrice)
  const minValue = sortedProductsPrice[0]?.minPrice
  const maxValue = sortedProductsPrice[sortedProductsPrice.length-1]?.maxPrice
  console.log(minValue, maxValue)
  

  return (
    <div className="flex flex-col w-[350px]">
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <p className="uppercase font-semibold mt-4">price range</p>
        <RangeSlider
        minValue = {minValue}
        maxValue = {maxValue}
        />
      </div>
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <p className="uppercase font-semibold mr-4">brand</p>
            <p className="uppercase text-[10px] text-gray-600 font-semibold cursor-pointer">
              show all
            </p>
          </div>
          <p className="text-4xl cursor-pointer">-</p>
        </div>
        <div className="flex flex-col">
        {
          categories.map((category, index) =>(
            <RadioButton
            key={category._id}
            category = {category}
            />

          ))
        }
        <label className="flex items-center">
            <input type="radio" className="form-radio text-indigo-600" />
            <span className="ml-2">All</span>
          </label>
        </div>
        
      </div>
      <div className="flex flex-col w-[90%] pb-6 border-b-2 ">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <p className="uppercase font-semibold mr-4">gender</p>
            
          </div>
          <p className="text-4xl cursor-pointer">-</p>
        </div>
        <div className="flex flex-col">
          <label className="flex items-center">
            <input type="radio" className="form-radio text-indigo-600" />
            <span className="ml-2">Male</span>
          </label>
          <label className="flex items-center ">
            <input type="radio" className="form-radio text-indigo-600" />
            <span className="ml-2">Female</span>
          </label>
          <label className="flex items-center ">
            <input type="radio" className="form-radio text-indigo-600" />
            <span className="ml-2">All</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
