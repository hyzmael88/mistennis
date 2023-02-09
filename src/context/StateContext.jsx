import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");

  console.log("categoria seleccionada", selectedCategory);

  const getProducts = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
    const productsWMinMax = products?.map((product) => {
      const minPrice = Math.min(...product.sizes.map((size) => size.price));
      //Math.min le puedes dar una serie de numeros y te regresa el minimo
      const maxPrice = Math.max(...product.sizes.map((size) => size.price));
      return { ...product, minPrice, maxPrice };
    });

    setProducts(productsWMinMax);
  };

  const getProduct = async (productSlug) => {
    console.log(productSlug);
    const query = `*[_type == "product" && slug.current == $productSlug]`;
    const params = { productSlug };
    const product = await client.fetch(query, params);
    setProduct(product);
  };
  const getPosts = async () => {
    const query = '*[_type == "blogPost"]';
    const posts = await client.fetch(query);
    setPosts(posts);
  };
  const getCategories = async () => {
    const query = '*[_type == "category"]';
    const categories = await client.fetch(query);
    setCategories(categories);
  };
  const getGenders = async () => {
    const query = '*[_type == "gender"]';
    const genders = await client.fetch(query);
    setGenders(genders);
  };

  useEffect(() => {
    getProducts();
    getPosts();
    getCategories();
    getGenders();
  }, []);

  useEffect(() => {
    let filteredProducts = [...products];

    if (selectedCategory !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category._ref === selectedCategory
      );
    }

    if (selectedGender !== "All") {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender._ref === selectedGender
      );
    }
    console.log(filteredProducts);
    setFilteredProducts(filteredProducts);
  }, [selectedCategory, selectedGender, products]);

  return (
    <StateContext.Provider
      value={{
        products,
        getProducts,
        filteredProducts,
        posts,
        getPosts,
        categories,
        setCategories,
        genders,
        setGenders,
        product,
        setProduct,
        getProduct,
        selectedCategory,
        setSelectedCategory,
        selectedGender,
        setSelectedGender,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export function AppContext() {
  return useContext(StateContext);
}
