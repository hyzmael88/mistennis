import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Info from "../components/Product/Info";
import Mosaic from "../components/Product/Mosaic";
import Recomendations from "../components/Product/Recomendations";
import { AppContext } from "../context/StateContext";

function Product() {
  const { productSlug } = useParams();
  const { product, getProduct } = AppContext();

  useEffect(() => {
    getProduct(productSlug);
  }, [productSlug]);


  return (
    <Fragment>
      <div className="w-full h-full flex flex-col lg:flex-row mt-16">
        <div className="w-full lg:w-2/3">
          <Mosaic 
          producto = {product[0]}
          />
        </div>
        <div className="w-full lg:w-1/3">
          <Info
          producto = {product[0]}
          />
        </div>
      </div>
      <div className="w-full h-full">
        <Recomendations />
      </div>
    </Fragment>
  );
}

export default Product;
