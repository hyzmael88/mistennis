import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/StateContext";
import Producto from "./Producto";

function Popular() {
  const { products } = AppContext();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  console.log(products);

  const sortedProductsPopular = [...products].sort(
    (a, b) => b.sales - a.sales
  );
  console.log(sortedProductsPopular);

  return (
    <div>
      <div className="flex flex-row w-full h-full mt-20 justify-between items-center ">
        <h3 className="text-4xl ml-4 mb-16 lg:mb-0 lg:ml-0 lg:text-6xl uppercase">Popular</h3>
        <div>
        <Link to="/products">
          <span className="hidden lg:flex flex-row border-b-[1px] border-gray-900 uppercase font-medium cursor-pointer">
            show all &nbsp;
            <HiArrowUpRight className=" mt-2 text-xs" />
          </span>
          </Link>
        </div>
      </div>
      <div className="relative flex flex-row items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider"}
          className="flex flex-row  w-full h-full overflow-x-scroll  scroll-smooth scrollbar-hide ml-4 lg:ml-10 "
        >
          {sortedProductsPopular.slice(0,10).map((product, index) => (
            <Producto key={product._id} producto={product} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
      <div className="flex flex-col items-center lg:hidden">
      <Link to="/products">
        <button className=" font-semibold border-2 border-black py-2 w-[90%] uppercase">
          show all
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Popular;